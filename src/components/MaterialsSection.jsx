import { IMAGE_MAIN_COVER, IMAGE_BONUS_1, IMAGE_BONUS_2, IMAGE_BONUS_3 } from '../App'

const materials = [
  {
    tag: 'Guía principal',
    title: 'Manual del Sueño Infantil',
    description:
      'La guía completa para entender el sueño de tu bebé y aplicar rutinas, ambiente, horarios y cambios respetuosos paso a paso. Incluye ciclos de sueño, ventanas de vigilia, asociaciones, colecho y destete nocturno.',
    imageKey: 'main',
    dark: true,
  },
  {
    tag: 'Bonus 1',
    title: 'Rutinas de Sueño por Edad',
    description:
      'Horarios y estructuras claras para saber qué hacer según la etapa de tu bebé: 0–3 meses, 4–6 meses, 7–12 meses, 1–2 años y 2–3 años. Incluye señales de cansancio y rutinas orientativas.',
    imageKey: 'b1',
    dark: false,
  },
  {
    tag: 'Bonus 2',
    title: '15 Problemas del Sueño Infantil Resueltos',
    description:
      'Guía de consulta rápida para los problemas más frecuentes: despertares constantes, solo dormir al pecho o en brazos, siestas cortas, resistencia a dormir, despertar temprano, regresiones y caos total.',
    imageKey: 'b2',
    dark: true,
  },
  {
    tag: 'Bonus 3',
    title: 'Diario Sueño Infantil Lunera',
    description:
      'Registro de 14 días para observar siestas, despertares, rutinas y avances reales sin obsesionarte. Detecta patrones y decide qué ajustar primero con datos concretos, no intuición.',
    imageKey: 'b3',
    dark: false,
  },
]

function CoverImage({ src, alt }) {
  const isPlaceholder = !src || src.startsWith('PEGAR')
  return (
    <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-card-dark flex-shrink-0">
      {isPlaceholder ? (
        <div className="w-full h-full bg-navy border border-gold/20 flex flex-col items-center justify-center gap-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-gold/50">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor"/>
          </svg>
          <p className="text-gold-light/50 text-xs text-center px-3 font-body leading-tight">{alt}</p>
          <p className="text-gray-blue/30 text-[9px] font-body">Reemplazar portada</p>
        </div>
      ) : (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      )}
    </div>
  )
}

const imageMap = {
  main: IMAGE_MAIN_COVER,
  b1: IMAGE_BONUS_1,
  b2: IMAGE_BONUS_2,
  b3: IMAGE_BONUS_3,
}

export default function MaterialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-night">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-16">
          <p className="font-body text-gold text-sm tracking-widest uppercase font-medium mb-3">
            Lo que recibes
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-tight text-moon text-balance">
            Todo el material para entender, ordenar y mejorar{' '}
            <span className="text-gold-light">el sueño de tu bebé</span>
          </h2>
        </div>

        <div className="space-y-10 lg:space-y-12">
          {materials.map(({ tag, title, description, imageKey, dark }, i) => (
            <div
              key={imageKey}
              className={`rounded-2xl overflow-hidden border ${
                dark
                  ? 'bg-navy-mid border-gold/15'
                  : 'bg-[#0F2545] border-gold/10'
              }`}
            >
              <div className={`flex flex-col sm:flex-row gap-0 ${i % 2 !== 0 ? 'sm:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="sm:w-48 lg:w-56 flex-shrink-0 p-5 sm:p-6 flex items-center justify-center">
                  <CoverImage src={imageMap[imageKey]} alt={title} />
                </div>

                {/* Copy */}
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                  <span className="inline-block font-body text-xs font-medium tracking-widest uppercase text-gold mb-3 px-3 py-1 rounded-full border border-gold/30 self-start">
                    {tag}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-moon mb-4 leading-snug">
                    {title}
                  </h3>
                  <p className="font-body text-gray-blue text-[15px] leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
