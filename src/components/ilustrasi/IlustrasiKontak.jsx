import React from 'react'
import DekorasiHalaman from '../dekorasi/DekorasiHalaman'

export default function IlustrasiKontak({ kelas = '' }) {
  return (
    <div className={`w-full h-full relative flex flex-col items-center justify-center pt-16 pb-12 px-6 sm:px-10 select-none pop-up-kontainer ${kelas}`}>
      <DekorasiHalaman sisi="kiri" />

      <div className="relative w-full max-w-[440px] aspect-[4/3] flex items-center justify-center">
        <div className="absolute inset-x-12 bottom-4 h-12 bg-black/25 rounded-full blur-xl transform rotateX(75deg) translateZ(-10px)" />

        <div className="animasi-pop-up relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 380 280" className="w-full h-full drop-shadow-[0_24px_28px_rgba(13,17,54,0.4)]">
            <defs>
              <linearGradient id="langit-kontak" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#080b24" />
                <stop offset="50%" stopColor="#141d4a" />
                <stop offset="100%" stopColor="#253a66" />
              </linearGradient>
            </defs>

            <path
              d="M40,240 C40,90 80,30 190,30 C300,30 340,90 340,240 Z"
              fill="url(#langit-kontak)"
              stroke="#f1e8d4"
              strokeWidth="3"
            />
            <path
              d="M48,235 C48,98 86,40 190,40 C294,40 332,98 332,235 Z"
              fill="none"
              stroke="#f6d776"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.7"
            />

            <path
              d="M60,105 Q150,55 240,100 T325,75"
              stroke="#f6d776"
              strokeWidth="3.5"
              fill="none"
              opacity="0.4"
              strokeDasharray="14 10"
              className="animasi-arus-kuas"
            />
            <path
              d="M70,140 Q160,85 250,130 T330,110"
              stroke="#6fa8dc"
              strokeWidth="4"
              fill="none"
              opacity="0.45"
              strokeDasharray="18 12"
              className="animasi-arus-kuas"
            />

            <g transform="translate(100, 75)" className="animasi-berkedip">
              <circle cx="0" cy="0" r="14" fill="#f6d776" opacity="0.3" />
              <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#fff3b0" />
            </g>

            <g transform="translate(290, 75)" className="animasi-berkedip">
              <circle cx="0" cy="0" r="14" fill="#f6d776" opacity="0.3" />
              <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#fff3b0" />
            </g>

            <path d="M40,240 Q190,205 340,240 L340,265 L40,265 Z" fill="#0d1b2a" />
            <ellipse cx="190" cy="245" rx="125" ry="20" fill="#1b2a4a" />

            <g transform="translate(70, 185)">
              <path d="M0,45 Q70,25 150,45 L150,60 Q70,40 0,60 Z" fill="#52341d" stroke="#3b2413" strokeWidth="2" />
              <path d="M5,42 Q70,22 145,42 L145,46 Q70,26 5,46 Z" fill="#694326" />
            </g>

            <g transform="translate(145, 140)">
              <circle cx="28" cy="30" r="30" fill="#d9732f" stroke="#9c4210" strokeWidth="2" />
              <circle cx="28" cy="30" r="25" fill="#ea8643" />

              <circle cx="18" cy="25" r="9" fill="#fdfbef" stroke="#52341d" strokeWidth="1" />
              <circle cx="38" cy="25" r="9" fill="#fdfbef" stroke="#52341d" strokeWidth="1" />

              <line x1="13" y1="25" x2="23" y2="25" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="33" y1="25" x2="43" y2="25" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />

              <polygon points="28,32 24,39 32,39" fill="#f6d776" stroke="#b7791f" strokeWidth="1" />

              <polygon points="4,8 16,18 7,24" fill="#d9732f" />
              <polygon points="52,8 40,18 49,24" fill="#d9732f" />

              <ellipse cx="28" cy="48" rx="18" ry="10" fill="#f6d776" opacity="0.6" />
            </g>

            <g transform="translate(225, 130)">
              <line x1="14" y1="0" x2="14" y2="35" stroke="#718096" strokeWidth="2" />
              <circle cx="14" cy="2" r="3.5" fill="#d69e2e" />

              <rect x="2" y="35" width="24" height="40" rx="4" fill="#52341d" stroke="#3b2413" strokeWidth="2" />
              <rect x="5" y="40" width="18" height="28" rx="2" fill="#f6d776" opacity="0.95" />
              <circle cx="14" cy="54" r="4" fill="#ffffff" filter="drop-shadow(0 0 6px #ffffff)" />

              <polygon points="14,26 -1,36 29,36" fill="#3b2413" />
            </g>

            <g transform="translate(80, 110)" className="animasi-melayang">
              <path d="M0,0 Q12,-10 24,0 Q36,-10 48,0 Q24,8 0,0 Z" fill="#fdfbef" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="16" y="2" width="16" height="10" rx="1" fill="#fdfbef" stroke="#d9732f" strokeWidth="1" />
              <polygon points="16,2 24,8 32,2" fill="#ea8643" />
            </g>

            <g transform="translate(265, 95)" className="animasi-melayang">
              <path d="M0,0 Q10,-8 20,0 Q30,-8 40,0 Q20,6 0,0 Z" fill="#fdfbef" stroke="#cbd5e1" strokeWidth="1" />
              <rect x="14" y="2" width="14" height="9" rx="1" fill="#fdfbef" stroke="#1f4d36" strokeWidth="1" />
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3 text-center z-10">
        <span className="font-tulisan text-2xl text-hutan block">
          Diorama Burung Hantu Penjaga & Lentera Malam
        </span>
        <span className="font-isi text-[11px] uppercase tracking-widest text-tinta/50">
          Bab 5 · Kirimkan Merpati Pos
        </span>
      </div>
    </div>
  )
}
