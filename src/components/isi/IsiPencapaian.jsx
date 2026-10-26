import React, { useState } from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { daftarSertifikat } from '../../data/sertifikat'
import KartuKertas from '../ui/KartuKertas'
import Ikon from '../ui/Ikon'
import DekorasiHalaman from '../dekorasi/DekorasiHalaman'

export default function IsiPencapaian({ dalamBuku = false, onHalamanSfx, onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const [tabAktif, setTabAktif] = useState('Lomba')
  const [halamanAktif, setHalamanAktif] = useState(1)

  const handleGantiTab = (tab) => {
    setTabAktif(tab)
    setHalamanAktif(1)
    if (onHalamanSfx) onHalamanSfx()
  }

  const itemTerfilter = []
  for (let i = 0; i < daftarSertifikat.length; i++) {
    const item = daftarSertifikat[i]
    if (item.jenis === tabAktif) {
      itemTerfilter.push(item)
    }
  }

  const itemPerHalaman = dalamBuku ? 4 : itemTerfilter.length
  const totalHalaman = Math.max(1, Math.ceil(itemTerfilter.length / itemPerHalaman))
  const indeksMulai = (halamanAktif - 1) * itemPerHalaman
  const itemDitampilkan = dalamBuku
    ? itemTerfilter.slice(indeksMulai, indeksMulai + itemPerHalaman)
    : itemTerfilter

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
            {t('pencapaian.penandaBab')}
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
          {t('pencapaian.judul')}
        </h2>

        <p className={`font-isi text-tinta/80 leading-relaxed ${dalamBuku ? 'text-xs mb-3' : 'text-base sm:text-lg mb-6'}`}>
          {t('pencapaian.pengantar')}
        </p>

        <div className="inline-flex p-1 bg-pasir/80 rounded-full border border-lumut/40 shadow-sm mb-3">
          <button
            type="button"
            onClick={() => handleGantiTab('Lomba')}
            className={`rounded-full font-bold uppercase tracking-widest transition-all ${
              dalamBuku ? 'px-3.5 py-1 text-[10px]' : 'px-5 py-2 text-xs'
            } ${tabAktif === 'Lomba' ? 'bg-hutan text-kertas shadow-sm' : 'text-hutan hover:text-jingga'}`}
          >
            {t('pencapaian.tabLomba')}
          </button>
          <button
            type="button"
            onClick={() => handleGantiTab('Sertifikat')}
            className={`rounded-full font-bold uppercase tracking-widest transition-all ${
              dalamBuku ? 'px-3.5 py-1 text-[10px]' : 'px-5 py-2 text-xs'
            } ${tabAktif === 'Sertifikat' ? 'bg-hutan text-kertas shadow-sm' : 'text-hutan hover:text-jingga'}`}
          >
            {t('pencapaian.tabSertifikat')}
          </button>
        </div>

        <div className={`grid ${dalamBuku ? 'grid-cols-2 gap-2.5' : 'grid-cols-1 md:grid-cols-2 gap-6'}`}>
          {itemDitampilkan.map((item) => (
            <KartuKertas
              key={item.id}
              kelas={`border border-lumut/30 hover:border-lumut transition-all ${
                dalamBuku ? 'p-2.5 rounded-2xl bg-pasir/30' : 'p-5 rounded-3xl'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <div className={`rounded-xl bg-hutan text-bintang flex-shrink-0 flex items-center justify-center shadow-sm ${dalamBuku ? 'w-7 h-7' : 'w-12 h-12 rounded-2xl'}`}>
                  <Ikon nama="bintang" kelas={dalamBuku ? 'w-3.5 h-3.5' : 'w-6 h-6'} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-0.5">
                    <span className={`font-isi font-bold uppercase tracking-wider text-jingga ${dalamBuku ? 'text-[10px]' : 'text-xs'}`}>
                      {item.tahun}
                    </span>
                    <span className={`font-tulisan text-hutan/70 ${dalamBuku ? 'text-xs' : 'text-base'}`}>
                      {item.jenis}
                    </span>
                  </div>

                  <h3 className={`font-judul font-bold text-hutan leading-tight truncate ${dalamBuku ? 'text-xs sm:text-sm mb-0.5' : 'text-lg mb-1'}`}>
                    {item.nama}
                  </h3>

                  <p className={`font-isi text-tinta/60 font-semibold truncate ${dalamBuku ? 'text-[10px] mb-1' : 'text-xs mb-3'}`}>
                    {t('pencapaian.penyelenggara')}: {item.penyelenggara}
                  </p>

                  {item.link && (
                    <div className="pt-1 mt-1 border-t border-pasir flex justify-end">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={onKlikSfx}
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-hutan hover:text-jingga transition-colors"
                      >
                        <span>{t('pencapaian.lihatSertifikat')}</span>
                        <Ikon nama="link" kelas="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </KartuKertas>
          ))}
        </div>
      </div>
    </div>
  )
}
