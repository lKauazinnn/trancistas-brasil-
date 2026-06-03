import { useRef, useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, X, ArrowDown } from 'lucide-react'

export default function ScrollCarousel({ images, title = 'Galeria', label = 'Fotografias' }) {
  const sectionRef   = useRef(null)
  const activeRef    = useRef(0)        // mirror of state — safe inside event handlers
  const lockedRef    = useRef(false)    // is wheel interception active?
  const exitingRef   = useRef(false)    // grace period after exit — blocks re-lock
  const lastWheelRef = useRef(0)        // for debounce
  const touchRef     = useRef({ x: 0, y: 0 })

  const [activeIndex, _setActiveIndex] = useState(0)
  const [lightbox,    setLightbox]     = useState(null)
  const [hint,        setHint]         = useState(true) // show "role para ver" hint
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const SLOT_W = Math.min(420, Math.max(260, vw * 0.8))
  const GAP    = 20
  const STEP   = SLOT_W + GAP
  const DEBOUNCE_MS = 520

  // Sync ref so event handlers always read the latest value
  const setActiveIndex = useCallback((val) => {
    const next = typeof val === 'function' ? val(activeRef.current) : val
    const clamped = Math.max(0, Math.min(images.length - 1, next))
    activeRef.current = clamped
    _setActiveIndex(clamped)
    if (clamped > 0) setHint(false)
  }, [images.length])

  // ── Detect when section is centred in viewport ────────────────
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
          if (!exitingRef.current) lockedRef.current = true
        } else {
          lockedRef.current = false
        }
      },
      { threshold: [0, 0.5, 0.75, 1] }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // ── Wheel interception ────────────────────────────────────────
  useEffect(() => {
    const onWheel = (e) => {
      if (!lockedRef.current) return

      const down = e.deltaY > 0
      const up   = e.deltaY < 0

      // At last image + scroll down → exit the lock, let page scroll
      if (down && activeRef.current >= images.length - 1) {
        lockedRef.current = false
        exitingRef.current = true
        setTimeout(() => { exitingRef.current = false }, 1400)
        return
      }

      // At first image + scroll up → let page scroll back
      if (up && activeRef.current <= 0) return

      e.preventDefault()

      // Debounce
      const now = Date.now()
      if (now - lastWheelRef.current < DEBOUNCE_MS) return
      lastWheelRef.current = now

      setActiveIndex(p => p + (down ? 1 : -1))
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [images.length, setActiveIndex])

  // ── Touch swipe ───────────────────────────────────────────────
  useEffect(() => {
    const onStart = (e) => {
      touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
    const onEnd = (e) => {
      if (!lockedRef.current) return
      const dx = touchRef.current.x - e.changedTouches[0].clientX
      const dy = touchRef.current.y - e.changedTouches[0].clientY
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 35) return
      const dir = Math.abs(dx) >= Math.abs(dy) ? Math.sign(dx) : Math.sign(dy)
      setActiveIndex(p => p + dir)
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend',   onEnd,   { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend',   onEnd)
    }
  }, [setActiveIndex])

  // ── Keyboard ─────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (lightbox !== null) return
      if (!lockedRef.current) return
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex(p => p + 1) }
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); setActiveIndex(p => p - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, setActiveIndex])

  // ── Lightbox keyboard ─────────────────────────────────────────
  useEffect(() => {
    if (lightbox === null) return
    const h = (e) => {
      if (e.key === 'Escape')     setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox(i => (i + 1) % images.length)
      if (e.key === 'ArrowLeft')  setLightbox(i => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [lightbox, images.length])

  const progress   = activeIndex / Math.max(1, images.length - 1)
  // CSS transform centres the active slot in the viewport
  const translateX = `calc(50vw - ${SLOT_W / 2}px - ${activeIndex * STEP}px)`

  return (
    <>
      {/* ── Section: normal height, no tall wrapper ─────────── */}
      <section
        ref={sectionRef}
        id="galeria"
        style={{
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'var(--bg-deep)',
        }}
      >
        {/* Header */}
        <div style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          padding: '5rem clamp(1.5rem,5vw,5rem) 1rem',
        }}>
          <div>
            <p className="label-tag" style={{ marginBottom: '4px' }}>{label}</p>
            <h3 className="font-display font-black uppercase leading-none"
                style={{ fontSize: 'clamp(1.4rem,3vw,2.2rem)', color: 'var(--text-primary)' }}>
              {title}
            </h3>
          </div>
          <p className="font-display font-black tabular-nums"
             style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--text-primary)', lineHeight: 1 }}>
            {String(activeIndex + 1).padStart(2, '0')}
            <span style={{ fontSize: '0.45em', color: 'var(--text-muted)', marginLeft: '3px' }}>
              /{String(images.length).padStart(2, '0')}
            </span>
          </p>
        </div>

        {/* Strip — transform slides it, overflow:hidden clips it */}
        <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: `${GAP}px`,
            height: '100%',
            transform: `translateX(${translateX})`,
            transition: 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)',
            willChange: 'transform',
          }}>
            {images.map((img, i) => {
              const isActive = i === activeIndex
              const dist     = Math.abs(i - activeIndex)
              return (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  aria-label={`Ver: ${img.alt}`}
                  style={{
                    flexShrink: 0,
                    width: `${SLOT_W}px`,
                    height: isActive ? '78%' : '62%',
                    border: `1px solid ${isActive ? 'var(--terracota)' : 'var(--border)'}`,
                    opacity: dist === 0 ? 1 : dist === 1 ? 0.42 : 0.18,
                    transform: `scale(${isActive ? 1 : 0.91})`,
                    transition: 'all 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    outline: 'none',
                    background: 'var(--bg-deep)',
                  }}
                >
                  <img
                    src={img.src} alt={img.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                    draggable={false} loading="lazy"
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Footer */}
        <div style={{
          flexShrink: 0,
          padding: '0.75rem clamp(1.5rem,5vw,5rem) 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          {/* Progress bar */}
          <div style={{ height: '1px', background: 'var(--border)', position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'var(--terracota)',
              transformOrigin: 'left',
              transform: `scaleX(${progress})`,
              transition: 'transform 0.3s ease',
            }} />
          </div>

          {/* Dots + hint */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              {images.map((_, i) => (
                <div key={i} style={{
                  height: '3px', borderRadius: '2px',
                  width: i === activeIndex ? '18px' : '5px',
                  background: i === activeIndex ? 'var(--terracota)' : 'var(--border)',
                  transition: 'all 0.35s ease',
                }} />
              ))}
            </div>

            {hint && activeIndex === 0 && (
              <div className="flex items-center gap-1.5" style={{ color: 'var(--text-muted)', animation: 'fadeUp 0.6s ease' }}>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  Role para avançar
                </span>
                <ArrowDown size={11} strokeWidth={2} />
              </div>
            )}

            {activeIndex > 0 && activeIndex < images.length - 1 && (
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                {images[activeIndex]?.alt}
              </span>
            )}

            {activeIndex === images.length - 1 && (
              <div className="flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                  Continue rolando
                </span>
                <ArrowDown size={11} strokeWidth={2} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Lightbox ─────────────────────────────────────────── */}
      {lightbox !== null && (
        <div
          style={{ position: 'fixed', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', background: 'rgba(5,5,9,0.96)' }}
          onClick={() => setLightbox(null)}
        >
          <button onClick={() => setLightbox(null)}
            style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', background: 'transparent', cursor: 'pointer', color: 'var(--text-primary)' }}
            aria-label="Fechar">
            <X size={16} strokeWidth={1.5} />
          </button>

          <button onClick={e => { e.stopPropagation(); setLightbox(i => (i - 1 + images.length) % images.length) }}
            style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', background: 'transparent', cursor: 'pointer', color: 'var(--text-primary)' }}
            aria-label="Anterior">
            <ChevronLeft size={18} strokeWidth={1.5} />
          </button>

          <img src={images[lightbox].src} alt={images[lightbox].alt}
            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
            onClick={e => e.stopPropagation()} draggable={false} />

          <button onClick={e => { e.stopPropagation(); setLightbox(i => (i + 1) % images.length) }}
            style={{ position: 'absolute', right: '1.25rem', top: '50%', transform: 'translateY(-50%)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', background: 'transparent', cursor: 'pointer', color: 'var(--text-primary)' }}
            aria-label="Próxima">
            <ChevronRight size={18} strokeWidth={1.5} />
          </button>

          <div style={{ position: 'absolute', bottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', color: 'var(--text-muted)' }}>{lightbox + 1} / {images.length}</span>
          </div>
        </div>
      )}
    </>
  )
}
