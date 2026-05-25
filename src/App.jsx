import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AprendizadoAncestral from './components/sections/AprendizadoAncestral'
import AutoestimaIdentidade from './components/sections/AutoestimaIdentidade'
import GaleriaSection from './components/sections/GaleriaSection'
import MercadoCredito from './components/sections/MercadoCredito'
import DesafiosRotina from './components/sections/DesafiosRotina'
import FuturoEncerramento from './components/sections/FuturoEncerramento'
import ReadingProgress from './components/ui/ReadingProgress'
import SectionNav from './components/ui/SectionNav'

// Apply saved theme class before first paint to avoid flash
function initTheme() {
  const saved = localStorage.getItem('trancistas-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (saved === 'dark' || (!saved && prefersDark)) {
    document.documentElement.classList.add('dark')
  }
}
initTheme()

export default function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <ReadingProgress />
      <SectionNav />
      <Navbar />
      <main>
        <HeroSection />
        <AprendizadoAncestral />
        <AutoestimaIdentidade />
        <GaleriaSection />
        <MercadoCredito />
        <DesafiosRotina />
        <FuturoEncerramento />
      </main>
      <Footer />
    </div>
  )
}
