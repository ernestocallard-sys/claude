import { useState } from 'react'

const faqs = [
  {
    q: '¿Para qué edad sirve?',
    a: 'Está pensado para madres de bebés y niños pequeños, especialmente desde recién nacidos hasta los 3 años.',
  },
  {
    q: '¿Esto reemplaza al pediatra?',
    a: 'No. Es una guía educativa sobre hábitos de sueño. Si tu bebé tiene síntomas de salud, dolor, dificultad respiratoria, reflujo fuerte, pérdida de peso o llanto inconsolable, consulta siempre con tu pediatra.',
  },
  {
    q: '¿Tengo que leerlo todo para empezar?',
    a: 'No. Puedes empezar por el problema que más se parece a tu situación o por la etapa de edad de tu bebé. El material está organizado para que puedas ir directamente a lo que necesitas.',
  },
  {
    q: '¿Es un método de dejar llorar?',
    a: 'No está planteado como un método agresivo. El enfoque es entender, observar, ajustar rutinas y trabajar con consistencia de forma respetuosa.',
  },
  {
    q: '¿Cuándo voy a ver resultados?',
    a: 'Depende de la edad, el problema y la constancia. Algunos ajustes pueden mostrar cambios en pocos días; otros necesitan 1–3 semanas. La guía evita prometer milagros y te ayuda a avanzar con pasos realistas.',
  },
  {
    q: '¿Cómo recibo el material?',
    a: 'Después del pago recibes acceso digital para revisar el material desde tu celular, tablet o computadora.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-beige-dark last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left flex items-center justify-between gap-4 py-5 group"
        aria-expanded={open}
      >
        <span className="font-display text-lg text-night group-hover:text-gold transition-colors leading-snug">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full border border-gold/30 flex items-center justify-center text-gold transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      {open && (
        <p className="font-body text-night/70 text-[15px] leading-relaxed pb-5 pr-10">
          {a}
        </p>
      )}
    </div>
  )
}

export default function FAQSection() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-2xl mx-auto px-5">
        <div className="text-center mb-12">
          <p className="font-body text-gold text-sm tracking-widest uppercase font-medium mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-night text-balance">
            Antes de decidir
          </h2>
        </div>

        <div className="bg-moon rounded-2xl border border-beige-dark shadow-card px-6 sm:px-8">
          {faqs.map((item) => (
            <FAQItem key={item.q} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
