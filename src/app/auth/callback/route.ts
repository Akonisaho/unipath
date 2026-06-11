import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const requestUrl = new URL(req.url)
  const code = requestUrl.searchParams.get('code')
  const token_hash = requestUrl.searchParams.get('token_hash')
  const type = requestUrl.searchParams.get('type')

  console.log('=== AUTH CALLBACK ===')
  console.log('code:', code)
  console.log('token_hash:', token_hash)
  console.log('type:', type)
  console.log('full URL:', req.url)

  if (code || (token_hash && type)) {
    const params = new URLSearchParams()
    if (code) params.set('code', code)
    if (token_hash) params.set('token_hash', token_hash)
    if (type) params.set('type', type)
    
    return NextResponse.redirect(`${requestUrl.origin}/auth/confirm?${params.toString()}`)
  }

  console.log('No code or token found — redirecting to login')
  return NextResponse.redirect(`${requestUrl.origin}/login`)
}