// Inspired by afrocebrap.org.br — an asymmetric grid/collage of portrait photos
// Creates a visual puzzle composition that fills the right side of the hero

const MOSAIC_IMAGES = [
  { src: '/media/photos/_MG_0317.jpg', gridArea: '1 / 1 / 3 / 2', alt: 'Trancista' },
  { src: '/media/photos/_MG_0329.jpg', gridArea: '1 / 2 / 2 / 3', alt: 'Arte' },
  { src: '/media/photos/_MG_0346.jpg', gridArea: '2 / 2 / 4 / 3', alt: 'Processo' },
  { src: '/media/photos/_MG_0370.jpg', gridArea: '3 / 1 / 4 / 2', alt: 'Detalhe' },
  { src: '/media/photos/_MG_0398.jpg', gridArea: '4 / 1 / 5 / 2', alt: 'Trança' },
  { src: '/media/photos/_MG_0527.jpg', gridArea: '4 / 2 / 5 / 3', alt: 'Resultado' },
]

export default function PhotoMosaic({ className = '' }) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'repeat(4, 1fr)',
        gap: '4px',
        height: '100%',
        width: '100%',
      }}
    >
      {MOSAIC_IMAGES.map((img, i) => (
        <div
          key={i}
          style={{
            gridArea: img.gridArea,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.6s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            loading="lazy"
          />
          {/* Tint overlay */}
          <div
            style={{
              position: 'absolute', inset: 0,
              background: i % 2 === 0
                ? 'rgba(192,82,42,0.08)'
                : 'rgba(5,5,9,0.12)',
              pointerEvents: 'none',
            }}
          />
        </div>
      ))}

      {/* Corner label */}
      <div
        style={{
          position: 'absolute', bottom: '12px', right: '12px',
          background: 'var(--terracota)',
          color: '#FAFAF5',
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.55rem',
          fontWeight: 700,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          padding: '4px 8px',
          zIndex: 2,
        }}
      >
        Arte · Resistência
      </div>
    </div>
  )
}
