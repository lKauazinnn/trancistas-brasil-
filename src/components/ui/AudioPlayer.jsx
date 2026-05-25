import { useRef, useState, useEffect } from 'react'

export default function AudioPlayer({ src, title, guest, episode }) {
  const audioRef = useRef(null)
  const [playing, setPlaying]   = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent]   = useState(0)

  const fmt = (s) => {
    if (!s || isNaN(s)) return '0:00'
    return `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`
  }

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
    a.addEventListener('loadedmetadata', () => setDuration(a.duration))
    a.addEventListener('ended', () => setPlaying(false))
    a.addEventListener('timeupdate', () => {
      setCurrent(a.currentTime)
      setProgress((a.currentTime / a.duration) * 100 || 0)
    })
  }, [])

  const bars = Array.from({ length: 48 }, (_, i) => ({
    h: Math.sin(i * 0.45 + 1) * 40 + 50 + (i % 3) * 8,
    active: (i / 48) * 100 < progress,
  }))

  return (
    <div
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        padding: 'clamp(1.25rem, 3vw, 2rem)',
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          {episode && <p className="label-tag mb-1.5">{episode}</p>}
          <h3
            className="font-display font-bold uppercase leading-tight"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', color: 'var(--text-primary)' }}
          >
            {title}
          </h3>
          {guest && (
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              {guest}
            </p>
          )}
        </div>
        <div
          style={{
            width: '44px', height: '44px', borderRadius: '50%',
            border: '1px solid rgba(192,82,42,0.4)',
            background: 'rgba(192,82,42,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, marginLeft: '1rem',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--terracota)" strokeWidth="2">
            <path strokeLinecap="round" d="M12 3v9.28a4 4 0 1 0 2 0V3h-2zm0 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
          </svg>
        </div>
      </div>

      {/* Waveform */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '48px', marginBottom: '1rem' }}>
        {bars.map((bar, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: `${Math.max(12, bar.h)}%`,
              borderRadius: '1px',
              background: bar.active ? 'var(--terracota)' : 'var(--border)',
              transition: 'background 0.1s',
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          style={{
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'var(--terracota)',
            border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
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
            aria-label="Progresso"
          />
          <div className="flex justify-between">
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', color: 'var(--text-muted)' }}>{fmt(current)}</span>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', color: 'var(--text-muted)' }}>{fmt(duration)}</span>
          </div>
        </div>
      </div>

      <audio ref={audioRef} src={src} />

      {!src && (
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '1rem', opacity: 0.6 }}>
          Arquivo de áudio em produção
        </p>
      )}
    </div>
  )
}
