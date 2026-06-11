import Link from 'next/link'

function GradCap({ size = 28, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
    </svg>
  )
}

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  href?: string
  stacked?: boolean
}

export default function Logo({ size = 'md', href = '/', stacked = false }: LogoProps) {
  const capSize = size === 'sm' ? 18 : size === 'lg' ? 36 : 24
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-xl'

  const content = stacked ? (
    <div className="flex flex-col items-center gap-0.5">
      <GradCap size={capSize} className="text-red-500" />
      <span className={`${textSize} font-bold leading-none`}>
        <span className="text-white">Uni</span><span className="text-red-500">Path</span>
      </span>
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <GradCap size={capSize} className="text-red-500" />
      <span className={`${textSize} font-bold`}>
        <span className="text-white">Uni</span><span className="text-red-500">Path</span>
      </span>
    </div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }
  return content
}

export function LogoDark({ size = 'md', stacked = false }: Omit<LogoProps, 'href'>) {
  const capSize = size === 'sm' ? 18 : size === 'lg' ? 36 : 24
  const textSize = size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-3xl' : 'text-xl'

  if (stacked) {
    return (
      <div className="flex flex-col items-center gap-0.5">
        <GradCap size={capSize} className="text-red-500" />
        <span className={`${textSize} font-bold leading-none`}>
          <span className="text-blue-900">Uni</span><span className="text-red-500">Path</span>
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <GradCap size={capSize} className="text-red-500" />
      <span className={`${textSize} font-bold`}>
        <span className="text-blue-900">Uni</span><span className="text-red-500">Path</span>
      </span>
    </div>
  )
}
