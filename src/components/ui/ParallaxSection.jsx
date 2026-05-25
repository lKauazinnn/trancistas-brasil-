import { useRef, useEffect, useState } from 'react'

// Full-width parallax image section — inspired by Metrópoles specials
export default function ParallaxSection({ src, alt, height = '60vh', intensity = 0.25, children, overlay = 0.5, objectPosition = 'center center' }) {
  const ref = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2 - window.innerHeight / 2
      setOffset(center * intensity)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [intensity])

  return (
    <div
      ref={ref}
      className="parallax-wrap"
      style={{ height, position: 'relative', overflow: 'hidden' }}
    >
      <img
        src={src}
        alt={alt}
        className="parallax-img"
        style={{ transform: `translateY(${offset}px)`, objectPosition }}
        loading="lazy"
      />
      {/* Dark tint for readability */}
      <div
        style={{
          position: 'absolute', inset: 0,
          background: `rgba(5,5,9,${overlay})`,
        }}
      />
      {children && (
        <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
          {children}
        </div>
      )}
    </div>
  )
}
