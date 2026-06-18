import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'

import SectionLabel from '../ui/SectionLabel'
import BraidDivider from '../ui/BraidDivider'
import { CREDITS } from '../../data/content'

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
          fontSize: '0.95rem',
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
        <p style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.65rem)', lineHeight: 1.75, color: 'var(--text-primary)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
          {text}
        </p>
        <footer style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ width: '20px', height: '1px', background: accentColor, flexShrink: 0 }} />
          <div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block' }}>{author}</span>
            {role && <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', color: 'var(--text-muted)' }}>{role}</span>}
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
          <SectionLabel number={6} text="RUMO DAS TRANCISTAS" />
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

        <InlinePhoto
          src="/media/photos/seq-11.jpeg"
          alt="Livros e materiais sobre a diáspora africana e tranças"
          caption="Livros históricos mostrando diferentes tipos de tranças/ Foto: reportagem Trançando caminhos"
          ratio="3/2"
        />

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            Muito mais do que um ofício, a prática de trançar carrega um patrimônio cultural
            construído ao longo de gerações. Para a pesquisadora e trancista Layla Maryzandra,
            o reconhecimento desse saber como patrimônio cultural do Distrito Federal ainda é
            uma demanda importante para fortalecer a comunidade e valorizar a dimensão
            identitária da profissão.
          </p>
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            A partir desse reconhecimento, torna-se possível pensar em políticas públicas que
            enxerguem as trancistas como detentoras de um conhecimento ancestral. Mais do que
            garantir a permanência dessas profissionais no mercado de trabalho, essas iniciativas
            poderiam contribuir para a preservação de um saber tradicional, oferecendo condições
            dignas de trabalho, formação e cuidado.
          </p>
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            Hoje, muitos dos movimentos voltados à valorização das trancistas surgem da
            mobilização de mulheres que vivenciam essa realidade de perto. Trancistas,
            trançadeiras, pesquisadoras, integrantes do movimento negro e mulheres que
            encontraram nas tranças um caminho de afirmação identitária têm construído
            espaços de troca, formação e fortalecimento coletivo.
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
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
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            A inclusão da ocupação de trancista na Classificação Brasileira de Ocupações (CBO),
            em 2025, representa um marco importante. No entanto, para muitas profissionais,
            esse reconhecimento institucional é apenas o primeiro passo de uma trajetória
            que ainda envolve desafios relacionados à valorização.
          </p>
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            Nesse cenário, um dos poucos debates em tramitação no Congresso Nacional é o
            <a href="https://share.google/cHDh7ueDx5DVMti0T" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--terracota)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Projeto de Lei nº 1.747/2024</a>, de autoria da deputada federal Dandara Tonantzin (PT),
            que propõe a regulamentação da profissão de trancista. A proposta foi aprovada
                pela Comissão de Trabalho (CTRAB) em dezembro de 2025 e aguarda análise da Comissão de
            Constituição e Justiça e de Cidadania. O projeto tramita em conjunto com o PL
            nº 2.831/2024, apresentado pela deputada Rogéria Santos (Republicanos-BA), que também trata da
            regulamentação da atividade.
          </p>
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            Tal proposta pode representar um avanço importante, mas também levanta debates
            entre as profissionais. A regulamentação excessiva pode criar barreiras de acesso
            para trancistas que aprenderam o ofício por meio da transmissão familiar e
            comunitária, sem formação formal. Além disso, em uma atividade historicamente
            marcada pela informalidade e pelo empreendedorismo autônomo, a criação de
            exigências legais pode resultar em aumento de custos, burocracias e mecanismos de fiscalização.
          </p>
        </ScrollReveal>

        {/* ── Encerramento editorial ── */}
        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem' }}>
            Ao longo desta reportagem, uma ausência apareceu repetidamente: a falta de dados,
            de políticas públicas e de reconhecimento compatíveis com a importância social,
            econômica e cultural das trancistas. Ainda assim, essas mulheres seguem fazendo
            o que sempre fizeram: transformando memória em trabalho, ancestralidade em
            identidade e cuidado em sustento.
          </p>
          <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '3rem' }}>
            Entre fios que ligam passado e futuro, as trancistas seguem trançando caminhos.
            E talvez o maior desafio daqui para frente não seja provar a importância desse
            ofício, mas garantir que ele seja finalmente visto, valorizado e preservado como
            parte da história brasileira.
          </p>
        </ScrollReveal>

      </div>

      {/* ── Documentário ── */}
      <div style={COL}>
        <ScrollReveal variant="fade-up">
          <div style={{ margin: '0 0 3rem' }}>
            <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '1rem' }}>
              Assista ao documentário completo:
            </p>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px' }}>
              <iframe
                src="https://www.youtube.com/embed/xQg9-47JC0k"
                title="Documentário Trançando Caminhos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div style={{
        background: 'var(--bg-deep)',
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 14rem)',
        textAlign: 'center',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
      }}>
        <p style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
          fontWeight: 700,
          fontStyle: 'italic',
          lineHeight: 1.25,
          color: 'var(--text-primary)',
          maxWidth: '860px',
          margin: '0 auto',
        }}>
          Entre fios que ligam passado e futuro, as trancistas seguem trançando caminhos.
        </p>
      </div>

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

      {/* ── Créditos ── */}
      <div style={{ ...COL, paddingTop: '4rem', paddingBottom: '4rem' }}>
        <BraidDivider className="mb-10" />
        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-6">Créditos da produção</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {CREDITS.map((c, i) => (
              <div key={i}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  {c.role}
                </p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', color: 'var(--text-primary)' }}>
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




