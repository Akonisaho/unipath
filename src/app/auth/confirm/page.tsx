'use client'

import { Suspense, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

function ConfirmInner() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const redirectUser = async (userId: string) => {
    const { data: profile } = await supabase
      .from('profiles')
      .select('onboarding_complete, role')
      .eq('id', userId)
      .single()

    if (profile?.role === 'admin') {
      router.push('/admin')
    } else if (profile?.onboarding_complete) {
      router.push('/dashboard')
    } else {
      router.push('/onboarding/personal')
    }
  }

  useEffect(() => {
    const handleAuth = async () => {
      const code = searchParams.get('code')
      const token_hash = searchParams.get('token_hash')
      const type = searchParams.get('type')

      try {
        if (token_hash && type) {
          const { error } = await supabase.auth.verifyOtp({
            token_hash,
            type: type as any
          })
          if (!error) {
            if (type === 'recovery') {
              router.push('/reset-password')
              return
            }
            const { data: { user } } = await supabase.auth.getUser()
            if (user) { await redirectUser(user.id); return }
          }
        }

        if (code) {
          const { data, error } = await supabase.auth.exchangeCodeForSession(code)
          if (!error && data.user) {
            await redirectUser(data.user.id)
            return
          }
        }
      } catch (err) {
        console.error('Auth error:', err)
      }

      router.push('/login')
    }

    handleAuth()
  }, [])

  return (
    <div className="min-h-screen bg-[#fef9f0] flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">⏳</div>
        <p className="text-gray-500 text-sm">Setting up your account...</p>
      </div>
    </div>
  )
}

export default function ConfirmPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#fef9f0] flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">⏳</div>
          <p className="text-gray-500 text-sm">Setting up your account...</p>
        </div>
      </div>
    }>
      <ConfirmInner />
    </Suspense>
  )
}
