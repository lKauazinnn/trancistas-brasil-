// Decorative SVG of an Afro pick comb — used as floating cultural element
export default function FloatingComb({ size = 56, style = {} }) {
  const w = size
  const h = Math.round(size * 1.72)

  return (
    <div
      aria-hidden
      style={{ animation: 'floatY 7s ease-in-out infinite', ...style }}
    >
      <svg
        width={w}
        height={h}
        viewBox="0 0 40 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Handle body */}
        <rect x="8" y="0" width="24" height="28" rx="5" fill="var(--terracota)" opacity="0.88" />
        {/* Handle decorative circle */}
        <circle cx="20" cy="10" r="5" fill="var(--ouro)" opacity="0.75" />
        {/* Handle inner circle */}
        <circle cx="20" cy="10" r="2.5" fill="var(--terracota)" opacity="0.9" />
        {/* Second handle motif */}
        <circle cx="20" cy="21" r="3" fill="var(--ouro)" opacity="0.55" />
        {/* Horizontal connector bar */}
        <rect x="1" y="28" width="38" height="5" rx="1.5" fill="var(--terracota)" opacity="0.92" />
        {/* Teeth — 7 prongs */}
        {[2, 8, 14, 20, 26, 32, 38].map((x, i) => (
          <rect key={i} x={x} y="33" width="3.5" height="36" rx="1.75" fill="var(--ouro)" opacity="0.82" />
        ))}
        {/* Faint bead accents on alternate teeth */}
        {[2, 14, 26, 38].map((x, i) => (
          <circle key={i} cx={x + 1.75} cy="46" r="2.5" fill="var(--terracota)" opacity="0.6" />
        ))}
      </svg>
    </div>
  )
}
