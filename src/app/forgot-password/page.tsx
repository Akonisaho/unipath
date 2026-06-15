'use client'

import { useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { LogoDark } from '@/components/Logo'
import { Loader2, ArrowLeft, Mail } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/confirm?type=recovery`,
    })

    setLoading(false)
    if (error) {
      setError(error.message)
    } else {
      setSent(true)
    }
  }

  return (
    <main className="min-h-screen bg-[#fef9f0] flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-6">
          <LogoDark size="md" />
        </div>

        {sent ? (
          <div className="bg-white rounded-3xl border border-gray-100 p-8 text-center shadow-sm">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={28} className="text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Check your email</h2>
            <p className="text-gray-500 text-sm mb-6">
              We sent a password reset link to <span className="font-semibold text-gray-700">{email}</span>. Check your inbox and click the link.
            </p>
            <p className="text-xs text-gray-400 mb-6">Didn't get it? Check your spam folder or try again.</p>
            <button
              onClick={() => setSent(false)}
              className="text-sm text-blue-600 hover:underline"
            >
              Try a different email
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Reset your password</h2>
            <p className="text-gray-500 text-sm mb-6">Enter your email and we'll send you a reset link.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-2">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : 'Send Reset Link'}
              </button>
            </form>
          </div>
        )}

        <div className="text-center mt-6">
          <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-gray-700">
            <ArrowLeft size={16} /> Back to sign in
          </Link>
        </div>
      </div>
    </main>
  )
}
