import React from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import TombolPil from '../ui/TombolPil'
import Ikon from '../ui/Ikon'

export default function IsiHero({ onAksiProyek, onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const tautanCV = bahasaAktif === 'id' ? '/cv/CV_Kaka_ID.pdf' : '/cv/CV_Kaka_EN.pdf'

  const handleKlikProyek = (e) => {
    if (onKlikSfx) onKlikSfx()
    if (onAksiProyek) {
      e.preventDefault()
      onAksiProyek()
    }
  }

  return (
    <div className="w-full max-w-3xl px-4 flex flex-col items-center md:items-start text-center md:text-left select-none">
      <div className="bg-gradient-to-t from-malamgelap/95 via-malamgelap/75 to-transparent p-6 sm:p-8 rounded-3xl backdrop-blur-[2px] border border-emas/20 shadow-malam w-full">
        <span className="font-isi text-[11px] sm:text-xs uppercase tracking-[0.25em] text-emas bg-malamgelap/80 border border-emas/40 px-3.5 py-1 rounded-full inline-block font-semibold mb-3">
          {t('hero.eyebrow')}
        </span>

        <h1 className="font-judul text-3xl sm:text-4xl md:text-5xl font-bold text-kertas tracking-tight leading-tight mb-2">
          {t('hero.nama')}
        </h1>

        <p className="font-isi text-base sm:text-lg text-bintang font-medium mb-3">
          {t('hero.peran')}
        </p>

        <p className="font-isi text-xs sm:text-sm md:text-base text-kertas/80 leading-relaxed max-w-xl mb-6">
          {t('hero.tagline')}
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 mb-6">
          <TombolPil
            href="#proyek"
            varian="utama"
            onClick={handleKlikProyek}
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

        <div className="flex items-center justify-center md:justify-start gap-2 text-emas/80 pt-2 border-t border-emas/15">
          <span className="font-isi text-[10px] sm:text-xs font-semibold uppercase tracking-widest animasi-panah">
            {t('buku.petunjukScroll')}
          </span>
          <Ikon nama="panah-atas" kelas="w-3.5 h-3.5 rotate-180 text-emas animasi-panah" />
        </div>
      </div>
    </div>
  )
}
