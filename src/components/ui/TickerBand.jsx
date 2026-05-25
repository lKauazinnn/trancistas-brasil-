import KenteStripe from './KenteStripe'

const ITEMS = [
  'Resistência Ancestral', 'Arte nas Mãos', 'Identidade Negra',
  'Cultura Afro-Brasileira', 'Tranças e Memória', 'Empoderamento',
  'Beleza Natural', 'Profissão Reconhecida',
]

const STAR_COLORS = ['var(--terracota)', 'var(--ouro)', 'var(--verde)', 'var(--ouro)']

export default function TickerBand() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div>
      <KenteStripe height={6} />
      <div style={{ overflow: 'hidden', padding: '10px 0', background: 'var(--bg-secondary)' }}>
        <div
          className="animate-ticker"
          style={{ display: 'flex', gap: 0, whiteSpace: 'nowrap', width: 'max-content' }}
        >
          {doubled.map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.62rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                padding: '0 1.5rem',
              }}>
                {item}
              </span>
              <span style={{
                color: STAR_COLORS[i % STAR_COLORS.length],
                fontSize: '0.55rem',
              }}>
                ★
              </span>
            </span>
          ))}
        </div>
      </div>
      <KenteStripe height={6} />
    </div>
  )
}
