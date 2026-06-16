import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import CenteredQuote from '../ui/CenteredQuote'
import SectionLabel from '../ui/SectionLabel'
import AudioPlayer from '../ui/AudioPlayer'
import BraidDivider from '../ui/BraidDivider'
import BeadDivider from '../ui/BeadDivider'
import { CREDITS } from '../../data/content'

const DOCUMENTARIO_AUDIO = import.meta.env.VITE_DOCUMENTARIO_AUDIO || '/media/audio/documentario.mp3'

// Coluna editorial central
const COL = { maxWidth: '720px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 2rem)' }

function InlinePhoto({ src, alt, caption, ratio = '3/2' }) {
  return (
    <ScrollReveal variant="fade-up">
      <figure style={{ margin: '0 0 3rem' }}>
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', aspectRatio: ratio, objectFit: 'cover', display: 'block' }}
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
          {caption}
        </figcaption>
      </figure>
    </ScrollReveal>
  )
}

function PullQuote({ text, author, role, accentColor = 'var(--terracota)' }) {
  return (
    <ScrollReveal variant="fade-up">
      <blockquote style={{ margin: '0 0 2.5rem', paddingLeft: '1.5rem', borderLeft: `4px solid ${accentColor}` }}>
        <p style={{ fontSize: 'clamp(1.35rem, 2vw, 1.6rem)', lineHeight: 1.75, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
          {text}
        </p>
        <footer style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '20px', height: '1px', background: accentColor, flexShrink: 0 }} />
          <div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>{author}</span>
            {role && <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', color: 'var(--text-muted)' }}>{role}</span>}
          </div>
        </footer>
      </blockquote>
    </ScrollReveal>
  )
}

export default function FuturoEncerramento() {
  return (
    <section id="futuro" style={{ background: 'var(--bg-primary)' }}>
      <div style={{ height: '1px', background: 'var(--border)' }} />

      {/* ── Cabeçalho ── */}
      <div className="section-padding max-w-7xl mx-auto" style={{ paddingBottom: '2rem', position: 'relative' }}>
        <ScrollReveal variant="fade-up">
          <SectionLabel number={5} text="O futuro da profissão" />
        </ScrollReveal>
        <ClipReveal delay={60}>
          <h2
            className="font-display font-black uppercase leading-none mb-2"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', color: 'var(--text-primary)' }}
          >
            O FUTURO<br />
            <span className="wood-text-gold">DA PROFISSÃO</span>
          </h2>
        </ClipReveal>
      </div>

      {/* ── Coluna editorial ── */}
      <div style={COL}>

        {/* Foto — aparece antes do texto, conforme ordem aprovada */}
        <InlinePhoto
          src="/media/photos/moça.jpeg"
          alt="Layla Maryzandra com materiais de pesquisa"
          caption="LAYLA MARYZANDRA/ FOTO AUTORAL"
          ratio="3/2"
        />

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.55rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem', fontWeight: 500 }}>
            Muito mais do que um ofício, a prática de trançar carrega um patrimônio cultural
            construído ao longo de gerações. Para a pesquisadora e trancista Layla Maryzandra,
            o reconhecimento desse saber como patrimônio cultural do Distrito Federal ainda é
            uma demanda importante para fortalecer a comunidade e valorizar a dimensão
            identitária da profissão.
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            A partir desse reconhecimento, torna-se possível pensar em políticas públicas que
            enxerguem as trancistas como detentoras de um conhecimento ancestral. Mais do que
            garantir a permanência dessas profissionais no mercado de trabalho, essas iniciativas
            poderiam contribuir para a preservação de um saber tradicional, oferecendo condições
            dignas de trabalho, formação e cuidado.
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Hoje, muitos dos movimentos voltados à valorização das trancistas surgem da
            mobilização de mulheres que vivenciam essa realidade de perto. Trancistas,
            trançadeiras, pesquisadoras, integrantes do movimento negro e mulheres que
            encontraram nas tranças um caminho de afirmação identitária têm construído
            espaços de troca, formação e fortalecimento coletivo.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            É o caso de Layla Maryzandra, por meio dos projetos Fios da Ancestralidade e
            Mapa Afetivo, e de Laodicéia Nascimento, uma das trancistas mais antigas do
            Distrito Federal. Ambas dedicam parte de suas trajetórias à transmissão de
            conhecimentos e à valorização do ofício.
          </p>
        </ScrollReveal>

        <PullQuote
          text='"Eu me sinto muito realizada de conseguir passar adiante muita coisa, meus conhecimentos para muitas dessas meninas. Então essa é minha maior realização. Se fosse apenas sobre mim, eu não seria realizada."'
          author="Laodicéia Nascimento"
          role="Trancista há mais de 48 anos no DF"
          accentColor="var(--ouro)"
        />

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            A inclusão da ocupação de trancista na Classificação Brasileira de Ocupações,
            em 2025, representa um marco importante. No entanto, para muitas profissionais,
            esse reconhecimento institucional é apenas o primeiro passo de uma trajetória
            que ainda envolve desafios relacionados à valorização.
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Nesse cenário, um dos poucos debates em tramitação no Congresso Nacional é o
            Projeto de Lei nº 1.747/2024, de autoria da deputada federal Dandara Tonantzin,
            que propõe a regulamentação da profissão de trancista. A proposta foi aprovada
            pela Comissão de Trabalho em dezembro de 2025 e aguarda análise da Comissão de
            Constituição e Justiça e de Cidadania. O projeto tramita em conjunto com o PL
            nº 2.831/2024, apresentado pela deputada Rogéria Santos, que também trata da
            regulamentação da atividade.
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Tal proposta pode representar um avanço importante, mas também levanta debates
            entre as profissionais. A regulamentação excessiva pode criar barreiras de acesso
            para trancistas que aprenderam o ofício por meio da transmissão familiar e
            comunitária, sem formação formal. Além disso, em uma atividade historicamente
            marcada pela informalidade e pelo empreendedorismo autônomo, a criação de
            exigências legais pode resultar em aumento de custos e burocracias.
          </p>
        </ScrollReveal>

        <BraidDivider className="mb-8" />

        {/* ── Encerramento editorial ── */}
        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Ao longo desta reportagem, uma ausência apareceu repetidamente: a falta de dados,
            de políticas públicas e de reconhecimento compatíveis com a importância social,
            econômica e cultural das trancistas. Ainda assim, essas mulheres seguem fazendo
            o que sempre fizeram — transformando memória em trabalho, ancestralidade em
            identidade e cuidado em sustento.
          </p>
          <p style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.55rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '3rem', fontWeight: 500 }}>
            Entre fios que ligam passado e futuro, as trancistas seguem trançando caminhos.
            E talvez o maior desafio daqui para frente não seja provar a importância desse
            ofício, mas garantir que ele seja finalmente visto, valorizado e preservado como
            parte da história brasileira.
          </p>
        </ScrollReveal>

      </div>

      {/* ── Foto de encerramento — largura generosa ── */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2rem)', marginBottom: '3rem' }}>
        <ScrollReveal variant="fade-up">
          <figure>
            <img
              src="/media/photos/hero-grupo.jpg"
              alt="Grupo de trancistas"
              style={{ width: '100%', aspectRatio: '16/7', objectFit: 'cover', display: 'block' }}
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
              Foto autoral
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>

      <CenteredQuote
        quote="Entre fios que ligam passado e futuro, as trancistas seguem trançando caminhos."
        author="Encerramento da reportagem"
        role="Trançando Caminhos · PI 2026"
        dark
      />

      {/* ── Encerramento tipográfico ── */}
      <div style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '5rem' }}>
        <ClipReveal delay={0}>
          <p
            className="font-display font-black uppercase leading-none select-none"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: 'var(--text-primary)' }}
          >
            Resistência
          </p>
        </ClipReveal>
        <ClipReveal delay={120}>
          <p
            className="font-display font-black uppercase leading-none select-none"
            style={{
              fontSize: 'clamp(2.5rem, 7vw, 6rem)',
              WebkitTextStroke: '1.5px var(--terracota)',
              color: 'transparent',
            }}
          >
            É Arte
          </p>
        </ClipReveal>
      </div>

      {/* ── Documentário em áudio ── */}
      <div style={COL}>
        <ScrollReveal variant="fade-up">
          <BeadDivider className="mb-10" />
          <p className="label-tag mb-3">Documentário</p>
          <h3
            className="font-display font-black uppercase mb-6"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}
          >
            Trançando Caminhos · Versão em áudio
          </h3>
          <AudioPlayer
            title="Documentário Especial — Trançando Caminhos"
            guest="Reportagem em áudio com vozes de trancistas do DF"
            episode="Formato estilo player"
            src={DOCUMENTARIO_AUDIO}
            cover="/media/photos/imagem 5.jpeg"
          />
        </ScrollReveal>
      </div>

      {/* ── Créditos ── */}
      <div style={{ ...COL, paddingTop: '4rem', paddingBottom: '4rem' }}>
        <BraidDivider className="mb-10" />
        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-6">Créditos da produção</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {CREDITS.map((c, i) => (
              <div key={i}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  {c.role}
                </p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', color: 'var(--text-primary)' }}>
                  {c.name}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

    </section>
  )
}




