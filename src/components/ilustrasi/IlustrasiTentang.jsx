import React from 'react'
import DekorasiHalaman from '../dekorasi/DekorasiHalaman'

export default function IlustrasiTentang({ kelas = '' }) {
  return (
    <div className={`w-full h-full relative flex flex-col items-center justify-center pt-16 pb-12 px-6 sm:px-10 select-none pop-up-kontainer ${kelas}`}>
      <DekorasiHalaman sisi="kiri" />

      <div className="relative w-full max-w-[440px] aspect-[4/3] flex items-center justify-center">
        <div className="absolute inset-x-12 bottom-4 h-12 bg-black/25 rounded-full blur-xl transform rotateX(75deg) translateZ(-10px)" />

        <div className="animasi-pop-up relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 380 280" className="w-full h-full drop-shadow-[0_24px_28px_rgba(13,17,54,0.4)]">
            <defs>
              <linearGradient id="langit-vangogh" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d1136" />
                <stop offset="50%" stopColor="#1a2768" />
                <stop offset="100%" stopColor="#254d85" />
              </linearGradient>
              <linearGradient id="emas-gradien" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff3b0" />
                <stop offset="50%" stopColor="#f6d776" />
                <stop offset="100%" stopColor="#c9a227" />
              </linearGradient>
              <filter id="cahaya-bintang">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <path
              d="M40,240 C40,90 80,30 190,30 C300,30 340,90 340,240 Z"
              fill="url(#langit-vangogh)"
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
              d="M60,110 Q140,60 210,100 T320,70"
              stroke="#f6d776"
              strokeWidth="4"
              fill="none"
              opacity="0.45"
              strokeDasharray="14 10"
              className="animasi-arus-kuas"
            />
            <path
              d="M70,140 Q150,90 230,130 T330,110"
              stroke="#6fa8dc"
              strokeWidth="5"
              fill="none"
              opacity="0.5"
              strokeDasharray="18 12"
              className="animasi-arus-kuas"
            />
            <path
              d="M80,170 Q160,120 250,160 T320,150"
              stroke="#f6d776"
              strokeWidth="3.5"
              fill="none"
              opacity="0.4"
              strokeDasharray="12 8"
              className="animasi-arus-kuas"
            />

            <g transform="translate(285, 75)">
              <circle cx="0" cy="0" r="32" fill="#f6d776" opacity="0.25" filter="url(#cahaya-bintang)" />
              <circle cx="0" cy="0" r="24" fill="none" stroke="#f6d776" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.7" />
              <path d="M-8,-16 A16,16 0 1,0 16,8 A12,12 0 1,1 -8,-16 Z" fill="url(#emas-gradien)" />
            </g>

            <g transform="translate(100, 70)" className="animasi-berkedip">
              <circle cx="0" cy="0" r="14" fill="#f6d776" opacity="0.3" />
              <circle cx="0" cy="0" r="8" fill="none" stroke="#fff3b0" strokeWidth="1.5" />
              <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#fff3b0" />
            </g>

            <g transform="translate(170, 95)" className="animasi-berkedip">
              <circle cx="0" cy="0" r="12" fill="#f6d776" opacity="0.3" />
              <polygon points="0,-6 2,-2 6,0 2,2 0,6 -2,2 -6,0 -2,-2" fill="#fff3b0" />
            </g>

            <path d="M40,240 Q190,195 340,240 L340,260 L40,260 Z" fill="#15261d" />
            <path d="M30,246 Q190,205 350,246 L350,265 L30,265 Z" fill="#1f4d36" opacity="0.8" />
            <path d="M20,252 Q190,218 360,252 L360,270 L20,270 Z" fill="#2d6a4f" opacity="0.9" />

            <path
              d="M80,240 C75,190 70,140 85,95 C92,130 95,170 105,240 Z"
              fill="#0d2b1f"
              stroke="#1f4d36"
              strokeWidth="2"
            />
            <path
              d="M76,240 C72,200 68,160 80,120 C85,150 88,185 96,240 Z"
              fill="#081a13"
            />

            <ellipse cx="205" cy="245" rx="70" ry="14" fill="#8aa76a" opacity="0.3" />

            <path d="M198,240 L198,160 L212,160 L212,240 Z" fill="#694326" />
            <path d="M200,165 L210,165 L210,235 L200,235 Z" fill="#52341d" opacity="0.5" />

            <line x1="194" y1="180" x2="194" y2="242" stroke="#dfa067" strokeWidth="2.5" />
            <line x1="188" y1="180" x2="188" y2="242" stroke="#dfa067" strokeWidth="2.5" />
            <line x1="188" y1="190" x2="194" y2="190" stroke="#52341d" strokeWidth="2" />
            <line x1="188" y1="202" x2="194" y2="202" stroke="#52341d" strokeWidth="2" />
            <line x1="188" y1="214" x2="194" y2="214" stroke="#52341d" strokeWidth="2" />
            <line x1="188" y1="226" x2="194" y2="226" stroke="#52341d" strokeWidth="2" />
            <line x1="188" y1="238" x2="194" y2="238" stroke="#52341d" strokeWidth="2" />

            <circle cx="175" cy="140" r="32" fill="#1f4d36" />
            <circle cx="235" cy="140" r="32" fill="#1f4d36" />
            <circle cx="205" cy="120" r="38" fill="#2d6a4f" />
            <circle cx="205" cy="120" r="30" fill="#388563" opacity="0.6" />

            <polygon points="205,92 172,125 238,125" fill="#d9732f" />
            <polygon points="205,95 178,123 232,123" fill="#ea8643" />

            <rect x="182" y="123" width="46" height="40" rx="4" fill="#dfa067" stroke="#52341d" strokeWidth="2" />
            <rect x="186" y="127" width="38" height="32" rx="2" fill="#f8e5c8" />

            <rect x="194" y="133" width="22" height="20" rx="3" fill="#f6d776" stroke="#52341d" strokeWidth="1.5" />
            <line x1="205" y1="133" x2="205" y2="153" stroke="#52341d" strokeWidth="1.5" />
            <line x1="194" y1="143" x2="216" y2="143" stroke="#52341d" strokeWidth="1.5" />

            <g transform="translate(115, 218)">
              <rect x="0" y="8" width="28" height="18" fill="#dfa067" stroke="#52341d" strokeWidth="1.5" rx="2" />
              <polygon points="14,0 -2,10 30,10" fill="#c05621" stroke="#52341d" strokeWidth="1.5" />
              <rect x="10" y="14" width="8" height="8" rx="1" fill="#f6d776" stroke="#52341d" strokeWidth="1" />
              <rect x="20" y="2" width="4" height="6" fill="#718096" />
              <path d="M22,1 Q20,-5 24,-8" stroke="#fdfbef" strokeWidth="1" fill="none" opacity="0.7" />
            </g>

            <g transform="translate(250, 215)">
              <rect x="0" y="8" width="32" height="20" fill="#d69e2e" stroke="#52341d" strokeWidth="1.5" rx="2" />
              <polygon points="16,0 -2,10 34,10" fill="#975a16" stroke="#52341d" strokeWidth="1.5" />
              <rect x="8" y="13" width="7" height="7" rx="1" fill="#f6d776" stroke="#52341d" strokeWidth="1" />
              <rect x="18" y="13" width="7" height="7" rx="1" fill="#f6d776" stroke="#52341d" strokeWidth="1" />
              <rect x="22" y="2" width="4" height="6" fill="#718096" />
              <path d="M24,1 Q22,-4 26,-7" stroke="#fdfbef" strokeWidth="1" fill="none" opacity="0.7" />
            </g>

            <polygon points="70,245 62,258 78,258" fill="#1f4d36" />
            <polygon points="70,235 64,248 76,248" fill="#2d6a4f" />
            <polygon points="295,248 286,260 304,260" fill="#1f4d36" />
            <polygon points="295,238 288,250 302,250" fill="#2d6a4f" />

            <g transform="translate(55, 175)" className="animasi-melayang">
              <rect x="-8" y="6" width="16" height="12" fill="#e2e8f0" stroke="#718096" strokeWidth="0.5" opacity="0.6" rx="1" />
              <polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#f6d776" stroke="#c9a227" strokeWidth="1" />
            </g>

            <g transform="translate(325, 140)" className="animasi-melayang">
              <rect x="-7" y="5" width="14" height="10" fill="#e2e8f0" stroke="#718096" strokeWidth="0.5" opacity="0.6" rx="1" />
              <polygon points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" fill="#f6d776" stroke="#c9a227" strokeWidth="1" />
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3 text-center z-10">
        <span className="font-tulisan text-2xl text-hutan block">
          Diorama Pop-up Rumah Pohon & Desa Bintang
        </span>
        <span className="font-isi text-[11px] uppercase tracking-widest text-tinta/50">
          Bab 1 · Terinspirasi Mahakarya Van Gogh
        </span>
      </div>
    </div>
  )
}
