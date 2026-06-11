import LoginForm from '@/components/auth/LoginForm'

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
