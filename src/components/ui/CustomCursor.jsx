import { useEffect, useRef, useState } from 'react'

const LERP = 0.13

export default function CustomCursor() {
  // Only render on pointer-fine (mouse) devices
  const [ready, setReady] = useState(false)
  const ringRef = useRef(null)
  const dotRef  = useRef(null)
  const curr    = useRef({ x: -200, y: -200 })
  const targ    = useRef({ x: -200, y: -200 })
  const rafRef  = useRef(null)
  const [mode, setMode] = useState('default') // 'default' | 'hover' | 'gone'

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    setReady(true)

    const onMove = (e) => { targ.current = { x: e.clientX, y: e.clientY } }
    const onOver = (e) => {
      const hit = e.target.closest('button, a, [role="button"], label')
      setMode(hit ? 'hover' : 'default')
    }
    const onLeave = () => setMode('gone')
    const onEnter = () => setMode('default')

    const loop = () => {
      curr.current.x += (targ.current.x - curr.current.x) * LERP
      curr.current.y += (targ.current.y - curr.current.y) * LERP
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${curr.current.x}px, ${curr.current.y}px)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${targ.current.x}px, ${targ.current.y}px)`
      }
      rafRef.current = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove',  onMove,  { passive: true })
    document.addEventListener('mouseover',  onOver)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseover',  onOver)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  if (!ready) return null

  const isHover = mode === 'hover'
  const isGone  = mode === 'gone'
  const size    = isHover ? 48 : 30
  const offset  = size / 2

  return (
    <>
      {/* Lagging ring */}
      <div
        ref={ringRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: `${size}px`,
          height: `${size}px`,
          marginLeft: `-${offset}px`,
          marginTop: `-${offset}px`,
          borderRadius: '50%',
          border: `2px solid ${isHover ? 'var(--ouro)' : 'var(--terracota)'}`,
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isGone ? 0 : 0.8,
          transition: 'width 0.25s ease, height 0.25s ease, margin 0.25s ease, border-color 0.25s ease, opacity 0.4s ease',
          backdropFilter: isHover ? 'invert(0.08)' : 'none',
        }}
      />
      {/* Exact dot */}
      <div
        ref={dotRef}
        aria-hidden
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: isHover ? '8px' : '5px',
          height: isHover ? '8px' : '5px',
          marginLeft: isHover ? '-4px' : '-2.5px',
          marginTop:  isHover ? '-4px' : '-2.5px',
          borderRadius: '50%',
          background: isHover ? 'var(--ouro)' : 'var(--terracota)',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isGone ? 0 : 1,
          transition: 'width 0.2s, height 0.2s, margin 0.2s, background 0.2s, opacity 0.4s',
        }}
      />
    </>
  )
}
