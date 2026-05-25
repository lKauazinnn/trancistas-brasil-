export default function SectionLabel({ number, text }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      {number && (
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-muted)', opacity: 0.7, minWidth: '20px' }}>
          {String(number).padStart(2, '0')}
        </span>
      )}
      <span style={{ width: '28px', height: '1px', background: 'var(--terracota)', flexShrink: 0 }} />
      <span className="label-tag">{text}</span>
    </div>
  )
}
