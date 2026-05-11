export default function Footer() {
  return (
    <footer
      className="py-8 px-4 text-center"
      style={{ backgroundColor: '#3D2B2B' }}
    >
      <p className="font-sans text-xs" style={{ color: '#FFFDF9', opacity: 0.4 }}>
        © {new Date().getFullYear()} Lunera · Mi Boda Inteligente. Todos los derechos reservados.
      </p>
      <p className="font-sans text-xs mt-2" style={{ color: '#FFFDF9', opacity: 0.3 }}>
        El acceso al material se gestiona a través de Hotmart. La garantía está sujeta a los
        términos de la plataforma de pago.
      </p>
    </footer>
  )
}
