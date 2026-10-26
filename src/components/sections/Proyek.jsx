import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { daftarProyek } from '../../data/proyek'
import Modal from '../ui/Modal'
import TombolPil from '../ui/TombolPil'
import PembatasGelombang from '../dekorasi/PembatasGelombang'
import Ikon from '../ui/Ikon'

export default function Proyek({ onHalamanSfx, onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const [filterAktif, setFilterAktif] = useState('Semua')
  const [proyekTerpilih, setProyekTerpilih] = useState(null)
  const tombolPemicuRef = useRef(null)

  const daftarKategori = ['Semua', 'Web', 'Mobile', 'Lainnya']

  const handlePilihFilter = (kategori) => {
    setFilterAktif(kategori)
    if (onHalamanSfx) {
      onHalamanSfx()
    }
  }

  const handleBukaModal = (proyek, e) => {
    tombolPemicuRef.current = e.currentTarget
    setProyekTerpilih(proyek)
    if (onHalamanSfx) {
      onHalamanSfx()
    }
  }

  const handleTutupModal = () => {
    setProyekTerpilih(null)
    if (onKlikSfx) {
      onKlikSfx()
    }
  }

  const proyekTerfilter = []
  for (let i = 0; i < daftarProyek.length; i++) {
    const item = daftarProyek[i]
    if (filterAktif === 'Semua' || item.kategori === filterAktif) {
      proyekTerfilter.push(item)
    }
  }

  return (
    <section id="proyek" className="relative bg-kertas text-tinta pt-20 md:pt-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pb-20 md:pb-32">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="font-tulisan text-jingga text-2xl mb-1">
            {t('proyek.penandaBab')}
          </span>

          <h2 className="font-judul text-hutan text-3xl md:text-5xl font-bold leading-tight mb-4">
            {t('proyek.judul')}
          </h2>

          <p className="font-isi text-base sm:text-lg text-tinta/80 leading-relaxed mb-8">
            {t('proyek.pengantar')}
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 p-1.5 bg-pasir/80 rounded-full border border-lumut/30">
            {daftarKategori.map((kat) => {
              const labelFilter = t(`proyek.filter${kat}`)
              const aktif = filterAktif === kat
              return (
                <button
                  key={kat}
                  type="button"
                  onClick={() => handlePilihFilter(kat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
                    aktif
                      ? 'bg-hutan text-kertas shadow-sm'
                      : 'bg-transparent text-hutan hover:bg-pasir'
                  }`}
                  aria-pressed={aktif}
                >
                  {labelFilter}
                </button>
              )
            })}
          </div>
        </div>

        {proyekTerfilter.length === 0 ? (
          <div className="text-center py-16 bg-pasir/50 rounded-3xl border border-dashed border-lumut/40">
            <p className="font-isi text-tinta/70 text-base">
              {t('proyek.kosong')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {proyekTerfilter.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-kartu rounded-r-3xl rounded-l-md border-l-[10px] border-l-hutan border-y border-r border-lumut/30 shadow-lembut hover:shadow-xl transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-tulisan text-jingga text-lg">
                      Jilid {index + 1} · {item.kategori}
                    </span>
                    <span className="font-isi text-xs uppercase tracking-wider text-hutan bg-pasir px-3 py-1 rounded-full font-bold">
                      {item.tahun}
                    </span>
                  </div>

                  <h3 className="font-judul text-xl sm:text-2xl font-bold text-hutan mb-3 group-hover:text-jingga transition-colors">
                    {item.judul}
                  </h3>

                  <p className="font-isi text-sm sm:text-base text-tinta/75 leading-relaxed mb-6">
                    {item.ringkasan[bahasaAktif] || item.ringkasan.id}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.teknologi.map((tek) => (
                      <span
                        key={tek}
                        className="bg-pasir text-hutan text-xs font-semibold px-3 py-1 rounded-full border border-lumut/20"
                      >
                        {tek}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-pasir/80 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => handleBukaModal(item, e)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-hutan hover:text-jingga transition-colors cursor-pointer"
                  >
                    <Ikon nama="buku" kelas="w-4 h-4" />
                    <span>{t('proyek.tombolBaca')}</span>
                  </button>

                  <div className="text-jingga opacity-60 group-hover:opacity-100 transition-opacity">
                    <Ikon nama="bintang" kelas="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      <Modal
        buka={proyekTerpilih !== null}
        padaTutup={handleTutupModal}
        judul={proyekTerpilih ? proyekTerpilih.judul : ''}
        elemenPemicuRef={tombolPemicuRef}
      >
        {proyekTerpilih && (
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-pasir text-hutan px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {proyekTerpilih.kategori}
              </span>
              <span className="text-tinta/60 text-xs font-semibold">
                {t('proyek.tahun')}: {proyekTerpilih.tahun}
              </span>
            </div>

            <div className="mb-6 p-4 sm:p-5 bg-pasir/60 rounded-2xl border border-lumut/30">
              <h4 className="font-judul text-hutan text-lg font-bold mb-2">
                Ringkasan Cerita
              </h4>
              <p className="font-isi text-sm sm:text-base text-tinta/80 leading-relaxed">
                {proyekTerpilih.ringkasan[bahasaAktif] || proyekTerpilih.ringkasan.id}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="font-judul text-hutan text-lg font-bold mb-2">
                Rincian Arsitektur & Pengerjaan
              </h4>
              <p className="font-isi text-base text-tinta/85 leading-relaxed">
                {proyekTerpilih.deskripsi[bahasaAktif] || proyekTerpilih.deskripsi.id}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="font-judul text-hutan text-sm font-bold uppercase tracking-wider mb-3">
                Teknologi yang Diterapkan
              </h4>
              <div className="flex flex-wrap gap-2">
                {proyekTerpilih.teknologi.map((tek) => (
                  <span
                    key={tek}
                    className="bg-pasir text-hutan px-3 py-1 rounded-full text-xs font-semibold border border-lumut/30"
                  >
                    {tek}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-pasir">
              <div className="flex flex-wrap gap-3">
                {proyekTerpilih.linkDemo && (
                  <TombolPil
                    href={proyekTerpilih.linkDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    varian="utama"
                    onClick={onKlikSfx}
                  >
                    <Ikon nama="link" kelas="w-3.5 h-3.5" />
                    <span>{t('proyek.demo')}</span>
                  </TombolPil>
                )}

                {proyekTerpilih.linkGithub && (
                  <TombolPil
                    href={proyekTerpilih.linkGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    varian="sekunder"
                    onClick={onKlikSfx}
                  >
                    <Ikon nama="github" kelas="w-3.5 h-3.5" />
                    <span>{t('proyek.github')}</span>
                  </TombolPil>
                )}
              </div>

              <TombolPil varian="terang" onClick={handleTutupModal}>
                {t('proyek.tutup')}
              </TombolPil>
            </div>
          </div>
        )}
      </Modal>

      <PembatasGelombang kelas="text-pasir" />
    </section>
  )
}
