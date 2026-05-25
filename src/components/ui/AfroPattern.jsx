// African geometric pattern overlays
// Variants: kuba (maze), mudcloth (X+diamond), adinkra (circle+cross)

const TILE_SIZE = 40

const TILES = {
  kuba: (color, size) => {
    const c = color.replace(/#/g, '%23').replace(/\(/g, '%28').replace(/\)/g, '%29')
    return `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'><path d='M0 ${size/4}h${size/4}V0M0 ${size/2}h${size/2}V0M${size/4} ${size}V${size*3/4}h${size*3/4}V${size/2}M${size*3/4} ${size}V${size/4}h${size/4}' stroke='${c}' stroke-width='2.5' fill='none'/></svg>")`
  },
  mudcloth: (color, size) => {
    const c = color.replace(/#/g, '%23').replace(/\(/g, '%28').replace(/\)/g, '%29')
    const h = size
    const d = h * 0.5
    const r = d * 0.35
    return `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='${h}' height='${h}'><line x1='0' y1='0' x2='${h}' y2='${h}' stroke='${c}' stroke-width='2'/><line x1='${h}' y1='0' x2='0' y2='${h}' stroke='${c}' stroke-width='2'/><path d='M${d} ${d-r}L${d+r} ${d}L${d} ${d+r}L${d-r} ${d}Z' stroke='${c}' stroke-width='1.5' fill='none'/></svg>")`
  },
  adinkra: (color, size) => {
    const c = color.replace(/#/g, '%23').replace(/\(/g, '%28').replace(/\)/g, '%29')
    const h = size
    const cx = h / 2
    const r = h * 0.33
    const ir = r * 0.6
    return `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='${h}' height='${h}'><circle cx='${cx}' cy='${cx}' r='${r}' stroke='${c}' stroke-width='1.5' fill='none'/><line x1='${cx}' y1='${cx-r}' x2='${cx}' y2='${cx+r}' stroke='${c}' stroke-width='1'/><line x1='${cx-r}' y1='${cx}' x2='${cx+r}' y2='${cx}' stroke='${c}' stroke-width='1'/><path d='M${cx} ${cx-ir}L${cx+ir} ${cx}L${cx} ${cx+ir}L${cx-ir} ${cx}Z' stroke='${c}' stroke-width='1' fill='none'/></svg>")`
  },
}

export default function AfroPattern({
  variant  = 'kuba',
  color    = '#C0522A',
  opacity  = 0.07,
  size     = TILE_SIZE,
  position = 'absolute',
  className = '',
}) {
  const tileGen = TILES[variant] || TILES.kuba
  return (
    <div
      aria-hidden
      className={className}
      style={{
        position,
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: tileGen(color, size),
        backgroundRepeat: 'repeat',
        backgroundSize: `${size}px ${size}px`,
        opacity,
        zIndex: 0,
      }}
    />
  )
}
