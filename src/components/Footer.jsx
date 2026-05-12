export default function Footer() {
  return (
    <footer className="bg-[#040D19] border-t border-gold/10 py-8">
      <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#C9953A" fillOpacity="0.7"/>
          </svg>
          <span className="font-body text-gold-light/60 text-sm tracking-wide">Lunera</span>
        </div>
        <p className="font-body text-gray-blue/40 text-xs text-center">
          Este material es educativo y no reemplaza la atención pediátrica. · Material digital · Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
