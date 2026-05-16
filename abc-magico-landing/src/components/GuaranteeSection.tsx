import { ShieldCheck } from 'lucide-react';
import { PRODUCT } from '../data/content';

export default function GuaranteeSection() {
  return (
    <section id="garantia" className="bg-[#FAFAF7] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm border border-[#F5E6E8] p-8 sm:p-10 text-center">
            <div className="flex justify-center mb-5">
              <div className="w-20 h-20 rounded-full bg-[#6B9E78]/10 flex items-center justify-center">
                <ShieldCheck size={40} className="text-[#6B9E78]" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3D2B1F] mb-4">
              Prueba el kit con tranquilidad durante {PRODUCT.guaranteeDays} días
            </h2>
            <p className="text-[#6F6A64] text-base sm:text-lg leading-relaxed mb-4">
              Tienes {PRODUCT.guaranteeDays} días de garantía por Hotmart. Si sientes que el material no era lo que esperabas o no se adapta a lo que necesitabas, puedes solicitar la devolución dentro del plazo disponible en la plataforma.
            </p>
            <div className="bg-[#F7E8D0] rounded-2xl px-6 py-4 inline-block">
              <p className="text-[#3D2B1F] text-sm sm:text-base font-semibold">
                Tu compra está protegida. Empiezas hoy, revisas el material con calma y decides con seguridad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
