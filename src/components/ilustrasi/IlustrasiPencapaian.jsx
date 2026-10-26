import React from 'react'
import DekorasiHalaman from '../dekorasi/DekorasiHalaman'
import BintangVanGogh from '../dekorasi/BintangVanGogh'

export default function IlustrasiPencapaian({ kelas = '' }) {
  return (
    <div className={`w-full h-full relative flex flex-col items-center justify-center pt-16 pb-12 px-6 sm:px-10 select-none pop-up-kontainer ${kelas}`}>
      <DekorasiHalaman sisi="kiri" />

      <div className="relative w-full max-w-[440px] aspect-[4/3] flex items-center justify-center">
        <div className="absolute inset-x-12 bottom-4 h-12 bg-black/25 rounded-full blur-xl transform rotateX(75deg) translateZ(-10px)" />

        <div className="animasi-pop-up relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 380 280" className="w-full h-full drop-shadow-[0_24px_28px_rgba(13,17,54,0.4)]">
            <defs>
              <linearGradient id="langit-piala" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#080c29" />
                <stop offset="60%" stopColor="#15245a" />
                <stop offset="100%" stopColor="#1e3a6a" />
              </linearGradient>
              <linearGradient id="emas-piala" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff8db" />
                <stop offset="40%" stopColor="#f6d776" />
                <stop offset="100%" stopColor="#b7791f" />
              </linearGradient>
            </defs>

            <path
              d="M40,240 C40,90 80,30 190,30 C300,30 340,90 340,240 Z"
              fill="url(#langit-piala)"
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

            <polygon points="190,40 130,240 250,240" fill="#f6d776" opacity="0.1" />

            <path
              d="M60,110 Q150,60 230,105 T320,80"
              stroke="#f6d776"
              strokeWidth="3.5"
              fill="none"
              opacity="0.4"
              strokeDasharray="14 10"
              className="animasi-arus-kuas"
            />
            <path
              d="M70,140 Q160,90 250,135 T330,115"
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

            <g transform="translate(285, 75)" className="animasi-berkedip">
              <circle cx="0" cy="0" r="14" fill="#f6d776" opacity="0.3" />
              <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#fff3b0" />
            </g>

            <path d="M40,240 Q190,205 340,240 L340,265 L40,265 Z" fill="#1f2d3d" />
            <ellipse cx="190" cy="245" rx="120" ry="20" fill="#3b4a5a" />

            <g transform="translate(140, 190)">
              <rect x="0" y="24" width="100" height="32" rx="4" fill="#694326" stroke="#4a2f1b" strokeWidth="2" />
              <rect x="-6" y="18" width="112" height="10" rx="3" fill="#52341d" />

              <rect x="15" y="0" width="70" height="20" rx="3" fill="#8c5832" stroke="#52341d" strokeWidth="1.5" />
              <rect x="10" y="-4" width="80" height="8" rx="2" fill="#694326" />
            </g>

            <g transform="translate(190, 140)">
              <path d="M-18,25 L-12,-10 L12,-10 L18,25 Z" fill="url(#emas-piala)" />
              <ellipse cx="0" cy="25" rx="20" ry="6" fill="#b7791f" />
              <ellipse cx="0" cy="-10" rx="14" ry="4" fill="#d69e2e" />

              <path
                d="M-30,-50 Q0,-20 30,-50 L25,-12 Q0,10 -25,-12 Z"
                fill="url(#emas-piala)"
                stroke="#b7791f"
                strokeWidth="2"
              />

              <path d="M-28,-42 Q-45,-30 -26,-15" stroke="#d69e2e" strokeWidth="4" fill="none" strokeLinecap="round" />
              <path d="M28,-42 Q45,-30 26,-15" stroke="#d69e2e" strokeWidth="4" fill="none" strokeLinecap="round" />

              <circle cx="0" cy="-30" r="12" fill="#fff8db" opacity="0.3" />
              <polygon points="0,-40 3,-33 10,-33 5,-28 7,-21 0,-25 -7,-21 -5,-28 -10,-33 -3,-33" fill="#ffffff" />
            </g>

            <g transform="translate(190, 62)" className="animasi-denyut-bintang">
              <rect x="-8" y="16" width="16" height="20" fill="#e2e8f0" stroke="#718096" strokeWidth="0.5" opacity="0.6" rx="1" />
              <circle cx="0" cy="0" r="28" fill="#f6d776" opacity="0.25" className="blur-sm" />
              <polygon points="0,-16 5,-5 16,0 5,5 0,16 -5,5 -16,0 -5,-5" fill="url(#emas-piala)" stroke="#b7791f" strokeWidth="1.5" filter="drop-shadow(0 0 10px #f6d776)" />
              <circle cx="0" cy="0" r="4" fill="#ffffff" />
            </g>

            <g transform="translate(105, 175)">
              <rect x="4" y="-12" width="12" height="24" fill="#e2e8f0" opacity="0.6" rx="1" />
              <circle cx="10" cy="12" r="16" fill="#c9a227" stroke="#8a6c12" strokeWidth="1.5" />
              <circle cx="10" cy="12" r="12" fill="#f6d776" />
              <polygon points="4,28 1,42 10,36 19,42 16,28" fill="#d9732f" />
              <polygon points="10,6 12,10 16,10 13,13 14,17 10,14 6,17 7,13 4,10 8,10" fill="#b7791f" />
            </g>

            <g transform="translate(255, 175)">
              <rect x="4" y="-12" width="12" height="24" fill="#e2e8f0" opacity="0.6" rx="1" />
              <circle cx="10" cy="12" r="16" fill="#1f4d36" stroke="#133323" strokeWidth="1.5" />
              <circle cx="10" cy="12" r="12" fill="#8aa76a" />
              <polygon points="4,28 1,42 10,36 19,42 16,28" fill="#1f4d36" />
              <polygon points="10,6 12,10 16,10 13,13 14,17 10,14 6,17 7,13 4,10 8,10" fill="#ffffff" />
            </g>
          </svg>

          <div className="absolute -top-3 right-8 z-20 pointer-events-none">
            <BintangVanGogh ukuran={36} jejakAngin={true} arahAngin="kiri" />
          </div>
          <div className="absolute bottom-8 left-4 z-20 pointer-events-none">
            <BintangVanGogh ukuran={26} jejakAngin={false} />
          </div>
        </div>
      </div>

      <div className="mt-3 text-center z-10">
        <span className="font-tulisan text-2xl text-hutan block">
          Diorama Podium Kejuaraan & Lencana Bintang
        </span>
        <span className="font-isi text-[11px] uppercase tracking-widest text-tinta/50">
          Bab 4 · Pencapaian & Jejak Kehormatan
        </span>
      </div>
    </div>
  )
}
