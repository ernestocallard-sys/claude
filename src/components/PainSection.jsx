const painPoints = [
  {
    icon: '🌙',
    text: 'Tu bebé se despierta muchas veces y ya no sabes si es hambre, hábito o cansancio.',
  },
  {
    icon: '🤱',
    text: 'Solo se duerme al pecho, en brazos o con movimiento, y tú ya estás al límite.',
  },
  {
    icon: '⏱',
    text: 'Las siestas duran poco y todo el día se desordena.',
  },
  {
    icon: '📱',
    text: 'Has probado consejos sueltos de Instagram, TikTok o grupos de madres, pero ninguno te dice qué hacer primero.',
  },
  {
    icon: '💙',
    text: 'Te sientes culpable por querer dormir, aunque sabes que necesitas descansar para cuidar bien.',
  },
]

export default function PainSection() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-body text-gold text-sm tracking-widest uppercase font-medium mb-3">
            Reconocimiento
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-night leading-tight text-balance">
            Si tus noches se sienten así,{' '}
            <span className="text-gold">no estás sola</span>
          </h2>
        </div>

        {/* Pain cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {painPoints.map(({ icon, text }, i) => (
            <div
              key={i}
              className={`bg-moon border border-beige-dark rounded-2xl p-6 shadow-card flex flex-col gap-3 ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <span className="text-2xl leading-none">{icon}</span>
              <p className="font-body text-night/80 text-[15px] leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <p className="mt-12 text-center font-display text-xl text-night/70 italic max-w-2xl mx-auto leading-relaxed">
          "Nadie te enseñó cómo funciona el sueño de un bebé.<br className="hidden sm:block" />
          No es tu culpa no saberlo."
        </p>
      </div>
    </section>
  )
}
