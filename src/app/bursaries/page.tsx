'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ArrowLeft, ExternalLink, Search, Filter, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/Logo'

const BURSARIES = [
  {
    name: 'Funza Lushaka Bursary',
    provider: 'Department of Basic Education',
    amount: 'Full cost of study',
    faculty: 'Education',
    deadline: '31 January',
    provinces: 'All provinces',
    requirements: 'Teaching degree at public university. Must teach in public school after graduating.',
    url: 'https://www.funzalushaka.doe.gov.za',
    nsfas: false,
    popular: true,
  },
  {
    name: 'Eskom Scholarship',
    provider: 'Eskom',
    amount: 'Up to R80,000/year',
    faculty: 'Engineering, Science',
    deadline: '30 September',
    provinces: 'All provinces',
    requirements: 'Engineering or Science degree. Minimum APS 30. Mathematics 70%+.',
    url: 'https://www.eskom.co.za/bursaries',
    nsfas: false,
    popular: true,
  },
  {
    name: 'SASOL Bursary',
    provider: 'Sasol',
    amount: 'Up to R100,000/year',
    faculty: 'Engineering, Science, Commerce',
    deadline: '31 August',
    provinces: 'All provinces',
    requirements: 'Engineering, Science or Commerce. Maths 70%+. Physical Science 60%+.',
    url: 'https://www.sasol.com/bursaries',
    nsfas: false,
    popular: true,
  },
  {
    name: 'Allan Gray Orbis Foundation',
    provider: 'Allan Gray Orbis Foundation',
    amount: 'Full cost of study + mentorship',
    faculty: 'All faculties',
    deadline: '31 March',
    provinces: 'All provinces',
    requirements: 'Entrepreneurial mindset. Top academic performance. For future business leaders.',
    url: 'https://www.allangrayorbis.org',
    nsfas: false,
    popular: true,
  },
  {
    name: 'NSFAS Bursary',
    provider: 'National Student Financial Aid Scheme',
    amount: 'Tuition + accommodation + allowances',
    faculty: 'All faculties',
    deadline: 'November',
    provinces: 'All provinces',
    requirements: 'Household income under R350,000/year. South African citizen. Public university.',
    url: 'https://my.nsfas.org.za',
    nsfas: true,
    popular: true,
  },
  {
    name: 'Transnet Bursary',
    provider: 'Transnet',
    amount: 'Up to R70,000/year',
    faculty: 'Engineering, IT, Commerce',
    deadline: '30 September',
    provinces: 'All provinces',
    requirements: 'Engineering, IT or Commerce. Maths 60%+.',
    url: 'https://www.transnet.net/bursaries',
    nsfas: false,
    popular: false,
  },
  {
    name: 'Investec Bursary',
    provider: 'Investec',
    amount: 'Full tuition + living allowance',
    faculty: 'Commerce, Science, Engineering',
    deadline: '31 August',
    provinces: 'All provinces',
    requirements: 'Finance, Accounting, Engineering or Actuarial Science. APS 35+.',
    url: 'https://www.investec.com/bursaries',
    nsfas: false,
    popular: false,
  },
  {
    name: 'Old Mutual Bursary',
    provider: 'Old Mutual',
    amount: 'Up to R60,000/year',
    faculty: 'Commerce, Actuarial Science',
    deadline: '31 August',
    provinces: 'All provinces',
    requirements: 'BCom, Actuarial Science or Statistics. Maths 70%+.',
    url: 'https://www.oldmutual.co.za/bursaries',
    nsfas: false,
    popular: false,
  },
  {
    name: 'Standard Bank Bursary',
    provider: 'Standard Bank',
    amount: 'Full tuition + stipend',
    faculty: 'Commerce, IT, Engineering',
    deadline: '30 September',
    provinces: 'All provinces',
    requirements: 'Commerce, IT or Engineering. Maths 65%+.',
    url: 'https://www.standardbank.co.za/bursaries',
    nsfas: false,
    popular: false,
  },
  {
    name: 'Anglo American Bursary',
    provider: 'Anglo American',
    amount: 'Up to R120,000/year',
    faculty: 'Engineering, Mining',
    deadline: '30 September',
    provinces: 'Limpopo, North West, Northern Cape',
    requirements: 'Mining or Engineering degree. Maths 65%+. Physical Science 60%+.',
    url: 'https://www.angloamerican.com/bursaries',
    nsfas: false,
    popular: false,
  },
  {
    name: 'Harmony Bursary',
    provider: 'Harmony Gold',
    amount: 'Up to R90,000/year',
    faculty: 'Engineering, Mining, Finance',
    deadline: '30 September',
    provinces: 'Free State, North West',
    requirements: 'Mining, Engineering or Finance. Maths 60%+.',
    url: 'https://www.harmony.co.za/bursaries',
    nsfas: false,
    popular: false,
  },
  {
    name: 'South African Institute of Chartered Accountants (SAICA)',
    provider: 'SAICA',
    amount: 'Various amounts',
    faculty: 'Commerce',
    deadline: '30 November',
    provinces: 'All provinces',
    requirements: 'BCom Accounting or CA stream. Maths 60%+. Accounting 60%+.',
    url: 'https://www.saica.co.za/bursaries',
    nsfas: false,
    popular: false,
  },
  {
    name: 'ISFAP Bursary',
    provider: 'Ikusasa Student Financial Aid Programme',
    amount: 'Full cost of study',
    faculty: 'All faculties',
    deadline: 'October',
    provinces: 'All provinces',
    requirements: 'Missing middle students. Income R350,000—R600,000/year. Gap between NSFAS and self-funded.',
    url: 'https://www.isfap.org.za',
    nsfas: false,
    popular: true,
  },
  {
    name: 'Telkom Foundation Bursary',
    provider: 'Telkom Foundation',
    amount: 'Up to R60,000/year',
    faculty: 'IT, Engineering, Commerce',
    deadline: '30 September',
    provinces: 'All provinces',
    requirements: 'IT, Engineering or Commerce. Maths 60%+.',
    url: 'https://www.telkom.co.za/bursaries',
    nsfas: false,
    popular: false,
  },
]

const FACULTIES = ['All', 'Engineering', 'Commerce', 'Education', 'Science', 'IT', 'Mining', 'Health Sciences']

export default function BursariesPage() {
  const router = useRouter()
  const [profile, setProfile] = useState<any>(null)
  const [aps, setAps] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [faculty, setFaculty] = useState('All')
  const [showRecommended, setShowRecommended] = useState(true)

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }

      const [{ data: prof }, { data: apsData }] = await Promise.all([
        supabase.from('profiles').select('province, race, orphan_status').eq('id', user.id).single(),
        supabase.from('aps_scores').select('total_aps').eq('user_id', user.id).order('calculated_at', { ascending: false }).limit(1).single(),
      ])

      if (prof) setProfile(prof)
      if (apsData) setAps(apsData.total_aps)
      setLoading(false)
    }
    load()
  }, [])

  const isRecommended = (b: typeof BURSARIES[0]) => {
    if (b.nsfas && profile?.orphan_status && profile.orphan_status !== 'None') return true
    if (b.provinces !== 'All provinces' && profile?.province && !b.provinces.includes(profile.province)) return false
    return b.popular
  }

  const filtered = BURSARIES.filter(b => {
    const matchSearch = !search || b.name.toLowerCase().includes(search.toLowerCase()) || b.provider.toLowerCase().includes(search.toLowerCase()) || b.faculty.toLowerCase().includes(search.toLowerCase())
    const matchFaculty = faculty === 'All' || b.faculty.toLowerCase().includes(faculty.toLowerCase())
    const matchTab = !showRecommended || isRecommended(b)
    return matchSearch && matchFaculty && matchTab
  })

  if (loading) return (
    <div className="min-h-screen bg-[#fef9f0] flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900" />
    </div>
  )

  return (
    <div className="min-h-screen bg-[#fef9f0]">
      <div className="bg-blue-900 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button onClick={() => router.push('/dashboard')} className="text-blue-300 hover:text-white">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-lg font-bold">Bursaries & Funding</h1>
            <p className="text-blue-300 text-xs">{BURSARIES.length} bursaries available</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Tip */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
          <p className="text-sm font-semibold text-red-800 mb-0.5">👍¡ Apply to as many as you qualify for</p>
          <p className="text-xs text-red-700">Most bursaries are free to apply. Apply to NSFAS first, then stack bursaries on top.</p>
        </div>

        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-3.5 text-gray-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search bursaries..."
            className="w-full border border-gray-200 rounded-2xl pl-9 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setShowRecommended(true)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${showRecommended ? 'bg-blue-900 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
          >
            Recommended for you
          </button>
          <button
            onClick={() => setShowRecommended(false)}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${!showRecommended ? 'bg-blue-900 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
          >
            All bursaries
          </button>
        </div>

        {/* Faculty filter */}
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

        {/* Results */}
        <p className="text-xs text-gray-400">{filtered.length} bursaries found</p>

        <div className="space-y-3">
          {filtered.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center">
              <p className="text-gray-400 text-sm">No bursaries match your search</p>
            </div>
          ) : (
            filtered.map(b => (
              <div key={b.name} className="bg-white rounded-2xl border border-gray-100 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="text-sm font-semibold text-gray-900">{b.name}</p>
                      {b.nsfas && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">Government</span>
                      )}
                      {isRecommended(b) && !b.nsfas && (
                        <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-medium">Recommended</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{b.provider}</p>
                  </div>
                  <a
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs bg-blue-900 text-white px-3 py-1.5 rounded-xl hover:bg-blue-800 font-medium shrink-0"
                  >
                    Apply <ExternalLink size={11} />
                  </a>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 rounded-xl p-2">
                    <p className="text-xs text-gray-400">Amount</p>
                    <p className="text-xs font-semibold text-gray-800 mt-0.5">{b.amount}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-2">
                    <p className="text-xs text-gray-400">Deadline</p>
                    <p className="text-xs font-semibold text-gray-800 mt-0.5">{b.deadline}</p>
                  </div>
                </div>

                <div className="mt-2 flex gap-2 flex-wrap">
                  <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{b.faculty}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{b.provinces === 'All provinces' ? '🇿🇦 All provinces' : b.provinces}</span>
                </div>

                <p className="text-xs text-gray-500 mt-2 leading-relaxed">{b.requirements}</p>
              </div>
            ))
          )}
        </div>

        <Link href="/nsfas" className="block text-center text-sm text-blue-600 hover:text-blue-800 py-2">
          Read the full NSFAS guide →
        </Link>
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
