/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core dark
        void:    '#050509',
        deep:    '#0a0a10',
        surface: '#111118',
        // Warm palette (terracota / bege / ouro ancestral)
        terracota: '#C0522A',
        cobre:     '#B8622A',
        ouro:      '#D4A843',
        bege:      '#E8D5B0',
        areia:     '#F2E8D5',
        // Text
        ink:   '#FAFAF5',
        muted: '#8C8C8A',
        dim:   '#444440',
      },
      fontFamily: {
        display:  ['DM Sans', 'sans-serif'],
        body:     ['Lora', 'Georgia', 'serif'],
        grotesk:  ['Space Grotesk', 'sans-serif'],
        syne:     ['DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
        widest3: '0.35em',
      },
      animation: {
        'fade-up':    'fadeUp 0.8s ease forwards',
        'fade-in':    'fadeIn 1s ease forwards',
        'line-grow':  'lineGrow 1.2s ease forwards',
        'ticker':     'ticker 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%':   { scaleX: '0', transformOrigin: 'left' },
          '100%': { scaleX: '1', transformOrigin: 'left' },
        },
        ticker: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
