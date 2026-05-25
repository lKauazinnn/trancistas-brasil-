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
import KenteStripe from './components/ui/KenteStripe'

// Default: light theme. Only go dark if explicitly saved.
function initTheme() {
  const saved = localStorage.getItem('trancistas-theme')
  if (saved === 'dark') {
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
        <KenteStripe height={12} />
        <AprendizadoAncestral />
        <KenteStripe height={12} />
        <AutoestimaIdentidade />
        <KenteStripe height={12} />
        <GaleriaSection />
        <KenteStripe height={12} />
        <MercadoCredito />
        <KenteStripe height={12} />
        <DesafiosRotina />
        <KenteStripe height={12} />
        <FuturoEncerramento />
      </main>
      <Footer />
    </div>
  )
}
