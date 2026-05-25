import { useEffect, useRef, useState } from 'react'
import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import InteractiveFaces from '../ui/InteractiveFaces'
import AfroPattern from '../ui/AfroPattern'
import FloatingComb from '../ui/FloatingComb'

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const h = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  const parallax = scrollY * 0.2

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background photo */}
      <div
        style={{
          position: 'absolute', inset: 0,
          transform: `translateY(${parallax}px) scale(1.1)`,
          zIndex: 0,
        }}
      >
        <img
          src="/media/photos/IMG_0558.jpg"
          alt=""
          aria-hidden
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
        />
        {/* Gradient: transparent top → full bg-primary bottom */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 30%, var(--bg-primary) 85%)',
        }} />
      </div>

      {/* Content grid */}
      <div
        style={{
          flex: 1,
          position: 'relative', zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr',
          padding: '0',
        }}
        className="lg:grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_560px]"
      >
        {/* Left: editorial content */}
        <div
          className="flex flex-col justify-end px-6 md:px-12 lg:px-20"
          style={{ paddingTop: '8rem', paddingBottom: '3rem' }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '2rem',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'none' : 'translateY(12px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            {/* Animated accent line */}
            <span style={{
              display: 'block',
              width: '40px', height: '1px',
              background: 'var(--terracota)',
              transformOrigin: 'left',
              transform: loaded ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.3s',
            }} />
            <span className="label-tag">Reportagem Especial · PI 2025</span>
          </div>

          {/* Main title — ClipReveal */}
          <div style={{ marginBottom: '1.5rem' }}>
            <ClipReveal delay={0}>
              <h1
                className="font-display font-black uppercase"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.01em',
                  color: 'var(--text-primary)',
                  whiteSpace: 'nowrap',
                }}
              >
                <span className="wood-text">TRAN</span>CISTAS
              </h1>
            </ClipReveal>
          </div>

          {/* Thin rule — animated */}
          <div
            style={{
              height: '1px', background: 'var(--border)', marginBottom: '1.5rem', maxWidth: '480px',
              transformOrigin: 'left',
              transform: loaded ? 'scaleX(1)' : 'scaleX(0)',
              transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s',
            }}
          />

          {/* Lide */}
          <ScrollReveal variant="fade-up" delay={280}>
            <div style={{ maxWidth: '520px' }}>
              <p
                className="font-body"
                style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', lineHeight: 1.7, color: 'var(--text-primary)', marginBottom: '1rem' }}
              >
                Após séculos de invisibilidade, a profissão de trancista começa a ganhar
                o reconhecimento que sempre mereceu. Entre agulhas, linhas e cabelos crespos,
                mulheres negras constroem identidade, renda e resistência com as próprias mãos.
              </p>
              <p
                className="font-body"
                style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', lineHeight: 1.7, color: 'var(--text-muted)' }}
              >
                Esta reportagem documenta a história de uma arte ancestral que sobreviveu
                à opressão — e hoje disputa espaço num mercado bilionário.
              </p>
            </div>
          </ScrollReveal>

          {/* Meta row */}
          <ScrollReveal variant="fade-up" delay={340}>
            <div className="flex items-center gap-6 mt-8 flex-wrap">
              <div>
                <p style={{ fontSize: '0.6rem', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>Categorias</p>
                <p style={{ fontSize: '0.8rem', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>Cultura · Mercado · Saúde</p>
              </div>
              <div style={{ width: '1px', height: '32px', background: 'var(--border)' }} />
              <div>
                <p style={{ fontSize: '0.6rem', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '2px' }}>Tempo de leitura</p>
                <p style={{ fontSize: '0.8rem', fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>~12 minutos</p>
              </div>
              <div style={{ width: '1px', height: '32px', background: 'var(--border)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--terracota)', animation: 'pulseRing 1.8s ease-out infinite' }} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Ao vivo</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Scroll hint */}
          <ScrollReveal variant="fade-up" delay={420}>
            <div className="flex items-center gap-3 mt-12" style={{ color: 'var(--text-muted)' }}>
              <div
                className="flex items-center justify-center"
                style={{
                  width: '32px', height: '44px',
                  border: '1.5px solid var(--border)',
                  borderRadius: '16px',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '4px', height: '8px',
                    borderRadius: '2px',
                    background: 'var(--terracota)',
                    animation: 'fadeUp 1.4s ease-in-out infinite',
                  }}
                />
              </div>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.2em', fontFamily: "'Space Grotesk', sans-serif", textTransform: 'uppercase' }}>
                Role para ler
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Interactive face parallax — hidden on mobile */}
        <div className="hidden lg:block" style={{ position: 'relative' }}>
          {/* Left gradient fade so photos blend into editorial content */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none',
            background: 'linear-gradient(to right, var(--bg-primary) 0%, transparent 20%)',
          }} />
          {/* Top/bottom fade */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 5, pointerEvents: 'none',
            background: 'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 12%, transparent 80%, var(--bg-primary) 100%)',
          }} />
          <div style={{ position: 'absolute', inset: 0, padding: '2rem 2rem 2rem 0' }}>
            <InteractiveFaces />
          </div>
        </div>
      </div>

      {/* Kuba pattern overlay on left content — very subtle */}
      <AfroPattern variant="kuba" color="#C0522A" opacity={0.04} />

      {/* Floating decorative comb — desktop only */}
      <div className="hidden lg:block" style={{
        position: 'absolute',
        bottom: '7rem',
        left: '18%',
        zIndex: 1,
        pointerEvents: 'none',
        opacity: 0.22,
        transform: 'rotate(-18deg)',
      }}>
        <FloatingComb size={72} />
      </div>

      {/* Bottom info strip */}
      <div
        style={{
          position: 'relative', zIndex: 1,
          borderTop: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 24px',
        }}
        className="md:px-12 lg:px-20"
      >
        <p style={{ fontSize: '0.65rem', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          PI — Publicação Independente
        </p>
        <p style={{ fontSize: '0.65rem', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.12em', color: 'var(--text-muted)' }}>
          Arte · Resistência · Identidade
        </p>
      </div>
    </section>
  )
}
