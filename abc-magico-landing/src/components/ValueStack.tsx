import { Check } from 'lucide-react';
import { PRODUCT } from '../data/content';
import Button from './Button';

const items = [
  'Guía para mamá',
  'Cuaderno Nivel 1 — Mi primer trazo',
  'Cuaderno Nivel 2 — Sílabas que canto',
  'Cuaderno Nivel 3 — Palabras y frases',
  'Cuaderno Nivel 4 — Lector independiente',
  'Caja de Motivación Lunera',
  'Acceso inmediato',
  'PDFs descargables e imprimibles',
  'Soporte por email',
  'Garantía de 7 días',
];

export default function ValueStack() {
  return (
    <section className="bg-[#F5E6E8] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2B1F] leading-tight mb-2">
              Recapitulando todo lo que recibes hoy
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-[#F5E6E8] p-7">
            <ul className="space-y-3 mb-8">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6B9E78] flex items-center justify-center">
                    <Check size={13} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-sm sm:text-base text-[#3D2B1F] font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-[#F5E6E8] pt-6 text-center">
              <div className="flex items-center justify-center gap-4 mb-5">
                <span className="text-[#6F6A64] text-sm line-through">Valor habitual: {PRODUCT.oldPrice}</span>
                <span className="text-[#3D2B1F] text-3xl font-extrabold">Hoy: {PRODUCT.price}</span>
              </div>
              <Button variant="primary" className="w-full !py-4">
                Quiero el Kit ABC Mágico
              </Button>
              <p className="text-xs text-[#6F6A64] mt-3">Pago único · Sin mensualidades · Acceso inmediato</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
