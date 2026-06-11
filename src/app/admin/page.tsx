'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { BookOpen, GraduationCap, Users, Building2 } from 'lucide-react'

export default function AdminPage() {
  const [stats, setStats] = useState({
    courses: 0,
    tvet: 0,
    users: 0,
    colleges: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      const [courses, tvet, users, colleges] = await Promise.all([
        supabase.from('courses').select('id', { count: 'exact' }),
        supabase.from('tvet_programmes').select('id', { count: 'exact' }),
        supabase.from('profiles').select('id', { count: 'exact' }),
        supabase.from('tvet_colleges').select('id', { count: 'exact' }),
      ])
      setStats({
        courses: courses.count || 0,
        tvet: tvet.count || 0,
        users: users.count || 0,
        colleges: colleges.count || 0,
      })
    }
    fetchStats()
  }, [])

  const cards = [
    { label: 'University Courses', value: stats.courses, icon: BookOpen, color: 'bg-blue-100 text-blue-700' },
    { label: 'TVET Programmes', value: stats.tvet, icon: GraduationCap, color: 'bg-green-100 text-green-700' },
    { label: 'Registered Users', value: stats.users, icon: Users, color: 'bg-purple-100 text-purple-700' },
    { label: 'TVET Colleges', value: stats.colleges, icon: Building2, color: 'bg-yellow-100 text-yellow-700' },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, Takalani 👋</h1>
        <p className="text-gray-500 text-sm mt-1">UniPath Admin Dashboard — {new Date().getFullYear()}</p>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {cards.map(card => (
          <div key={card.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${card.color}`}>
              <card.icon size={24} />
            </div>
            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
            <p className="text-sm text-gray-500 mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
        <p className="text-sm font-bold text-yellow-800 mb-2">📋 Annual Tasks</p>
        <ul className="space-y-2">
          {[
            'Upload new university prospectuses for 2026',
            'Update APS requirements per university',
            'Review and update TVET programme requirements',
            'Update application deadlines',
            'Verify NSFAS funding availability',
          ].map((task, i) => (
            <li key={i} className="text-xs text-yellow-700 flex items-center gap-2">
              <span>☐</span> {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}