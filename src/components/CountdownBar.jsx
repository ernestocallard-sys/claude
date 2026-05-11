import { useState, useEffect } from 'react'
import { COUNTDOWN_HOURS, PRICE_FULL_CURRENT, CHECKOUT_FULL_GUIDE } from '../constants'

const STORAGE_KEY = 'lunera_mbi_countdown_v1'

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    let stored = localStorage.getItem(STORAGE_KEY)

    if (!stored) {
      stored = String(Date.now())
      localStorage.setItem(STORAGE_KEY, stored)
    }

    const endTime = parseInt(stored, 10) + COUNTDOWN_HOURS * 3_600_000

    const tick = () => {
      const remaining = endTime - Date.now()
      setTimeLeft(remaining > 0 ? remaining : 0)
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (timeLeft === null) return null

  return {
    hours:   Math.floor(timeLeft / 3_600_000),
    minutes: Math.floor((timeLeft % 3_600_000) / 60_000),
    seconds: Math.floor((timeLeft % 60_000) / 1_000),
    expired: timeLeft === 0,
  }
}

const pad = (n) => String(n).padStart(2, '0')

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center leading-none">
      <span
        className="font-mono font-bold text-warm-white tabular-nums"
        style={{ fontSize: '1.1rem', lineHeight: 1 }}
      >
        {pad(value)}
      </span>
      <span className="font-sans uppercase tracking-widest text-warm-white/60" style={{ fontSize: '0.55rem' }}>
        {label}
      </span>
    </div>
  )
}

export default function CountdownBar() {
  const countdown = useCountdown()

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 py-2 px-4"
      style={{ backgroundColor: '#8B4557' }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
        {/* Texto de oferta */}
        <a
          href={CHECKOUT_FULL_GUIDE}
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans font-medium text-warm-white/90 text-xs sm:text-sm text-center leading-snug hover:text-warm-white transition-colors"
        >
          Especial Día de las Madres: guía completa por solo USD ${PRICE_FULL_CURRENT} · Termina hoy
        </a>

        {/* Contador */}
        {countdown && !countdown.expired && (
          <div className="flex items-center gap-2">
            <span className="font-sans text-xs text-warm-white/70 hidden sm:inline">
              Oferta termina en:
            </span>
            <div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{ backgroundColor: 'rgba(255,253,249,0.15)' }}
            >
              <TimeUnit value={countdown.hours}   label="horas" />
              <span className="text-warm-white/50 font-bold text-sm pb-1">·</span>
              <TimeUnit value={countdown.minutes} label="min" />
              <span className="text-warm-white/50 font-bold text-sm pb-1">·</span>
              <TimeUnit value={countdown.seconds} label="seg" />
            </div>
          </div>
        )}

        {countdown && countdown.expired && (
          <span className="font-sans text-xs text-warm-white/70 italic">
            La oferta especial ha finalizado
          </span>
        )}
      </div>
    </div>
  )
}
