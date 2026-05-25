import { useRef, useState } from 'react'

export default function VideoPlayer({ src, poster, title, className = '' }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) {
      v.pause()
      setPlaying(false)
    } else {
      v.play()
      setPlaying(true)
    }
  }

  return (
    <div className={`relative group overflow-hidden bg-surface border border-dim/30 ${className}`}>
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-6 h-6 border-t border-l border-terracota z-10 pointer-events-none" />
      <span className="absolute top-0 right-0 w-6 h-6 border-t border-r border-terracota z-10 pointer-events-none" />
      <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-terracota z-10 pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-terracota z-10 pointer-events-none" />

      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full"
        onLoadedData={() => setLoaded(true)}
        onEnded={() => setPlaying(false)}
        playsInline
      />

      {/* Play overlay */}
      {!playing && (
        <button
          onClick={toggle}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4
                     bg-void/60 hover:bg-void/40 transition-colors duration-300 cursor-pointer group/btn"
          aria-label="Reproduzir vídeo"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-terracota
                          flex items-center justify-center
                          group-hover/btn:bg-terracota group-hover/btn:border-terracota
                          transition-all duration-300">
            <svg className="w-6 h-6 fill-ink translate-x-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          {title && (
            <span className="font-grotesk text-sm tracking-wider text-ink/80 uppercase">
              {title}
            </span>
          )}
        </button>
      )}

      {/* Pause button when playing */}
      {playing && (
        <button
          onClick={toggle}
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-void/60
                     flex items-center justify-center opacity-0 group-hover:opacity-100
                     transition-opacity duration-300 cursor-pointer"
          aria-label="Pausar vídeo"
        >
          <svg className="w-4 h-4 fill-ink" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>
      )}
    </div>
  )
}
