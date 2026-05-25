// Kente cloth-inspired colored stripe divider
export default function KenteStripe({ height = 10, className = '' }) {
  return (
    <div
      className={className}
      style={{
        width: '100%',
        height: `${height}px`,
        backgroundImage: [
          'repeating-linear-gradient(90deg,',
          '#1C1C1A 0px,   #1C1C1A 2px,',
          '#D4A843 2px,   #D4A843 18px,',
          '#1C1C1A 18px,  #1C1C1A 20px,',
          '#C0522A 20px,  #C0522A 36px,',
          '#1C1C1A 36px,  #1C1C1A 38px,',
          '#2D6A4F 38px,  #2D6A4F 54px,',
          '#1C1C1A 54px,  #1C1C1A 56px,',
          '#E8B84B 56px,  #E8B84B 72px,',
          '#1C1C1A 72px,  #1C1C1A 74px,',
          '#C0522A 74px,  #C0522A 90px,',
          '#1C1C1A 90px,  #1C1C1A 92px,',
          '#D4A843 92px,  #D4A843 108px,',
          '#1C1C1A 108px, #1C1C1A 110px,',
          '#2D6A4F 110px, #2D6A4F 126px,',
          '#1C1C1A 126px, #1C1C1A 128px',
          ')',
        ].join(' '),
      }}
    />
  )
}
