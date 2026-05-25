// Beaded divider — Afro-Brazilian bead strand aesthetic
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
  return (
    <div
      className={className}
      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
    >
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      {BEADS.map((b, i) => (
        <div
          key={i}
          style={{
            width: `${b.r * 2}px`,
            height: `${b.r * 2}px`,
            borderRadius: '50%',
            background: b.color,
            opacity: 0.72,
            flexShrink: 0,
          }}
        />
      ))}
      <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
    </div>
  )
}
