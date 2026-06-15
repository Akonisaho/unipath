'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { BookOpen, GraduationCap, Users, LayoutDashboard, LogOut, FileText } from 'lucide-react'
import Logo from '@/components/Logo'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const checkAdmin = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      if (profile?.role !== 'admin') {
        router.push('/dashboard')
        return
      }
      setChecking(false)
    }
    checkAdmin()
  }, [])

  if (checking) {
    return (
      <div className="min-h-screen bg-[#fef9f0] flex items-center justify-center">
        <p className="text-gray-500 text-sm">Checking access...</p>
      </div>
    )
  }

  const navItems = [
    { href: '/admin', label: 'Overview', icon: LayoutDashboard },
    { href: '/admin/courses', label: 'Manage Courses', icon: BookOpen },
    { href: '/admin/prospectus', label: 'Prospectuses', icon: FileText },
    { href: '/admin/tvet', label: 'TVET Programmes', icon: GraduationCap },
    { href: '/admin/users', label: 'Users', icon: Users },
  ]

  return (
    <div className="min-h-screen bg-[#fef9f0] flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 border-b border-blue-800">
          <Logo size="sm" />
          <p className="text-blue-300 text-xs mt-1">Admin Dashboard</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-blue-200 hover:bg-blue-800 hover:text-white transition-all"
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-blue-800">
          <button
            onClick={async () => {
              await supabase.auth.signOut()
              router.push('/login')
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-blue-200 hover:bg-blue-800 hover:text-white transition-all w-full"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}