import React from 'react'
import KunangKunang from '../dekorasi/KunangKunang'

export default function Latar() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
      <div
        className="absolute -inset-14 bg-cover bg-center animasi-vangogh-gerak"
        style={{
          backgroundImage: "url('/gambar/van_gogh_starry_night.jpg')",
          backgroundPosition: 'center 45%'
        }}
      />

      <svg
        viewBox="0 0 1440 900"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-50"
        preserveAspectRatio="xMidYMid slice"
      >
        <g transform="translate(680, 290)" className="animasi-pusaran-vangogh">
          <circle cx="0" cy="0" r="160" fill="none" stroke="#f6d776" strokeWidth="3" opacity="0.45" strokeDasharray="18 12" className="animasi-arus-kuas" />
          <circle cx="0" cy="0" r="120" fill="none" stroke="#6fa8dc" strokeWidth="4" opacity="0.55" strokeDasharray="24 16" className="animasi-arus-kuas" />
          <circle cx="0" cy="0" r="80" fill="none" stroke="#f6d776" strokeWidth="3" opacity="0.65" strokeDasharray="14 10" className="animasi-arus-kuas" />
          <circle cx="0" cy="0" r="45" fill="none" stroke="#fdfbef" strokeWidth="2.5" opacity="0.75" strokeDasharray="10 8" className="animasi-arus-kuas" />
        </g>

        <path
          d="M-50,220 Q350,90 700,210 T1500,160"
          fill="none"
          stroke="#f6d776"
          strokeWidth="6"
          opacity="0.4"
          strokeDasharray="28 20"
          className="animasi-arus-kuas"
        />
        <path
          d="M-80,310 Q400,160 820,300 T1550,240"
          fill="none"
          stroke="#85c1e9"
          strokeWidth="8"
          opacity="0.45"
          strokeDasharray="32 24"
          className="animasi-arus-kuas"
        />
        <path
          d="M-30,420 Q480,260 920,400 T1520,330"
          fill="none"
          stroke="#f6d776"
          strokeWidth="5"
          opacity="0.35"
          strokeDasharray="22 18"
          className="animasi-arus-kuas"
        />

        <g transform="translate(1260, 160)" className="animasi-denyut-bintang">
          <circle cx="0" cy="0" r="85" fill="none" stroke="#f6d776" strokeWidth="3" opacity="0.5" strokeDasharray="16 10" />
          <circle cx="0" cy="0" r="65" fill="none" stroke="#f6d776" strokeWidth="4" opacity="0.65" strokeDasharray="14 8" />
          <circle cx="0" cy="0" r="45" fill="none" stroke="#fff3b0" strokeWidth="5" opacity="0.8" />
          <circle cx="0" cy="0" r="25" fill="#f6d776" opacity="0.35" className="blur-sm" />
        </g>

        <g transform="translate(480, 520)" className="animasi-denyut-bintang">
          <circle cx="0" cy="0" r="50" fill="none" stroke="#f6d776" strokeWidth="2.5" opacity="0.55" strokeDasharray="12 8" />
          <circle cx="0" cy="0" r="30" fill="none" stroke="#fff3b0" strokeWidth="3" opacity="0.75" strokeDasharray="8 6" />
        </g>

        <g transform="translate(340, 180)" className="animasi-denyut-bintang">
          <circle cx="0" cy="0" r="40" fill="none" stroke="#f6d776" strokeWidth="2" opacity="0.55" strokeDasharray="10 8" />
          <circle cx="0" cy="0" r="22" fill="none" stroke="#fff3b0" strokeWidth="3" opacity="0.8" />
        </g>

        <g transform="translate(990, 240)" className="animasi-denyut-bintang">
          <circle cx="0" cy="0" r="44" fill="none" stroke="#f6d776" strokeWidth="2.5" opacity="0.6" strokeDasharray="12 8" />
          <circle cx="0" cy="0" r="25" fill="none" stroke="#fff3b0" strokeWidth="3" opacity="0.75" />
        </g>
      </svg>

      <KunangKunang jumlah={14} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(13, 17, 54, 0.1) 0%, rgba(13, 17, 54, 0.3) 65%, rgba(6, 8, 25, 0.75) 100%)'
        }}
      />
    </div>
  )
}
