'use client'

import { Suspense, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Loader2, CheckCircle, XCircle, AlertCircle, ChevronDown, ChevronUp, ArrowRight, Search, Heart, HeartOff, Sparkles } from 'lucide-react'

const FACULTIES = ['All', 'Health Sciences', 'Engineering', 'Commerce', 'Science', 'Education', 'Humanities', 'Arts', 'Built Environment', 'Agriculture', 'Law']

function ResultsInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [aps, setAps] = useState(parseInt(searchParams.get('aps') || '0'))
  const [subjects, setSubjects] = useState<any[]>([])
  const [courses, setCourses] = useState<any[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [filter, setFilter] = useState<'qualify' | 'close' | 'all'>('qualify')
  const [faculty, setFaculty] = useState('All')
  const [search, setSearch] = useState('')
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setUserId(user.id)

      const { data: apsData } = await supabase
        .from('aps_scores')
        .select('*')
        .eq('user_id', user.id)
        .order('calculated_at', { ascending: false })
        .limit(1)
        .single()

      const { data: matricData } = await supabase
        .from('matric_results')
        .select('*')
        .eq('user_id', user.id)
        .eq('result_type', 'grade11')

      const { data: coursesData } = await supabase
        .from('courses')
        .select(`*, course_subject_requirements(*), course_universities(*)`)
        .eq('is_active', true)
        .order('name')

      // Get existing wishlist
      const { data: wishlistData } = await supabase
        .from('course_interests')
        .select('course_id')
        .eq('user_id', user.id)

      if (apsData) setAps(apsData.total_aps || 0)
      if (matricData) setSubjects(matricData)
      if (coursesData) setCourses(coursesData)
      if (wishlistData) setWishlist(wishlistData.map((w: any) => w.course_id))
      setLoading(false)
    }
    fetchData()
  }, [])

  const checkSubjectRequirements = (course: any) => {
    if (!course.course_subject_requirements?.length) return { met: true, details: [] }
    const details = course.course_subject_requirements.map((req: any) => {
      const studentSubject = subjects.find(s =>
        s.subject?.toLowerCase().includes(req.subject?.toLowerCase()) ||
        req.subject?.toLowerCase().includes(s.subject?.toLowerCase())
      )
      const studentMark = studentSubject?.mark || 0
      const met = studentMark >= req.minimum_mark
      return { subject: req.subject, required: req.minimum_mark, got: studentMark, met }
    })
    return { met: details.every((d: any) => d.met), details }
  }

  const toggleWishlist = async (courseId: string) => {
    if (!userId) return
    const isInWishlist = wishlist.includes(courseId)

    if (isInWishlist) {
      setWishlist(prev => prev.filter(id => id !== courseId))
      await supabase
        .from('course_interests')
        .delete()
        .eq('user_id', userId)
        .eq('course_id', courseId)
    } else {
      setWishlist(prev => [...prev, courseId])
      await supabase
        .from('course_interests')
        .upsert({ user_id: userId, course_id: courseId })
    }
  }

  const handleContinue = async () => {
    setSaving(true)
    await supabase
      .from('profiles')
      .update({ onboarding_step: 5 })
      .eq('id', userId)
    router.push('/onboarding/documents')
    setSaving(false)
  }

  const categorisedCourses = courses.map(course => {
    const subjectCheck = checkSubjectRequirements(course)
    const qualifyingUnis = course.course_universities?.filter((u: any) => aps >= u.min_aps) || []
    const closeUnis = course.course_universities?.filter((u: any) => aps < u.min_aps && aps >= u.min_aps - 4) || []
    const qualifies = aps >= course.min_aps && qualifyingUnis.length > 0
    const close = !qualifies && (aps >= course.min_aps - 4 || closeUnis.length > 0)
    return { ...course, qualifies, close, subjectCheck, qualifyingUnis, closeUnis }
  })

  const filteredCourses = categorisedCourses.filter(c => {
    if (filter === 'qualify' && !c.qualifies) return false
    if (filter === 'close' && !c.close) return false
    if (faculty !== 'All' && c.faculty !== faculty) return false
    if (search && !c.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  const qualifyCount = categorisedCourses.filter(c => c.qualifies).length
  const closeCount = categorisedCourses.filter(c => c.close).length

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 size={24} className="animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-900 rounded-full mb-4">
            <span className="text-3xl font-bold text-white">{aps}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Your APS Score is {aps}</h1>
          <p className="text-gray-500 text-sm mt-1">Out of 42 maximum points</p>
          <div className="mt-4 bg-gray-200 rounded-full h-3 max-w-sm mx-auto">
            <div className="bg-blue-900 h-3 rounded-full" style={{ width: `${(aps / 42) * 100}%` }} />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-3 text-center">
            <p className="text-2xl font-bold text-green-700">{qualifyCount}</p>
            <p className="text-xs text-green-600 mt-1">Qualify for</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-3 text-center">
            <p className="text-2xl font-bold text-yellow-700">{closeCount}</p>
            <p className="text-xs text-yellow-600 mt-1">Almost there</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-2xl p-3 text-center">
            <p className="text-2xl font-bold text-red-600">{wishlist.length}</p>
            <p className="text-xs text-red-500 mt-1">In my wishlist</p>
          </div>
        </div>

        {/* AI Banner */}
        <button
          onClick={() => router.push('/agent')}
          className="w-full bg-blue-900 text-white rounded-2xl p-4 mb-6 flex items-center gap-3 hover:bg-blue-800 transition-all"
        >
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
            <Sparkles size={20} className="text-blue-900" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold">Not sure which course to choose?</p>
            <p className="text-xs text-blue-300">Chat with your AI Career Guide →</p>
          </div>
        </button>

        {/* Search */}
        <div className="relative mb-4">
          <Search size={16} className="absolute left-3 top-3.5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search courses e.g. Data Science, Nursing..."
            className="w-full border border-gray-200 rounded-xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
          {[
            { key: 'qualify', label: `✅ Qualify (${qualifyCount})` },
            { key: 'close', label: `⚡ Almost (${closeCount})` },
            { key: 'all', label: `📚 All (${courses.length})` },
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                filter === tab.key ? 'bg-blue-900 text-white' : 'bg-white border border-gray-200 text-gray-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Faculty Filter */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {FACULTIES.map(f => (
            <button
              key={f}
              onClick={() => setFaculty(f)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                faculty === f ? 'bg-yellow-400 text-blue-900' : 'bg-white border border-gray-200 text-gray-600'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Wishlist hint */}
        {wishlist.length === 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-3 mb-4 text-center">
            <p className="text-xs text-blue-700">💡 Tap the <span className="font-bold">heart ❤️</span> on any course to add it to your wishlist for applications</p>
          </div>
        )}

        {/* Courses List */}
        <div className="space-y-3 mb-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
              <p className="text-gray-400 text-sm">No courses found</p>
              <p className="text-gray-400 text-xs mt-1">Try a different search or filter</p>
            </div>
          ) : filteredCourses.map(course => (
            <div
              key={course.id}
              className={`bg-white rounded-2xl border overflow-hidden transition-all ${
                wishlist.includes(course.id)
                  ? 'border-red-300 shadow-sm'
                  : course.qualifies
                  ? 'border-green-200'
                  : course.close
                  ? 'border-yellow-200'
                  : 'border-gray-200'
              }`}
            >
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      {course.qualifies ? (
                        <CheckCircle size={15} className="text-green-500 shrink-0" />
                      ) : course.close ? (
                        <AlertCircle size={15} className="text-yellow-500 shrink-0" />
                      ) : (
                        <XCircle size={15} className="text-gray-300 shrink-0" />
                      )}
                      <p className="text-sm font-semibold text-gray-900">{course.name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        course.level === 'degree' ? 'bg-blue-100 text-blue-700' :
                        course.level === 'diploma' ? 'bg-green-100 text-green-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>{course.level}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {course.faculty} · {course.duration} · Min APS {course.min_aps}
                    </p>
                    {course.qualifies && (
                      <p className="text-xs text-green-600 font-medium mt-1">
                        ✅ Qualifies at {course.qualifyingUnis.length} {course.qualifyingUnis.length === 1 ? 'university' : 'universities'}
                      </p>
                    )}
                    {course.close && !course.qualifies && (
                      <p className="text-xs text-yellow-600 font-medium mt-1">
                        ⚡ Need {course.min_aps - aps} more APS points
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {/* Wishlist button */}
                    <button
                      onClick={() => toggleWishlist(course.id)}
                      className={`p-2 rounded-xl transition-all ${
                        wishlist.includes(course.id)
                          ? 'bg-red-50 text-red-500'
                          : 'bg-gray-50 text-gray-400 hover:text-red-400'
                      }`}
                    >
                      {wishlist.includes(course.id) ? <Heart size={16} fill="currentColor" /> : <Heart size={16} />}
                    </button>

                    {/* Expand button */}
                    <button
                      onClick={() => setExpandedId(expandedId === course.id ? null : course.id)}
                      className="p-2 text-gray-400 hover:text-gray-600"
                    >
                      {expandedId === course.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>
              </div>

              {expandedId === course.id && (
                <div className="border-t border-gray-100 p-4 bg-gray-50 space-y-3">
                  {/* Description */}
                  {course.description && (
                    <p className="text-xs text-gray-600">{course.description}</p>
                  )}

                  {/* Subject Requirements */}
                  {course.subjectCheck.details?.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-2">Subject Requirements:</p>
                      <div className="space-y-1">
                        {course.subjectCheck.details.map((req: any, i: number) => (
                          <div key={i} className="flex items-center justify-between text-xs bg-white rounded-xl px-3 py-2">
                            <span className="text-gray-600">{req.subject}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-400">Min: {req.required}%</span>
                              <span className={`font-semibold ${req.met ? 'text-green-600' : 'text-red-500'}`}>
                                {req.met ? '✅' : '❌'} You: {req.got > 0 ? `${req.got}%` : 'Not taken'}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Qualifying Universities */}
                  {course.qualifyingUnis.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-2">Universities you qualify for:</p>
                      <div className="space-y-1">
                        {course.qualifyingUnis.map((uni: any) => (
                          <div key={uni.id} className="flex items-center justify-between bg-green-50 rounded-xl px-3 py-2">
                            <span className="text-xs font-medium text-gray-800">{uni.university_name}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500">APS {uni.min_aps}+</span>
                              {uni.application_deadline && (
                                <span className="text-xs text-blue-600">Due: {uni.application_deadline}</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Close Universities */}
                  {course.closeUnis.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-2">Almost qualifying at:</p>
                      <div className="space-y-1">
                        {course.closeUnis.map((uni: any) => (
                          <div key={uni.id} className="flex items-center justify-between bg-yellow-50 rounded-xl px-3 py-2">
                            <span className="text-xs font-medium text-gray-800">{uni.university_name}</span>
                            <span className="text-xs text-yellow-600">Need {uni.min_aps - aps} more points</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Careers */}
                  {course.careers?.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Career paths:</p>
                      <div className="flex flex-wrap gap-1">
                        {course.careers.map((career: string, i: number) => (
                          <span key={i} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-lg">{career}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-gray-400 italic">
                    ⚠️ Requirements based on 2026 prospectus — always verify with institution
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Wishlist Summary */}
        {wishlist.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
            <p className="text-sm font-bold text-green-800">❤️ {wishlist.length} course{wishlist.length > 1 ? 's' : ''} in your wishlist</p>
            <p className="text-xs text-green-600 mt-1">These will be saved for your applications after onboarding</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={() => router.push('/onboarding/matric')}
            className="w-1/3 border border-gray-200 text-gray-600 py-3 rounded-2xl text-sm font-semibold hover:bg-gray-50"
          >
            ← Back
          </button>
          <button
            onClick={handleContinue}
            disabled={saving}
            className="w-2/3 bg-blue-900 text-white py-3 rounded-2xl text-sm font-semibold hover:bg-blue-800 flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {saving ? <Loader2 size={16} className="animate-spin" /> : <>Continue to Documents <ArrowRight size={16} /></>}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 size={24} className="animate-spin text-blue-600" />
      </div>
    }>
      <ResultsInner />
    </Suspense>
  )
}