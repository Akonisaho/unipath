'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Upload, Loader2, CheckCircle, X, FileText, Sparkles } from 'lucide-react'
import toast from 'react-hot-toast'

const UNIVERSITIES = [
  'University of Cape Town (UCT)', 'University of the Witwatersrand (Wits)',
  'University of Pretoria (UP)', 'Stellenbosch University (SU)',
  'University of Johannesburg (UJ)', 'University of KwaZulu-Natal (UKZN)',
  'North-West University (NWU)', 'University of the Free State (UFS)',
  'Rhodes University', 'Walter Sisulu University (WSU)',
  'University of Fort Hare (UFH)', 'University of Zululand (UNIZULU)',
  'Mangosuthu University of Technology (MUT)', 'Durban University of Technology (DUT)',
  'Tshwane University of Technology (TUT)', 'Vaal University of Technology (VUT)',
  'Cape Peninsula University of Technology (CPUT)', 'Central University of Technology (CUT)',
  'University of South Africa (UNISA)', 'Sefako Makgatho Health Sciences University (SMU)',
  'University of Limpopo (UL)', 'University of Venda (UNIVEN)',
  'University of Mpumalanga (UMP)', 'Sol Plaatje University (SPU)',
  'University of the Western Cape (UWC)', 'Nelson Mandela University (NMU)',
]

export default function ProspectusPage() {
  const [uploads, setUploads] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [extracting, setExtracting] = useState<string | null>(null)
  const [extractedCourses, setExtractedCourses] = useState<any[]>([])
  const [showExtracted, setShowExtracted] = useState(false)
  const [form, setForm] = useState({
    institution_name: '',
    institution_type: 'university',
    academic_year: 2025,
  })

  const fetchUploads = async () => {
    const { data } = await supabase
      .from('prospectus_uploads')
      .select('*')
      .order('created_at', { ascending: false })
    setUploads(data || [])
    setLoading(false)
  }

  useEffect(() => { fetchUploads() }, [])

  const handleUpload = async (file: File) => {
    if (!form.institution_name) {
      toast.error('Please select an institution first')
      return
    }
    if (file.size > 50 * 1024 * 1024) {
      toast.error('File must be less than 50MB')
      return
    }
    setUploading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      const fileExt = file.name.split('.').pop()
      const filePath = `prospectus/${form.institution_name.replace(/[^a-zA-Z0-9]/g, '_')}_${form.academic_year}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, file, { upsert: true })
      if (uploadError) throw uploadError

      await supabase.from('prospectus_uploads').insert({
        institution_name: form.institution_name,
        institution_type: form.institution_type,
        academic_year: form.academic_year,
        file_path: filePath,
        file_name: file.name,
        uploaded_by: user.id,
      })

      toast.success('Prospectus uploaded!')
      fetchUploads()
    } catch (error: any) {
      toast.error(error.message || 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const handleExtract = async (upload: any) => {
    setExtracting(upload.id)
    setExtractedCourses([])
    setShowExtracted(false)
    try {
      const { data: fileData } = await supabase.storage
        .from('documents')
        .download(upload.file_path)
      if (!fileData) throw new Error('Could not download file')

      const base64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve((reader.result as string).split(',')[1])
        reader.onerror = reject
        reader.readAsDataURL(fileData)
      })

      const response = await fetch('/api/extract-prospectus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          base64,
          fileName: upload.file_name,
          institutionName: upload.institution_name,
          institutionType: upload.institution_type,
          academicYear: upload.academic_year,
        }),
      })

      const data = await response.json()
      if (data.courses) {
        setExtractedCourses(data.courses)
        setShowExtracted(true)
        toast.success(`Extracted ${data.courses.length} courses!`)
      }
    } catch (error: any) {
      toast.error(error.message || 'Extraction failed')
    } finally {
      setExtracting(null)
    }
  }

  const handleSaveCourses = async (courses: any[]) => {
    setLoading(true)
    try {
      for (const course of courses) {
        if (!course.selected) continue
        const { data: courseData } = await supabase
          .from('courses')
          .insert({
            name: course.name,
            faculty: course.faculty,
            level: course.level,
            nqf_level: course.nqf_level,
            min_aps: course.min_aps,
            duration: course.duration,
            description: course.description,
            careers: course.careers,
            academic_year: course.academic_year,
          })
          .select()
          .single()

        if (courseData) {
          if (course.subject_requirements?.length > 0) {
            await supabase.from('course_subject_requirements').insert(
              course.subject_requirements.map((req: any) => ({
                course_id: courseData.id,
                subject: req.subject,
                minimum_mark: req.minimum_mark,
              }))
            )
          }
          await supabase.from('course_universities').insert({
            course_id: courseData.id,
            university_name: course.university_name,
            min_aps: course.min_aps,
            application_deadline: course.application_deadline,
          })
        }
      }

      await supabase
        .from('prospectus_uploads')
        .update({ processed: true, processed_at: new Date().toISOString() })
        .eq('id', uploads.find(u => u.institution_name === courses[0]?.university_name)?.id)

      toast.success('Courses saved to database!')
      setShowExtracted(false)
      setExtractedCourses([])
      fetchUploads()
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Upload Prospectus</h1>
        <p className="text-gray-500 text-sm mt-1">Upload university prospectus PDFs — AI will extract course information automatically</p>
      </div>

      {/* Upload Form */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 shadow-sm">
        <h2 className="text-sm font-bold text-gray-800 mb-4">Upload New Prospectus</h2>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="col-span-2">
            <label className="block text-xs font-medium text-gray-700 mb-1">Institution</label>
            <select
              value={form.institution_name}
              onChange={e => setForm(p => ({ ...p, institution_name: e.target.value }))}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Select institution</option>
              <optgroup label="Universities">
                {UNIVERSITIES.map(u => <option key={u} value={u}>{u}</option>)}
              </optgroup>
              <optgroup label="TVET">
                <option value="TVET - National Programmes">TVET - National Programmes</option>
              </optgroup>
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Academic Year</label>
            <input
              type="number"
              value={form.academic_year}
              onChange={e => setForm(p => ({ ...p, academic_year: parseInt(e.target.value) || 2025 }))}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <label className={`flex flex-col items-center justify-center border-2 border-dashed rounded-2xl p-8 cursor-pointer transition-all ${uploading ? 'border-blue-300 bg-blue-50' : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'}`}>
          {uploading ? (
            <>
              <Loader2 size={32} className="animate-spin text-blue-600 mb-2" />
              <p className="text-sm text-blue-600 font-medium">Uploading...</p>
            </>
          ) : (
            <>
              <Upload size={32} className="text-gray-400 mb-2" />
              <p className="text-sm font-medium text-gray-700">Click to upload prospectus PDF</p>
              <p className="text-xs text-gray-400 mt-1">PDF or TXT — max 50MB</p>
            </>
          )}
          <input type="file" accept=".pdf,.txt" className="hidden" onChange={e => {
            const file = e.target.files?.[0]
            if (file) handleUpload(file)
          }} />
        </label>
      </div>

      {/* Extracted Courses Review */}
      {showExtracted && extractedCourses.length > 0 && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold text-gray-800">AI Extracted {extractedCourses.length} Courses</h2>
              <p className="text-xs text-gray-500 mt-0.5">Review and deselect any incorrect entries before saving</p>
            </div>
            <button onClick={() => setShowExtracted(false)} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto mb-4">
            {extractedCourses.map((course, i) => (
              <div key={i} className={`border rounded-xl p-3 transition-all ${course.selected !== false ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50 opacity-50'}`}>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={course.selected !== false}
                    onChange={e => setExtractedCourses(p => p.map((c, j) => j === i ? { ...c, selected: e.target.checked } : c))}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">{course.name}</p>
                    <p className="text-xs text-gray-500">{course.faculty} · APS {course.min_aps}+ · {course.duration}</p>
                    {course.subject_requirements?.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1">
                        {course.subject_requirements.map((req: any, j: number) => (
                          <span key={j} className="text-xs bg-white border border-gray-200 rounded-lg px-1.5 py-0.5">
                            {req.subject}: {req.minimum_mark}%+
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button onClick={() => setShowExtracted(false)} className="w-1/3 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm hover:bg-gray-50">Cancel</button>
            <button
              onClick={() => handleSaveCourses(extractedCourses)}
              className="w-2/3 bg-blue-900 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-800 flex items-center justify-center gap-2"
            >
              <CheckCircle size={16} />
              Save {extractedCourses.filter(c => c.selected !== false).length} Courses
            </button>
          </div>
        </div>
      )}

      {/* Uploads List */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-sm font-bold text-gray-800">Uploaded Prospectuses</h2>
        </div>
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 size={24} className="animate-spin text-blue-600" />
          </div>
        ) : uploads.length === 0 ? (
          <div className="text-center py-12">
            <FileText size={32} className="text-gray-300 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">No prospectuses uploaded yet</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {uploads.map(upload => (
              <div key={upload.id} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                    <FileText size={20} className="text-red-500" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{upload.institution_name}</p>
                    <p className="text-xs text-gray-500">{upload.file_name} · {upload.academic_year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {upload.processed ? (
                    <span className="flex items-center gap-1 text-xs text-green-600 font-medium">
                      <CheckCircle size={14} /> Processed
                    </span>
                  ) : (
                    <button
                      onClick={() => handleExtract(upload)}
                      disabled={extracting === upload.id}
                      className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all disabled:opacity-60"
                    >
                      {extracting === upload.id ? (
                        <><Loader2 size={12} className="animate-spin" /> Extracting...</>
                      ) : (
                        <><Sparkles size={12} /> Extract with AI</>
                      )}
                    </button>
                  )}
                  <button
                    onClick={async () => {
                      if (!confirm('Delete this upload?')) return
                      await supabase.storage.from('documents').remove([upload.file_path])
                      await supabase.from('prospectus_uploads').delete().eq('id', upload.id)
                      fetchUploads()
                    }}
                    className="p-2 text-red-400 hover:text-red-600"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}