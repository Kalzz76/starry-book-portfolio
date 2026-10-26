import React from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import KartuKertas from '../ui/KartuKertas'
import TombolPil from '../ui/TombolPil'
import Ikon from '../ui/Ikon'
import DekorasiHalaman from '../dekorasi/DekorasiHalaman'

export default function IsiTentang({ dalamBuku = false, onKlikSfx, onPindahBab }) {
  const { t } = useBahasa()

  const kartuTentang = [
    { kunci: 'kartuPendidikan', ikon: 'buku' },
    { kunci: 'kartuOrganisasi', ikon: 'otak' },
    { kunci: 'kartuBahasa', ikon: 'lampu' }
  ]

  const handleKlikProyek = (e) => {
    if (onKlikSfx) onKlikSfx()
    if (onPindahBab) {
      e.preventDefault()
      onPindahBab('proyek')
    }
  }

  return (
    <div className={`h-full relative flex flex-col justify-between ${dalamBuku ? 'pt-20 pb-14 px-6 sm:px-10 text-tinta' : 'py-8'}`}>
      {dalamBuku && <DekorasiHalaman sisi="kanan" />}
      <div className="relative z-10">
        <span className="font-tulisan text-jingga text-2xl block mb-0.5">
          {t('tentang.penandaBab')}
        </span>

        <h2 className={`font-judul text-hutan font-bold leading-tight ${dalamBuku ? 'text-2xl sm:text-3xl mb-2' : 'text-3xl md:text-5xl mb-6'}`}>
          {t('tentang.judul')}
        </h2>

        <p className={`font-isi text-tinta/80 leading-relaxed ${dalamBuku ? 'text-xs sm:text-[13px] mb-2' : 'text-base sm:text-lg mb-4'}`}>
          {t('tentang.paragraf1')}
        </p>

        <p className={`font-isi text-tinta/80 leading-relaxed ${dalamBuku ? 'text-xs sm:text-[13px] mb-3' : 'text-base sm:text-lg mb-8'}`}>
          {t('tentang.paragraf2')}
        </p>

        <div className={`grid ${dalamBuku ? 'grid-cols-3 gap-2.5 mb-3' : 'grid-cols-1 md:grid-cols-3 gap-6 mb-8'}`}>
          {kartuTentang.map((item) => (
            <KartuKertas
              key={item.kunci}
              kelas={`border border-lumut/30 hover:border-lumut transition-all ${dalamBuku ? 'p-2.5 rounded-xl bg-pasir/30' : 'p-5 rounded-3xl'}`}
            >
              <div className="flex flex-col items-start gap-1.5">
                <div className={`rounded-lg bg-pasir text-hutan flex items-center justify-center flex-shrink-0 ${dalamBuku ? 'w-7 h-7' : 'w-10 h-10'}`}>
                  <Ikon nama={item.ikon} kelas={dalamBuku ? 'w-3.5 h-3.5' : 'w-5 h-5'} />
                </div>
                <div>
                  <h3 className={`font-judul text-hutan font-bold ${dalamBuku ? 'text-[11px] leading-tight mb-0.5' : 'text-base mb-1'}`}>
                    {t(`tentang.${item.kunci}Judul`)}
                  </h3>
                  <p className={`font-isi font-semibold text-tinta ${dalamBuku ? 'text-[11px] leading-tight' : 'text-sm mb-0.5'}`}>
                    {t(`tentang.${item.kunci}Isi`)}
                  </p>
                  <p className={`font-isi text-tinta/65 ${dalamBuku ? 'text-[10px] leading-tight' : 'text-xs'}`}>
                    {t(`tentang.${item.kunci}Sub`)}
                  </p>
                </div>
              </div>
            </KartuKertas>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <TombolPil
          href="#proyek"
          varian="utama"
          onClick={handleKlikProyek}
          ariaLabel={t('tentang.tombolLanjut')}
          kelas={dalamBuku ? 'py-2 px-5 text-xs' : ''}
        >
          <span>{t('tentang.tombolLanjut')}</span>
          <Ikon nama="panah-kanan" kelas="w-3.5 h-3.5" />
        </TombolPil>
      </div>
    </div>
  )
}
