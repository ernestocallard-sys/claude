const PAIN_CARDS = [
  'Ya pediste precios y cada cotización te hace sentir que el presupuesto no alcanza.',
  'Tienes mil ideas guardadas, pero no sabes cuáles valen la pena para tu realidad.',
  'Te da miedo ahorrar en lo incorrecto y que tu boda termine viéndose improvisada.',
  'No sabes qué contratar primero, qué puede esperar y qué podría salirte caro después.',
]

export default function PainSection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#F7ECEA' }}>
      <div className="section-container">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2
            className="font-serif font-bold"
            style={{ color: '#3D2B2B', fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}
          >
            ¿Te está pasando esto?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {PAIN_CARDS.map((text, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 shadow-sm"
              style={{ backgroundColor: '#FFFDF9', borderLeft: '3px solid #C4787A' }}
            >
              <p className="font-sans text-sm sm:text-base leading-relaxed" style={{ color: '#3D2B2B', opacity: 0.82 }}>
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
