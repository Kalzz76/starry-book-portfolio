import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { KonteksTransisi } from '../../context/KonteksTransisi'

export default function TransisiRamuan() {
  const { statusTransisi, warnaAktif, selesaiMenutup, selesaiMembuka } = useContext(KonteksTransisi)

  if (statusTransisi === 'diam') return null

  const isMenutup = statusTransisi === 'menutup'

  return (
    <div
      className="fixed inset-0 z-[70] pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        {isMenutup ? (
          <motion.div
            key="menutup"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.55, ease: [0.32, 0, 0.67, 0] }}
            onAnimationComplete={() => {
              selesaiMenutup()
            }}
            className="absolute inset-0 w-full h-full flex flex-col justify-start"
            style={{ backgroundColor: warnaAktif }}
          >
            <div className="w-full -mt-16 text-current overflow-visible" style={{ color: warnaAktif }}>
              <svg
                viewBox="0 0 1440 120"
                className="w-full h-16 transform -translate-y-full"
                preserveAspectRatio="none"
                fill="currentColor"
              >
                <path d="M0,60 C320,120 480,0 720,60 C960,120 1120,0 1440,60 L1440,120 L0,120 Z" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />
            <div className="m-auto flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-emas/70 animate-ping" />
              <span className="font-judul text-xs uppercase tracking-[0.3em] text-krem drop-shadow">
                ✦ Grimoire Alkimia ✦
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="membuka"
            initial={{ y: '0%' }}
            animate={{ y: '-100%' }}
            transition={{ duration: 0.65, ease: [0.33, 1, 0.68, 1] }}
            onAnimationComplete={() => {
              selesaiMembuka()
            }}
            className="absolute inset-0 w-full h-full flex flex-col justify-end"
            style={{ backgroundColor: warnaAktif }}
          >
            <div className="w-full text-current overflow-visible" style={{ color: warnaAktif }}>
              <svg
                viewBox="0 0 1440 120"
                className="w-full h-16 transform translate-y-full"
                preserveAspectRatio="none"
                fill="currentColor"
              >
                <path d="M0,60 C320,0 480,120 720,60 C960,0 1120,120 1440,60 L1440,0 L0,0 Z" />
              </svg>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white/10" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
