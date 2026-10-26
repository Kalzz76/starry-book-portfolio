import React, { useState, useEffect, useRef } from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'

export default function MaskotBurungHantu({ aktif = true, onKlikSfx }) {
  const { t } = useBahasa()
  const [indeksSalam, setIndeksSalam] = useState(0)
  const [tampilkanBubble, setTampilkanBubble] = useState(false)
  const [mengepakSayap, setMengepakSayap] = useState(false)
  const [posisiMata, setPosisiMata] = useState({ x: 0, y: 0 })
  const wadahRef = useRef(null)
  const timerBubbleRef = useRef(null)

  const daftarSalam = [
    t('maskot.salam1'),
    t('maskot.salam2'),
    t('maskot.salam3')
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!wadahRef.current) return
      const rect = wadahRef.current.getBoundingClientRect()
      const owlCenterX = rect.left + rect.width / 2
      const owlCenterY = rect.top + rect.height / 2

      const dx = e.clientX - owlCenterX
      const dy = e.clientY - owlCenterY
      const jarak = Math.sqrt(dx * dx + dy * dy) || 1

      const maxOffset = 3.5
      const clampedX = (dx / jarak) * Math.min(maxOffset, Math.abs(dx * 0.05))
      const clampedY = (dy / jarak) * Math.min(maxOffset, Math.abs(dy * 0.05))

      setPosisiMata({ x: clampedX, y: clampedY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (timerBubbleRef.current) clearTimeout(timerBubbleRef.current)
    }
  }, [])

  const handleKlikMascot = () => {
    if (onKlikSfx) onKlikSfx()

    setMengepakSayap(true)
    setTimeout(() => setMengepakSayap(false), 600)

    setIndeksSalam((prev) => (prev + 1) % daftarSalam.length)
    setTampilkanBubble(true)

    if (timerBubbleRef.current) clearTimeout(timerBubbleRef.current)
    timerBubbleRef.current = setTimeout(() => {
      setTampilkanBubble(false)
    }, 6000)
  }

  if (!aktif) return null

  return (
    <div
      ref={wadahRef}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none flex flex-col items-end"
    >
      {tampilkanBubble && (
        <div className="relative mb-2 w-60 sm:w-72 bg-kertas/95 text-hutan border-2 border-emas/80 rounded-2xl p-3.5 shadow-malam backdrop-blur-md animate-fade-in transition-all">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setTampilkanBubble(false)
            }}
            className="absolute top-1.5 right-2 text-hutan/50 hover:text-hutan text-xs font-bold leading-none p-1"
            aria-label="Tutup pesan"
          >
            ✕
          </button>
          <div className="flex items-start gap-2">
            <span className="text-emas text-base">✦</span>
            <p className="font-tulisan text-lg sm:text-xl text-hutan font-semibold leading-snug">
              "{daftarSalam[indeksSalam]}"
            </p>
          </div>
          <div className="absolute -bottom-2 right-8 w-3.5 h-3.5 bg-kertas/95 border-r-2 border-b-2 border-emas/80 transform rotate-45" />
        </div>
      )}

      <button
        type="button"
        onClick={handleKlikMascot}
        className="group relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bintang rounded-full transition-transform active:scale-95"
        aria-label="Maskot Burung Hantu Penjaga"
        title={t('pengaturan.maskot')}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1">
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <ellipse cx="50" cy="94" rx="28" ry="4" fill="#3e2723" opacity="0.6" />
            <path
              d="M18 90 Q 50 93 82 90 Q 84 92 82 94 Q 50 96 18 94 Z"
              fill="#5d4037"
            />
            <circle cx="28" cy="88" r="3" fill="#4caf50" opacity="0.8" />
            <circle cx="72" cy="89" r="2.5" fill="#8bc34a" opacity="0.8" />

            <g className={mengepakSayap ? 'animate-bounce' : ''}>
              <path
                d="M50 20 C28 20 25 45 25 65 C25 82 36 90 50 90 C64 90 75 82 75 65 C75 45 72 20 50 20 Z"
                fill="#1e2337"
                stroke="#d4af37"
                strokeWidth="1.5"
              />

              <path
                d="M50 48 C40 48 36 58 36 72 C36 84 42 88 50 88 C58 88 64 84 64 72 C64 58 60 48 50 48 Z"
                fill="#f5ebd6"
              />
              <path
                d="M44 62 Q 50 65 56 62 M43 70 Q 50 73 57 70 M45 78 Q 50 81 55 78"
                stroke="#c5a059"
                strokeWidth="1.2"
                strokeLinecap="round"
                fill="none"
              />

              <path
                d="M26 22 L20 10 L34 20 Z"
                fill="#1e2337"
                stroke="#d4af37"
                strokeWidth="1.2"
              />
              <path
                d="M74 22 L80 10 L66 20 Z"
                fill="#1e2337"
                stroke="#d4af37"
                strokeWidth="1.2"
              />

              <g
                className={`transition-transform duration-300 origin-[25px_45px] ${
                  mengepakSayap ? '-rotate-45' : 'group-hover:-rotate-12'
                }`}
              >
                <path
                  d="M26 42 C20 45 14 58 16 74 C18 78 24 74 27 68 C28 62 27 50 26 42 Z"
                  fill="#171b2d"
                  stroke="#d4af37"
                  strokeWidth="1"
                />
              </g>

              <g
                className={`transition-transform duration-300 origin-[75px_45px] ${
                  mengepakSayap ? 'rotate-45' : 'group-hover:rotate-12'
                }`}
              >
                <path
                  d="M74 42 C80 45 86 58 84 74 C82 78 76 74 73 68 C72 62 73 50 74 42 Z"
                  fill="#171b2d"
                  stroke="#d4af37"
                  strokeWidth="1"
                />
              </g>

              <circle cx="39" cy="38" r="11" fill="#ffffff" stroke="#c5a059" strokeWidth="1.5" />
              <circle cx="61" cy="38" r="11" fill="#ffffff" stroke="#c5a059" strokeWidth="1.5" />

              <circle cx="39" cy="38" r="6" fill="#f6d365" />
              <circle cx="61" cy="38" r="6" fill="#f6d365" />

              <circle
                cx={39 + posisiMata.x}
                cy={38 + posisiMata.y}
                r="3.5"
                fill="#111827"
              />
              <circle
                cx={39 + posisiMata.x + 1}
                cy={38 + posisiMata.y - 1}
                r="1.2"
                fill="#ffffff"
              />

              <circle
                cx={61 + posisiMata.x}
                cy={38 + posisiMata.y}
                r="3.5"
                fill="#111827"
              />
              <circle
                cx={61 + posisiMata.x + 1}
                cy={38 + posisiMata.y - 1}
                r="1.2"
                fill="#ffffff"
              />

              <polygon points="50,42 45,37 55,37" fill="#f39c12" />

              <path
                d="M42 90 Q 42 94 40 95 M44 90 Q 44 95 44 96 M46 90 Q 47 94 48 95"
                stroke="#f39c12"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M54 90 Q 53 94 52 95 M56 90 Q 56 95 56 96 M58 90 Q 59 94 60 95"
                stroke="#f39c12"
                strokeWidth="2"
                strokeLinecap="round"
              />

              <path
                d="M50 16 L52 21 L57 21 L53 24 L55 29 L50 26 L45 29 L47 24 L43 21 L48 21 Z"
                fill="#ffd700"
                stroke="#b8860b"
                strokeWidth="0.8"
              />
            </g>
          </svg>
        </div>

        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-malamgelap/90 border border-emas/50 text-[10px] text-emas font-isi tracking-wider whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {t('maskot.klikAku')}
        </span>
      </button>
    </div>
  )
}
