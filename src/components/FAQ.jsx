import { useState } from 'react'
import { PRICE_FULL_CURRENT, PRICE_EBOOK_CURRENT } from '../constants'

const buildFaqs = (priceFull, priceEbook) => [
  {
    q: '¿Cómo recibo el material?',
    a: 'Después del pago, recibes acceso digital al material para revisarlo desde tu celular, tablet o computadora.',
  },
  {
    q: '¿Puedo verlo desde el celular?',
    a: 'Sí. Puedes acceder al contenido desde celular, tablet o computadora.',
  },
  {
    q: '¿Sirve para cualquier país de LATAM?',
    a: 'Sí. La guía está pensada para novias de LATAM que quieren organizar mejor su presupuesto y tomar decisiones más claras. Algunos detalles legales pueden variar según tu país.',
  },
  {
    q: '¿Esto es un curso en video o una guía descargable?',
    a: 'Es una guía digital práctica con materiales organizados para que puedas revisarlos a tu ritmo.',
  },
  {
    q: '¿Qué opción me conviene más?',
    a: `Si solo quieres empezar, el ebook (USD $${priceEbook}) puede ayudarte. Pero si quieres más claridad, planner, checklist y bonuses, la guía completa (USD $${priceFull}) es la opción más conveniente por solo USD $2 más.`,
  },
]

function ChevronIcon({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="flex-shrink-0 transition-transform duration-200"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const FAQS = buildFaqs(PRICE_FULL_CURRENT, PRICE_EBOOK_CURRENT)

  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="section-container">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="font-serif font-bold"
            style={{ color: '#3D2B2B', fontSize: 'clamp(1.6rem, 4vw, 2.3rem)' }}
          >
            Preguntas frecuentes
          </h2>
        </div>

        {/* Acordeón */}
        <div className="max-w-2xl mx-auto space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{
                  backgroundColor: '#FFFDF9',
                  border: isOpen ? '1px solid #C4787A60' : '1px solid transparent',
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 font-sans text-sm sm:text-base font-medium transition-colors"
                  style={{ color: '#3D2B2B' }}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {faq.q}
                  <span style={{ color: '#8B4557' }}>
                    <ChevronIcon open={isOpen} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: '#3D2B2B', opacity: 0.7 }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
