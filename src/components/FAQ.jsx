import { useState } from 'react'
import { PRICE_FULL_CURRENT, PRICE_EBOOK_CURRENT } from '../constants'
import Fade from './Fade'

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

function ChevronDown({ open }) {
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
      className="flex-shrink-0 transition-transform duration-300"
      style={{ transform: open ? 'rotate(180deg)' : 'none' }}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

export default function FAQ() {
  const FAQS = buildFaqs(PRICE_FULL_CURRENT, PRICE_EBOOK_CURRENT)
  const [open, setOpen] = useState(null)

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FAF5F3' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <Fade>
          <div className="text-center mb-10">
            <p
              className="font-sans uppercase tracking-[0.2em] text-xs mb-4"
              style={{ color: '#C4787A' }}
            >
              preguntas frecuentes
            </p>
            <h2
              className="font-serif font-bold"
              style={{ color: '#3D2B2B', fontSize: 'clamp(1.6rem, 4vw, 2.3rem)' }}
            >
              ¿Tienes dudas?
            </h2>
          </div>
        </Fade>

        {/* Accordion */}
        <Fade delay={80}>
          <div className="space-y-2.5">
            {FAQS.map((faq, i) => {
              const isOpen = open === i
              return (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden transition-all duration-200"
                  style={{
                    backgroundColor: '#FFFDF9',
                    border: isOpen ? '1px solid rgba(196,120,122,0.4)' : '1px solid rgba(0,0,0,0.04)',
                    boxShadow: isOpen ? '0 4px 20px rgba(139,69,87,0.08)' : 'none',
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 transition-colors"
                    style={{
                      color: '#3D2B2B',
                      fontFamily: 'Poppins, system-ui, sans-serif',
                      fontSize: '0.92rem',
                      fontWeight: 500,
                    }}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span style={{ color: '#C4787A' }}>
                      <ChevronDown open={isOpen} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: '#3D2B2B', opacity: 0.65 }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Fade>

      </div>
    </section>
  )
}
