import { createContext, useContext, useState } from 'react'

const SimulacaoContext = createContext(null)

export const PERGUNTAS = [
  { id: 1, pergunta: 'Você possui CNPJ ativo?',                                    opcoes: ['Sim', 'Não'], tipo: 'binario' },
  { id: 2, pergunta: 'Consegue comprovar renda fixa mensal?',                      opcoes: ['Sim', 'Não'], tipo: 'binario' },
  { id: 3, pergunta: 'Você possui conta PJ ou movimentação bancária regular?',     opcoes: ['Sim', 'Não'], tipo: 'binario' },
  { id: 4, pergunta: 'Há quanto tempo trabalha formalmente na área?',              opcoes: ['Menos de 1 ano', 'De 1 a 3 anos', 'Mais de 3 anos'], tipo: 'multipla' },
  { id: 5, pergunta: 'Já declarou imposto de renda ou MEI?',                       opcoes: ['Sim', 'Não'], tipo: 'binario' },
]

export function SimulacaoProvider({ children }) {
  const [respostas, setRespostas] = useState({}) // { 1: 'Não', 2: 'Sim', ... }
  const [iniciou, setIniciou] = useState(false)

  function responder(perguntaId, opcao) {
    if (!iniciou) setIniciou(true)
    setRespostas(prev => ({ ...prev, [perguntaId]: opcao }))
  }

  const totalRespondidas = Object.keys(respostas).length
  const completo = totalRespondidas === PERGUNTAS.length

  return (
    <SimulacaoContext.Provider value={{ respostas, responder, iniciou, completo, totalRespondidas }}>
      {children}
    </SimulacaoContext.Provider>
  )
}

export function useSimulacao() {
  return useContext(SimulacaoContext)
}
