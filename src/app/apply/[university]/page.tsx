'use client'

import { useEffect, useState, Suspense } from 'react'
import { useParams, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Printer } from 'lucide-react'

function apsPoints(mark: number) {
  if (mark >= 80) return 7
  if (mark >= 70) return 6
  if (mark >= 60) return 5
  if (mark >= 50) return 4
  if (mark >= 40) return 3
  if (mark >= 30) return 2
  return 1
}

function Field({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="border-b border-gray-100 pb-2">
      <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-0.5">{label}</p>
      <p className="text-sm text-gray-900 font-medium">{value || '—'}</p>
    </div>
  )
}

function SectionHeader({ letter, title }: { letter: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-7 h-7 rounded-full bg-[#1a1a2e] text-white text-xs font-bold flex items-center justify-center shrink-0">
        {letter}
      </div>
      <h2 className="text-sm font-bold text-[#1a1a2e] uppercase tracking-wider border-b border-gray-200 flex-1 pb-1">
        {title}
      </h2>
    </div>
  )
}

function PrintDocument() {
  const params = useParams()
  const searchParams = useSearchParams()
  const university = decodeURIComponent(params.university as string)
  const course = searchParams.get('course') || ''

  const [profile, setProfile] = useState<any>(null)
  const [subjects, setSubjects] = useState<any[]>([])
  const [aps, setAps] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { window.location.href = '/login'; return }

      const [{ data: prof }, { data: subs }, { data: apsData }] = await Promise.all([
        supabase.from('profiles').select('*').eq('id', user.id).single(),
        supabase.from('matric_results').select('*').eq('user_id', user.id),
        supabase.from('aps_scores').select('total_aps').eq('user_id', user.id)
          .order('calculated_at', { ascending: false }).limit(1).single(),
      ])

      setProfile(prof)
      setSubjects(subs || [])
      setAps(apsData?.total_aps ?? null)
      setLoading(false)
    }
    load()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400 text-sm">Preparing your application document...</p>
      </div>
    )
  }

  const grade12Subs = subjects.filter(s => s.result_type !== 'grade11')
  const grade11Subs = subjects.filter(s => s.result_type === 'grade11')
  const displaySubs = grade12Subs.length > 0 ? grade12Subs : grade11Subs
  const subjectType = grade12Subs.length > 0 ? 'Matric / Grade 12' : 'Grade 11'
  const today = new Date().toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' })
  const ref = `UP-${(profile?.id_number || '000000').toString().slice(-6)}-${Date.now().toString().slice(-4)}`

  const motherAlive = profile?.mother_status === 'alive'
  const fatherAlive = profile?.father_status === 'alive'

  return (
    <div className="min-h-screen bg-[#fef9f0] print:bg-white">

      {/* Print toolbar — hidden when printing */}
      <div className="no-print fixed top-0 left-0 right-0 bg-[#1a1a2e] text-white px-6 py-3 flex items-center justify-between z-50 shadow-lg">
        <div>
          <p className="text-sm font-bold">Application Document Ready</p>
          <p className="text-xs text-gray-300">{profile?.full_name} → {university}</p>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 bg-[#e94560] hover:bg-[#c73550] px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
        >
          <Printer size={16} />
          Print / Save as PDF
        </button>
      </div>

      {/* Document paper */}
      <div className="max-w-3xl mx-auto bg-white shadow-sm px-12 py-10 mt-16 mb-8 print:shadow-none print:mt-0 print:px-8 print:py-8">

        {/* Letterhead */}
        <div className="flex items-start justify-between mb-6 pb-4 border-b-2 border-[#1a1a2e]">
          <div>
            <p className="text-2xl font-bold text-[#1a1a2e]" style={{ fontFamily: 'Georgia, serif' }}>
              Uni<span className="text-[#e94560]">P</span>ath
            </p>
            <p className="text-[10px] text-gray-400 tracking-wider uppercase mt-0.5">
              SA University Application Platform
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-[#1a1a2e] uppercase tracking-wider">Application Document</p>
            <p className="text-xs text-gray-500 mt-1">{today}</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Ref: {ref}</p>
          </div>
        </div>

        {/* University banner */}
        <div className="bg-[#1a1a2e] text-white px-6 py-4 rounded-xl mb-8">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-0.5">Applying to</p>
          <p className="text-lg font-bold">{university}</p>
          {course && (
            <p className="text-[#f5a623] text-sm mt-1 font-medium">
              Programme: {course}
            </p>
          )}
          <p className="text-gray-400 text-xs mt-2">
            APS Score: <span className="text-white font-bold">{aps ?? '—'}/42</span>
          </p>
        </div>

        {/* A: Personal Details */}
        <section className="mb-8">
          <SectionHeader letter="A" title="Personal Details" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <Field label="Full Name" value={profile?.full_name} />
            <Field label="SA ID Number" value={profile?.id_number} />
            <Field label="Date of Birth" value={profile?.date_of_birth} />
            <Field label="Gender" value={profile?.gender} />
            <Field label="Race" value={profile?.race} />
            <Field label="Disability Status" value={profile?.disability_status ? 'Yes — ' + profile.disability_status : 'None'} />
            <Field label="Email Address" value={profile?.email} />
            <Field label="Phone Number" value={profile?.phone} />
            <Field label="Home Address" value={[profile?.address, profile?.city, profile?.province].filter(Boolean).join(', ')} />
            <Field label="High School" value={profile?.school_name} />
          </div>
        </section>

        {/* B: Academic Record */}
        <section className="mb-8">
          <SectionHeader letter="B" title={`Academic Record — ${subjectType} Results`} />
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gray-50 border border-gray-200">
                <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 uppercase">Subject</th>
                <th className="text-center py-2 px-3 text-xs font-semibold text-gray-500 uppercase w-24">Mark (%)</th>
                <th className="text-center py-2 px-3 text-xs font-semibold text-gray-500 uppercase w-24">APS Pts</th>
                <th className="text-center py-2 px-3 text-xs font-semibold text-gray-500 uppercase w-24">Level</th>
              </tr>
            </thead>
            <tbody>
              {displaySubs.map((s: any, i: number) => {
                const pts = apsPoints(s.mark)
                const level = pts >= 6 ? 'Distinction' : pts >= 5 ? 'Merit' : pts >= 4 ? 'Achieved' : pts >= 3 ? 'Adequate' : 'Below'
                return (
                  <tr key={i} className="border border-gray-100">
                    <td className="py-2 px-3 text-gray-800">{s.subject}</td>
                    <td className="py-2 px-3 text-center text-gray-800">{s.mark}%</td>
                    <td className="py-2 px-3 text-center font-bold text-[#1a1a2e]">{pts}</td>
                    <td className="py-2 px-3 text-center text-xs text-gray-500">{level}</td>
                  </tr>
                )
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-[#1a1a2e] bg-gray-50">
                <td className="py-2.5 px-3 font-bold text-[#1a1a2e] text-sm" colSpan={2}>
                  Total APS Score
                </td>
                <td className="py-2.5 px-3 text-center font-bold text-lg text-[#e94560]">{aps ?? '—'}</td>
                <td className="py-2.5 px-3 text-center text-xs text-gray-500">out of 42</td>
              </tr>
            </tfoot>
          </table>
        </section>

        {/* C: Parent / Guardian */}
        <section className="mb-8">
          <SectionHeader letter="C" title="Parent / Guardian Information" />
          <div className="space-y-4">
            {/* Mother */}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Mother</p>
              {motherAlive ? (
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  <Field label="Full Name" value={profile?.mother_name} />
                  <Field label="Phone" value={profile?.mother_phone} />
                  <Field label="Email" value={profile?.mother_email} />
                  <Field label="Occupation" value={profile?.mother_occupation} />
                  <Field label="Monthly Income" value={profile?.mother_income} />
                </div>
              ) : (
                <p className="text-sm text-gray-400 italic">
                  Status: {profile?.mother_status === 'deceased' ? 'Deceased' : 'Unknown'}
                </p>
              )}
            </div>

            <div className="border-t border-gray-100 pt-4">
              <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Father</p>
              {fatherAlive ? (
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  <Field label="Full Name" value={profile?.father_name} />
                  <Field label="Phone" value={profile?.father_phone} />
                  <Field label="Email" value={profile?.father_email} />
                  <Field label="Occupation" value={profile?.father_occupation} />
                  <Field label="Monthly Income" value={profile?.father_income} />
                </div>
              ) : (
                <p className="text-sm text-gray-400 italic">
                  Status: {profile?.father_status === 'deceased' ? 'Deceased' : 'Unknown'}
                </p>
              )}
            </div>

            {profile?.guardian_name && (
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Primary Guardian</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  <Field label="Full Name" value={profile?.guardian_name} />
                  <Field label="Relationship" value={profile?.guardian_relationship} />
                  <Field label="Phone" value={profile?.guardian_phone} />
                  <Field label="Email" value={profile?.guardian_email} />
                  <Field label="Occupation" value={profile?.guardian_occupation} />
                  <Field label="Monthly Income" value={profile?.guardian_income} />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* D: Financial & NSFAS */}
        <section className="mb-8">
          <SectionHeader letter="D" title="Financial Information" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <Field
              label="NSFAS Status"
              value={profile?.orphan_status === 'full_orphan' ? 'Full Orphan — Automatically Qualifies'
                : profile?.orphan_status === 'half_orphan' ? 'Half Orphan — Likely Qualifies'
                : 'Standard Application'}
            />
            <Field
              label="Funding Status"
              value={profile?.nsfas_applied ? 'NSFAS Applied' : 'Not Yet Applied'}
            />
          </div>
        </section>

        {/* E: Documents Checklist */}
        <section className="mb-8">
          <SectionHeader letter="E" title="Supporting Documents Checklist" />
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              'Certified copy of SA ID',
              'Matric certificate / Grade 12 results',
              'Grade 11 results',
              'Proof of residence (not older than 3 months)',
              'Parent/Guardian ID copy',
              'NSFAS consent form (if applicable)',
              'Certified birth certificate',
              'Passport photo (2 copies)',
            ].map((doc, i) => (
              <div key={i} className="flex items-center gap-2 py-1.5 border-b border-gray-50">
                <div className="w-4 h-4 border border-gray-300 rounded shrink-0" />
                <span className="text-gray-700 text-xs">{doc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Declaration */}
        <section className="border-t-2 border-[#1a1a2e] pt-6">
          <SectionHeader letter="F" title="Declaration" />
          <p className="text-xs text-gray-600 leading-relaxed mb-6">
            I, <strong>{profile?.full_name || '____________________'}</strong>, hereby declare that all information
            provided in this application document is true, accurate and complete to the best of my knowledge.
            I understand that providing false information may result in my application being rejected or my
            admission being cancelled.
          </p>
          <div className="grid grid-cols-2 gap-12 mt-6">
            <div>
              <div className="border-b border-gray-400 mb-1 h-8" />
              <p className="text-xs text-gray-400">Applicant Signature</p>
              <p className="text-xs text-gray-400 mt-1">{profile?.full_name}</p>
            </div>
            <div>
              <div className="border-b border-gray-400 mb-1 h-8" />
              <p className="text-xs text-gray-400">Date</p>
              <p className="text-xs text-gray-400 mt-1">{today}</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-10 pt-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-[10px] text-gray-300">
            Generated by UniPath · unipath-gilt.vercel.app · {today}
          </p>
          <p className="text-[10px] text-gray-300">Ref: {ref}</p>
        </div>
      </div>
    </div>
  )
}

export default function ApplyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400 text-sm">Preparing document...</p>
      </div>
    }>
      <PrintDocument />
    </Suspense>
  )
}
