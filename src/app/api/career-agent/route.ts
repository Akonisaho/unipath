import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const DAILY_LIMIT = 20

export async function POST(req: NextRequest) {
  try {
    const { message, context, history, userId } = await req.json()

    // Rate limiting — 20 messages per student per day
    if (userId) {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      )

      const today = new Date().toISOString().split('T')[0]

      const { data: usage } = await supabase
        .from('agent_usage')
        .select('message_count')
        .eq('user_id', userId)
        .eq('date', today)
        .single()

      if (usage && usage.message_count >= DAILY_LIMIT) {
        return NextResponse.json({
          response: `You've reached your daily limit of ${DAILY_LIMIT} messages. Come back tomorrow! In the meantime, check out the NSFAS guide and bursaries pages for more information.`
        })
      }

      // Upsert usage count
      await supabase.from('agent_usage').upsert({
        user_id: userId,
        date: today,
        message_count: (usage?.message_count || 0) + 1,
        last_message_at: new Date().toISOString(),
      }, { onConflict: 'user_id,date' })
    }

    const { GoogleGenerativeAI } = require('@google/generative-ai')
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

    const systemPrompt = `You are UniPath Career Guide — a friendly AI assistant helping South African Grade 12 learners with university applications.

${context ? context : ''}

Your role:
- Help students understand their APS score
- Recommend courses and universities based on their APS and subjects
- Explain NSFAS funding and bursaries
- Guide students through the application process
- Be encouraging but honest

SA Knowledge:
- NBT required at most universities
- NSFAS for households earning under R350,000
- Application deadlines mostly September-October
- Funza Lushaka bursary for Education students
- Minimum APS of 18-20 for most universities
- Wits uses percentage points out of 600, not the standard APS

Always respond in a friendly, supportive tone. Keep responses concise and practical. Use bullet points and bold text to make responses easy to read.`

    const chatHistory = [
      {
        role: 'user',
        parts: [{ text: 'Please act as described in these instructions.' }]
      },
      {
        role: 'model',
        parts: [{ text: systemPrompt }]
      },
      ...(history?.slice(1)?.map((m: any) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      })) || [])
    ]

    const chat = model.startChat({
      history: chatHistory,
      generationConfig: { maxOutputTokens: 1000 },
    })

    const result = await chat.sendMessage(message)
    const response = result.response.text()

    return NextResponse.json({ response })
  } catch (error: any) {
    console.error('Career agent error:', error.message)
    return NextResponse.json({
      response: 'I\'m having trouble connecting right now. Please try again in a moment.'
    }, { status: 200 })
  }
}
