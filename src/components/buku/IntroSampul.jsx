import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Sampul from './Sampul'
import Latar from './Latar'
import Ikon from '../ui/Ikon'
import { useBahasa } from '../../i18n/KonteksBahasa'

export default function IntroSampul({ onKlikSfx }) {
  const { t } = useBahasa()
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  const rotateY = useTransform(scrollYProgress, [0.15, 0.75], [0, -160], { clamp: true })
  const scale = useTransform(scrollYProgress, [0.15, 0.85], [0.85, 1.35], { clamp: true })
  const opacity = useTransform(scrollYProgress, [0.65, 0.95], [1, 0], { clamp: true })

  const scrollKeKonten = () => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop + ref.current.offsetHeight,
        behavior: 'smooth'
      })
      if (onKlikSfx) onKlikSfx()
    }
  }

  return (
    <div ref={ref} className="relative h-[250vh] bg-malamgelap">
      <Latar />

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden">
        <div className="ruang-buku-3d w-full max-w-sm sm:max-w-md aspect-[3/4] flex items-center justify-center">
          <motion.div
            style={{
              rotateY,
              scale,
              opacity,
              transformOrigin: 'left center',
              transformStyle: 'preserve-3d'
            }}
            className="w-full h-full relative will-change-transform"
          >
            <Sampul
              onBukaBuku={scrollKeKonten}
              onKlikSfx={onKlikSfx}
            />
          </motion.div>
        </div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-emas"
        >
          <span className="font-isi text-xs font-semibold uppercase tracking-widest bg-malamgelap/80 px-4 py-1.5 rounded-full border border-emas/40 shadow-lg animasi-panah">
            {t('buku.petunjukScroll')}
          </span>
          <Ikon nama="panah-atas" kelas="w-4 h-4 rotate-180 text-emas animasi-panah" />
        </motion.div>
      </div>
    </div>
  )
}
