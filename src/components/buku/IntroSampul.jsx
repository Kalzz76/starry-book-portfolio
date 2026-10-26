import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Latar from './Latar'
import IsiHero from '../isi/IsiHero'

export default function IntroSampul({ onKlikSfx }) {
  const ref = useRef(null)
  const kurangiGerak = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  const scale = useTransform(scrollYProgress, [0, 0.85], [1, 1.6], { clamp: true })
  const opacity = useTransform(scrollYProgress, [0.6, 0.92], [1, 0], { clamp: true })
  const opacityTeks = useTransform(scrollYProgress, [0.15, 0.55], [1, 0], { clamp: true })

  const scrollKeKonten = () => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop + ref.current.offsetHeight,
        behavior: 'smooth'
      })
      if (onKlikSfx) onKlikSfx()
    }
  }

  if (kurangiGerak) {
    return (
      <div className="relative h-[80vh] w-full bg-malamgelap overflow-hidden flex items-end justify-center pb-12">
        <img
          src="/video/intro-poster.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
        />
        <div className="relative z-10 w-full flex justify-center">
          <IsiHero onAksiProyek={scrollKeKonten} onKlikSfx={onKlikSfx} />
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className="relative h-[250vh] bg-malamgelap">
      <Latar />

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-end pb-8 sm:pb-12 overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0 w-full h-full pointer-events-none will-change-transform"
        >
          <img
            src="/video/intro-poster.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-malamgelap via-transparent to-black/30 pointer-events-none" />
        </motion.div>

        <motion.div
          style={{ opacity: opacityTeks }}
          className="relative z-10 w-full flex justify-center"
        >
          <IsiHero onAksiProyek={scrollKeKonten} onKlikSfx={onKlikSfx} />
        </motion.div>
      </div>
    </div>
  )
}
