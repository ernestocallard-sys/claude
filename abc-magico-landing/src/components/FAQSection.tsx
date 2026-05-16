import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PRODUCT } from '../data/content';

const faqs = [
  {
    q: '¿Cómo recibo el material?',
    a: 'Después de la confirmación del pago, recibes el acceso al material digital en Hotmart y puedes descargar los PDFs.',
  },
  {
    q: '¿Tengo que pagar todos los meses?',
    a: 'No. Es un pago único.',
  },
  {
    q: '¿Puedo imprimir las actividades?',
    a: 'Sí. El material está pensado para imprimirse y usarse desde casa.',
  },
  {
    q: '¿Para qué edad es recomendado?',
    a: 'Es ideal para niños de 3 a 6 años que están empezando a reconocer letras, sonidos, sílabas y palabras. También puede adaptarse a otros ritmos según el nivel del niño.',
  },
  {
    q: '¿Necesito ser maestra para usarlo?',
    a: 'No. La guía para mamá está pensada para que puedas acompañar a tu hijo paso a paso, sin formación pedagógica previa.',
  },
  {
    q: '¿Cuánto tiempo debo practicar al día?',
    a: 'Lo recomendado es trabajar en sesiones cortas de 10 a 15 minutos, manteniendo una rutina constante y sin presión.',
  },
  {
    q: '¿Qué pasa si mi hijo se frustra?',
    a: 'El kit está diseñado por niveles. Si una actividad le cuesta, puedes volver a páginas anteriores, repetir ejercicios y avanzar a su ritmo.',
  },
  {
    q: '¿Tiene garantía?',
    a: `Sí. Tienes ${PRODUCT.guaranteeDays} días de garantía por Hotmart.`,
  },
  {
    q: '¿Cómo contacto soporte?',
    a: `Puedes escribir a: ${PRODUCT.supportEmail}`,
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#F5E6E8] last:border-0">
      <button
        className="w-full text-left py-5 flex items-start justify-between gap-4 focus:outline-none group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-semibold text-[#3D2B1F] group-hover:text-[#C9953A] transition-colors">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`text-[#C9953A] shrink-0 mt-0.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 text-sm sm:text-base text-[#6F6A64] leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="bg-[#F7E8D0] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#3D2B1F] leading-tight">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-sm px-6 sm:px-8 py-2">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
