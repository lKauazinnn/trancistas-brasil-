import { useId } from 'react'

// Kente cloth-inspired SVG stripe divider with diamond accent
export default function KenteStripe({ height = 22, className = '' }) {
  const uid = useId().replace(/:/g, 'x')
  const patId = `kp${uid}`
  const h = Math.max(height, 14)
  const mid = h / 2
  const dHalf = Math.min((h - 4) / 2 - 1, 8)

  return (
    <div className={className} style={{ width: '100%', height: `${h}px`, overflow: 'hidden', flexShrink: 0 }}>
      <svg
        width="100%"
        height={h}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id={patId} x="0" y="0" width="128" height={h} patternUnits="userSpaceOnUse">
            {/* Full black background */}
            <rect width="128" height={h} fill="#1C1C1A" />
            {/* Ouro — band 1 */}
            <rect x="0"   y="2" width="18" height={h - 4} fill="#D4A843" />
            {/* Terracota — band 2 */}
            <rect x="20"  y="2" width="18" height={h - 4} fill="#C0522A" />
            {/* Verde — band 3 */}
            <rect x="40"  y="2" width="14" height={h - 4} fill="#2D6A4F" />
            {/* Centre ouro + diamond accent */}
            <rect x="56"  y="2" width="16" height={h - 4} fill="#E8B84B" />
            <polygon
              points={`64,${mid - dHalf} ${64 + dHalf},${mid} 64,${mid + dHalf} ${64 - dHalf},${mid}`}
              fill="#1C1C1A"
            />
            {/* Verde — band 5 */}
            <rect x="74"  y="2" width="14" height={h - 4} fill="#2D6A4F" />
            {/* Terracota — band 6 */}
            <rect x="90"  y="2" width="18" height={h - 4} fill="#C0522A" />
            {/* Ouro — band 7 */}
            <rect x="110" y="2" width="18" height={h - 4} fill="#D4A843" />
          </pattern>
        </defs>
        <rect width="100%" height={h} fill={`url(#${patId})`} />
      </svg>
    </div>
  )
}
