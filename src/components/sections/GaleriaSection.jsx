import ScrollCarousel from '../ui/ScrollCarousel'
import { GALLERY_IMAGES } from '../../data/content'

// Standalone section — full-screen scroll-driven gallery.
// The user must scroll through all images before advancing to the next section.
export default function GaleriaSection() {
  return (
    <section id="galeria" className="bg-deep">
      <ScrollCarousel
        images={GALLERY_IMAGES}
        title="Arte em Movimento"
        label="Galeria · Resistência Visual"
      />
    </section>
  )
}
