import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import CenteredQuote from '../ui/CenteredQuote'
import AfroPattern from '../ui/AfroPattern'
import SectionLabel from '../ui/SectionLabel'
import AudioPlayer from '../ui/AudioPlayer'
import StarDivider from '../ui/StarDivider'
import BeadDivider from '../ui/BeadDivider'
import AdinkraFloat from '../ui/AdinkraFloat'

const REFERENCES = [
  { name: 'Felicidade por um fio', desc: 'A história de Violet reflete o processo de transição capilar e reconexão com identidade vivido por muitas mulheres negras.' },
  { name: 'Doechii', desc: 'Em performance musical, artista e dançarinas conectadas por tranças simbolizam vínculo entre mulheres negras no Hip-Hop.' },
  { name: 'Marcus Samuel Cunha', desc: 'No clipe Nego, o multiartista do DF relata ter se enxergado bonito pela primeira vez usando tranças.' },
]

export default function AutoestimaIdentidade() {
  return (
    <section id="identidade" style={{ background: 'var(--bg-secondary)' }}>
      <div className="section-padding max-w-7xl mx-auto" style={{ paddingBottom: '2rem' }}>
        <ScrollReveal variant="fade-up">
          <SectionLabel number={2} text="Fios da identidade e autoestima" />
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
          <ClipReveal delay={80}>
            <h2
              className="font-display font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.4rem, 5.4vw, 4.8rem)', color: 'var(--text-primary)' }}
            >
              FIOS DA<br />
              <span className="wood-text-gold">IDENTIDADE</span>
            </h2>
          </ClipReveal>
          <figure style={{ border: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
            <img src="/media/photos/iomagm.jpeg" alt="Performance artística com tranças" style={{ width: '100%', aspectRatio: '16 / 9', objectFit: 'cover' }} />
            <figcaption style={{ padding: '0.7rem', fontSize: '0.73rem', color: 'var(--text-muted)' }}>
              Cena de performance com tranças como símbolo de conexão coletiva.
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Content */}
      <div className="section-padding max-w-7xl mx-auto" style={{ position: 'relative' }}>
        <AfroPattern color="#D4A030" opacity={0.05} />
        <AdinkraFloat count={5} color="var(--ouro)" zIndex={0} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Main text */}
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal variant="fade-up">
              <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'var(--text-primary)' }}>
                O processo de aceitação capilar vai muito além de "mudar o cabelo". É reconexão
                com ancestralidade, identidade e autoestima. Nesse percurso, as tranças deixam de
                ser apenas estética e se tornam acolhimento para mulheres negras em transição.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={80}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
                Maria Luiza Pereira, trancista no Riacho Fundo II, conta que foi durante sua
                própria descoberta como mulher preta que aprendeu a cuidar do cabelo crespo,
                desenvolveu a habilidade de trançar e passou a cuidar também de outras mulheres.
              </p>
            </ScrollReveal>

            {/* Metrópoles-style pull quote */}
            <ScrollReveal variant="fade-up" delay={140}>
              <div
                style={{
                  margin: '2rem 0',
                  padding: '1.5rem 2rem',
                  background: 'var(--bg-surface)',
                  borderLeft: '4px solid var(--terracota)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute', top: '-12px', left: '1.5rem',
                    background: 'var(--terracota)',
                    color: '#FAFAF5',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '3px 10px',
                  }}
                >
                  Depoimento
                </span>
                <p className="pull-quote" style={{ color: 'var(--text-primary)' }}>
                  "Foi graças às tranças que tive coragem de assumir meu cabelo natural,
                  minha identidade. Foi um ato de autoperdão."
                </p>
                <footer style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '24px', height: '1px', background: 'var(--terracota)' }} />
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Lady Barbara — professora de dança
                  </span>
                </footer>
              </div>
            </ScrollReveal>
          </div>

          {/* References sidebar */}
          <ScrollReveal variant="fade-left" delay={80}>
            <div>
              <p className="label-tag mb-5">Referências que abriram portas</p>
              <div className="space-y-5">
                {REFERENCES.map((ref, i) => (
                  <div
                    key={i}
                    style={{
                      paddingLeft: '1rem',
                      borderLeft: '1px solid var(--border)',
                      transition: 'border-color 0.3s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--terracota)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                  >
                    <p className="font-display font-bold text-sm uppercase mb-1" style={{ color: 'var(--text-primary)' }}>{ref.name}</p>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{ref.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <BeadDivider className="my-10" />

        <CenteredQuote
          quote="A trança, além do viés estético, é símbolo de autoestima, cultura e resistência negra."
          author="Síntese da reportagem"
          role="Fios da identidade e autoestima"
          dark
          accentColor="var(--ouro)"
        />

        {/* Podcast block */}
        <ScrollReveal variant="fade-up">
          <div className="mb-4">
            <p className="label-tag mb-5">Ouça o episódio</p>
            <AudioPlayer
              title="Podcast PI — Trancistas do Brasil"
              guest="Com Kamyla Santos e Dra. Aline Ferreira"
              episode="Episódio especial · PI 2025"
              src={import.meta.env.VITE_PODCAST_URL || '/media/audio/podcast.mp3'}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
