import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AfroPattern from '../ui/AfroPattern'
import FloatingComb from '../ui/FloatingComb'
import AdinkraFloat from '../ui/AdinkraFloat'
 
const EASE = [0.16, 1, 0.3, 1]

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '2.5%'])

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const updateTheme = () => setIsDark(root.classList.contains('dark'))
    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(root, { attributes: true, attributeFilter: ['class'] })

    return () => observer.disconnect()
  }, [])

  const panelBg = isDark ? 'rgba(8,8,16,0.6)' : 'rgba(255,255,255,0.72)'
  const imageFrameBg = isDark ? '#0D0D15' : '#ECE6DC'
  const imageOverlay = isDark
    ? 'linear-gradient(180deg, rgba(5,5,10,0.2) 0%, rgba(5,5,10,0.05) 55%, rgba(5,5,10,0.28) 100%)'
    : 'linear-gradient(180deg, rgba(250,246,239,0.14) 0%, rgba(250,246,239,0.05) 55%, rgba(250,246,239,0.2) 100%)'

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
      <div
        className="section-padding"
        style={{
          position: 'relative',
          zIndex: 1,
          paddingTop: '6.5rem',
          paddingBottom: '2.75rem',
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
          style={{ maxWidth: '1280px', margin: '0 auto' }}
        >
          <article
            className="lg:col-span-6"
            style={{
              border: '1px solid var(--border)',
              borderRadius: '22px',
              background: panelBg,
              backdropFilter: 'blur(6px)',
              boxShadow: isDark
                ? '0 18px 38px rgba(0,0,0,0.35)'
                : '0 14px 32px rgba(20,20,20,0.08)',
              padding: 'clamp(1.1rem, 2.1vw, 2rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: 'clamp(460px, 66vh, 760px)',
            }}
          >
          {/* Eyebrow */}
          <motion.p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '0.58rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1.2rem',
            }}
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Reportagem Especial · PI 2025
          </motion.p>

          {/* TRANCISTAS — uma linha, tamanho moderado */}
          <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
            <motion.h1
              style={{
                display: 'block',
                fontFamily: "'Syne', 'Barlow Condensed', sans-serif",
                fontWeight: 800,
                  fontSize: 'clamp(2.35rem, 5.8vw, 5rem)',
                  lineHeight: 0.92,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                maxWidth: '100%',
                  whiteSpace: 'normal',
                  overflowWrap: 'normal',
                  wordBreak: 'keep-all',
                  hyphens: 'none',
              }}
              initial={{ y: '108%' }}
              animate={loaded ? { y: 0 } : {}}
              transition={{ duration: 0.95, ease: EASE, delay: 0.1 }}
            >
              TRANCISTAS
            </motion.h1>
          </div>

          {/* Linha decorativa */}
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
            transition={{ duration: 0.8, ease: EASE, delay: 0.38 }}
          />
          {/* Lide */}
          <motion.div
            style={{ maxWidth: '100%', marginBottom: '1.9rem' }}
            initial={{ opacity: 0, y: 16 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          >
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 'clamp(0.96rem, 1.35vw, 1.08rem)',
                lineHeight: 1.68,
                color: 'var(--text-primary)',
                maxWidth: '52ch',
              }}
            >
              Após séculos de invisibilidade, a profissão de trancista começa a ganhar o
              reconhecimento que sempre mereceu. Entre agulhas, linhas e cabelos crespos,
              mulheres negras constroem identidade, renda e resistência com as próprias mãos.
              Esta reportagem documenta a história de uma arte ancestral que sobreviveu à
              opressão, e hoje disputa espaço num mercado bilionário.
            </p>
          </motion.div>

          {/* Meta */}
          <motion.div
            className="flex items-center gap-8 flex-wrap"
            style={{ marginBottom: '0.9rem', gap: '1rem' }}
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.62 }}
          >
            {[
              { label: 'Categorias', value: 'Cultura · Mercado · Saúde' },
              { label: 'Leitura',    value: '~12 minutos' },
            ].map((item, i) => (
              <div key={i}>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '3px' }}>
                  {item.label}
                </p>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                  {item.value}
                </p>
              </div>
            ))}
            <div style={{ width: '1px', height: '28px', background: 'var(--border)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--terracota)', animation: 'pulseRing 1.8s ease-out infinite' }} />
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Ao vivo
              </span>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            style={{ color: 'var(--text-muted)' }}
            initial={{ opacity: 0 }}
            animate={loaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.76 }}
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
          </article>

          <motion.article
            className="lg:col-span-6"
            style={{
              position: 'relative',
              borderRadius: '22px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              background: imageFrameBg,
              boxShadow: isDark
                ? '0 20px 44px rgba(0,0,0,0.42)'
                : '0 16px 36px rgba(20,20,20,0.1)',
              minHeight: 'clamp(460px, 66vh, 760px)',
            }}
            initial={{ opacity: 0, y: 26 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          >
            <motion.img
              src="/media/photos/hero-grupo.jpg"
              alt="Grupo de trancistas"
              draggable={false}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center 48%',
                y: photoY,
                filter: isDark
                  ? 'sepia(6%) contrast(1.08) brightness(0.77) saturate(0.84)'
                  : 'sepia(4%) contrast(1.05) brightness(0.95) saturate(0.95)',
              }}
            />
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background: imageOverlay,
              }}
            />
          </motion.article>
        </div>
      </div>

      {/* ── Marquee inferior ── */}
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
            animation: 'ticker 26s linear infinite',
          }}
        >
          {[0, 1, 2, 3].map(i => (
            <span
              key={i}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '0.55rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                padding: '0 3rem',
                whiteSpace: 'nowrap',
              }}
            >
              Arte&nbsp;&nbsp;·&nbsp;&nbsp;Resistência&nbsp;&nbsp;·&nbsp;&nbsp;Identidade&nbsp;&nbsp;·&nbsp;&nbsp;Ancestralidade&nbsp;&nbsp;·&nbsp;&nbsp;Cultura&nbsp;&nbsp;·&nbsp;&nbsp;Mercado&nbsp;&nbsp;·&nbsp;&nbsp;Beleza
            </span>
          ))}
        </div>
      </div>

      {/* ── Elementos decorativos ── */}
      <AfroPattern variant="kuba" color="#C0522A" opacity={0.025} />
      <AdinkraFloat count={5} color="var(--ouro)" zIndex={0} />

      <div
        className="hidden lg:block"
        style={{
          position: 'absolute',
          bottom: '5.5rem',
          left: '17%',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.14,
          transform: 'rotate(-18deg)',
        }}
      >
        <FloatingComb size={64} />
      </div>
    </section>
  )
}
