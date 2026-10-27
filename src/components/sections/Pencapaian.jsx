import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import Perkamen from '../ui/Perkamen'
import PemisahAlkimia from '../dekorasi/PemisahAlkimia'
import SegelLilin from '../dekorasi/SegelLilin'
import DebuBintang from '../efek/DebuBintang'
import { daftarSertifikat } from '../../data/sertifikat'

export default function Pencapaian({ onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const [tabAktif, setTabAktif] = useState('Lomba')

  const sertifikatTersaring = daftarSertifikat.filter((item) => item.jenis === tabAktif)

  return (
    <section id="pencapaian" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      <PemisahAlkimia simbol="☉" />

      <Perkamen>
        <div className="relative mb-8 text-center">
          <span className="font-aksen italic text-sm text-tembaga block mb-1">
            {t('pencapaian.nomorBab')}
          </span>
          <div className="relative inline-block">
            <DebuBintang onMainkanSfx={onKlikSfx} />
            <h2 className="font-judul text-sepia text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {t('pencapaian.judul')}
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10">
          <button
            type="button"
            onClick={() => {
              if (onKlikSfx) onKlikSfx()
              setTabAktif('Lomba')
            }}
            className={`font-judul text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm border-2 transition-all duration-200 cursor-pointer ${
              tabAktif === 'Lomba'
                ? 'bg-ramuanmerah text-krem border-emas shadow-md'
                : 'bg-perkamentua text-sepia border-emas/70 hover:bg-emas/20'
            }`}
          >
            {t('pencapaian.tabLomba')}
          </button>

          <button
            type="button"
            onClick={() => {
              if (onKlikSfx) onKlikSfx()
              setTabAktif('Sertifikat')
            }}
            className={`font-judul text-xs uppercase tracking-widest px-5 py-2.5 rounded-sm border-2 transition-all duration-200 cursor-pointer ${
              tabAktif === 'Sertifikat'
                ? 'bg-ramuanmerah text-krem border-emas shadow-md'
                : 'bg-perkamentua text-sepia border-emas/70 hover:bg-emas/20'
            }`}
          >
            {t('pencapaian.tabSertifikat')}
          </button>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {sertifikatTersaring.map((item, index) => {
            const keteranganTeks = item.keterangan[bahasaAktif] || item.keterangan.id
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="bg-perkamentua/40 border border-tembaga/40 rounded-sm p-4 sm:p-6 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:border-emas/80 transition-colors shadow-sm"
              >
                <div className="flex-shrink-0 self-center sm:self-start">
                  <SegelLilin
                    ukuran="sedang"
                    anak={<span className="font-judul text-sm text-emas">✦</span>}
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                    <h3 className="font-judul text-lg sm:text-xl font-bold text-sepia">
                      {item.nama}
                    </h3>
                    <span className="font-aksen italic text-xs sm:text-sm text-tembaga font-semibold">
                      {item.tahun}
                    </span>
                  </div>

                  <p className="font-aksen italic text-sm text-tembaga/90 font-medium mb-2">
                    {item.penyelenggara}
                  </p>

                  <p className="font-isi text-base text-sepia/85 leading-relaxed mb-3">
                    {keteranganTeks}
                  </p>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={onKlikSfx}
                      className="inline-flex items-center gap-1.5 font-aksen text-xs font-semibold text-ramuanmerah hover:text-sepia underline decoration-tembaga"
                    >
                      <span>Lihat Piagam Asli</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Perkamen>
    </section>
  )
}
