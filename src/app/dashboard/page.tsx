'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { BookOpen, Briefcase, FileText, Sparkles, LogOut, User, GraduationCap } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function DashboardPage() {
  const router = useRouter()
  const [profile, setProfile] = useState<any>(null)
  const [aps, setAps] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }

      const { data: prof } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      const { data: apsData } = await supabase
        .from('aps_scores')
        .select('total_aps')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .single()

      setProfile(prof)
      if (apsData) setAps(apsData.total_aps)
      setLoading(false)
    }
    fetchProfile()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900" />
      </div>
    )
  }

  const firstName = profile?.first_name || profile?.full_name?.split(' ')[0] || 'Learner'
  const initials = profile?.first_name && profile?.last_name
    ? `${profile.first_name[0]}${profile.last_name[0]}`.toUpperCase()
    : firstName[0]?.toUpperCase() || 'U'

  const quickActions = [
    {
      title: 'Find Courses',
      description: 'Browse courses matching your APS score',
      icon: BookOpen,
      color: 'bg-blue-50 text-blue-700',
      href: '/courses',
    },
    {
      title: 'Explore Careers',
      description: 'Discover career paths for your subjects',
      icon: Briefcase,
      color: 'bg-purple-50 text-purple-700',
      href: '/careers',
    },
    {
      title: 'My Applications',
      description: 'Track your university applications',
      icon: FileText,
      color: 'bg-green-50 text-green-700',
      href: '/applications',
    },
    {
      title: 'AI Career Guide',
      description: 'Get personalised career advice',
      icon: Sparkles,
      color: 'bg-red-50 text-red-700',
      href: '/agent',
    },
    {
      title: 'NSFAS Funding',
      description: 'Apply for government funding',
      icon: GraduationCap,
      color: 'bg-green-50 text-green-700',
      href: '/nsfas',
    },
    {
      title: 'Bursaries',
      description: 'Find bursaries you qualify for',
      icon: User,
      color: 'bg-orange-50 text-orange-700',
      href: '/bursaries',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex items-center gap-3">
            <Link href="/profile" className="w-9 h-9 bg-red-500 rounded-full flex items-center justify-center text-blue-900 font-bold text-sm hover:bg-red-400 transition-all">
              {initials}
            </Link>
            <button onClick={handleSignOut} className="text-blue-300 hover:text-white transition-all">
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Welcome */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome back, {firstName}! ðŸ‘‹</h2>
          <p className="text-gray-500 text-sm mt-1">Let's find the perfect university for you</p>
        </div>

        {/* APS Card */}
        {aps !== null && (
          <div className="bg-blue-900 rounded-2xl p-5 mb-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-300 text-xs font-medium">Your APS Score</p>
                <p className="text-4xl font-bold mt-1">{aps}<span className="text-lg text-blue-300">/42</span></p>
                <p className="text-blue-300 text-xs mt-1">
                  {aps >= 30 ? '🌟 Excellent â€” qualifies for most degrees' :
                   aps >= 24 ? '✅ Good â€” wide range of options' :
                   aps >= 18 ? 'ðŸ‘ Average â€” many options available' :
                   'ðŸ“š Keep working hard!'}
                </p>
              </div>
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center">
                <GraduationCap size={32} className="text-red-500" />
              </div>
            </div>
            <div className="mt-3 bg-blue-800 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all"
                style={{ width: `${(aps / 42) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Incomplete profile notice */}
        {!profile?.onboarding_complete && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
            <p className="text-sm font-semibold text-red-800">Complete your profile</p>
            <p className="text-xs text-red-600 mt-1">Finish setting up to unlock all features</p>
            <button
              onClick={() => router.push('/onboarding/personal')}
              className="mt-2 text-xs bg-red-500 text-blue-900 font-semibold px-3 py-1.5 rounded-xl hover:bg-red-400"
            >
              Continue Setup →
            </button>
          </div>
        )}

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {quickActions.map(action => (
            <Link
              key={action.title}
              href={action.href}
              className="bg-white rounded-2xl p-4 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${action.color}`}>
                <action.icon size={20} />
              </div>
              <p className="text-sm font-semibold text-gray-900">{action.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{action.description}</p>
            </Link>
          ))}
        </div>

        {/* Profile Card */}
        <Link href="/profile" className="bg-white rounded-2xl p-4 border border-gray-100 hover:border-blue-200 transition-all flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold">
            {initials}
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">{profile?.full_name || firstName}</p>
            <p className="text-xs text-gray-500">{profile?.school_name || 'View your profile'}</p>
          </div>
          <User size={16} className="text-gray-400" />
        </Link>
      </div>

      {/* Floating AI Button */}
      <Link
        href="/agent"
        className="fixed bottom-6 right-6 bg-red-500 text-blue-900 p-4 rounded-full shadow-lg hover:bg-red-400 transition-all flex items-center gap-2 font-semibold text-sm"
      >
        <Sparkles size={20} />
        <span>Career Guide</span>
      </Link>
    </div>
  )
}