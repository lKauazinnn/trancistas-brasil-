import { useScrollReveal } from '../../hooks/useScrollReveal'

const BEADS = [
  { color: 'var(--terracota)', r: 5 },
  { color: 'var(--ouro)',      r: 4 },
  { color: 'var(--verde)',     r: 6 },
  { color: 'var(--ouro)',      r: 4 },
  { color: 'var(--terracota)', r: 5 },
  { color: 'var(--verde)',     r: 4 },
  { color: 'var(--ouro)',      r: 5 },
  { color: 'var(--terracota)', r: 4 },
  { color: 'var(--verde)',     r: 5 },
]

export default function BeadDivider({ className = '' }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.4 })

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
    >
      <div style={{
        flex: 1, height: '1px', background: 'var(--border)',
        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'right',
        transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
      }} />
      {BEADS.map((b, i) => (
        <div
          key={i}
          style={{
            width: `${b.r * 2}px`,
            height: `${b.r * 2}px`,
            borderRadius: '50%',
            background: b.color,
            flexShrink: 0,
            animation: isVisible
              ? `beadPulse 2.4s ease-in-out ${i * 0.12}s infinite`
              : 'none',
            opacity: isVisible ? 0.72 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            transition: `opacity 0.4s ease ${i * 0.06}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.06}s`,
          }}
        />
      ))}
      <div style={{
        flex: 1, height: '1px', background: 'var(--border)',
        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
      }} />
    </div>
  )
}
