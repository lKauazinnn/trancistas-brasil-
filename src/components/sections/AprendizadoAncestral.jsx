import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import SectionLabel from '../ui/SectionLabel'
import VideoPlayer from '../ui/VideoPlayer'
import ImageCarousel from '../ui/ImageCarousel'
import TickerBand from '../ui/TickerBand'
import StarDivider from '../ui/StarDivider'
import BraidDivider from '../ui/BraidDivider'
import { CARROSSEL1_IMAGES } from '../../data/content'

const VIDEO_SRC = import.meta.env.VITE_VIDEO_DOCUMENTARIO || '/media/videos/documentario-web.mp4'

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
                A GÊNESE<br />
                <span className="wood-text">DA RAIZ</span>
              </h2>
            </ClipReveal>

            <ScrollReveal variant="fade-up" delay={180}>
              <div className="space-y-5 max-w-lg">
                <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-primary)' }}>
                  As trancistas no Distrito Federal carregam um conhecimento ancestral herdado de
                  outras mulheres há milhares de anos. Segundo a pedagoga e trancista Layla
                  Maryzandra, esse saber nasce da interação com território, migração e práticas
                  socioculturais cotidianas, conectando fios do passado e do presente.
                </p>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
                  A falta de interesse público em produzir dados também é parte da história.
                  A reconstrução da cultura brasileira passa pela diáspora africana e por um
                  processo de apagamento que ainda impacta reconhecimento, pesquisa e direitos.
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
                    "A construção das trancistas como profissionais se relaciona diretamente com
                    seus pertencimentos e vínculos entre os fios do passado e do presente."
                  </p>
                  <footer style={{ marginTop: '0.75rem' }}>
                    <cite style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', fontStyle: 'normal', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                      — Layla Maryzandra, em "Entre os fios da ancestralidade"
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={240}>
              <StarDivider className="my-8" />
              <div className="flex gap-8 flex-wrap">
                <div style={{ borderLeft: '2px solid var(--terracota)', paddingLeft: '1rem' }}>
                  <p className="font-display font-black text-3xl" style={{ color: 'var(--terracota)' }}>3.500 a.C.</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>
                    referência ancestral
                  </p>
                </div>
                <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: '1rem' }}>
                  <p className="font-display font-black text-3xl" style={{ color: 'var(--text-primary)' }}>2025</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>
                    inclusão na CBO
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Video */}
          <div className="flex flex-col gap-5">
            <ScrollReveal variant="fade-left" delay={80}>
              <div className="grid grid-cols-2 gap-3">
                <figure style={{ border: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
                  <img src="/media/photos/imagem 1.jpeg" alt="Layla Maryzandra em registro autoral" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover' }} />
                  <figcaption style={{ padding: '0.65rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>Layla Maryzandra · foto autoral</figcaption>
                </figure>
                <figure style={{ border: '1px solid var(--border)', background: 'var(--bg-surface)' }}>
                  <img src="/media/photos/iamgem.jpeg" alt="Mapa da diáspora africana" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover' }} />
                  <figcaption style={{ padding: '0.65rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>Diáspora africana · foto autoral</figcaption>
                </figure>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={120}>
              <VideoPlayer
                src={VIDEO_SRC}
                title="Vídeo: história das tranças"
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
                  Um recorte da trajetória histórica da trança como tecnologia de resistência,
                  identidade e mobilidade para mulheres negras no Brasil.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Carrossel 1 — processo e técnica */}
      <div className="section-padding max-w-7xl mx-auto" style={{ paddingTop: 0 }}>
        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-3">Ensaio Fotográfico · Processo e Técnica</p>
          <h3
            className="font-display font-black uppercase mb-6"
            style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)', color: 'var(--text-primary)' }}
          >
            Arte feita de mãos
          </h3>
        </ScrollReveal>
        <ImageCarousel images={CARROSSEL1_IMAGES} />
      </div>

      <div className="section-padding max-w-7xl mx-auto" style={{ paddingTop: '1.5rem' }}>
        <BraidDivider className="mb-6" />
        <p style={{ maxWidth: '72ch', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.75 }}>
          O reconhecimento tardio da profissão demonstra como esse saber ainda é tratado à margem.
          Sem dados robustos e políticas públicas específicas, o ofício segue sustentado pela força
          coletiva de mulheres que transformam memória em trabalho.
        </p>
      </div>

    </section>
  )
}
