import { useState, useEffect } from 'react';
import { PRODUCT } from '../data/content';
import Button from './Button';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div
        className="bg-[#3D2B1F] border-t border-[#C9953A]/20 px-4 pt-3 flex items-center justify-between gap-3"
        style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}
      >
        <div>
          <p className="text-[#FAFAF7] text-xs font-semibold leading-tight">Kit completo</p>
          <p className="text-[#C9953A] text-lg font-extrabold leading-tight">{PRODUCT.price}</p>
        </div>
        <Button variant="primary" className="!py-3 !px-6 !text-sm shrink-0">
          Empezar
        </Button>
      </div>
    </div>
  );
}
