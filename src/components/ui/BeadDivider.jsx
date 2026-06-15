import { useScrollReveal } from '../../hooks/useScrollReveal'

const BEADS = [
  { color: '#C0522A', r: 5, shadow: 'rgba(192,82,42,0.6)' },
  { color: '#D4A030', r: 4, shadow: 'rgba(212,160,48,0.5)' },
  { color: '#2D6A4F', r: 6, shadow: 'rgba(45,106,79,0.5)'  },
  { color: '#E07038', r: 4, shadow: 'rgba(224,112,56,0.5)' },
  { color: '#F0C040', r: 7, shadow: 'rgba(240,192,64,0.6)' },
  { color: '#C0522A', r: 4, shadow: 'rgba(192,82,42,0.5)'  },
  { color: '#3A9870', r: 6, shadow: 'rgba(58,152,112,0.5)' },
  { color: '#D4A030', r: 4, shadow: 'rgba(212,160,48,0.5)' },
  { color: '#B83228', r: 5, shadow: 'rgba(184,50,40,0.5)'  },
  { color: '#D4A030', r: 4, shadow: 'rgba(212,160,48,0.5)' },
  { color: '#C0522A', r: 6, shadow: 'rgba(192,82,42,0.6)'  },
]

export default function BeadDivider({ className = '' }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.4 })

  return (
    <div
      ref={ref}
      className={className}
      style={{ display: 'flex', alignItems: 'center', gap: '7px' }}
    >
      {/* Linha esquerda — padrão trança */}
      <div
        style={{
          flex: 1, height: '3px',
          background: isVisible
            ? 'repeating-linear-gradient(90deg, #C0522A 0px, #C0522A 14px, #D4A030 14px, #D4A030 28px, #2D6A4F 28px, #2D6A4F 42px)'
            : 'var(--border)',
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'right',
          transition: 'transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.1s, background 0.4s ease',
          borderRadius: '2px',
        }}
      />

      {/* Miçangas */}
      {BEADS.map((b, i) => (
        <div
          key={i}
          style={{
            width: `${b.r * 2}px`,
            height: `${b.r * 2}px`,
            borderRadius: '50%',
            background: b.color,
            flexShrink: 0,
            boxShadow: isVisible ? `0 0 8px ${b.shadow}` : 'none',
            animation: isVisible
              ? `beadPulse 2.6s ease-in-out ${i * 0.11}s infinite`
              : 'none',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0)',
            transition: `opacity 0.4s ease ${i * 0.055}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.055}s, box-shadow 0.3s ease`,
          }}
        />
      ))}

      {/* Linha direita */}
      <div
        style={{
          flex: 1, height: '3px',
          background: isVisible
            ? 'repeating-linear-gradient(90deg, #2D6A4F 0px, #2D6A4F 14px, #D4A030 14px, #D4A030 28px, #C0522A 28px, #C0522A 42px)'
            : 'var(--border)',
          transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.1s, background 0.4s ease',
          borderRadius: '2px',
        }}
      />
    </div>
  )
}
