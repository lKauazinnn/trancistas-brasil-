import { useState, useEffect } from 'react'

const SECTIONS = [
  { id: 'hero',       label: 'Início' },
  { id: 'aprendizado',label: 'História' },
  { id: 'identidade', label: 'Identidade' },
  { id: 'galeria',    label: 'Galeria' },
  { id: 'mercado',    label: 'Mercado' },
  { id: 'desafios',   label: 'Desafios' },
  { id: 'futuro',     label: 'Futuro' },
]

export default function SectionNav() {
  const [active, setActive] = useState('hero')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.3 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <nav
      className="hidden lg:flex"
      aria-label="Seções"
      style={{
        position: 'fixed', right: '1.75rem', top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 30,
        flexDirection: 'column',
        gap: '10px',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id
        return (
          <button
            key={id}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
            aria-label={label}
            title={label}
            style={{
              width: isActive ? '22px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: isActive ? 'var(--terracota)' : 'var(--text-dim)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
            }}
          />
        )
      })}
    </nav>
  )
}
