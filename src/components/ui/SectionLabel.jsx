import { useScrollReveal } from '../../hooks/useScrollReveal'

const ACCENT_COLORS = [
  'var(--terracota)',
  'var(--ouro)',
  'var(--verde)',
  'var(--terracota)',
  'var(--ouro)',
]

export default function SectionLabel({ number, text }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })
  const color = number ? ACCENT_COLORS[(number - 1) % ACCENT_COLORS.length] : 'var(--terracota)'

  return (
    <div ref={ref} className="flex items-center gap-3 mb-5">
      {number && (
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.65rem',
          fontWeight: 700,
          color,
          minWidth: '20px',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.5s ease',
        }}>
          {String(number).padStart(2, '0')}
        </span>
      )}
      {/* Accent line — draws from left on scroll */}
      <span style={{
        width: '28px',
        height: '2px',
        background: color,
        flexShrink: 0,
        display: 'block',
        transformOrigin: 'left',
        transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
      }} />
      <span className="label-tag" style={{
        color,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
        transition: 'opacity 0.5s ease 0.25s, transform 0.5s ease 0.25s',
        display: 'block',
      }}>
        {text}
      </span>
    </div>
  )
}
