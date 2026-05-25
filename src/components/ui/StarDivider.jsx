import { Star } from 'lucide-react'

const COLORS = ['var(--terracota)', 'var(--ouro)', 'var(--verde)']

export default function StarDivider({ className = '', light = false }) {
  return (
    <div
      className={`star-divider py-1 ${className}`}
      style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
    >
      {COLORS.map((color, i) => (
        <Star
          key={i}
          size={9}
          fill={light ? 'rgba(28,28,26,0.3)' : color}
          strokeWidth={0}
          style={{ color: light ? 'rgba(28,28,26,0.3)' : color }}
        />
      ))}
    </div>
  )
}
