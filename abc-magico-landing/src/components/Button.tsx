import React from 'react';
import { getCheckoutAction } from '../data/content';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline-light';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  sectionTarget?: string;
}

export default function Button({ variant = 'primary', children, className = '', onClick, sectionTarget = 'oferta' }: ButtonProps) {
  const { href, isExternal } = getCheckoutAction(sectionTarget);

  const baseClasses = {
    primary: 'inline-flex items-center justify-center gap-2 bg-[#C9953A] text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:brightness-110 active:scale-95 transition-all duration-200 text-base sm:text-lg',
    secondary: 'inline-flex items-center justify-center gap-2 border-2 border-[#3D2B1F] text-[#3D2B1F] font-semibold px-6 py-3 rounded-2xl hover:bg-[#3D2B1F] hover:text-[#FAFAF7] transition-all duration-200 text-sm sm:text-base',
    'outline-light': 'inline-flex items-center justify-center gap-2 border-2 border-[#FAFAF7] text-[#FAFAF7] font-semibold px-6 py-3 rounded-2xl hover:bg-[#FAFAF7] hover:text-[#3D2B1F] transition-all duration-200 text-sm sm:text-base',
  };

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseClasses[variant]} ${className}`} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={`${baseClasses[variant]} ${className}`} onClick={onClick}>
      {children}
    </a>
  );
}
