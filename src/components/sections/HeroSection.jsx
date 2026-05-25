import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import InteractiveFaces from '../ui/InteractiveFaces'
import AfroPattern from '../ui/AfroPattern'
import FloatingComb from '../ui/FloatingComb'
import AdinkraFloat from '../ui/AdinkraFloat'
import CulturaParticles from '../ui/CulturaParticles'

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
            src="/media/photos/IMG_0558.jpg"
            alt=""
            aria-hidden
            draggable={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              opacity: 0.32,
              filter: 'sepia(10%) contrast(1.08) brightness(0.88) saturate(0.72)',
            }}
          />
        </motion.div>
        {/* Vinheta: escurece bordas, desfaz embaixo para o bg */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(5,5,9,0.52) 0%, transparent 30%, var(--bg-primary) 90%)',
          }}
        />
      </div>

      {/* ── Barra editorial topo ── */}
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
            letterSpacing: '0.28em',
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
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}
          >
            PI · 2025
          </span>
        </div>
      </div>

      {/* ── Título TRANCISTAS — centrado, cor sólida, massivo ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: 'clamp(3rem, 6vw, 5rem) 1.5rem 1rem',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '1.4rem',
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={loaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Cultura&nbsp;&nbsp;·&nbsp;&nbsp;Arte&nbsp;&nbsp;·&nbsp;&nbsp;Resistência&nbsp;&nbsp;·&nbsp;&nbsp;Identidade
        </motion.p>

        {/* TRANCISTAS — uma palavra, cor única, sem gradiente */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            style={{
              fontFamily: "'Syne', 'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(3.2rem, 14vw, 18rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: 'var(--ouro)',
              textAlign: 'center',
            }}
            initial={{ y: '108%' }}
            animate={loaded ? { y: 0 } : {}}
            transition={{ duration: 1.05, ease: EASE, delay: 0.1 }}
          >
            TRANCISTAS
          </motion.h1>
        </div>

        {/* Linha decorativa centrada */}
        <motion.div
          style={{
            width: '56px',
            height: '1px',
            background: 'var(--terracota)',
            margin: '1.8rem auto 0',
            transformOrigin: 'center',
          }}
          initial={{ scaleX: 0 }}
          animate={loaded ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.42 }}
        />
      </div>

      {/* ── Grid: lide esquerda / faces direita ── */}
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
        {/* Esquerda — texto editorial */}
        <div
          className="flex flex-col justify-end px-6 md:px-12 lg:px-20"
          style={{ paddingTop: '1.5rem', paddingBottom: '3rem' }}
        >
          {/* Lide */}
          <motion.div
            style={{ maxWidth: '520px', marginBottom: '2rem' }}
            initial={{ opacity: 0, y: 16 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.5 }}
          >
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
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
                fontSize: 'clamp(0.8rem, 1.2vw, 0.92rem)',
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
            className="flex items-center gap-6 flex-wrap"
            style={{ marginBottom: '2.5rem' }}
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

        {/* Direita — fotos interativas (desktop) */}
        <div className="hidden lg:block" style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 5,
              pointerEvents: 'none',
              background: 'linear-gradient(to right, var(--bg-primary) 0%, transparent 22%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 5,
              pointerEvents: 'none',
              background: 'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 14%, transparent 80%, var(--bg-primary) 100%)',
            }}
          />
          <div style={{ position: 'absolute', inset: 0, padding: '2rem 2rem 2rem 0' }}>
            <InteractiveFaces />
          </div>
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
      <CulturaParticles count={8} zIndex={0} />

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
