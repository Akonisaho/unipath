import LoginForm from '@/components/auth/LoginForm'
import { LogoDark } from '@/components/Logo'

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8">
          <LogoDark size="lg" stacked />
          <p className="text-gray-500 mt-3">Welcome back</p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}
