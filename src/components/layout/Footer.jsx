import { CREDITS } from '../../data/content'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--bg-deep)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.5rem, 5vw, 5rem)',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        {/* Top */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="label-tag mb-2">Uma reportagem especial</p>
            <h2
              className="font-display font-black uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-primary)' }}
            >
              Trançando Caminhos
            </h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '8px', maxWidth: '280px' }}>
              Da rota de fuga à independência financeira.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Publicado em</p>
            <p className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>2025</p>
          </div>
        </div>

        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '2.5rem' }} />

        {/* Credits */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {CREDITS.map((c, i) => (
            <div key={i}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
                {c.role}
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', color: 'var(--text-primary)' }}>
                {c.name}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 pt-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            © 2025 PI — Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            Feito com respeito e memória para as trancistas do Brasil.
          </p>
        </div>
      </div>
    </footer>
  )
}
