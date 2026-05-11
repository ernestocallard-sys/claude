export default function DiamondDivider({ light = false }) {
  const color = light ? 'rgba(255,253,249,0.2)' : '#C9953A30'
  const diamond = light ? 'rgba(255,253,249,0.35)' : '#C9953A50'

  return (
    <div className="flex items-center gap-3 px-8 my-2" aria-hidden="true">
      <div className="flex-1 h-px" style={{ backgroundColor: color }} />
      <div
        className="w-1.5 h-1.5 flex-shrink-0"
        style={{ backgroundColor: diamond, transform: 'rotate(45deg)' }}
      />
      <div className="flex-1 h-px" style={{ backgroundColor: color }} />
    </div>
  )
}
