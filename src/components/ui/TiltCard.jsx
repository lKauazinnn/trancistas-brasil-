import { useRef, useCallback } from 'react'

/**
 * Wraps children with a subtle 3D perspective tilt on mouse hover.
 * Uses direct DOM manipulation to avoid re-renders.
 */
export default function TiltCard({ children, intensity = 7, className = '', style = {}, ...props }) {
  const ref = useRef(null)
  const hovering = useRef(false)

  const onMouseEnter = useCallback(() => {
    hovering.current = true
    if (ref.current) ref.current.style.transition = 'transform 0.08s ease, box-shadow 0.3s ease'
  }, [])

  const onMouseMove = useCallback((e) => {
    if (!hovering.current || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2  // -1 to 1
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 2  // -1 to 1
    ref.current.style.transform = `perspective(700px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateZ(6px)`
  }, [intensity])

  const onMouseLeave = useCallback(() => {
    hovering.current = false
    if (!ref.current) return
    ref.current.style.transition = 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)'
    ref.current.style.transform = 'perspective(700px) rotateY(0deg) rotateX(0deg) translateZ(0px)'
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: 'transform', ...style }}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </div>
  )
}
