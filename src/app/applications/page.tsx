'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ArrowLeft, FileText, CheckCircle, Clock, XCircle, ChevronDown, ChevronUp, ExternalLink, Upload, Sparkles, BookOpen, Download } from 'lucide-react'
import toast from 'react-hot-toast'
import Link from 'next/link'
import Logo from '@/components/Logo'

const UNI_FEES: Record<string, number> = {
  'UCT': 100, 'University of Cape Town': 100,
  'Wits': 100, 'University of the Witwatersrand': 100,
  'UP': 200, 'University of Pretoria': 200,
  'Stellenbosch': 100, 'Stellenbosch University': 100,
  'UJ': 200, 'University of Johannesburg': 200,
  'UKZN': 100, 'University of KwaZulu-Natal': 100,
  'NWU': 100, 'North-West University': 100,
  'UFS': 100, 'University of the Free State': 100,
  'UNISA': 0, 'University of South Africa': 0,
  'TUT': 200, 'Tshwane University of Technology': 200,
  'CPUT': 100, 'Cape Peninsula University of Technology': 100,
  'DUT': 200, 'Durban University of Technology': 200,
  'VUT': 150, 'Vaal University of Technology': 150,
  'CUT': 150, 'Central University of Technology': 150,
  'MUT': 150, 'Mangosuthu University of Technology': 150,
  'WSU': 100, 'Walter Sisulu University': 100,
  'UFH': 100, 'University of Fort Hare': 100,
  'UNIZULU': 100, 'University of Zululand': 100,
  'UL': 100, 'University of Limpopo': 100,
  'UNIVEN': 100, 'University of Venda': 100,
  'UMP': 100, 'University of Mpumalanga': 100,
  'SPU': 100, 'Sol Plaatje University': 100,
  'UWC': 100, 'University of the Western Cape': 100,
  'NMU': 100, 'Nelson Mandela University': 100,
  'SMU': 100, 'Sefako Makgatho Health Sciences University': 100,
  'Rhodes': 100, 'Rhodes University': 100,
}

const UNI_URLS: Record<string, string> = {
  'UCT': 'https://www.uct.ac.za/apply',
  'University of Cape Town': 'https://www.uct.ac.za/apply',
  'Wits': 'https://www.wits.ac.za/apply',
  'University of the Witwatersrand': 'https://www.wits.ac.za/apply',
  'UP': 'https://www.up.ac.za/apply',
  'University of Pretoria': 'https://www.up.ac.za/apply',
  'Stellenbosch University': 'https://www.sun.ac.za/apply',
  'UJ': 'https://www.uj.ac.za/apply',
  'University of Johannesburg': 'https://www.uj.ac.za/apply',
  'UKZN': 'https://www.ukzn.ac.za/apply',
  'UNISA': 'https://www.unisa.ac.za/apply',
  'University of South Africa': 'https://www.unisa.ac.za/apply',
  'TUT': 'https://www.tut.ac.za/apply',
}

const STATUS_CONFIG: Record<string, { label: string; color: string; icon: any }> = {
  draft: { label: 'Draft', color: 'bg-gray-100 text-gray-600', icon: FileText },
  submitted: { label: 'Submitted', color: 'bg-blue-100 text-blue-700', icon: Clock },
  pending: { label: 'Under Review', color: 'bg-red-100 text-red-700', icon: Clock },
  accepted: { label: 'Accepted ✅', color: 'bg-green-100 text-green-700', icon: CheckCircle },
  rejected: { label: 'Unsuccessful', color: 'bg-red-100 text-red-600', icon: XCircle },
}

function getFee(uniName: string): number {
  for (const [key, fee] of Object.entries(UNI_FEES)) {
    if (uniName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(uniName.toLowerCase())) {
      return fee
    }
  }
  return 150
}

function getUrl(uniName: string): string | null {
  for (const [key, url] of Object.entries(UNI_URLS)) {
    if (uniName.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(uniName.toLowerCase())) {
      return url
    }
  }
  return null
}

export default function ApplicationsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [wishlist, setWishlist] = useState<any[]>([])
  const [applications, setApplications] = useState<Record<string, any>>({})
  const [expanded, setExpanded] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState<string | null>(null)

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setUserId(user.id)

      const { data: interests } = await supabase
        .from('course_interests')
        .select('course_id, courses(id, name, faculty, min_aps, duration, course_universities(university_name, min_aps, application_deadline))')
        .eq('user_id', user.id)

      const { data: apps } = await supabase
        .from('applications')
        .select('*')
        .eq('user_id', user.id)

      if (interests) {
        const mapped = interests
          .filter((i: any) => i.courses)
          .map((i: any) => i.courses)
        setWishlist(mapped)
      }

      if (apps) {
        const appMap: Record<string, any> = {}
        apps.forEach((a: any) => {
          appMap[`${a.course_id}__${a.university_name}`] = a
        })
        setApplications(appMap)
      }

      setLoading(false)
    }
    load()
  }, [])

  const createApplication = async (courseId: string, universityName: string) => {
    if (!userId) return
    const key = `${courseId}__${universityName}`
    setSubmitting(key)
    try {
      const fee = getFee(universityName)
      const { data, error } = await supabase
        .from('applications')
        .insert({
          user_id: userId,
          course_id: courseId,
          university_name: universityName,
          application_fee: fee,
          status: 'draft',
        })
        .select()
        .single()
      if (error) throw error
      setApplications(prev => ({ ...prev, [key]: data }))
      toast.success(`Application started for ${universityName}`)
    } catch (err: any) {
      toast.error('Could not create application. Make sure the applications table exists in Supabase.')
    } finally {
      setSubmitting(null)
    }
  }

  const markSubmitted = async (appId: string, key: string) => {
    setSubmitting(key)
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status: 'submitted', submitted_at: new Date().toISOString() })
        .eq('id', appId)
      if (error) throw error
      setApplications(prev => ({ ...prev, [key]: { ...prev[key], status: 'submitted' } }))
      toast.success('Marked as submitted!')
    } catch (err: any) {
      toast.error('Could not update status')
    } finally {
      setSubmitting(null)
    }
  }

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900" />
    </div>
  )

  const totalApps = Object.keys(applications).length
  const submitted = Object.values(applications).filter((a: any) => a.status !== 'draft').length
  const accepted = Object.values(applications).filter((a: any) => a.status === 'accepted').length

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button onClick={() => router.push('/dashboard')} className="text-blue-300 hover:text-white">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-lg font-bold">My Applications</h1>
            <p className="text-blue-300 text-xs">{totalApps} started · {submitted} submitted · {accepted} accepted</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Stats row */}
        {totalApps > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Started', value: totalApps, color: 'text-gray-800' },
              { label: 'Submitted', value: submitted, color: 'text-blue-700' },
              { label: 'Accepted', value: accepted, color: 'text-green-700' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-3 border border-gray-100 text-center">
                <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* How it works banner */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4">
          <p className="text-sm font-semibold text-blue-900 mb-1">How to apply</p>
          <ol className="text-xs text-blue-700 space-y-1 list-decimal list-inside">
            <li>Select universities for each course below</li>
            <li>Click the university link to go to their portal</li>
            <li>Your profile info is saved — use it to fill in their form</li>
            <li>Mark as submitted once done</li>
          </ol>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
            <BookOpen size={40} className="text-gray-200 mx-auto mb-3" />
            <p className="text-gray-600 font-semibold">No courses wishlisted yet</p>
            <p className="text-sm text-gray-400 mt-1">Add courses to your wishlist first</p>
            <Link href="/onboarding/results" className="mt-4 inline-block bg-blue-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-800">
              Browse Courses
            </Link>
          </div>
        ) : (
          wishlist.map((course: any) => {
            const unis: any[] = course.course_universities || []
            const isOpen = expanded === course.id

            const courseApps = Object.entries(applications)
              .filter(([key]) => key.startsWith(course.id))
              .map(([, app]) => app)

            return (
              <div key={course.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                {/* Course header */}
                <button
                  onClick={() => setExpanded(isOpen ? null : course.id)}
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-all"
                >
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{course.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{course.faculty} · APS {course.min_aps}+ · {course.duration}</p>
                    {courseApps.length > 0 && (
                      <div className="flex gap-1.5 mt-1.5 flex-wrap">
                        {courseApps.map((app: any) => {
                          const cfg = STATUS_CONFIG[app.status] || STATUS_CONFIG.draft
                          return (
                            <span key={app.id} className={`text-xs px-2 py-0.5 rounded-full font-medium ${cfg.color}`}>
                              {app.university_name?.split(' ').slice(-1)[0]} — {cfg.label}
                            </span>
                          )
                        })}
                      </div>
                    )}
                  </div>
                  {isOpen ? <ChevronUp size={18} className="text-gray-400 shrink-0" /> : <ChevronDown size={18} className="text-gray-400 shrink-0" />}
                </button>

                {/* Universities list */}
                {isOpen && (
                  <div className="border-t border-gray-100 divide-y divide-gray-50">
                    {unis.length === 0 ? (
                      <p className="text-sm text-gray-400 text-center py-4">No universities found for this course</p>
                    ) : (
                      unis.map((uni: any) => {
                        const key = `${course.id}__${uni.university_name}`
                        const app = applications[key]
                        const fee = getFee(uni.university_name)
                        const url = getUrl(uni.university_name)
                        const cfg = app ? (STATUS_CONFIG[app.status] || STATUS_CONFIG.draft) : null

                        return (
                          <div key={uni.university_name} className="p-4">
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-gray-900 truncate">{uni.university_name}</p>
                                <div className="flex items-center gap-3 mt-1 text-xs text-gray-400 flex-wrap">
                                  <span>APS {uni.min_aps}+</span>
                                  {uni.application_deadline && <span>Deadline: {uni.application_deadline}</span>}
                                  <span className={fee === 0 ? 'text-green-600 font-medium' : ''}>
                                    {fee === 0 ? 'Free application' : `R${fee} fee`}
                                  </span>
                                </div>
                                {app && (
                                  <span className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium mt-2 ${cfg!.color}`}>
                                    {cfg!.label}
                                  </span>
                                )}
                              </div>

                              <div className="flex flex-col gap-2 shrink-0">
                                <Link
                                  href={`/apply/${encodeURIComponent(uni.university_name)}?course=${encodeURIComponent(course.name)}`}
                                  target="_blank"
                                  className="flex items-center gap-1 text-xs bg-[#e94560] text-white px-3 py-1.5 rounded-xl hover:bg-[#c73550] font-medium"
                                >
                                  <Download size={12} /> PDF
                                </Link>
                                {url && (
                                  <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-xs bg-[#1a1a2e] text-white px-3 py-1.5 rounded-xl hover:bg-[#252545] font-medium"
                                  >
                                    Apply <ExternalLink size={12} />
                                  </a>
                                )}
                                {!app ? (
                                  <button
                                    onClick={() => createApplication(course.id, uni.university_name)}
                                    disabled={submitting === key}
                                    className="text-xs border border-gray-200 text-gray-600 px-3 py-1.5 rounded-xl hover:border-blue-300 hover:text-blue-600 disabled:opacity-50"
                                  >
                                    {submitting === key ? '...' : 'Track'}
                                  </button>
                                ) : app.status === 'draft' ? (
                                  <button
                                    onClick={() => markSubmitted(app.id, key)}
                                    disabled={submitting === key}
                                    className="text-xs bg-green-600 text-white px-3 py-1.5 rounded-xl hover:bg-green-700 disabled:opacity-50 font-medium"
                                  >
                                    {submitting === key ? '...' : 'Mark Submitted'}
                                  </button>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>
                )}
              </div>
            )
          })
        )}

        {wishlist.length > 0 && (
          <Link
            href="/onboarding/results"
            className="block text-center text-sm text-blue-600 hover:text-blue-800 py-2"
          >
            + Add more courses to wishlist
          </Link>
        )}
      </div>

      {/* Floating AI button */}
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
