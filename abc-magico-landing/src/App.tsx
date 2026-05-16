import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import PainSection from './components/PainSection';
import BeliefShiftSection from './components/BeliefShiftSection';
import MechanismSection from './components/MechanismSection';
import BenefitsSection from './components/BenefitsSection';
import ProductStack from './components/ProductStack';
import WhatChildLearns from './components/WhatChildLearns';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ValueStack from './components/ValueStack';
import OfferSection from './components/OfferSection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-poppins">
      {/* Single sticky wrapper — TopBar + Header always aligned regardless of TopBar height */}
      <div className="sticky top-0 z-50">
        <TopBar />
        <Header />
      </div>
      <main>
        <Hero />
        <PainSection />
        <BeliefShiftSection />
        <MechanismSection />
        <BenefitsSection />
        <ProductStack />
        <WhatChildLearns />
        <HowItWorks />
        <Testimonials />
        <ValueStack />
        <OfferSection />
        <GuaranteeSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
