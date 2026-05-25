const ACCENT_COLORS = [
  'var(--terracota)',
  'var(--ouro)',
  'var(--verde)',
  'var(--terracota)',
  'var(--ouro)',
]

export default function SectionLabel({ number, text }) {
  const color = number ? ACCENT_COLORS[(number - 1) % ACCENT_COLORS.length] : 'var(--terracota)'
  return (
    <div className="flex items-center gap-3 mb-5">
      {number && (
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.65rem',
          fontWeight: 700,
          color,
          minWidth: '20px',
        }}>
          {String(number).padStart(2, '0')}
        </span>
      )}
      <span style={{ width: '28px', height: '2px', background: color, flexShrink: 0 }} />
      <span className="label-tag" style={{ color }}>{text}</span>
    </div>
  )
}
