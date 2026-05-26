import { useState, useEffect } from 'react'
import { useTheme } from '../../hooks/useTheme'
import KenteStripe from '../ui/KenteStripe'

const NAV_LINKS = [
  { label: 'História',   href: '#aprendizado', color: 'var(--terracota)' },
  { label: 'Identidade', href: '#identidade',  color: 'var(--verde)'    },
  { label: 'Galeria',    href: '#galeria',      color: 'var(--ouro)'     },
  { label: 'Mercado',    href: '#mercado',      color: 'var(--verde)'    },
  { label: 'Desafios',   href: '#desafios',     color: 'var(--terracota)'},
  { label: 'Futuro',     href: '#futuro',       color: 'var(--ouro)'     },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggle } = useTheme()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 40,
          transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
          background: scrolled ? (isDark ? 'rgba(5,5,9,0.92)' : 'rgba(242,232,213,0.92)') : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <nav
          className="flex items-center justify-between px-6 md:px-12 lg:px-20"
          style={{ height: '64px' }}
        >
          {/* Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="cursor-pointer group"
            aria-label="Topo"
          >
            <span
              className="font-display font-black uppercase"
              style={{
                fontSize: '1.1rem',
                letterSpacing: '0.12em',
                color: 'var(--text-primary)',
                transition: 'color 0.3s',
                display: 'block',
              }}
            >
              Trancistas
            </span>
            <span
              style={{
                display: 'block', height: '1px', background: 'var(--terracota)',
                transform: 'scaleX(0)', transformOrigin: 'left',
                transition: 'transform 0.3s ease',
              }}
              className="group-hover:[transform:scaleX(1)_!important]"
            />
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="relative group cursor-pointer"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.7rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: link.color,
                    background: 'none',
                    border: 'none',
                    transition: 'opacity 0.25s',
                    opacity: 0.7,
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '0.7'}
                >
                  {link.label}
                  {/* Underline accent on hover */}
                  <span
                    style={{
                      display: 'block',
                      height: '1.5px',
                      background: link.color,
                      transform: 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.25s ease',
                    }}
                    className="group-hover:[transform:scaleX(1)_!important]"
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label={isDark ? 'Tema claro' : 'Tema escuro'}
              className="cursor-pointer"
              style={{
                width: '36px', height: '36px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                color: 'var(--text-muted)',
                background: 'transparent',
                transition: 'border-color 0.25s, color 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--terracota)'; e.currentTarget.style.color = 'var(--terracota)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
            >
              {isDark ? (
                /* Sun icon */
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="4"/>
                  <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                /* Moon icon */
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
                </svg>
              )}
            </button>

            {/* Mobile burger */}
            <button
              className="md:hidden flex flex-col gap-[5px] cursor-pointer"
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
              style={{ background: 'none', border: 'none', padding: '4px' }}
            >
              {[0,1,2].map(i => (
                <span
                  key={i}
                  style={{
                    display: 'block', width: '22px', height: '1.5px',
                    background: 'var(--text-primary)',
                    transformOrigin: 'center',
                    transition: 'transform 0.3s, opacity 0.3s',
                    transform: menuOpen
                      ? i === 0 ? 'rotate(45deg) translateY(6.5px)' : i === 2 ? 'rotate(-45deg) translateY(-6.5px)' : 'scaleX(0)'
                      : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
        {/* Kente accent stripe — appears on scroll */}
        <div style={{
          overflow: 'hidden',
          height: scrolled ? '4px' : '0px',
          transition: 'height 0.4s ease',
        }}>
          <KenteStripe height={4} />
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className="md:hidden fixed inset-0 z-30 flex flex-col items-center justify-center gap-8"
        style={{
          background: isDark ? 'rgba(5,5,9,0.98)' : 'rgba(242,232,213,0.98)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.4s ease',
        }}
      >
        {NAV_LINKS.map((link, i) => (
          <button
            key={link.href}
            onClick={() => scrollTo(link.href)}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 6vw, 2.5rem)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--text-primary)',
              background: 'none', border: 'none',
              cursor: 'pointer',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `opacity 0.4s ${i * 0.05 + 0.1}s, transform 0.4s ${i * 0.05 + 0.1}s`,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--terracota)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  )
}
