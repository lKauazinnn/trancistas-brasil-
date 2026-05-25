// Kuba-cloth inspired SVG maze pattern — used as section background overlay
// The maze motif references the royal Kuba Kingdom geometric textiles (DRC/Congo)

const TILE_SIZE = 40

// SVG tile encoded for CSS background-image
const svgTile = (color) => {
  const c = color.replace('#', '%23')
  return `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='${TILE_SIZE}' height='${TILE_SIZE}'><path d='M0 10h10V0M0 20h20V0M10 ${TILE_SIZE}V30h30V20M30 ${TILE_SIZE}V10h10' stroke='${c}' stroke-width='2.5' fill='none'/></svg>")`
}

export default function AfroPattern({
  color    = '#C0522A',
  opacity  = 0.07,
  size     = TILE_SIZE,
  position = 'absolute',
  className = '',
}) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        position,
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: svgTile(color),
        backgroundRepeat: 'repeat',
        backgroundSize: `${size}px ${size}px`,
        opacity,
        zIndex: 0,
      }}
    />
  )
}
