import Fade from './Fade'

const BENEFITS = [
  'Saber qué gastos sí valen la pena y cuáles puedes recortar sin culpa.',
  'Evitar compras impulsivas que inflan el presupuesto sin mejorar la boda.',
  'Tener una ruta clara para saber qué hacer primero y qué no dejar para última hora.',
  'Convertir ideas de Pinterest en decisiones realistas para tu presupuesto.',
  'Organizar una boda cuidada, bonita y coherente sin sentir que estás improvisando.',
]

export default function Benefits() {
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
              resultados esperados
            </p>
            <h2
              className="font-serif font-bold"
              style={{ color: '#3D2B2B', fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}
            >
              Lo que vas a lograr
            </h2>
          </div>
        </Fade>

        {/* Benefits list */}
        <div className="space-y-3">
          {BENEFITS.map((b, i) => (
            <Fade key={i} delay={i * 75}>
              <div
                className="group flex items-start gap-4 rounded-2xl p-5 transition-all duration-300 hover:shadow-md"
                style={{ backgroundColor: '#FFFDF9' }}
              >
                {/* Gold check */}
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: 'rgba(201,149,58,0.12)', border: '1px solid rgba(201,149,58,0.3)' }}
                >
                  <span style={{ color: '#C9953A', fontSize: '0.7rem', fontWeight: 700 }}>✓</span>
                </div>

                <p
                  className="font-sans text-sm sm:text-base leading-relaxed"
                  style={{ color: '#3D2B2B', opacity: 0.8 }}
                >
                  {b}
                </p>
              </div>
            </Fade>
          ))}
        </div>

      </div>
    </section>
  )
}
