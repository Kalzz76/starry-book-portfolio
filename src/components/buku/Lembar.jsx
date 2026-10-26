import React, { useState, useRef } from 'react'
import { motion, useTransform, useMotionValueEvent } from 'framer-motion'

export default function Lembar({
  indeks,
  totalLembar,
  mulai,
  selesai,
  scrollProgress,
  sisiDepan,
  sisiBelakang,
  onPutarSfx
}) {
  const [terbalik, setTerbalik] = useState(false)
  const sudahBunyiRef = useRef(false)

  const rotateY = useTransform(
    scrollProgress,
    [mulai, selesai],
    [0, -180],
    { clamp: true }
  )

  const opacityBayanganDepan = useTransform(
    rotateY,
    [0, -90, -180],
    [0, 0.35, 0]
  )

  const opacityBayanganBelakang = useTransform(
    rotateY,
    [0, -90, -180],
    [0, 0.35, 0]
  )

  useMotionValueEvent(rotateY, 'change', (terbaru) => {
    const lewatTengah = terbaru <= -90
    if (lewatTengah !== terbalik) {
      setTerbalik(lewatTengah)
    }

    const bergerak = terbaru < -2 && terbaru > -178
    if (bergerak && !sudahBunyiRef.current) {
      sudahBunyiRef.current = true
      if (onPutarSfx) onPutarSfx()
    } else if (!bergerak) {
      sudahBunyiRef.current = false
    }
  })

  const zIndex = terbalik ? indeks + 1 : totalLembar - indeks

  return (
    <motion.div
      style={{
        rotateY,
        transformOrigin: 'left center',
        zIndex,
        transformStyle: 'preserve-3d'
      }}
      className="absolute top-0 right-0 w-1/2 h-full will-change-transform"
    >
      <div
        className="sisi-lembar absolute inset-0 bg-kertas rounded-r-3xl overflow-hidden shadow-md"
        inert={terbalik ? '' : undefined}
        aria-hidden={terbalik ? 'true' : 'false'}
      >
        <div className="w-full h-full relative">
          {sisiDepan}
          <motion.div
            style={{ opacity: opacityBayanganDepan }}
            className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20 pointer-events-none"
          />
        </div>
      </div>

      <div
        className="sisi-lembar sisi-belakang absolute inset-0 bg-kertas rounded-l-3xl overflow-hidden shadow-md"
        inert={!terbalik ? '' : undefined}
        aria-hidden={!terbalik ? 'true' : 'false'}
      >
        <div className="w-full h-full relative">
          {sisiBelakang}
          <motion.div
            style={{ opacity: opacityBayanganBelakang }}
            className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/20 pointer-events-none"
          />
        </div>
      </div>
    </motion.div>
  )
}
