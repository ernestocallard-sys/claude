import {
  CHECKOUT_FULL_GUIDE,
  PRICE_FULL_CURRENT,
  IMAGE_MAIN_COVER,
  IMAGE_BONUS_1,
  IMAGE_BONUS_2,
  IMAGE_BONUS_3,
} from '../constants'
import ProductImage from './ProductImage'

const TRUST_ITEMS = [
  'Acceso inmediato',
  'Pago único',
  'Ebook + 3 bonuses',
  'Garantía 7 días',
]

const BONUSES = [
  { src: IMAGE_BONUS_1, alt: 'Bonus 1: Planner + Checklist' },
  { src: IMAGE_BONUS_2, alt: 'Bonus 2: Matrimonio civil' },
  { src: IMAGE_BONUS_3, alt: 'Bonus 3: Decisiones del gran día' },
]

export default function Hero() {
  return (
    <section className="bg-cream py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-center">

          {/* ── Columna de texto (3/5) ── */}
          <div className="md:col-span-3 text-center md:text-left">

            {/* Etiqueta */}
            <p
              className="font-sans text-xs font-semibold uppercase tracking-[0.18em] mb-4"
              style={{ color: '#C4787A' }}
            >
              para novias inteligentes
            </p>

            {/* Heading principal */}
            <h1
              className="font-serif font-bold leading-tight mb-5"
              style={{ color: '#3D2B2B', fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
            >
              Organiza una boda{' '}
              <em className="not-italic" style={{ color: '#8B4557' }}>bonita</em>{' '}
              sin gastar de más ni tomar decisiones a ciegas.
            </h1>

            {/* Subtítulo */}
            <p
              className="font-sans text-base sm:text-lg leading-relaxed mb-5"
              style={{ color: '#3D2B2B', opacity: 0.72 }}
            >
              Una guía práctica para novias que quieren saber qué priorizar,
              dónde ahorrar y cómo evitar gastos innecesarios sin que su boda
              se vea improvisada o barata.
            </p>

            {/* Línea de oferta */}
            <p
              className="font-sans text-sm sm:text-base font-medium mb-6"
              style={{ color: '#8B4557' }}
            >
              Por el Día de las Madres, accede hoy a la guía completa con
              precio especial y empieza a organizar tu boda con más claridad.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1.5 mb-7">
              {TRUST_ITEMS.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 font-sans text-xs"
                  style={{ color: '#3D2B2B', opacity: 0.6 }}
                >
                  <span style={{ color: '#C9953A', opacity: 1 }}>✓</span>
                  {item}
                </span>
              ))}
            </div>

            {/* Precio */}
            <div className="flex items-baseline gap-2.5 justify-center md:justify-start mb-5">
              <span
                className="font-serif font-bold"
                style={{ color: '#8B4557', fontSize: '2.75rem', lineHeight: 1 }}
              >
                USD ${PRICE_FULL_CURRENT}
              </span>
              <span className="font-sans text-sm" style={{ color: '#3D2B2B', opacity: 0.45 }}>
                precio especial
              </span>
            </div>

            {/* CTA principal */}
            <a
              href={CHECKOUT_FULL_GUIDE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary block sm:inline-block text-base sm:text-lg py-4 px-10 w-full sm:w-auto"
            >
              Quiero mi guía completa por USD ${PRICE_FULL_CURRENT}
            </a>

            {/* Microcopy CTA */}
            <p className="mt-3 font-sans text-xs text-center md:text-left" style={{ color: '#3D2B2B', opacity: 0.45 }}>
              Precio especial Día de las Madres · Acceso inmediato · Garantía 7 días
            </p>
          </div>

          {/* ── Columna de imágenes (2/5) ── */}
          <div className="md:col-span-2 flex flex-col items-center gap-4">

            {/* Portada principal */}
            <div className="w-full max-w-[260px] md:max-w-none" style={{ aspectRatio: '3/4' }}>
              <ProductImage
                src={IMAGE_MAIN_COVER}
                alt="Mi Boda Inteligente — portada principal"
                className="w-full h-full rounded-2xl shadow-2xl"
              />
            </div>

            {/* Bonuses en fila */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-[260px] md:max-w-none">
              {BONUSES.map((b) => (
                <div key={b.alt} style={{ aspectRatio: '3/4' }}>
                  <ProductImage
                    src={b.src}
                    alt={b.alt}
                    className="w-full h-full rounded-lg shadow-md"
                  />
                </div>
              ))}
            </div>

            {/* Label bonuses */}
            <p className="font-sans text-xs text-center" style={{ color: '#3D2B2B', opacity: 0.45 }}>
              + 3 bonuses incluidos
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
