import { motion } from 'framer-motion'
import { useMemo } from 'react'

// SVG adinkra-inspired symbol: circle + cross + inner diamond
function AdinkraSVG({ size, color }) {
  const r = size / 2
  const ring = r * 0.76
  const ir   = r * 0.48
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden>
      <circle cx={r} cy={r} r={ring} stroke={color} strokeWidth="1.5" />
      <line x1={r} y1={r - ring} x2={r} y2={r + ring} stroke={color} strokeWidth="1" />
      <line x1={r - ring} y1={r} x2={r + ring} y2={r} stroke={color} strokeWidth="1" />
      <path
        d={`M${r} ${r - ir}L${r + ir} ${r}L${r} ${r + ir}L${r - ir} ${r}Z`}
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  )
}

// Deterministic positions from index (avoids hydration mismatch)
const makeItems = (count) =>
  Array.from({ length: count }, (_, i) => ({
    x:        (i * 16.7 + 7)  % 92,
    y:        (i * 24.3 + 11) % 85,
    size:     18 + (i * 6.7)  % 22,
    duration: 10 + (i * 2.1)  % 10,
    delay:    (i * 1.7)        % 8,
    rot0:     (i * 47)         % 360,
  }))

export default function AdinkraFloat({
  count   = 6,
  color   = 'var(--ouro)',
  zIndex  = 0,
}) {
  const items = useMemo(() => makeItems(count), [count])

  return (
    <div
      aria-hidden
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex }}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          style={{ position: 'absolute', left: `${item.x}%`, top: `${item.y}%` }}
          animate={{
            y:       [-14, 14, -14],
            rotate:  [item.rot0, item.rot0 + 180, item.rot0 + 360],
            opacity: [0.05, 0.13, 0.05],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay:  item.delay,
            ease:   'easeInOut',
          }}
        >
          <AdinkraSVG size={item.size} color={color} />
        </motion.div>
      ))}
    </div>
  )
}
