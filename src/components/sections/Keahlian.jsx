import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { daftarKeahlian } from '../../data/keahlian'
import KartuKertas from '../ui/KartuKertas'
import Bintang from '../dekorasi/Bintang'
import KunangKunang from '../dekorasi/KunangKunang'
import PembatasGelombang from '../dekorasi/PembatasGelombang'
import Ikon from '../ui/Ikon'

export default function Keahlian({ onLoncengSfx, onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const [bintangJatuhAktif, setBintangJatuhAktif] = useState(false)

  const handleKlikBulan = () => {
    setBintangJatuhAktif(true)
    if (onLoncengSfx) {
      onLoncengSfx()
    }
    setTimeout(() => {
      setBintangJatuhAktif(false)
    }, 1300)
  }

  return (
    <section id="keahlian" className="relative bg-malam text-kertas pt-20 md:pt-28 overflow-hidden">
      <Bintang jumlah={40} />
      <KunangKunang jumlah={8} />

      {bintangJatuhAktif && (
        <div className="absolute top-12 left-1/4 w-32 h-1 bg-gradient-to-r from-bintang to-transparent rounded-full animasi-bintang-jatuh pointer-events-none z-30" />
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pb-20 md:pb-32">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="relative mb-4">
            <button
              type="button"
              onClick={handleKlikBulan}
              className="group p-2 rounded-full cursor-pointer hover:scale-110 transition-transform duration-300 focus:outline-none"
              title="Klik bulan untuk bintang jatuh"
              aria-label="Bulan Sabit Emas"
            >
              <div className="text-bintang drop-shadow-[0_0_12px_rgba(246,215,118,0.7)] group-hover:rotate-12 transition-transform">
                <Ikon nama="bulan" kelas="w-12 h-12" />
              </div>
            </button>
          </div>

          <span className="font-tulisan text-jingga text-2xl mb-1">
            {t('keahlian.penandaBab')}
          </span>

          <h2 className="font-judul text-kertas text-3xl md:text-5xl font-bold leading-tight mb-4">
            {t('keahlian.judul')}
          </h2>

          <p className="font-isi text-base sm:text-lg text-kertas/80 leading-relaxed">
            {t('keahlian.pengantar')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {daftarKeahlian.map((kelompok, index) => (
            <motion.div
              key={kelompok.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <KartuKertas malam={true} kelas="h-full flex flex-col justify-between border border-lumut/40 hover:-translate-y-1.5 transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-hutan text-bintang flex items-center justify-center mb-5 shadow-sm">
                    <Ikon nama={kelompok.ikon} kelas="w-6 h-6" />
                  </div>

                  <h3 className="font-judul text-lg font-bold text-hutan mb-4">
                    {kelompok.nama[bahasaAktif] || kelompok.nama.id}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {kelompok.daftar.map((item) => (
                      <span
                        key={item}
                        className="bg-pasir text-hutan rounded-full px-3 py-1 text-xs font-semibold tracking-wide border border-lumut/20 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-lumut/20 flex items-center justify-between text-xs text-tinta/50">
                  <span className="font-tulisan text-sm text-jingga">Keahlian Teruji</span>
                  <Ikon nama="bintang" kelas="w-3.5 h-3.5 text-bintang" />
                </div>
              </KartuKertas>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 inset-x-0 h-16 bg-gradient-to-t from-hutan/40 to-transparent pointer-events-none" />

      <PembatasGelombang kelas="text-kertas" />
    </section>
  )
}
