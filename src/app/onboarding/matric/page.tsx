'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Loader2, Plus, Trash2 } from 'lucide-react'
import toast from 'react-hot-toast'

const SUBJECTS = [
  'English Home Language', 'English First Additional Language',
  'Afrikaans Home Language', 'Afrikaans First Additional Language',
  'Zulu Home Language', 'Xhosa Home Language',
  'Sepedi Home Language', 'Tswana Home Language',
  'Sotho Home Language', 'Tsonga Home Language',
  'Venda Home Language', 'Ndebele Home Language',
  'Mathematics', 'Mathematical Literacy',
  'Physical Sciences', 'Life Sciences',
  'Geography', 'History', 'Accounting',
  'Business Studies', 'Economics',
  'Computer Applications Technology', 'Information Technology',
  'Life Orientation', 'Visual Arts', 'Music',
  'Engineering Graphics and Design', 'Agriculture',
  'Tourism', 'Hospitality Studies', 'Consumer Studies',
  'Religion Studies', 'Dramatic Arts',
]

const calculateAPS = (subjects: { subject: string; mark: number }[]) => {
  const getPoints = (mark: number) => {
    if (mark >= 80) return 7
    if (mark >= 70) return 6
    if (mark >= 60) return 5
    if (mark >= 50) return 4
    if (mark >= 40) return 3
    if (mark >= 30) return 2
    return 1
  }
  const eligible = subjects.filter(s => s.subject !== 'Life Orientation' && s.mark > 0)
  return eligible.reduce((total, s) => total + getPoints(s.mark), 0)
}

const defaultSubjects = [
  { subject: 'English Home Language', mark: 0 },
  { subject: 'Mathematics', mark: 0 },
  { subject: 'Life Orientation', mark: 0 },
  { subject: '', mark: 0 },
  { subject: '', mark: 0 },
  { subject: '', mark: 0 },
  { subject: '', mark: 0 },
]

const SubjectTable = ({ subjects, onChange, onAdd, onRemove }: any) => (
  <div className="space-y-2">
    {subjects.map((s: any, i: number) => (
      <div key={i} className="flex gap-2 items-center">
        <div className="flex-1">
          {s.subject && !SUBJECTS.includes(s.subject) && s.subject.trim() !== '' ? (
            <div className="flex gap-1">
              <input
                type="text"
                value={s.subject.trim()}
                onChange={e => onChange(i, 'subject', e.target.value)}
                placeholder="Type your subject name"
                className="w-full border border-blue-300 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => onChange(i, 'subject', '')}
                className="px-2 text-gray-400 hover:text-red-500 text-xs border border-gray-200 rounded-xl"
              >
                ✕
              </button>
            </div>
          ) : (
            <select
              value={s.subject}
              onChange={e => {
                if (e.target.value === '__other__') {
                  onChange(i, 'subject', ' ')
                } else {
                  onChange(i, 'subject', e.target.value)
                }
              }}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Select subject</option>
              {SUBJECTS.filter(sub =>
                !subjects.some((s2: any, i2: number) => i2 !== i && s2.subject === sub)
              ).map((sub: string) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
              <option value="__other__">➕ My subject is not listed</option>
            </select>
          )}
        </div>
        <div className="w-24">
          <input
            type="number"
            min="0"
            max="100"
            value={s.mark || ''}
            onChange={e => onChange(i, 'mark', parseInt(e.target.value) || 0)}
            placeholder="%"
            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
          />
        </div>
        <button
          type="button"
          onClick={() => onRemove(i)}
          className="p-2.5 text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 size={16} />
        </button>
      </div>
    ))}
    {subjects.length < 9 && (
      <button
        type="button"
        onClick={onAdd}
        className="flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
      >
        <Plus size={16} /> Add Subject
      </button>
    )}
  </div>
)

const APSBadge = ({ aps, label }: any) => (
  <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-center justify-between">
    <div>
      <p className="text-sm text-blue-600 font-medium">{label}</p>
      <p className="text-xs text-blue-400">Excludes Life Orientation</p>
    </div>
    <div className="text-3xl font-bold text-blue-900">{aps}</div>
  </div>
)

// Grade 12 options per student type
const GRADE12_OPTIONS = {
  grade12: [
    { key: 'none', label: '❌ None yet', desc: 'Use Grade 11 only' },
    { key: 'march', label: '📋 March Results', desc: 'First term results' },
    { key: 'june', label: '📋 June Results', desc: 'Mid-year exam' },
    { key: 'september', label: '📋 September Results', desc: 'Trial/Prelim exam' },
  ],
  gap: [
    { key: 'final', label: '📋 Final Results', desc: 'January matric results' },
    { key: 'march', label: '📋 Supplementary', desc: 'March rewrite results' },
    { key: 'june', label: '📋 June Rewrite', desc: 'IEB / SACAI / Private' },
    { key: 'other', label: '📋 Other Rewrite', desc: 'September or other' },
  ],
}

export default function MatricResultsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [studentStatus, setStudentStatus] = useState<'grade12' | 'gap' | ''>('')
  const [grade12ResultType, setGrade12ResultType] = useState<'none' | 'march' | 'june' | 'september' | 'final' | 'other'>('none')
  const [grade11Subjects, setGrade11Subjects] = useState([...defaultSubjects])
  const [grade12Subjects, setGrade12Subjects] = useState([...defaultSubjects])
  const [finalSubjects, setFinalSubjects] = useState([...defaultSubjects])

  useEffect(() => {
    const checkStep = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data: profile } = await supabase
        .from('profiles')
        .select('onboarding_step, student_status, grade12_result_type')
        .eq('id', user.id)
        .single()
      if (profile?.onboarding_step < 3) { router.push('/onboarding/guardian'); return }
      if (profile?.student_status) setStudentStatus(profile.student_status)
      if (profile?.grade12_result_type) setGrade12ResultType(profile.grade12_result_type)
    }
    checkStep()
  }, [])

  const updateSubject = (setter: any) => (index: number, field: string, value: any) => {
    setter((prev: any) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const addSubject = (setter: any) => () => {
    setter((prev: any) => [...prev, { subject: '', mark: 0 }])
  }

  const removeSubject = (setter: any, subjects: any) => (index: number) => {
    if (subjects.length > 6) {
      setter((prev: any) => prev.filter((_: any, i: number) => i !== index))
    }
  }

  const grade11APS = calculateAPS(grade11Subjects)
  const grade12APS = calculateAPS(grade12Subjects)
  const finalAPS = calculateAPS(finalSubjects)

  const hasGrade12Results = grade12ResultType !== 'none'

  const latestAPS = studentStatus === 'gap'
    ? finalAPS || grade11APS
    : hasGrade12Results ? grade12APS || grade11APS : grade11APS

  const grade12Label = {
    march: 'March Supplementary',
    june: studentStatus === 'gap' ? 'June Rewrite' : 'June Mid-year',
    september: 'September Trial/Prelim',
    final: 'Final Matric',
    other: 'Other Rewrite',
    none: 'Grade 12',
  }[grade12ResultType] || 'Grade 12'

  const validate = () => {
    const grade11Filled = grade11Subjects.filter(s => s.subject && s.subject.trim() && s.mark > 0)
    if (grade11Filled.length < 6) {
      toast.error('Please enter at least 6 Grade 11 subjects with marks')
      return false
    }
    const hasEnglish = grade11Filled.some(s => s.subject.toLowerCase().includes('english'))
    if (!hasEnglish) {
      toast.error('English is required in Grade 11 results')
      return false
    }
    if (studentStatus === 'grade12' && hasGrade12Results) {
      const grade12Filled = grade12Subjects.filter(s => s.subject && s.subject.trim() && s.mark > 0)
      if (grade12Filled.length < 6) {
        toast.error(`Please enter at least 6 ${grade12Label} subjects with marks`)
        return false
      }
    }
    if (studentStatus === 'gap' && hasGrade12Results) {
      const finalFilled = finalSubjects.filter(s => s.subject && s.subject.trim() && s.mark > 0)
      if (finalFilled.length < 6) {
        toast.error('Please enter at least 6 subjects with marks')
        return false
      }
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!studentStatus) {
      toast.error('Please select your current status')
      return
    }
    if (!validate()) return
    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      await supabase.from('matric_results').delete().eq('user_id', user.id)

      const resultsToInsert: any[] = []

      grade11Subjects.filter(s => s.subject && s.subject.trim() && s.mark > 0).forEach(s => {
        resultsToInsert.push({ user_id: user.id, subject: s.subject.trim(), mark: s.mark, result_type: 'grade11' })
      })

      if (studentStatus === 'grade12' && hasGrade12Results) {
        grade12Subjects.filter(s => s.subject && s.subject.trim() && s.mark > 0).forEach(s => {
          resultsToInsert.push({ user_id: user.id, subject: s.subject.trim(), mark: s.mark, result_type: grade12ResultType })
        })
      }

      if (studentStatus === 'gap' && hasGrade12Results) {
        finalSubjects.filter(s => s.subject && s.subject.trim() && s.mark > 0).forEach(s => {
          resultsToInsert.push({ user_id: user.id, subject: s.subject.trim(), mark: s.mark, result_type: grade12ResultType })
        })
      }

      const { error: resultsError } = await supabase.from('matric_results').insert(resultsToInsert)
      if (resultsError) throw resultsError

      await supabase.from('aps_scores').upsert({ user_id: user.id, total_aps: latestAPS })
      const { error: profileError } = await supabase.from('profiles').update({
        student_status: studentStatus,
        grade12_result_type: grade12ResultType,
        onboarding_step: 4,
      }).eq('id', user.id)

      if (profileError) {
        toast.error('Failed to save progress: ' + profileError.message)
        return
      }

      router.push('/onboarding/results')
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const currentOptions = studentStatus ? GRADE12_OPTIONS[studentStatus] : []

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      {/* Step indicator */}
      <div className="flex items-center justify-between mb-8">
        {['Personal', 'Guardian', 'Matric', 'Documents', 'Interests'].map((step, i) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              i < 2 ? 'bg-green-500 text-white' :
              i === 2 ? 'bg-blue-900 text-white' :
              'bg-gray-100 text-gray-400'
            }`}>
              {i < 2 ? '✓' : i + 1}
            </div>
            <span className={`ml-1 text-xs hidden sm:block ${
              i === 2 ? 'text-blue-900 font-semibold' :
              i < 2 ? 'text-green-600' :
              'text-gray-400'
            }`}>{step}</span>
            {i < 4 && <div className="w-4 sm:w-8 h-px bg-gray-200 mx-1" />}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-1">Academic Results</h2>
      <p className="text-gray-500 text-sm mb-6">Your results are used to calculate your APS score for university applications</p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Student Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What is your current status? <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3">
            {[
              { key: 'grade12', label: '🎓 Currently in Grade 12', desc: 'Applying while in matric' },
              { key: 'gap', label: '📅 Gap Year', desc: 'Already completed matric' },
            ].map(option => (
              <button
                key={option.key}
                type="button"
                onClick={() => {
                  setStudentStatus(option.key as any)
                  setGrade12ResultType('none')
                }}
                className={`py-4 px-4 rounded-2xl border-2 text-sm font-semibold transition-all text-left ${
                  studentStatus === option.key
                    ? 'border-blue-900 bg-blue-50 text-blue-900'
                    : 'border-gray-200 text-gray-500 hover:border-blue-300'
                }`}
              >
                {option.label}
                <p className="text-xs font-normal mt-1 opacity-70">{option.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Grade 11 Results */}
        {studentStatus && (
          <div className="border border-gray-200 rounded-2xl p-5 space-y-4">
            <div>
              <p className="text-sm font-bold text-gray-800">📋 Grade 11 Final Results</p>
              <p className="text-xs text-gray-500 mt-0.5">Required — used as baseline for applications</p>
            </div>
            <APSBadge aps={grade11APS} label="Grade 11 APS Score" />
            <SubjectTable
              subjects={grade11Subjects}
              onChange={updateSubject(setGrade11Subjects)}
              onAdd={addSubject(setGrade11Subjects)}
              onRemove={removeSubject(setGrade11Subjects, grade11Subjects)}
            />
          </div>
        )}

        {/* Grade 12 Results */}
        {studentStatus && (
          <div className="border border-gray-200 rounded-2xl p-5 space-y-4">
            <div>
              <p className="text-sm font-bold text-gray-800">📋 Grade 12 Results</p>
              <p className="text-xs text-gray-500 mt-0.5">
                {studentStatus === 'grade12'
                  ? 'Select which results you currently have'
                  : 'Select which results you have'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {currentOptions.map(option => (
                <button
                  key={option.key}
                  type="button"
                  onClick={() => setGrade12ResultType(option.key as any)}
                  className={`py-3 px-3 rounded-xl border-2 text-xs font-semibold transition-all text-left ${
                    grade12ResultType === option.key
                      ? 'border-blue-900 bg-blue-50 text-blue-900'
                      : 'border-gray-200 text-gray-500 hover:border-blue-300'
                  }`}
                >
                  {option.label}
                  <p className="font-normal opacity-70 mt-0.5">{option.desc}</p>
                </button>
              ))}
            </div>

            {hasGrade12Results && (
              <>
                <APSBadge
                  aps={studentStatus === 'gap' ? finalAPS : grade12APS}
                  label={`${grade12Label} APS Score`}
                />
                <SubjectTable
                  subjects={studentStatus === 'gap' ? finalSubjects : grade12Subjects}
                  onChange={studentStatus === 'gap' ? updateSubject(setFinalSubjects) : updateSubject(setGrade12Subjects)}
                  onAdd={studentStatus === 'gap' ? addSubject(setFinalSubjects) : addSubject(setGrade12Subjects)}
                  onRemove={studentStatus === 'gap' ? removeSubject(setFinalSubjects, finalSubjects) : removeSubject(setGrade12Subjects, grade12Subjects)}
                />
              </>
            )}

            {!hasGrade12Results && studentStatus === 'grade12' && (
              <div className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-500">✅ No problem — Grade 11 results will be used for your applications.</p>
              </div>
            )}
          </div>
        )}

        {/* Application APS Summary */}
        {studentStatus && latestAPS > 0 && (
          <div className="bg-blue-900 rounded-2xl p-5 text-white">
            <p className="text-sm font-medium text-blue-200">Your Application APS Score</p>
            <p className="text-4xl font-bold mt-1">{latestAPS}</p>
            <p className="text-xs text-blue-300 mt-1">
              {studentStatus === 'gap' && hasGrade12Results
                ? `Based on your ${grade12Label} results`
                : hasGrade12Results
                  ? `Based on your ${grade12Label} results (most recent)`
                  : 'Based on your Grade 11 results'}
            </p>
          </div>
        )}

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => router.push('/onboarding/guardian')}
            className="w-1/3 border border-gray-200 text-gray-600 font-semibold py-4 rounded-2xl hover:bg-gray-50 transition-all"
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className="w-2/3 bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {loading ? <><Loader2 size={20} className="animate-spin" /> Saving...</> : 'Next — Documents →'}
          </button>
        </div>
      </form>
    </div>
  )
}