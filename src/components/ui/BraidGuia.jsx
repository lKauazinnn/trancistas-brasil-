import { motion, useScroll, useSpring } from 'framer-motion'

// ── Trança de 3 fios — caminhos CONTÍNUOS ─────────────────────────────
//
// Diferença do DNA: período de 50 unidades (era 200) e curvas bezier
// com CP "empurrado para o centro" (44% do período), criando trechos
// quase-verticais nas bordas + cruzamento rápido no meio.
// Isso gera os losangos característicos de uma trança, não onda suave.
//
// L=10  M=28  R=46
// Fio A (ouro)      : L → M → R → M → L  (período 200, começa em L)
// Fio B (terracota) : R → M → L → M → R  (anti-fase de A)
// Fio C (fino ouro) : M → L → M → R → M  (defasagem 50, meia amplitude)

const L = 10, MX = 28, R = 46
const P = 50    // altura de cada meio-período
const CP = 22   // offset do ponto de controle (44% × P → cruzamento abrupto)

// Gera 20 meios-períodos de fio contínuo
// xs = array de posições x nos nós  [x0, x1, x2, x3, ...]
function buildPath(xs) {
  let d = `M ${xs[0]} 0`
  for (let i = 0; i < xs.length - 1; i++) {
    const y0 = i * P
    const y1 = y0 + P
    const x0 = xs[i]
    const x1 = xs[i + 1]
    d += ` C ${x0} ${y0 + CP} ${x1} ${y1 - CP} ${x1} ${y1}`
  }
  return d
}

// Posições de cada fio nos 21 nós (0, 50, 100, ... 1000)
const nodesA = []
const nodesB = []
const nodesC = []

for (let i = 0; i <= 20; i++) {
  // A: L, M, R, M, L, M, R, ...  (período 4 nós)
  const cycleA = [L, MX, R, MX]
  nodesA.push(cycleA[i % 4])

  // B: R, M, L, M, R, M, L, ...  (anti-fase)
  const cycleB = [R, MX, L, MX]
  nodesB.push(cycleB[i % 4])

  // C: MX, L+8, MX, R-8, MX, ...  (amplitude menor, defasagem 1)
  const cycleC = [MX, L + 8, MX, R - 8]
  nodesC.push(cycleC[i % 4])
}

const PATH_A = buildPath(nodesA)
const PATH_B = buildPath(nodesB)
const PATH_C = buildPath(nodesC)

// Pérolas nos cruzamentos: onde A e B se encontram (posição x = MX)
// Acontece nos nós ímpares (y = 50, 150, 250 ...) e também nos pares ≠ extremos
// Na prática: a cada 50 unidades, y = 25, 75, 125, 175... (meio de cada segmento)
const BEADS = Array.from({ length: 20 }, (_, i) => {
  const isAoverB = (i % 2 === 0) // A cruzando sobre B nos pares
  return {
    cy: i * P + P / 2,
    cx: MX,
    fill:   isAoverB ? '#D4A030' : '#C0522A',
    stroke: isAoverB ? '#F0D060' : '#E07040',
  }
})

export default function BraidGuia() {
  const { scrollYProgress } = useScroll()
  const pl = useSpring(scrollYProgress, { stiffness: 80, damping: 22, restDelta: 0.001 })

  return (
    <div
      className="hidden lg:block"
      aria-hidden
      style={{
        position: 'fixed', left: 0, top: 0,
        width: '56px', height: '100vh',
        zIndex: 3,
        pointerEvents: 'none',
        opacity: 0.75,
        maskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)',
      }}
    >
      <svg
        width="56" height="100%"
        viewBox="0 0 56 1000"
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <defs>
          <linearGradient id="grad-ouro" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#D4A843" stopOpacity="0.3" />
            <stop offset="25%"  stopColor="#F0C840" stopOpacity="1"   />
            <stop offset="75%"  stopColor="#D4A030" stopOpacity="1"   />
            <stop offset="100%" stopColor="#D4A843" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="grad-terra" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#C0522A" stopOpacity="0.2" />
            <stop offset="25%"  stopColor="#D86540" stopOpacity="0.9" />
            <stop offset="75%"  stopColor="#C0522A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C0522A" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="grad-center" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="#D4A843" stopOpacity="0.1" />
            <stop offset="50%"  stopColor="#D4A843" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4A843" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-80%" y="-5%" width="260%" height="110%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="b" />
            <feComposite in="SourceGraphic" in2="b" operator="over" />
          </filter>
        </defs>

        {/* Fio C — centro, por baixo de tudo */}
        <motion.path
          d={PATH_C}
          stroke="url(#grad-center)"
          strokeWidth="1"
          fill="none" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: pl }}
        />

        {/* Fio B — terracota, camada do meio */}
        <motion.path
          d={PATH_B}
          stroke="url(#grad-terra)"
          strokeWidth="1.8"
          fill="none" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity={0.7}
          style={{ pathLength: pl }}
        />

        {/* Fio A — ouro, camada de cima com brilho */}
        <motion.path
          d={PATH_A}
          stroke="url(#grad-ouro)"
          strokeWidth="2.5"
          fill="none" strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          filter="url(#glow)"
          style={{ pathLength: pl }}
        />

        {/* Pérolas nos cruzamentos */}
        {BEADS.map((b, i) => (
          <motion.circle
            key={i}
            cx={b.cx} cy={b.cy} r="2.2"
            fill={b.fill} stroke={b.stroke} strokeWidth="0.5"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ delay: i * 0.03, duration: 0.25, type: 'spring', stiffness: 240 }}
          />
        ))}
      </svg>
    </div>
  )
}
