import { motion } from 'framer-motion'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useCountUp } from '../../hooks/useCountUp'

export default function StatCard({ value, suffix = '', prefix = '', label, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 })
  const count = useCountUp(Number.isInteger(value) ? value : Math.floor(value), 1600, isVisible)

  const displayed = Number.isInteger(value) ? count : (isVisible ? value : 0)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ type: 'spring', stiffness: 280, damping: 26, delay: delay / 1000 }}
      whileHover={{ borderLeftColor: 'var(--ouro)', scale: 1.02, transition: { duration: 0.2 } }}
      style={{
        paddingLeft: '1.25rem',
        borderLeft: '2px solid var(--terracota)',
        paddingTop: '2px',
        paddingBottom: '2px',
      }}
    >
      <div
        className="font-display font-black leading-none"
        style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)', marginBottom: '0.4rem', color: 'var(--text-primary)' }}
      >
        <span style={{ fontSize: '0.5em', color: 'var(--text-muted)' }}>{prefix}</span>
        <span>{displayed}</span>
        <span style={{ fontSize: '0.55em', color: 'var(--terracota)', marginLeft: '2px' }}>{suffix}</span>
      </div>
      <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', lineHeight: 1.4, color: 'var(--text-muted)' }}>
        {label}
      </p>
    </motion.div>
  )
}
