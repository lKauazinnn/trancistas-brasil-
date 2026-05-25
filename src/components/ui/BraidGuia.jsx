import { motion, useScroll, useSpring } from 'framer-motion'

// Two sinusoidal strands crossing every 100 units — creates a braided appearance
// ViewBox: 0 0 60 1000, scaled with preserveAspectRatio="none"
const STRAND_A =
  'M 15 0 C 15 25 45 55 45 100 C 45 145 15 175 15 200 ' +
  'C 15 225 45 255 45 300 C 45 345 15 375 15 400 ' +
  'C 15 425 45 455 45 500 C 45 545 15 575 15 600 ' +
  'C 15 625 45 655 45 700 C 45 745 15 775 15 800 ' +
  'C 15 825 45 855 45 900 C 45 945 15 975 15 1000'

const STRAND_B =
  'M 45 0 C 45 25 15 55 15 100 C 15 145 45 175 45 200 ' +
  'C 45 225 15 255 15 300 C 15 345 45 375 45 400 ' +
  'C 45 425 15 455 15 500 C 15 545 45 575 45 600 ' +
  'C 45 625 15 655 15 700 C 15 745 45 775 45 800 ' +
  'C 45 825 15 855 15 900 C 15 945 45 975 45 1000'

export default function BraidGuia() {
  const { scrollYProgress } = useScroll()
  const pathLength = useSpring(scrollYProgress, { stiffness: 80, damping: 22, restDelta: 0.001 })

  return (
    <div
      className="hidden lg:block"
      aria-hidden
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '48px',
        height: '100vh',
        zIndex: 3,
        pointerEvents: 'none',
        opacity: 0.3,
      }}
    >
      <svg
        width="48"
        height="100%"
        viewBox="0 0 60 1000"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        {/* Back strand — terracota */}
        <motion.path
          d={STRAND_B}
          stroke="var(--terracota)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
        {/* Front strand — ouro */}
        <motion.path
          d={STRAND_A}
          stroke="var(--ouro)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
      </svg>
    </div>
  )
}
