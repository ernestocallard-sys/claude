import { Tag } from 'lucide-react';
import CountdownBar from './CountdownBar';
import { PRODUCT } from '../data/content';

export default function TopBar() {
  return (
    <div className="bg-[#3D2B1F] text-[#FAFAF7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-center gap-3 flex-wrap text-center">
        <Tag size={14} className="text-[#C9953A] shrink-0" />
        <span className="text-xs sm:text-sm font-medium">
          Oferta de lanzamiento · Kit completo por{' '}
          <strong className="text-[#C9953A]">{PRODUCT.price}</strong>
          {' '}· Antes{' '}
          <span className="line-through opacity-60">{PRODUCT.oldPrice}</span>
          {' '}· Garantía de {PRODUCT.guaranteeDays} días
        </span>
        <CountdownBar />
      </div>
    </div>
  );
}
