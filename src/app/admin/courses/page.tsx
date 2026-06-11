'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Plus, Pencil, Trash2, Loader2, X, ChevronDown, ChevronUp } from 'lucide-react'
import toast from 'react-hot-toast'

const LEVELS = ['degree', 'diploma', 'certificate', 'honours', 'postgrad']
const FACULTIES = [
  'Health Sciences', 'Law', 'Commerce', 'Engineering', 'Science',
  'Education', 'Humanities', 'Agriculture', 'Built Environment', 'Other'
]
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

export default function CoursesAdminPage() {
  const [courses, setCourses] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '',
    faculty: '',
    level: 'degree',
    nqf_level: 7,
    min_aps: 0,
    duration: '',
    description: '',
    careers: '',
    academic_year: 2025,
  })
  const [subjectReqs, setSubjectReqs] = useState([{ subject: '', minimum_mark: 0 }])
  const [uniReqs, setUniReqs] = useState([{ university_name: '', min_aps: 0, application_deadline: '', application_url: '' }])

  const fetchCourses = async () => {
    const { data } = await supabase
      .from('courses')
      .select(`*, course_subject_requirements(*), course_universities(*)`)
      .order('name')
    setCourses(data || [])
    setLoading(false)
  }

  useEffect(() => { fetchCourses() }, [])

  const resetForm = () => {
    setForm({ name: '', faculty: '', level: 'degree', nqf_level: 7, min_aps: 0, duration: '', description: '', careers: '', academic_year: 2025 })
    setSubjectReqs([{ subject: '', minimum_mark: 0 }])
    setUniReqs([{ university_name: '', min_aps: 0, application_deadline: '', application_url: '' }])
    setEditingId(null)
  }

  const handleEdit = (course: any) => {
    setForm({
      name: course.name,
      faculty: course.faculty,
      level: course.level,
      nqf_level: course.nqf_level,
      min_aps: course.min_aps,
      duration: course.duration,
      description: course.description,
      careers: course.careers?.join(', ') || '',
      academic_year: course.academic_year,
    })
    setSubjectReqs(course.course_subject_requirements?.length > 0
      ? course.course_subject_requirements
      : [{ subject: '', minimum_mark: 0 }])
    setUniReqs(course.course_universities?.length > 0
      ? course.course_universities
      : [{ university_name: '', min_aps: 0, application_deadline: '', application_url: '' }])
    setEditingId(course.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this course?')) return
    await supabase.from('courses').delete().eq('id', id)
    toast.success('Course deleted')
    fetchCourses()
  }

  const handleSave = async () => {
    if (!form.name) { toast.error('Course name is required'); return }
    setSaving(true)
    try {
      const courseData = {
        ...form,
        careers: form.careers.split(',').map(c => c.trim()).filter(Boolean),
      }

      let courseId = editingId

      if (editingId) {
        await supabase.from('courses').update(courseData).eq('id', editingId)
        await supabase.from('course_subject_requirements').delete().eq('course_id', editingId)
        await supabase.from('course_universities').delete().eq('course_id', editingId)
      } else {
        const { data } = await supabase.from('courses').insert(courseData).select().single()
        courseId = data.id
      }

      const validSubjects = subjectReqs.filter(s => s.subject)
      if (validSubjects.length > 0) {
        await supabase.from('course_subject_requirements').insert(
          validSubjects.map(s => ({ ...s, course_id: courseId }))
        )
      }

      const validUnis = uniReqs.filter(u => u.university_name)
      if (validUnis.length > 0) {
        await supabase.from('course_universities').insert(
          validUnis.map(u => ({ ...u, course_id: courseId }))
        )
      }

      toast.success(editingId ? 'Course updated!' : 'Course added!')
      setShowForm(false)
      resetForm()
      fetchCourses()
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">University Courses</h1>
          <p className="text-gray-500 text-sm mt-1">{courses.length} courses in database</p>
        </div>
        <button
          onClick={() => { resetForm(); setShowForm(true) }}
          className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-800 transition-all"
        >
          <Plus size={16} /> Add Course
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">{editingId ? 'Edit Course' : 'Add New Course'}</h2>
            <button onClick={() => { setShowForm(false); resetForm() }} className="text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Course Name *</label>
              <input type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="e.g. MBChB (Bachelor of Medicine and Surgery)" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Faculty</label>
              <select value={form.faculty} onChange={e => setForm(p => ({ ...p, faculty: e.target.value }))} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Select faculty</option>
                {FACULTIES.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Level</label>
              <select value={form.level} onChange={e => setForm(p => ({ ...p, level: e.target.value }))} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Minimum APS</label>
              <input type="number" value={form.min_aps} onChange={e => setForm(p => ({ ...p, min_aps: parseInt(e.target.value) || 0 }))} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">NQF Level</label>
              <input type="number" value={form.nqf_level} onChange={e => setForm(p => ({ ...p, nqf_level: parseInt(e.target.value) || 7 }))} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Duration</label>
              <input type="text" value={form.duration} onChange={e => setForm(p => ({ ...p, duration: e.target.value }))} placeholder="e.g. 4 years" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Academic Year</label>
              <input type="number" value={form.academic_year} onChange={e => setForm(p => ({ ...p, academic_year: parseInt(e.target.value) || 2025 }))} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
              <textarea value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} rows={2} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Career Paths (comma separated)</label>
              <input type="text" value={form.careers} onChange={e => setForm(p => ({ ...p, careers: e.target.value }))} placeholder="e.g. Doctor, Surgeon, Specialist" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          {/* Subject Requirements */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-gray-700">Subject Requirements</label>
              <button type="button" onClick={() => setSubjectReqs(p => [...p, { subject: '', minimum_mark: 0 }])} className="text-xs text-blue-600 hover:underline">+ Add Subject</button>
            </div>
            {subjectReqs.map((req, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <input type="text" value={req.subject} onChange={e => setSubjectReqs(p => p.map((r, j) => j === i ? { ...r, subject: e.target.value } : r))} placeholder="Subject name" className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="number" value={req.minimum_mark} onChange={e => setSubjectReqs(p => p.map((r, j) => j === i ? { ...r, minimum_mark: parseInt(e.target.value) || 0 } : r))} placeholder="Min %" className="w-20 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center" />
                <button type="button" onClick={() => setSubjectReqs(p => p.filter((_, j) => j !== i))} className="text-gray-400 hover:text-red-500"><X size={16} /></button>
              </div>
            ))}
          </div>

          {/* University Requirements */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-gray-700">Universities Offering This Course</label>
              <button type="button" onClick={() => setUniReqs(p => [...p, { university_name: '', min_aps: 0, application_deadline: '', application_url: '' }])} className="text-xs text-blue-600 hover:underline">+ Add University</button>
            </div>
            {uniReqs.map((req, i) => (
              <div key={i} className="grid grid-cols-4 gap-2 mb-2">
                <div className="col-span-2">
                  <select value={req.university_name} onChange={e => setUniReqs(p => p.map((r, j) => j === i ? { ...r, university_name: e.target.value } : r))} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                    <option value="">Select university</option>
                    {UNIVERSITIES.map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>
                <input type="number" value={req.min_aps} onChange={e => setUniReqs(p => p.map((r, j) => j === i ? { ...r, min_aps: parseInt(e.target.value) || 0 } : r))} placeholder="APS" className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center" />
                <div className="flex gap-1">
                  <input type="text" value={req.application_deadline} onChange={e => setUniReqs(p => p.map((r, j) => j === i ? { ...r, application_deadline: e.target.value } : r))} placeholder="Deadline" className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <button type="button" onClick={() => setUniReqs(p => p.filter((_, j) => j !== i))} className="text-gray-400 hover:text-red-500"><X size={16} /></button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button onClick={() => { setShowForm(false); resetForm() }} className="w-1/3 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm hover:bg-gray-50">Cancel</button>
            <button onClick={handleSave} disabled={saving} className="w-2/3 bg-blue-900 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-800 disabled:opacity-60 flex items-center justify-center gap-2">
              {saving ? <><Loader2 size={16} className="animate-spin" /> Saving...</> : editingId ? 'Update Course' : 'Save Course'}
            </button>
          </div>
        </div>
      )}

      {/* Courses List */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 size={24} className="animate-spin text-blue-600" />
        </div>
      ) : courses.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400">No courses yet. Add your first course!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="flex items-center justify-between p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900">{course.name}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      course.level === 'degree' ? 'bg-blue-100 text-blue-700' :
                      course.level === 'diploma' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>{course.level}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {course.faculty} · APS {course.min_aps}+ · {course.duration} · {course.course_universities?.length || 0} universities
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setExpandedId(expandedId === course.id ? null : course.id)} className="p-2 text-gray-400 hover:text-gray-600">
                    {expandedId === course.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  <button onClick={() => handleEdit(course)} className="p-2 text-blue-500 hover:text-blue-700">
                    <Pencil size={16} />
                  </button>
                  <button onClick={() => handleDelete(course.id)} className="p-2 text-red-400 hover:text-red-600">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {expandedId === course.id && (
                <div className="border-t border-gray-100 p-4 bg-gray-50 space-y-3">
                  {course.course_subject_requirements?.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Subject Requirements:</p>
                      <div className="flex flex-wrap gap-2">
                        {course.course_subject_requirements.map((req: any) => (
                          <span key={req.id} className="text-xs bg-white border border-gray-200 rounded-lg px-2 py-1">
                            {req.subject}: {req.minimum_mark}%+
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {course.course_universities?.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Universities:</p>
                      <div className="grid grid-cols-2 gap-1">
                        {course.course_universities.map((uni: any) => (
                          <span key={uni.id} className="text-xs bg-white border border-gray-200 rounded-lg px-2 py-1">
                            {uni.university_name} — APS {uni.min_aps}+
                            {uni.application_deadline && ` · Due: ${uni.application_deadline}`}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {course.careers?.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Career Paths:</p>
                      <p className="text-xs text-gray-500">{course.careers.join(', ')}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}