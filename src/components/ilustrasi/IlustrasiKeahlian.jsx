import React from 'react'
import DekorasiHalaman from '../dekorasi/DekorasiHalaman'
import BintangVanGogh from '../dekorasi/BintangVanGogh'

export default function IlustrasiKeahlian({ kelas = '' }) {
  return (
    <div className={`w-full h-full relative flex flex-col items-center justify-center pt-16 pb-12 px-6 sm:px-10 select-none pop-up-kontainer ${kelas}`}>
      <DekorasiHalaman sisi="kiri" />

      <div className="relative w-full max-w-[440px] aspect-[4/3] flex items-center justify-center">
        <div className="absolute inset-x-12 bottom-4 h-12 bg-black/25 rounded-full blur-xl transform rotateX(75deg) translateZ(-10px)" />

        <div className="animasi-pop-up relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 380 280" className="w-full h-full drop-shadow-[0_24px_28px_rgba(13,17,54,0.4)]">
            <defs>
              <linearGradient id="langit-keahlian" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#080c29" />
                <stop offset="50%" stopColor="#151e54" />
                <stop offset="100%" stopColor="#2c4c7c" />
              </linearGradient>
              <linearGradient id="bulan-emas" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff8db" />
                <stop offset="60%" stopColor="#f6d776" />
                <stop offset="100%" stopColor="#d69e2e" />
              </linearGradient>
            </defs>

            <path
              d="M40,240 C40,90 80,30 190,30 C300,30 340,90 340,240 Z"
              fill="url(#langit-keahlian)"
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

            <g transform="translate(190, 115)" className="animasi-pusaran-vangogh">
              <circle cx="0" cy="0" r="70" fill="none" stroke="#f6d776" strokeWidth="2.5" opacity="0.4" strokeDasharray="14 10" className="animasi-arus-kuas" />
              <circle cx="0" cy="0" r="50" fill="none" stroke="#85c1e9" strokeWidth="3" opacity="0.5" strokeDasharray="18 12" className="animasi-arus-kuas" />
              <circle cx="0" cy="0" r="30" fill="none" stroke="#fdfbef" strokeWidth="2" opacity="0.6" strokeDasharray="10 8" className="animasi-arus-kuas" />
            </g>

            <path
              d="M50,130 Q140,80 230,120 T330,95"
              stroke="#f6d776"
              strokeWidth="4"
              fill="none"
              opacity="0.4"
              strokeDasharray="16 12"
              className="animasi-arus-kuas"
            />

            <path
              d="M60,165 Q160,110 250,150 T330,140"
              stroke="#6fa8dc"
              strokeWidth="5"
              fill="none"
              opacity="0.45"
              strokeDasharray="20 14"
              className="animasi-arus-kuas"
            />

            <g transform="translate(265, 80)" className="animasi-denyut-bintang">
              <rect x="-8" y="32" width="16" height="18" fill="#e2e8f0" stroke="#718096" strokeWidth="0.5" opacity="0.6" rx="1" />
              <circle cx="0" cy="0" r="46" fill="#f6d776" opacity="0.2" className="blur-sm" />
              <circle cx="0" cy="0" r="36" fill="none" stroke="#f6d776" strokeWidth="2" strokeDasharray="6 4" opacity="0.6" />
              <path d="M-12,-24 A24,24 0 1,0 24,12 A18,18 0 1,1 -12,-24 Z" fill="url(#bulan-emas)" filter="drop-shadow(0 0 10px #f6d776)" />
            </g>

            <g transform="translate(115, 75)" className="animasi-berkedip">
              <circle cx="0" cy="0" r="16" fill="#f6d776" opacity="0.25" />
              <polygon points="0,-8 3,-3 8,0 3,3 0,8 -3,3 -8,0 -3,-3" fill="#fff3b0" />
            </g>

            <path d="M40,240 Q180,185 340,240 L340,260 L40,260 Z" fill="#0d1f2d" />
            <path d="M30,246 Q190,195 350,246 L350,265 L30,265 Z" fill="#132e3b" />
            <path d="M20,252 Q190,210 360,252 L360,270 L20,270 Z" fill="#1b434d" />

            <g transform="translate(90, 160)">
              <rect x="15" y="45" width="30" height="42" fill="#4a5568" stroke="#2d3748" strokeWidth="2" rx="3" />
              <polygon points="30,25 10,48 50,48" fill="#2d3748" stroke="#1a202c" strokeWidth="2" />
              <circle cx="30" cy="60" r="6" fill="#f6d776" stroke="#2d3748" strokeWidth="1.5" />
              <rect x="25" y="72" width="10" height="15" fill="#1a202c" rx="1" />
              <line x1="28" y1="35" x2="48" y2="15" stroke="#d69e2e" strokeWidth="4" strokeLinecap="round" />
              <circle cx="50" cy="13" r="3" fill="#f6d776" />
            </g>

            <path
              d="M305,245 C295,190 288,145 305,100 C312,135 318,175 325,245 Z"
              fill="#0d2b1f"
              stroke="#1f4d36"
              strokeWidth="2"
            />
            <path
              d="M300,245 C292,205 288,165 300,125 C304,155 310,190 318,245 Z"
              fill="#081a13"
            />

            <g transform="translate(180, 218)">
              <rect x="0" y="8" width="32" height="22" fill="#c05621" stroke="#52341d" strokeWidth="1.5" rx="2" />
              <polygon points="16,0 -3,10 35,10" fill="#7b341e" stroke="#52341d" strokeWidth="1.5" />
              <rect x="7" y="14" width="7" height="7" rx="1" fill="#f6d776" stroke="#52341d" strokeWidth="1" />
              <rect x="18" y="14" width="7" height="7" rx="1" fill="#f6d776" stroke="#52341d" strokeWidth="1" />
              <rect x="22" y="2" width="4" height="6" fill="#718096" />
              <path d="M24,1 Q22,-4 26,-7" stroke="#fdfbef" strokeWidth="1" fill="none" opacity="0.7" />
            </g>

            <polygon points="150,248 142,260 158,260" fill="#1f4d36" />
            <polygon points="150,238 144,250 156,250" fill="#2d6a4f" />
            <polygon points="230,248 222,260 238,260" fill="#1f4d36" />

            <g transform="translate(60, 120)" className="animasi-melayang">
              <rect x="-6" y="5" width="12" height="8" fill="#e2e8f0" stroke="#718096" strokeWidth="0.5" opacity="0.6" rx="1" />
              <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#f6d776" stroke="#c9a227" strokeWidth="1" />
            </g>

            <g transform="translate(320, 160)" className="animasi-melayang">
              <rect x="-6" y="5" width="12" height="8" fill="#e2e8f0" stroke="#718096" strokeWidth="0.5" opacity="0.6" rx="1" />
              <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#f6d776" stroke="#c9a227" strokeWidth="1" />
            </g>
          </svg>

          <div className="absolute -top-3 right-6 z-20 pointer-events-none">
            <BintangVanGogh ukuran={36} jejakAngin={true} arahAngin="kiri" />
          </div>
          <div className="absolute bottom-8 left-4 z-20 pointer-events-none">
            <BintangVanGogh ukuran={28} jejakAngin={false} />
          </div>
        </div>
      </div>

      <div className="mt-3 text-center z-10">
        <span className="font-tulisan text-2xl text-hutan block">
          Diorama Observatorium Bintang & Bulan
        </span>
        <span className="font-isi text-[11px] uppercase tracking-widest text-tinta/50">
          Bab 2 · Pustaka Keahlian & Mantra Kode
        </span>
      </div>
    </div>
  )
}
