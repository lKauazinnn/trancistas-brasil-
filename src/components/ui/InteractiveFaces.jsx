import { useRef, useEffect, useCallback } from 'react'

const LERP = 0.07

// Scattered editorial layout — each photo at a specific depth for parallax
const FACES = [
  {
    src: '/media/photos/Cópia de IMG_3732.jpg',
    top: '4%', left: '3%', width: '52%',
    depth: 22, rotate: -2.5, z: 1, aspect: '3 / 4',
    label: 'Arte Ancestral',
  },
  {
    src: '/media/photos/_MG_0353.jpg',
    top: '2%', left: '52%', width: '42%',
    depth: 55, rotate: 2, z: 3, aspect: '4 / 5',
    label: null,
  },
  {
    src: '/media/photos/_MG_0317.jpg',
    top: '40%', left: '1%', width: '40%',
    depth: 16, rotate: 1.8, z: 2, aspect: '5 / 6',
    label: null,
  },
  {
    src: '/media/photos/_MG_0346.jpg',
    top: '32%', left: '37%', width: '58%',
    depth: 42, rotate: -1.5, z: 4, aspect: '3 / 4',
    label: 'Resistência',
  },
  {
    src: '/media/photos/_MG_0527.jpg',
    top: '72%', left: '10%', width: '46%',
    depth: 34, rotate: 1.2, z: 2, aspect: '4 / 3',
    label: null,
  },
]

export default function InteractiveFaces() {
  const photoRefs = useRef([])
  const curr = useRef({ x: 0, y: 0 })
  const targ = useRef({ x: 0, y: 0 })
  const raf  = useRef(null)

  const loop = useCallback(() => {
    curr.current.x += (targ.current.x - curr.current.x) * LERP
    curr.current.y += (targ.current.y - curr.current.y) * LERP

    photoRefs.current.forEach((el, i) => {
      if (!el) return
      const { depth, rotate } = FACES[i]
      const tx = curr.current.x * depth
      const ty = curr.current.y * depth
      el.style.transform = `translate(${tx}px, ${ty}px) rotate(${rotate}deg)`
    })

    raf.current = requestAnimationFrame(loop)
  }, [])

  useEffect(() => {
    const onMove = (e) => {
      targ.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [loop])

  return (
    <div
      style={{
        position: 'relative',
        width: '100%', height: '100%',
        overflow: 'hidden',
      }}
      aria-hidden
    >
      {FACES.map((face, i) => (
        <div
          key={i}
          ref={el => { photoRefs.current[i] = el }}
          style={{
            position: 'absolute',
            top: face.top,
            left: face.left,
            width: face.width,
            zIndex: face.z,
            willChange: 'transform',
            transform: `rotate(${face.rotate}deg)`,
          }}
        >
          {/* Frame */}
          <div
            style={{
              overflow: 'hidden',
              aspectRatio: face.aspect,
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 12px 48px rgba(0,0,0,0.22), 0 2px 8px rgba(0,0,0,0.14)',
              position: 'relative',
              background: 'var(--bg-surface)',
            }}
          >
            <img
              src={face.src}
              alt=""
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              draggable={false}
              loading="lazy"
            />
            {/* Subtle tint */}
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,5,9,0.06)', pointerEvents: 'none' }} />
          </div>

          {/* Editorial label on select photos */}
          {face.label && (
            <div style={{
              marginTop: '6px',
              display: 'flex', alignItems: 'center', gap: '6px',
            }}>
              <span style={{ width: '16px', height: '1px', background: 'var(--terracota)', flexShrink: 0 }} />
              <span style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.52rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}>
                {face.label}
              </span>
            </div>
          )}
        </div>
      ))}

      {/* Corner badge */}
      <div style={{
        position: 'absolute', bottom: '16px', right: '16px', zIndex: 10,
        background: 'var(--terracota)',
        color: '#FAFAF5',
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '0.5rem',
        fontWeight: 700,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        padding: '5px 10px',
      }}>
        Mova o cursor
      </div>
    </div>
  )
}
