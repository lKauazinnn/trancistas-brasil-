import { useState, useEffect } from 'react'

export default function ReadingProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const update = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const total = scrollHeight - clientHeight
      setPct(total > 0 ? (scrollTop / total) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: '3px',
      zIndex: 100, background: 'transparent',
    }}>
      <div style={{
        height: '100%',
        width: `${pct}%`,
        background: 'var(--terracota)',
        transformOrigin: 'left',
        transition: 'width 0.08s linear',
      }} />
    </div>
  )
}
