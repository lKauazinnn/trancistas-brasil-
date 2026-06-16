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
          <SectionLabel number={1} text="O Aprendizado Ancestral" />
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
          {/* Parágrafo da Layla — corpo */}
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Segundo o artigo "Entre os fios da Ancestralidade", escrito pela pedagoga e
            trancista Layla Maryzandra, a construção das trancistas como profissionais se
            relaciona diretamente com a interação com seus pertencimentos, que se originam
            dos seus territórios, de suas migrações, suas práticas socioculturais cotidianas,
            desenvolvendo vínculos entre os fios do passado e do presente.
          </p>
        </ScrollReveal>

        {/* Foto inline — Layla Maryzandra */}
        <ScrollReveal variant="fade-up">
          <figure style={{ margin: '0 0 3rem' }}>
            <img
              src="/media/photos/moça.jpeg"
              alt="Layla Maryzandra"
              style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }}
            />
            <figcaption style={{
              paddingTop: '0.55rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              borderTop: '1px solid var(--border)',
              marginTop: '0.5rem',
            }}>
              LAYLA MARYZANDRA/ FOTO AUTORAL
            </figcaption>
          </figure>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
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
              src="/media/photos/imagem 1.jpeg"
              alt="Mapa da diáspora africana"
              style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }}
            />
            <figcaption style={{
              paddingTop: '0.55rem',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              fontStyle: 'italic',
              lineHeight: 1.6,
              borderTop: '1px solid var(--border)',
              marginTop: '0.5rem',
            }}>
              LIVRO DA DIÁSPORA AFRICANA/ FOTO AUTORAL
            </figcaption>
          </figure>
        </ScrollReveal>

        {/* Vídeo inline */}
        <ScrollReveal variant="fade-up">
          <div style={{ margin: '0 0 2.5rem' }}>
            <p className="label-tag mb-2">Assista: história das tranças</p>
            <VideoPlayer
              src={VIDEO_SRC}
              title="Vídeo: história das tranças"
              className="aspect-video"
            />
            <p style={{ paddingTop: '0.55rem', fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.5, borderTop: '1px solid var(--border)', marginTop: '0.5rem' }}>
              Um recorte da trajetória histórica da trança como tecnologia de resistência,
              identidade e mobilidade para mulheres negras no Brasil.
            </p>
          </div>
        </ScrollReveal>

      </div>

      {/* ── Carrossel de fotos — Arte feita de mãos ── */}
      <div className="section-padding max-w-7xl mx-auto" style={{ paddingTop: '3rem' }}>
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

      {/* ── Parágrafo de encerramento da seção ── */}
      <div style={{ ...COL, paddingTop: '2.5rem', paddingBottom: '3rem' }}>
        <BraidDivider className="mb-6" />
        <p style={{ fontSize: '1.1rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>
          É necessário voltar no tempo e reconstruir a cultura miscigenada brasileira, que
          carrega em suas veias latinas, a diáspora africana em direção ao "novo mundo".
          O reconhecimento tardio da profissão demonstra como esse saber ainda é tratado
          à margem — e quanto as trancistas sustentam, com a força de suas próprias mãos,
          um legado que o Estado ainda não soube proteger.
        </p>
      </div>

    </section>
  )
}




