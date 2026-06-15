import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import CenteredQuote from '../ui/CenteredQuote'
import SectionLabel from '../ui/SectionLabel'
import AudioPlayer from '../ui/AudioPlayer'
import StarDivider from '../ui/StarDivider'
import BeadDivider from '../ui/BeadDivider'
import AfroPattern from '../ui/AfroPattern'
import TiltCard from '../ui/TiltCard'
import { CREDITS } from '../../data/content'

const DOCUMENTARIO_AUDIO = import.meta.env.VITE_DOCUMENTARIO_AUDIO || '/media/audio/documentario.mp3'

const FUTURE_PILLARS = [
  { numero: '01', titulo: 'Patrimônio Cultural', texto: 'Reconhecer o saber das trancistas como patrimônio cultural do DF fortalece identidade, memória e permanência do ofício.' },
  { numero: '02', titulo: 'Políticas Públicas',  texto: 'Acesso a crédito, formação continuada e cuidado em saúde física e mental são condições para carreiras longas e dignas.' },
  { numero: '03', titulo: 'Regulamentação com Escuta', texto: 'PL 1.747/2024 e PL 2.831/2024 podem ser avanços, desde que não criem barreiras para saberes comunitários e familiares.' },
  { numero: '04', titulo: 'Rede entre Mulheres', texto: 'Movimentos como Fios da Ancestralidade, Mapa Afetivo e Tranças no Mapa seguem articulando formação e visibilidade.' },
]

export default function FuturoEncerramento() {
  return (
    <section id="futuro" style={{ background: 'var(--bg-primary)' }}>
      <div style={{ height: '1px', background: 'var(--border)' }} />

      <div className="section-padding max-w-7xl mx-auto" style={{ position: 'relative' }}>
        <AfroPattern variant="adinkra" color="#D4A030" opacity={0.055} />
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <SectionLabel number={5} text="Futuro & Encerramento" />
        </ScrollReveal>

        <ClipReveal delay={60}>
          <h2
            className="font-display font-black uppercase leading-none mb-8"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', color: 'var(--text-primary)' }}
          >
            O FUTURO<br />
            <span className="wood-text-gold">DA PROFISSÃO</span>
          </h2>
        </ClipReveal>

        <ScrollReveal variant="fade-up" delay={140}>
          <div className="max-w-3xl mb-12 space-y-5">
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-primary)' }}>
              Muito mais do que um ofício, trançar carrega um patrimônio cultural construído ao
              longo de gerações. A inclusão da ocupação na CBO, em 2025, é um marco importante,
              mas ainda distante do reconhecimento social, econômico e institucional necessário.
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
              A proposta legislativa em tramitação no Congresso pode abrir caminhos, mas também
              acende alertas sobre burocracia excessiva e novos custos para trancistas que
              aprenderam pela transmissão familiar e comunitária. O desafio agora é avançar sem
              apagar a origem ancestral do saber.
            </p>
          </div>
        </ScrollReveal>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {FUTURE_PILLARS.map((p, i) => (
            <ScrollReveal key={i} variant="fade-up" delay={i * 70}>
              <TiltCard intensity={8} style={{ height: '100%' }}>
              <div
                style={{
                  border: '1px solid var(--border)',
                  padding: 'clamp(1rem, 2.5vw, 1.5rem)',
                  height: '100%',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(192,82,42,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <span
                  className="font-display font-black block leading-none mb-3"
                  style={{ fontSize: '2.5rem', color: 'rgba(192,82,42,0.25)' }}
                >
                  {p.numero}
                </span>
                <h4
                  className="font-display font-bold text-sm uppercase mb-2 leading-tight"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {p.titulo}
                </h4>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {p.texto}
                </p>
              </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <BeadDivider className="mb-12" />

        {/* Documentário em áudio */}
        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-3">Documentário</p>
          <h3
            className="font-display font-black uppercase mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}
          >
            Trançando Caminhos · Versão em áudio
          </h3>
          <div className="max-w-4xl mx-auto">
            <AudioPlayer
              title="Documentário Especial — Trançando Caminhos"
              guest="Reportagem em áudio com vozes de trancistas do DF"
              episode="Formato estilo player"
              src={DOCUMENTARIO_AUDIO}
              cover="/media/photos/moça.jpeg"
            />
          </div>
        </ScrollReveal>

        {/* Encerramento tipográfico */}
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

        <CenteredQuote
          quote="Entre fios que ligam passado e futuro, as trancistas seguem trançando caminhos."
          author="Encerramento da reportagem"
          role="Edição final aprovada"
          dark
        />

        <StarDivider className="mb-12" />

        {/* Créditos */}
        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-6">Créditos da produção</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {CREDITS.map((c, i) => (
              <div key={i}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  {c.role}
                </p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', color: 'var(--text-primary)' }}>
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
