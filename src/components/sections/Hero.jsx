import React from 'react'
import { motion } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import TombolPil from '../ui/TombolPil'
import PembatasGelombang from '../dekorasi/PembatasGelombang'
import Awan from '../dekorasi/Awan'
import Parallax from '../dekorasi/Parallax'
import Ikon from '../ui/Ikon'

export default function Hero({ onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const tautanCV = bahasaAktif === 'id' ? '/cv/CV_Kaka_ID.pdf' : '/cv/CV_Kaka_EN.pdf'

  return (
    <section id="hero" className="relative bg-kertas text-tinta pt-28 md:pt-36 overflow-hidden">
      <Awan kelas="top-12 opacity-60" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1"
          >
            <span className="font-isi text-xs uppercase tracking-[0.2em] text-hutan bg-pasir/90 border border-lumut/30 px-3.5 py-1.5 rounded-full mb-4 inline-block font-semibold">
              {t('hero.eyebrow')}
            </span>

            <h1 className="font-judul text-hutan text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4">
              {t('hero.nama')}
            </h1>

            <p className="font-isi text-lg sm:text-xl font-medium text-tinta/80 mb-4">
              {t('hero.peran')}
            </p>

            <p className="font-isi text-base sm:text-lg text-tinta/75 leading-relaxed max-w-xl mb-8">
              {t('hero.tagline')}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <TombolPil
                href="#proyek"
                varian="utama"
                onClick={onKlikSfx}
                ariaLabel={t('hero.tombolProyek')}
              >
                <span>{t('hero.tombolProyek')}</span>
                <Ikon nama="panah-kanan" kelas="w-3.5 h-3.5" />
              </TombolPil>

              <TombolPil
                href={tautanCV}
                target="_blank"
                rel="noopener noreferrer"
                varian="sekunder"
                onClick={onKlikSfx}
                ariaLabel={t('hero.tombolCV')}
              >
                <Ikon nama="unduh" kelas="w-3.5 h-3.5" />
                <span>{t('hero.tombolCV')}</span>
              </TombolPil>
            </div>
          </motion.div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <Parallax rentang={20} kelas="w-full max-w-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative bg-pasir/70 border-2 border-lumut/30 rounded-3xl p-6 sm:p-8 shadow-lembut text-center"
              >
                <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
                    <circle cx="100" cy="100" r="88" fill="#f8f6ee" stroke="#8aa76a" strokeWidth="2" strokeDasharray="6 4" />
                    
                    <path d="M40 145 C65 130 95 130 100 140 C105 130 135 130 160 145 L155 95 C135 85 105 85 100 95 C95 85 65 85 45 95 Z" fill="#1f4d36" opacity="0.95" />
                    <path d="M48 140 C70 128 95 128 100 136 C105 128 130 128 152 140 L148 98 C130 90 105 90 100 98 C95 90 70 90 52 98 Z" fill="#fdfbef" />
                    
                    <rect x="76" y="94" width="48" height="32" rx="3" fill="#1a1a1a" />
                    <rect x="79" y="97" width="42" height="26" rx="2" fill="#8aa76a" />
                    <polyline points="94,106 88,110 94,114" stroke="#fdfbef" strokeWidth="2" fill="none" />
                    <polyline points="106,106 112,110 106,114" stroke="#fdfbef" strokeWidth="2" fill="none" />
                    
                    <circle cx="100" cy="62" r="16" fill="#d9732f" />
                    <circle cx="94" cy="60" r="4.5" fill="#fdfbef" />
                    <circle cx="106" cy="60" r="4.5" fill="#fdfbef" />
                    <circle cx="94.5" cy="60" r="2" fill="#1a1a1a" />
                    <circle cx="105.5" cy="60" r="2" fill="#1a1a1a" />
                    <polygon points="100,64 97,69 103,69" fill="#f6d776" />
                    <polygon points="86,49 93,54 87,58" fill="#d9732f" />
                    <polygon points="114,49 107,54 113,58" fill="#d9732f" />
                    
                    <polygon points="165,130 155,145 175,145" fill="#1f4d36" />
                    <polygon points="165,115 158,130 172,130" fill="#1f4d36" />
                    
                    <circle cx="50" cy="65" r="2" fill="#f6d776" />
                    <circle cx="150" cy="55" r="2.5" fill="#f6d776" />
                  </svg>
                </div>

                <div className="mt-4 pt-4 border-t border-lumut/20">
                  <span className="font-tulisan text-2xl text-jingga block">
                    Buku Kisah Kaka
                  </span>
                  <span className="font-isi text-xs text-tinta/60 tracking-wider uppercase">
                    SMKN 13 Bandung · RPL
                  </span>
                </div>
              </motion.div>
            </Parallax>
          </div>
        </div>
      </div>

      <PembatasGelombang kelas="text-pasir" />
    </section>
  )
}
