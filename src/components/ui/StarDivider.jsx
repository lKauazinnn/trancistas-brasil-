import { Star } from 'lucide-react'

export default function StarDivider({ className = '', light = false }) {
  const color = light ? 'rgba(28,28,26,0.35)' : 'var(--text-muted)'
  return (
    <div
      className={`star-divider py-1 ${className}`}
      style={{ color, display: 'flex', alignItems: 'center', gap: '10px' }}
    >
      <Star size={8} fill="currentColor" strokeWidth={0} />
      <Star size={8} fill="currentColor" strokeWidth={0} />
      <Star size={8} fill="currentColor" strokeWidth={0} />
    </div>
  )
}
