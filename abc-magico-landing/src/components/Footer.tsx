import { PRODUCT } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-[#3D2B1F] text-[#F7E8D0] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-5">
          <div>
            <p className="text-2xl font-bold text-[#FAFAF7] mb-1">🌙 {PRODUCT.brand}</p>
            <p className="text-sm text-[#F7E8D0]/70">{PRODUCT.name}</p>
          </div>

          <p className="text-sm">
            Soporte:{' '}
            <a href={`mailto:${PRODUCT.supportEmail}`} className="text-[#C9953A] hover:underline">
              {PRODUCT.supportEmail}
            </a>
          </p>

          <div className="flex items-center gap-4 text-xs text-[#F7E8D0]/50">
            <a href="#" className="hover:text-[#F7E8D0] transition-colors">Política de privacidad</a>
            <span>·</span>
            <a href="#" className="hover:text-[#F7E8D0] transition-colors">Términos de uso</a>
          </div>

          <div className="max-w-2xl border-t border-[#F7E8D0]/10 pt-5">
            <p className="text-xs text-[#F7E8D0]/40 leading-relaxed">
              Este material tiene fines educativos e informativos. No sustituye la evaluación, diagnóstico ni acompañamiento de profesionales de la educación, salud o psicología infantil. Los resultados pueden variar según la edad, constancia y ritmo de cada niño.
            </p>
          </div>

          <p className="text-xs text-[#F7E8D0]/30">© {new Date().getFullYear()} {PRODUCT.brand}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
