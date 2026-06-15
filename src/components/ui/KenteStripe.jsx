import { useId, useMemo } from 'react'

const W = 1600

function makePath(h, amp, cyclesAcross, phaseRad) {
  const freq = (2 * Math.PI * cyclesAcross) / W
  const pts = []
  for (let x = 0; x <= W; x += 8) {
    const y = h / 2 + amp * Math.sin(x * freq + phaseRad)
    pts.push(`${x.toFixed(1)},${y.toFixed(2)}`)
  }
  return 'M' + pts.join(' L')
}

// Approximate crossing positions for beads:
// 3-strand braid crosses every (W/cycles)/3 units
function beadPositions(cyclesAcross, count) {
  const λ = W / cyclesAcross
  const step = λ / 3
  return Array.from({ length: count }, (_, i) => Math.round(step * 0.5 + i * step))
}

export default function KenteStripe({ height = 50, className = '' }) {
  const uid = useId().replace(/:/g, 'x')
  const h   = Math.max(height, 36)
  const amp = h * 0.30
  const CYCLES = 11

  const paths = useMemo(() => ({
    a: makePath(h, amp,          CYCLES, 0),
    b: makePath(h, amp,          CYCLES, (2 * Math.PI) / 3),
    c: makePath(h, amp,          CYCLES, (4 * Math.PI) / 3),
    thin1: makePath(h, amp * 0.45, CYCLES * 1.5, Math.PI / 5),
    thin2: makePath(h, amp * 0.45, CYCLES * 1.5, Math.PI * 6 / 5),
  }), [h, amp])

  const beads = useMemo(() => beadPositions(CYCLES, 32), [])

  const gaId    = `ga${uid}`
  const gbId    = `gb${uid}`
  const gcId    = `gc${uid}`
  const gthinId = `gthin${uid}`

  return (
    <div
      className={className}
      style={{ width: '100%', height: `${h}px`, overflow: 'hidden', flexShrink: 0, display: 'block' }}
      aria-hidden="true"
    >
      <svg
        viewBox={`0 0 ${W} ${h}`}
        width="100%"
        height={h}
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <defs>
          <linearGradient id={gaId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#B84020" />
            <stop offset="30%"  stopColor="#D4622C" />
            <stop offset="60%"  stopColor="#E87840" />
            <stop offset="100%" stopColor="#B84020" />
          </linearGradient>
          <linearGradient id={gbId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#C89020" />
            <stop offset="40%"  stopColor="#F0C040" />
            <stop offset="70%"  stopColor="#D4A830" />
            <stop offset="100%" stopColor="#C89020" />
          </linearGradient>
          <linearGradient id={gcId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#1E5A38" />
            <stop offset="40%"  stopColor="#2E8060" />
            <stop offset="80%"  stopColor="#3A9870" />
            <stop offset="100%" stopColor="#1E5A38" />
          </linearGradient>
          <linearGradient id={gthinId} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#8B2A14" />
            <stop offset="50%"  stopColor="#AA4020" />
            <stop offset="100%" stopColor="#8B2A14" />
          </linearGradient>
        </defs>

        {/* Dark ground */}
        <rect width={W} height={h} fill="#07070F" />

        {/* Thin accent strands behind the main 3 */}
        <path
          d={paths.thin1}
          stroke={`url(#${gthinId})`}
          strokeWidth={Math.max(1.5, h * 0.07)}
          fill="none"
          opacity="0.55"
          strokeLinecap="round"
        />
        <path
          d={paths.thin2}
          stroke={`url(#${gthinId})`}
          strokeWidth={Math.max(1.5, h * 0.07)}
          fill="none"
          opacity="0.55"
          strokeLinecap="round"
        />

        {/* Main 3-strand braid — C first (back), then A (mid), then B (front) */}
        <path
          d={paths.c}
          stroke={`url(#${gcId})`}
          strokeWidth={Math.max(3, h * 0.17)}
          fill="none"
          opacity="0.92"
          strokeLinecap="round"
        />
        <path
          d={paths.a}
          stroke={`url(#${gaId})`}
          strokeWidth={Math.max(4, h * 0.22)}
          fill="none"
          opacity="1"
          strokeLinecap="round"
        />
        <path
          d={paths.b}
          stroke={`url(#${gbId})`}
          strokeWidth={Math.max(3.5, h * 0.19)}
          fill="none"
          opacity="0.95"
          strokeLinecap="round"
        />

        {/* Miçangas (beads) at crossing points */}
        {beads.map((bx, i) => {
          const bead = [
            { fill: '#C0522A', stroke: '#6B1A08' },
            { fill: '#D4A030', stroke: '#7A5010' },
            { fill: '#2D6A4F', stroke: '#0E3020' },
            { fill: '#B83228', stroke: '#601010' },
            { fill: '#E8B840', stroke: '#886018' },
          ]
          const b = bead[i % bead.length]
          const r = Math.max(3, h * 0.11)
          return (
            <g key={i}>
              {/* Bead shadow */}
              <circle cx={bx} cy={h / 2 + 1} r={r + 0.5} fill="rgba(0,0,0,0.4)" />
              {/* Bead body */}
              <circle cx={bx} cy={h / 2} r={r} fill={b.fill} stroke={b.stroke} strokeWidth="1" opacity="0.9" />
              {/* Bead shine */}
              <circle
                cx={bx - r * 0.28}
                cy={h / 2 - r * 0.28}
                r={r * 0.32}
                fill="rgba(255,255,255,0.30)"
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
