import ScrollReveal from './ScrollReveal'

export default function QuoteBlock({ texto, autora, cargo, variant = 'dark' }) {
  const isLight = variant === 'light'

  return (
    <ScrollReveal variant="fade-up">
      <blockquote className={`
        relative pl-6 border-l-2 border-terracota
        ${isLight ? 'text-void' : 'text-ink'}
      `}>
        <p className={`
          font-display text-2xl md:text-3xl lg:text-4xl font-bold italic leading-tight mb-4
          ${isLight ? 'text-void' : 'text-ink'}
        `}>
          "{texto}"
        </p>
        <footer className="flex items-center gap-3">
          <span className="w-8 h-px bg-terracota" />
          <div>
            <cite className={`font-grotesk text-sm font-medium not-italic ${isLight ? 'text-void' : 'text-ink'}`}>
              {autora}
            </cite>
            {cargo && (
              <p className={`font-grotesk text-xs mt-0.5 ${isLight ? 'text-void/60' : 'text-muted'}`}>
                {cargo}
              </p>
            )}
          </div>
        </footer>
      </blockquote>
    </ScrollReveal>
  )
}
