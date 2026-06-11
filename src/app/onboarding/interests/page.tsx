'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Loader2, Check } from 'lucide-react'
import toast from 'react-hot-toast'

const CAREER_FIELDS = [
  '🏥 Health & Medicine', '⚖️ Law & Justice', '💼 Business & Finance',
  '💻 Technology & IT', '🏗️ Engineering', '🎓 Education & Teaching',
  '🎨 Arts & Design', '🌱 Agriculture & Environment', '✈️ Aviation & Tourism',
  '🔬 Science & Research', '🏛️ Government & Public Service', '📺 Media & Communication',
]

const ALL_UNIVERSITIES = [
  { name: 'University of Cape Town (UCT)', province: 'Western Cape' },
  { name: 'University of the Witwatersrand (Wits)', province: 'Gauteng' },
  { name: 'University of Pretoria (UP)', province: 'Gauteng' },
  { name: 'Stellenbosch University (SU)', province: 'Western Cape' },
  { name: 'University of Johannesburg (UJ)', province: 'Gauteng' },
  { name: 'University of KwaZulu-Natal (UKZN)', province: 'KwaZulu-Natal' },
  { name: 'North-West University (NWU)', province: 'North West' },
  { name: 'University of the Free State (UFS)', province: 'Free State' },
  { name: 'Rhodes University', province: 'Eastern Cape' },
  { name: 'Walter Sisulu University (WSU)', province: 'Eastern Cape' },
  { name: 'University of Fort Hare (UFH)', province: 'Eastern Cape' },
  { name: 'University of Zululand (UNIZULU)', province: 'KwaZulu-Natal' },
  { name: 'Mangosuthu University of Technology (MUT)', province: 'KwaZulu-Natal' },
  { name: 'Durban University of Technology (DUT)', province: 'KwaZulu-Natal' },
  { name: 'Tshwane University of Technology (TUT)', province: 'Gauteng' },
  { name: 'Vaal University of Technology (VUT)', province: 'Gauteng' },
  { name: 'Cape Peninsula University of Technology (CPUT)', province: 'Western Cape' },
  { name: 'Central University of Technology (CUT)', province: 'Free State' },
  { name: 'University of South Africa (UNISA)', province: 'Gauteng' },
  { name: 'Sefako Makgatho Health Sciences University (SMU)', province: 'Gauteng' },
  { name: 'University of Limpopo (UL)', province: 'Limpopo' },
  { name: 'University of Venda (UNIVEN)', province: 'Limpopo' },
  { name: 'University of Mpumalanga (UMP)', province: 'Mpumalanga' },
  { name: 'Sol Plaatje University (SPU)', province: 'Northern Cape' },
  { name: 'University of the Western Cape (UWC)', province: 'Western Cape' },
  { name: 'Nelson Mandela University (NMU)', province: 'Eastern Cape' },
]

const STUDY_MODES = ['Full-time', 'Part-time', 'Distance Learning', 'Online']
const FUNDING_OPTIONS = ['NSFAS', 'Bursary', 'Self-funded', 'Loan', 'Employer Sponsored']

export default function InterestsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [selectedFields, setSelectedFields] = useState<string[]>([])
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>([])
  const [selectAll, setSelectAll] = useState(false)
  const [form, setForm] = useState({
    courses: '',
    studyMode: 'Full-time',
    funding: 'NSFAS',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    const checkStep = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data: profile } = await supabase.from('profiles').select('onboarding_step, study_mode, funding').eq('id', user.id).single()
      if (profile?.onboarding_step < 5) {
        router.push('/onboarding/documents')
        return
      }
      if (profile) {
        setForm(prev => ({
          ...prev,
          studyMode: profile.study_mode || 'Full-time',
          funding: profile.funding || 'NSFAS',
        }))
      }
    }
    checkStep()
  }, [])

  const toggleField = (field: string) => {
    setSelectedFields(prev =>
      prev.includes(field) ? prev.filter(f => f !== field) : [...prev, field]
    )
  }

  const toggleUniversity = (name: string) => {
    setSelectedUniversities(prev =>
      prev.includes(name) ? prev.filter(u => u !== name) : [...prev, name]
    )
  }

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedUniversities([])
    } else {
      setSelectedUniversities(ALL_UNIVERSITIES.map(u => u.name))
    }
    setSelectAll(!selectAll)
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (selectedFields.length === 0) newErrors.fields = 'Please select at least one career field'
    if (selectedUniversities.length === 0) newErrors.universities = 'Please select at least one university'
    if (!form.courses) newErrors.courses = 'Please enter your preferred courses'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) {
      toast.error('Please complete all required fields')
      return
    }

    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      // Save course interests
      await supabase.from('course_interests').delete().eq('user_id', user.id)
      await supabase.from('course_interests').insert(
        selectedUniversities.map((uni, i) => ({
          user_id: user.id,
          course_name: form.courses,
          university: uni,
          priority: i + 1,
        }))
      )

      // Update profile
      await supabase.from('profiles').update({
        study_mode: form.studyMode,
        funding: form.funding,
        onboarding_complete: true,
        onboarding_step: 6,
      }).eq('id', user.id)

      toast.success('Profile complete! Welcome to UniPath 🎉')
      router.push('/dashboard')
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      {/* Step indicator */}
      <div className="flex items-center justify-between mb-8">
        {['Personal', 'Guardian', 'Matric', 'Documents', 'Interests'].map((step, i) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i < 4 ? 'bg-green-500 text-white' : 'bg-blue-900 text-white'}`}>
              {i < 4 ? '✓' : '5'}
            </div>
            <span className={`ml-1 text-xs hidden sm:block ${i === 4 ? 'text-blue-900 font-semibold' : 'text-green-600'}`}>{step}</span>
            {i < 4 && <div className="w-6 sm:w-12 h-px bg-gray-200 mx-2" />}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-1">Course & University Interests</h2>
      <p className="text-gray-500 text-sm mb-6">Tell us what you want to study — UniPath will apply to all your selected universities!</p>

      {/* Career Fields */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Career Fields <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-2">
          {CAREER_FIELDS.map(field => (
            <button
              key={field}
              type="button"
              onClick={() => toggleField(field)}
              className={`text-left px-3 py-2.5 rounded-xl text-sm border transition-all ${
                selectedFields.includes(field)
                  ? 'bg-blue-900 text-white border-blue-900'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-300'
              }`}
            >
              {field}
            </button>
          ))}
        </div>
        {errors.fields && <p className="text-red-500 text-xs mt-1">{errors.fields}</p>}
      </div>

      {/* Preferred Courses */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Courses <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={form.courses}
          onChange={e => setForm({ ...form, courses: e.target.value })}
          placeholder="e.g. MBChB, BSc Computer Science, LLB"
          className={`w-full border ${errors.courses ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        {errors.courses && <p className="text-red-500 text-xs mt-1">{errors.courses}</p>}
      </div>

      {/* Universities */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-gray-700">
            Select Universities <span className="text-red-500">*</span>
            <span className="text-gray-400 font-normal ml-2">({selectedUniversities.length} selected)</span>
          </label>
          <button
            type="button"
            onClick={handleSelectAll}
            className="text-xs text-blue-600 font-medium hover:underline"
          >
            {selectAll ? 'Deselect All' : 'Select All 26'}
          </button>
        </div>
        <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
          {ALL_UNIVERSITIES.map(uni => (
            <button
              key={uni.name}
              type="button"
              onClick={() => toggleUniversity(uni.name)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm border transition-all flex items-center justify-between ${
                selectedUniversities.includes(uni.name)
                  ? 'bg-blue-900 text-white border-blue-900'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-blue-300'
              }`}
            >
              <span>{uni.name}</span>
              <span className={`text-xs ${selectedUniversities.includes(uni.name) ? 'text-blue-200' : 'text-gray-400'}`}>
                {uni.province}
              </span>
              {selectedUniversities.includes(uni.name) && <Check size={14} className="ml-2 shrink-0" />}
            </button>
          ))}
        </div>
        {errors.universities && <p className="text-red-500 text-xs mt-1">{errors.universities}</p>}
      </div>

      {/* Study Mode + Funding */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Study Mode <span className="text-red-500">*</span>
          </label>
          <select
            value={form.studyMode}
            onChange={e => setForm({ ...form, studyMode: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {STUDY_MODES.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Funding <span className="text-red-500">*</span>
          </label>
          <select
            value={form.funding}
            onChange={e => setForm({ ...form, funding: e.target.value })}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {FUNDING_OPTIONS.map(f => <option key={f} value={f}>{f}</option>)}
          </select>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => router.push('/onboarding/documents')}
          className="w-1/3 border border-gray-200 text-gray-600 font-semibold py-4 rounded-2xl hover:bg-gray-50 transition-all"
        >
          ← Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-2/3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading ? <><Loader2 size={20} className="animate-spin" /> Saving...</> : '🎉 Complete Profile & Go to Dashboard'}
        </button>
      </div>
    </div>
  )
}