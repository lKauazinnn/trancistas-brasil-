import { SimulacaoProvider } from './context/SimulacaoContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AprendizadoAncestral from './components/sections/AprendizadoAncestral'
import AutoestimaIdentidade from './components/sections/AutoestimaIdentidade'
import MercadoCredito from './components/sections/MercadoCredito'
import DesafiosRotina from './components/sections/DesafiosRotina'
import FuturoEncerramento from './components/sections/FuturoEncerramento'
import ReadingProgress from './components/ui/ReadingProgress'
import SectionNav from './components/ui/SectionNav'
import KenteStripe from './components/ui/KenteStripe'
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
    <SimulacaoProvider>
    <div className="afro-texture-layer" style={{ overflowX: 'hidden' }}>
      <BraidGuia />
      <ReadingProgress />
      <SectionNav />
      <Navbar />
      <main>
        <HeroSection />
        <KenteStripe height={50} />
        <AprendizadoAncestral />
        <KenteStripe height={50} />
        <AutoestimaIdentidade />
        <KenteStripe height={50} />
        <MercadoCredito />
        <KenteStripe height={50} />
        <DesafiosRotina />
        <KenteStripe height={50} />
        <FuturoEncerramento />
      </main>
      <Footer />
    </div>
    </SimulacaoProvider>
  )
}
