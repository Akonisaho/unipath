import Link from 'next/link'

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white tracking-tight">
            Uni<span className="text-red-500">Path</span>
          </h1>
          <p className="text-blue-200 text-lg mt-2">
            Your future starts here
          </p>
        </div>

        {/* Tagline */}
        <p className="text-white text-xl font-medium mb-2">
          Apply to all South African universities
        </p>
        <p className="text-blue-200 text-lg mb-10">
          in one click. Free. Forever.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-white/10 rounded-2xl p-4">
            <p className="text-white text-2xl font-bold">26</p>
            <p className="text-blue-200 text-sm">Universities</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-4">
            <p className="text-white text-2xl font-bold">1</p>
            <p className="text-blue-200 text-sm">Click to Apply</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-4">
            <p className="text-white text-2xl font-bold">R0</p>
            <p className="text-blue-200 text-sm">Cost to You</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <Link
            href="/register"
            className="bg-red-500 hover:bg-red-400 text-blue-900 font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg"
          >
            Get Started â€” It's Free
          </Link>
          <Link
            href="/login"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold text-lg py-4 px-8 rounded-2xl transition-all duration-200 border border-white/20"
          >
            Sign In
          </Link>
        </div>

        <p className="text-blue-300 text-sm mt-8">
          Built for every Grade 12 learner in South Africa ðŸ‡¿ðŸ‡¦
        </p>
      </div>
    </main>
  )
}
