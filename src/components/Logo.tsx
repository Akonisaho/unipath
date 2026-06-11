import Link from 'next/link'

const SIZES = { sm: 110, md: 155, lg: 210 }

function LogoSVG({ width, onDark = false }: { width: number; onDark?: boolean }) {
  const height = Math.round(width * (360 / 680))
  const navy = onDark ? '#ffffff' : '#1a1a2e'
  const navyDim = onDark ? '#ccccdd' : '#111128'
  const navyMid = onDark ? '#ddddee' : '#252545'

  return (
    <svg width={width} height={height} viewBox="0 0 680 360" xmlns="http://www.w3.org/2000/svg" aria-label="UniPath">
      <rect x="270" y="140" width="140" height="55" rx="6" fill={navy}/>
      <ellipse cx="340" cy="195" rx="70" ry="12" fill={navyDim}/>
      <ellipse cx="340" cy="140" rx="70" ry="12" fill={navyMid}/>
      <polygon points="200,128 340,148 480,128 340,108" fill={navyDim}/>
      <polygon points="200,120 340,140 480,120 340,100" fill={navy}/>
      <polygon points="200,120 340,140 480,120 340,100" fill="none" stroke="#e94560" strokeWidth="2"/>
      <circle cx="340" cy="120" r="6" fill="#e94560"/>
      <path d="M480,120 C500,120 510,130 508,160 C506,185 495,210 488,230" fill="none" stroke="#f5a623" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="488" cy="232" r="7" fill="#f5a623"/>
      <line x1="484" y1="239" x2="479" y2="258" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
      <line x1="488" y1="239" x2="488" y2="260" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
      <line x1="492" y1="239" x2="497" y2="258" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
      <text x="340" y="305" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="80" fontWeight="700" fill={navy} letterSpacing="-1">
        {'Uni'}<tspan fill="#e94560">{'P'}</tspan>{'ath'}
      </text>
      <circle cx="340" cy="268" r="4" fill="#f5a623"/>
      <path d="M178,318 Q340,338 502,318" fill="none" stroke="#e94560" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

/** Use on dark backgrounds (navbar, sidebar) — renders with white text */
export default function Logo({ size = 'md', href = '/' }: LogoProps) {
  const content = <LogoSVG width={SIZES[size]} onDark />
  if (href) return <Link href={href}>{content}</Link>
  return content
}

/** Use on light backgrounds (login, register, onboarding) — renders with navy text */
export function LogoDark({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  return <LogoSVG width={SIZES[size]} onDark={false} />
}
