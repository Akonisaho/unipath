'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Loader2, Upload, CheckCircle, X, AlertCircle } from 'lucide-react'
import toast from 'react-hot-toast'

const INCOME_RANGES = ['R0 - R5,000', 'R5,001 - R10,000', 'R10,001 - R20,000', 'R20,001 - R40,000', 'R40,001+', 'Unemployed', 'No Income']
const GUARDIAN_RELATIONSHIPS = ['Grandparent', 'Uncle', 'Aunt', 'Older Sibling', 'Social Worker', 'Foster Parent', 'Other']

const Field = ({ label, error, required, children }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
)

const StatusSelector = ({ value, onChange, parentLabel }: any) => (
  <div className="grid grid-cols-3 gap-2">
    {[
      { key: 'alive', label: '🟢 Alive', color: 'border-green-400 bg-green-50 text-green-700' },
      { key: 'deceased', label: '🔴 Deceased', color: 'border-red-400 bg-red-50 text-red-700' },
      { key: 'unknown', label: '❓ Unknown', color: 'border-gray-400 bg-gray-50 text-gray-700' },
    ].map(option => (
      <button
        key={option.key}
        type="button"
        onClick={() => onChange(option.key)}
        className={`py-2.5 px-3 rounded-xl border-2 text-xs font-semibold transition-all ${
          value === option.key ? option.color : 'border-gray-200 bg-white text-gray-400'
        }`}
      >
        {option.label}
      </button>
    ))}
  </div>
)

const DeathCertUpload = ({ uploaded, uploading, fileName, onUpload, onRemove, error }: any) => (
  <div>
    <div className={`border-2 rounded-2xl p-4 transition-all ${uploaded ? 'border-green-300 bg-green-50' : 'border-dashed border-red-300 bg-red-50'}`}>
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="text-sm font-semibold text-gray-900">Death Certificate</p>
          <p className="text-xs text-red-500">* Required</p>
        </div>
        {uploaded && <CheckCircle size={20} className="text-green-500" />}
      </div>
      {uploaded ? (
        <div className="flex items-center justify-between bg-green-100 rounded-xl px-3 py-2">
          <span className="text-xs text-green-700 font-medium">{fileName}</span>
          <button type="button" onClick={onRemove} className="text-green-600 hover:text-red-500">
            <X size={14} />
          </button>
        </div>
      ) : (
        <label className="flex items-center justify-center gap-2 bg-white border border-red-200 rounded-xl px-4 py-3 cursor-pointer hover:bg-red-50 transition-all">
          {uploading ? <Loader2 size={16} className="animate-spin text-red-500" /> : <Upload size={16} className="text-red-400" />}
          <span className="text-sm text-red-500">{uploading ? 'Uploading...' : 'Upload Death Certificate'}</span>
          <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={e => {
            const file = e.target.files?.[0]
            if (file) onUpload(file)
          }} />
        </label>
      )}
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
)

export default function GuardianDetailsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [motherStatus, setMotherStatus] = useState<'alive' | 'deceased' | 'unknown' | ''>('')
  const [fatherStatus, setFatherStatus] = useState<'alive' | 'deceased' | 'unknown' | ''>('')
  const [deathCerts, setDeathCerts] = useState<Record<string, { uploaded: boolean; fileName: string }>>({})
  const [uploading, setUploading] = useState<Record<string, boolean>>({})
  const [form, setForm] = useState({
    motherName: '',
    motherPhone: '',
    motherEmail: '',
    motherOccupation: '',
    motherIncome: '',
    fatherName: '',
    fatherPhone: '',
    fatherEmail: '',
    fatherOccupation: '',
    fatherIncome: '',
    guardianName: '',
    guardianRelationship: '',
    guardianOtherRelationship: '',
    guardianPhone: '',
    guardianEmail: '',
    guardianOccupation: '',
    guardianIncome: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const needsGuardian = motherStatus === 'deceased' || motherStatus === 'unknown' ||
    fatherStatus === 'deceased' || fatherStatus === 'unknown'

  const getNsfasStatus = () => {
    if (motherStatus === 'deceased' && fatherStatus === 'deceased') return { label: 'Full Orphan', color: 'bg-red-100 text-red-700 border-red-200' }
    if (motherStatus === 'unknown' && fatherStatus === 'unknown') return { label: 'Child Headed Household', color: 'bg-orange-100 text-orange-700 border-orange-200' }
    if ((motherStatus === 'deceased' || motherStatus === 'unknown') &&
      (fatherStatus === 'deceased' || fatherStatus === 'unknown')) return { label: 'Child Headed Household', color: 'bg-orange-100 text-orange-700 border-orange-200' }
    if (motherStatus === 'deceased' || fatherStatus === 'deceased') return { label: 'Half Orphan', color: 'bg-red-100 text-red-700 border-red-200' }
    if (motherStatus === 'unknown' || fatherStatus === 'unknown') return { label: 'Single Parent Household', color: 'bg-blue-100 text-blue-700 border-blue-200' }
    if (motherStatus === 'alive' && fatherStatus === 'alive') return { label: 'Both Parents Alive', color: 'bg-green-100 text-green-700 border-green-200' }
    return null
  }

  useEffect(() => {
    const loadProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data: profile } = await supabase.from('profiles').select('*').eq('id', user.id).single()
      if (profile?.onboarding_step < 2) { router.push('/onboarding/personal'); return }
      if (profile) {
        setMotherStatus(profile.mother_status || '')
        setFatherStatus(profile.father_status || '')
        setForm(prev => ({
          ...prev,
          motherName: profile.mother_name || '',
          motherPhone: profile.mother_phone || '',
          motherEmail: profile.mother_email || '',
          motherOccupation: profile.mother_occupation || '',
          motherIncome: profile.mother_income || '',
          fatherName: profile.father_name || '',
          fatherPhone: profile.father_phone || '',
          fatherEmail: profile.father_email || '',
          fatherOccupation: profile.father_occupation || '',
          fatherIncome: profile.father_income || '',
          guardianName: profile.guardian_name || '',
          guardianRelationship: profile.guardian_relationship || '',
          guardianPhone: profile.guardian_phone || '',
          guardianEmail: profile.guardian_email || '',
          guardianOccupation: profile.guardian_occupation || '',
          guardianIncome: profile.guardian_income || '',
        }))
      }
    }
    loadProfile()
  }, [])

  const handleUploadDeathCert = async (key: string, file: File) => {
    if (file.size > 5 * 1024 * 1024) { toast.error('File must be less than 5MB'); return }
    setUploading(prev => ({ ...prev, [key]: true }))
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')
      const fileExt = file.name.split('.').pop()
      const filePath = `${user.id}/death_cert_${key}.${fileExt}`
      const { error } = await supabase.storage.from('documents').upload(filePath, file, { upsert: true })
      if (error) throw error
      await supabase.from('documents').upsert({ user_id: user.id, document_type: 'other', file_name: file.name, file_path: filePath })
      setDeathCerts(prev => ({ ...prev, [key]: { uploaded: true, fileName: file.name } }))
      toast.success('Death certificate uploaded!')
    } catch (error: any) {
      toast.error(error.message || 'Upload failed')
    } finally {
      setUploading(prev => ({ ...prev, [key]: false }))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (name.toLowerCase().includes('phone')) {
      if (!/^[\d\s]*$/.test(value)) return
      if (value.replace(/\s/g, '').length > 10) return
    }
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!motherStatus) newErrors.motherStatus = 'Please select mother status'
    if (!fatherStatus) newErrors.fatherStatus = 'Please select father status'

    if (motherStatus === 'alive') {
      if (!form.motherName) newErrors.motherName = 'Mother name is required'
      if (!form.motherPhone) newErrors.motherPhone = 'Mother phone is required'
      else if (!/^\d{10}$/.test(form.motherPhone.replace(/\s/g, ''))) newErrors.motherPhone = 'Must be 10 digits'
      if (!form.motherOccupation) newErrors.motherOccupation = 'Occupation is required'
      if (!form.motherIncome) newErrors.motherIncome = 'Income is required'
    }
    if (motherStatus === 'deceased') {
      if (!deathCerts['mother']?.uploaded) newErrors.motherCert = 'Mother death certificate is required'
    }

    if (fatherStatus === 'alive') {
      if (!form.fatherName) newErrors.fatherName = 'Father name is required'
      if (!form.fatherPhone) newErrors.fatherPhone = 'Father phone is required'
      else if (!/^\d{10}$/.test(form.fatherPhone.replace(/\s/g, ''))) newErrors.fatherPhone = 'Must be 10 digits'
      if (!form.fatherOccupation) newErrors.fatherOccupation = 'Occupation is required'
      if (!form.fatherIncome) newErrors.fatherIncome = 'Income is required'
    }
    if (fatherStatus === 'deceased') {
      if (!deathCerts['father']?.uploaded) newErrors.fatherCert = 'Father death certificate is required'
    }

    if (needsGuardian) {
      if (!form.guardianName) newErrors.guardianName = 'Guardian name is required'
      if (!form.guardianRelationship) newErrors.guardianRelationship = 'Guardian relationship is required'
      if (!form.guardianPhone) newErrors.guardianPhone = 'Guardian phone is required'
      else if (!/^\d{10}$/.test(form.guardianPhone.replace(/\s/g, ''))) newErrors.guardianPhone = 'Must be 10 digits'
      if (!form.guardianOccupation) newErrors.guardianOccupation = 'Occupation is required'
      if (!form.guardianIncome) newErrors.guardianIncome = 'Income is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) { toast.error('Please fill in all required fields'); return }
    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')
      const nsfasStatus = getNsfasStatus()
      const { error } = await supabase.from('profiles').update({
        mother_status: motherStatus,
        father_status: fatherStatus,
        mother_name: form.motherName,
        mother_phone: form.motherPhone,
        mother_email: form.motherEmail,
        mother_occupation: form.motherOccupation,
        mother_income: form.motherIncome,
        mother_deceased: motherStatus === 'deceased',
        father_name: form.fatherName,
        father_phone: form.fatherPhone,
        father_email: form.fatherEmail,
        father_occupation: form.fatherOccupation,
        father_income: form.fatherIncome,
        father_deceased: fatherStatus === 'deceased',
        guardian_name: form.guardianName,
        guardian_relationship: form.guardianRelationship === 'Other'
          ? `Other: ${form.guardianOtherRelationship}`
          : form.guardianRelationship,
        guardian_phone: form.guardianPhone,
        guardian_email: form.guardianEmail,
        guardian_occupation: form.guardianOccupation,
        guardian_income: form.guardianIncome,
        orphan_status: nsfasStatus?.label || 'None',
        onboarding_step: 3,
      }).eq('id', user.id)
      if (error) throw error
      router.push('/onboarding/matric')
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  const inputClass = (field: string) =>
    `w-full border ${errors[field] ? 'border-red-400' : 'border-gray-200'} rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`

  const nsfasStatus = getNsfasStatus()

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      {/* Step indicator */}
      <div className="flex items-center justify-between mb-8">
        {['Personal', 'Guardian', 'Matric', 'Documents', 'Interests'].map((step, i) => (
          <div key={step} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
              i < 1 ? 'bg-green-500 text-white' :
              i === 1 ? 'bg-blue-900 text-white' :
              'bg-gray-100 text-gray-400'
            }`}>
              {i < 1 ? '✓' : i + 1}
            </div>
            <span className={`ml-1 text-xs hidden sm:block ${
              i === 1 ? 'text-blue-900 font-semibold' :
              i < 1 ? 'text-green-600' :
              'text-gray-400'
            }`}>{step}</span>
            {i < 4 && <div className="w-4 sm:w-8 h-px bg-gray-200 mx-1" />}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-1">Parent & Guardian Details</h2>
      <p className="text-gray-500 text-sm mb-4">Required for university applications and NSFAS</p>

      {/* Important banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-6 flex gap-3">
        <AlertCircle size={18} className="text-blue-600 mt-0.5 shrink-0" />
        <div>
          <p className="text-sm font-semibold text-blue-800">Important</p>
          <p className="text-xs text-blue-600 mt-0.5">
            Universities and NSFAS require both parents' information — even if they are deceased or unknown.
            Please complete all sections below accurately.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* MOTHER SECTION */}
        <div className="border border-gray-200 rounded-2xl p-5 space-y-4">
          <p className="text-sm font-bold text-gray-800">👩 Mother's Information</p>
          <Field label="Mother's Status" error={errors.motherStatus} required>
            <StatusSelector value={motherStatus} onChange={setMotherStatus} parentLabel="Mother" />
          </Field>

          {motherStatus === 'alive' && (
            <>
              <Field label="Full Name" error={errors.motherName} required>
                <input type="text" name="motherName" value={form.motherName} onChange={handleChange} placeholder="Mother's full name" className={inputClass('motherName')} />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Phone" error={errors.motherPhone} required>
                  <input type="tel" name="motherPhone" value={form.motherPhone} onChange={handleChange} placeholder="0812345678" maxLength={10} className={inputClass('motherPhone')} />
                </Field>
                <Field label="Email" error={errors.motherEmail}>
                  <input type="email" name="motherEmail" value={form.motherEmail} onChange={handleChange} placeholder="Optional" className={inputClass('motherEmail')} />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Occupation" error={errors.motherOccupation} required>
                  <input type="text" name="motherOccupation" value={form.motherOccupation} onChange={handleChange} placeholder="e.g. Nurse, Teacher" className={inputClass('motherOccupation')} />
                </Field>
                <Field label="Monthly Income" error={errors.motherIncome} required>
                  <select name="motherIncome" value={form.motherIncome} onChange={handleChange} className={`${inputClass('motherIncome')} bg-white`}>
                    <option value="">Select range</option>
                    {INCOME_RANGES.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </Field>
              </div>
            </>
          )}

          {motherStatus === 'deceased' && (
            <DeathCertUpload
              uploaded={deathCerts['mother']?.uploaded}
              uploading={uploading['mother']}
              fileName={deathCerts['mother']?.fileName}
              error={errors.motherCert}
              onUpload={(file: File) => handleUploadDeathCert('mother', file)}
              onRemove={() => setDeathCerts(prev => { const n = { ...prev }; delete n['mother']; return n })}
            />
          )}

          {motherStatus === 'unknown' && (
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-500">✅ Noted — mother's information is unknown. Your guardian details below will be used instead.</p>
            </div>
          )}
        </div>

        {/* FATHER SECTION */}
        <div className="border border-gray-200 rounded-2xl p-5 space-y-4">
          <p className="text-sm font-bold text-gray-800">👨 Father's Information</p>
          <Field label="Father's Status" error={errors.fatherStatus} required>
            <StatusSelector value={fatherStatus} onChange={setFatherStatus} parentLabel="Father" />
          </Field>

          {fatherStatus === 'alive' && (
            <>
              <Field label="Full Name" error={errors.fatherName} required>
                <input type="text" name="fatherName" value={form.fatherName} onChange={handleChange} placeholder="Father's full name" className={inputClass('fatherName')} />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Phone" error={errors.fatherPhone} required>
                  <input type="tel" name="fatherPhone" value={form.fatherPhone} onChange={handleChange} placeholder="0812345678" maxLength={10} className={inputClass('fatherPhone')} />
                </Field>
                <Field label="Email" error={errors.fatherEmail}>
                  <input type="email" name="fatherEmail" value={form.fatherEmail} onChange={handleChange} placeholder="Optional" className={inputClass('fatherEmail')} />
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Occupation" error={errors.fatherOccupation} required>
                  <input type="text" name="fatherOccupation" value={form.fatherOccupation} onChange={handleChange} placeholder="e.g. Engineer, Unemployed" className={inputClass('fatherOccupation')} />
                </Field>
                <Field label="Monthly Income" error={errors.fatherIncome} required>
                  <select name="fatherIncome" value={form.fatherIncome} onChange={handleChange} className={`${inputClass('fatherIncome')} bg-white`}>
                    <option value="">Select range</option>
                    {INCOME_RANGES.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </Field>
              </div>
            </>
          )}

          {fatherStatus === 'deceased' && (
            <DeathCertUpload
              uploaded={deathCerts['father']?.uploaded}
              uploading={uploading['father']}
              fileName={deathCerts['father']?.fileName}
              error={errors.fatherCert}
              onUpload={(file: File) => handleUploadDeathCert('father', file)}
              onRemove={() => setDeathCerts(prev => { const n = { ...prev }; delete n['father']; return n })}
            />
          )}

          {fatherStatus === 'unknown' && (
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-500">✅ Noted — father's information is unknown. Your guardian details below will be used instead.</p>
            </div>
          )}
        </div>

        {/* NSFAS STATUS BADGE */}
        {nsfasStatus && (
          <div className={`border rounded-2xl p-4 ${nsfasStatus.color}`}>
            <p className="text-sm font-bold">🏷️ Your NSFAS Status: {nsfasStatus.label}</p>
            <p className="text-xs mt-1 opacity-80">
              UniPath will automatically apply for the correct NSFAS funding bracket based on your status.
            </p>
          </div>
        )}

        {/* GUARDIAN SECTION — shows when needed */}
        {needsGuardian && (
          <div className="border-2 border-blue-200 rounded-2xl p-5 space-y-4 bg-blue-50">
            <div>
              <p className="text-sm font-bold text-blue-900">👤 Primary Guardian</p>
              <p className="text-xs text-blue-600 mt-0.5">
                Since one or both parents are deceased or unknown, please provide your guardian's details.
              </p>
            </div>

            <Field label="Guardian's Full Name" error={errors.guardianName} required>
              <input type="text" name="guardianName" value={form.guardianName} onChange={handleChange} placeholder="Guardian's full name" className={inputClass('guardianName')} />
            </Field>

            <Field label="Relationship to You" error={errors.guardianRelationship} required>
              <select name="guardianRelationship" value={form.guardianRelationship} onChange={handleChange} className={`${inputClass('guardianRelationship')} bg-white`}>
                <option value="">Select relationship</option>
                {GUARDIAN_RELATIONSHIPS.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </Field>

            {form.guardianRelationship === 'Other' && (
              <Field label="Specify Relationship" error={errors.guardianOtherRelationship} required>
                <input type="text" name="guardianOtherRelationship" value={form.guardianOtherRelationship} onChange={handleChange} placeholder="e.g. Stepparent, Family Friend" className={inputClass('guardianOtherRelationship')} />
              </Field>
            )}

            <div className="grid grid-cols-2 gap-3">
              <Field label="Phone" error={errors.guardianPhone} required>
                <input type="tel" name="guardianPhone" value={form.guardianPhone} onChange={handleChange} placeholder="0812345678" maxLength={10} className={inputClass('guardianPhone')} />
              </Field>
              <Field label="Email" error={errors.guardianEmail}>
                <input type="email" name="guardianEmail" value={form.guardianEmail} onChange={handleChange} placeholder="Optional" className={inputClass('guardianEmail')} />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Occupation" error={errors.guardianOccupation} required>
                <input type="text" name="guardianOccupation" value={form.guardianOccupation} onChange={handleChange} placeholder="e.g. Teacher" className={inputClass('guardianOccupation')} />
              </Field>
              <Field label="Monthly Income" error={errors.guardianIncome} required>
                <select name="guardianIncome" value={form.guardianIncome} onChange={handleChange} className={`${inputClass('guardianIncome')} bg-white`}>
                  <option value="">Select range</option>
                  {INCOME_RANGES.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </Field>
            </div>
          </div>
        )}

        <div className="flex gap-3 mt-2">
          <button type="button" onClick={() => router.push('/onboarding/personal')} className="w-1/3 border border-gray-200 text-gray-600 font-semibold py-4 rounded-2xl hover:bg-gray-50 transition-all">
            ← Back
          </button>
          <button type="submit" disabled={loading} className="w-2/3 bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60">
            {loading ? <><Loader2 size={20} className="animate-spin" /> Saving...</> : 'Next — Matric Results →'}
          </button>
        </div>
      </form>
    </div>
  )
}