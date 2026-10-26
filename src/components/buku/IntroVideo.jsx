import React, { useRef, useState } from 'react'
import { motion, useTransform, useMotionValueEvent } from 'framer-motion'

export default function IntroVideo({ progres, mulai, selesai }) {
  const videoRef = useRef(null)
  const [siap, setSiap] = useState(false)
  const [gagal, setGagal] = useState(false)

  const kemajuan = useTransform(progres, [mulai, selesai], [0, 1], { clamp: true })
  const skalaPoster = useTransform(kemajuan, [0, 1], [1, 1.6], { clamp: true })
  const opacityPoster = useTransform(kemajuan, [0.7, 1], [1, 0], { clamp: true })

  useMotionValueEvent(kemajuan, 'change', (nilai) => {
    const video = videoRef.current
    if (video && siap && !gagal && video.duration) {
      const target = nilai * video.duration
      if (Math.abs(video.currentTime - target) > 0.02) {
        video.currentTime = target
      }
    }
  })

  const handleSiap = () => {
    setSiap(true)
  }

  const handleError = () => {
    setGagal(true)
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-10">
      {(!siap || gagal) && (
        <motion.img
          src="/video/intro-poster.jpg"
          alt=""
          aria-hidden="true"
          style={{ scale: skalaPoster, opacity: opacityPoster }}
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
        />
      )}

      {!gagal && (
        <video
          ref={videoRef}
          src="/video/intro.mp4"
          poster="/video/intro-poster.jpg"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onLoadedData={handleSiap}
          onError={handleError}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            siap ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  )
}
