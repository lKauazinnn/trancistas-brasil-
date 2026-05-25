export default function BraidDivider({ className = '' }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-terracota/40" />
      <div className="flex gap-1 items-center">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-terracota"
            style={{ opacity: 0.3 + i * 0.15 }}
          />
        ))}
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-terracota/40" />
    </div>
  )
}
