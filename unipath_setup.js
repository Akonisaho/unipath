const fs = require('fs');
const path = require('path');

function createFile(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
  console.log(`✓ Created: ${filePath}`);
}

// ============================================================
// 1. SUPABASE CLIENT
// ============================================================
createFile('src/lib/supabase.ts', `import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
`);

// ============================================================
// 2. TYPES
// ============================================================
createFile('src/types/index.ts', `export type MatricSubject = {
  subject: string
  symbol: string
  points: number
}

export type Student = {
  id: string
  user_id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  id_number: string
  school_name: string
  province: string
  matric_results: MatricSubject[]
  aps_score: number
  created_at: string
}

export type Document = {
  id: string
  student_id: string
  type: 'id' | 'matric_certificate' | 'proof_of_residence'
  file_url: string
  file_name: string
  uploaded_at: string
}

export type University = {
  id: string
  name: string
  abbreviation: string
  province: string
  website: string
  logo_url?: string
}

export type Course = {
  id: string
  university_id: string
  faculty: string
  name: string
  aps_required: number
  duration_years: number
  closing_date: string
  application_fee: number
  university?: University
}

export type Application = {
  id: string
  student_id: string
  university_id: string
  course_id: string
  status: 'submitted' | 'proof_required' | 'proof_submitted' | 'under_review' | 'accepted' | 'rejected' | 'waitlisted'
  submitted_at: string
  updated_at: string
  university?: University
  course?: Course
}

export type Career = {
  id: string
  field_id: string
  title: string
  description: string
  salary_min_zar: number
  salary_max_zar: number
  job_outlook: 'Growing' | 'Stable' | 'Declining'
  related_careers: string[]
  field?: CareerField
}

export type CareerField = {
  id: string
  name: string
  icon: string
  description: string
}

export type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

export type Province =
  | 'Gauteng'
  | 'Western Cape'
  | 'KwaZulu-Natal'
  | 'Eastern Cape'
  | 'Free State'
  | 'Limpopo'
  | 'Mpumalanga'
  | 'North West'
  | 'Northern Cape'

export const PROVINCES: Province[] = [
  'Gauteng',
  'Western Cape',
  'KwaZulu-Natal',
  'Eastern Cape',
  'Free State',
  'Limpopo',
  'Mpumalanga',
  'North West',
  'Northern Cape',
]

export const MATRIC_SUBJECTS = [
  'Mathematics',
  'Mathematical Literacy',
  'English Home Language',
  'English First Additional Language',
  'Afrikaans Home Language',
  'Afrikaans First Additional Language',
  'Physical Sciences',
  'Life Sciences',
  'Geography',
  'History',
  'Accounting',
  'Business Studies',
  'Economics',
  'Life Orientation',
  'Information Technology',
  'Computer Applications Technology',
  'Visual Arts',
  'Music',
  'Dramatic Arts',
  'Consumer Studies',
  'Tourism',
  'Agricultural Sciences',
  'Engineering Graphics and Design',
  'Civil Technology',
  'Electrical Technology',
  'Mechanical Technology',
  'isiZulu Home Language',
  'isiXhosa Home Language',
  'Sepedi Home Language',
  'Setswana Home Language',
  'Sesotho Home Language',
  'Xitsonga Home Language',
  'siSwati Home Language',
  'Tshivenda Home Language',
  'isiNdebele Home Language',
]

export const SYMBOLS = ['A', 'B', 'C', 'D', 'E', 'F']

export const SYMBOL_POINTS: Record<string, number> = {
  A: 8,
  B: 7,
  C: 6,
  D: 5,
  E: 4,
  F: 3,
}
`);

// ============================================================
// 3. APS CALCULATOR UTILITY
// ============================================================
createFile('src/lib/aps.ts', `import { MatricSubject, SYMBOL_POINTS } from '@/types'

export function calculateAPS(subjects: MatricSubject[]): number {
  // Exclude Life Orientation from APS calculation
  const eligibleSubjects = subjects.filter(
    (s) => s.subject !== 'Life Orientation'
  )

  // Sort by points descending and take top 6
  const topSix = eligibleSubjects
    .sort((a, b) => b.points - a.points)
    .slice(0, 6)

  return topSix.reduce((sum, s) => sum + s.points, 0)
}

export function getSymbolPoints(symbol: string): number {
  return SYMBOL_POINTS[symbol] || 0
}

export function getAPSLevel(aps: number): {
  level: string
  color: string
  description: string
} {
  if (aps >= 36)
    return {
      level: 'Excellent',
      color: 'text-green-600',
      description: 'You qualify for most courses including Medicine',
    }
  if (aps >= 30)
    return {
      level: 'Very Good',
      color: 'text-blue-600',
      description: 'You qualify for a wide range of courses',
    }
  if (aps >= 24)
    return {
      level: 'Good',
      color: 'text-yellow-600',
      description: 'You qualify for many diploma and degree courses',
    }
  return {
    level: 'Fair',
    color: 'text-orange-600',
    description: 'You qualify for certificate and some diploma courses',
  }
}
`);

// ============================================================
// 4. ZUSTAND STORE
// ============================================================
createFile('src/store/useStudentStore.ts', `import { create } from 'zustand'
import { Student, MatricSubject } from '@/types'

type RegistrationStep = 1 | 2 | 3 | 4

type StudentStore = {
  // Registration state
  step: RegistrationStep
  setStep: (step: RegistrationStep) => void

  // Form data
  firstName: string
  lastName: string
  email: string
  phone: string
  idNumber: string
  schoolName: string
  province: string
  matricResults: MatricSubject[]
  apsScore: number

  // Setters
  setPersonalDetails: (details: {
    firstName: string
    lastName: string
    email: string
    phone: string
    idNumber: string
    schoolName: string
    province: string
  }) => void
  setMatricResults: (results: MatricSubject[], aps: number) => void

  // Logged in student
  student: Student | null
  setStudent: (student: Student | null) => void
}

export const useStudentStore = create<StudentStore>((set) => ({
  step: 1,
  setStep: (step) => set({ step }),

  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  idNumber: '',
  schoolName: '',
  province: '',
  matricResults: [],
  apsScore: 0,

  setPersonalDetails: (details) => set({ ...details }),
  setMatricResults: (matricResults, apsScore) =>
    set({ matricResults, apsScore }),

  student: null,
  setStudent: (student) => set({ student }),
}))
`);

// ============================================================
// 5. DATABASE SQL SCHEMA
// ============================================================
createFile('supabase/schema.sql', `-- UniPath Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- =====================
-- CAREER FIELDS
-- =====================
create table if not exists career_fields (
  id uuid primary key default uuid_generate_v4(),
  name varchar(100) not null,
  icon varchar(50) not null,
  description text,
  created_at timestamp default now()
);

-- =====================
-- CAREERS
-- =====================
create table if not exists careers (
  id uuid primary key default uuid_generate_v4(),
  field_id uuid references career_fields(id) on delete cascade,
  title varchar(200) not null,
  description text not null,
  salary_min_zar integer not null,
  salary_max_zar integer not null,
  job_outlook varchar(20) default 'Stable',
  related_careers jsonb default '[]',
  updated_at timestamp default now()
);

-- =====================
-- UNIVERSITIES
-- =====================
create table if not exists universities (
  id uuid primary key default uuid_generate_v4(),
  name varchar(200) not null,
  abbreviation varchar(20) not null,
  province varchar(50) not null,
  website varchar(200),
  logo_url varchar(300),
  created_at timestamp default now()
);

-- =====================
-- COURSES
-- =====================
create table if not exists courses (
  id uuid primary key default uuid_generate_v4(),
  university_id uuid references universities(id) on delete cascade,
  faculty varchar(200) not null,
  name varchar(200) not null,
  aps_required integer not null,
  duration_years integer not null,
  closing_date date,
  application_fee decimal(10,2) default 0,
  updated_at timestamp default now()
);

-- Junction table: courses <-> careers
create table if not exists course_careers (
  course_id uuid references courses(id) on delete cascade,
  career_id uuid references careers(id) on delete cascade,
  primary key (course_id, career_id)
);

-- =====================
-- STUDENTS
-- =====================
create table if not exists students (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade unique,
  first_name varchar(100) not null,
  last_name varchar(100) not null,
  email varchar(200) not null,
  phone varchar(20),
  id_number varchar(20),
  school_name varchar(200),
  province varchar(50),
  matric_results jsonb default '[]',
  aps_score integer default 0,
  registration_complete boolean default false,
  created_at timestamp default now()
);

-- =====================
-- DOCUMENTS
-- =====================
create table if not exists documents (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references students(id) on delete cascade,
  type varchar(50) not null,
  file_url varchar(500) not null,
  file_name varchar(200) not null,
  uploaded_at timestamp default now()
);

-- =====================
-- APPLICATIONS
-- =====================
create table if not exists applications (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references students(id) on delete cascade,
  university_id uuid references universities(id),
  course_id uuid references courses(id),
  status varchar(50) default 'submitted',
  submitted_at timestamp default now(),
  updated_at timestamp default now()
);

-- =====================
-- PROOF OF PAYMENTS
-- =====================
create table if not exists proof_of_payments (
  id uuid primary key default uuid_generate_v4(),
  application_id uuid references applications(id) on delete cascade,
  file_url varchar(500) not null,
  file_name varchar(200) not null,
  uploaded_at timestamp default now()
);

-- =====================
-- NOTIFICATIONS
-- =====================
create table if not exists notifications (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references students(id) on delete cascade,
  title varchar(200) not null,
  message text not null,
  read boolean default false,
  created_at timestamp default now()
);

-- =====================
-- CHAT SESSIONS
-- =====================
create table if not exists chat_sessions (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references students(id) on delete cascade,
  messages jsonb default '[]',
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- =====================
-- ROW LEVEL SECURITY
-- =====================
alter table students enable row level security;
alter table documents enable row level security;
alter table applications enable row level security;
alter table proof_of_payments enable row level security;
alter table notifications enable row level security;
alter table chat_sessions enable row level security;

-- Students: only own row
create policy "Students can view own profile"
  on students for select using (auth.uid() = user_id);

create policy "Students can update own profile"
  on students for update using (auth.uid() = user_id);

create policy "Students can insert own profile"
  on students for insert with check (auth.uid() = user_id);

-- Documents: only own documents
create policy "Students can view own documents"
  on documents for select using (
    student_id in (select id from students where user_id = auth.uid())
  );

create policy "Students can insert own documents"
  on documents for insert with check (
    student_id in (select id from students where user_id = auth.uid())
  );

-- Applications: only own applications
create policy "Students can view own applications"
  on applications for select using (
    student_id in (select id from students where user_id = auth.uid())
  );

create policy "Students can insert own applications"
  on applications for insert with check (
    student_id in (select id from students where user_id = auth.uid())
  );

-- Proof of payments: only own
create policy "Students can view own proof of payments"
  on proof_of_payments for select using (
    application_id in (
      select id from applications where student_id in (
        select id from students where user_id = auth.uid()
      )
    )
  );

create policy "Students can insert own proof of payments"
  on proof_of_payments for insert with check (
    application_id in (
      select id from applications where student_id in (
        select id from students where user_id = auth.uid()
      )
    )
  );

-- Notifications: only own
create policy "Students can view own notifications"
  on notifications for select using (
    student_id in (select id from students where user_id = auth.uid())
  );

-- Chat sessions: only own
create policy "Students can view own chat sessions"
  on chat_sessions for select using (
    student_id in (select id from students where user_id = auth.uid())
  );

create policy "Students can insert own chat sessions"
  on chat_sessions for insert with check (
    student_id in (select id from students where user_id = auth.uid())
  );

create policy "Students can update own chat sessions"
  on chat_sessions for update using (
    student_id in (select id from students where user_id = auth.uid())
  );

-- Public read access for universities, courses, careers, career_fields
create policy "Anyone can view universities"
  on universities for select using (true);

create policy "Anyone can view courses"
  on courses for select using (true);

create policy "Anyone can view careers"
  on careers for select using (true);

create policy "Anyone can view career fields"
  on career_fields for select using (true);

alter table universities enable row level security;
alter table courses enable row level security;
alter table careers enable row level security;
alter table career_fields enable row level security;

-- =====================
-- SEED: ALL 26 SA UNIVERSITIES
-- =====================
insert into universities (name, abbreviation, province, website) values
('University of Pretoria', 'UP', 'Gauteng', 'https://www.up.ac.za'),
('University of Johannesburg', 'UJ', 'Gauteng', 'https://www.uj.ac.za'),
('University of the Witwatersrand', 'Wits', 'Gauteng', 'https://www.wits.ac.za'),
('University of South Africa', 'UNISA', 'Gauteng', 'https://www.unisa.ac.za'),
('Tshwane University of Technology', 'TUT', 'Gauteng', 'https://www.tut.ac.za'),
('Vaal University of Technology', 'VUT', 'Gauteng', 'https://www.vut.ac.za'),
('Sefako Makgatho Health Sciences University', 'SMU', 'Gauteng', 'https://www.smu.ac.za'),
('University of Cape Town', 'UCT', 'Western Cape', 'https://www.uct.ac.za'),
('Stellenbosch University', 'SU', 'Western Cape', 'https://www.sun.ac.za'),
('University of the Western Cape', 'UWC', 'Western Cape', 'https://www.uwc.ac.za'),
('Cape Peninsula University of Technology', 'CPUT', 'Western Cape', 'https://www.cput.ac.za'),
('University of KwaZulu-Natal', 'UKZN', 'KwaZulu-Natal', 'https://www.ukzn.ac.za'),
('Durban University of Technology', 'DUT', 'KwaZulu-Natal', 'https://www.dut.ac.za'),
('Mangosuthu University of Technology', 'MUT', 'KwaZulu-Natal', 'https://www.mut.ac.za'),
('University of Zululand', 'UniZulu', 'KwaZulu-Natal', 'https://www.unizulu.ac.za'),
('Rhodes University', 'RU', 'Eastern Cape', 'https://www.ru.ac.za'),
('Nelson Mandela University', 'NMU', 'Eastern Cape', 'https://www.mandela.ac.za'),
('Walter Sisulu University', 'WSU', 'Eastern Cape', 'https://www.wsu.ac.za'),
('University of Fort Hare', 'UFH', 'Eastern Cape', 'https://www.ufh.ac.za'),
('University of the Free State', 'UFS', 'Free State', 'https://www.ufs.ac.za'),
('Central University of Technology', 'CUT', 'Free State', 'https://www.cut.ac.za'),
('University of Limpopo', 'UL', 'Limpopo', 'https://www.ul.ac.za'),
('University of Venda', 'UNIVEN', 'Limpopo', 'https://www.univen.ac.za'),
('University of Mpumalanga', 'UMP', 'Mpumalanga', 'https://www.ump.ac.za'),
('Sol Plaatje University', 'SPU', 'Northern Cape', 'https://www.spu.ac.za'),
('North-West University', 'NWU', 'North West', 'https://www.nwu.ac.za');

-- =====================
-- SEED: CAREER FIELDS
-- =====================
insert into career_fields (name, icon, description) values
('Health Sciences', '🏥', 'Careers in medicine, nursing, pharmacy, and allied health'),
('Engineering', '⚙️', 'Careers in civil, mechanical, electrical, and chemical engineering'),
('Law', '⚖️', 'Careers in legal practice, advocacy, and justice'),
('Business', '💼', 'Careers in accounting, finance, marketing, and management'),
('Education', '📚', 'Careers in teaching, training, and educational leadership'),
('Technology', '💻', 'Careers in software development, IT, and data science'),
('Science', '🔬', 'Careers in mathematics, physics, chemistry, and research'),
('Arts and Humanities', '🎨', 'Careers in psychology, social work, journalism, and arts'),
('Architecture', '🏛️', 'Careers in architecture, urban planning, and design'),
('Agriculture', '🌱', 'Careers in farming, veterinary science, and food science');
`);

// ============================================================
// 6. AUTH PAGES
// ============================================================

// Welcome / Landing page
createFile('src/app/page.tsx', `import Link from 'next/link'

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-white tracking-tight">
            Uni<span className="text-yellow-400">Path</span>
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
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-lg py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg"
          >
            Get Started — It's Free
          </Link>
          <Link
            href="/login"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold text-lg py-4 px-8 rounded-2xl transition-all duration-200 border border-white/20"
          >
            Sign In
          </Link>
        </div>

        <p className="text-blue-300 text-sm mt-8">
          Built for every Grade 12 learner in South Africa 🇿🇦
        </p>
      </div>
    </main>
  )
}
`);

// Register page
createFile('src/app/register/page.tsx', `import RegisterForm from '@/components/auth/RegisterForm'

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900">
            Uni<span className="text-yellow-500">Path</span>
          </h1>
          <p className="text-gray-500 mt-2">Create your free account</p>
        </div>
        <RegisterForm />
      </div>
    </main>
  )
}
`);

// Login page
createFile('src/app/login/page.tsx', `import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900">
            Uni<span className="text-yellow-500">Path</span>
          </h1>
          <p className="text-gray-500 mt-2">Welcome back</p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
`);

// ============================================================
// 7. AUTH COMPONENTS
// ============================================================

// Register Form
createFile('src/components/auth/RegisterForm.tsx', `'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

export default function RegisterForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    if (form.password.length < 8) {
      toast.error('Password must be at least 8 characters')
      return
    }

    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            first_name: form.firstName,
            last_name: form.lastName,
          },
        },
      })

      if (error) throw error

      if (data.user) {
        // Create student profile
        const { error: profileError } = await supabase
          .from('students')
          .insert({
            user_id: data.user.id,
            first_name: form.firstName,
            last_name: form.lastName,
            email: form.email,
            registration_complete: false,
          })

        if (profileError) throw profileError

        toast.success('Account created! Please check your email to verify.')
        router.push('/onboarding/personal')
      }
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Jaycee"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Ngwana"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jaycee@email.com"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Min 8 characters"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Repeat your password"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Creating account...
            </>
          ) : (
            'Create My Free Account'
          )}
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-600 font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  )
}
`);

// Login Form
createFile('src/components/auth/LoginForm.tsx', `'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

export default function LoginForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      })

      if (error) throw error

      if (data.user) {
        // Check if registration is complete
        const { data: student } = await supabase
          .from('students')
          .select('registration_complete')
          .eq('user_id', data.user.id)
          .single()

        if (student?.registration_complete) {
          router.push('/dashboard')
        } else {
          router.push('/onboarding/personal')
        }
      }
    } catch (error: any) {
      toast.error(error.message || 'Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="jaycee@email.com"
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Your password"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3.5 text-gray-400"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Signing in...
            </>
          ) : (
            'Sign In'
          )}
        </button>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <Link href="/register" className="text-blue-600 font-medium hover:underline">
            Create one free
          </Link>
        </p>
      </form>
    </div>
  )
}
`);

// ============================================================
// 8. ONBOARDING - STEP INDICATOR
// ============================================================
createFile('src/components/onboarding/StepIndicator.tsx', `type Props = {
  currentStep: number
  totalSteps: number
  labels: string[]
}

export default function StepIndicator({ currentStep, totalSteps, labels }: Props) {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-2">
        {labels.map((label, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            <div
              className={\`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-1 transition-all
                \${i + 1 < currentStep ? 'bg-green-500 text-white' : ''}
                \${i + 1 === currentStep ? 'bg-blue-900 text-white' : ''}
                \${i + 1 > currentStep ? 'bg-gray-200 text-gray-400' : ''}
              \`}
            >
              {i + 1 < currentStep ? '✓' : i + 1}
            </div>
            <span className={\`text-xs text-center \${i + 1 === currentStep ? 'text-blue-900 font-semibold' : 'text-gray-400'}\`}>
              {label}
            </span>
          </div>
        ))}
      </div>
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
        <div
          className="bg-blue-900 h-1.5 rounded-full transition-all duration-500"
          style={{ width: \`\${((currentStep - 1) / (totalSteps - 1)) * 100}%\` }}
        />
      </div>
    </div>
  )
}
`);

// ============================================================
// 9. ONBOARDING PAGES
// ============================================================

// Onboarding layout
createFile('src/app/onboarding/layout.tsx', `export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-blue-900">
            Uni<span className="text-yellow-500">Path</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Let's set up your profile — takes less than 5 minutes
          </p>
        </div>
        {children}
      </div>
    </main>
  )
}
`);

// Step 1 — Personal Details
createFile('src/app/onboarding/personal/page.tsx', `'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { PROVINCES } from '@/types'
import { useStudentStore } from '@/store/useStudentStore'
import StepIndicator from '@/components/onboarding/StepIndicator'
import { Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

const STEPS = ['Personal', 'Matric Results', 'Documents', 'Course Interest']

export default function PersonalDetailsPage() {
  const router = useRouter()
  const { setPersonalDetails } = useStudentStore()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    idNumber: '',
    schoolName: '',
    province: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      const { error } = await supabase
        .from('students')
        .update({
          first_name: form.firstName,
          last_name: form.lastName,
          phone: form.phone,
          id_number: form.idNumber,
          school_name: form.schoolName,
          province: form.province,
        })
        .eq('user_id', user.id)

      if (error) throw error

      setPersonalDetails({ ...form, email: user.email || '' })
      router.push('/onboarding/matric')
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <StepIndicator currentStep={1} totalSteps={4} labels={STEPS} />

      <h2 className="text-xl font-bold text-gray-900 mb-1">Personal Details</h2>
      <p className="text-gray-500 text-sm mb-6">Tell us a bit about yourself</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Jaycee"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Ngwana"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">SA ID Number</label>
          <input
            type="text"
            name="idNumber"
            value={form.idNumber}
            onChange={handleChange}
            placeholder="0000000000000"
            maxLength={13}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="0XX XXX XXXX"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">School Name</label>
          <input
            type="text"
            name="schoolName"
            value={form.schoolName}
            onChange={handleChange}
            placeholder="Your high school name"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Province</label>
          <select
            name="province"
            value={form.province}
            onChange={handleChange}
            required
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">Select your province</option>
            {PROVINCES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 mt-2"
        >
          {loading ? (
            <><Loader2 size={20} className="animate-spin" /> Saving...</>
          ) : (
            'Next — Matric Results →'
          )}
        </button>
      </form>
    </div>
  )
}
`);

// Step 2 — Matric Results
createFile('src/app/onboarding/matric/page.tsx', `'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { MATRIC_SUBJECTS, SYMBOLS, MatricSubject } from '@/types'
import { calculateAPS, getSymbolPoints, getAPSLevel } from '@/lib/aps'
import { useStudentStore } from '@/store/useStudentStore'
import StepIndicator from '@/components/onboarding/StepIndicator'
import { Plus, Trash2, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast'

const STEPS = ['Personal', 'Matric Results', 'Documents', 'Course Interest']

export default function MatricResultsPage() {
  const router = useRouter()
  const { setMatricResults } = useStudentStore()
  const [loading, setLoading] = useState(false)
  const [subjects, setSubjects] = useState<MatricSubject[]>([
    { subject: '', symbol: '', points: 0 },
    { subject: '', symbol: '', points: 0 },
    { subject: '', symbol: '', points: 0 },
  ])

  const aps = calculateAPS(subjects.filter(s => s.subject && s.symbol))
  const apsLevel = getAPSLevel(aps)

  const addSubject = () => {
    if (subjects.length < 10) {
      setSubjects([...subjects, { subject: '', symbol: '', points: 0 }])
    }
  }

  const removeSubject = (index: number) => {
    if (subjects.length > 3) {
      setSubjects(subjects.filter((_, i) => i !== index))
    }
  }

  const updateSubject = (index: number, field: string, value: string) => {
    const updated = subjects.map((s, i) => {
      if (i !== index) return s
      if (field === 'symbol') {
        return { ...s, symbol: value, points: getSymbolPoints(value) }
      }
      return { ...s, [field]: value }
    })
    setSubjects(updated)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validSubjects = subjects.filter(s => s.subject && s.symbol)

    if (validSubjects.length < 3) {
      toast.error('Please enter at least 3 subjects')
      return
    }

    setLoading(true)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      const finalAPS = calculateAPS(validSubjects)

      const { error } = await supabase
        .from('students')
        .update({
          matric_results: validSubjects,
          aps_score: finalAPS,
        })
        .eq('user_id', user.id)

      if (error) throw error

      setMatricResults(validSubjects, finalAPS)
      router.push('/onboarding/documents')
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <StepIndicator currentStep={2} totalSteps={4} labels={STEPS} />

      <h2 className="text-xl font-bold text-gray-900 mb-1">Matric Results</h2>
      <p className="text-gray-500 text-sm mb-4">
        Enter your subjects and symbols — we'll calculate your APS automatically
      </p>

      {/* APS Display */}
      {aps > 0 && (
        <div className="bg-blue-50 rounded-2xl p-4 mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-blue-600 font-medium">Your APS Score</p>
            <p className="text-3xl font-bold text-blue-900">{aps}</p>
            <p className={\`text-sm font-medium \${apsLevel.color}\`}>{apsLevel.level}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 max-w-36">{apsLevel.description}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        {subjects.map((subject, index) => (
          <div key={index} className="flex gap-2 items-center">
            <select
              value={subject.subject}
              onChange={(e) => updateSubject(index, 'subject', e.target.value)}
              className="flex-1 border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">Select subject</option>
              {MATRIC_SUBJECTS.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <select
              value={subject.symbol}
              onChange={(e) => updateSubject(index, 'symbol', e.target.value)}
              className="w-20 border border-gray-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="">-</option>
              {SYMBOLS.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            {subject.points > 0 && (
              <span className="w-6 text-center text-sm font-bold text-blue-700">
                {subject.points}
              </span>
            )}

            <button
              type="button"
              onClick={() => removeSubject(index)}
              className="text-gray-300 hover:text-red-400 transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addSubject}
          className="flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-800 mt-2"
        >
          <Plus size={16} /> Add another subject
        </button>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 mt-4"
        >
          {loading ? (
            <><Loader2 size={20} className="animate-spin" /> Saving...</>
          ) : (
            'Next — Upload Documents →'
          )}
        </button>
      </form>
    </div>
  )
}
`);

// Step 3 — Documents
createFile('src/app/onboarding/documents/page.tsx', `'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import StepIndicator from '@/components/onboarding/StepIndicator'
import { Upload, CheckCircle, Loader2, FileText } from 'lucide-react'
import toast from 'react-hot-toast'

const STEPS = ['Personal', 'Matric Results', 'Documents', 'Course Interest']

type DocType = 'id' | 'matric_certificate' | 'proof_of_residence'

type UploadState = {
  [key in DocType]: {
    file: File | null
    uploaded: boolean
    uploading: boolean
    url: string
  }
}

export default function DocumentsPage() {
  const router = useRouter()
  const [docs, setDocs] = useState<UploadState>({
    id: { file: null, uploaded: false, uploading: false, url: '' },
    matric_certificate: { file: null, uploaded: false, uploading: false, url: '' },
    proof_of_residence: { file: null, uploaded: false, uploading: false, url: '' },
  })

  const handleFileSelect = async (type: DocType, file: File) => {
    setDocs(prev => ({ ...prev, [type]: { ...prev[type], file, uploading: true } }))

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      const { data: student } = await supabase
        .from('students')
        .select('id')
        .eq('user_id', user.id)
        .single()

      if (!student) throw new Error('Student not found')

      const fileName = \`\${student.id}/\${type}/\${Date.now()}_\${file.name}\`

      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(fileName, file, { upsert: true })

      if (uploadError) throw uploadError

      const { data: { publicUrl } } = supabase.storage
        .from('documents')
        .getPublicUrl(fileName)

      // Save to documents table
      await supabase.from('documents').upsert({
        student_id: student.id,
        type,
        file_url: publicUrl,
        file_name: file.name,
      })

      setDocs(prev => ({
        ...prev,
        [type]: { ...prev[type], uploaded: true, uploading: false, url: publicUrl }
      }))

      toast.success('Document uploaded!')
    } catch (error: any) {
      toast.error(error.message || 'Upload failed')
      setDocs(prev => ({ ...prev, [type]: { ...prev[type], uploading: false } }))
    }
  }

  const handleContinue = () => {
    router.push('/onboarding/interests')
  }

  const docTypes: { type: DocType; label: string; description: string }[] = [
    { type: 'id', label: 'SA ID Document', description: 'Photo or scan of your green ID book or smart card' },
    { type: 'matric_certificate', label: 'Matric Certificate', description: 'Your Grade 12 results or final certificate' },
    { type: 'proof_of_residence', label: 'Proof of Residence', description: 'Utility bill or letter confirming your address' },
  ]

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <StepIndicator currentStep={3} totalSteps={4} labels={STEPS} />

      <h2 className="text-xl font-bold text-gray-900 mb-1">Upload Your Documents</h2>
      <p className="text-gray-500 text-sm mb-6">
        Upload once — we'll attach them to all your applications automatically
      </p>

      <div className="space-y-4 mb-6">
        {docTypes.map(({ type, label, description }) => (
          <div
            key={type}
            className={\`border-2 rounded-2xl p-4 transition-all \${
              docs[type].uploaded
                ? 'border-green-400 bg-green-50'
                : 'border-dashed border-gray-200 hover:border-blue-300'
            }\`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {docs[type].uploaded ? (
                  <CheckCircle size={24} className="text-green-500" />
                ) : (
                  <FileText size={24} className="text-gray-300" />
                )}
                <div>
                  <p className="text-sm font-semibold text-gray-900">{label}</p>
                  <p className="text-xs text-gray-400">{description}</p>
                </div>
              </div>

              {docs[type].uploading ? (
                <Loader2 size={20} className="animate-spin text-blue-500" />
              ) : docs[type].uploaded ? (
                <span className="text-xs text-green-600 font-medium">Uploaded ✓</span>
              ) : (
                <label className="cursor-pointer bg-blue-900 text-white text-xs font-semibold px-4 py-2 rounded-xl hover:bg-blue-800 transition-colors flex items-center gap-1">
                  <Upload size={14} />
                  Upload
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0]
                      if (file) handleFileSelect(type, file)
                    }}
                  />
                </label>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleContinue}
        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-2xl transition-all duration-200"
      >
        Next — Course Interest →
      </button>

      <button
        onClick={() => router.push('/onboarding/interests')}
        className="w-full mt-3 text-gray-400 text-sm hover:text-gray-600 transition-colors"
      >
        Skip for now — I'll upload later
      </button>
    </div>
  )
}
`);

// Step 4 — Course Interest (AI Agent)
createFile('src/app/onboarding/interests/page.tsx', `'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import StepIndicator from '@/components/onboarding/StepIndicator'
import { Send, Loader2, Sparkles } from 'lucide-react'
import toast from 'react-hot-toast'

const STEPS = ['Personal', 'Matric Results', 'Documents', 'Course Interest']

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const SUGGESTIONS = [
  'I want to be a doctor',
  'I want to study nursing',
  'Something with computers',
  'I want to help people',
  "I'm good at maths",
  'I want to study law',
  'Something in business',
  'I want to teach',
]

export default function CourseInterestPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! 👋 I'm your UniPath career guide. Tell me what you're interested in — you can type anything like 'I want to be a doctor' or 'I love working with computers'. I'll help you find the right course!",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const sendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = { role: 'user', content: text }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/career-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      const data = await response.json()

      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.message },
      ])
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleFinish = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not authenticated')

      await supabase
        .from('students')
        .update({ registration_complete: true })
        .eq('user_id', user.id)

      router.push('/dashboard')
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
      <StepIndicator currentStep={4} totalSteps={4} labels={STEPS} />

      <div className="flex items-center gap-2 mb-1">
        <Sparkles size={20} className="text-yellow-500" />
        <h2 className="text-xl font-bold text-gray-900">Career Guidance</h2>
      </div>
      <p className="text-gray-500 text-sm mb-4">
        Tell our AI what you want to study — it speaks your language
      </p>

      {/* Chat Messages */}
      <div className="bg-gray-50 rounded-2xl p-4 h-64 overflow-y-auto space-y-3 mb-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={\`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}\`}
          >
            <div
              className={\`max-w-xs rounded-2xl px-4 py-3 text-sm \${
                msg.role === 'user'
                  ? 'bg-blue-900 text-white rounded-br-sm'
                  : 'bg-white border border-gray-100 text-gray-800 rounded-bl-sm shadow-sm'
              }\`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
              <Loader2 size={16} className="animate-spin text-blue-500" />
            </div>
          </div>
        )}
      </div>

      {/* Suggestions */}
      <div className="flex flex-wrap gap-2 mb-4">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => sendMessage(s)}
            className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors font-medium"
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
          placeholder="Type anything — e.g. I want to be a nurse..."
          className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => sendMessage(input)}
          disabled={!input.trim() || loading}
          className="bg-blue-900 text-white p-3 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-40"
        >
          <Send size={18} />
        </button>
      </div>

      <button
        onClick={handleFinish}
        className="w-full bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-4 rounded-2xl transition-all duration-200"
      >
        Go to My Dashboard →
      </button>
    </div>
  )
}
`);

// ============================================================
// 10. API ROUTE — CAREER AGENT
// ============================================================
createFile('src/app/api/career-agent/route.ts', `import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

const SYSTEM_PROMPT = \`You are UniPath's friendly AI career guidance assistant for South African Grade 12 learners.

Your job is to:
1. Help learners discover careers and courses that match their interests
2. Map vague descriptions to correct SA course names — e.g. "I want to be a doctor" = MBChB (Bachelor of Medicine and Bachelor of Surgery)
3. Explain what different careers involve in simple, friendly language
4. Share typical APS requirements for courses
5. Mention average salary ranges in South Africa
6. Recommend related courses the learner might not have considered

Key course mappings to know:
- Doctor / Medicine = MBChB (APS 36+)
- Nurse / Nursing = Bachelor of Nursing Science (APS 28+)  
- Pharmacist / Pharmacy = BPharm (APS 30+)
- Lawyer / Law = LLB (APS 30+)
- Accountant / Accounting = BCom Accounting (APS 26+)
- Software Developer / Programmer = BSc Computer Science or BEng Software (APS 30+)
- Teacher = BEd (APS 24+)
- Engineer = BEng or BSc Engineering (APS 32+)
- Psychologist = BA Psychology then honours (APS 26+)
- Social Worker = BSW (APS 22+)
- Architect = BArch (APS 30+)
- Veterinarian / Vet = BVSc (APS 36+)
- Dentist = BChD (APS 34+)

Rules:
- Always respond in simple, friendly language a 17-year-old South African understands
- Keep responses concise — under 150 words
- Always mention 2-3 course options when relevant
- Include APS requirements
- Be encouraging and positive
- Use emojis sparingly to keep it friendly
- Never mention universities by name in this step — just course options\`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: { role: string; content: string }) => ({
        role: m.role,
        content: m.content,
      })),
    })

    const message = response.content[0].type === 'text'
      ? response.content[0].text
      : 'Sorry, I could not process that. Please try again.'

    return NextResponse.json({ message })
  } catch (error: any) {
    console.error('Career agent error:', error)
    return NextResponse.json(
      { message: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
`);

// ============================================================
// 11. DASHBOARD — PLACEHOLDER
// ============================================================
createFile('src/app/dashboard/page.tsx', `'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Student } from '@/types'
import { GraduationCap, Search, BookOpen, FileText, Bell, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  const [student, setStudent] = useState<Student | null>(null)

  useEffect(() => {
    const fetchStudent = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data } = await supabase
        .from('students')
        .select('*')
        .eq('user_id', user.id)
        .single()

      setStudent(data)
    }

    fetchStudent()
  }, [])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-900 text-white px-6 py-8">
        <p className="text-blue-300 text-sm">Welcome back 👋</p>
        <h1 className="text-2xl font-bold mt-1">
          {student ? \`\${student.first_name} \${student.last_name}\` : 'Loading...'}
        </h1>
        {student && (
          <div className="mt-3 inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2">
            <GraduationCap size={16} className="text-yellow-400" />
            <span className="text-sm font-semibold">APS Score: {student.aps_score}</span>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-6">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          What would you like to do?
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <Link href="/search" className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <Search size={24} className="text-blue-900 mb-3" />
            <p className="font-bold text-gray-900 text-sm">Find a Course</p>
            <p className="text-gray-400 text-xs mt-1">Search all 26 universities</p>
          </Link>

          <Link href="/careers" className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <BookOpen size={24} className="text-purple-600 mb-3" />
            <p className="font-bold text-gray-900 text-sm">Explore Careers</p>
            <p className="text-gray-400 text-xs mt-1">Discover your future</p>
          </Link>

          <Link href="/applications" className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <FileText size={24} className="text-green-600 mb-3" />
            <p className="font-bold text-gray-900 text-sm">My Applications</p>
            <p className="text-gray-400 text-xs mt-1">Track your status</p>
          </Link>

          <Link href="/agent" className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <Sparkles size={24} className="text-yellow-500 mb-3" />
            <p className="font-bold text-gray-900 text-sm">AI Career Guide</p>
            <p className="text-gray-400 text-xs mt-1">Ask me anything</p>
          </Link>
        </div>
      </div>

      {/* Notifications placeholder */}
      <div className="px-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 flex items-start gap-3">
          <Bell size={18} className="text-yellow-600 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-yellow-800">Complete your profile</p>
            <p className="text-xs text-yellow-600 mt-0.5">
              Upload your documents to apply to universities in one click
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
`);

// ============================================================
// 12. LAYOUT WITH TOAST PROVIDER
// ============================================================
createFile('src/app/layout.tsx', `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UniPath — Apply to University in One Click',
  description: 'South Africa free AI-powered career guidance and university application platform for Grade 12 learners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: '12px',
              background: '#1e3a5f',
              color: '#fff',
            },
          }}
        />
      </body>
    </html>
  )
}
`);

// ============================================================
// 13. ENV EXAMPLE
// ============================================================
createFile('.env.example', `NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ANTHROPIC_API_KEY=your_anthropic_api_key
`);

// ============================================================
// 14. GITIGNORE UPDATE
// ============================================================
createFile('.gitignore', `# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
`);

console.log('\n✅ UniPath project structure created successfully!');
console.log('\n📋 Next steps:');
console.log('1. Add your ANTHROPIC_API_KEY to .env.local');
console.log('2. Go to Supabase → SQL Editor → paste contents of supabase/schema.sql → Run');
console.log('3. Go to Supabase → Storage → Create a bucket called "documents" → set to private');
console.log('4. Run: npm run dev');
console.log('5. Open: http://localhost:3000');
