import { CHECKOUT_MAIN } from '../App'

export default function GuaranteeSection() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="max-w-2xl mx-auto px-5 text-center">
        {/* Shield icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 border border-gold/25 mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2l7 4v5c0 4.5-3 8.5-7 10C8 19.5 5 15.5 5 11V6l7-4z" stroke="#C9953A" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(201,149,58,0.1)"/>
            <path d="M9 12l2 2 4-4" stroke="#C9953A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <p className="font-body text-gold text-sm tracking-widest uppercase font-medium mb-3">
          Garantía
        </p>
        <h2 className="font-display text-3xl sm:text-4xl text-night mb-6 leading-tight">
          Pruébalo con calma
        </h2>
        <p className="font-body text-night/70 text-base leading-relaxed mb-10 max-w-xl mx-auto">
          Revisa el material y empieza por el capítulo o bonus que más se parezca a tu situación actual. Si la plataforma de pago ofrece garantía, puedes solicitar la devolución dentro del plazo disponible según sus condiciones.
        </p>

        <a
          href={CHECKOUT_MAIN}
          className="inline-flex items-center justify-center gap-2 bg-night hover:bg-navy transition-all duration-300 text-moon font-body font-semibold text-base px-9 py-4 rounded-full"
        >
          Quiero acceder ahora
        </a>
      </div>
    </section>
  )
}
