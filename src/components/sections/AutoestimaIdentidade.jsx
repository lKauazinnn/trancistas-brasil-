import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import CenteredQuote from '../ui/CenteredQuote'
import AfroPattern from '../ui/AfroPattern'
import SectionLabel from '../ui/SectionLabel'
import AudioPlayer from '../ui/AudioPlayer'
import StarDivider from '../ui/StarDivider'
import ParallaxSection from '../ui/ParallaxSection'

const REFERENCES = [
  { name: 'Michelle Obama', desc: 'Ao usar tranças em eventos oficiais, redefiniu o que é elegância num mundo que sempre negou a estética negra.' },
  { name: 'Solange Knowles', desc: 'Transformou o Grammy em manifesto capilar ao subir ao palco com tranças afros.' },
  { name: 'Léa Araújo', desc: 'Atriz brasileira que abriu espaço na TV para a discussão sobre representatividade capilar.' },
]

export default function AutoestimaIdentidade() {
  return (
    <section id="identidade" style={{ background: 'var(--bg-secondary)' }}>
      {/* Parallax header image */}
      <ParallaxSection
        src="/media/photos/IMG_0592.jpg"
        alt="Identidade e autoestima"
        height="65vh"
        intensity={0.2}
        overlay={0.48}
        objectPosition="center 40%"
      >
        <div
          className="flex flex-col justify-end h-full px-6 md:px-12 lg:px-20"
          style={{ paddingBottom: '2.5rem' }}
        >
          <ScrollReveal variant="fade-up">
            <SectionLabel number={2} text="Autoestima e Identidade" />
          </ScrollReveal>
          <ClipReveal delay={80}>
            <h2
              className="font-display font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', color: '#FAFAF5' }}
            >
              A <span style={{ color: 'var(--ouro)' }}>POTÊNCIA</span><br />
              DO CRESPO
            </h2>
          </ClipReveal>
        </div>
      </ParallaxSection>

      {/* Content */}
      <div className="section-padding max-w-7xl mx-auto" style={{ position: 'relative' }}>
        <AfroPattern color="#D4A030" opacity={0.05} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Main text */}
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal variant="fade-up">
              <p style={{ fontSize: '1.1rem', lineHeight: 1.75, color: 'var(--text-primary)' }}>
                Quando uma mulher negra senta na cadeira de uma trancista, algo além do estético
                acontece. É um ritual de retomada. Num país onde o cabelo crespo foi proibido,
                ridicularizado e associado à falta de higiene por décadas, cada trança é um ato
                político e espiritual.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={80}>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
                "Quando termino uma trança, minha cliente chora", conta Beatriz Lima, trancista
                há 8 anos em Salvador. "Não é de dor. É de se ver. Às vezes é a primeira vez
                que elas se olham no espelho e se reconhecem bonitas do jeito que nasceram."
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
                  "O cabelo negro nunca foi apenas estético. Ele foi alvo de opressão e hoje
                  é símbolo de retomada de identidade."
                </p>
                <footer style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '24px', height: '1px', background: 'var(--terracota)' }} />
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Dra. Aline Ferreira — Pesquisadora de Cultura Afro-Brasileira, USP
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

        <StarDivider className="my-10" />

        <CenteredQuote
          quote="Quando termino uma trança, minha cliente chora. Não é de dor. É de se ver."
          author="Beatriz Lima"
          role="Trancista — Salvador, BA"
          dark
          accentColor="var(--ouro)"
        />

        {/* Podcast block */}
        <ScrollReveal variant="fade-up">
          <div className="mb-4">
            <p className="label-tag mb-5">Ouça o episódio</p>
            <AudioPlayer
              title="Cabelo, Cultura e Resistência"
              guest="Com Kamyla Santos e Dra. Aline Ferreira"
              episode="Podcast Trancistas — Ep. 01"
              src={null}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
