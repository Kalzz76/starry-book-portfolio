import React from 'react'

export default function BotolRamuan({ kategori = 'Web', kelas = 'w-10 h-14' }) {
  let warnaCairan = '#3fae6b'
  if (kategori === 'Mobile') {
    warnaCairan = '#2f6fba'
  } else if (kategori !== 'Web') {
    warnaCairan = '#4b2a6b'
  }

  return (
    <div className={`relative flex items-center justify-center select-none ${kelas}`} aria-hidden="true">
      <svg viewBox="0 0 60 80" className="w-full h-full overflow-visible drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        <rect x="23" y="2" width="14" height="9" rx="1.5" fill="#8a5a2b" stroke="#5c3e21" strokeWidth="1" />

        <rect x="21" y="9" width="18" height="4" rx="1" fill="#c9a227" opacity="0.9" />

        <path
          d="M25,13 L25,24 C25,27 12,42 12,56 C12,68 20,76 30,76 C40,76 48,68 48,56 C48,42 35,27 35,24 L35,13 Z"
          fill="rgba(244, 234, 210, 0.08)"
          stroke="#c9a227"
          strokeWidth="1.5"
        />

        <clipPath id={`clip-cairan-${kategori}`}>
          <path d="M25,13 L25,24 C25,27 12,42 12,56 C12,68 20,76 30,76 C40,76 48,68 48,56 C48,42 35,27 35,24 L35,13 Z" />
        </clipPath>

        <g clipPath={`url(#clip-cairan-${kategori})`}>
          <path
            d="M8,44 Q20,38 30,44 T52,44 L52,80 L8,80 Z"
            fill={warnaCairan}
            opacity="0.88"
          />
          <path
            d="M8,48 Q20,52 30,48 T52,48 L52,80 L8,80 Z"
            fill={warnaCairan}
            opacity="0.6"
          />

          <circle cx="24" cy="58" r="2" fill="#fff" opacity="0.7" className="animate-ping" style={{ animationDuration: '3s' }} />
          <circle cx="36" cy="66" r="1.5" fill="#fff" opacity="0.6" className="animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <circle cx="28" cy="70" r="1.2" fill="#fff" opacity="0.5" />
        </g>

        <path
          d="M17,48 C15,54 15,62 18,68"
          fill="none"
          stroke="#fff"
          strokeWidth="1.2"
          opacity="0.55"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
