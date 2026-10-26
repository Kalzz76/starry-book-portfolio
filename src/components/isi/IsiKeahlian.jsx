import React from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { daftarKeahlian } from '../../data/keahlian'
import KartuKertas from '../ui/KartuKertas'
import Ikon from '../ui/Ikon'
import DekorasiHalaman from '../dekorasi/DekorasiHalaman'

export default function IsiKeahlian({ dalamBuku = false }) {
  const { t, bahasaAktif } = useBahasa()

  return (
    <div className={`h-full relative flex flex-col justify-between ${dalamBuku ? 'pt-20 pb-14 px-6 sm:px-10 text-tinta' : 'py-8'}`}>
      {dalamBuku && <DekorasiHalaman sisi="kanan" />}
      <div className="relative z-10">
        <span className="font-tulisan text-jingga text-2xl block mb-1">
          {t('keahlian.penandaBab')}
        </span>

        <h2 className={`font-judul text-hutan font-bold leading-tight ${dalamBuku ? 'text-2xl sm:text-3xl mb-2' : 'text-3xl md:text-5xl mb-4'}`}>
          {t('keahlian.judul')}
        </h2>

        <p className={`font-isi text-tinta/80 leading-relaxed ${dalamBuku ? 'text-xs sm:text-sm mb-4' : 'text-base sm:text-lg mb-8'}`}>
          {t('keahlian.pengantar')}
        </p>

        <div className={`grid ${dalamBuku ? 'grid-cols-2 gap-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'}`}>
          {daftarKeahlian.map((kelompok) => (
            <KartuKertas
              key={kelompok.id}
              malam={!dalamBuku}
              kelas={`border border-lumut/30 flex flex-col justify-between ${dalamBuku ? 'p-3.5 rounded-2xl bg-pasir/40' : 'p-6'}`}
            >
              <div>
                <div className={`rounded-xl bg-hutan text-bintang flex items-center justify-center mb-3 shadow-sm ${dalamBuku ? 'w-8 h-8' : 'w-12 h-12 rounded-2xl mb-5'}`}>
                  <Ikon nama={kelompok.ikon} kelas={dalamBuku ? 'w-4 h-4' : 'w-6 h-6'} />
                </div>

                <h3 className={`font-judul font-bold text-hutan mb-2 ${dalamBuku ? 'text-xs sm:text-sm' : 'text-lg mb-4'}`}>
                  {kelompok.nama[bahasaAktif] || kelompok.nama.id}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {kelompok.daftar.map((item) => (
                    <span
                      key={item}
                      className={`bg-pasir text-hutan font-semibold tracking-wide border border-lumut/20 shadow-sm rounded-full ${dalamBuku ? 'px-2 py-0.5 text-[10px]' : 'px-3 py-1 text-xs'}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`border-t border-lumut/20 flex items-center justify-between text-tinta/50 ${dalamBuku ? 'mt-3 pt-2 text-[10px]' : 'mt-6 pt-4 text-xs'}`}>
                <span className="font-tulisan text-jingga">Keahlian Teruji</span>
                <Ikon nama="bintang" kelas="w-3 h-3 text-bintang" />
              </div>
            </KartuKertas>
          ))}
        </div>
      </div>
    </div>
  )
}
