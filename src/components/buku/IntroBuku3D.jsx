import React from 'react'
import { motion, useTransform } from 'framer-motion'
import BingkaiEmasBaroque from '../ui/BingkaiEmasBaroque'
import BintangVanGogh from '../dekorasi/BintangVanGogh'
import { useBahasa } from '../../i18n/KonteksBahasa'

export default function IntroBuku3D({ progres, mulai = 0.03, selesai = 0.27 }) {
  const { t } = useBahasa()

  const rotasiSampul = useTransform(progres, [0.04, 0.22], [0, -165], { clamp: true })
  const unlatchClasp = useTransform(progres, [0.02, 0.06], [0, -40], { clamp: true })
  const claspOpacity = useTransform(progres, [0.04, 0.10], [1, 0], { clamp: true })

  const popScale = useTransform(progres, [0.06, 0.22], [0.2, 1], { clamp: true })
  const popRotateX = useTransform(progres, [0.06, 0.22], [65, 0], { clamp: true })
  const popTranslateY = useTransform(progres, [0.06, 0.22], [60, 0], { clamp: true })
  const popOpacity = useTransform(progres, [0.05, 0.12], [0, 1], { clamp: true })

  const stardustBurst = useTransform(progres, [0.06, 0.24], [0, 1], { clamp: true })
  const skalaKamera = useTransform(progres, [0.20, 0.30], [1.0, 1.45], { clamp: true })
  const opacitySeluruh = useTransform(progres, [0.27, 0.31], [1, 0], { clamp: true })

  const bintangKelip = [
    { x: -140, y: -90, s: 1.2, delay: 0 },
    { x: 160, y: -120, s: 1.4, delay: 0.1 },
    { x: -180, y: 60, s: 1.0, delay: 0.2 },
    { x: 190, y: 80, s: 1.3, delay: 0.15 },
    { x: -60, y: -160, s: 1.5, delay: 0.05 },
    { x: 80, y: -170, s: 1.1, delay: 0.25 },
    { x: 0, y: -140, s: 1.6, delay: 0.18 }
  ]

  return (
    <motion.div
      style={{
        scale: skalaKamera,
        opacity: opacitySeluruh
      }}
      className="fixed inset-0 pointer-events-none flex items-center justify-center z-15 select-none will-change-transform"
      aria-hidden="true"
    >
      <div className="relative flex items-center justify-center w-full max-w-lg aspect-[3/4] p-4 sm:p-6" style={{ perspective: '2000px' }}>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute -bottom-10 inset-x-12 h-8 rounded-full bg-black/60 blur-xl pointer-events-none transform scale-x-90" />

          <div className="absolute inset-0 rounded-r-3xl rounded-l-md bg-[#181109] border-2 border-[#5c3e21] shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden">
            <div className="absolute -left-1 inset-y-0 w-8 bg-gradient-to-r from-[#140b05] via-[#24150b] to-transparent border-r border-emas/40 z-20" />
            <div className="absolute -right-1 inset-y-2 w-3 rounded-r-md tebal-halaman-bawah opacity-90 z-20" />
            <div className="absolute -bottom-1 inset-x-2 h-3 rounded-b-md tebal-halaman-bawah opacity-90 z-20" />

            <div className="absolute inset-0 bg-[#f9f5ea] rounded-r-3xl overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-inner">
              <div className="absolute inset-0 opacity-15 mix-blend-multiply bg-[radial-gradient(#8b5e34_1px,transparent_1px)] [background-size:16px_16px]" />

              <motion.div
                style={{
                  scale: popScale,
                  rotateX: popRotateX,
                  y: popTranslateY,
                  opacity: popOpacity,
                  transformOrigin: 'bottom center'
                }}
                className="relative my-auto w-full flex flex-col items-center justify-center will-change-transform"
              >
                <div className="relative w-full max-w-[280px] h-48 sm:h-56 flex items-end justify-center">
                  <svg viewBox="0 0 300 220" className="w-full h-full overflow-visible drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
                    <defs>
                      <linearGradient id="gradLangitPop" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#1a2550" />
                        <stop offset="60%" stopColor="#2c3e6d" />
                        <stop offset="100%" stopColor="#f5deb3" />
                      </linearGradient>
                      <linearGradient id="gradEmasPop" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fff8db" />
                        <stop offset="50%" stopColor="#f6d776" />
                        <stop offset="100%" stopColor="#d4af37" />
                      </linearGradient>
                    </defs>

                    <path d="M20 180 C40 100 120 40 150 40 C180 40 260 100 280 180 Z" fill="url(#gradLangitPop)" opacity="0.9" />

                    <path d="M150 55 A18 18 0 0 1 138 32 A22 22 0 1 0 162 53 A18 18 0 0 1 150 55 Z" fill="#ffd700" filter="drop-shadow(0 0 6px #f6d776)" />

                    <path d="M40 180 Q 90 120 150 140 T 260 180 Z" fill="#1b3022" />
                    <path d="M20 190 Q 80 145 140 160 T 280 190 Z" fill="#2d4a34" />

                    <g transform="translate(65, 125)">
                      <rect x="0" y="20" width="34" height="32" rx="2" fill="#5c3e21" />
                      <polygon points="-4,20 17,2 38,20" fill="#8b3a2b" />
                      <rect x="8" y="28" width="8" height="10" rx="1" fill="#fff8db" className="animate-pulse" filter="drop-shadow(0 0 4px #ffd700)" />
                      <rect x="20" y="28" width="8" height="10" rx="1" fill="#fff8db" className="animate-pulse" filter="drop-shadow(0 0 4px #ffd700)" />
                      <rect x="13" y="42" width="8" height="10" fill="#24150b" />
                    </g>

                    <g transform="translate(195, 120)">
                      <rect x="0" y="24" width="38" height="34" rx="2" fill="#4a3525" />
                      <polygon points="-5,24 19,4 43,24" fill="#a0402e" />
                      <rect x="8" y="32" width="10" height="11" rx="1" fill="#fff8db" className="animate-pulse" filter="drop-shadow(0 0 4px #ffd700)" />
                      <rect x="22" y="32" width="10" height="11" rx="1" fill="#fff8db" className="animate-pulse" filter="drop-shadow(0 0 4px #ffd700)" />
                    </g>

                    <g transform="translate(125, 90)">
                      <rect x="18" y="45" width="14" height="45" fill="#50351d" />
                      <path d="M5 50 Q 25 15 45 50 Z" fill="#1f4d36" />
                      <path d="M0 65 Q 25 35 50 65 Z" fill="#2d6a4f" />
                      <rect x="12" y="28" width="26" height="24" rx="3" fill="#6d4c2d" stroke="#d4af37" strokeWidth="1" />
                      <polygon points="8,28 25,12 42,28" fill="#8b3a2b" />
                      <circle cx="25" cy="40" r="5" fill="#fff8db" className="animate-pulse" filter="drop-shadow(0 0 6px #ffd700)" />
                    </g>

                    <path d="M10 195 Q 150 185 290 195 L 290 205 Q 150 195 10 205 Z" fill="#8aa76a" />
                    <circle cx="70" cy="188" r="2.5" fill="#f6d776" className="animate-ping" />
                    <circle cx="225" cy="186" r="2.5" fill="#f6d776" className="animate-ping" />
                  </svg>
                </div>

                <div className="mt-2 text-center">
                  <span className="font-tulisan text-2xl sm:text-3xl font-bold text-hutan tracking-wide drop-shadow-sm">
                    Kaka Andrea Yahya
                  </span>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="h-[1px] w-8 bg-emas/60" />
                    <span className="font-isi text-[10px] uppercase tracking-widest text-emas font-bold">
                      {t('buku.sampulDepan')}
                    </span>
                    <span className="h-[1px] w-8 bg-emas/60" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            style={{
              rotateY: rotasiSampul,
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d'
            }}
            className="absolute inset-0 w-full h-full will-change-transform z-30"
          >
            <div
              className="absolute inset-0 rounded-r-3xl rounded-l-md overflow-hidden text-kertas shadow-[0_35px_80px_-15px_rgba(0,0,0,0.95)] flex flex-col justify-between p-6 sm:p-10 select-none border border-emas/30"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                backgroundColor: '#101530',
                backgroundImage: "radial-gradient(ellipse at center, rgba(16, 21, 48, 0.4) 0%, rgba(8, 11, 28, 0.95) 100%), url('/gambar/van_gogh_starry_night.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <BingkaiEmasBaroque />

              <div className="absolute left-0 inset-y-0 w-10 sm:w-12 bg-gradient-to-r from-[#1c120c] via-[#2d1e13] to-transparent border-r-2 border-[#d4af37]/60 pointer-events-none z-30 shadow-[4px_0_12px_rgba(0,0,0,0.7)] flex flex-col justify-around py-12 items-center">
                <div className="w-full h-3 bg-gradient-to-r from-[#3b2413] via-[#d4af37] to-[#3b2413] opacity-80 shadow-md" />
                <div className="w-full h-3 bg-gradient-to-r from-[#3b2413] via-[#d4af37] to-[#3b2413] opacity-80 shadow-md" />
                <div className="w-full h-3 bg-gradient-to-r from-[#3b2413] via-[#d4af37] to-[#3b2413] opacity-80 shadow-md" />
                <div className="w-full h-3 bg-gradient-to-r from-[#3b2413] via-[#d4af37] to-[#3b2413] opacity-80 shadow-md" />
              </div>

              <motion.div
                style={{
                  rotate: unlatchClasp,
                  opacity: claspOpacity,
                  transformOrigin: 'left center'
                }}
                className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-20 bg-[#422815] rounded-r-lg border-y-2 border-r-2 border-[#d4af37] shadow-2xl flex items-center justify-center pointer-events-none z-40 will-change-transform"
              >
                <div className="w-4 h-8 border-2 border-[#d4af37] rounded-sm flex items-center justify-center bg-[#24150b]">
                  <div className="w-2 h-2 rounded-full bg-bintang shadow-[0_0_6px_#f6d776]" />
                </div>
              </motion.div>

              <div className="absolute top-8 right-8 z-20 pointer-events-none">
                <BintangVanGogh ukuran={34} jejakAngin={false} />
              </div>
              <div className="absolute bottom-16 right-12 z-20 pointer-events-none">
                <BintangVanGogh ukuran={28} jejakAngin={false} />
              </div>

              <div className="relative z-20 pl-8 pt-4 flex items-center justify-between">
                <span className="font-isi text-[11px] sm:text-xs uppercase tracking-[0.25em] text-emas bg-malamgelap/90 border border-emas/70 px-4 py-1.5 rounded-full inline-block font-bold shadow-xl backdrop-blur-sm">
                  {t('hero.eyebrow')}
                </span>
                <span className="font-tulisan text-2xl text-bintang drop-shadow mr-4">
                  2026
                </span>
              </div>

              <div className="relative z-20 pl-8 my-auto">
                <div className="w-16 h-16 rounded-2xl bg-malamgelap/80 border-2 border-emas/80 flex items-center justify-center mb-5 shadow-[0_0_24px_rgba(246,215,118,0.4)]">
                  <svg viewBox="0 0 24 24" className="w-9 h-9 text-emas" fill="currentColor">
                    <circle cx="9" cy="9" r="2.2" />
                    <circle cx="15" cy="9" r="2.2" />
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.46.04-.92.1-1.36 1.84.72 3.79 1.16 5.9 1.16 2.11 0 4.06-.44 5.9-1.16.06.44.1.9.1 1.36 0 4.41-3.59 8-8 8z" />
                  </svg>
                </div>

                <h1 className="font-judul text-kertas text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  {t('hero.nama')}
                </h1>

                <div className="flex items-center gap-2 mb-3">
                  <div className="h-0.5 w-8 bg-gradient-to-r from-emas to-transparent" />
                  <p className="font-isi text-sm sm:text-base font-semibold text-bintang tracking-wide drop-shadow">
                    {t('hero.peran')}
                  </p>
                </div>

                <p className="font-isi text-xs sm:text-sm text-kertas/90 leading-relaxed max-w-sm drop-shadow">
                  {t('hero.tagline')}
                </p>
              </div>

              <div className="relative z-20 pl-8 pb-2 flex items-center justify-between text-xs text-emas border-t border-emas/40 pt-4">
                <span className="font-tulisan text-2xl text-bintang">
                  Buku Portofolio Dongeng
                </span>
                <span className="font-isi uppercase tracking-widest text-[10px] text-kertas/80 bg-malamgelap/80 px-2.5 py-1 rounded-full border border-emas/30 mr-4">
                  SMKN 13 Bandung
                </span>
              </div>
            </div>

            <div
              className="absolute inset-0 rounded-l-3xl rounded-r-md overflow-hidden bg-[#121936] border border-emas/30 shadow-2xl p-6 sm:p-8 flex items-center justify-center"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <div className="w-full h-full rounded-2xl border-2 border-emas/40 p-4 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[#162044] via-[#0d132b] to-[#162044]">
                <div className="w-12 h-12 rounded-full border border-emas/60 flex items-center justify-center text-emas mb-3">
                  ✦
                </div>
                <h3 className="font-judul text-xl text-kertas mb-1">
                  Kisah Pembuka
                </h3>
                <p className="font-tulisan text-lg text-bintang max-w-xs">
                  "Di setiap lembaran cerita, tersimpan petualangan kode yang tak pernah berhenti."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {bintangKelip.map((b, i) => (
          <motion.div
            key={i}
            style={{
              x: b.x,
              y: b.y,
              scale: stardustBurst,
              opacity: stardustBurst
            }}
            className="absolute pointer-events-none z-40"
          >
            <div
              className="text-bintang drop-shadow-[0_0_8px_rgba(246,215,118,0.9)] animate-ping"
              style={{
                transform: `scale(${b.s})`,
                animationDuration: `${2 + i * 0.4}s`
              }}
            >
              ✦
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
