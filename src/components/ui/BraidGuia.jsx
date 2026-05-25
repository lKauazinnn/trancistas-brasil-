import { motion, useScroll, useSpring } from 'framer-motion'

// Three interleaved sinusoidal strands — viewBox 0 0 60 1000
// Strand A & B cross at every 100 units; C is the center thread
const STRAND_A =
  'M 12 0 C 12 22 48 52 48 100 C 48 148 12 178 12 200 ' +
  'C 12 222 48 252 48 300 C 48 348 12 378 12 400 ' +
  'C 12 422 48 452 48 500 C 48 548 12 578 12 600 ' +
  'C 12 622 48 652 48 700 C 48 748 12 778 12 800 ' +
  'C 12 822 48 852 48 900 C 48 948 12 978 12 1000'

const STRAND_B =
  'M 48 0 C 48 22 12 52 12 100 C 12 148 48 178 48 200 ' +
  'C 48 222 12 252 12 300 C 12 348 48 378 48 400 ' +
  'C 48 422 12 452 12 500 C 12 548 48 578 48 600 ' +
  'C 48 622 12 652 12 700 C 12 748 48 778 48 800 ' +
  'C 48 822 12 852 12 900 C 12 948 48 978 48 1000'

// Center thread — smaller amplitude, slightly offset phase
const STRAND_C =
  'M 30 0 C 30 15 38 45 30 100 C 22 155 30 185 30 200 ' +
  'C 30 215 38 245 30 300 C 22 355 30 385 30 400 ' +
  'C 30 415 38 445 30 500 C 22 555 30 585 30 600 ' +
  'C 30 615 38 645 30 700 C 22 755 30 785 30 800 ' +
  'C 30 815 38 845 30 900 C 22 955 30 985 30 1000'

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
        width: '56px',
        height: '100vh',
        zIndex: 3,
        pointerEvents: 'none',
        opacity: 0.42,
        // Soft fade at top and bottom of viewport
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
      }}
    >
      <svg
        width="56"
        height="100%"
        viewBox="0 0 60 1000"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <defs>
          {/* Vertical gradient across the full viewBox height */}
          <linearGradient id="braid-ouro" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#D4A843" stopOpacity="0.4" />
            <stop offset="20%"  stopColor="#E8C060" stopOpacity="1"   />
            <stop offset="50%"  stopColor="#D4A030" stopOpacity="1"   />
            <stop offset="80%"  stopColor="#E8C060" stopOpacity="1"   />
            <stop offset="100%" stopColor="#D4A843" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="braid-terra" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#C0522A" stopOpacity="0.3" />
            <stop offset="25%"  stopColor="#D86545" stopOpacity="0.9" />
            <stop offset="75%"  stopColor="#C0522A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C0522A" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="braid-center" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#D4A843" stopOpacity="0.2" />
            <stop offset="50%"  stopColor="#D4A843" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#D4A843" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Back strand — terracota */}
        <motion.path
          d={STRAND_B}
          stroke="url(#braid-terra)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />

        {/* Center thread — thin ouro */}
        <motion.path
          d={STRAND_C}
          stroke="url(#braid-center)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />

        {/* Front strand — ouro envelhecido */}
        <motion.path
          d={STRAND_A}
          stroke="url(#braid-ouro)"
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
