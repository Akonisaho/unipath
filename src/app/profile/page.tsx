'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ArrowLeft, User, Edit2, Save, X, GraduationCap, FileText, CheckCircle, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'
import Link from 'next/link'
import Logo from '@/components/Logo'

const PROVINCES = ['Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape', 'Free State', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape']

const DOC_LABELS: Record<string, string> = {
  id: 'SA ID Document',
  grade11_results: 'Grade 11 Results',
  matric_results: 'Grade 12 Results',
  proof_of_residence: 'Proof of Residence',
  guardian_id: 'Parent/Guardian ID',
  nsfas: 'NSFAS Consent Form',
}

function Row({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
      <span className="text-xs text-gray-500 w-32 shrink-0">{label}</span>
      <span className="text-sm text-gray-800 font-medium text-right">{value || '—'}</span>
    </div>
  )
}

export default function ProfilePage() {
  const router = useRouter()
  const [profile, setProfile] = useState<any>(null)
  const [aps, setAps] = useState<number | null>(null)
  const [documents, setDocuments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    school_name: '',
  })

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }

      const [{ data: prof }, { data: apsData }, { data: docs }] = await Promise.all([
        supabase.from('profiles').select('*').eq('id', user.id).single(),
        supabase.from('aps_scores').select('total_aps').eq('user_id', user.id).order('calculated_at', { ascending: false }).limit(1).single(),
        supabase.from('documents').select('*').eq('user_id', user.id),
      ])

      if (prof) {
        setProfile(prof)
        setForm({
          first_name: prof.first_name || '',
          last_name: prof.last_name || '',
          phone: prof.phone || '',
          address: prof.address || '',
          city: prof.city || '',
          province: prof.province || '',
          school_name: prof.school_name || '',
        })
      }
      if (apsData) setAps(apsData.total_aps)
      if (docs) setDocuments(docs)
      setLoading(false)
    }
    load()
  }, [])

  const handleSave = async () => {
    setSaving(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')
      const { error } = await supabase.from('profiles').update({
        first_name: form.first_name,
        last_name: form.last_name,
        full_name: `${form.first_name} ${form.last_name}`,
        phone: form.phone,
        address: form.address,
        city: form.city,
        province: form.province,
        school_name: form.school_name,
      }).eq('id', user.id)
      if (error) throw error
      setProfile((p: any) => ({ ...p, ...form, full_name: `${form.first_name} ${form.last_name}` }))
      setEditing(false)
      toast.success('Profile updated!')
    } catch (err: any) {
      toast.error(err.message || 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900" />
    </div>
  )

  const initials = profile?.first_name && profile?.last_name
    ? `${profile.first_name[0]}${profile.last_name[0]}`.toUpperCase()
    : profile?.full_name?.[0]?.toUpperCase() || 'U'

  const input = (key: keyof typeof form) =>
    `w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button onClick={() => router.push('/dashboard')} className="text-blue-300 hover:text-white">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-bold">My Profile</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Avatar card */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center gap-4">
          <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
            {initials}
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900">{profile?.full_name || '—'}</p>
            <p className="text-sm text-gray-500">{profile?.email}</p>
            {profile?.school_name && <p className="text-xs text-gray-400 mt-0.5">{profile.school_name}</p>}
          </div>
        </div>

        {/* APS card */}
        {aps !== null && (
          <div className="bg-blue-900 rounded-2xl p-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-xs font-medium">APS Score</p>
                <p className="text-4xl font-bold mt-1">{aps}<span className="text-lg text-blue-300">/42</span></p>
                <p className="text-blue-300 text-xs mt-1">
                  {aps >= 30 ? '🌟 Excellent' : aps >= 24 ? '✅ Good' : aps >= 18 ? '👍 Average' : '📚 Keep working!'}
                </p>
              </div>
              <GraduationCap size={36} className="text-red-500" />
            </div>
            <div className="mt-3 bg-blue-800 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full transition-all" style={{ width: `${(aps / 42) * 100}%` }} />
            </div>
          </div>
        )}

        {/* Personal details */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <User size={18} className="text-blue-900" />
              <p className="font-semibold text-gray-900">Personal Details</p>
            </div>
            {!editing ? (
              <button onClick={() => setEditing(true)} className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-medium">
                <Edit2 size={14} /> Edit
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button onClick={() => setEditing(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={18} />
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex items-center gap-1.5 text-sm bg-blue-900 text-white px-3 py-1.5 rounded-xl font-medium disabled:opacity-60"
                >
                  {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                  {saving ? 'Saving...' : 'Save'}
                </button>
              </div>
            )}
          </div>

          {!editing ? (
            <div>
              <Row label="Full Name" value={profile?.full_name} />
              <Row label="ID Number" value={profile?.id_number ? `${profile.id_number.slice(0, 2)}***${profile.id_number.slice(-4)}` : undefined} />
              <Row label="Date of Birth" value={profile?.date_of_birth} />
              <Row label="Gender" value={profile?.gender} />
              <Row label="Race" value={profile?.race} />
              <Row label="Phone" value={profile?.phone} />
              <Row label="Address" value={profile?.address} />
              <Row label="City" value={profile?.city} />
              <Row label="Province" value={profile?.province} />
              <Row label="School" value={profile?.school_name} />
              <Row label="School Type" value={profile?.school_type} />
            </div>
          ) : (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">First Name</label>
                  <input value={form.first_name} onChange={e => setForm(p => ({ ...p, first_name: e.target.value }))} className={input('first_name')} />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Last Name</label>
                  <input value={form.last_name} onChange={e => setForm(p => ({ ...p, last_name: e.target.value }))} className={input('last_name')} />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Phone</label>
                <input value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className={input('phone')} />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Street Address</label>
                <input value={form.address} onChange={e => setForm(p => ({ ...p, address: e.target.value }))} className={input('address')} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">City</label>
                  <input value={form.city} onChange={e => setForm(p => ({ ...p, city: e.target.value }))} className={input('city')} />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Province</label>
                  <select value={form.province} onChange={e => setForm(p => ({ ...p, province: e.target.value }))} className={`${input('province')} bg-white`}>
                    <option value="">Select</option>
                    {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">School Name</label>
                <input value={form.school_name} onChange={e => setForm(p => ({ ...p, school_name: e.target.value }))} className={input('school_name')} />
              </div>
            </div>
          )}
        </div>

        {/* Documents */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-blue-900" />
              <p className="font-semibold text-gray-900">My Documents</p>
            </div>
            <Link href="/onboarding/documents" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
              Manage →
            </Link>
          </div>
          {documents.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-3">No documents uploaded yet</p>
          ) : (
            <div className="space-y-2">
              {documents.map(doc => (
                <div key={doc.id} className="flex items-center gap-3 p-3 bg-green-50 rounded-xl">
                  <CheckCircle size={16} className="text-green-600 shrink-0" />
                  <span className="text-sm text-gray-700">{DOC_LABELS[doc.document_type] || doc.document_type}</span>
                  <span className="text-xs text-gray-400 ml-auto">{new Date(doc.created_at || '').toLocaleDateString('en-ZA')}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/onboarding/matric" className="bg-white rounded-2xl p-4 border border-gray-100 hover:border-blue-200 transition-all text-center">
            <p className="text-sm font-semibold text-gray-900">Update Results</p>
            <p className="text-xs text-gray-400 mt-0.5">Edit matric marks</p>
          </Link>
          <Link href="/applications" className="bg-white rounded-2xl p-4 border border-gray-100 hover:border-blue-200 transition-all text-center">
            <p className="text-sm font-semibold text-gray-900">My Applications</p>
            <p className="text-xs text-gray-400 mt-0.5">Track applications</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
