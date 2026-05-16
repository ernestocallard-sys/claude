import { IMAGES } from '../data/content';

const products = [
  {
    image: IMAGES.guiaMama,
    title: 'Guía para mamá',
    subtitle: 'Cómo enseñar a leer sin que parezca tarea',
    description: 'Una guía práctica para saber cómo acompañar a tu hijo, qué hacer cuando se frustra, cómo organizar sesiones cortas y cómo usar los cuadernos sin presión.',
  },
  {
    image: IMAGES.nivel1,
    title: 'Cuaderno Nivel 1 — Mi primer trazo',
    subtitle: 'La base antes de escribir',
    description: 'Actividades de líneas, curvas, zigzag, círculos y trazos previos para preparar la mano antes de pasar a letras y sílabas.',
  },
  {
    image: IMAGES.nivel2,
    title: 'Cuaderno Nivel 2 — Sílabas que canto',
    subtitle: 'Sonidos y sílabas paso a paso',
    description: 'Ejercicios para trabajar sílabas en voz alta, asociar sonidos con letras y empezar a construir una base fonética más clara.',
  },
  {
    image: IMAGES.nivel3,
    title: 'Cuaderno Nivel 3 — Palabras y frases',
    subtitle: 'De sílabas a lectura inicial',
    description: 'Actividades para formar palabras, leer combinaciones simples y empezar a trabajar pequeñas frases con más seguridad.',
  },
  {
    image: IMAGES.nivel4,
    title: 'Cuaderno Nivel 4 — Lector independiente',
    subtitle: 'Más confianza al leer',
    description: 'Actividades pensadas para reforzar combinaciones, lectura de palabras y avance hacia una lectura más fluida e independiente.',
  },
  {
    image: IMAGES.cajaMotivacion,
    title: 'Caja de Motivación Lunera',
    subtitle: 'Bonus imprimible especial',
    description: 'Material de motivación para celebrar avances, reforzar la constancia y hacer que el niño sienta progreso sin presión.',
  },
];

function FallbackCard({ title }: { title: string }) {
  return (
    <div className="w-full aspect-[3/4] bg-[#F7E8D0] rounded-2xl flex items-center justify-center">
      <span className="text-[#C9953A] text-sm font-semibold text-center px-4">{title}</span>
    </div>
  );
}

export default function ProductStack() {
  return (
    <section id="que-incluye" className="bg-[#F5E6E8] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2B1F] leading-tight mb-3">
            Todo lo que recibes dentro del Kit ABC Mágico
          </h2>
          <p className="text-[#6F6A64] text-base sm:text-lg leading-relaxed">
            Una ruta completa para acompañar el aprendizaje desde los primeros trazos hasta la lectura de palabras y frases.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={p.title} className="bg-white rounded-3xl shadow-sm overflow-hidden border border-[#F5E6E8] flex flex-col">
              <div className="bg-[#FAFAF7] p-6 flex items-center justify-center h-52">
                <img
                  src={p.image}
                  alt={p.title}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  className="h-full w-auto object-contain drop-shadow-md"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.display = 'none';
                    const fallback = el.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <FallbackCard title={p.title} />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base font-bold text-[#3D2B1F] mb-1 leading-snug">{p.title}</h3>
                <p className="text-xs font-semibold text-[#C9953A] uppercase tracking-wide mb-2">{p.subtitle}</p>
                <p className="text-sm text-[#6F6A64] leading-relaxed flex-1">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
