export type MatricSubject = {
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
