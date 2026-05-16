import { CheckCircle, ShieldCheck, Zap, Clock, FileText } from 'lucide-react';
import Button from './Button';
import { IMAGES, PRODUCT } from '../data/content';

const bullets = [
  'Ideal para niños que están empezando a reconocer letras, sonidos y palabras',
  'Actividades progresivas por niveles: del trazo a la lectura',
  'PDFs imprimibles para usar desde casa',
  'Incluye guía práctica para mamá y caja de motivación',
];

const trustChips = [
  { icon: <FileText size={13} />, label: 'PDF imprimible' },
  { icon: <Zap size={13} />, label: 'Acceso inmediato' },
  { icon: <Clock size={13} />, label: '10-15 min al día' },
  { icon: <ShieldCheck size={13} />, label: '7 días de garantía' },
];

export default function Hero() {
  return (
    <section id="inicio" className="bg-[#FAFAF7] py-12 sm:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Text */}
          <div className="order-2 md:order-1">
            <div className="flex flex-wrap gap-2 mb-5">
              {trustChips.map((c) => (
                <span key={c.label} className="inline-flex items-center gap-1.5 bg-[#F7E8D0] text-[#3D2B1F] text-xs font-semibold px-3 py-1.5 rounded-full">
                  {c.icon}
                  {c.label}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#3D2B1F] leading-tight mb-5">
              Enséñale a leer y escribir desde casa{' '}
              <span className="text-[#C9953A]">sin que parezca tarea</span>
            </h1>

            <p className="text-[#6F6A64] text-base sm:text-lg leading-relaxed mb-6">
              ABC Mágico combina trazos, sonidos, sílabas, palabras y frases en un kit imprimible paso a paso para que acompañes a tu hijo con sesiones cortas de <strong className="text-[#3D2B1F]">10 a 15 minutos al día.</strong>
            </p>

            <ul className="space-y-2.5 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm sm:text-base text-[#3D2B1F]">
                  <CheckCircle size={18} className="text-[#6B9E78] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Button variant="primary" className="w-full sm:w-auto">
                Quiero empezar hoy por {PRODUCT.price}
              </Button>
              <Button variant="secondary" sectionTarget="que-incluye" className="w-full sm:w-auto">
                Ver todo lo que incluye
              </Button>
            </div>

            <p className="text-xs text-[#6F6A64] font-medium">
              Pago único · Acceso inmediato · Garantía de {PRODUCT.guaranteeDays} días
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-full">
              <div className="absolute inset-0 bg-[#F7E8D0] rounded-4xl blur-2xl opacity-60 scale-95" />
              <img
                src={IMAGES.heroKit}
                alt="Kit ABC Mágico completo — cuadernos de lectura y escritura para niños"
                fetchPriority="high"
                className="relative w-full h-auto max-h-64 sm:max-h-80 md:max-h-none object-contain drop-shadow-xl rounded-3xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
