import { CHECKOUT_MAIN } from '../App'

export default function TopBar() {
  return (
    <div className="bg-night border-b border-gold/20 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse" />
        <p className="text-center text-sm text-gold-light font-body font-light tracking-wide">
          Acceso inmediato al{' '}
          <span className="font-medium">Manual del Sueño Infantil</span>
          {' '}+ 3 bonuses Lunera
        </p>
        <a
          href={CHECKOUT_MAIN}
          className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-night bg-gold-light hover:bg-gold transition-colors px-3 py-1 rounded-full whitespace-nowrap"
        >
          Quiero acceder →
        </a>
      </div>
    </div>
  )
}
