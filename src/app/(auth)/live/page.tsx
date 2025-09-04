'use client';

import Header from '@/components/Header';
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';

const GOOGLE_FONTS = ['Hina Mincho', 'Creepster', 'Bayon'];

export default function StyledLiveClock() {
  const [now, setNow] = useState<number>(() => Date.now());
  const [font, setFont] = useState<string>(GOOGLE_FONTS[0]);
  const timer = useRef<number | null>(null);

  // Clock tick
  useEffect(() => {
    const tick = () => setNow(Date.now());
    timer.current = window.setInterval(tick, 1000);
    return () => {
      if (timer.current !== null) window.clearInterval(timer.current);
    };
  }, []);

  // Load font dynamically
  useEffect(() => {
    const linkId = 'dynamic-google-font';
    let link = document.getElementById(linkId) as HTMLLinkElement | null;
    const href = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, '+')}&display=swap`;
    if (link) {
      link.href = href;
    } else {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    }
  }, [font]);

  const d = dayjs(now);
  const hours = d.format('H');
  const min = d.format('mm');
  const seconds = d.format('ss');

  // ---- Day progress (00:00:00 -> 24:00:00) ----
  const secondsSinceMidnight =
    d.hour() * 3600 + d.minute() * 60 + d.second();
  const totalSeconds = 24 * 60 * 60; // 86400
  const dayProgress = (secondsSinceMidnight / totalSeconds) * 100;

  return (
    <main className="min-h-screen flex flex-col gap-8">
      <div className="opacity-5 hover:opacity-100 transition duration-300 cursor-pointer">
        <Header />
      </div>

      <div className="grow flex flex-col items-center justify-center px-6">
        <div>

          {/* Clock */}
          <div
            className="flex mx-auto items-baseline font-[800] text-[32px] sm:text-[64px] md:text-[96px] lg:text-[228px]"
            style={{ fontFamily: font }}
          >
            <span>{hours}</span>
            <span>:</span>
            <span className="text-gray-400">{min}</span>
            <span className="text-gray-500 text-[20px]">, {seconds}</span>
          </div>

          {/* Day progress bar */}
          <div
            className="max-w-[160px] mx-auto"
            role="progressbar"
            aria-label="Day progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Number(dayProgress.toFixed(2))}
          >
            <div className="h-1 w-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-800 via-emerald-600 to-emerald-200"
                style={{ width: `${dayProgress}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-xs text-white/50">
              <span>{dayProgress.toFixed(1)}%</span>
            </div>
          </div>

          {/* Font selector */}
          <div className="mt-6 flex items-center justify-center opacity-25 hover:opacity-100 transition duration-300 cursor-pointer">
            <select
              id="font-select"
              value={font}
              onChange={(e) => setFont(e.target.value)}
              className="bg-white/5 rounded-full text-white px-3 py-1"
            >
              {GOOGLE_FONTS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </main>
  );
}
