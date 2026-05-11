const TRUST_POINTS = [
  'Contenido práctico, no solo inspiración bonita.',
  'Diseñado para ayudarte a tomar mejores decisiones.',
  'Puedes revisarlo desde tu celular, tablet o computadora.',
  'Ideal si quieres organizar tu boda sin contratar wedding planner.',
]

// ── Espacio para testimonios reales ──────────────────────────────────────────
// Cuando tengas testimonios, reemplaza los placeholders de abajo con:
//   { name: 'Nombre de la novia', text: 'Texto del testimonio.', location: 'País' }
// y descomenta el bloque de testimonios.
// ─────────────────────────────────────────────────────────────────────────────

export default function TrustSection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#F7ECEA' }}>
      <div className="section-container">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="font-serif font-bold"
            style={{ color: '#3D2B2B', fontSize: 'clamp(1.6rem, 4vw, 2.3rem)' }}
          >
            Pensado para novias que quieren organizarse mejor desde hoy
          </h2>
        </div>

        {/* Trust points */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
          {TRUST_POINTS.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-xl p-5"
              style={{ backgroundColor: '#FFFDF9' }}
            >
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ backgroundColor: '#F7ECEA', color: '#8B4557' }}
              >
                ✓
              </span>
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#3D2B2B', opacity: 0.8 }}>
                {point}
              </p>
            </div>
          ))}
        </div>

        {/*
          ── TESTIMONIOS ────────────────────────────────────────────────────
          Reemplaza este bloque cuando tengas testimonios reales.
          Ejemplo de estructura:

          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {[
              { name: 'Ana M.', location: 'México', text: 'Testimonio aquí...' },
              { name: 'Camila R.', location: 'Colombia', text: 'Testimonio aquí...' },
            ].map((t) => (
              <div key={t.name} className="rounded-2xl p-6 shadow-sm" style={{ backgroundColor: '#FFFDF9' }}>
                <p className="font-sans text-sm italic mb-4" style={{ color: '#3D2B2B', opacity: 0.75 }}>
                  "{t.text}"
                </p>
                <div>
                  <p className="font-sans text-xs font-semibold" style={{ color: '#8B4557' }}>{t.name}</p>
                  <p className="font-sans text-xs" style={{ color: '#3D2B2B', opacity: 0.5 }}>{t.location}</p>
                </div>
              </div>
            ))}
          </div>
          ────────────────────────────────────────────────────────────────── */}

      </div>
    </section>
  )
}
