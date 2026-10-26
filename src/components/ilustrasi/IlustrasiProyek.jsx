import React from 'react'
import DekorasiHalaman from '../dekorasi/DekorasiHalaman'

export default function IlustrasiProyek({ kelas = '' }) {
  return (
    <div className={`w-full h-full relative flex flex-col items-center justify-center pt-16 pb-12 px-6 sm:px-10 select-none pop-up-kontainer ${kelas}`}>
      <DekorasiHalaman sisi="kiri" />

      <div className="relative w-full max-w-[440px] aspect-[4/3] flex items-center justify-center">
        <div className="absolute inset-x-12 bottom-4 h-12 bg-black/25 rounded-full blur-xl transform rotateX(75deg) translateZ(-10px)" />

        <div className="animasi-pop-up relative w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 380 280" className="w-full h-full drop-shadow-[0_24px_28px_rgba(13,17,54,0.4)]">
            <defs>
              <linearGradient id="langit-bengkel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d1136" />
                <stop offset="60%" stopColor="#1a2768" />
                <stop offset="100%" stopColor="#254d85" />
              </linearGradient>
              <linearGradient id="layar-laptop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e3a8a" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
            </defs>

            <path
              d="M40,240 C40,90 80,30 190,30 C300,30 340,90 340,240 Z"
              fill="url(#langit-bengkel)"
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
              d="M60,100 Q150,55 240,95 T325,75"
              stroke="#f6d776"
              strokeWidth="3.5"
              fill="none"
              opacity="0.4"
              strokeDasharray="14 10"
              className="animasi-arus-kuas"
            />
            <path
              d="M70,135 Q160,85 250,125 T330,110"
              stroke="#6fa8dc"
              strokeWidth="4"
              fill="none"
              opacity="0.45"
              strokeDasharray="18 12"
              className="animasi-arus-kuas"
            />

            <g transform="translate(100, 70)" className="animasi-berkedip">
              <circle cx="0" cy="0" r="14" fill="#f6d776" opacity="0.3" />
              <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#fff3b0" />
            </g>

            <g transform="translate(290, 75)" className="animasi-berkedip">
              <circle cx="0" cy="0" r="12" fill="#f6d776" opacity="0.25" />
              <polygon points="0,-6 2,-2 6,0 2,2 0,6 -2,2 -6,0 -2,-2" fill="#fff3b0" />
            </g>

            <path d="M40,240 Q190,205 340,240 L340,265 L40,265 Z" fill="#2d1b0d" />
            <ellipse cx="190" cy="245" rx="130" ry="24" fill="#52341d" stroke="#3b2413" strokeWidth="2" />
            <ellipse cx="190" cy="242" rx="122" ry="20" fill="#694326" />

            <g transform="translate(75, 185)">
              <rect x="0" y="32" width="68" height="15" rx="3" fill="#1f4d36" stroke="#133323" strokeWidth="1.5" />
              <line x1="8" y1="40" x2="60" y2="40" stroke="#f6d776" strokeWidth="1.5" opacity="0.7" />

              <rect x="5" y="19" width="62" height="14" rx="3" fill="#d9732f" stroke="#9c4210" strokeWidth="1.5" />
              <line x1="12" y1="26" x2="56" y2="26" stroke="#fdfbef" strokeWidth="1.5" opacity="0.7" />

              <rect x="10" y="7" width="55" height="13" rx="3" fill="#c9a227" stroke="#8a6c12" strokeWidth="1.5" />
              <line x1="16" y1="13" x2="50" y2="13" stroke="#fdfbef" strokeWidth="1.5" opacity="0.7" />

              <circle cx="68" cy="22" r="3" fill="#f6d776" />
            </g>

            <g transform="translate(155, 150)">
              <polygon points="12,50 68,50 62,58 18,58" fill="#4a5568" stroke="#2d3748" strokeWidth="1.5" />
              <rect x="26" y="52" width="28" height="4" rx="1" fill="#cbd5e1" />

              <rect x="15" y="6" width="50" height="44" rx="3" fill="#1e293b" stroke="#334155" strokeWidth="2" />
              <rect x="18" y="9" width="44" height="38" rx="2" fill="url(#layar-laptop)" />

              <circle cx="23" cy="15" r="1.5" fill="#ef4444" />
              <circle cx="28" cy="15" r="1.5" fill="#f59e0b" />
              <circle cx="33" cy="15" r="1.5" fill="#10b981" />

              <line x1="22" y1="22" x2="48" y2="22" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="22" y1="28" x2="54" y2="28" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="22" y1="34" x2="42" y2="34" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="22" y1="40" x2="36" y2="40" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round" />

              <polygon points="40,2 -6,22 86,22" fill="#f6d776" opacity="0.12" />
            </g>

            <g transform="translate(245, 195)">
              <rect x="0" y="14" width="22" height="20" rx="3" fill="#fdfbef" stroke="#d9732f" strokeWidth="2" />
              <path d="M22,18 Q30,24 22,30" stroke="#d9732f" strokeWidth="2.5" fill="none" />
              <path d="M7,8 Q10,2 6,-4" stroke="#e2e8f0" strokeWidth="1.5" fill="none" opacity="0.8" />
              <path d="M14,9 Q17,3 13,-3" stroke="#e2e8f0" strokeWidth="1.5" fill="none" opacity="0.8" />
            </g>

            <g transform="translate(275, 165)">
              <line x1="10" y1="2" x2="10" y2="24" stroke="#718096" strokeWidth="2" />
              <rect x="2" y="24" width="16" height="26" rx="3" fill="#52341d" stroke="#3b2413" strokeWidth="1.5" />
              <rect x="5" y="27" width="10" height="20" rx="1" fill="#fef08a" opacity="0.9" />
              <circle cx="10" cy="37" r="3" fill="#ffffff" />
            </g>

            <g transform="translate(195, 80)" className="animasi-melayang">
              <rect x="-8" y="20" width="16" height="24" fill="#e2e8f0" stroke="#718096" strokeWidth="0.5" opacity="0.6" rx="1" />
              <polygon points="0,-14 4,-4 14,0 4,4 0,14 -4,4 -14,0 -4,-4" fill="#f6d776" stroke="#c9a227" strokeWidth="1.5" filter="drop-shadow(0 0 8px #f6d776)" />
              <circle cx="0" cy="0" r="3" fill="#ffffff" />
            </g>
          </svg>
        </div>
      </div>

      <div className="mt-3 text-center z-10">
        <span className="font-tulisan text-2xl text-hutan block">
          Diorama Meja Kerja Studio & Karya Rekayasa
        </span>
        <span className="font-isi text-[11px] uppercase tracking-widest text-tinta/50">
          Bab 3 · Kisah-Kisah yang Kubuat
        </span>
      </div>
    </div>
  )
}
