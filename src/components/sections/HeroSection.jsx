import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      {/* ══════════════════════════════════════════
          CAPA — imagem de fundo full-screen
      ══════════════════════════════════════════ */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100svh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Foto de fundo */}
        <img
          src="/media/photos/_MG_0484.jpg (1).jpeg"
          alt="Trancista em atendimento"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 30%',
            filter: 'brightness(0.55)',
          }}
        />

        {/* Gradiente de leitura — mais escuro em cima e embaixo */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.72) 100%)',
          }}
        />

        {/* Conteúdo central */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'center',
            padding: '0 clamp(1.25rem, 6vw, 4rem)',
            maxWidth: '900px',
            width: '100%',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s',
          }}
        >
          {/* Título principal — duas linhas alinhadas à esquerda */}
          <h1
            style={{
              fontFamily: "'Syne', 'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              marginBottom: '2rem',
              textShadow: '0 2px 30px rgba(0,0,0,0.4)',
            }}
          >
            <span style={{ display: 'block' }}>Trançando</span>
            <span style={{ display: 'block' }}>caminhos</span>
          </h1>

          {/* Linha decorativa */}
          <div
            style={{
              width: '60px',
              height: '3px',
              background: 'var(--terracota)',
              margin: '0 auto 2rem',
              borderRadius: '2px',
            }}
          />

          {/* Subtítulo / Sutiã */}
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.05rem, 2.2vw, 1.45rem)',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.92)',
              fontWeight: 400,
              maxWidth: '560px',
              margin: '0 auto',
              textShadow: '0 1px 12px rgba(0,0,0,0.5)',
            }}
          >
            Da rota de fuga à independência financeira, trancistas
            sustentam lares e movem a economia invisibilizada pela
            falta de políticas públicas e crédito.
          </p>

        </div>

      </section>

      {/* ══════════════════════════════════════════
          ABERTURA DA MATÉRIA — logo abaixo da capa
      ══════════════════════════════════════════ */}
      <div
        style={{
          background: '#0a0a0f',
          borderTop: '4px solid var(--terracota)',
        }}
      >
        <div
          style={{
            maxWidth: '720px',
            margin: '0 auto',
            padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 5vw, 2rem)',
          }}
        >
          {/* Primeiro parágrafo — lide em destaque */}
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: 'clamp(1.35rem, 2.2vw, 1.55rem)',
              lineHeight: 2,
              color: '#FFFFFF',
              marginBottom: '2rem',
            }}
          >
            As trancistas no Distrito Federal carregam em si o conhecimento ancestral
            herdado de outras mulheres há 3.500 a.C. Inteligentemente, essa tecnologia
            se adaptou a cada desafio histórico apresentado ao povo negro. Hoje, meninas
            e mulheres negras buscam independência e tornam-se empreendedoras através do
            ofício milenar, mas foi apenas em junho de 2025 que a profissão começou a
            constar oficialmente na Classificação Brasileira de Ocupações.
          </p>
          <p
            style={{
              fontFamily: "'Lora', Georgia, serif",
              fontSize: 'clamp(1.2rem, 1.8vw, 1.35rem)',
              lineHeight: 2,
              color: '#FFFFFF',
              marginBottom: '2rem',
            }}
          >
            O reconhecimento tardio também é demonstrado pelo raso aprofundamento de
            pesquisas e dados sobre a profissão de trancistas, gerando consequências como
            a dificuldade de acesso a créditos, políticas públicas que entendam as
            individualidades dessa profissão e possam garantir uma carreira mais longeva
            e saudável. Mesmo com pouco apoio, as trancistas seguem trabalhando em sonhos
            abastecidos pelos esforços de suas próprias mãos, reconstruindo autoestima,
            sustentando suas casas e gerando empregos. Segundo o Sebrae, mulheres negras
            movimentam R$700 bilhões em negócios anuais.
          </p>
        </div>
      </div>
    </>
  )
}
