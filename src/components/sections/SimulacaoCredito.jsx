import { motion, AnimatePresence } from 'framer-motion'
import { XCircle, AlertTriangle, CheckCircle } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import SectionLabel from '../ui/SectionLabel'
import StarDivider from '../ui/StarDivider'
import PerguntaWidget from '../ui/PerguntaWidget'
import { useSimulacao } from '../../context/SimulacaoContext'

const MOTIVOS_NEGATIVA = [
  'Baixa comprovação de renda',
  'Atividade informal',
  'Ausência de garantias financeiras',
  'Movimentação bancária inconsistente',
  'Profissão recém regulamentada',
]

const CONQUISTAS = [
  {
    data: 'Mais de 3.500 a.C.',
    titulo: 'Raízes Ancestrais',
    descricao: 'Registros históricos apontam o uso das tranças em povos africanos como símbolo de identidade, ancestralidade e pertencimento. Por séculos, o ofício resistiu sem reconhecimento oficial.',
    cor: '#D4A843',
    destaque: false,
  },
  {
    data: 'Junho de 2025',
    titulo: 'Reconhecimento Oficial — CBO',
    descricao: 'O Ministério do Trabalho e Emprego inclui oficialmente a profissão de trancista na Classificação Brasileira de Ocupações (CBO).',
    cor: '#C0522A',
    destaque: true,
  },
  {
    data: 'Novembro de 2025',
    titulo: '1º Seminário Nacional das Trancistas',
    descricao: 'O Ministério do Trabalho realiza, em Brasília, o primeiro Seminário Nacional das Trancistas.',
    cor: '#C0522A',
    destaque: true,
  },
]

const AINDA_LUTAM = [
  'Acesso a crédito',
  'Políticas públicas',
  'Sindicatos',
  'Melhores condições de trabalho',
  'Reconhecimento social',
  'Apoio à saúde física e mental',
]

export default function SimulacaoCredito() {
  const { completo, totalRespondidas } = useSimulacao()

  return (
    <div id="simulacao" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>

      <div className="section-padding max-w-7xl mx-auto">

        <ScrollReveal variant="fade-up">
          <SectionLabel text="Infográfico · Acesso a crédito" />
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={100}>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2.5rem' }}>
            Nesta simulação, você assume o perfil de uma trancista autônoma pedindo
            <strong style={{ color: 'var(--text-primary)' }}> R$ 8 mil </strong>
            para estruturar atendimento. O formulário mostra por que tantas profissionais,
            mesmo com demanda alta, ficam fora do crédito formal.
          </p>
        </ScrollReveal>

        <div style={{ maxWidth: '760px', marginBottom: '2.5rem' }}>
          <PerguntaWidget perguntaId={1} />
          <PerguntaWidget perguntaId={2} />
          <PerguntaWidget perguntaId={3} />
          <PerguntaWidget perguntaId={4} />
          <PerguntaWidget perguntaId={5} />
        </div>

        {/* Indicador de progresso antes de completar */}
        <AnimatePresence mode="wait">
          {!completo ? (
            <motion.div
              key="aguardando"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border)',
                borderLeft: '4px solid var(--ouro)',
                padding: 'clamp(1.25rem, 3vw, 2rem)',
                maxWidth: '560px',
                marginBottom: '3rem',
              }}
            >
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ouro)',
                  marginBottom: '0.75rem',
                }}
              >
                Aguardando respostas
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                Você respondeu <strong style={{ color: 'var(--text-primary)' }}>{totalRespondidas} de 5</strong> perguntas.
                Continue no formulário acima para ver o resultado final.
              </p>
              {/* Barra de progresso */}
              <div style={{ marginTop: '1rem', height: '3px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                <motion.div
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--terracota), var(--ouro))',
                    borderRadius: '2px',
                  }}
                  animate={{ width: `${(totalRespondidas / 5) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="resultado"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* Card negativa */}
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderLeft: '4px solid var(--terracota)',
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                  maxWidth: '640px',
                  marginBottom: '3rem',
                  position: 'relative',
                }}
              >
                {/* Carimbo NEGADO */}
                <motion.div
                  initial={{ opacity: 0, rotate: -8, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: -8, scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 280, damping: 20 }}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1.5rem',
                    border: '3px solid var(--terracota)',
                    padding: '5px 14px',
                    pointerEvents: 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: '1.2rem',
                      fontWeight: 900,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--terracota)',
                    }}
                  >
                    NEGADO
                  </span>
                </motion.div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
                  <XCircle size={26} color="var(--terracota)" strokeWidth={1.5} />
                  <h3
                    className="font-display font-black uppercase"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', color: 'var(--text-primary)' }}
                  >
                    Crédito Negado
                  </h3>
                </div>

                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Pedido de R$ 8.000 reprovado. Motivos apresentados pela instituição financeira:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {MOTIVOS_NEGATIVA.map((motivo, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + i * 0.1 }}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}
                    >
                      <AlertTriangle size={14} color="var(--terracota)" strokeWidth={1.5} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.83rem', color: 'var(--text-primary)', textTransform: 'capitalize' }}>
                        {motivo}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Transição para conquistas */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '3rem', fontStyle: 'italic' }}
              >
                Mas a história não para aqui…
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  )
}


