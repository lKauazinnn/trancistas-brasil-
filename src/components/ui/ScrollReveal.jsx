import { useScrollReveal } from '../../hooks/useScrollReveal'

const variants = {
  'fade-up':    'translate-y-10 opacity-0',
  'fade-in':    'opacity-0',
  'fade-left':  '-translate-x-10 opacity-0',
  'fade-right': 'translate-x-10 opacity-0',
}

export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.15,
}) {
  const { ref, isVisible } = useScrollReveal({ threshold })

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? 'translate-y-0 translate-x-0 opacity-100' : variants[variant]}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
