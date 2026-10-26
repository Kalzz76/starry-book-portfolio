import React, { useState, useRef } from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { daftarProyek } from '../../data/proyek'
import Modal from '../ui/Modal'
import TombolPil from '../ui/TombolPil'
import Ikon from '../ui/Ikon'
import DekorasiHalaman from '../dekorasi/DekorasiHalaman'

export default function IsiProyek({ dalamBuku = false, onHalamanSfx, onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const [filterAktif, setFilterAktif] = useState('Semua')
  const [halamanAktif, setHalamanAktif] = useState(1)
  const [proyekTerpilih, setProyekTerpilih] = useState(null)
  const tombolPemicuRef = useRef(null)

  const daftarKategori = ['Semua', 'Web', 'Mobile', 'Lainnya']

  const handlePilihFilter = (kategori) => {
    setFilterAktif(kategori)
    setHalamanAktif(1)
    if (onHalamanSfx) onHalamanSfx()
  }

  const handleBukaModal = (proyek, e) => {
    tombolPemicuRef.current = e.currentTarget
    setProyekTerpilih(proyek)
    if (onHalamanSfx) onHalamanSfx()
  }

  const handleTutupModal = () => {
    setProyekTerpilih(null)
    if (onKlikSfx) onKlikSfx()
  }

  const proyekTerfilter = []
  for (let i = 0; i < daftarProyek.length; i++) {
    const item = daftarProyek[i]
    if (filterAktif === 'Semua' || item.kategori === filterAktif) {
      proyekTerfilter.push(item)
    }
  }

  const itemPerHalaman = dalamBuku ? 2 : proyekTerfilter.length
  const totalHalaman = Math.max(1, Math.ceil(proyekTerfilter.length / itemPerHalaman))
  const indeksMulai = (halamanAktif - 1) * itemPerHalaman
  const proyekDitampilkan = dalamBuku
    ? proyekTerfilter.slice(indeksMulai, indeksMulai + itemPerHalaman)
    : proyekTerfilter

  const gantiHalaman = (arah) => {
    const baru = halamanAktif + arah
    if (baru >= 1 && baru <= totalHalaman) {
      setHalamanAktif(baru)
      if (onHalamanSfx) onHalamanSfx()
    }
  }

  return (
    <div className={`h-full relative flex flex-col justify-between ${dalamBuku ? 'pt-20 pb-14 px-6 sm:px-10 text-tinta' : 'py-8'}`}>
      {dalamBuku && <DekorasiHalaman sisi="kanan" />}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4 mb-1">
          <span className="font-tulisan text-jingga text-2xl block">
            {t('proyek.penandaBab')}
          </span>

          {dalamBuku && totalHalaman > 1 && (
            <div className="flex items-center gap-2 bg-pasir/70 rounded-full px-2.5 py-1 border border-lumut/30 text-xs">
              <button
                type="button"
                disabled={halamanAktif <= 1}
                onClick={() => gantiHalaman(-1)}
                className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-hutan hover:text-kertas disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-tinta"
                aria-label={t('buku.halamanSebelumnya')}
              >
                ‹
              </button>
              <span className="font-mono text-[11px] font-bold text-hutan">
                {halamanAktif} / {totalHalaman}
              </span>
              <button
                type="button"
                disabled={halamanAktif >= totalHalaman}
                onClick={() => gantiHalaman(1)}
                className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-hutan hover:text-kertas disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-tinta"
                aria-label={t('buku.halamanBerikutnya')}
              >
                ›
              </button>
            </div>
          )}
        </div>

        <h2 className={`font-judul text-hutan font-bold leading-tight ${dalamBuku ? 'text-2xl sm:text-3xl mb-2' : 'text-3xl md:text-5xl mb-4'}`}>
          {t('proyek.judul')}
        </h2>

        <p className={`font-isi text-tinta/80 leading-relaxed ${dalamBuku ? 'text-xs mb-3' : 'text-base sm:text-lg mb-6'}`}>
          {t('proyek.pengantar')}
        </p>

        <div className="flex flex-wrap gap-1.5 p-1 bg-pasir/80 rounded-full border border-lumut/30 w-fit mb-4">
          {daftarKategori.map((kat) => {
            const aktif = filterAktif === kat
            return (
              <button
                key={kat}
                type="button"
                onClick={() => handlePilihFilter(kat)}
                className={`rounded-full uppercase font-bold tracking-widest transition-all ${
                  dalamBuku ? 'px-3 py-1 text-[10px]' : 'px-4 py-1.5 text-xs'
                } ${aktif ? 'bg-hutan text-kertas shadow-sm' : 'bg-transparent text-hutan hover:bg-pasir'}`}
              >
                {t(`proyek.filter${kat}`)}
              </button>
            )
          })}
        </div>

        <div className={`grid ${dalamBuku ? 'grid-cols-1 gap-3' : 'grid-cols-1 md:grid-cols-2 gap-8'}`}>
          {proyekDitampilkan.map((item, index) => (
            <article
              key={item.id}
              className={`group relative bg-kartu border-l-8 border-l-hutan border-y border-r border-lumut/30 shadow-lembut flex flex-col justify-between ${
                dalamBuku ? 'p-3.5 rounded-r-2xl rounded-l-sm' : 'p-6 sm:p-8 rounded-r-3xl rounded-l-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className={`font-tulisan text-jingga ${dalamBuku ? 'text-sm' : 'text-lg'}`}>
                    Jilid {index + 1 + (halamanAktif - 1) * itemPerHalaman} · {item.kategori}
                  </span>
                  <span className={`font-isi uppercase tracking-wider text-hutan bg-pasir rounded-full font-bold ${dalamBuku ? 'text-[10px] px-2 py-0.5' : 'text-xs px-3 py-1'}`}>
                    {item.tahun}
                  </span>
                </div>

                <h3 className={`font-judul font-bold text-hutan group-hover:text-jingga transition-colors ${dalamBuku ? 'text-sm sm:text-base mb-1' : 'text-xl sm:text-2xl mb-3'}`}>
                  {item.judul}
                </h3>

                <p className={`font-isi text-tinta/75 leading-relaxed ${dalamBuku ? 'text-xs line-clamp-2 mb-2' : 'text-sm sm:text-base mb-6'}`}>
                  {item.ringkasan[bahasaAktif] || item.ringkasan.id}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {item.teknologi.slice(0, dalamBuku ? 3 : item.teknologi.length).map((tek) => (
                    <span
                      key={tek}
                      className={`bg-pasir text-hutan font-semibold rounded-full border border-lumut/20 ${dalamBuku ? 'text-[10px] px-2 py-0.5' : 'text-xs px-3 py-1'}`}
                    >
                      {tek}
                    </span>
                  ))}
                  {dalamBuku && item.teknologi.length > 3 && (
                    <span className="text-[10px] text-tinta/50 self-center">
                      +{item.teknologi.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-2 border-t border-pasir/80 flex items-center justify-between">
                <button
                  type="button"
                  onClick={(e) => handleBukaModal(item, e)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-hutan hover:text-jingga transition-colors cursor-pointer"
                >
                  <Ikon nama="buku" kelas="w-3.5 h-3.5" />
                  <span>{t('proyek.tombolBaca')}</span>
                </button>

                <div className="text-jingga opacity-60 group-hover:opacity-100 transition-opacity">
                  <Ikon nama="bintang" kelas="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>
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
    </div>
  )
}
