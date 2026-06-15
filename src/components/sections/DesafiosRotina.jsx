import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import CenteredQuote from '../ui/CenteredQuote'
import SectionLabel from '../ui/SectionLabel'
import StarDivider from '../ui/StarDivider'

const COL = { maxWidth: '720px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 2rem)' }

function InlinePhoto({ src, alt, caption, ratio = '3/2' }) {
  return (
    <ScrollReveal variant="fade-up">
      <figure style={{ margin: '0 0 3rem' }}>
        <img src={src} alt={alt} style={{ width: '100%', aspectRatio: ratio, objectFit: 'cover', display: 'block' }} />
        <figcaption style={{ paddingTop: '0.55rem', fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.6, borderTop: '1px solid var(--border)', marginTop: '0.5rem' }}>
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

export default function DesafiosRotina() {
  return (
    <section id="desafios" style={{ background: 'var(--bg-secondary)' }}>
      <div style={{ height: '3px', background: `linear-gradient(90deg, var(--terracota), var(--ouro), var(--terracota))` }} />

      {/* ── Cabeçalho ── */}
      <div className="section-padding max-w-7xl mx-auto" style={{ paddingBottom: '2rem' }}>
        <ScrollReveal variant="fade-right">
          <SectionLabel number={4} text="As dores do ofício" />
        </ScrollReveal>
        <ClipReveal delay={60}>
          <h2
            className="font-display font-black uppercase leading-none"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', color: 'var(--text-primary)' }}
          >
            AS DORES<br />QUE{' '}
            <span className="wood-text">NINGUÉM</span><br />VÊ
          </h2>
        </ClipReveal>
      </div>

      {/* ── Coluna editorial ── */}
      <div style={COL}>

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.55rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem', fontWeight: 500 }}>
            Um trabalho que demorou para ser reconhecido como ocupação traz consequências
            nas dores das mãos, pés, costas e nos problemas de saúde que podem virar crônicos.
            A maioria das mulheres que estão nesta reportagem sofre com a falta de apoio
            financeiro — sem acesso a créditos e conhecimentos que englobam essa área
            econômica, as profissionais buscam em si mesmas formas de resistir.
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Com longas jornadas de trabalho, que chegam a 7 dias semanais e mais de 12
            horas diárias em atendimentos, e sem uma perspectiva governamental, essas
            mulheres encontram no seu início os motivos das suas dores do presente.
            Laodicéia Nascimento é uma exceção por conseguir se manter no mercado há mais
            de 48 anos, pois encontrou no exercício de pilates uma forma de se preparar
            para longas jornadas de trabalho e de atendimento.
          </p>
        </ScrollReveal>

        <PullQuote
          text='"No primeiro evento da Associação de Trancistas, nós tivemos a oportunidade de levar uma fisioterapeuta. Foi importante ter esse momento, para mostrar para as meninas que além da técnica e do saber histórico, a preparação é importante para nos mantermos a longo prazo nessa profissão."'
          author="Laodicéia Nascimento"
          role="Trancista há mais de 48 anos no DF"
          accentColor="var(--terracota)"
        />

        <InlinePhoto
          src="/media/photos/Cópia de IMG_3844.jpg"
          alt="Encontro Tranças no Mapa"
          caption="Foto autoral"
          ratio="3/2"
        />

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            O caminho encontrado por Laodicéia é indicado por profissionais da saúde, como
            o fisioterapeuta David Souza, que vê na atividade física um meio de prevenção
            e tratamento das dores. O profissional alerta que movimentos repetitivos, horas
            em pé e a falta de tempo para cuidar da saúde podem implicar diretamente na
            saúde física:
          </p>
        </ScrollReveal>

        <InlinePhoto
          src="/media/photos/rapaz.png"
          alt="David Souza, fisioterapeuta"
          caption="Foto autoral"
          ratio="3/2"
        />

        <PullQuote
          text='"Pensando a longo prazo para quem não pratica atividade física, pode-se perceber algumas degenerações, principalmente na coluna, como hérnias de disco, lombalgia de forma crônica e, em alguns casos, artrose e tendinite. A gente sempre recomenda, de alguma forma, procurar um tempo para se cuidar. Existem alongamentos ou cuidados simples que podem ajudar antes, durante ou depois do trabalho."'
          author="David Souza"
          role="Fisioterapeuta"
          accentColor="var(--ouro)"
        />

        <ScrollReveal variant="fade-up">
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Pensando além do corpo físico, a saúde mental também é um fator que traz dores.
            O desgaste físico diário e a falta de apoio e acompanhamento profissional pode
            resultar no adoecimento mental dessas profissionais:
          </p>
        </ScrollReveal>

        <PullQuote
          text='"É comum você sentir uma dor ou outra, mas não é normal você viver com essa dor. Embora o corpo tenha a capacidade de se acostumar a se adaptar com aquilo que está sendo gerado nele. A longo prazo, isso começa a afetar tanto o desempenho quanto a própria saúde mental, porque ela vai acordar com dor, não vai conseguir descansar, vai diminuir o desempenho e consequentemente deságua na parte financeira."'
          author="David Souza"
          role="Fisioterapeuta"
          accentColor="var(--terracota)"
        />

        <StarDivider className="mb-8" />

        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-3">Instrumento de escuta</p>
          <h3
            className="font-display font-bold uppercase leading-tight mb-5"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'var(--text-primary)' }}
          >
            O Mapa Afetivo e as redes de apoio
          </h3>
          <p style={{ fontSize: 'clamp(1.35rem, 2.2vw, 1.55rem)', lineHeight: 2, color: 'var(--text-primary)', marginBottom: '2rem', fontWeight: 500 }}>
            Ser trancista vai além — essas mulheres atuam, simultaneamente, como artistas,
            psicólogas de suas clientes, historiadoras cotidianas e empreendedoras. E,
            infelizmente, o mercado formal ainda não reconhece a complexidade dessa atuação.
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Laodicéia lembra que no primeiro evento da Associação de Trancistas, houve a
            oportunidade de levar uma fisioterapeuta: foi o começo de uma conscientização
            sobre autocuidado dentro da categoria. Projetos como Tranças no Mapa, Fios da
            Ancestralidade e Mapa Afetivo vêm preenchendo lacunas que o Estado ainda não
            cobre, promovendo pesquisa, oficinas, rodas de diálogo e articulação entre
            profissionais no Distrito Federal.
          </p>
          <p style={{ fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)', lineHeight: 2, color: 'var(--text-muted)', marginBottom: '3rem' }}>
            Entre abril e julho de 2023, o Tranças no Mapa identificou 122 trancistas no
            DF e Entorno, com maior concentração em Ceilândia, Taguatinga e Santa Maria —
            e todas elas carregam, em diferentes graus, as dores físicas e invisíveis
            de um trabalho que ainda busca reconhecimento.
          </p>
        </ScrollReveal>

      </div>

      {/* ── Bloco de impacto — fundo sempre escuro, texto sempre branco ── */}
      <div style={{
        background: '#0a0a0f',
        borderTop: '3px solid var(--terracota)',
        borderBottom: '3px solid var(--terracota)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 2rem)',
        textAlign: 'center',
      }}>
        <p
          className="font-display font-black uppercase"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', color: '#FFFFFF', letterSpacing: '0.04em', lineHeight: 1.1, marginBottom: '0.75rem' }}
        >
          71% relatam dores físicas.
        </p>
        <p
          className="font-display font-black uppercase"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', color: 'var(--terracota)', letterSpacing: '0.04em' }}
        >
          Ninguém vê.
        </p>
      </div>
    </section>
  )
}
