type Props = {
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
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-1 transition-all
                ${i + 1 < currentStep ? 'bg-green-500 text-white' : ''}
                ${i + 1 === currentStep ? 'bg-blue-900 text-white' : ''}
                ${i + 1 > currentStep ? 'bg-gray-200 text-gray-400' : ''}
              `}
            >
              {i + 1 < currentStep ? '✓' : i + 1}
            </div>
            <span className={`text-xs text-center ${i + 1 === currentStep ? 'text-blue-900 font-semibold' : 'text-gray-400'}`}>
              {label}
            </span>
          </div>
        ))}
      </div>
      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
        <div
          className="bg-blue-900 h-1.5 rounded-full transition-all duration-500"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        />
      </div>
    </div>
  )
}
