import { Globe, Link2, Scissors, Megaphone, Smartphone, FileText } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import ClipReveal from '../ui/ClipReveal'
import CenteredQuote from '../ui/CenteredQuote'
import AfroPattern from '../ui/AfroPattern'
import SectionLabel from '../ui/SectionLabel'
import StatCard from '../ui/StatCard'
import TickerBand from '../ui/TickerBand'
import StarDivider from '../ui/StarDivider'
import ParallaxSection from '../ui/ParallaxSection'
import TiltCard from '../ui/TiltCard'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { MARKET_STATS, TIMELINE_EVENTS } from '../../data/content'

const ICON_MAP = { Globe, Link2, Scissors, Megaphone, Smartphone, FileText }

const FASE_COLORS  = { africa: '#D4A843', brasil: '#C0522A', resistencia: '#B8622A' }
const FASE_LABELS  = { africa: 'África', brasil: 'Brasil Colonial', resistencia: 'Resistência Atual' }

export default function MercadoCredito() {
  return (
    <section id="mercado" style={{ background: 'var(--bg-primary)' }}>
      <TickerBand />

      <div className="section-padding max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal variant="fade-up">
          <SectionLabel number={3} text="Mercado, Crédito e Dados" />
        </ScrollReveal>

        <ClipReveal delay={60}>
          <h2
            className="font-display font-black uppercase leading-none mb-4"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)', color: 'var(--text-primary)' }}
          >
            UM MERCADO<br />
            <span className="wood-text-verde">BILIONÁRIO</span><br />
            SEM CRÉDITO
          </h2>
        </ClipReveal>

        <ScrollReveal variant="fade-up" delay={140}>
          <div className="max-w-2xl mb-12">
            <div style={{ height: '1px', background: 'var(--border)', marginBottom: '1.5rem' }} />
            <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)' }}>
              O Brasil tem o maior mercado de beleza negra da América Latina. Apesar disso,
              a maioria das profissionais ainda opera na informalidade — sem CNPJ, sem acesso
              a crédito, sem proteção trabalhista.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {MARKET_STATS.map((stat, i) => (
            <TiltCard key={i} intensity={5}>
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix || ''}
                label={stat.label}
                delay={i * 70}
              />
            </TiltCard>
          ))}
        </div>

        <StarDivider className="mb-14" />

        {/* Infográfico Crédito */}
        <ScrollReveal variant="fade-up">
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              marginBottom: '4rem',
            }}
          >
            <p className="label-tag mb-4">Infográfico · Acesso ao Crédito</p>
            <h3
              className="font-display font-black uppercase mb-8"
              style={{ fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', color: 'var(--text-primary)' }}
            >
              Por que o crédito formal é tão distante?
            </h3>
            <div className="space-y-5">
              {[
                { label: 'Falta de comprovação de renda formal', pct: 85 },
                { label: 'Ausência de CNPJ ou registro profissional', pct: 72 },
                { label: 'Histórico de crédito insuficiente', pct: 68 },
                { label: 'Burocracia inacessível dos bancos', pct: 61 },
                { label: 'Desconhecimento de linhas disponíveis', pct: 74 },
              ].map((item, i) => (
                <ScrollReveal key={i} variant="fade-up" delay={i * 60}>
                  <BarItem {...item} />
                </ScrollReveal>
              ))}
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '1.5rem', letterSpacing: '0.05em' }}>
              * Pesquisa PI 2025 — 340 trancistas em 8 estados
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Parallax break before timeline */}
      <ParallaxSection
        src="/media/photos/IMG_0727.jpg"
        alt="Trança"
        height="45vh"
        overlay={0.55}
        objectPosition="center 40%"
      >
        <div className="flex items-center justify-center h-full">
          <p
            className="font-display font-black uppercase"
            style={{ fontSize: 'clamp(1.4rem, 4vw, 3rem)', color: '#FAFAF5', letterSpacing: '0.08em', textAlign: 'center' }}
          >
            África → Brasil → Resistência
          </p>
        </div>
      </ParallaxSection>

      {/* Timeline */}
      <div className="section-padding max-w-7xl mx-auto" style={{ position: 'relative' }}>
        <AfroPattern variant="mudcloth" color="#2D6A4F" opacity={0.06} />
        <ScrollReveal variant="fade-up">
          <p className="label-tag mb-3">Linha do Tempo</p>
          <h3
            className="font-display font-black uppercase mb-12"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', color: 'var(--text-primary)' }}
          >
            A jornada de uma profissão
          </h3>
        </ScrollReveal>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {TIMELINE_EVENTS.map((event, i) => (
            <motion.div
              key={i}
              variants={{
                hidden:   { opacity: 0, x: -24 },
                visible:  { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 260, damping: 24 } },
              }}
            >
              <TimelineItem event={event} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CenteredQuote
        quote="Banco nenhum me deu crédito na primeira vez. Tive que começar com R$200 emprestados da minha mãe."
        author="Beatriz Lima"
        role="Trancista e empreendedora"
        dark
        accentColor="var(--verde)"
      />
    </section>
  )
}

function BarItem({ label, pct }) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 })
  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', color: 'var(--text-primary)' }}>{label}</span>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.85rem', fontWeight: 600,
          color: 'var(--terracota)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.4s ease 0.8s',
        }}>{pct}%</span>
      </div>
      <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: isVisible ? `${pct}%` : '0%',
          background: `linear-gradient(90deg, var(--terracota), var(--ouro))`,
          borderRadius: '2px',
          transition: isVisible ? `width 1.4s cubic-bezier(0.25,0.46,0.45,0.94) 0.25s` : 'none',
        }} />
      </div>
    </div>
  )
}

function TimelineItem({ event, index }) {
  const color = FASE_COLORS[event.fase]
  const label = FASE_LABELS[event.fase]
  const IconComponent = ICON_MAP[event.icon]

  return (
    <div
      className="flex gap-5 md:gap-8"
      style={{ paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}
    >
      {/* Icon node */}
      <div className="flex flex-col items-center flex-shrink-0" style={{ width: '48px' }}>
        <div
          style={{
            width: '40px', height: '40px',
            borderRadius: '50%',
            border: `2px solid ${color}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--bg-surface)',
            flexShrink: 0,
            color,
          }}
        >
          {IconComponent && <IconComponent size={17} strokeWidth={1.5} />}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingTop: '0.5rem' }}>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color,
              background: `${color}18`,
              padding: '3px 10px',
            }}
          >
            {label}
          </span>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            {event.periodo}
          </span>
        </div>
        <h4
          className="font-display font-bold uppercase mb-1"
          style={{ fontSize: '1rem', color: 'var(--text-primary)' }}
        >
          {event.titulo}
        </h4>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          {event.descricao}
        </p>
      </div>
    </div>
  )
}
