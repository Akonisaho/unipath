'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ArrowLeft, Search, Heart, ChevronDown, ChevronUp, Sparkles, BookOpen } from 'lucide-react'
import toast from 'react-hot-toast'
import Link from 'next/link'
import Logo from '@/components/Logo'

const FACULTIES = ['All', 'Health Sciences', 'Engineering', 'Commerce', 'Science', 'Education', 'Humanities', 'Law', 'Arts', 'Built Environment', 'Agriculture']

export default function CoursesPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [courses, setCourses] = useState<any[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const [aps, setAps] = useState<number | null>(null)
  const [search, setSearch] = useState('')
  const [faculty, setFaculty] = useState('All')
  const [filter, setFilter] = useState<'qualify' | 'all'>('qualify')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [toggling, setToggling] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setUserId(user.id)

      const [{ data: apsData }, { data: coursesData }, { data: wishlistData }] = await Promise.all([
        supabase.from('aps_scores').select('total_aps').eq('user_id', user.id).order('calculated_at', { ascending: false }).limit(1).single(),
        supabase.from('courses').select('*, course_universities(*), course_subject_requirements(*)').eq('is_active', true).order('name'),
        supabase.from('course_interests').select('course_id').eq('user_id', user.id),
      ])

      if (apsData) setAps(apsData.total_aps)
      if (coursesData) setCourses(coursesData)
      if (wishlistData) setWishlist(wishlistData.map((w: any) => w.course_id))
      setLoading(false)
    }
    load()
  }, [])

  const toggleWishlist = async (courseId: string) => {
    if (!userId || toggling) return
    setToggling(courseId)
    const inWishlist = wishlist.includes(courseId)
    try {
      if (inWishlist) {
        await supabase.from('course_interests').delete().eq('user_id', userId).eq('course_id', courseId)
        setWishlist(prev => prev.filter(id => id !== courseId))
        toast.success('Removed from wishlist')
      } else {
        await supabase.from('course_interests').insert({ user_id: userId, course_id: courseId })
        setWishlist(prev => [...prev, courseId])
        toast.success('Added to wishlist!')
      }
    } catch {
      toast.error('Something went wrong')
    } finally {
      setToggling(null)
    }
  }

  const filtered = courses.filter(c => {
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.faculty?.toLowerCase().includes(search.toLowerCase())
    const matchFaculty = faculty === 'All' || c.faculty === faculty
    const matchFilter = filter === 'all' || (aps !== null && c.min_aps <= aps)
    return matchSearch && matchFaculty && matchFilter
  })

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900" />
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => router.push('/dashboard')} className="text-blue-300 hover:text-white">
              <ArrowLeft size={20} />
            </button>
            <div>
              <h1 className="text-lg font-bold">Browse Courses</h1>
              <p className="text-blue-300 text-xs">
                {aps !== null ? `APS ${aps}/42 · ` : ''}{wishlist.length} wishlisted
              </p>
            </div>
          </div>
          {wishlist.length > 0 && (
            <Link href="/applications" className="flex items-center gap-1.5 bg-red-500 text-blue-900 px-3 py-1.5 rounded-xl text-xs font-bold hover:bg-red-400">
              Apply ({wishlist.length})
            </Link>
          )}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-4 space-y-3">
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-3.5 text-gray-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full border border-gray-200 rounded-2xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setFilter('qualify')}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${filter === 'qualify' ? 'bg-blue-900 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
          >
            I qualify ({courses.filter(c => aps !== null && c.min_aps <= aps).length})
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${filter === 'all' ? 'bg-blue-900 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
          >
            All courses ({courses.length})
          </button>
        </div>

        {/* Faculty chips */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {FACULTIES.map(f => (
            <button
              key={f}
              onClick={() => setFaculty(f)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${faculty === f ? 'bg-blue-900 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-300'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="text-xs text-gray-400">{filtered.length} courses</p>

        {/* Course cards */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
            <BookOpen size={40} className="text-gray-200 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">No courses match your search</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map(course => {
              const inWishlist = wishlist.includes(course.id)
              const isOpen = expanded === course.id
              const unis: any[] = course.course_universities || []
              const qualifies = aps !== null && course.min_aps <= aps
              const close = aps !== null && !qualifies && course.min_aps - aps <= 3

              return (
                <div key={course.id} className={`bg-white rounded-2xl border overflow-hidden transition-all ${inWishlist ? 'border-red-200' : 'border-gray-100'}`}>
                  <div className="p-4 flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold text-gray-900">{course.name}</p>
                        {qualifies && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">✓ Qualify</span>}
                        {close && <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Almost</span>}
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{course.faculty} · APS {course.min_aps}+ · {course.duration || '3 years'}</p>
                      <p className="text-xs text-gray-400">{unis.length} {unis.length === 1 ? 'university' : 'universities'}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => toggleWishlist(course.id)}
                        disabled={toggling === course.id}
                        className={`p-2 rounded-xl transition-all ${inWishlist ? 'bg-red-50 text-red-500 hover:bg-red-100' : 'bg-gray-50 text-gray-300 hover:bg-gray-100 hover:text-red-400'}`}
                      >
                        <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
                      </button>
                      <button
                        onClick={() => setExpanded(isOpen ? null : course.id)}
                        className="p-2 rounded-xl bg-gray-50 text-gray-400 hover:bg-gray-100"
                      >
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>
                  </div>

                  {isOpen && (
                    <div className="border-t border-gray-100 p-4 space-y-3">
                      {course.description && (
                        <p className="text-xs text-gray-600 leading-relaxed">{course.description}</p>
                      )}

                      {course.careers?.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1.5">Career paths</p>
                          <div className="flex flex-wrap gap-1.5">
                            {course.careers.map((c: string) => (
                              <span key={c} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{c}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {course.course_subject_requirements?.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1.5">Subject requirements</p>
                          <div className="grid grid-cols-2 gap-1.5">
                            {course.course_subject_requirements.map((req: any) => (
                              <div key={req.id} className="bg-gray-50 rounded-lg px-2.5 py-1.5 flex items-center justify-between">
                                <span className="text-xs text-gray-600">{req.subject}</span>
                                <span className="text-xs font-semibold text-gray-800">{req.minimum_mark}%+</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {unis.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-gray-700 mb-1.5">Available at</p>
                          <div className="space-y-1.5">
                            {unis.map((uni: any) => (
                              <div key={uni.id} className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2">
                                <span className="text-xs text-gray-700">{uni.university_name}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-xs text-gray-400">APS {uni.min_aps}+</span>
                                  {uni.application_deadline && (
                                    <span className="text-xs text-gray-400">· {uni.application_deadline}</span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => toggleWishlist(course.id)}
                        className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${inWishlist ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-blue-900 text-white hover:bg-blue-800'}`}
                      >
                        {inWishlist ? '♡ Remove from wishlist' : '♥ Add to wishlist'}
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>

      <Link
        href="/agent"
        className="fixed bottom-6 right-6 bg-red-500 text-blue-900 p-4 rounded-full shadow-lg hover:bg-red-400 transition-all flex items-center gap-2 font-semibold text-sm"
      >
        <Sparkles size={20} />
        <span>Career Guide</span>
      </Link>
    </div>
  )
}
