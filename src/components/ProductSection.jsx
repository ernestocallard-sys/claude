export default function ProductSection() {
  return (
    <section className="py-16 md:py-20" style={{ backgroundColor: '#F7ECEA' }}>
      <div className="section-container">

        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-serif font-bold leading-tight mb-5"
            style={{ color: '#3D2B2B', fontSize: 'clamp(1.6rem, 4vw, 2.3rem)' }}
          >
            Mi Boda Inteligente no es solo un ebook de ideas bonitas.
          </h2>

          <p
            className="font-sans text-base sm:text-lg leading-relaxed mb-10"
            style={{ color: '#3D2B2B', opacity: 0.72 }}
          >
            Es una guía práctica para dejar de improvisar decisiones y empezar
            a planear con criterio: qué hacer primero, cómo ordenar tu
            presupuesto, dónde ahorrar sin perder calidad y cómo evitar errores
            que pueden salirte caros.
          </p>

          {/* Callout */}
          <blockquote
            className="relative rounded-2xl px-8 py-7 text-center shadow-sm"
            style={{ backgroundColor: '#FFFDF9', borderTop: '3px solid #C9953A' }}
          >
            <span
              className="font-serif italic font-medium text-lg sm:text-xl leading-snug"
              style={{ color: '#8B4557' }}
            >
              "No se trata de hacer una boda barata. Se trata de tomar mejores
              decisiones para que tu presupuesto rinda más."
            </span>
          </blockquote>
        </div>

      </div>
    </section>
  )
}
