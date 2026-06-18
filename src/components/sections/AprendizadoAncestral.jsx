import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import SectionLabel from '../ui/SectionLabel'
import VideoPlayer from '../ui/VideoPlayer'
import ImageCarousel from '../ui/ImageCarousel'
import BraidDivider from '../ui/BraidDivider'
import { CARROSSEL1_IMAGES } from '../../data/content'

const VIDEO_SRC = 'https://youtu.be/mqJm0Y56rE8'

// Largura máxima da coluna editorial — padrão matéria especial
const COL = { maxWidth: '720px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 2rem)' }

export default function AprendizadoAncestral() {
  return (
    <section id="aprendizado" style={{ background: 'var(--bg-primary)' }}>
      {/* ── Cabeçalho da seção ── */}
      <div className="section-padding max-w-7xl mx-auto" style={{ paddingBottom: '2rem' }}>
        <ScrollReveal variant="fade-up">
          <SectionLabel number={1} text="APRENDIZADO ANCESTRAL" />
        </ScrollReveal>
        <ClipReveal delay={60}>
          <h2
            className="font-display font-black uppercase leading-none mb-2"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', color: 'var(--text-primary)' }}
          >
            A GÊNESE<br />
            <span className="wood-text">DA RAIZ</span>
          </h2>
        </ClipReveal>
      </div>

      {/* ── Coluna editorial ── */}
      <div style={COL}>

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            Segundo o artigo <a href="https://drive.google.com/file/d/1I3jThYAJY6UQxD0xI-l5UaZ22l0QKUuI/view" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--terracota)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>"Entre os fios da Ancestralidade"</a>, escrito pela pedagoga e
            trancista Layla Maryzandra, a construção das trancistas como profissionais se
            relaciona diretamente com "a interação com seus pertencimentos, que se originam
            dos seus territórios, de suas migrações, suas práticas socioculturais cotidianas,
            desenvolvendo vínculos entre os fios do passado e do presente".
          </p>
        </ScrollReveal>

        {/* Foto inline — Layla Maryzandra */}
        <ScrollReveal variant="fade-up">
          <figure style={{ margin: '0 0 3rem' }}>
            <img
              src="/media/photos/seq-1.jpg"
              alt="Layla Maryzandra"
              style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }}
            />
            <figcaption style={{
              paddingTop: '0.55rem',
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              borderTop: '1px solid var(--border)',
              marginTop: '0.5rem',
            }}>
              Layla Maryzandra, pesquisadora e trancista/ Foto: reportagem Trançando caminhos
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            Da mesma maneira, a falta de interesse público em gerar pesquisas não é um acaso.
            A história do Brasil constrói as possíveis causas que dificultam tais dados e
            desvalorizam a profissão. É necessário voltar no tempo e reconstruir a cultura
            miscigenada brasileira, que carrega em suas veias latinas, a diáspora africana
            em direção ao "novo mundo".
          </p>
        </ScrollReveal>

        {/* Foto inline — diáspora */}
        <ScrollReveal variant="fade-up">
          <figure style={{ margin: '0 0 3rem' }}>
            <img
              src="/media/photos/seq-2.jpeg"
              alt="Livro da diáspora africana"
              style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }}
            />
            <figcaption style={{
              paddingTop: '0.55rem',
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              borderTop: '1px solid var(--border)',
              marginTop: '0.5rem',
            }}>
              Livro de diáspora africana - Foto: reportagem Trançando caminhos
            </figcaption>
          </figure>
        </ScrollReveal>

        {/* Vídeo inline */}
        <ScrollReveal variant="fade-up">
          <div style={{ margin: '0 0 2.5rem' }}>
            <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Assista ao vídeo a seguir sobre a história das tranças:
            </p>
            <VideoPlayer
              src={VIDEO_SRC}
              title="Vídeo: história das tranças"
              className="aspect-video"
            />
          </div>
        </ScrollReveal>

        <BraidDivider className="mb-8" />

      </div>



    </section>
  )
}




