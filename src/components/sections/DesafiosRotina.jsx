import { HeartPulse, Banknote, Landmark, Scale } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import CenteredQuote from '../ui/CenteredQuote'
import SectionLabel from '../ui/SectionLabel'
import StarDivider from '../ui/StarDivider'
import ParallaxSection from '../ui/ParallaxSection'

const PAIN_POINTS = [
  { icon: HeartPulse, titulo: 'Dores Crônicas',        texto: '71% das trancistas relatam dores musculoesqueléticas recorrentes nos ombros, pescoço e costas, causadas pelas horas de trabalho com os braços elevados.' },
  { icon: Banknote,   titulo: 'Falta de Crédito',       texto: 'Sem CNPJ e sem garantias formais, o acesso ao crédito para investir em equipamentos e espaço físico é sistematicamente negado.' },
  { icon: Landmark,   titulo: 'Sem Políticas Públicas', texto: 'O Mapa Afetivo aponta que apenas 3% das trancistas conhecem algum programa público de apoio à sua categoria.' },
  { icon: Scale,      titulo: 'Racismo Estrutural',     texto: 'Discriminação em salões não negros e diferença salarial média de 34% em relação a profissionais de cabelos lisos.' },
]

export default function DesafiosRotina() {
  return (
    <section id="desafios" style={{ background: 'var(--bg-secondary)' }}>
      {/* Accent line */}
      <div style={{ height: '3px', background: `linear-gradient(90deg, var(--terracota), var(--ouro), var(--terracota))` }} />

      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-14">
          <div>
            <ScrollReveal variant="fade-right">
              <SectionLabel number={4} text="Desafios e Rotina" />
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

          <ScrollReveal variant="fade-left" delay={120}>
            <div className="flex flex-col justify-end gap-4">
              <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: 'var(--text-primary)' }}>
                Por trás da beleza de uma trança, existe uma jornada física de 8 a 12 horas
                de trabalho, braços elevados, costas curvadas.
              </p>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
                O racismo estrutural, a falta de proteção social e a invisibilidade das
                políticas públicas formam o pano de fundo do cotidiano de quem escolheu —
                ou precisou escolher — essa profissão.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
          {PAIN_POINTS.map((item, i) => (
            <ScrollReveal key={i} variant="fade-up" delay={i * 70}>
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  padding: 'clamp(1.25rem, 3vw, 2rem)',
                  transition: 'border-color 0.35s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(192,82,42,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div className="flex items-start gap-4 mb-3">
                  <span style={{ flexShrink: 0, marginTop: '3px', color: 'var(--terracota)' }}>
                    <item.icon size={22} strokeWidth={1.5} />
                  </span>
                  <h3
                    className="font-display font-bold uppercase leading-tight"
                    style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}
                  >
                    {item.titulo}
                  </h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  {item.texto}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Depoimento destaque */}
        <ScrollReveal variant="fade-up">
          <div
            style={{
              background: 'var(--bg-surface)',
              borderLeft: '4px solid var(--terracota)',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              marginBottom: '4rem',
              position: 'relative',
            }}
          >
            <span
              style={{
                position: 'absolute', top: 0, left: '1.5rem',
                background: 'var(--terracota)', color: '#FAFAF5',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.55rem', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                padding: '3px 10px',
              }}
            >
              Depoimento
            </span>
            <p className="pull-quote" style={{ color: 'var(--text-primary)', marginTop: '1rem' }}>
              "A dor no ombro começou no segundo ano. Hoje faço fisioterapia toda semana.
              Ninguém fala sobre isso."
            </p>
            <footer style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '28px', height: '1px', background: 'var(--terracota)' }} />
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                  Fernanda Oliveira
                </p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  Trancista — 8 anos de profissão
                </p>
              </div>
            </footer>
          </div>
        </ScrollReveal>

        <StarDivider className="mb-12" />

        {/* Mapa Afetivo */}
        <ScrollReveal variant="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <p className="label-tag mb-3">Instrumento de escuta</p>
              <h3
                className="font-display font-bold uppercase leading-tight"
                style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', color: 'var(--text-primary)' }}
              >
                O Mapa<br />Afetivo
              </h3>
            </div>
            <div className="md:col-span-2 space-y-4">
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.75 }}>
                O Mapa Afetivo é uma metodologia de pesquisa qualitativa que ouve trabalhadores
                informais de setores negligenciados. No caso das trancistas, ele revelou o que
                os números não conseguem capturar: a solidão de trabalhar sem rede de proteção,
                o medo de adoecer e perder a única fonte de renda.
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                "Quando você pergunta para uma trancista como ela se sente em relação ao futuro,
                as respostas são dois opostos: esperança — porque ela ama o que faz — e medo —
                porque não existe nada que a proteja se ela parar de conseguir trabalhar."
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                — Prof. Cláudio Nascimento, Economista – UFBA
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <CenteredQuote
        quote="A dor no ombro começou no segundo ano. Hoje faço fisioterapia toda semana. Ninguém fala sobre isso."
        author="Fernanda Oliveira"
        role="Trancista — 8 anos de profissão"
      />

      <ParallaxSection
        src="/media/photos/IMG_0626.jpg"
        alt="Processo de trança"
        height="50vh"
        overlay={0.52}
        objectPosition="center 35%"
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '1rem', padding: '0 2rem' }}>
          <p
            className="font-display font-black uppercase"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', color: '#FAFAF5', letterSpacing: '0.04em', textAlign: 'center', lineHeight: 1.1 }}
          >
            71% relatam dores físicas.
          </p>
          <p
            className="font-display font-black uppercase"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', color: 'var(--terracota)', letterSpacing: '0.04em', textAlign: 'center' }}
          >
            Ninguém vê.
          </p>
        </div>
      </ParallaxSection>
    </section>
  )
}
