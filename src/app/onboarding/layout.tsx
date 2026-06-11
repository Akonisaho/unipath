export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
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