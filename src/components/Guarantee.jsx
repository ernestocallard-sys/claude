import { CHECKOUT_FULL_GUIDE, PRICE_FULL_CURRENT } from '../constants'

function ShieldIcon() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9953A"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

export default function Guarantee() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="section-container">
        <div
          className="max-w-xl mx-auto rounded-3xl px-8 py-9 text-center shadow-sm"
          style={{ backgroundColor: '#FFFDF9', border: '1px solid #C9953A40' }}
        >
          <div className="flex justify-center mb-4">
            <ShieldIcon />
          </div>

          <h2
            className="font-serif font-bold mb-4"
            style={{ color: '#3D2B2B', fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
          >
            Pruébalo sin riesgo durante 7 días
          </h2>

          <p
            className="font-sans text-sm sm:text-base leading-relaxed mb-7"
            style={{ color: '#3D2B2B', opacity: 0.7 }}
          >
            Revisa el material con calma. Si sientes que no te ayuda a ordenar
            mejor tu boda, puedes solicitar la devolución dentro del plazo
            disponible en la plataforma de pago.
          </p>

          <a
            href={CHECKOUT_FULL_GUIDE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm sm:text-base"
          >
            Quiero mi guía completa por USD ${PRICE_FULL_CURRENT}
          </a>
        </div>
      </div>
    </section>
  )
}
