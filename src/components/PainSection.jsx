import Fade from './Fade'
import DiamondDivider from './DiamondDivider'

const PAINS = [
  {
    num: '01',
    text: 'Ya pediste precios y cada cotización te hace sentir que el presupuesto no alcanza.',
  },
  {
    num: '02',
    text: 'Tienes mil ideas guardadas, pero no sabes cuáles valen la pena para tu realidad.',
  },
  {
    num: '03',
    text: 'Te da miedo ahorrar en lo incorrecto y que tu boda termine viéndose improvisada.',
  },
  {
    num: '04',
    text: 'No sabes qué contratar primero, qué puede esperar y qué podría salirte caro después.',
  },
]

export default function PainSection() {
  return (
    <section className="py-16 md:py-24 relative" style={{ backgroundColor: '#3D2B2B' }}>

      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ backgroundColor: 'rgba(201,149,58,0.2)' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        <Fade>
          <div className="text-center mb-12">
            <p
              className="font-sans uppercase tracking-[0.2em] text-xs mb-4"
              style={{ color: '#C4787A' }}
            >
              antes de empezar
            </p>
            <h2
              className="font-serif font-bold"
              style={{ color: '#FFFDF9', fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', lineHeight: 1.15 }}
            >
              ¿Te está pasando esto?
            </h2>
          </div>
        </Fade>

        <DiamondDivider light />

        {/* Pain cards */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {PAINS.map((p, i) => (
            <Fade key={p.num} delay={i * 80}>
              <div
                className="group rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'rgba(255,253,249,0.05)',
                  border: '1px solid rgba(196,120,122,0.25)',
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="font-serif font-bold flex-shrink-0 leading-none mt-0.5"
                    style={{ color: 'rgba(196,120,122,0.4)', fontSize: '1.4rem' }}
                  >
                    {p.num}
                  </span>
                  <p
                    className="font-sans leading-relaxed text-sm sm:text-base"
                    style={{ color: 'rgba(255,253,249,0.75)' }}
                  >
                    {p.text}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* Closing line */}
        <Fade delay={360}>
          <p
            className="text-center font-serif italic mt-10 text-base sm:text-lg"
            style={{ color: 'rgba(255,253,249,0.4)' }}
          >
            Si respondiste sí a alguna de estas, sigue leyendo.
          </p>
        </Fade>

      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ backgroundColor: 'rgba(201,149,58,0.2)' }} />
    </section>
  )
}
