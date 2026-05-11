// Renderiza la imagen del producto o un placeholder elegante si la URL no es válida.
export default function ProductImage({ src, alt, className = '' }) {
  const isPlaceholder = !src || src.startsWith('PEGAR_URL')

  if (isPlaceholder) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed text-center p-4 ${className}`}
        style={{ borderColor: '#C4787A80', backgroundColor: '#F7ECEA' }}
      >
        <span className="font-sans text-xs font-medium leading-tight" style={{ color: '#8B4557' }}>
          {alt}
        </span>
        <span className="font-sans text-xs mt-1.5" style={{ color: '#C4787A' }}>
          Insertar imagen
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover ${className}`}
      loading="lazy"
    />
  )
}
