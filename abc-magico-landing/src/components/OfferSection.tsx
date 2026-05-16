import { ShieldCheck, Mail, FileText } from 'lucide-react';
import { IMAGES, PRODUCT } from '../data/content';
import Button from './Button';

export default function OfferSection() {
  return (
    <section id="oferta" className="bg-[#3D2B1F] py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FAFAF7] leading-tight mb-4">
              Empieza hoy con el Kit ABC Mágico completo
            </h2>
            <p className="text-[#F7E8D0]/80 text-base sm:text-lg leading-relaxed mb-8">
              Una ruta clara, imprimible y fácil de seguir para acompañar a tu hijo desde los primeros trazos hasta sus primeras palabras y frases.
            </p>

            <div className="flex items-end gap-4 mb-6">
              <span className="text-[#F7E8D0]/50 text-lg line-through">Antes {PRODUCT.oldPrice}</span>
              <span className="text-[#C9953A] text-5xl font-extrabold leading-none">
                {PRODUCT.price}
              </span>
            </div>

            <Button variant="primary" className="w-full sm:w-auto !py-4 !px-10 !text-lg mb-4">
              Sí, quiero el Kit ABC Mágico
            </Button>

            <p className="text-[#F7E8D0]/60 text-sm mb-8">
              Pago único · Sin mensualidades · Acceso inmediato
            </p>

            <div className="flex flex-col sm:flex-row gap-4 text-[#F7E8D0]/70 text-sm">
              <span className="flex items-center gap-2">
                <FileText size={15} className="text-[#C9953A]" />
                PDFs imprimibles
              </span>
              <span className="flex items-center gap-2">
                <Mail size={15} className="text-[#C9953A]" />
                {PRODUCT.supportEmail}
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#C9953A]" />
                {PRODUCT.guaranteeDays} días de garantía
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-[#C9953A]/10 rounded-4xl blur-2xl" />
              <img
                src={IMAGES.heroKit}
                alt="Kit ABC Mágico completo"
                loading="lazy"
                className="relative w-full h-auto object-contain drop-shadow-2xl rounded-3xl"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
