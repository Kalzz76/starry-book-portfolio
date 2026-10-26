import React from 'react'
import { motion } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import KartuKertas from '../ui/KartuKertas'
import TombolPil from '../ui/TombolPil'
import PembatasGelombang from '../dekorasi/PembatasGelombang'
import Parallax from '../dekorasi/Parallax'
import Ikon from '../ui/Ikon'

export default function Tentang({ onKlikSfx }) {
  const { t } = useBahasa()

  const kartuTentang = [
    {
      kunci: 'kartuPendidikan',
      ikon: 'buku'
    },
    {
      kunci: 'kartuOrganisasi',
      ikon: 'otak'
    },
    {
      kunci: 'kartuBahasa',
      ikon: 'lampu'
    }
  ]

  return (
    <section id="tentang" className="relative bg-pasir text-tinta pt-20 md:pt-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <Parallax rentang={18} kelas="w-full max-w-sm">
              <div className="relative bg-kartu border-2 border-lumut/40 rounded-3xl p-6 sm:p-8 shadow-lembut text-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
                    <circle cx="100" cy="100" r="86" fill="#fdfbef" stroke="#8aa76a" strokeWidth="2" strokeDasharray="4 4" />
                    
                    <rect x="85" y="115" width="30" height="60" rx="4" fill="#694326" />
                    <rect x="80" y="130" width="40" height="8" rx="2" fill="#52341d" />
                    <rect x="80" y="145" width="40" height="8" rx="2" fill="#52341d" />
                    
                    <circle cx="75" cy="80" r="32" fill="#1f4d36" opacity="0.95" />
                    <circle cx="125" cy="80" r="32" fill="#1f4d36" opacity="0.95" />
                    <circle cx="100" cy="65" r="36" fill="#2d6a4f" />
                    
                    <rect x="82" y="70" width="36" height="34" rx="4" fill="#dfa067" stroke="#52341d" strokeWidth="2" />
                    <polygon points="100,52 76,72 124,72" fill="#d9732f" />
                    
                    <rect x="92" y="78" width="16" height="16" rx="2" fill="#f6d776" stroke="#52341d" strokeWidth="1.5" />
                    <line x1="100" y1="78" x2="100" y2="94" stroke="#52341d" strokeWidth="1.5" />
                    <line x1="92" y1="86" x2="108" y2="86" stroke="#52341d" strokeWidth="1.5" />
                    
                    <circle cx="95" cy="83" r="1.5" fill="#ffffff" />
                    <circle cx="45" cy="45" r="8" fill="#f1e8d4" opacity="0.7" />
                    <circle cx="56" cy="42" r="12" fill="#f1e8d4" opacity="0.8" />
                    <circle cx="68" cy="45" r="9" fill="#f1e8d4" opacity="0.7" />
                  </svg>
                </div>
                <div className="mt-4 pt-3 border-t border-pasir">
                  <span className="font-tulisan text-xl text-hutan">
                    Rumah Pohon Ide Kaka
                  </span>
                </div>
              </div>
            </Parallax>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-tulisan text-jingga text-2xl mb-1">
              {t('tentang.penandaBab')}
            </span>

            <h2 className="font-judul text-hutan text-3xl md:text-5xl font-bold leading-tight mb-6">
              {t('tentang.judul')}
            </h2>

            <p className="font-isi text-base sm:text-lg text-tinta/80 leading-relaxed mb-4">
              {t('tentang.paragraf1')}
            </p>

            <p className="font-isi text-base sm:text-lg text-tinta/80 leading-relaxed mb-8">
              {t('tentang.paragraf2')}
            </p>

            <TombolPil
              href="#proyek"
              varian="utama"
              onClick={onKlikSfx}
              kelas="mb-10"
              ariaLabel={t('tentang.tombolLanjut')}
            >
              <span>{t('tentang.tombolLanjut')}</span>
              <Ikon nama="panah-kanan" kelas="w-3.5 h-3.5" />
            </TombolPil>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {kartuTentang.map((item, index) => (
            <motion.div
              key={item.kunci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <KartuKertas kelas="h-full border border-lumut/30 hover:border-lumut transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-pasir text-hutan flex items-center justify-center mb-4">
                  <Ikon nama={item.ikon} kelas="w-5 h-5" />
                </div>
                <h3 className="font-judul text-lg text-hutan font-bold mb-2">
                  {t(`tentang.${item.kunci}Judul`)}
                </h3>
                <p className="font-isi text-sm font-semibold text-tinta mb-1">
                  {t(`tentang.${item.kunci}Isi`)}
                </p>
                <p className="font-isi text-xs text-tinta/70 leading-normal">
                  {t(`tentang.${item.kunci}Sub`)}
                </p>
              </KartuKertas>
            </motion.div>
          ))}
        </div>
      </div>

      <PembatasGelombang kelas="text-malam" />
    </section>
  )
}
