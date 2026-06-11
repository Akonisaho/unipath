'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Loader2, Upload, CheckCircle, X } from 'lucide-react'
import toast from 'react-hot-toast'

const REQUIRED_DOCS = [
  { key: 'id', label: 'SA ID / Passport', description: 'Clear copy of your ID or passport', required: true },
  { key: 'grade11_results', label: 'Grade 11 Results', description: 'Your Grade 11 final results', required: true },
  { key: 'matric_results', label: 'Grade 12 / Matric Results', description: 'Your latest matric results or mid-year results', required: false },
  { key: 'proof_of_residence', label: 'Proof of Residence', description: 'Not older than 3 months', required: false },
  { key: 'guardian_id', label: 'Parent/Guardian ID', description: 'Clear copy of parent or guardian ID', required: false },
  { key: 'nsfas', label: 'NSFAS Consent Form', description: 'If applying for NSFAS funding', required: false },
]

export default function DocumentsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [uploads, setUploads] = useState<Record<string, { file: File; uploaded: boolean }>>({})
  const [uploading, setUploading] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const checkStep = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data: profile } = await supabase.from('profiles').select('onboarding_step').eq('id', user.id).single()
      if (profile?.onboarding_step < 4) {
        router.push('/onboarding/matric')
      }
    }
    checkStep()
  }, [])

  const handleFileSelect = async (key: string, file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File must be less than 5MB')
      return
    }

    setUploading({ ...uploading, [key]: true })

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      const fileExt = file.name.split('.').pop()
      const filePath = `${user.id}/${key}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, file, { upsert: true })

      if (uploadError) throw uploadError

      // Save to documents table
      await supabase.from('documents').upsert({
        user_id: user.id,
        document_type: key,
        file_name: file.name,
        file_path: filePath,
      })

      setUploads({ ...uploads, [key]: { file, uploaded: true } })
      toast.success(`${file.name} uploaded successfully!`)
    } catch (error: any) {
      toast.error(error.message || 'Upload failed')
    } finally {
      setUploading({ ...uploading, [key]: false })
    }
  }

  const handleSubmit = async () => {
    const requiredDocs = REQUIRED_DOCS.filter(d => d.required)
    const missingRequired = requiredDocs.filter(d => !uploads[d.key]?.uploaded)

    if (missingRequired.length > 0) {
      toast.error(`Please upload: ${missingRequired.map(d => d.label).join(', ')}`)
      return
    }

    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      await supabase.from('profiles').update({ onboarding_step: 5 }).eq('id', user.id)
      router.push('/onboarding/interests')
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
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i < 3 ? 'bg-green-500 text-white' : i === 3 ? 'bg-blue-900 text-white' : 'bg-gray-100 text-gray-400'}`}>
              {i < 3 ? 'âœ“' : i + 1}
            </div>
            <span className={`ml-1 text-xs hidden sm:block ${i === 3 ? 'text-blue-900 font-semibold' : i < 3 ? 'text-green-600' : 'text-gray-400'}`}>{step}</span>
            {i < 4 && <div className="w-6 sm:w-12 h-px bg-gray-200 mx-2" />}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-1">Upload Documents</h2>
      <p className="text-gray-500 text-sm mb-2">Upload your documents â€” max 5MB per file. PDF, JPG or PNG accepted.</p>

      {/* Important notice */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 space-y-2">
        <p className="text-sm font-bold text-red-800">âš ï¸ Before uploading please ensure:</p>
        <ul className="space-y-1">
          {[
            'Documents must be certified by a Commissioner of Oaths',
            'Copies must be clear, readable and all pages included',
            'Make sure you are uploading the CORRECT document',
            'Certified copies must not be older than 3 months',
            'File must be PDF, JPG or PNG â€” max 5MB',
          ].map((item, i) => (
            <li key={i} className="text-xs text-red-700 flex items-start gap-2">
              <span className="text-red-600 mt-0.5">â€¢</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        {REQUIRED_DOCS.map((doc) => (
          <div key={doc.key} className={`border-2 rounded-2xl p-4 transition-all ${uploads[doc.key]?.uploaded ? 'border-green-300 bg-green-50' : 'border-dashed border-gray-200'}`}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-gray-900">{doc.label}</p>
                  {doc.required && <span className="text-red-500 text-xs">*Required</span>}
                  {!doc.required && <span className="text-gray-400 text-xs">Optional</span>}
                </div>
                <p className="text-xs text-gray-400 mt-0.5">{doc.description}</p>
              </div>
              {uploads[doc.key]?.uploaded && (
                <CheckCircle size={20} className="text-green-500 ml-2 mt-0.5" />
              )}
            </div>

            {uploads[doc.key]?.uploaded ? (
              <div className="mt-3 flex items-center justify-between bg-green-100 rounded-xl px-3 py-2">
                <span className="text-xs text-green-700 font-medium">{uploads[doc.key].file.name}</span>
                <button
                  onClick={() => {
                    const newUploads = { ...uploads }
                    delete newUploads[doc.key]
                    setUploads(newUploads)
                  }}
                  className="text-green-600 hover:text-red-500 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <label className="mt-3 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 cursor-pointer transition-all">
                {uploading[doc.key] ? (
                  <Loader2 size={16} className="animate-spin text-blue-600" />
                ) : (
                  <Upload size={16} className="text-gray-400" />
                )}
                <span className="text-sm text-gray-500">
                  {uploading[doc.key] ? 'Uploading...' : 'Click to upload'}
                </span>
                <input
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden"
                  onChange={e => {
                    const file = e.target.files?.[0]
                    if (file) handleFileSelect(doc.key, file)
                  }}
                />
              </label>
            )}
          </div>
        ))}
      </div>

      {/* Skip option */}
      <p className="text-center text-xs text-gray-400 mt-4">
        You can also upload documents later from your dashboard
      </p>

      <div className="flex gap-3 mt-4">
        <button
          type="button"
          onClick={() => router.push('/onboarding/matric')}
          className="w-1/3 border border-gray-200 text-gray-600 font-semibold py-4 rounded-2xl hover:bg-gray-50 transition-all"
        >
          â† Back
        </button>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-2/3 bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading ? <><Loader2 size={20} className="animate-spin" /> Saving...</> : 'Next â€” Course Interests â†’'}
        </button>
      </div>
    </div>
  )
}