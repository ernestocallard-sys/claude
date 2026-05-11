import CountdownBar from './components/CountdownBar'
import Hero from './components/Hero'
import PainSection from './components/PainSection'
import ReframeSection from './components/ReframeSection'
import ProductSection from './components/ProductSection'
import WhatYouGet from './components/WhatYouGet'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import UrgencySection from './components/UrgencySection'
import Guarantee from './components/Guarantee'
import TrustSection from './components/TrustSection'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-warm-brown">
      {/* Barra sticky superior con contador regresivo */}
      <CountdownBar />

      {/* pt-24 md:pt-16 compensa la altura de la barra fixed */}
      <main className="pt-24 md:pt-16">
        <Hero />
        <PainSection />
        <ReframeSection />
        <ProductSection />
        <WhatYouGet />
        <Benefits />
        <Pricing />
        <UrgencySection />
        <Guarantee />
        <TrustSection />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  )
}
