'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ArrowLeft, Search, ChevronDown, ChevronUp, Sparkles, TrendingUp, Minus, TrendingDown } from 'lucide-react'
import Link from 'next/link'

const CAREERS_DATA = [
  // Health Sciences
  { title: 'Medical Doctor (MBChB)', field: 'Health Sciences', salaryMin: 60000, salaryMax: 200000, outlook: 'Growing', subjects: ['Mathematics', 'Physical Sciences', 'Life Sciences'], aps: 36, description: 'Diagnose and treat illness and injury. Work in hospitals, clinics or private practice.' },
  { title: 'Registered Nurse', field: 'Health Sciences', salaryMin: 20000, salaryMax: 60000, outlook: 'Growing', subjects: ['Life Sciences', 'Mathematics'], aps: 22, description: 'Provide patient care, administer medication, and support doctors in clinical settings.' },
  { title: 'Pharmacist', field: 'Health Sciences', salaryMin: 35000, salaryMax: 90000, outlook: 'Stable', subjects: ['Mathematics', 'Physical Sciences', 'Life Sciences'], aps: 30, description: 'Dispense medication, advise patients, and ensure safe use of drugs.' },
  { title: 'Physiotherapist', field: 'Health Sciences', salaryMin: 25000, salaryMax: 70000, outlook: 'Growing', subjects: ['Life Sciences', 'Mathematics'], aps: 28, description: 'Help patients recover from injuries and disabilities through physical rehabilitation.' },
  { title: 'Dentist', field: 'Health Sciences', salaryMin: 50000, salaryMax: 150000, outlook: 'Stable', subjects: ['Mathematics', 'Physical Sciences', 'Life Sciences'], aps: 34, description: 'Diagnose and treat dental and oral health conditions.' },

  // Engineering
  { title: 'Civil Engineer', field: 'Engineering', salaryMin: 35000, salaryMax: 120000, outlook: 'Growing', subjects: ['Mathematics', 'Physical Sciences'], aps: 28, description: 'Design and oversee construction of roads, bridges, buildings, and infrastructure.' },
  { title: 'Electrical Engineer', field: 'Engineering', salaryMin: 40000, salaryMax: 130000, outlook: 'Growing', subjects: ['Mathematics', 'Physical Sciences'], aps: 30, description: 'Design and maintain electrical systems, power grids, and electronic equipment.' },
  { title: 'Mechanical Engineer', field: 'Engineering', salaryMin: 38000, salaryMax: 120000, outlook: 'Stable', subjects: ['Mathematics', 'Physical Sciences'], aps: 30, description: 'Design and build mechanical systems, machines, and manufacturing processes.' },
  { title: 'Software Engineer', field: 'Engineering', salaryMin: 35000, salaryMax: 150000, outlook: 'Growing', subjects: ['Mathematics', 'Information Technology'], aps: 26, description: 'Design, develop, and maintain software applications and systems.' },
  { title: 'Mining Engineer', field: 'Engineering', salaryMin: 50000, salaryMax: 160000, outlook: 'Stable', subjects: ['Mathematics', 'Physical Sciences'], aps: 28, description: 'Plan and manage the extraction of minerals and resources from the earth.' },

  // Commerce
  { title: 'Chartered Accountant (CA)', field: 'Commerce', salaryMin: 50000, salaryMax: 180000, outlook: 'Stable', subjects: ['Mathematics', 'Accounting'], aps: 30, description: 'Manage financial records, audit businesses, and provide financial advice.' },
  { title: 'Financial Analyst', field: 'Commerce', salaryMin: 30000, salaryMax: 100000, outlook: 'Growing', subjects: ['Mathematics', 'Economics', 'Accounting'], aps: 26, description: 'Analyse financial data to guide investment and business decisions.' },
  { title: 'Actuary', field: 'Commerce', salaryMin: 60000, salaryMax: 200000, outlook: 'Growing', subjects: ['Mathematics', 'Physical Sciences'], aps: 35, description: 'Assess financial risks using mathematics and statistics, mainly in insurance.' },
  { title: 'Marketing Manager', field: 'Commerce', salaryMin: 25000, salaryMax: 80000, outlook: 'Stable', subjects: ['Business Studies', 'Economics'], aps: 22, description: 'Develop and execute marketing strategies to promote products and services.' },
  { title: 'Human Resources Manager', field: 'Commerce', salaryMin: 25000, salaryMax: 75000, outlook: 'Stable', subjects: ['Business Studies', 'Economics'], aps: 22, description: 'Manage recruitment, employee relations, and workplace policies.' },

  // IT & Technology
  { title: 'Data Scientist', field: 'Technology', salaryMin: 45000, salaryMax: 150000, outlook: 'Growing', subjects: ['Mathematics', 'Information Technology'], aps: 28, description: 'Analyse large datasets to extract insights and build predictive models.' },
  { title: 'Cybersecurity Analyst', field: 'Technology', salaryMin: 40000, salaryMax: 140000, outlook: 'Growing', subjects: ['Mathematics', 'Information Technology'], aps: 24, description: 'Protect computer systems and networks from cyber threats and attacks.' },
  { title: 'Web Developer', field: 'Technology', salaryMin: 20000, salaryMax: 80000, outlook: 'Growing', subjects: ['Mathematics', 'Information Technology'], aps: 22, description: 'Design and build websites and web applications.' },
  { title: 'Systems Administrator', field: 'Technology', salaryMin: 20000, salaryMax: 70000, outlook: 'Stable', subjects: ['Mathematics', 'Information Technology'], aps: 20, description: 'Maintain and manage IT infrastructure, servers, and networks.' },

  // Education
  { title: 'Primary School Teacher', field: 'Education', salaryMin: 18000, salaryMax: 45000, outlook: 'Stable', subjects: ['Any home language', 'Mathematics Literacy'], aps: 18, description: 'Educate children in Grades R–7 across all subjects.' },
  { title: 'High School Teacher', field: 'Education', salaryMin: 20000, salaryMax: 55000, outlook: 'Stable', subjects: ['Subject of specialisation'], aps: 22, description: 'Teach specific subjects to learners in Grades 8–12.' },
  { title: 'School Principal', field: 'Education', salaryMin: 40000, salaryMax: 90000, outlook: 'Stable', subjects: ['Any'], aps: 24, description: 'Lead and manage a school, overseeing academic performance and staff.' },

  // Law
  { title: 'Attorney / Lawyer', field: 'Law', salaryMin: 25000, salaryMax: 200000, outlook: 'Stable', subjects: ['English', 'Any'], aps: 30, description: 'Provide legal advice and represent clients in civil and criminal matters.' },
  { title: 'Advocate', field: 'Law', salaryMin: 40000, salaryMax: 300000, outlook: 'Stable', subjects: ['English', 'Any'], aps: 30, description: 'Specialised legal practitioner who argues cases in higher courts.' },

  // Humanities & Social Sciences
  { title: 'Psychologist', field: 'Humanities', salaryMin: 25000, salaryMax: 100000, outlook: 'Growing', subjects: ['Life Sciences', 'English'], aps: 26, description: 'Study and treat mental, emotional, and behavioural disorders.' },
  { title: 'Social Worker', field: 'Humanities', salaryMin: 15000, salaryMax: 40000, outlook: 'Growing', subjects: ['Life Sciences', 'English'], aps: 20, description: 'Support vulnerable individuals, families and communities with social challenges.' },
  { title: 'Journalist', field: 'Humanities', salaryMin: 15000, salaryMax: 60000, outlook: 'Declining', subjects: ['English', 'Any'], aps: 22, description: 'Research and report news stories for print, broadcast, and online media.' },

  // Built Environment
  { title: 'Architect', field: 'Built Environment', salaryMin: 30000, salaryMax: 120000, outlook: 'Stable', subjects: ['Mathematics', 'Physical Sciences', 'Engineering Graphics and Design'], aps: 30, description: 'Design buildings and structures, balancing aesthetics, function and safety.' },
  { title: 'Quantity Surveyor', field: 'Built Environment', salaryMin: 25000, salaryMax: 90000, outlook: 'Growing', subjects: ['Mathematics', 'Physical Sciences'], aps: 26, description: 'Manage costs and financial aspects of construction projects.' },
]

const FIELDS = ['All', 'Health Sciences', 'Engineering', 'Commerce', 'Technology', 'Education', 'Law', 'Humanities', 'Built Environment']

function formatSalary(n: number) {
  return `R${(n / 1000).toFixed(0)}k`
}

export default function CareersPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [aps, setAps] = useState<number | null>(null)
  const [subjects, setSubjects] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [field, setField] = useState('All')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [showQualify, setShowQualify] = useState(true)

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }

      const [{ data: apsData }, { data: matricData }] = await Promise.all([
        supabase.from('aps_scores').select('total_aps').eq('user_id', user.id).order('calculated_at', { ascending: false }).limit(1).single(),
        supabase.from('matric_results').select('subject').eq('user_id', user.id),
      ])

      if (apsData) setAps(apsData.total_aps)
      if (matricData) setSubjects(matricData.map((m: any) => m.subject))
      setLoading(false)
    }
    load()
  }, [])

  const filtered = CAREERS_DATA.filter(c => {
    const matchSearch = !search || c.title.toLowerCase().includes(search.toLowerCase()) || c.field.toLowerCase().includes(search.toLowerCase())
    const matchField = field === 'All' || c.field === field
    const matchFilter = !showQualify || (aps !== null && c.aps <= aps)
    return matchSearch && matchField && matchFilter
  })

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900" />
    </div>
  )

  const OutlookIcon = ({ outlook }: { outlook: string }) => {
    if (outlook === 'Growing') return <TrendingUp size={14} className="text-green-600" />
    if (outlook === 'Declining') return <TrendingDown size={14} className="text-red-500" />
    return <Minus size={14} className="text-gray-400" />
  }

  const outlookColor = (o: string) => o === 'Growing' ? 'text-green-600' : o === 'Declining' ? 'text-red-500' : 'text-gray-500'

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button onClick={() => router.push('/dashboard')} className="text-blue-300 hover:text-white">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-lg font-bold">Explore Careers</h1>
            <p className="text-blue-300 text-xs">{CAREERS_DATA.length} careers · South African salary data</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-4 space-y-3">
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-3.5 text-gray-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search careers..."
            className="w-full border border-gray-200 rounded-2xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        {/* Filter tabs */}
        {aps !== null && (
          <div className="flex gap-2">
            <button
              onClick={() => setShowQualify(true)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${showQualify ? 'bg-blue-900 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
            >
              I qualify
            </button>
            <button
              onClick={() => setShowQualify(false)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${!showQualify ? 'bg-blue-900 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
            >
              All careers
            </button>
          </div>
        )}

        {/* Field chips */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {FIELDS.map(f => (
            <button
              key={f}
              onClick={() => setField(f)}
              className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${field === f ? 'bg-blue-900 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-300'}`}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="text-xs text-gray-400">{filtered.length} careers</p>

        {/* Career cards */}
        <div className="space-y-2">
          {filtered.map(career => {
            const isOpen = expanded === career.title
            const qualifies = aps !== null && career.aps <= aps

            return (
              <div key={career.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setExpanded(isOpen ? null : career.title)}
                  className="w-full p-4 flex items-start gap-3 text-left hover:bg-gray-50 transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-semibold text-gray-900">{career.title}</p>
                      {qualifies && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">✓ Qualify</span>}
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{career.field}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs font-semibold text-gray-700">
                        {formatSalary(career.salaryMin)}–{formatSalary(career.salaryMax)}/month
                      </span>
                      <div className="flex items-center gap-1">
                        <OutlookIcon outlook={career.outlook} />
                        <span className={`text-xs font-medium ${outlookColor(career.outlook)}`}>{career.outlook}</span>
                      </div>
                    </div>
                  </div>
                  {isOpen ? <ChevronUp size={16} className="text-gray-400 shrink-0 mt-1" /> : <ChevronDown size={16} className="text-gray-400 shrink-0 mt-1" />}
                </button>

                {isOpen && (
                  <div className="border-t border-gray-100 p-4 space-y-3">
                    <p className="text-xs text-gray-600 leading-relaxed">{career.description}</p>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-xs text-gray-400">Minimum APS</p>
                        <p className="text-sm font-bold text-gray-800 mt-0.5">{career.aps}/42</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3">
                        <p className="text-xs text-gray-400">Salary range</p>
                        <p className="text-sm font-bold text-gray-800 mt-0.5">{formatSalary(career.salaryMin)}–{formatSalary(career.salaryMax)}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-1.5">Key subjects needed</p>
                      <div className="flex flex-wrap gap-1.5">
                        {career.subjects.map(s => (
                          <span key={s} className={`text-xs px-2 py-0.5 rounded-full font-medium ${subjects.includes(s) ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                            {subjects.includes(s) ? '✓ ' : ''}{s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/courses?search=${encodeURIComponent(career.field)}`}
                      className="block text-center text-xs text-blue-600 hover:text-blue-800 font-medium py-1"
                    >
                      Browse {career.field} courses →
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <Link
        href="/agent"
        className="fixed bottom-6 right-6 bg-yellow-400 text-blue-900 p-4 rounded-full shadow-lg hover:bg-yellow-300 transition-all flex items-center gap-2 font-semibold text-sm"
      >
        <Sparkles size={20} />
        <span>Career Guide</span>
      </Link>
    </div>
  )
}
