import { CHECKOUT_FULL_GUIDE } from '../constants'

export default function ReframeSection() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="section-container text-center">

        <h2
          className="font-serif font-bold leading-tight mb-6"
          style={{ color: '#3D2B2B', fontSize: 'clamp(1.6rem, 4vw, 2.4rem)' }}
        >
          La verdad: una boda bonita no depende solo de gastar más.{' '}
          <em className="not-italic" style={{ color: '#8B4557' }}>
            Depende de decidir mejor.
          </em>
        </h2>

        <p
          className="font-sans text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
          style={{ color: '#3D2B2B', opacity: 0.72 }}
        >
          No necesitas copiar una boda de lujo ni gastar sin control. Necesitas
          saber qué sí importa, qué puedes simplificar, dónde no conviene recortar
          y cómo convertir tu presupuesto en un plan claro.
        </p>

        <a
          href={CHECKOUT_FULL_GUIDE}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm sm:text-base"
        >
          Quiero planear mi boda con claridad
        </a>

      </div>
    </section>
  )
}
