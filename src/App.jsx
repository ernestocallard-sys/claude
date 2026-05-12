import TopBar from './components/TopBar'
import Hero from './components/Hero'
import PainSection from './components/PainSection'
import ReframeSection from './components/ReframeSection'
import MethodSection from './components/MethodSection'
import MaterialsSection from './components/MaterialsSection'
import BenefitsSection from './components/BenefitsSection'
import AuthoritySection from './components/AuthoritySection'
import OfferSection from './components/OfferSection'
import UrgencySection from './components/UrgencySection'
import GuaranteeSection from './components/GuaranteeSection'
import TrustSection from './components/TrustSection'
import FAQSection from './components/FAQSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

// ─── Constantes editables ──────────────────────────────────────────────────
export const PRICE_MAIN = 'PEGAR_PRECIO'
export const CHECKOUT_MAIN = 'https://pay.hotmart.com/X105696286G?checkoutMode=10'

// Reemplaza estas URLs con las portadas reales del producto
export const IMAGE_MAIN_COVER = 'PEGAR_URL_PORTADA_PRINCIPAL'
export const IMAGE_BONUS_1    = 'PEGAR_URL_BONUS_1'
export const IMAGE_BONUS_2    = 'PEGAR_URL_BONUS_2'
export const IMAGE_BONUS_3    = 'PEGAR_URL_BONUS_3'
// ───────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Hero />
      <PainSection />
      <ReframeSection />
      <MethodSection />
      <MaterialsSection />
      <BenefitsSection />
      <AuthoritySection />
      <OfferSection />
      <UrgencySection />
      <GuaranteeSection />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}
