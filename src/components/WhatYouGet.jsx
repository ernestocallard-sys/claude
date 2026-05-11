import {
  IMAGE_MAIN_COVER,
  IMAGE_BONUS_1,
  IMAGE_BONUS_2,
  IMAGE_BONUS_3,
} from '../constants'
import ProductImage from './ProductImage'
import Fade from './Fade'

const PRODUCTS = [
  {
    tag: 'Guía principal',
    tagColor: '#8B4557',
    src: IMAGE_MAIN_COVER,
    alt: 'Mi Boda Inteligente — portada principal',
    title: 'Mi Boda Inteligente',
    description:
      'La guía base para organizar tu boda con más claridad, menos improvisación y mejores decisiones.',
    highlight: true,
  },
  {
    tag: 'Bonus 1',
    tagColor: '#C9953A',
    src: IMAGE_BONUS_1,
    alt: 'Bonus 1: Planner completo + Checklist cronológica',
    title: 'Planner completo + Checklist cronológica',
    description:
      'Para saber qué hacer primero, qué viene después y qué no dejar para última hora.',
    highlight: false,
  },
  {
    tag: 'Bonus 2',
    tagColor: '#C9953A',
    src: IMAGE_BONUS_2,
    alt: 'Bonus 2: Matrimonio civil sin dramas',
    title: 'Matrimonio civil sin dramas',
    description:
      'Para entender documentos, tiempos y decisiones legales sin sentirte perdida.',
    highlight: false,
  },
  {
    tag: 'Bonus 3',
    tagColor: '#C9953A',
    src: IMAGE_BONUS_3,
    alt: 'Bonus 3: Decisiones del gran día',
    title: 'Decisiones del gran día',
    description:
      'Para elegir mejor fecha, paleta, estilo, detalles y prioridades según tu presupuesto.',
    highlight: false,
  },
]

export default function WhatYouGet() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#FAF5F3' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <Fade>
          <div className="text-center mb-12">
            <p
              className="font-sans uppercase tracking-[0.2em] text-xs mb-4"
              style={{ color: '#C4787A' }}
            >
              lo que recibes hoy
            </p>
            <h2
              className="font-serif font-bold"
              style={{ color: '#3D2B2B', fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}
            >
              Todo lo que recibes hoy
            </h2>
          </div>
        </Fade>

        {/* Desktop: main cover left, bonuses right 3-wide */}
        {/* Mobile: 2×2 grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {PRODUCTS.map((p, i) => (
            <Fade key={p.title} delay={i * 90}>
              <article
                className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  backgroundColor: '#FFFDF9',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  ...(p.highlight && { border: '1px solid rgba(201,149,58,0.35)' }),
                }}
              >
                {/* Image */}
                <div className="relative" style={{ aspectRatio: '3/4' }}>
                  <ProductImage
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* Tag badge */}
                  <span
                    className="absolute top-2.5 left-2.5 font-sans text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: 'rgba(255,253,249,0.92)',
                      color: p.tagColor,
                      fontSize: '0.62rem',
                    }}
                  >
                    {p.tag}
                  </span>
                </div>

                {/* Text */}
                <div className="p-4 flex flex-col gap-1.5 flex-1">
                  <p
                    className="font-serif font-semibold leading-snug"
                    style={{ color: '#3D2B2B', fontSize: '0.85rem' }}
                  >
                    {p.title}
                  </p>
                  <p
                    className="font-sans leading-relaxed"
                    style={{ color: '#3D2B2B', opacity: 0.6, fontSize: '0.75rem' }}
                  >
                    {p.description}
                  </p>
                </div>
              </article>
            </Fade>
          ))}
        </div>

        {/* Trust strip */}
        <Fade delay={400}>
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {['Acceso digital inmediato', 'Pago único', 'Garantía de 7 días'].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 font-sans text-xs px-5 py-2.5 rounded-full"
                style={{ backgroundColor: '#F7ECEA', color: '#8B4557' }}
              >
                <span style={{ color: '#C9953A' }}>✓</span>
                {item}
              </span>
            ))}
          </div>
        </Fade>

      </div>
    </section>
  )
}
