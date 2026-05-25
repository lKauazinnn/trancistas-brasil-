import { useScrollReveal } from '../../hooks/useScrollReveal'

// Metrópoles-style headline reveal: text slides up from behind a clip mask
export default function ClipReveal({ children, delay = 0, className = '', style = {} }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 })

  return (
    <div ref={ref} style={{ overflow: 'hidden', ...style }}>
      <div
        className={className}
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(105%)',
          opacity: isVisible ? 1 : 0,
          transition: `transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                       opacity 0.5s ease ${delay}ms`,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
