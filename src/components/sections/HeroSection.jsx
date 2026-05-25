import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import InteractiveFaces from '../ui/InteractiveFaces'
import AfroPattern from '../ui/AfroPattern'
import FloatingComb from '../ui/FloatingComb'
import AdinkraFloat from '../ui/AdinkraFloat'
import CulturaParticles from '../ui/CulturaParticles'

const EASE_OUT = [0.16, 1, 0.3, 1]

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Full-bleed background photo ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            scale: 1.1,
            y: photoY,
          }}
        >
          <img
            src="/media/photos/IMG_0558.jpg"
            alt=""
            aria-hidden
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              opacity: 0.38,
              filter: 'sepia(12%) contrast(1.06) brightness(0.92) saturate(0.82)',
            }}
            draggable={false}
          />
        </motion.div>
        {/* Gradient: fades out toward bottom so content is readable */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, transparent 30%, var(--bg-primary) 86%)',
          }}
        />
      </div>

      {/* ── Editorial top bar ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.5rem',
        }}
        className="md:px-12 lg:px-20"
      >
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '0.58rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          Reportagem Especial
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--terracota)',
              animation: 'pulseRing 1.8s ease-out infinite',
            }}
          />
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '0.58rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            PI · 2025
          </span>
        </div>
      </div>

      {/* ── Content grid ── */}
      <div
        style={{
          flex: 1,
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr',
        }}
        className="lg:grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_560px]"
      >
        {/* Left — editorial typography */}
        <div
          className="flex flex-col justify-end px-6 md:px-12 lg:px-20"
          style={{ paddingTop: '7rem', paddingBottom: '3rem' }}
        >
          {/* Giant split headline */}
          <div style={{ marginBottom: '2rem' }}>
            {/* TRAN — wood-grain terracota */}
            <div style={{ overflow: 'hidden' }}>
              <motion.span
                className="wood-text"
                style={{
                  display: 'block',
                  fontFamily: "'Syne', 'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(4rem, 15vw, 12rem)',
                  lineHeight: 0.87,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                }}
                initial={{ y: '108%' }}
                animate={loaded ? { y: 0 } : {}}
                transition={{ duration: 0.95, ease: EASE_OUT, delay: 0.05 }}
              >
                TRAN
              </motion.span>
            </div>

            {/* CISTAS — ouro outline / ghost */}
            <div style={{ overflow: 'hidden' }}>
              <motion.span
                style={{
                  display: 'block',
                  fontFamily: "'Syne', 'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: 'clamp(4rem, 15vw, 12rem)',
                  lineHeight: 0.87,
                  letterSpacing: '-0.02em',
                  textTransform: 'uppercase',
                  WebkitTextStroke: '1.5px var(--ouro)',
                  color: 'transparent',
                }}
                initial={{ y: '108%' }}
                animate={loaded ? { y: 0 } : {}}
                transition={{ duration: 0.95, ease: EASE_OUT, delay: 0.13 }}
              >
                CISTAS
              </motion.span>
            </div>
          </div>

          {/* Animated divider */}
          <motion.div
            style={{
              height: '1px',
              background: 'var(--border)',
              marginBottom: '1.5rem',
              maxWidth: '520px',
              transformOrigin: 'left center',
            }}
            initial={{ scaleX: 0 }}
            animate={loaded ? { scaleX: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.38 }}
          />

          {/* Lide */}
          <motion.div
            style={{ maxWidth: '520px', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 16 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.48 }}
          >
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 'clamp(0.92rem, 1.6vw, 1.08rem)',
                lineHeight: 1.72,
                color: 'var(--text-primary)',
                marginBottom: '0.75rem',
              }}
            >
              Após séculos de invisibilidade, a profissão de trancista começa a ganhar
              o reconhecimento que sempre mereceu. Entre agulhas, linhas e cabelos crespos,
              mulheres negras constroem identidade, renda e resistência com as próprias mãos.
            </p>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 'clamp(0.8rem, 1.3vw, 0.92rem)',
                lineHeight: 1.72,
                color: 'var(--text-muted)',
              }}
            >
              Esta reportagem documenta a história de uma arte ancestral que sobreviveu
              à opressão — e hoje disputa espaço num mercado bilionário.
            </p>
          </motion.div>

          {/* Meta row */}
          <motion.div
            className="flex items-center gap-6 flex-wrap"
            style={{ marginBottom: '2.5rem' }}
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '3px' }}>Categorias</p>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.78rem', color: 'var(--text-primary)' }}>Cultura · Mercado · Saúde</p>
            </div>
            <div style={{ width: '1px', height: '28px', background: 'var(--border)' }} />
            <div>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '3px' }}>Leitura</p>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.78rem', color: 'var(--text-primary)' }}>~12 minutos</p>
            </div>
            <div style={{ width: '1px', height: '28px', background: 'var(--border)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--terracota)', animation: 'pulseRing 1.8s ease-out infinite' }} />
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Ao vivo</span>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="flex items-center gap-3"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <div
              style={{
                width: '28px',
                height: '42px',
                border: '1.5px solid var(--border)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '3px',
                  height: '7px',
                  borderRadius: '2px',
                  background: 'var(--ouro)',
                  animation: 'fadeUp 1.4s ease-in-out infinite',
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '0.56rem',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              Role para ler
            </span>
          </motion.div>
        </div>

        {/* Right — Interactive faces (desktop only) */}
        <div className="hidden lg:block" style={{ position: 'relative' }}>
          {/* Left gradient so faces blend into the left column */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 5,
              pointerEvents: 'none',
              background: 'linear-gradient(to right, var(--bg-primary) 0%, transparent 20%)',
            }}
          />
          {/* Top/bottom gradient */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 5,
              pointerEvents: 'none',
              background:
                'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 12%, transparent 80%, var(--bg-primary) 100%)',
            }}
          />
          <div style={{ position: 'absolute', inset: 0, padding: '2rem 2rem 2rem 0' }}>
            <InteractiveFaces />
          </div>
        </div>
      </div>

      {/* ── Bottom marquee strip ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 4,
          borderTop: '1px solid var(--border)',
          overflow: 'hidden',
          padding: '9px 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'ticker 24s linear infinite',
          }}
        >
          {[0, 1, 2, 3].map(i => (
            <span
              key={i}
              style={{
                fontFamily: "'Syne', 'Space Grotesk', sans-serif",
                fontSize: '0.56rem',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                padding: '0 3rem',
                whiteSpace: 'nowrap',
              }}
            >
              Arte&nbsp;&nbsp;·&nbsp;&nbsp;Resistência&nbsp;&nbsp;·&nbsp;&nbsp;Identidade&nbsp;&nbsp;·&nbsp;&nbsp;Ancestralidade&nbsp;&nbsp;·&nbsp;&nbsp;Cultura&nbsp;&nbsp;·&nbsp;&nbsp;Mercado
            </span>
          ))}
        </div>
      </div>

      {/* ── Decorative elements ── */}
      <AfroPattern variant="kuba" color="#C0522A" opacity={0.03} />
      <AdinkraFloat count={6} color="var(--ouro)" zIndex={0} />
      <CulturaParticles count={10} zIndex={0} />

      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          bottom: '5.5rem',
          left: '18%',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.2,
          transform: 'rotate(-18deg)',
        }}
      >
        <FloatingComb size={68} />
      </div>
    </section>
  )
}
