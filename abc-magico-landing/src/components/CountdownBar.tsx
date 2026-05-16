import { useState, useEffect } from 'react';
import { SHOW_COUNTDOWN } from '../data/content';

function getEndOfDay(): Date {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  return end;
}

export default function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState({ h: '00', m: '00', s: '00' });

  useEffect(() => {
    if (!SHOW_COUNTDOWN) return;
    const end = getEndOfDay();

    function update() {
      const diff = end.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ h: '00', m: '00', s: '00' });
        return;
      }
      const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
      const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
      const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
      setTimeLeft({ h, m, s });
    }

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (!SHOW_COUNTDOWN) return null;

  return (
    <span className="hidden sm:inline-flex items-center gap-1 text-[#C9953A] font-mono font-bold text-xs">
      {timeLeft.h}:{timeLeft.m}:{timeLeft.s}
    </span>
  );
}
