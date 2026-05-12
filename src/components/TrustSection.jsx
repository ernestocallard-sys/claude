/* Si tienes testimonios reales, reemplaza el contenido de esta sección.
   Dejar los placeholders de texto como guía para sustituirlos. */

const qualities = [
  { icon: '✦', text: 'Lenguaje simple y directo, pensado para madres cansadas.' },
  { icon: '✦', text: 'Organizado por edad y por problema, para ir directo a lo que necesitas.' },
  { icon: '✦', text: 'Diseñado para consultar incluso cuando estás agotada a las 3 de la madrugada.' },
  { icon: '✦', text: 'Con pasos prácticos y aplicables, no solo teoría.' },
  { icon: '✦', text: 'Sin promesas mágicas ni lenguaje que te haga sentir culpable.' },
]

/* PLACEHOLDER TESTIMONIOS — Reemplazar con testimonios reales cuando estén disponibles
const testimonials = [
  {
    quote: "[PEGAR TESTIMONIO REAL]",
    name: "[Nombre de la mamá]",
    baby: "[Edad del bebé]",
  },
  ...
]
*/

export default function TrustSection() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-14">
          <p className="font-body text-gold text-sm tracking-widest uppercase font-medium mb-3">
            Cómo está pensado
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[42px] leading-tight text-moon text-balance">
            Pensado para madres que necesitan respuestas claras,{' '}
            <span className="text-gold-light">no más ruido</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {qualities.map(({ icon, text }, i) => (
            <div
              key={i}
              className="bg-navy-mid border border-gold/15 rounded-2xl p-6 flex gap-4 items-start"
            >
              <span className="text-gold text-lg leading-none flex-shrink-0">{icon}</span>
              <p className="font-body text-gray-blue text-[15px] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
