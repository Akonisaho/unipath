'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Send, Loader2, ArrowLeft, Sparkles } from 'lucide-react'

const QUICK_QUESTIONS = [
  'Which courses should I apply for with my APS?',
  'What careers match my subjects?',
  'How do I apply for NSFAS?',
  'Which universities are best for me?',
  'What is the NBT and do I need it?',
  'How do I write a good application?',
]

export default function AgentPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const [input, setInput] = useState('')
  const [profile, setProfile] = useState<any>(null)
  const [aps, setAps] = useState(0)
  const [subjects, setSubjects] = useState<any[]>([])
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', content: string }[]>([])
  const [userId, setUserId] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

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
        .select('*')
        .eq('user_id', user.id)
        .order('calculated_at', { ascending: false })
        .limit(1)
        .single()

      const { data: matricData } = await supabase
        .from('matric_results')
        .select('*')
        .eq('user_id', user.id)

      setUserId(user.id)
      setProfile(prof)
      if (apsData) setAps(apsData.total_aps || 0)
      if (matricData) setSubjects(matricData)

      // Welcome message
      const firstName = prof?.first_name || prof?.full_name?.split(' ')[0] || 'there'
      const subjectList = matricData?.map((s: any) => s.subject).join(', ') || 'your subjects'
      setMessages([{
        role: 'assistant',
        content: `Hi ${firstName}! 👋 I'm your UniPath Career Guide.\n\nI can see your APS score is **${apsData?.total_aps || 0}** and you studied ${subjectList}.\n\nI'm here to help you find the right courses, universities and career paths. What would you like to know?`
      }])

      setLoading(false)
    }
    fetchProfile()
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text: string) => {
    if (!text.trim() || sending) return

    const userMessage = text.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setSending(true)

    try {
      const subjectList = subjects.map(s => `${s.subject}: ${s.mark}%`).join(', ')
      const context = `Student Profile:
- Name: ${profile?.first_name || profile?.full_name}
- APS Score: ${aps}/42
- Subjects: ${subjectList}
- Province: ${profile?.province || 'Not specified'}
- School Type: ${profile?.school_type || 'Not specified'}
- Student Status: ${profile?.student_status || 'Grade 12'}`

      const response = await fetch('/api/career-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          context,
          history: messages,
          userId,
        }),
      })

      const data = await response.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response || 'Sorry, I could not process your request. Please try again.'
      }])
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again.'
      }])
    } finally {
      setSending(false)
    }
  }

  const formatMessage = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br/>')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fef9f0] flex items-center justify-center">
        <Loader2 size={24} className="animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#fef9f0] flex flex-col">
      {/* Header */}
      <div className="bg-blue-900 text-white px-4 py-4 flex items-center gap-3">
        <button onClick={() => router.push('/dashboard')} className="text-blue-300 hover:text-white">
          <ArrowLeft size={20} />
        </button>
        <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
          <Sparkles size={20} className="text-blue-900" />
        </div>
        <div>
          <p className="text-sm font-bold">UniPath Career Guide</p>
          <p className="text-xs text-blue-300">AI-powered · Always here to help</p>
        </div>
        <div className="ml-auto bg-green-400 w-2 h-2 rounded-full" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-2 shrink-0 mt-1">
                <Sparkles size={14} className="text-red-500" />
              </div>
            )}
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl text-sm ${
              msg.role === 'user'
                ? 'bg-blue-900 text-white rounded-tr-sm'
                : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm'
            }`}>
              <div dangerouslySetInnerHTML={{ __html: formatMessage(msg.content) }} />
            </div>
          </div>
        ))}

        {sending && (
          <div className="flex justify-start">
            <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-2 shrink-0">
              <Sparkles size={14} className="text-red-500" />
            </div>
            <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl rounded-tl-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick Questions */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2">
          <p className="text-xs text-gray-400 mb-2">Quick questions:</p>
          <div className="flex flex-wrap gap-2">
            {QUICK_QUESTIONS.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                className="text-xs bg-white border border-gray-200 rounded-xl px-3 py-2 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="px-4 py-4 bg-white border-t border-gray-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
            placeholder="Ask me anything about university applications..."
            className="flex-1 border border-gray-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || sending}
            className="bg-blue-900 text-white p-3 rounded-2xl hover:bg-blue-800 disabled:opacity-50 transition-all"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}