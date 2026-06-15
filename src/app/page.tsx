import Link from 'next/link'
import { LogoDark } from '@/components/Logo'
import { createClient } from '@supabase/supabase-js'

export const revalidate = 0

async function getStats() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const [{ count: courseCount }, { data: uniRows }] = await Promise.all([
      supabase.from('courses').select('*', { count: 'exact', head: true }).eq('is_active', true),
      supabase.from('course_universities').select('university_name'),
    ])
    const uniqueUnis = new Set(uniRows?.map((r: any) => r.university_name)).size
    return {
      courses: courseCount ?? 114,
      universities: uniqueUnis || 26,
    }
  } catch {
    return { courses: 114, universities: 26 }
  }
}

export default async function WelcomePage() {
  const stats = await getStats()

  return (
    <main className="min-h-screen bg-[#fef9f0] flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <LogoDark size="lg" />
        </div>

        <p className="text-gray-500 text-lg mt-1 mb-8">Your future starts here</p>

        {/* Tagline */}
        <p className="text-gray-900 text-xl font-semibold mb-1">
          Apply to all South African universities
        </p>
        <p className="text-gray-500 text-lg mb-10">
          in one place. Free. Forever.
        </p>

        {/* Stats — live from database */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-white border border-[#f0e8d8] rounded-2xl p-4">
            <p className="text-[#1a1a2e] text-2xl font-bold">{stats.universities}</p>
            <p className="text-gray-500 text-sm">Universities</p>
          </div>
          <div className="bg-white border border-[#f0e8d8] rounded-2xl p-4">
            <p className="text-[#1a1a2e] text-2xl font-bold">{stats.courses}</p>
            <p className="text-gray-500 text-sm">Courses</p>
          </div>
          <div className="bg-white border border-[#f0e8d8] rounded-2xl p-4">
            <p className="text-[#1a1a2e] text-2xl font-bold">R0</p>
            <p className="text-gray-500 text-sm">Cost to You</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            href="/register"
            className="bg-[#e94560] hover:bg-[#c73550] text-white font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-200 shadow-sm"
          >
            Get Started - It&apos;s Free
          </Link>
          <Link
            href="/login"
            className="bg-white hover:bg-gray-50 text-[#1a1a2e] font-semibold text-lg py-4 px-8 rounded-2xl transition-all duration-200 border border-gray-200"
          >
            Sign In
          </Link>
        </div>

        <p className="text-gray-400 text-sm mt-8">
          Built for every Grade 12 learner in South Africa
        </p>
      </div>
    </main>
  )
}
