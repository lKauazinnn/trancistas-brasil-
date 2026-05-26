import { useScrollReveal } from '../../hooks/useScrollReveal'

const mudclothBg = (color) => {
  const c = color.replace(/#/g, '%23').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/var\(/g, '').replace(/\)/g, '')
  return `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28'><line x1='0' y1='0' x2='28' y2='28' stroke='%23C0522A' stroke-width='1.5'/><line x1='28' y1='0' x2='0' y2='28' stroke='%23C0522A' stroke-width='1.5'/><path d='M14 4L24 14L14 24L4 14Z' stroke='%23C0522A' stroke-width='1' fill='none'/></svg>")`
}

export default function CenteredQuote({ quote, author, role, dark = false, accentColor = 'var(--terracota)' }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <div
      style={{
        background: dark ? 'var(--bg-deep)' : 'var(--bg-surface)',
        padding: 'clamp(3.5rem, 10vw, 7rem) clamp(1rem, 5vw, 14rem)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      {/* Mudcloth texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28'><line x1='0' y1='0' x2='28' y2='28' stroke='%231C1C1A' stroke-width='1.5'/><line x1='28' y1='0' x2='0' y2='28' stroke='%231C1C1A' stroke-width='1.5'/><path d='M14 4L24 14L14 24L4 14Z' stroke='%231C1C1A' stroke-width='1' fill='none'/></svg>")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '28px 28px',
        opacity: dark ? 0.04 : 0.025,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Left kente strip */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '7px',
        backgroundImage: 'repeating-linear-gradient(180deg, #C0522A 0px, #C0522A 10px, #D4A030 10px, #D4A030 20px, #2D6A4F 20px, #2D6A4F 30px)',
        zIndex: 1,
      }} />
      {/* Right kente strip */}
      <div style={{
        position: 'absolute', right: 0, top: 0, bottom: 0, width: '7px',
        backgroundImage: 'repeating-linear-gradient(180deg, #2D6A4F 0px, #2D6A4F 10px, #D4A030 10px, #D4A030 20px, #C0522A 20px, #C0522A 30px)',
        zIndex: 1,
      }} />

      {/* Giant decorative quotation mark */}
      <span
        aria-hidden
        style={{
          position: 'absolute', top: '-0.1em', left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(6rem, 28vw, 22rem)',
          lineHeight: 1,
          color: accentColor,
          opacity: 0.07,
          fontWeight: 900,
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        "
      </span>

      <div ref={ref} style={{ position: 'relative', zIndex: 2 }}>
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
          <span style={{ width: '32px', height: '1px', background: accentColor, flexShrink: 0 }} />
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
