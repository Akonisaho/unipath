import { LogoDark } from '@/components/Logo'

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col items-center mb-6">
          <LogoDark size="md" />
          <p className="text-gray-500 text-sm mt-2">
            {"Let's set up your profile â€” takes less than 5 minutes"}
          </p>
        </div>
        {children}
      </div>
    </main>
  )
}
