'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ArrowLeft, CheckCircle, AlertCircle, ExternalLink, ChevronDown, ChevronUp, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Logo from '@/components/Logo'

const STEPS = [
  {
    number: 1,
    title: 'Check if you qualify',
    description: 'Your combined household income must be under R350,000 per year. If your parents are deceased (orphan), you automatically qualify.',
  },
  {
    number: 2,
    title: 'Get your documents ready',
    items: [
      'Your SA ID document',
      'Parents/Guardian ID documents',
      'Proof of income (payslips or affidavit)',
      'Your latest school results',
      'Proof of residence',
      'Death certificates (if parents deceased)',
    ],
  },
  {
    number: 3,
    title: 'Register on myNSFAS',
    description: 'Go to my.nsfas.org.za and create an account using your SA ID number. You must register yourself â€” do not pay anyone to do it for you.',
  },
  {
    number: 4,
    title: 'Complete the application',
    description: 'Fill in your personal details, family information, and upload all required documents. Make sure everything matches your ID exactly.',
  },
  {
    number: 5,
    title: 'Submit and wait',
    description: 'NSFAS will send updates to your email and phone. Track your status at my.nsfas.org.za. Applications usually open in August and close in November.',
  },
]

const FAQS = [
  {
    q: 'What does NSFAS cover?',
    a: 'NSFAS covers tuition fees, accommodation, meals, transport, and a personal care allowance. The amount depends on where you live and study.',
  },
  {
    q: 'Does NSFAS cover private accommodation?',
    a: 'Yes, if you are approved for NSFAS and your university cannot provide on-campus housing, you can apply for a private accommodation allowance.',
  },
  {
    q: 'What if my parents are deceased?',
    a: 'If both parents are deceased you are classified as a Full Orphan and automatically qualify for NSFAS. Upload certified copies of death certificates. If one parent is deceased you are a Half Orphan â€” you still qualify but household income is still checked.',
  },
  {
    q: 'Can I apply to NSFAS and a bursary at the same time?',
    a: 'Yes. In fact you should apply for both. Many bursaries top up your NSFAS allowance. NSFAS only covers public universities â€” private institutions are not covered.',
  },
  {
    q: 'What is the NBT and do I need it for NSFAS?',
    a: 'NBT (National Benchmark Tests) are required by most universities for admission â€” they are separate from NSFAS. NSFAS does not require NBT results.',
  },
  {
    q: 'What happens if I fail a year?',
    a: 'NSFAS funding is conditional on academic progress. If you fail more than half your modules, your funding may be suspended. You get one grace year.',
  },
]

export default function NsfasPage() {
  const router = useRouter()
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data: prof } = await supabase.from('profiles').select('mother_status, father_status, orphan_status, race, province').eq('id', user.id).single()
      setProfile(prof)
      setLoading(false)
    }
    load()
  }, [])

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-900" />
    </div>
  )

  const isOrphan = profile?.orphan_status && profile.orphan_status !== 'None'
  const likelyQualifies = isOrphan

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button onClick={() => router.push('/dashboard')} className="text-blue-300 hover:text-white">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h1 className="text-lg font-bold">NSFAS Funding Guide</h1>
            <p className="text-blue-300 text-xs">National Student Financial Aid Scheme</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Eligibility card */}
        {isOrphan ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex gap-3">
            <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-800 text-sm">You likely qualify for NSFAS</p>
              <p className="text-xs text-green-700 mt-0.5">
                Your orphan status ({profile.orphan_status}) means you automatically qualify. Apply as soon as applications open.
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3">
            <AlertCircle size={20} className="text-blue-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-800 text-sm">Check your household income</p>
              <p className="text-xs text-blue-700 mt-0.5">
                You qualify if your combined family income is under <strong>R350,000/year</strong>. If unsure, apply anyway â€” NSFAS will assess you.
              </p>
            </div>
          </div>
        )}

        {/* Key facts */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-900 mb-3">NSFAS Key Facts</p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Income limit', value: 'R350,000/yr' },
              { label: 'Opens', value: 'August' },
              { label: 'Closes', value: 'November' },
              { label: 'Application fee', value: 'Free' },
              { label: 'Covers', value: 'Public unis + TVET' },
              { label: 'Website', value: 'my.nsfas.org.za' },
            ].map(f => (
              <div key={f.label} className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400">{f.label}</p>
                <p className="text-sm font-semibold text-gray-800 mt-0.5">{f.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What NSFAS covers */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-900 mb-3">What NSFAS covers</p>
          <div className="space-y-2">
            {[
              { item: 'Tuition & registration fees', covered: true },
              { item: 'Accommodation allowance', covered: true },
              { item: 'Food/meals allowance', covered: true },
              { item: 'Transport allowance', covered: true },
              { item: 'Personal care allowance', covered: true },
              { item: 'Private college fees', covered: false },
              { item: 'Postgraduate studies', covered: false },
            ].map(({ item, covered }) => (
              <div key={item} className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${covered ? 'bg-green-100' : 'bg-red-100'}`}>
                  <span className={`text-xs font-bold ${covered ? 'text-green-700' : 'text-red-600'}`}>{covered ? 'âœ“' : 'âœ—'}</span>
                </div>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step by step */}
        <div className="bg-white rounded-2xl p-5 border border-gray-100">
          <p className="font-semibold text-gray-900 mb-4">How to apply â€” Step by step</p>
          <div className="space-y-4">
            {STEPS.map(step => (
              <div key={step.number} className="flex gap-4">
                <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-sm font-semibold text-gray-900">{step.title}</p>
                  {step.description && <p className="text-xs text-gray-500 mt-1 leading-relaxed">{step.description}</p>}
                  {step.items && (
                    <ul className="mt-1.5 space-y-1">
                      {step.items.map(item => (
                        <li key={item} className="text-xs text-gray-500 flex items-center gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning */}
        <div className="bg-red-50 border border-red-100 rounded-2xl p-4">
          <p className="text-sm font-semibold text-red-800 mb-1">âš ï¸ Avoid NSFAS scams</p>
          <p className="text-xs text-red-700 leading-relaxed">
            NSFAS applications are completely free. Never pay anyone to apply for you. Only use my.nsfas.org.za.
            Beware of WhatsApp groups and social media pages asking for money to "secure" funding.
          </p>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <p className="font-semibold text-gray-900">Frequently Asked Questions</p>
          </div>
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-gray-50 last:border-0">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-all"
              >
                <span className="text-sm font-medium text-gray-800 pr-4">{faq.q}</span>
                {openFaq === i ? <ChevronUp size={16} className="text-gray-400 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Apply button */}
        <a
          href="https://my.nsfas.org.za"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-blue-900 text-white font-bold py-4 rounded-2xl hover:bg-blue-800 transition-all"
        >
          Apply on myNSFAS <ExternalLink size={18} />
        </a>

        <Link href="/bursaries" className="block text-center text-sm text-blue-600 hover:text-blue-800 py-1">
          Also browse bursaries and scholarships â†’
        </Link>
      </div>

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
