import CountdownBar from './components/CountdownBar'
import Hero from './components/Hero'
import PainSection from './components/PainSection'
import ReframeSection from './components/ReframeSection'
import MechanismSection from './components/MechanismSection'
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
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#FAF5F3', color: '#3D2B2B' }}>
      {/* Barra sticky superior — altura fija: h-14 md:h-11 */}
      <CountdownBar />

      {/* pt-14 compensa la barra fixed en mobile, pt-11 en desktop */}
      <main className="pt-14 md:pt-11">
        <Hero />
        <PainSection />
        <ReframeSection />
        <MechanismSection />
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
