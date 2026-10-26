import React from 'react'
import { motion } from 'framer-motion'
import KunangKunang from '../dekorasi/KunangKunang'
import BintangVanGogh from '../dekorasi/BintangVanGogh'

export default function Latar({ skala }) {
  return (
    <motion.div
      style={{ scale: skala }}
      className="fixed inset-0 pointer-events-none overflow-hidden select-none z-0 will-change-transform"
      aria-hidden="true"
    >
      <div
        className="absolute -inset-10 bg-cover bg-center animasi-vangogh-gerak"
        style={{
          backgroundImage: "url('/gambar/van_gogh_starry_night.jpg')",
          backgroundPosition: 'center 40%'
        }}
      />

      <svg
        viewBox="0 0 1440 900"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60"
        preserveAspectRatio="xMidYMid slice"
      >
        <g transform="translate(680, 280)" className="animasi-pusaran-vangogh">
          <circle cx="0" cy="0" r="170" fill="none" stroke="#f6d776" strokeWidth="3" opacity="0.45" strokeDasharray="18 12" className="animasi-arus-kuas" />
          <circle cx="0" cy="0" r="130" fill="none" stroke="#6fa8dc" strokeWidth="4.5" opacity="0.6" strokeDasharray="24 16" className="animasi-arus-kuas" />
          <circle cx="0" cy="0" r="85" fill="none" stroke="#f6d776" strokeWidth="3.5" opacity="0.7" strokeDasharray="14 10" className="animasi-arus-kuas" />
          <circle cx="0" cy="0" r="48" fill="none" stroke="#fff8db" strokeWidth="3" opacity="0.8" strokeDasharray="10 8" className="animasi-arus-kuas" />
        </g>

        <path
          d="M-50,210 Q350,80 720,200 T1500,150"
          fill="none"
          stroke="#f6d776"
          strokeWidth="6"
          opacity="0.5"
          strokeDasharray="28 20"
          className="animasi-arus-kuas"
        />
        <path
          d="M-80,300 Q400,150 840,290 T1550,230"
          fill="none"
          stroke="#85c1e9"
          strokeWidth="8"
          opacity="0.55"
          strokeDasharray="32 24"
          className="animasi-arus-kuas"
        />
        <path
          d="M-30,410 Q480,250 940,390 T1520,320"
          fill="none"
          stroke="#fff3b0"
          strokeWidth="5"
          opacity="0.45"
          strokeDasharray="22 18"
          className="animasi-arus-kuas"
        />

        <path
          d="M100,180 Q500,80 900,160 T1450,110"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.5"
          strokeLinecap="round"
          className="animasi-angin"
        />
        <path
          d="M-20,360 Q420,220 850,330 T1400,260"
          fill="none"
          stroke="#aee2ff"
          strokeWidth="4"
          strokeLinecap="round"
          className="animasi-angin"
          style={{ animationDelay: '3s' }}
        />
        <path
          d="M150,500 Q600,320 1050,450 T1500,380"
          fill="none"
          stroke="#ffeaa7"
          strokeWidth="3"
          strokeLinecap="round"
          className="animasi-angin"
          style={{ animationDelay: '6s' }}
        />

        <g transform="translate(1260, 160)" className="animasi-denyut-bintang">
          <circle cx="0" cy="0" r="95" fill="none" stroke="#f6d776" strokeWidth="3" opacity="0.55" strokeDasharray="16 10" />
          <circle cx="0" cy="0" r="70" fill="none" stroke="#f6d776" strokeWidth="4" opacity="0.7" strokeDasharray="14 8" />
          <circle cx="0" cy="0" r="48" fill="none" stroke="#fff3b0" strokeWidth="5.5" opacity="0.85" />
          <circle cx="0" cy="0" r="28" fill="#f6d776" opacity="0.4" className="blur-sm" />
        </g>

        <g transform="translate(480, 520)" className="animasi-denyut-bintang">
          <circle cx="0" cy="0" r="55" fill="none" stroke="#f6d776" strokeWidth="2.5" opacity="0.6" strokeDasharray="12 8" />
          <circle cx="0" cy="0" r="32" fill="none" stroke="#fff3b0" strokeWidth="3" opacity="0.8" strokeDasharray="8 6" />
        </g>

        <g transform="translate(340, 180)" className="animasi-denyut-bintang">
          <circle cx="0" cy="0" r="45" fill="none" stroke="#f6d776" strokeWidth="2.5" opacity="0.6" strokeDasharray="10 8" />
          <circle cx="0" cy="0" r="24" fill="none" stroke="#fff3b0" strokeWidth="3" opacity="0.85" />
        </g>

        <g transform="translate(990, 240)" className="animasi-denyut-bintang">
          <circle cx="0" cy="0" r="48" fill="none" stroke="#f6d776" strokeWidth="2.5" opacity="0.65" strokeDasharray="12 8" />
          <circle cx="0" cy="0" r="26" fill="none" stroke="#fff3b0" strokeWidth="3" opacity="0.8" />
        </g>
      </svg>

      <div className="absolute top-12 left-10 md:left-24">
        <BintangVanGogh ukuran={36} jejakAngin={true} arahAngin="kiri" />
      </div>
      <div className="absolute top-28 right-16 md:right-36">
        <BintangVanGogh ukuran={44} jejakAngin={true} arahAngin="kanan" />
      </div>
      <div className="absolute bottom-28 left-16 md:left-44">
        <BintangVanGogh ukuran={32} jejakAngin={true} arahAngin="kiri" />
      </div>
      <div className="absolute bottom-36 right-20 md:right-48">
        <BintangVanGogh ukuran={38} jejakAngin={true} arahAngin="kanan" />
      </div>

      <KunangKunang jumlah={18} />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(13, 17, 54, 0.05) 0%, rgba(13, 17, 54, 0.25) 60%, rgba(6, 8, 25, 0.7) 100%)'
        }}
      />
    </motion.div>
  )
}
