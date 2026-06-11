import { create } from 'zustand'
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
