import { useRef, useState, useEffect, useCallback } from 'react'
import { ArrowDown } from 'lucide-react'

const DEBOUNCE_MS = 480

export default function ImageCarousel({ images }) {
  const containerRef  = useRef(null)
  const trackRef      = useRef(null)
  const activeRef     = useRef(0)
  const lockedRef     = useRef(false)
  const exitingRef    = useRef(false)
  const lastWheelRef  = useRef(0)
  const touchStartRef = useRef({ x: 0, y: 0 })
  const dragRef       = useRef({ dragging: false, startX: 0, scrollLeft: 0 })

  const [active,   setActive]   = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const [hint,     setHint]     = useState(true)

  // ── Scroll to a specific index ──────────────────────────────────
  const scrollToIndex = useCallback((idx) => {
    const clamped = Math.max(0, Math.min(images.length - 1, idx))
    activeRef.current = clamped
    setActive(clamped)
    if (clamped > 0) setHint(false)
    const track = trackRef.current
    if (!track) return
    const item = track.children[clamped]
    if (item) item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [images.length])

  // ── Lock scroll when carousel is visible ───────────────────────
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.65) {
          if (!exitingRef.current) lockedRef.current = true
        } else {
          lockedRef.current = false
        }
      },
      { threshold: [0, 0.4, 0.65, 1] }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // ── Wheel interception ──────────────────────────────────────────
  useEffect(() => {
    const onWheel = (e) => {
      if (!lockedRef.current) return
      const down = e.deltaY > 0
      const up   = e.deltaY < 0

      if (down && activeRef.current >= images.length - 1) {
        lockedRef.current = false
        exitingRef.current = true
        setTimeout(() => { exitingRef.current = false }, 1400)
        return
      }
      if (up && activeRef.current <= 0) return

      e.preventDefault()
      const now = Date.now()
      if (now - lastWheelRef.current < DEBOUNCE_MS) return
      lastWheelRef.current = now

      scrollToIndex(activeRef.current + (down ? 1 : -1))
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [images.length, scrollToIndex])

  // ── Touch swipe ─────────────────────────────────────────────────
  useEffect(() => {
    const onStart = (e) => {
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
    const onEnd = (e) => {
      if (!lockedRef.current) return
      const dx = touchStartRef.current.x - e.changedTouches[0].clientX
      const dy = touchStartRef.current.y - e.changedTouches[0].clientY
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 35) return
      const dir = Math.abs(dx) >= Math.abs(dy) ? Math.sign(dx) : Math.sign(dy)
      scrollToIndex(activeRef.current + dir)
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend',   onEnd,   { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend',   onEnd)
    }
  }, [scrollToIndex])

  // ── Keyboard ────────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (lightbox !== null) return
      if (!lockedRef.current) return
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); scrollToIndex(activeRef.current + 1) }
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); scrollToIndex(activeRef.current - 1) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, scrollToIndex])

  // ── Lightbox keyboard ───────────────────────────────────────────
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

  // ── Drag (mouse) ────────────────────────────────────────────────
  const onMouseDown = (e) => {
    dragRef.current = { dragging: true, startX: e.pageX - trackRef.current.offsetLeft, scrollLeft: trackRef.current.scrollLeft }
  }
  const onMouseMove = (e) => {
    if (!dragRef.current.dragging) return
    e.preventDefault()
    const x    = e.pageX - trackRef.current.offsetLeft
    const walk = (x - dragRef.current.startX) * 1.5
    trackRef.current.scrollLeft = dragRef.current.scrollLeft - walk
  }
  const onMouseUp = () => { dragRef.current.dragging = false }

  // Sync active from native scroll (arrows / drag)
  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    const itemWidth = track.children[0]?.offsetWidth || 1
    const idx = Math.min(Math.round(track.scrollLeft / itemWidth), images.length - 1)
    activeRef.current = idx
    setActive(idx)
  }

  const progress = active / Math.max(1, images.length - 1)

  return (
    <>
      <div ref={containerRef}>
        {/* Track */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none pb-4"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onScroll={onScroll}
          >
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className={`
                  flex-shrink-0 overflow-hidden
                  w-[80vw] md:w-[400px] lg:w-[440px]
                  border transition-all duration-300 cursor-pointer
                  ${active === i ? 'border-terracota' : 'border-dim/30 hover:border-dim/60'}
                `}
                style={{ background: 'var(--bg-deep)' }}
                aria-label={`Ver imagem: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain', display: 'block' }}
                  className="hover:scale-[1.02] transition-transform duration-700"
                  draggable={false}
                  loading="lazy"
                />
              </button>
            ))}
            <div className="flex-shrink-0 w-6 md:w-12" />
          </div>

          {/* Gradient edges */}
          <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-void to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-void to-transparent pointer-events-none" />
        </div>

        {/* Progress bar */}
        <div style={{ height: '1px', background: 'var(--border)', position: 'relative', overflow: 'hidden', marginBottom: '8px' }}>
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
          <div className="flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-[3px] rounded-full transition-all duration-300 cursor-pointer ${i === active ? 'w-6 bg-terracota' : 'w-3 bg-dim/60 hover:bg-dim'}`}
                aria-label={`Ir para imagem ${i + 1}`}
              />
            ))}
          </div>

          {hint && active === 0 && (
            <div className="flex items-center gap-1.5" style={{ color: 'var(--text-muted)', animation: 'fadeUp 0.6s ease' }}>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Role para avançar
              </span>
              <ArrowDown size={11} strokeWidth={2} />
            </div>
          )}

          {active === images.length - 1 && (
            <div className="flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                Continue rolando
              </span>
              <ArrowDown size={11} strokeWidth={2} />
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-void/95 z-50 flex items-center justify-center p-4 md:p-12"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 border border-dim/40 flex items-center justify-center hover:border-terracota transition-colors cursor-pointer"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <svg className="w-5 h-5 stroke-ink fill-none" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            className="absolute left-4 w-10 h-10 border border-dim/40 flex items-center justify-center hover:border-terracota transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setLightbox(i => (i - 1 + images.length) % images.length) }}
            aria-label="Anterior"
          >
            <svg className="w-5 h-5 stroke-ink fill-none" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-full max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 w-10 h-10 border border-dim/40 flex items-center justify-center hover:border-terracota transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setLightbox(i => (i + 1) % images.length) }}
            aria-label="Próxima"
          >
            <svg className="w-5 h-5 stroke-ink fill-none" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <span className="absolute bottom-6 font-grotesk text-xs text-muted">
            {lightbox + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  )
}
