'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Plus, Pencil, Trash2, Loader2, X, ChevronDown, ChevronUp } from 'lucide-react'
import toast from 'react-hot-toast'

const STREAMS = ['engineering', 'business', 'ict', 'hospitality', 'education', 'agriculture', 'other']
const LEVELS = ['N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'certificate', 'diploma']

export default function TVETAdminPage() {
  const [programmes, setProgrammes] = useState<any[]>([])
  const [colleges, setColleges] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'programmes' | 'colleges'>('programmes')
  const [form, setForm] = useState({
    name: '',
    stream: 'engineering',
    level: 'N6',
    nqf_level: 5,
    min_aps: 0,
    duration: '',
    description: '',
    careers: '',
    is_nsfas_funded: true,
    academic_year: 2025,
  })
  const [subjectReqs, setSubjectReqs] = useState([{ subject: '', minimum_mark: 0 }])
  const [selectedColleges, setSelectedColleges] = useState<string[]>([])

  // College form
  const [showCollegeForm, setShowCollegeForm] = useState(false)
  const [collegeForm, setCollegeForm] = useState({
    name: '', province: '', address: '', phone: '', email: '', website: ''
  })
  const [editingCollegeId, setEditingCollegeId] = useState<string | null>(null)

  const PROVINCES = ['Gauteng', 'Western Cape', 'KwaZulu-Natal', 'Eastern Cape', 'Free State', 'Limpopo', 'Mpumalanga', 'North West', 'Northern Cape']

  const fetchData = async () => {
    const [prog, col] = await Promise.all([
      supabase.from('tvet_programmes').select(`*, tvet_subject_requirements(*), tvet_programme_colleges(*, tvet_colleges(*))`).order('name'),
      supabase.from('tvet_colleges').select('*').order('name'),
    ])
    setProgrammes(prog.data || [])
    setColleges(col.data || [])
    setLoading(false)
  }

  useEffect(() => { fetchData() }, [])

  const resetForm = () => {
    setForm({ name: '', stream: 'engineering', level: 'N6', nqf_level: 5, min_aps: 0, duration: '', description: '', careers: '', is_nsfas_funded: true, academic_year: 2025 })
    setSubjectReqs([{ subject: '', minimum_mark: 0 }])
    setSelectedColleges([])
    setEditingId(null)
  }

  const handleEdit = (prog: any) => {
    setForm({
      name: prog.name,
      stream: prog.stream,
      level: prog.level,
      nqf_level: prog.nqf_level,
      min_aps: prog.min_aps,
      duration: prog.duration,
      description: prog.description,
      careers: prog.careers?.join(', ') || '',
      is_nsfas_funded: prog.is_nsfas_funded,
      academic_year: prog.academic_year,
    })
    setSubjectReqs(prog.tvet_subject_requirements?.length > 0
      ? prog.tvet_subject_requirements
      : [{ subject: '', minimum_mark: 0 }])
    setSelectedColleges(prog.tvet_programme_colleges?.map((c: any) => c.college_id) || [])
    setEditingId(prog.id)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this programme?')) return
    await supabase.from('tvet_programmes').delete().eq('id', id)
    toast.success('Programme deleted')
    fetchData()
  }

  const handleSave = async () => {
    if (!form.name) { toast.error('Programme name is required'); return }
    setSaving(true)
    try {
      const progData = {
        ...form,
        careers: form.careers.split(',').map(c => c.trim()).filter(Boolean),
      }

      let progId = editingId

      if (editingId) {
        await supabase.from('tvet_programmes').update(progData).eq('id', editingId)
        await supabase.from('tvet_subject_requirements').delete().eq('programme_id', editingId)
        await supabase.from('tvet_programme_colleges').delete().eq('programme_id', editingId)
      } else {
        const { data } = await supabase.from('tvet_programmes').insert(progData).select().single()
        progId = data.id
      }

      const validSubjects = subjectReqs.filter(s => s.subject)
      if (validSubjects.length > 0) {
        await supabase.from('tvet_subject_requirements').insert(
          validSubjects.map(s => ({ ...s, programme_id: progId }))
        )
      }

      if (selectedColleges.length > 0) {
        await supabase.from('tvet_programme_colleges').insert(
          selectedColleges.map(collegeId => ({ programme_id: progId, college_id: collegeId }))
        )
      }

      toast.success(editingId ? 'Programme updated!' : 'Programme added!')
      setShowForm(false)
      resetForm()
      fetchData()
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setSaving(false)
    }
  }

  const handleSaveCollege = async () => {
    if (!collegeForm.name) { toast.error('College name is required'); return }
    setSaving(true)
    try {
      if (editingCollegeId) {
        await supabase.from('tvet_colleges').update(collegeForm).eq('id', editingCollegeId)
      } else {
        await supabase.from('tvet_colleges').insert(collegeForm)
      }
      toast.success(editingCollegeId ? 'College updated!' : 'College added!')
      setShowCollegeForm(false)
      setCollegeForm({ name: '', province: '', address: '', phone: '', email: '', website: '' })
      setEditingCollegeId(null)
      fetchData()
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
          <h1 className="text-2xl font-bold text-gray-900">TVET Programmes</h1>
          <p className="text-gray-500 text-sm mt-1">{programmes.length} programmes · {colleges.length} colleges</p>
        </div>
        <button
          onClick={() => {
            if (activeTab === 'programmes') { resetForm(); setShowForm(true) }
            else { setCollegeForm({ name: '', province: '', address: '', phone: '', email: '', website: '' }); setEditingCollegeId(null); setShowCollegeForm(true) }
          }}
          className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-800 transition-all"
        >
          <Plus size={16} /> {activeTab === 'programmes' ? 'Add Programme' : 'Add College'}
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(['programmes', 'colleges'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === tab ? 'bg-blue-900 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-300'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Programme Form */}
      {showForm && activeTab === 'programmes' && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">{editingId ? 'Edit Programme' : 'Add New Programme'}</h2>
            <button onClick={() => { setShowForm(false); resetForm() }} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Programme Name *</label>
              <input type="text" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} placeholder="e.g. Electrical Engineering (N1-N6)" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Stream</label>
              <select value={form.stream} onChange={e => setForm(p => ({ ...p, stream: e.target.value }))} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                {STREAMS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Level</label>
              <select value={form.level} onChange={e => setForm(p => ({ ...p, level: e.target.value }))} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Duration</label>
              <input type="text" value={form.duration} onChange={e => setForm(p => ({ ...p, duration: e.target.value }))} placeholder="e.g. 3 years + 18 months practical" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">NQF Level</label>
              <input type="number" value={form.nqf_level} onChange={e => setForm(p => ({ ...p, nqf_level: parseInt(e.target.value) || 5 }))} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
              <textarea value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))} rows={2} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Career Paths (comma separated)</label>
              <input type="text" value={form.careers} onChange={e => setForm(p => ({ ...p, careers: e.target.value }))} placeholder="e.g. Electrician, Solar Installer" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="nsfas" checked={form.is_nsfas_funded} onChange={e => setForm(p => ({ ...p, is_nsfas_funded: e.target.checked }))} className="w-4 h-4" />
              <label htmlFor="nsfas" className="text-xs font-medium text-gray-700">NSFAS Funded</label>
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
                <input type="text" value={req.subject} onChange={e => setSubjectReqs(p => p.map((r, j) => j === i ? { ...r, subject: e.target.value } : r))} placeholder="Subject" className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="number" value={req.minimum_mark} onChange={e => setSubjectReqs(p => p.map((r, j) => j === i ? { ...r, minimum_mark: parseInt(e.target.value) || 0 } : r))} placeholder="Min %" className="w-20 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center" />
                <button type="button" onClick={() => setSubjectReqs(p => p.filter((_, j) => j !== i))} className="text-gray-400 hover:text-red-500"><X size={16} /></button>
              </div>
            ))}
          </div>

          {/* College Selection */}
          <div className="mb-6">
            <label className="text-xs font-medium text-gray-700 mb-2 block">Colleges Offering This Programme</label>
            <div className="grid grid-cols-2 gap-1 max-h-40 overflow-y-auto border border-gray-200 rounded-xl p-3">
              {colleges.map(college => (
                <label key={college.id} className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedColleges.includes(college.id)}
                    onChange={e => {
                      if (e.target.checked) {
                        setSelectedColleges(p => [...p, college.id])
                      } else {
                        setSelectedColleges(p => p.filter(id => id !== college.id))
                      }
                    }}
                    className="w-3.5 h-3.5"
                  />
                  {college.name}
                </label>
              ))}
              {colleges.length === 0 && <p className="text-xs text-gray-400 col-span-2">Add colleges first in the Colleges tab</p>}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => { setShowForm(false); resetForm() }} className="w-1/3 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm hover:bg-gray-50">Cancel</button>
            <button onClick={handleSave} disabled={saving} className="w-2/3 bg-blue-900 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-800 disabled:opacity-60 flex items-center justify-center gap-2">
              {saving ? <><Loader2 size={16} className="animate-spin" /> Saving...</> : editingId ? 'Update Programme' : 'Save Programme'}
            </button>
          </div>
        </div>
      )}

      {/* College Form */}
      {showCollegeForm && activeTab === 'colleges' && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900">{editingCollegeId ? 'Edit College' : 'Add New College'}</h2>
            <button onClick={() => setShowCollegeForm(false)} className="text-gray-400 hover:text-gray-600"><X size={20} /></button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">College Name *</label>
              <input type="text" value={collegeForm.name} onChange={e => setCollegeForm(p => ({ ...p, name: e.target.value }))} placeholder="e.g. Tshwane North TVET College" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Province</label>
              <select value={collegeForm.province} onChange={e => setCollegeForm(p => ({ ...p, province: e.target.value }))} className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">Select province</option>
                {PROVINCES.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
              <input type="text" value={collegeForm.phone} onChange={e => setCollegeForm(p => ({ ...p, phone: e.target.value }))} placeholder="012 345 6789" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
              <input type="email" value={collegeForm.email} onChange={e => setCollegeForm(p => ({ ...p, email: e.target.value }))} placeholder="info@college.edu.za" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Website</label>
              <input type="text" value={collegeForm.website} onChange={e => setCollegeForm(p => ({ ...p, website: e.target.value }))} placeholder="www.college.edu.za" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Address</label>
              <input type="text" value={collegeForm.address} onChange={e => setCollegeForm(p => ({ ...p, address: e.target.value }))} placeholder="123 Main Street, City" className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setShowCollegeForm(false)} className="w-1/3 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm hover:bg-gray-50">Cancel</button>
            <button onClick={handleSaveCollege} disabled={saving} className="w-2/3 bg-blue-900 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-800 disabled:opacity-60 flex items-center justify-center gap-2">
              {saving ? <><Loader2 size={16} className="animate-spin" /> Saving...</> : 'Save College'}
            </button>
          </div>
        </div>
      )}

      {/* List */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <Loader2 size={24} className="animate-spin text-blue-600" />
        </div>
      ) : activeTab === 'programmes' ? (
        <div className="space-y-3">
          {programmes.length === 0 ? (
            <div className="text-center py-20"><p className="text-gray-400">No programmes yet. Add your first programme!</p></div>
          ) : programmes.map(prog => (
            <div key={prog.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="flex items-center justify-between p-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900">{prog.name}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">{prog.level}</span>
                    {prog.is_nsfas_funded && <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">NSFAS</span>}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {prog.stream} · {prog.duration} · {prog.tvet_programme_colleges?.length || 0} colleges
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => setExpandedId(expandedId === prog.id ? null : prog.id)} className="p-2 text-gray-400 hover:text-gray-600">
                    {expandedId === prog.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  <button onClick={() => handleEdit(prog)} className="p-2 text-blue-500 hover:text-blue-700"><Pencil size={16} /></button>
                  <button onClick={() => handleDelete(prog.id)} className="p-2 text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
                </div>
              </div>
              {expandedId === prog.id && (
                <div className="border-t border-gray-100 p-4 bg-gray-50 space-y-3">
                  {prog.tvet_subject_requirements?.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Subject Requirements:</p>
                      <div className="flex flex-wrap gap-2">
                        {prog.tvet_subject_requirements.map((req: any) => (
                          <span key={req.id} className="text-xs bg-white border border-gray-200 rounded-lg px-2 py-1">{req.subject}: {req.minimum_mark}%+</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {prog.tvet_programme_colleges?.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Colleges:</p>
                      <div className="flex flex-wrap gap-1">
                        {prog.tvet_programme_colleges.map((c: any) => (
                          <span key={c.id} className="text-xs bg-white border border-gray-200 rounded-lg px-2 py-1">{c.tvet_colleges?.name}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {prog.careers?.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-1">Careers:</p>
                      <p className="text-xs text-gray-500">{prog.careers.join(', ')}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {colleges.length === 0 ? (
            <div className="text-center py-20"><p className="text-gray-400">No colleges yet. Add your first college!</p></div>
          ) : colleges.map(college => (
            <div key={college.id} className="bg-white rounded-2xl border border-gray-200 p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-gray-900">{college.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{college.province} {college.phone && `· ${college.phone}`} {college.email && `· ${college.email}`}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => { setCollegeForm(college); setEditingCollegeId(college.id); setShowCollegeForm(true) }} className="p-2 text-blue-500 hover:text-blue-700"><Pencil size={16} /></button>
                <button onClick={async () => { if (!confirm('Delete college?')) return; await supabase.from('tvet_colleges').delete().eq('id', college.id); fetchData() }} className="p-2 text-red-400 hover:text-red-600"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}