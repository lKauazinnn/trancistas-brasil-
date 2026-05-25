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
import CustomCursor from './components/ui/CustomCursor'
import BraidGuia from './components/ui/BraidGuia'

// Default: dark theme. Only go light if explicitly saved as 'light'.
function initTheme() {
  const saved = localStorage.getItem('trancistas-theme')
  if (saved === 'light') return
  document.documentElement.classList.add('dark')
}
initTheme()

export default function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <BraidGuia />
      <CustomCursor />
      <ReadingProgress />
      <SectionNav />
      <Navbar />
      <main>
        <HeroSection />
        <KenteStripe height={22} />
        <AprendizadoAncestral />
        <KenteStripe height={22} />
        <AutoestimaIdentidade />
        <KenteStripe height={22} />
        <GaleriaSection />
        <KenteStripe height={22} />
        <MercadoCredito />
        <KenteStripe height={22} />
        <DesafiosRotina />
        <KenteStripe height={22} />
        <FuturoEncerramento />
      </main>
      <Footer />
    </div>
  )
}
