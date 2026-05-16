import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bg?: string;
}

export default function Section({ id, children, className = '', bg = 'bg-[#FAFAF7]' }: SectionProps) {
  return (
    <section id={id} className={`${bg} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
