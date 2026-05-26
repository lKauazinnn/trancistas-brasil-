import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../ui/ScrollReveal'
import SectionLabel from '../ui/SectionLabel'
import ClipReveal from '../ui/ClipReveal'

const VW = 480
const VH = 500

const BRAZIL_D = `M86.8,187.6L84.9,187.8L80.4,192.1L68.7,196.8L66.3,200.3L46.7,199.9L38.7,200.8L39.4,182.4L31.9,188.7L20.7,189.1L19.5,183.7L8.9,182.2L12.0,178.1L8.1,171.2L5.1,169.7L3.3,163.0L0,160.7L2.0,155.4L3.8,151.3L8.8,149.1L8.4,144.1L11.7,138.4L12.6,132.8L25.7,124.7L35.0,123.7L37.2,121.1L46.7,121.8L52.9,86.3L50.4,78.9L45.3,75.2L45.4,66.6L56.1,65.6L53.8,60.4L47.7,60.5L47.7,53.2L67.2,53.1L76.1,47.1L79.4,53.1L79.5,59.6L82.2,58.9L88.4,64.3L96.9,61.4L98.5,65.1L105.8,57.9L110.6,57.0L114.5,50.8L122.4,47.5L122.0,44.9L114.5,44.2L112.5,36.9L113.0,31.9L105.8,24.8L113.2,25.4L115.7,28.1L124.3,27.4L126.9,31.4L129.4,26.7L143.4,23.9L149.9,20.9L154.6,15.8L153.3,12.6L161.4,14.3L159.5,20.9L165.1,22.5L166.8,27.2L162.9,31.9L161.5,42.0L164.4,46.6L164.3,51.7L174.1,58.9L178.7,58.4L180.6,54.7L190.1,53.2L194.6,49.6L198.3,51.7L208.6,51.3L205.9,46.9L208.2,43.8L220.6,45.0L228.4,47.9L233.5,46.3L242.3,48.1L246.0,45.6L258.9,22.0L264.4,28.1L264.2,33.9L268.7,48.4L271.5,47.6L274.0,52.2L277.7,53.4L277.5,61.6L275.7,65.0L276.1,69.1L280.5,68.8L289.3,75.7L295.1,76.0L294.4,78.8L312.0,81.5L315.2,84.3L320.6,83.3L321.8,86.9L325.1,87.5L328.1,88.3L328.1,88.4L328.6,89.3L333.3,89.2L333.3,89.2L333.4,90.0L333.7,90.0L333.7,89.8L339.0,94.2L342.3,101.9L350.5,98.7L360.5,102.6L371.3,104.7L377.0,106.8L392.0,105.8L409.9,116.0L414.0,121.0L424.0,128.9L430.4,131.9L439.0,131.4L444.3,132.7L446.9,136.4L450.3,148.1L451.9,160.5L451.8,165.8L448.2,176.4L433.9,194.9L427.6,198.8L422.9,206.0L415.3,219.4L411.3,223.8L404.2,227.8L405.1,229.7L403.0,243.9L404.7,256.7L401.7,273.6L402.2,280.5L396.0,288.6L395.8,300.3L390.7,308.0L386.8,316.8L383.9,319.1L381.2,324.8L381.0,333.1L372.7,337.2L370.4,343.2L368.3,345.4L357.0,345.8L354.8,344.3L355.5,344.7L339.1,346.8L340.1,349.7L337.7,350.6L324.1,355.6L316.0,359.7L304.3,368.6L298.7,375.2L293.0,383.8L292,392.7L293.6,400.8L293.3,408.5L290.5,417.9L280.1,427.4L273.2,442.5L267.9,451.2L252.8,465.2L253.0,460.8L259.9,457.1L268.1,447.3L268.6,441.0L264.1,439.8L263.4,439.9L263.6,442.7L261.8,446.4L258.0,453.3L253.2,457.5L250.2,468.2L244.5,481.2L237.9,487.3L237.2,479.1L240.4,474.8L245.0,475.1L246.5,465.3L241.3,472.3L234.7,468.5L233.6,464.4L223.9,455.9L216.3,453.3L212.4,447.6L207.4,450.9L207.3,446.9L198.2,437.8L193.7,440.2L188.6,438.7L192.0,436.4L202.8,424.0L210.1,413.3L228.5,400.4L232.5,399.2L234.7,387.3L231.9,379.2L223.8,378.8L227.6,363.1L227.3,359.5L222.9,356.2L214.0,357.5L211.9,341.3L209.2,337.0L202.9,334.5L197.8,337.3L184.5,334.6L186.6,320.8L182.5,310.9L186.1,308.4L182.9,305.8L186.9,296.9L189.6,287.3L187.3,279.1L179.9,274.5L179.5,264.1L159.4,263.4L158.6,253.9L154.8,249.5L158.5,249.4L156.1,240.0L156.9,236.0L153.2,232.6L150,230.4L140.1,230.9L136.2,225.8L129.1,224.4L126.0,220.7L117.7,217.7L110.4,217.8L100.7,209.2L100.7,200.6L98.7,194.7L100.3,187.5L94.2,186.2Z`

const PHOTOS = [
  '/media/photos/_MG_0353.jpg',
  '/media/photos/Cópia de IMG_3732.jpg',
  '/media/photos/_MG_0317.jpg',
  '/media/photos/_MG_0346.jpg',
  '/media/photos/IMG_0592.jpg',
  '/media/photos/IMG_0727.jpg',
  '/media/photos/_MG_0527.jpg',
  '/media/photos/IMG_0558.jpg',
  '/media/photos/_MG_0424.jpg',
  '/media/photos/Cópia de IMG_3844.jpg',
  '/media/photos/_MG_0370.jpg',
  '/media/photos/IMG_0568.jpg',
  '/media/photos/IMG_0626.jpg',
  '/media/photos/IMG_0635.jpg',
  '/media/photos/IMG_0731.jpg',
  '/media/photos/IMG_3872.jpg',
  '/media/photos/IMG_3915.jpg',
  '/media/photos/_MG_0319.jpg',
  '/media/photos/_MG_0329.jpg',
  '/media/photos/_MG_0398.jpg',
  '/media/photos/_MG_0462.jpg',
  '/media/photos/_MG_0467.jpg',
  '/media/photos/_MG_0484.jpg',
  '/media/photos/_MG_0533.jpg',
  '/media/photos/Cópia de IMG_3750.jpg',
  '/media/photos/Cópia de IMG_3937.jpg',
]

const STATES = [
  { id: 'am', name: 'Amazonas',           city: 'Manaus',          cx: 140, cy: 150, color: 'var(--verde)' },
  { id: 'pa', name: 'Pará',               city: 'Belém',           cx: 260, cy: 110, color: 'var(--ouro)' },
  { id: 'ba', name: 'Bahia',              city: 'Salvador',        cx: 390, cy: 260, color: 'var(--terracota)' },
  { id: 'sp', name: 'São Paulo',          city: 'São Paulo',       cx: 320, cy: 360, color: 'var(--ouro)' },
  { id: 'mg', name: 'Minas Gerais',       city: 'Belo Horizonte',  cx: 350, cy: 310, color: 'var(--verde)' },
  { id: 'pe', name: 'Pernambuco',         city: 'Recife',          cx: 435, cy: 180, color: 'var(--ouro)' },
  { id: 'ce', name: 'Ceará',              city: 'Fortaleza',       cx: 400, cy: 130, color: 'var(--terracota)' },
  { id: 'rs', name: 'Rio Grande do Sul',  city: 'Porto Alegre',    cx: 260, cy: 450, color: 'var(--verde)' },
  { id: 'go', name: 'Goiás',              city: 'Goiânia',         cx: 290, cy: 270, color: 'var(--verde)' },
  { id: 'mt', name: 'Mato Grosso',        city: 'Cuiabá',          cx: 210, cy: 260, color: 'var(--terracota)' },
  { id: 'ro', name: 'Rondônia',           city: 'Porto Velho',     cx: 130, cy: 250, color: 'var(--ouro)' },
  { id: 'ma', name: 'Maranhão',           city: 'São Luís',        cx: 340, cy: 120, color: 'var(--ouro)' },
  { id: 'pr', name: 'Paraná',             city: 'Curitiba',        cx: 300, cy: 400, color: 'var(--terracota)' },
  { id: 'ms', name: 'Mato Grosso do Sul', city: 'Campo Grande',    cx: 230, cy: 350, color: 'var(--verde)' },
]

// Hex grid of photo circles — computed once at module level
// We want a very dense grid to look like a collage
const COLS_N = 20
const ROWS_N = 22
const CELLS = Array.from({ length: ROWS_N * COLS_N }, (_, k) => {
  const row = Math.floor(k / COLS_N)
  const col = k % COLS_N
  // Smaller base radius for a denser collage look
  const baseR = 12 + (Math.sin(k * 1.3) * 5) 
  const dx = 24
  const dy = 22
  return {
    cx: col * dx + (row % 2 ? dx / 2 : 0),
    cy: row * dy + 10,
    r: baseR,
    photo: PHOTOS[k % PHOTOS.length],
  }
})


export default function MapaBrasilMosaico() {
  const svgRef = useRef(null)
  const [tooltip, setTooltip] = useState(null)

  const handleMouseMove = useCallback(e => {
    const svg = svgRef.current
    if (!svg) return
    const ctm = svg.getScreenCTM()
    if (!ctm) return
    const pt = svg.createSVGPoint()
    pt.x = e.clientX
    pt.y = e.clientY
    const { x: sx, y: sy } = pt.matrixTransform(ctm.inverse())

    let nearest = null
    let minD = Infinity
    for (const s of STATES) {
      const d = Math.hypot(sx - s.cx, sy - s.cy)
      if (d < minD) { minD = d; nearest = s }
    }

    setTooltip(minD < 35 ? { x: e.clientX, y: e.clientY, state: nearest } : null)
  }, [])

  return (
    <section
      id="mapa"
      style={{ background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden' }}
    >
      <div className="section-padding max-w-7xl mx-auto">
        
        {/* Floating Adinkra backgrounds */}
        <div style={{ position: 'absolute', top: '10%', right: '5%', opacity: 0.03, pointerEvents: 'none' }}>
          <svg width="200" height="200" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="var(--ouro)" strokeWidth="1" fill="none" />
            <path d="M50 10 L50 90 M10 50 L90 50" stroke="var(--ouro)" strokeWidth="1" />
          </svg>
        </div>
        <div style={{ position: 'absolute', bottom: '5%', left: '2%', opacity: 0.03, pointerEvents: 'none' }}>
          <svg width="150" height="150" viewBox="0 0 100 100">
            <rect x="20" y="20" width="60" height="60" stroke="var(--terracota)" strokeWidth="1" fill="none" transform="rotate(45 50 50)" />
            <rect x="25" y="25" width="50" height="50" stroke="var(--terracota)" strokeWidth="1" fill="none" transform="rotate(45 50 50)" />
          </svg>
        </div>

        <ScrollReveal variant="fade-up">
          <SectionLabel number="★" text="Brasil Trancista" />
        </ScrollReveal>

        <ClipReveal delay={60}>
          <h2
            className="font-display font-black uppercase leading-none mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--text-primary)' }}
          >
            UM PAÍS QUE<br />
            <span style={{ color: 'var(--ouro)' }}>SE TRANÇA</span>
          </h2>
        </ClipReveal>

        <ScrollReveal variant="fade-up" delay={120}>
          <p style={{
            maxWidth: '480px',
            color: 'var(--text-muted)',
            marginBottom: '3.5rem',
            lineHeight: 1.7,
            fontSize: '0.95rem',
            fontFamily: "'Barlow', sans-serif",
          }}>
            De Manaus a Salvador, de Fortaleza a Porto Alegre — a arte das tranças
            atravessa o Brasil inteiro, presente em cada estado, em cada mão habilidosa.
            Passe o mouse para descobrir.
          </p>
        </ScrollReveal>

        {/* Map + stats */}
        <div
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start"
        >
          {/* SVG Map */}
          <motion.div
            style={{ flex: '0 0 auto', position: 'relative', maxWidth: '100%' }}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg
              ref={svgRef}
              viewBox={`0 0 480 500`}
              style={{ width: 'min(85vw, 550px)', maxWidth: '100%', height: 'auto', display: 'block', cursor: 'crosshair', filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.15))' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setTooltip(null)}
            >
              <defs>
                <clipPath id="brazil-mosaico-clip">
                  <path d={BRAZIL_D} />
                </clipPath>

                <filter id="brazil-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur1" />
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur2" />
                  <feMerge>
                    <feMergeNode in="blur1" />
                    <feMergeNode in="blur2" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer Glow (Underneath) */}
              <path
                d={BRAZIL_D}
                fill="none"
                stroke="#fff8e7"
                strokeWidth="6"
                filter="url(#brazil-glow)"
                opacity="0.8"
              />

              {/* Clipped photo collage */}
              <g clipPath="url(#brazil-mosaico-clip)">
                {/* Fallback background */}
                <rect width={VW} height={VH} fill="#2a1e12" />
                
                {/* Dense grid of photos */}
                {CELLS.map((c, i) => {
                  // We'll render rectangular images instead of circles for a tighter collage
                  const size = c.r * 2.8; 
                  return (
                    <image
                      key={i}
                      href={c.photo}
                      x={c.cx - size/2}
                      y={c.cy - size/2}
                      width={size}
                      height={size}
                      preserveAspectRatio="xMidYMid slice"
                      opacity="0.95"
                      style={{ filter: 'contrast(1.15) brightness(0.95)' }}
                    />
                  )
                })}
                
                {/* Subtle dark overlay for cohesion */}
                <rect width={VW} height={VH} fill="rgba(28,28,26,0.15)" style={{ mixBlendMode: 'multiply' }} />
              </g>

              {/* Main outline crisp */}
              <path
                d={BRAZIL_D}
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeOpacity="0.95"
              />

              {/* State hotspot dots */}
              {STATES.map(s => (
                <g key={s.id} style={{ cursor: 'pointer' }}>
                  {/* Invisible larger circle for easier hovering */}
                  <circle cx={s.cx} cy={s.cy} r={15} fill="transparent" />
                  {/* Small visible dot */}
                  <circle cx={s.cx} cy={s.cy} r={3} fill="#ffffff" />
                  {/* Outer ring for the dot */}
                  <circle cx={s.cx} cy={s.cy} r={5} fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
                </g>
              ))}
            </svg>

            {/* Tooltip */}
            {tooltip && (
              <div
                style={{
                  position: 'fixed',
                  left: tooltip.x + 15,
                  top: tooltip.y - 10,
                  zIndex: 1000,
                  background: 'rgba(28, 28, 26, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '6px 10px',
                  pointerEvents: 'none',
                  borderRadius: '4px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                }}
              >
                <div style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.75rem',
                  color: '#ffffff',
                  lineHeight: 1,
                }}>
                  {tooltip.state.name}
                </div>
                <div style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '0.65rem',
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1,
                }}>
                  {tooltip.state.city}
                </div>
              </div>
            )}
          </motion.div>

          {/* Stats / legend column */}
          <div style={{ flex: 1, minWidth: 'min(280px, 100%)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <ScrollReveal variant="fade-up" delay={180}>
              <div style={{ position: 'relative' }}>
                <p style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--terracota)',
                  marginBottom: '0.5rem',
                }}>
                  Presença Nacional
                </p>
                
                <div 
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(5rem, 10vw, 8.5rem)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.04em',
                    background: 'linear-gradient(135deg, var(--ouro) 0%, #E8C060 50%, var(--terracota) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'var(--ouro)', // fallback
                  }}
                >
                  26
                </div>
                
                <p style={{
                  color: 'var(--text-primary)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  fontFamily: "'Barlow', sans-serif",
                  marginTop: '0.5rem',
                  maxWidth: '240px',
                  lineHeight: 1.4
                }}>
                  estados com trancistas ativas conectadas
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={240}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.25rem',
              }}>
                {[
                  { region: 'Nordeste', desc: 'Epicentro cultural',  color: 'var(--terracota)' },
                  { region: 'Norte',    desc: 'Raízes ancestrais',   color: 'var(--verde)' },
                  { region: 'Sudeste',  desc: 'Mercado em expansão', color: 'var(--ouro)' },
                  { region: 'Sul',      desc: 'Diáspora resistente', color: 'var(--terracota)' },
                  { region: 'Centro',   desc: 'Conexão e travessia', color: 'var(--verde)' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                    <div style={{
                      width: '6px', height: '6px',
                      borderRadius: '50%',
                      background: item.color,
                      flexShrink: 0
                    }} />
                    <div>
                      <span style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--text-primary)',
                      }}>
                        {item.region}
                      </span>
                      <span style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: '0.85rem',
                        color: 'var(--text-muted)',
                        paddingLeft: '0.75rem',
                      }}>
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-up" delay={300}>
              <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                <div style={{
                  position: 'absolute',
                  left: 0, top: 0, bottom: 0,
                  width: '3px',
                  background: 'linear-gradient(to bottom, var(--terracota), var(--ouro), var(--verde))',
                  borderRadius: '3px'
                }} />
                <p style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  color: 'var(--text-primary)',
                  maxWidth: '380px',
                }}>
                  "A trança não conhece fronteira. Ela é a língua que atravessa o Brasil
                  de ponta a ponta — do Nordeste ao Sul, da Amazônia ao Sudeste."
                </p>
                <div style={{
                  marginTop: '1.2rem',
                  fontSize: '0.65rem',
                  letterSpacing: '0.15em',
                  color: 'var(--terracota)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                }}>
                  Manifesto Trancista • 2024
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
