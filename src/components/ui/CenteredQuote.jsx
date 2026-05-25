import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function CenteredQuote({ quote, author, role, dark = false }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <div
      style={{
        background: dark ? 'var(--bg-deep)' : 'var(--bg-surface)',
        padding: 'clamp(3.5rem, 10vw, 7rem) clamp(1.5rem, 10vw, 14rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Giant decorative quotation mark */}
      <span
        aria-hidden
        style={{
          position: 'absolute', top: '-0.1em', left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(14rem, 28vw, 22rem)',
          lineHeight: 1,
          color: 'var(--terracota)',
          opacity: 0.055,
          fontWeight: 900,
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        "
      </span>

      <div ref={ref}>
        {/* Quote text */}
        <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
              fontWeight: 700,
              fontStyle: 'italic',
              lineHeight: 1.25,
              color: 'var(--text-primary)',
              maxWidth: '860px',
              margin: '0 auto',
              position: 'relative', zIndex: 1,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              opacity: isVisible ? 1 : 0,
              transition: 'transform 0.9s cubic-bezier(0.16,1,0.3,1), opacity 0.7s ease',
            }}
          >
            "{quote}"
          </p>
        </div>

        {/* Attribution */}
        <div
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          <span style={{ width: '32px', height: '1px', background: 'var(--terracota)', flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.82rem', fontWeight: 600,
              color: 'var(--text-primary)',
            }}>
              {author}
            </p>
            {role && (
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                marginTop: '2px',
              }}>
                {role}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
