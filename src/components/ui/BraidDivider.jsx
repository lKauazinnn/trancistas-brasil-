export default function BraidDivider({ className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-terracota/60 to-ouro/60" />
      <div className="flex gap-1.5 items-center">
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full"
            style={{
              background: i % 3 === 0 ? 'var(--terracota)' : i % 3 === 1 ? 'var(--ouro)' : 'var(--verde)',
              opacity: 0.45 + i * 0.07,
              boxShadow: '0 0 6px rgba(0,0,0,0.1)',
            }}
          />
        ))}
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-verde/60 to-terracota/60" />
    </div>
  )
}
