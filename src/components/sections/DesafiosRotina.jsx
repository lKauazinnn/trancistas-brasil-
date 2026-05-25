import { HeartPulse, Banknote, Landmark, Scale } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import CenteredQuote from '../ui/CenteredQuote'
import SectionLabel from '../ui/SectionLabel'
import StarDivider from '../ui/StarDivider'
import ParallaxSection from '../ui/ParallaxSection'
import AdinkraFloat from '../ui/AdinkraFloat'

const PAIN_POINTS = [
  { icon: HeartPulse, titulo: 'Dores Crônicas',        texto: '71% das trancistas relatam dores musculoesqueléticas recorrentes nos ombros, pescoço e costas, causadas pelas horas de trabalho com os braços elevados.', color: 'var(--terracota)' },
  { icon: Banknote,   titulo: 'Falta de Crédito',       texto: 'Sem CNPJ e sem garantias formais, o acesso ao crédito para investir em equipamentos e espaço físico é sistematicamente negado.',                           color: 'var(--ouro)'     },
  { icon: Landmark,   titulo: 'Sem Políticas Públicas', texto: 'O Mapa Afetivo aponta que apenas 3% das trancistas conhecem algum programa público de apoio à sua categoria.',                                              color: 'var(--verde)'    },
  { icon: Scale,      titulo: 'Racismo Estrutural',     texto: 'Discriminação em salões não negros e diferença salarial média de 34% em relação a profissionais de cabelos lisos.',                                         color: 'var(--terracota)' },
]

// SVG adinkra inline for hover overlay
const adinkraBg = `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><circle cx='20' cy='20' r='15' stroke='%231C1C1A' stroke-width='1.5' fill='none'/><line x1='20' y1='5' x2='20' y2='35' stroke='%231C1C1A' stroke-width='1'/><line x1='5' y1='20' x2='35' y2='20' stroke='%231C1C1A' stroke-width='1'/><path d='M20 11L29 20L20 29L11 20Z' stroke='%231C1C1A' stroke-width='1' fill='none'/></svg>")`

// Framer Motion variants for card hover (propagates to children)
const cardV = {
  rest:  { y: 0,  boxShadow: '0 2px 8px rgba(0,0,0,0.04)' },
  hover: { y: -7, boxShadow: '0 20px 50px rgba(0,0,0,0.1)', transition: { type: 'spring', stiffness: 280, damping: 22 } },
}
const patternV = {
  rest:  { opacity: 0 },
  hover: { opacity: 0.065, transition: { duration: 0.3 } },
}
const borderV = {
  rest:  { scaleY: 0 },
  hover: { scaleY: 1, transition: { type: 'spring', stiffness: 350, damping: 28 } },
}
const iconV = {
  rest:  { scale: 1, rotate: 0 },
  hover: { scale: 1.25, rotate: -8, transition: { type: 'spring', stiffness: 400, damping: 18 } },
}

export default function DesafiosRotina() {
  return (
    <section id="desafios" style={{ background: 'var(--bg-secondary)' }}>
      {/* Accent line */}
      <div style={{ height: '3px', background: `linear-gradient(90deg, var(--terracota), var(--ouro), var(--terracota))` }} />

      <div className="section-padding max-w-7xl mx-auto" style={{ position: 'relative' }}>
        <AdinkraFloat count={5} color="var(--terracota)" zIndex={0} />
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
            <motion.div
              key={i}
              variants={cardV}
              initial="rest"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Adinkra texture on hover */}
              <motion.div
                variants={patternV}
                style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: adinkraBg,
                  backgroundSize: '40px 40px',
                  pointerEvents: 'none',
                }}
              />
              {/* Colored left border that grows up from bottom on hover */}
              <motion.div
                variants={borderV}
                style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  width: '4px',
                  background: item.color,
                  transformOrigin: 'bottom',
                }}
              />
              <div className="flex items-start gap-4 mb-3" style={{ position: 'relative' }}>
                <motion.span
                  variants={iconV}
                  style={{ flexShrink: 0, marginTop: '3px', color: item.color, display: 'inline-block' }}
                >
                  <item.icon size={22} strokeWidth={1.5} />
                </motion.span>
                <h3
                  className="font-display font-bold uppercase leading-tight"
                  style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}
                >
                  {item.titulo}
                </h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65, position: 'relative' }}>
                {item.texto}
              </p>
            </motion.div>
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
