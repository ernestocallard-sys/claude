import { CHECKOUT_FULL_GUIDE, PRICE_FULL_CURRENT } from '../constants'

export default function UrgencySection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#F7ECEA' }}>
      <div className="section-container text-center">

        <h2
          className="font-serif font-bold leading-tight mb-5"
          style={{ color: '#3D2B2B', fontSize: 'clamp(1.6rem, 4vw, 2.3rem)' }}
        >
          No dejes tu boda en manos de decisiones improvisadas
        </h2>

        <p
          className="font-sans text-base sm:text-lg leading-relaxed mb-9 max-w-2xl mx-auto"
          style={{ color: '#3D2B2B', opacity: 0.72 }}
        >
          Si ya estás preocupada por los precios, esta oferta especial es una
          forma simple de empezar hoy con claridad. La guía completa te ayuda
          a ordenar tus prioridades, evitar gastos innecesarios y tomar mejores
          decisiones antes de que el presupuesto se te vaya en cosas que no
          eran tan importantes.
        </p>

        <a
          href={CHECKOUT_FULL_GUIDE}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-base sm:text-lg"
        >
          Quiero mi guía completa por USD ${PRICE_FULL_CURRENT}
        </a>

      </div>
    </section>
  )
}
