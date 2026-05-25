import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import CenteredQuote from '../ui/CenteredQuote'
import SectionLabel from '../ui/SectionLabel'
import VideoPlayer from '../ui/VideoPlayer'
import StarDivider from '../ui/StarDivider'
import { CREDITS } from '../../data/content'

const FUTURE_PILLARS = [
  { numero: '01', titulo: 'Regulamentação', texto: 'O debate sobre a formalização da profissão avança no legislativo, impulsionado pelo movimento negro.' },
  { numero: '02', titulo: 'Crédito Justo',  texto: 'Iniciativas de microcrédito voltadas a trabalhadores informais negros começam a surgir em fintechs afro-centradas.' },
  { numero: '03', titulo: 'Formação',        texto: 'Cursos técnicos de tranças começam a ser incluídos em programas de qualificação em cidades como Salvador e São Paulo.' },
  { numero: '04', titulo: 'Visibilidade',    texto: 'Reportagens como esta constroem o arquivo histórico que a profissão merece.' },
]

export default function FuturoEncerramento() {
  return (
    <section id="futuro" style={{ background: 'var(--bg-primary)' }}>
      <div style={{ height: '1px', background: 'var(--border)' }} />

      <div className="section-padding max-w-7xl mx-auto">
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
            <span style={{ color: 'var(--ouro)' }}>ESTÁ</span><br />
            NAS MÃOS
          </h2>
        </ClipReveal>

        <ScrollReveal variant="fade-up" delay={140}>
          <div className="max-w-3xl mb-12 space-y-5">
            <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-primary)' }}>
              As trancistas do Brasil não esperam. Elas criam redes de apoio entre si,
              ensinam as mais jovens, organizam feiras, desenvolvem produtos e reinventam
              seus negócios na lógica da economia solidária.
            </p>
            <p style={{ fontSize: '0.92rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
              "Eu não preciso de pena. Preciso de acesso", diz Kamyla. "Acesso ao banco, à
              faculdade, ao reconhecimento. O resto eu resolvo com as minhas mãos."
            </p>
          </div>
        </ScrollReveal>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {FUTURE_PILLARS.map((p, i) => (
            <ScrollReveal key={i} variant="fade-up" delay={i * 70}>
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
            </ScrollReveal>
          ))}
        </div>

        <StarDivider className="mb-12" />

        {/* Documentário */}
        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-3">Mini-documentário</p>
          <h3
            className="font-display font-black uppercase mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--text-primary)' }}
          >
            Trançando com Kamyla
          </h3>
          <VideoPlayer
            src="/media/videos/Vídeo-entrevista_ trançando com Kamyla.mov"
            title="Assistir o documentário completo"
            className="w-full aspect-video max-w-4xl mx-auto"
          />
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
          quote="Eu não preciso de pena. Preciso de acesso. O resto eu resolvo com as minhas mãos."
          author="Kamyla Santos"
          role="Trancista — Piauí"
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
