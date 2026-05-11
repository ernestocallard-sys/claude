import DiamondDivider from './DiamondDivider'

export default function Footer() {
  return (
    <footer className="py-8 px-4" style={{ backgroundColor: '#3D2B2B' }}>
      <DiamondDivider light />
      <div className="max-w-4xl mx-auto mt-6 text-center">
        <p
          className="font-sans font-light uppercase tracking-[0.25em] mb-3"
          style={{ color: 'rgba(255,253,249,0.3)', fontSize: '0.6rem' }}
        >
          Lunera
        </p>
        <p className="font-sans text-xs" style={{ color: 'rgba(255,253,249,0.25)' }}>
          © {new Date().getFullYear()} Lunera · Mi Boda Inteligente. Todos los derechos reservados.
        </p>
        <p className="font-sans text-xs mt-1.5" style={{ color: 'rgba(255,253,249,0.18)' }}>
          El acceso al material se gestiona a través de Hotmart. La garantía está sujeta a los términos de la plataforma de pago.
        </p>
      </div>
    </footer>
  )
}
