import { useState, useEffect, useRef } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$&@%'
const PER_CHAR = 58  // ms between resolving each character

/**
 * Scrambles random chars before "resolving" to the final text.
 * finalRender: optional JSX to swap in once scramble completes
 * delay: ms to wait before starting (lets entrance animations play first)
 */
export default function ScrambleText({
  text,
  delay = 0,
  finalRender = null,
  className = '',
  style = {},
}) {
  const [done, setDone] = useState(false)
  const [chars, setChars] = useState(() => text.split('').map(() => CHARS[0]))
  const rafRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true

    const startTime = performance.now() + delay

    const loop = (now) => {
      if (now < startTime) {
        rafRef.current = requestAnimationFrame(loop)
        return
      }

      const elapsed = now - startTime
      const resolved = Math.min(Math.floor(elapsed / PER_CHAR), text.length)

      if (resolved >= text.length) {
        setDone(true)
        return
      }

      setChars(
        text.split('').map((c, i) => {
          if (c === ' ' || c === '\n') return c
          if (i < resolved) return c
          return CHARS[Math.floor(Math.random() * CHARS.length)]
        })
      )

      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, []) // intentionally run once on mount

  if (done && finalRender !== null) return finalRender

  return (
    <span className={className} style={{ fontVariantNumeric: 'tabular-nums', ...style }}>
      {chars.join('')}
    </span>
  )
}
