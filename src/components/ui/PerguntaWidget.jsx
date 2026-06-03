import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useSimulacao, PERGUNTAS } from '../../context/SimulacaoContext'

export default function PerguntaWidget({ perguntaId }) {
  const ctx = useSimulacao()
  if (!ctx) return null

  const { respostas, responder, totalRespondidas } = ctx
  const pergunta = PERGUNTAS.find(p => p.id === perguntaId)
  const resposta = respostas[perguntaId]
  const respondida = resposta !== undefined

  // Pergunta 1 sempre aparece. As seguintes aparecem depois que a anterior é respondida.
  const anteriorRespondida = perguntaId === 1 || respostas[perguntaId - 1] !== undefined
  if (!anteriorRespondida) return null

  return (
    <div style={{ margin: '2.5rem 0', maxWidth: '640px' }}>
      <div
        style={{
          background: 'var(--bg-surface)',
          border: respondida ? '1px solid rgba(212,168,67,0.4)' : '1px solid var(--border)',
          borderLeft: `4px solid ${respondida ? 'var(--ouro)' : 'var(--terracota)'}`,
          padding: 'clamp(1.25rem, 3vw, 2rem)',
          position: 'relative',
          transition: 'border-color 0.4s',
        }}
      >
        {/* Badge */}
        <div
          style={{
            position: 'absolute',
            top: '-1px',
            right: '1.5rem',
            background: respondida ? 'var(--ouro)' : 'var(--terracota)',
            color: '#0a0a10',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.55rem',
            fontWeight: 800,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '3px 10px',
            transition: 'background 0.4s',
          }}
        >
          {respondida ? '✓ Respondida' : `Formulário de Crédito · ${perguntaId}/5`}
        </div>

        <p
          style={{
            fontFamily: "'Barlow Condensed', 'Barlow', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1rem, 2vw, 1.4rem)',
            textTransform: 'uppercase',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
            marginTop: '0.5rem',
            letterSpacing: '0.02em',
          }}
        >
          {pergunta.pergunta}
        </p>

        <AnimatePresence mode="wait">
          {!respondida ? (
            <motion.div
              key="opcoes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}
            >
              {pergunta.opcoes.map(opcao => (
                <button
                  key={opcao}
                  onClick={() => responder(perguntaId, opcao)}
                  style={{
                    padding: '10px 24px',
                    border: '1px solid var(--border)',
                    background: 'transparent',
                    color: 'var(--text-primary)',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--terracota)'
                    e.currentTarget.style.color = 'var(--terracota)'
                    e.currentTarget.style.background = 'rgba(192,82,42,0.06)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-primary)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {opcao}
                </button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="respondida"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <CheckCircle size={18} color="var(--ouro)" strokeWidth={1.5} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', color: 'var(--ouro)', fontWeight: 600 }}>
                {resposta}
              </span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', color: 'var(--text-muted)', marginLeft: '4px' }}>
                · {totalRespondidas}/5 perguntas
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
