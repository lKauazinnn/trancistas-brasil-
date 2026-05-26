import { useRef, useEffect, useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import SectionLabel from '../ui/SectionLabel'

const LERP = 0.07

// 11 cards — bento 4 colunas no desktop
// Desktop: gridColumn / gridRow com CSS grid explícito
// Mobile: ordem natural 2 colunas
const CARDS = [
  {
    src: '/media/photos/_MG_0353.jpg',
    label: 'Arte Ancestral',
    sub: 'Box Braids',
    col: '1 / 3', row: '1 / 3',      // 2×2 — big top-left
    depth: 0.018,
    pos: 'center top',
    accent: 'var(--ouro)',
  },
  {
    src: '/media/photos/Cópia de IMG_3732.jpg',
    label: 'Identidade',
    sub: 'Tranças Nagô',
    col: '3 / 4', row: '1 / 2',      // 1×1
    depth: 0.030,
    pos: 'center',
    accent: 'var(--terracota)',
  },
  {
    src: '/media/photos/_MG_0317.jpg',
    label: 'Potência',
    sub: 'Kanekalon',
    col: '4 / 5', row: '1 / 3',      // 1×2 — tall right
    depth: 0.022,
    pos: 'center top',
    accent: 'var(--verde)',
  },
  {
    src: '/media/photos/_MG_0346.jpg',
    label: 'Resistência',
    sub: 'Afro Raiz',
    col: '3 / 4', row: '2 / 3',      // 1×1
    depth: 0.036,
    pos: 'center',
    accent: 'var(--ouro)',
  },
  {
    src: '/media/photos/IMG_0592.jpg',
    label: 'Raízes',
    sub: 'Cabelo Livre',
    col: '1 / 2', row: '3 / 4',      // 1×1
    depth: 0.014,
    pos: 'center top',
    accent: 'var(--terracota)',
  },
  {
    src: '/media/photos/IMG_0727.jpg',
    label: 'Cultura Viva',
    sub: 'Tranças com Miçangas',
    col: '2 / 4', row: '3 / 4',      // 2×1 — wide center
    depth: 0.026,
    pos: 'center 40%',
    accent: 'var(--ouro)',
  },
  {
    src: '/media/photos/_MG_0527.jpg',
    label: 'Beleza Plural',
    sub: 'Fulani Braids',
    col: '4 / 5', row: '3 / 4',      // 1×1
    depth: 0.032,
    pos: 'center top',
    accent: 'var(--terracota)',
  },
  {
    src: '/media/photos/IMG_0558.jpg',
    label: 'Ancestralidade',
    sub: 'Trança Raiz',
    col: '1 / 3', row: '4 / 6',      // 2×2 — big bottom-left
    depth: 0.016,
    pos: 'center 30%',
    accent: 'var(--verde)',
  },
  {
    src: '/media/photos/_MG_0424.jpg',
    label: 'Movimento',
    sub: 'Twist Natural',
    col: '3 / 4', row: '4 / 5',      // 1×1
    depth: 0.028,
    pos: 'center',
    accent: 'var(--ouro)',
  },
  {
    src: '/media/photos/Cópia de IMG_3844.jpg',
    label: 'Orgulho',
    sub: 'Box Braids Longas',
    col: '4 / 5', row: '4 / 6',      // 1×2 — tall bottom-right
    depth: 0.020,
    pos: 'top center',
    accent: 'var(--terracota)',
  },
  {
    src: '/media/photos/_MG_0370.jpg',
    label: 'Liberdade',
    sub: 'Afro Crespo',
    col: '3 / 4', row: '5 / 6',      // 1×1
    depth: 0.024,
    pos: 'center',
    accent: 'var(--verde)',
  },
]

export default function MosaicoAfroPuzzle() {
  const containerRef = useRef(null)
  const cardRefs    = useRef([])
  const mouse       = useRef({ x: 0, y: 0 })
  const curr        = useRef({ x: 0, y: 0 })
  const raf         = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const tick = useCallback(() => {
    curr.current.x += (mouse.current.x - curr.current.x) * LERP
    curr.current.y += (mouse.current.y - curr.current.y) * LERP

    cardRefs.current.forEach((el, i) => {
      if (!el) return
      const d  = CARDS[i].depth
      const tx = curr.current.x * d * 72
      const ty = curr.current.y * d * 72
      el.style.transform = `translate(${tx}px, ${ty}px)`
    })

    raf.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    const box = containerRef.current
    if (!box) return

    const onMove = (e) => {
      const r = box.getBoundingClientRect()
      mouse.current.x = (e.clientX - r.left)  / r.width  - 0.5
      mouse.current.y = (e.clientY - r.top)   / r.height - 0.5
    }
    const onLeave = () => { mouse.current.x = 0; mouse.current.y = 0 }

    box.addEventListener('mousemove', onMove, { passive: true })
    box.addEventListener('mouseleave', onLeave)
    raf.current = requestAnimationFrame(tick)

    return () => {
      box.removeEventListener('mousemove', onMove)
      box.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf.current)
    }
  }, [tick])

  return (
    <section
      id="mosaico"
      style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="section-padding max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <ScrollReveal variant="fade-up">
          <SectionLabel number="★" text="Mosaico Afro" />
        </ScrollReveal>

        <ClipReveal delay={60}>
          <h2
            className="font-display font-black uppercase leading-none mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--text-primary)' }}
          >
            A BELEZA<br />
            <span style={{ color: 'var(--ouro)' }}>PLURAL</span>
          </h2>
        </ClipReveal>

        <ScrollReveal variant="fade-up" delay={120}>
          <p
            style={{
              maxWidth: '480px',
              color: 'var(--text-muted)',
              marginBottom: '3rem',
              lineHeight: 1.7,
              fontSize: '0.95rem',
              fontFamily: "'Barlow', sans-serif",
            }}
          >
            Cada trança é uma obra única. Cada rosto, uma história de
            ancestralidade e resistência — mova o mouse e sinta a profundidade.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div
          ref={containerRef}
          style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
            gridAutoRows: isDesktop ? '200px' : 'min(160px, 40vw)',
            gap: '8px',
          }}
        >
          {CARDS.map((card, i) => {
            const gridStyle = isDesktop
              ? { gridColumn: card.col, gridRow: card.row }
              : {}          // mobile: auto-placement 2 colunas

            return (
              <div
                key={i}
                ref={el => { cardRefs.current[i] = el }}
                style={{
                  ...gridStyle,
                  willChange: 'transform',
                  position: 'relative',
                }}
              >
                <PuzzleCard card={card} index={i} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Card individual ────────────────────────────────────────────────────────

function PuzzleCard({ card, index }) {
  return (
    <motion.div
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        minHeight: '160px',
        cursor: 'crosshair',
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
        delay: (index % 4) * 0.08,
      }}
      whileHover="hover"
    >
      {/* Foto */}
      <motion.img
        src={card.src}
        alt={`${card.label} — ${card.sub}`}
        draggable={false}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: card.pos,
          display: 'block',
          filter: 'sepia(8%) contrast(1.06) brightness(1.0) saturate(0.9)',
        }}
        variants={{
          hover: {
            scale: 1.07,
            filter: 'sepia(0%) contrast(1.08) brightness(1.05) saturate(1.05)',
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          },
        }}
      />

      {/* Tint sutil — cor cultural */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `${card.accent}10`,
          pointerEvents: 'none',
        }}
      />

      {/* Overlay com label — aparece no hover */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: 'clamp(0.75rem, 2vw, 1rem)',
          background: 'linear-gradient(to top, rgba(5,5,9,0.88) 0%, rgba(5,5,9,0.3) 50%, transparent 100%)',
        }}
        variants={{
          hover: { opacity: 1, transition: { duration: 0.28 } },
        }}
        initial={{ opacity: 0 }}
      >
        <motion.span
          style={{
            display: 'block',
            fontFamily: "'Syne', sans-serif",
            fontSize: '0.52rem',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: card.accent,
            marginBottom: '4px',
          }}
          variants={{
            hover: { y: 0, opacity: 1, transition: { duration: 0.35, delay: 0.05 } },
          }}
          initial={{ y: 6, opacity: 0 }}
        >
          {card.sub}
        </motion.span>
        <motion.span
          style={{
            display: 'block',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(0.8rem, 1.5vw, 1rem)',
            color: '#F5F0E8',
            letterSpacing: '-0.01em',
          }}
          variants={{
            hover: { y: 0, opacity: 1, transition: { duration: 0.35, delay: 0.1 } },
          }}
          initial={{ y: 8, opacity: 0 }}
        >
          {card.label}
        </motion.span>
      </motion.div>

      {/* Barra de acento inferior — desenha no hover */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2.5px',
          background: card.accent,
          transformOrigin: 'left',
        }}
        variants={{
          hover: { scaleX: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
        }}
        initial={{ scaleX: 0 }}
      />

      {/* Contorno fino no canto — detalhe visual sutil */}
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '20px',
          height: '20px',
          borderTop: `1.5px solid ${card.accent}`,
          borderRight: `1.5px solid ${card.accent}`,
          pointerEvents: 'none',
        }}
        variants={{
          hover: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        }}
        initial={{ opacity: 0, scale: 0.5 }}
      />
    </motion.div>
  )
}
