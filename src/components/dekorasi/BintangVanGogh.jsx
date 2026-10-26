import React from 'react'

export default function BintangVanGogh({
  ukuran = 40,
  jejakAngin = false,
  arahAngin = 'kiri',
  kelas = '',
  gaya = {}
}) {
  const r = ukuran / 2
  return (
    <div
      className={`relative inline-block pointer-events-none select-none ${kelas}`}
      style={gaya}
    >
      {jejakAngin && (
        <svg
          viewBox="0 0 160 80"
          className={`absolute -top-4 pointer-events-none opacity-80 ${
            arahAngin === 'kiri' ? '-left-28 scale-x-[-1]' : '-right-28'
          }`}
          style={{ width: ukuran * 3.5, height: ukuran * 1.8 }}
        >
          <path
            d="M10,40 Q60,10 110,35 T155,42"
            fill="none"
            stroke="#aee2ff"
            strokeWidth="3.5"
            strokeLinecap="round"
            className="animasi-angin"
          />
          <path
            d="M25,50 Q75,25 120,45 T158,48"
            fill="none"
            stroke="#ffeaa7"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animasi-angin"
            style={{ animationDelay: '0.8s' }}
          />
          <path
            d="M40,32 Q85,15 130,30"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.75"
            className="animasi-angin"
            style={{ animationDelay: '1.6s' }}
          />
        </svg>
      )}

      <div className="animasi-bintang-3d relative flex items-center justify-center">
        <div
          className="absolute rounded-full blur-md bg-bintang/40"
          style={{ width: ukuran * 1.2, height: ukuran * 1.2 }}
        />
        <svg
          viewBox="0 0 100 100"
          style={{ width: ukuran, height: ukuran }}
          className="drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
        >
          <defs>
            <linearGradient id="facet-terang" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fffde6" />
              <stop offset="100%" stopColor="#fdf09d" />
            </linearGradient>
            <linearGradient id="facet-sedang" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f8dc74" />
              <stop offset="100%" stopColor="#e5be38" />
            </linearGradient>
            <linearGradient id="facet-gelap" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4a329" />
              <stop offset="100%" stopColor="#aa7c11" />
            </linearGradient>
          </defs>

          <polygon points="50,6 50,50 63,38" fill="url(#facet-terang)" />
          <polygon points="50,6 50,50 37,38" fill="url(#facet-sedang)" />

          <polygon points="95,38 50,50 71,58" fill="url(#facet-sedang)" />
          <polygon points="95,38 50,50 63,38" fill="url(#facet-terang)" />

          <polygon points="78,92 50,50 50,72" fill="url(#facet-gelap)" />
          <polygon points="78,92 50,50 71,58" fill="url(#facet-sedang)" />

          <polygon points="22,92 50,50 29,58" fill="url(#facet-gelap)" />
          <polygon points="22,92 50,50 50,72" fill="url(#facet-sedang)" />

          <polygon points="5,38 50,50 37,38" fill="url(#facet-sedang)" />
          <polygon points="5,38 50,50 29,58" fill="url(#facet-gelap)" />

          <polygon
            points="50,6 63,38 95,38 71,58 78,92 50,72 22,92 29,58 5,38 37,38"
            fill="none"
            stroke="#fff5c0"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
