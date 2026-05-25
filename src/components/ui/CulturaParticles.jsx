import { motion } from 'framer-motion'
import { useMemo } from 'react'

// Contas (beads) that drift upward through a section — Afro-Brazilian particle effect
const COLORS = ['#C0522A', '#D4A030', '#2D6A4F', '#D4A843', '#B84A30', '#3D8A65']

const makeParticles = (count) =>
  Array.from({ length: count }, (_, i) => ({
    x:        (i * 6.7 + 3)  % 96,
    size:     3 + (i * 2)    % 7,
    color:    COLORS[i % COLORS.length],
    duration: 12 + (i * 1.9) % 14,
    delay:    (i * 0.85)     % 12,
    drift:    (i % 2 === 0 ? 1 : -1) * (15 + (i * 3) % 20),
  }))

export default function CulturaParticles({ count = 14, zIndex = 0 }) {
  const items = useMemo(() => makeParticles(count), [count])

  return (
    <div
      aria-hidden
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex }}
    >
      {items.map((p, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left:         `${p.x}%`,
            width:         p.size,
            height:        p.size,
            borderRadius: '50%',
            background:    p.color,
          }}
          initial={{ bottom: '-5%', opacity: 0 }}
          animate={{
            bottom:  '110%',
            x:       [0, p.drift, 0, -p.drift / 2, 0],
            opacity: [0, 0.22, 0.22, 0.18, 0],
          }}
          transition={{
            duration: p.duration,
            repeat:   Infinity,
            delay:    p.delay,
            ease:     'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
