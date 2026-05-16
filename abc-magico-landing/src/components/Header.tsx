import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const navLinks = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Qué incluye', href: '#que-incluye' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Garantía', href: '#garantia' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#FAFAF7] border-b border-[#F5E6E8] sticky top-[40px] z-40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <a href="#" className="font-bold text-xl text-[#3D2B1F] tracking-tight">
          🌙 Lunera
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[#6F6A64] font-medium hover:text-[#3D2B1F] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="primary" className="!py-2.5 !px-6 !text-sm">
            Empezar hoy
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-[#3D2B1F]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#FAFAF7] border-t border-[#F5E6E8] px-4 pb-4 pt-2 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[#3D2B1F] font-medium py-1.5"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button variant="primary" className="!py-3 !text-sm mt-1 w-full" onClick={() => setOpen(false)}>
            Empezar hoy
          </Button>
        </div>
      )}
    </header>
  );
}
