import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { KonteksTransisi } from '../../context/KonteksTransisi'
import LingkaranSigil from '../efek/LingkaranSigil'
import DebuBintang from '../efek/DebuBintang'

export default function Hero({ onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const { mulaiTransisi } = useContext(KonteksTransisi)
  const tautanCV = bahasaAktif === 'id' ? '/cv/CV_Kaka_ID.pdf' : '/cv/CV_Kaka_EN.pdf'

  const handleBukaGrimoire = () => {
    if (onKlikSfx) onKlikSfx()
    mulaiTransisi('tentang')
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 overflow-hidden scroll-mt-16"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30 md:opacity-60 scale-90 sm:scale-100 transition-opacity">
        <LingkaranSigil />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <DebuBintang onMainkanSfx={onKlikSfx} picuLedakan={true} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <span className="font-aksen text-xs sm:text-sm tracking-[0.25em] uppercase text-cahayatinta/90 bg-ungugelap/80 border border-emas/40 px-4 py-1.5 rounded-full mb-4 shadow-sm">
            ✦ {t('hero.eyebrow')} ✦
          </span>

          <h1 className="font-judul text-emas text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide drop-shadow-[0_4px_16px_rgba(201,162,39,0.35)] mb-3 leading-tight">
            {t('hero.nama')}
          </h1>

          <p className="font-isi text-lg sm:text-2xl text-krem/90 font-medium tracking-wide mb-4">
            {t('hero.peran')}
          </p>

          <p className="font-isi text-base sm:text-xl text-krem/75 max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('hero.tagline')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
            <button
              type="button"
              onClick={handleBukaGrimoire}
              className="px-7 py-3 bg-ramuanmerah hover:bg-emas text-krem hover:text-sepia font-judul text-xs sm:text-sm uppercase tracking-widest border-2 border-emas rounded-sm transition-all duration-300 shadow-[0_4px_14px_rgba(155,44,44,0.5)] hover:shadow-[0_0_20px_rgba(201,162,39,0.7)] cursor-pointer flex items-center gap-2"
            >
              <span>{t('hero.tombolBuka')}</span>
              <span className="text-sm">🜂</span>
            </button>

            <a
              href={tautanCV}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onKlikSfx}
              className="px-7 py-3 border-2 border-emas text-emas hover:bg-emas hover:text-sepia font-judul text-xs sm:text-sm uppercase tracking-widest rounded-sm transition-all duration-300 shadow-sm cursor-pointer flex items-center gap-2"
            >
              <span>{t('hero.tombolCV')}</span>
              <span className="text-sm">📜</span>
            </a>
          </div>

          <a
            href="#tentang"
            onClick={(e) => {
              e.preventDefault()
              handleBukaGrimoire()
            }}
            className="flex flex-col items-center gap-2 text-emas/70 hover:text-emas transition-colors duration-300 cursor-pointer group"
            aria-label={t('hero.petunjukScroll')}
          >
            <span className="font-aksen italic text-xs tracking-wider text-krem/60 group-hover:text-cahayatinta">
              {t('hero.petunjukScroll')}
            </span>
            <span className="text-emas animate-bounce text-sm">
              ↓
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
