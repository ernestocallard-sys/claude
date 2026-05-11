import Fade from './Fade'

const PILLARS = [
  {
    num: '1',
    title: 'Prioridades claras',
    body: 'Para saber qué decisiones tienen más impacto real en tu boda y enfocar tu presupuesto donde más importa.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    num: '2',
    title: 'Presupuesto con criterio',
    body: 'Para ahorrar donde sí conviene y no cortar en lo que sí importa, sin que tu boda se vea descuidada.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    num: '3',
    title: 'Ruta paso a paso',
    body: 'Para organizarte sin sentir que todo depende de recordar mil cosas. Saber qué hacer primero y qué puede esperar.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
]

export default function MechanismSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: '#F7ECEA' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <Fade>
          <div className="text-center mb-12">
            <p
              className="font-sans uppercase tracking-[0.2em] text-xs mb-4"
              style={{ color: '#C4787A' }}
            >
              cómo funciona
            </p>
            <h2
              className="font-serif font-bold leading-snug"
              style={{ color: '#3D2B2B', fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}
            >
              Un plan claro para dejar de improvisar
            </h2>
            <p
              className="font-sans mt-4 mx-auto max-w-xl"
              style={{ color: '#3D2B2B', opacity: 0.65, fontSize: '0.97rem' }}
            >
              Mi Boda Inteligente te ayuda a ordenar tus decisiones antes
              de gastar: qué hacer primero, qué puede esperar, dónde
              ahorrar y cómo evitar gastos innecesarios.
            </p>
          </div>
        </Fade>

        {/* 3 pillars */}
        <div className="grid md:grid-cols-3 gap-5">
          {PILLARS.map((p, i) => (
            <Fade key={p.num} delay={i * 100}>
              <div
                className="rounded-2xl p-7 h-full flex flex-col gap-4 group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: '#FFFDF9' }}
              >
                {/* Icon + number */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#F7ECEA', color: '#8B4557' }}
                  >
                    {p.icon}
                  </div>
                  <span
                    className="font-serif font-bold"
                    style={{ color: 'rgba(201,149,58,0.35)', fontSize: '2rem', lineHeight: 1 }}
                  >
                    {p.num}
                  </span>
                </div>

                <div>
                  <h3
                    className="font-serif font-semibold mb-2"
                    style={{ color: '#3D2B2B', fontSize: '1.1rem' }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: '#3D2B2B', opacity: 0.65 }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  )
}
