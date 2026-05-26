import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import SectionLabel from '../ui/SectionLabel'
import VideoPlayer from '../ui/VideoPlayer'
import TickerBand from '../ui/TickerBand'
import StarDivider from '../ui/StarDivider'
import ParallaxSection from '../ui/ParallaxSection'

export default function AprendizadoAncestral() {
  return (
    <section id="aprendizado" style={{ background: 'var(--bg-primary)' }}>
      <TickerBand />

      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <ScrollReveal variant="fade-right">
              <SectionLabel number={1} text="O Aprendizado Ancestral" />
            </ScrollReveal>

            <ClipReveal delay={60}>
              <h2
                className="font-display font-black uppercase leading-none mb-8"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', color: 'var(--text-primary)' }}
              >
                A ARTE<br />
                <span className="wood-text">PASSOU</span><br />
                DE MÃO EM MÃO
              </h2>
            </ClipReveal>

            <ScrollReveal variant="fade-up" delay={180}>
              <div className="space-y-5 max-w-lg">
                <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-primary)' }}>
                  Não existe escola formal. Não existe diploma emoldurado na parede. O conhecimento
                  das trancistas chegou até o Brasil nas mãos e na memória de mulheres africanas,
                  transmitido de avó para neta, de mãe para filha.
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
                  Kamyla Santos aprendeu aos 9 anos, sentada entre as pernas da avó Dona Maria.
                  Uma corrente humana de conhecimento que atravessa séculos, oceanos e toda a
                  violência da colonização.
                </p>

                {/* Pull quote inline — estilo Metrópoles */}
                <blockquote
                  style={{
                    margin: '2rem 0',
                    paddingLeft: '1.25rem',
                    borderLeft: '3px solid var(--terracota)',
                  }}
                >
                  <p className="pull-quote" style={{ color: 'var(--text-primary)' }}>
                    "Minha avó dizia que quando ela trança um cabelo, ela está rezando."
                  </p>
                  <footer style={{ marginTop: '0.75rem' }}>
                    <cite style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', fontStyle: 'normal', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                      — Kamyla Santos, trancista
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={240}>
              <StarDivider className="my-8" />
              <div className="flex gap-8 flex-wrap">
                <div style={{ borderLeft: '2px solid var(--terracota)', paddingLeft: '1rem' }}>
                  <p className="font-display font-black text-3xl" style={{ color: 'var(--terracota)' }}>+400</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>
                    anos de tradição oral
                  </p>
                </div>
                <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '1rem' }}>
                  <p className="font-display font-black text-3xl" style={{ color: 'var(--text-primary)' }}>3 ger.</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>
                    por família em média
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Video */}
          <div className="flex flex-col gap-5">
            <ScrollReveal variant="fade-left" delay={120}>
              <VideoPlayer
                src="/media/videos/Vídeo-entrevista_ trançando com Kamyla.mov"
                title="Trançando com Kamyla"
                className="aspect-video"
              />
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={200}>
              <div
                style={{
                  border: '1px solid var(--border)',
                  padding: '1.25rem 1.5rem',
                  background: 'var(--bg-surface)',
                }}
              >
                <p className="label-tag mb-2">Sobre o vídeo</p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  Em "Trançando com Kamyla", acompanhamos uma tarde de trabalho e as memórias
                  que cada trança carrega — dos dedos ao coração.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Parallax divider */}
      <ParallaxSection
        src="/media/photos/_MG_0462.jpg"
        alt="Trançando"
        height="50vh"
        intensity={0.2}
        overlay={0.55}
        objectPosition="center 40%"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1rem' }}>
          <p
            className="font-display font-black uppercase"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', color: '#FAFAF5', letterSpacing: '0.06em', textAlign: 'center' }}
          >
            Arte &amp; Memória
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '40px', height: '1px', background: 'var(--terracota)' }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.22em', textTransform: 'uppercase' }}>
              Piauí · 2025
            </span>
            <span style={{ width: '40px', height: '1px', background: 'var(--terracota)' }} />
          </div>
        </div>
      </ParallaxSection>

    </section>
  )
}
