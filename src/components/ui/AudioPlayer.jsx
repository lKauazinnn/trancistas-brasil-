import { useRef, useState, useEffect } from 'react'

const BAR_PALETTE = [
  '#C0522A', '#D4A030', '#2D6A4F',
  '#E07038', '#F0C040', '#3D8A65',
  '#B83228', '#D4A030', '#C0522A',
]

const fmt = (s) => {
  if (!s || isNaN(s)) return '0:00'
  return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
}

export default function AudioPlayer({ src, title, guest, episode, cover = '/media/photos/hero-grupo.jpg' }) {
  const audioRef = useRef(null)
  const [playing, setPlaying]   = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent]   = useState(0)

  const toggle = () => {
    const a = audioRef.current
    if (!a) return
    if (playing) { a.pause(); setPlaying(false) }
    else { a.play(); setPlaying(true) }
  }

  const seek = (e) => {
    const a = audioRef.current
    if (!a) return
    a.currentTime = (e.target.value / 100) * a.duration
  }

  useEffect(() => {
    const a = audioRef.current
    if (!a) return
    const onMeta = () => setDuration(a.duration)
    const onEnd  = () => setPlaying(false)
    const onTime = () => {
      setCurrent(a.currentTime)
      setProgress((a.currentTime / a.duration) * 100 || 0)
    }
    a.addEventListener('loadedmetadata', onMeta)
    a.addEventListener('ended', onEnd)
    a.addEventListener('timeupdate', onTime)
    return () => {
      a.removeEventListener('loadedmetadata', onMeta)
      a.removeEventListener('ended', onEnd)
      a.removeEventListener('timeupdate', onTime)
    }
  }, [])

  const bars = Array.from({ length: 54 }, (_, i) => ({
    h: Math.abs(Math.sin(i * 0.44 + 0.8) * 42 + 46 + (i % 7) * 3.2),
    active: (i / 54) * 100 < progress,
    color: BAR_PALETTE[i % BAR_PALETTE.length],
  }))

  return (
    <div
      style={{
        background: 'linear-gradient(155deg, #110A06 0%, #1A0E08 45%, #0C0A12 100%)',
        border: '1px solid rgba(192,82,42,0.28)',
        borderRadius: '18px',
        overflow: 'hidden',
        boxShadow: '0 28px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,160,48,0.14)',
      }}
    >
      {/* Faixa kente no topo */}
      <div
        style={{
          height: '6px',
          background: 'repeating-linear-gradient(90deg, #C0522A 0px, #C0522A 22px, #D4A030 22px, #D4A030 44px, #2D6A4F 44px, #2D6A4F 66px, #B83228 66px, #B83228 88px, #D4A030 88px, #D4A030 110px)',
          opacity: 0.95,
        }}
      />

      <div style={{ padding: 'clamp(1rem, 3vw, 1.6rem)' }}>

        {/* Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.1rem' }}>
          <span
            style={{
              display: 'inline-block',
              width: '9px', height: '9px', borderRadius: '50%',
              background: 'var(--terracota)',
              boxShadow: '0 0 10px rgba(192,82,42,0.9)',
            }}
          />
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.58rem', letterSpacing: '0.24em',
              textTransform: 'uppercase', color: 'var(--terracota)',
              fontWeight: 700,
            }}
          >
            Documentário sonoro
          </p>
        </div>

        {/* Cabeçalho: capa + título */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.3rem' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <img
              src={cover}
              alt="Capa do episódio"
              style={{
                width: '76px', height: '76px', objectFit: 'cover',
                borderRadius: '10px',
                border: '2px solid rgba(212,160,48,0.4)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
              }}
            />
            {/* Sobreposição de cor cultural */}
            <div
              style={{
                position: 'absolute', inset: 0, borderRadius: '10px',
                background: 'linear-gradient(140deg, rgba(192,82,42,0.22), transparent 60%)',
                pointerEvents: 'none',
              }}
            />
            {/* Detalhe kente na capa */}
            <div
              style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '5px', borderRadius: '0 0 8px 8px',
                background: 'repeating-linear-gradient(90deg, #C0522A 0px, #C0522A 8px, #D4A030 8px, #D4A030 16px, #2D6A4F 16px, #2D6A4F 24px)',
              }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            {episode && (
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.58rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: 'var(--ouro)',
                  marginBottom: '5px', fontWeight: 600,
                }}
              >
                {episode}
              </p>
            )}
            <h3
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 900, fontSize: 'clamp(0.88rem, 2vw, 1.18rem)',
                color: '#F5EFE0', textTransform: 'uppercase',
                lineHeight: 1.18, letterSpacing: '-0.01em',
              }}
            >
              {title}
            </h3>
            {guest && (
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.72rem', color: 'rgba(245,239,224,0.6)',
                  marginTop: '5px', lineHeight: 1.4,
                }}
              >
                {guest}
              </p>
            )}
          </div>
        </div>

        {/* Forma de onda */}
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: '2px',
            height: '56px', marginBottom: '1.2rem',
            padding: '4px 0',
          }}
        >
          {bars.map((bar, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${Math.max(16, bar.h)}%`,
                borderRadius: '1.5px',
                background: bar.active
                  ? bar.color
                  : 'rgba(245,239,224,0.10)',
                transition: 'background 0.14s ease',
                boxShadow: bar.active ? `0 0 4px ${bar.color}60` : 'none',
              }}
            />
          ))}
        </div>

        {/* Controles */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={toggle}
            style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #C0522A 0%, #D4622C 50%, #E07038 100%)',
              border: 'none', flexShrink: 0, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 18px rgba(192,82,42,0.55)',
              transition: 'transform 0.18s ease, box-shadow 0.18s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.boxShadow = '0 6px 28px rgba(192,82,42,0.75)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(192,82,42,0.55)'
            }}
            aria-label={playing ? 'Pausar' : 'Reproduzir'}
          >
            {playing
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="#FAFAF5"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="#FAFAF5" style={{ transform: 'translateX(1px)' }}><path d="M8 5v14l11-7z"/></svg>
            }
          </button>

          <div style={{ flex: 1 }}>
            <input
              type="range" min="0" max="100" value={progress}
              onChange={seek}
              style={{ width: '100%', marginBottom: '6px', cursor: 'pointer' }}
              aria-label="Progresso do áudio"
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.68rem', color: 'rgba(245,239,224,0.5)' }}>{fmt(current)}</span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.68rem', color: 'rgba(245,239,224,0.5)' }}>{fmt(duration)}</span>
            </div>
          </div>
        </div>

        <audio ref={audioRef} src={src} preload="metadata" />

        {!src && (
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.68rem', color: 'rgba(245,239,224,0.3)',
              textAlign: 'center', marginTop: '1rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}
          >
            Áudio em produção
          </p>
        )}
      </div>
    </div>
  )
}
