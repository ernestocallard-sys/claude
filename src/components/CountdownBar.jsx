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

    const tick = () => setTimeLeft(Math.max(0, endTime - Date.now()))
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  if (timeLeft === null) return null

  return {
    h: Math.floor(timeLeft / 3_600_000),
    m: Math.floor((timeLeft % 3_600_000) / 60_000),
    s: Math.floor((timeLeft % 60_000) / 1_000),
    expired: timeLeft === 0,
  }
}

const z = (n) => String(n).padStart(2, '0')

function Digit({ value, label }) {
  return (
    <span className="inline-flex items-baseline gap-0.5">
      <span
        className="font-mono font-bold tabular-nums"
        style={{ color: '#FFFDF9', fontSize: '0.95rem', lineHeight: 1 }}
      >
        {z(value)}
      </span>
      <span style={{ color: 'rgba(255,253,249,0.55)', fontSize: '0.6rem' }}>{label}</span>
    </span>
  )
}

export default function CountdownBar() {
  const t = useCountdown()

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-14 md:h-11 flex items-center justify-center px-4"
      style={{ backgroundColor: '#8B4557' }}
    >
      <a
        href={CHECKOUT_FULL_GUIDE}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-center no-underline"
      >
        {/* Texto de oferta */}
        <span
          className="font-sans font-medium leading-none"
          style={{ color: 'rgba(255,253,249,0.9)', fontSize: '0.72rem' }}
        >
          Especial Día de las Madres · Guía completa por solo USD ${PRICE_FULL_CURRENT} · Termina hoy
        </span>

        {/* Timer */}
        {t && !t.expired && (
          <span
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full flex-shrink-0"
            style={{ backgroundColor: 'rgba(255,253,249,0.15)' }}
          >
            <span style={{ color: 'rgba(255,253,249,0.55)', fontSize: '0.6rem' }}>termina en</span>
            <Digit value={t.h} label="h" />
            <span style={{ color: 'rgba(255,253,249,0.4)', fontSize: '0.75rem' }}>·</span>
            <Digit value={t.m} label="m" />
            <span style={{ color: 'rgba(255,253,249,0.4)', fontSize: '0.75rem' }}>·</span>
            <Digit value={t.s} label="s" />
          </span>
        )}

        {t && t.expired && (
          <span style={{ color: 'rgba(255,253,249,0.6)', fontSize: '0.7rem' }} className="italic">
            Oferta finalizada
          </span>
        )}
      </a>
    </div>
  )
}
