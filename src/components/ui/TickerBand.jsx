const ITEMS = [
  'Resistência Ancestral', 'Arte nas Mãos', 'Identidade Negra',
  'Cultura Afro-Brasileira', 'Tranças e Memória', 'Empoderamento',
  'Beleza Natural', 'Profissão Reconhecida',
]

export default function TickerBand() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div
      style={{
        overflow: 'hidden',
        padding: '10px 0',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'transparent',
      }}
    >
      <div
        className="animate-ticker"
        style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap', width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 0 }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                padding: '0 1.5rem',
              }}
            >
              {item}
            </span>
            <span style={{ color: 'var(--terracota)', fontSize: '0.5rem' }}>★</span>
          </span>
        ))}
      </div>
    </div>
  )
}
