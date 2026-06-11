import { MatricSubject, SYMBOL_POINTS } from '@/types'

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
