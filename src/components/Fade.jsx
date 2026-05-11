import { useInView } from '../hooks/useInView'

export default function Fade({ children, delay = 0, className = '', up = true }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: `opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms, transform 0.65s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'none' : up ? 'translateY(22px)' : 'translateY(0)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
