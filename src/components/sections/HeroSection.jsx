import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AfroPattern from '../ui/AfroPattern'
import FloatingComb from '../ui/FloatingComb'
import AdinkraFloat from '../ui/AdinkraFloat'
 
const EASE = [0.16, 1, 0.3, 1]

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

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
      {/* ── Full-bleed background photo com parallax ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            scale: 1.12,
            y: photoY,
          }}
        >
          <img
            src="/media/photos/hero-grupo.jpg"
            alt=""
            aria-hidden
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 30%',
              opacity: 0.42,
              filter: 'sepia(8%) contrast(1.05) brightness(0.82) saturate(0.78)',
            }}
          />
        </motion.div>
        {/* Sem vinheta — fundo limpo */}
      </div>

      {/* ── Grid: título + lide ── */}
      <div
        className="w-full"
        style={{
          flex: 1,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Texto editorial alinhado à esquerda */}
        <div
          className="flex flex-col justify-end px-6 md:px-12 lg:px-20"
          style={{ flex: 1, paddingTop: '7rem', paddingBottom: '3rem' }}
        >
          {/* Eyebrow */}
          <motion.p
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: '0.58rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1.5rem',
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
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
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
            style={{ maxWidth: '620px', marginBottom: '3rem' }}
            initial={{ opacity: 0, y: 16 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          >
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                lineHeight: 1.72,
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}
            >
              Após séculos de invisibilidade, a profissão de trancista começa a ganhar
              o reconhecimento que sempre mereceu. Entre agulhas, linhas e cabelos crespos,
              mulheres negras constroem identidade, renda e resistência com as próprias mãos.
            </p>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                lineHeight: 1.72,
                color: 'var(--text-muted)',
              }}
            >
              Esta reportagem documenta a história de uma arte ancestral que sobreviveu
              à opressão — e hoje disputa espaço num mercado bilionário.
            </p>
          </motion.div>

          {/* Meta */}
          <motion.div
            className="flex items-center gap-8 flex-wrap"
            style={{ marginBottom: '4rem' }}
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

          {/* Scroll hint */}
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
