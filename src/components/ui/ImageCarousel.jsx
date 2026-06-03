import { useRef, useState, useEffect } from 'react'

export default function ImageCarousel({ images }) {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [lightbox, setLightbox] = useState(null)

  const scrollToIndex = (idx) => {
    const track = trackRef.current
    if (!track) return
    const item = track.children[idx]
    if (!item) return
    item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    setActive(idx)
  }

  // Drag scroll
  const onMouseDown = (e) => {
    setDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }
  const onMouseMove = (e) => {
    if (!dragging) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    trackRef.current.scrollLeft = scrollLeft - walk
  }
  const onMouseUp = () => setDragging(false)

  // Touch scroll
  const onTouchStart = (e) => {
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }
  const onTouchMove = (e) => {
    const x = e.touches[0].pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  // Update active on scroll
  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    const itemWidth = track.children[0]?.offsetWidth || 1
    const idx = Math.round(track.scrollLeft / itemWidth)
    setActive(Math.min(idx, images.length - 1))
  }

  // Lightbox keyboard nav
  useEffect(() => {
    if (lightbox === null) return
    const handler = (e) => {
      if (e.key === 'Escape') setLightbox(null)
      if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, images.length])

  return (
    <>
      {/* Track */}
      <div className="relative">
        <div
          ref={trackRef}
          className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none pb-4"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
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
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '520px',
                  objectFit: 'contain',
                  display: 'block',
                }}
                className="hover:scale-[1.02] transition-transform duration-700"
                draggable={false}
                loading="lazy"
              />
            </button>
          ))}
          {/* Trailing spacer */}
          <div className="flex-shrink-0 w-6 md:w-12" />
        </div>

        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-4 w-8 bg-gradient-to-r from-void to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-4 w-8 bg-gradient-to-l from-void to-transparent pointer-events-none" />
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 justify-center mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`
              h-[3px] rounded-full transition-all duration-300 cursor-pointer
              ${i === active ? 'w-6 bg-terracota' : 'w-3 bg-dim/60 hover:bg-dim'}
            `}
            aria-label={`Ir para imagem ${i + 1}`}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-void/95 z-50 flex items-center justify-center p-4 md:p-12"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 border border-dim/40 flex items-center
                       justify-center hover:border-terracota transition-colors cursor-pointer"
            onClick={() => setLightbox(null)}
            aria-label="Fechar"
          >
            <svg className="w-5 h-5 stroke-ink fill-none" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 w-10 h-10 border border-dim/40 flex items-center
                       justify-center hover:border-terracota transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + images.length) % images.length) }}
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

          {/* Next */}
          <button
            className="absolute right-4 w-10 h-10 border border-dim/40 flex items-center
                       justify-center hover:border-terracota transition-colors cursor-pointer"
            onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % images.length) }}
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
