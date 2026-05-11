import { CHECKOUT_FULL_GUIDE, PRICE_FULL_CURRENT } from '../constants'
import Fade from './Fade'

function ShieldCheckIcon() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#C9953A"
      strokeWidth="1.4"
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
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FAF5F3' }}>
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <Fade>
          <div
            className="rounded-3xl px-8 py-10 text-center"
            style={{
              backgroundColor: '#FFFDF9',
              border: '1px solid rgba(201,149,58,0.25)',
              boxShadow: '0 4px 30px rgba(0,0,0,0.05)',
            }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-5">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(201,149,58,0.08)', border: '1px solid rgba(201,149,58,0.2)' }}
              >
                <ShieldCheckIcon />
              </div>
            </div>

            <p
              className="font-sans uppercase tracking-[0.2em] text-xs mb-3"
              style={{ color: '#C4787A' }}
            >
              sin riesgo
            </p>

            <h2
              className="font-serif font-bold mb-4"
              style={{ color: '#3D2B2B', fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}
            >
              Pruébalo sin riesgo durante 7 días
            </h2>

            <p
              className="font-sans text-sm sm:text-base leading-relaxed mb-8"
              style={{ color: '#3D2B2B', opacity: 0.65 }}
            >
              Revisa el material con calma. Si sientes que no te ayuda a
              ordenar mejor tu boda, puedes solicitar la devolución dentro
              del plazo disponible en la plataforma de pago.
            </p>

            <a
              href={CHECKOUT_FULL_GUIDE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-sans font-semibold py-4 px-9 rounded-xl transition-all duration-200 hover:opacity-90 active:scale-95 shadow-md"
              style={{ backgroundColor: '#8B4557', color: '#FFFDF9', fontSize: '0.95rem' }}
            >
              Quiero mi guía completa por USD ${PRICE_FULL_CURRENT}
            </a>
          </div>
        </Fade>
      </div>
    </section>
  )
}
