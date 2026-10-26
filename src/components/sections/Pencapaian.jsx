import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { daftarSertifikat } from '../../data/sertifikat'
import KartuKertas from '../ui/KartuKertas'
import PembatasGelombang from '../dekorasi/PembatasGelombang'
import Ikon from '../ui/Ikon'

export default function Pencapaian({ onHalamanSfx, onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const [tabAktif, setTabAktif] = useState('Lomba')

  const handleGantiTab = (tab) => {
    setTabAktif(tab)
    if (onHalamanSfx) {
      onHalamanSfx()
    }
  }

  const itemTerfilter = []
  for (let i = 0; i < daftarSertifikat.length; i++) {
    const item = daftarSertifikat[i]
    if (item.jenis === tabAktif) {
      itemTerfilter.push(item)
    }
  }

  return (
    <section id="pencapaian" className="relative bg-pasir text-tinta pt-20 md:pt-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pb-20 md:pb-32">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="font-tulisan text-jingga text-2xl mb-1">
            {t('pencapaian.penandaBab')}
          </span>

          <h2 className="font-judul text-hutan text-3xl md:text-5xl font-bold leading-tight mb-4">
            {t('pencapaian.judul')}
          </h2>

          <p className="font-isi text-base sm:text-lg text-tinta/80 leading-relaxed mb-8">
            {t('pencapaian.pengantar')}
          </p>

          <div className="inline-flex p-1.5 bg-kartu rounded-full border border-lumut/40 shadow-sm">
            <button
              type="button"
              onClick={() => handleGantiTab('Lomba')}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                tabAktif === 'Lomba'
                  ? 'bg-hutan text-kertas shadow-sm'
                  : 'text-hutan hover:text-jingga'
              }`}
              aria-pressed={tabAktif === 'Lomba'}
            >
              {t('pencapaian.tabLomba')}
            </button>
            <button
              type="button"
              onClick={() => handleGantiTab('Sertifikat')}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 ${
                tabAktif === 'Sertifikat'
                  ? 'bg-hutan text-kertas shadow-sm'
                  : 'text-hutan hover:text-jingga'
              }`}
              aria-pressed={tabAktif === 'Sertifikat'}
            >
              {t('pencapaian.tabSertifikat')}
            </button>
          </div>
        </div>

        {itemTerfilter.length === 0 ? (
          <div className="text-center py-16 bg-kartu rounded-3xl border border-dashed border-lumut/40">
            <p className="font-isi text-tinta/70 text-base">
              {t('pencapaian.kosong')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {itemTerfilter.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <KartuKertas kelas="h-full flex flex-col justify-between border border-lumut/30 hover:border-lumut transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-hutan text-bintang flex-shrink-0 flex items-center justify-center shadow-sm">
                      <Ikon nama="bintang" kelas="w-6 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-isi text-xs font-bold uppercase tracking-wider text-jingga">
                          {item.tahun}
                        </span>
                        <span className="font-tulisan text-base text-hutan/70">
                          {item.jenis}
                        </span>
                      </div>

                      <h3 className="font-judul text-lg sm:text-xl font-bold text-hutan mb-1">
                        {item.nama}
                      </h3>

                      <p className="font-isi text-xs text-tinta/60 font-semibold mb-3">
                        {t('pencapaian.penyelenggara')}: {item.penyelenggara}
                      </p>

                      {item.keterangan && (
                        <p className="font-isi text-sm text-tinta/75 leading-relaxed">
                          {item.keterangan[bahasaAktif] || item.keterangan.id}
                        </p>
                      )}
                    </div>
                  </div>

                  {item.link && (
                    <div className="pt-4 border-t border-pasir flex justify-end">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onKlikSfx}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-hutan hover:text-jingga transition-colors"
                      >
                        <span>{t('pencapaian.lihatSertifikat')}</span>
                        <Ikon nama="link" kelas="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </KartuKertas>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <PembatasGelombang kelas="text-malam" />
    </section>
  )
}
