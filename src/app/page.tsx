import Link from 'next/link'
import { LogoDark } from '@/components/Logo'

export default function WelcomePage() {
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

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-white border border-[#f0e8d8] rounded-2xl p-4">
            <p className="text-[#1a1a2e] text-2xl font-bold">26</p>
            <p className="text-gray-500 text-sm">Universities</p>
          </div>
          <div className="bg-white border border-[#f0e8d8] rounded-2xl p-4">
            <p className="text-[#1a1a2e] text-2xl font-bold">99+</p>
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
