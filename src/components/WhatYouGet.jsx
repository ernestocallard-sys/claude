import {
  IMAGE_MAIN_COVER,
  IMAGE_BONUS_1,
  IMAGE_BONUS_2,
  IMAGE_BONUS_3,
} from '../constants'
import ProductImage from './ProductImage'

const PRODUCTS = [
  {
    tag: 'Guía principal',
    src: IMAGE_MAIN_COVER,
    alt: 'Mi Boda Inteligente — portada principal',
    title: 'Mi Boda Inteligente',
    description: 'Ebook principal para organizar tu boda gastando menos sin perder claridad ni estilo.',
  },
  {
    tag: 'Bonus 1',
    src: IMAGE_BONUS_1,
    alt: 'Bonus 1: Planner completo + Checklist cronológica',
    title: 'Planner completo + Checklist cronológica',
    description: 'Planner y checklist para saber qué hacer primero y qué no dejar para última hora.',
  },
  {
    tag: 'Bonus 2',
    src: IMAGE_BONUS_2,
    alt: 'Bonus 2: Matrimonio civil sin dramas',
    title: 'Matrimonio civil sin dramas',
    description: 'Guía civil para entender documentos, tiempos y decisiones importantes.',
  },
  {
    tag: 'Bonus 3',
    src: IMAGE_BONUS_3,
    alt: 'Bonus 3: Decisiones del gran día',
    title: 'Decisiones del gran día',
    description: 'Bonus de decisiones clave para elegir mejor fecha, estilo, detalles y prioridades.',
  },
]

const EXTRAS = [
  'Acceso digital inmediato',
  'Pago único',
  'Garantía de 7 días',
]

export default function WhatYouGet() {
  return (
    <section className="py-16 md:py-20 bg-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="font-serif font-bold"
            style={{ color: '#3D2B2B', fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}
          >
            Todo lo que recibes hoy
          </h2>
        </div>

        {/* Grid de productos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {PRODUCTS.map((p) => (
            <div
              key={p.title}
              className="flex flex-col rounded-2xl overflow-hidden shadow-sm"
              style={{ backgroundColor: '#FFFDF9' }}
            >
              {/* Imagen */}
              <div style={{ aspectRatio: '3/4' }}>
                <ProductImage
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Texto */}
              <div className="p-4 flex flex-col gap-1.5">
                <span
                  className="font-sans text-xs font-semibold uppercase tracking-widest"
                  style={{ color: '#C9953A' }}
                >
                  {p.tag}
                </span>
                <p className="font-serif font-semibold text-sm leading-snug" style={{ color: '#3D2B2B' }}>
                  {p.title}
                </p>
                <p className="font-sans text-xs leading-relaxed" style={{ color: '#3D2B2B', opacity: 0.65 }}>
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div className="flex flex-wrap justify-center gap-4">
          {EXTRAS.map((item) => (
            <span
              key={item}
              className="flex items-center gap-2 font-sans text-sm px-5 py-2.5 rounded-full shadow-sm"
              style={{ backgroundColor: '#F7ECEA', color: '#8B4557' }}
            >
              <span style={{ color: '#C9953A' }}>✓</span>
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
