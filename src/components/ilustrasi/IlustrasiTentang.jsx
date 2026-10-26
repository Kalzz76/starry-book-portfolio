import React from 'react'
import DekorasiHalaman from '../dekorasi/DekorasiHalaman'
import BintangVanGogh from '../dekorasi/BintangVanGogh'

export default function IlustrasiTentang({ kelas = '' }) {
  return (
    <div className={`w-full h-full relative flex flex-col items-center justify-center pt-10 pb-8 px-4 sm:px-8 select-none pop-up-kontainer ${kelas}`}>
      <DekorasiHalaman sisi="kiri" />

      <div className="relative w-full max-w-[480px] aspect-[4/3] flex items-center justify-center">
        <div className="absolute inset-x-8 bottom-3 h-10 bg-black/35 rounded-full blur-xl transform rotateX(75deg) translateZ(-10px)" />

        <div className="animasi-pop-up relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          <div
            className="absolute inset-0 rounded-t-3xl overflow-hidden border border-emas/40 shadow-2xl"
            style={{
              transform: 'translateZ(-20px) rotateX(-5deg)',
              backgroundImage: "radial-gradient(ellipse at 70% 30%, rgba(255, 243, 176, 0.25) 0%, rgba(13, 17, 54, 0.8) 75%), url('/gambar/van_gogh_starry_night.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center 35%'
            }}
          >
            <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full pointer-events-none opacity-70">
              <path
                d="M-20,120 Q120,50 240,110 T420,80"
                fill="none"
                stroke="#aee2ff"
                strokeWidth="4"
                strokeLinecap="round"
                className="animasi-angin"
              />
              <path
                d="M40,160 Q180,100 300,150 T440,130"
                fill="none"
                stroke="#ffeaa7"
                strokeWidth="3"
                strokeLinecap="round"
                className="animasi-angin"
                style={{ animationDelay: '2s' }}
              />

              <g transform="translate(320, 65)">
                <circle cx="0" cy="0" r="32" fill="#f6d776" opacity="0.35" className="blur-sm" />
                <circle cx="0" cy="0" r="24" fill="none" stroke="#f6d776" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.8" />
                <path d="M-8,-16 A16,16 0 1,0 16,8 A12,12 0 1,1 -8,-16 Z" fill="#ffeaa7" />
              </g>

              <g transform="translate(140, 80)" className="animasi-bintang-3d">
                <circle cx="0" cy="0" r="18" fill="#f6d776" opacity="0.4" />
                <circle cx="0" cy="0" r="10" fill="none" stroke="#fff8db" strokeWidth="2" />
                <polygon points="0,-8 2,-2 8,0 2,2 0,8 -2,2 -8,0 -2,-2" fill="#fff8db" />
              </g>

              <g transform="translate(230, 100)" className="animasi-bintang-3d" style={{ animationDelay: '1.5s' }}>
                <circle cx="0" cy="0" r="14" fill="#f6d776" opacity="0.35" />
                <polygon points="0,-6 2,-2 6,0 2,2 0,6 -2,2 -6,0 -2,-2" fill="#fff8db" />
              </g>
            </svg>
          </div>

          <svg
            viewBox="0 0 440 320"
            className="relative z-10 w-full h-full drop-shadow-[0_16px_24px_rgba(0,0,0,0.6)]"
            style={{ transform: 'translateZ(15px)' }}
          >
            <path
              d="M75,320 C60,250 50,170 70,85 C80,140 85,210 100,320 Z"
              fill="#081c14"
              stroke="#133d2c"
              strokeWidth="2.5"
            />
            <path
              d="M70,320 C58,260 52,190 68,110 C74,160 78,220 90,320 Z"
              fill="#05120d"
            />

            <path
              d="M210,320 L210,180 L226,180 L226,320 Z"
              fill="#26384a"
            />
            <polygon points="218,135 204,180 232,180" fill="#1b2836" stroke="#d4af37" strokeWidth="1" />
            <line x1="218" y1="125" x2="218" y2="135" stroke="#d4af37" strokeWidth="2" />
            <circle cx="218" cy="125" r="2" fill="#fff8db" />

            <g transform="translate(130, 205)" style={{ transformStyle: 'preserve-3d' }}>
              <polygon points="28,0 -4,18 60,18" fill="#a84318" stroke="#4a1c09" strokeWidth="2" />
              <rect x="0" y="16" width="56" height="36" fill="#c49a6c" stroke="#4a1c09" strokeWidth="2" rx="2" />
              <rect x="8" y="24" width="14" height="14" rx="2" fill="#fdf09d" className="animasi-jendela" />
              <rect x="34" y="24" width="14" height="14" rx="2" fill="#fdf09d" className="animasi-jendela" style={{ animationDelay: '0.6s' }} />
              <line x1="15" y1="24" x2="15" y2="38" stroke="#4a1c09" strokeWidth="1.2" />
              <line x1="8" y1="31" x2="22" y2="31" stroke="#4a1c09" strokeWidth="1.2" />
              <line x1="41" y1="24" x2="41" y2="38" stroke="#4a1c09" strokeWidth="1.2" />
              <line x1="34" y1="31" x2="48" y2="31" stroke="#4a1c09" strokeWidth="1.2" />
              <rect x="42" y="4" width="6" height="12" fill="#5c6370" />
              <circle cx="45" cy="0" r="4" fill="#ffffff" opacity="0.6" className="animasi-asap" />
              <circle cx="48" cy="-8" r="6" fill="#ffffff" opacity="0.4" className="animasi-asap" style={{ animationDelay: '0.8s' }} />
            </g>

            <g transform="translate(245, 195)">
              <polygon points="32,0 -4,20 68,20" fill="#8c3310" stroke="#4a1c09" strokeWidth="2" />
              <rect x="0" y="18" width="64" height="42" fill="#b08554" stroke="#4a1c09" strokeWidth="2" rx="2" />
              <rect x="10" y="28" width="16" height="16" rx="2" fill="#fdf09d" className="animasi-jendela" style={{ animationDelay: '1.2s' }} />
              <rect x="38" y="28" width="16" height="16" rx="2" fill="#fdf09d" className="animasi-jendela" style={{ animationDelay: '0.3s' }} />
              <line x1="18" y1="28" x2="18" y2="44" stroke="#4a1c09" strokeWidth="1.2" />
              <line x1="10" y1="36" x2="26" y2="36" stroke="#4a1c09" strokeWidth="1.2" />
              <line x1="46" y1="28" x2="46" y2="44" stroke="#4a1c09" strokeWidth="1.2" />
              <line x1="38" y1="36" x2="54" y2="36" stroke="#4a1c09" strokeWidth="1.2" />
              <rect x="50" y="4" width="7" height="14" fill="#5c6370" />
              <circle cx="53" cy="0" r="4.5" fill="#ffffff" opacity="0.6" className="animasi-asap" style={{ animationDelay: '1.2s' }} />
            </g>

            <g transform="translate(180, 240)">
              <polygon points="30,0 -4,18 64,18" fill="#c05621" stroke="#4a1c09" strokeWidth="2" />
              <rect x="0" y="16" width="60" height="44" fill="#dfa067" stroke="#4a1c09" strokeWidth="2" rx="2" />
              <rect x="10" y="26" width="16" height="16" rx="2" fill="#fff8db" className="animasi-jendela" />
              <rect x="36" y="28" width="14" height="28" rx="2" fill="#52341d" stroke="#3b2413" strokeWidth="1.5" />
              <circle cx="46" cy="42" r="1.5" fill="#d4af37" />
              <line x1="18" y1="26" x2="18" y2="42" stroke="#4a1c09" strokeWidth="1.2" />
              <line x1="10" y1="34" x2="26" y2="34" stroke="#4a1c09" strokeWidth="1.2" />
            </g>

            <g transform="translate(290, 245)">
              <circle cx="10" cy="18" r="8" fill="#d4af37" />
              <circle cx="10" cy="18" r="4" fill="#4a2c0f" />
              <circle cx="26" cy="12" r="10" fill="#f6d776" />
              <circle cx="26" cy="12" r="5" fill="#4a2c0f" />
              <circle cx="44" cy="20" r="9" fill="#d4af37" />
              <circle cx="44" cy="20" r="4.5" fill="#4a2c0f" />
              <path d="M10,26 L10,40 M26,22 L26,42 M44,29 L44,40" stroke="#1f4d36" strokeWidth="2.5" />
            </g>

            <path
              d="M0,285 Q110,250 220,290 T440,280 L440,320 L0,320 Z"
              fill="#1b2a4a"
              opacity="0.9"
            />
            <path
              d="M0,300 Q150,270 300,305 T440,295 L440,320 L0,320 Z"
              fill="#10192e"
            />
          </svg>

          <div
            className="absolute -top-4 right-8 z-30 pointer-events-none"
            style={{ transform: 'translateZ(45px)' }}
          >
            <BintangVanGogh ukuran={44} jejakAngin={true} arahAngin="kiri" />
          </div>

          <div
            className="absolute top-16 left-6 z-30 pointer-events-none"
            style={{ transform: 'translateZ(35px)' }}
          >
            <BintangVanGogh ukuran={32} jejakAngin={true} arahAngin="kanan" />
          </div>

          <div
            className="absolute bottom-12 right-2 z-30 pointer-events-none"
            style={{ transform: 'translateZ(50px)' }}
          >
            <BintangVanGogh ukuran={26} jejakAngin={false} />
          </div>
        </div>
      </div>

      <div className="mt-3 text-center z-10">
        <span className="font-tulisan text-2xl text-hutan block drop-shadow-sm">
          Diorama Pop-up Desa Bintang & Rumah Lampu
        </span>
        <span className="font-isi text-[11px] uppercase tracking-widest text-tinta/60 font-semibold">
          Bab 1 · Terinspirasi Mahakarya Vincent van Gogh
        </span>
      </div>
    </div>
  )
}
