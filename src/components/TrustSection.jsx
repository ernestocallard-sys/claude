import Fade from './Fade'

const TRUST_POINTS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    text: 'Contenido práctico, no solo inspiración bonita.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: 'Diseñado para ayudarte a tomar mejores decisiones.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    text: 'Puedes revisarlo desde tu celular, tablet o computadora.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: 'Ideal si quieres organizar tu boda sin contratar wedding planner.',
  },
]

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#F7ECEA' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <Fade>
          <div className="text-center mb-12">
            <p
              className="font-sans uppercase tracking-[0.2em] text-xs mb-4"
              style={{ color: '#C4787A' }}
            >
              por qué funciona
            </p>
            <h2
              className="font-serif font-bold"
              style={{ color: '#3D2B2B', fontSize: 'clamp(1.6rem, 4vw, 2.3rem)' }}
            >
              Pensado para novias que quieren organizarse mejor desde hoy
            </h2>
          </div>
        </Fade>

        {/* Trust grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {TRUST_POINTS.map((p, i) => (
            <Fade key={i} delay={i * 80}>
              <div
                className="flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: '#FFFDF9' }}
              >
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: '#F7ECEA', color: '#8B4557' }}
                >
                  {p.icon}
                </div>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#3D2B2B', opacity: 0.78 }}>
                  {p.text}
                </p>
              </div>
            </Fade>
          ))}
        </div>

        {/*
          ── TESTIMONIOS ────────────────────────────────────────────
          Reemplaza este bloque cuando tengas testimonios reales.
          Estructura esperada:
          [
            { name: 'Ana M.', location: 'México', stars: 5, text: 'Texto...' },
            { name: 'Camila R.', location: 'Colombia', stars: 5, text: 'Texto...' },
          ]
          Descomenta el bloque a continuación y elimina este comentario.
          ──────────────────────────────────────────────────────────── */}

        {/*
        <div className="grid sm:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl p-6" style={{ backgroundColor: '#FFFDF9' }}>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: '#C9953A', fontSize: '0.85rem' }}>★</span>
                ))}
              </div>
              <p className="font-sans text-sm italic mb-4" style={{ color: '#3D2B2B', opacity: 0.72 }}>
                "{t.text}"
              </p>
              <div>
                <p className="font-sans text-xs font-semibold" style={{ color: '#8B4557' }}>{t.name}</p>
                <p className="font-sans text-xs" style={{ color: '#3D2B2B', opacity: 0.45 }}>{t.location}</p>
              </div>
            </div>
          ))}
        </div>
        */}

      </div>
    </section>
  )
}
