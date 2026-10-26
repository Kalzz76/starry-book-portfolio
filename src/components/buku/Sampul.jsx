import React from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import TombolPil from '../ui/TombolPil'
import Ikon from '../ui/Ikon'

export default function Sampul({ onBukaBuku, onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const tautanCV = bahasaAktif === 'id' ? '/cv/CV_Kaka_ID.pdf' : '/cv/CV_Kaka_EN.pdf'

  const handleBuka = (e) => {
    if (onKlikSfx) onKlikSfx()
    if (onBukaBuku) {
      if (e) e.preventDefault()
      onBukaBuku('tentang')
    }
  }

  const handleLihatProyek = (e) => {
    if (onKlikSfx) onKlikSfx()
    if (onBukaBuku) {
      if (e) e.preventDefault()
      onBukaBuku('proyek')
    }
  }

  return (
    <div
      onClick={handleBuka}
      className="relative w-full h-full rounded-r-3xl rounded-l-md overflow-hidden bg-gradient-to-br from-[#0a0e2a] via-[#141b4d] to-[#0a0e2a] text-kertas border-y-2 border-r-2 border-emas/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.85)] flex flex-col justify-between p-6 sm:p-10 select-none cursor-pointer group"
    >
      <div
        className="absolute inset-4 sm:inset-6 rounded-r-2xl rounded-l-sm bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: "url('/gambar/van_gogh_starry_night.jpg')",
          backgroundPosition: 'center 35%'
        }}
      />

      <div className="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-black/90 via-[#0a0e2a] to-transparent border-r border-emas/40 pointer-events-none" />
      <div className="absolute left-3 inset-y-0 w-2 bg-gradient-to-b from-emas via-bintang to-emas pointer-events-none shadow-[0_0_10px_#c9a227]" />

      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-16 bg-[#52341d] rounded-r-lg border-y-2 border-r-2 border-emas shadow-2xl flex items-center justify-center pointer-events-none z-20">
        <div className="w-4 h-6 border-2 border-emas rounded-sm flex items-center justify-center bg-[#3b2413]">
          <div className="w-1.5 h-1.5 rounded-full bg-bintang shadow-[0_0_4px_#f6d776]" />
        </div>
      </div>

      <svg viewBox="0 0 100 100" className="absolute top-3 left-12 w-10 h-10 text-emas pointer-events-none" fill="currentColor">
        <path d="M5,5 L45,5 C45,5 30,12 25,25 C20,38 20,45 20,45 L15,45 C15,45 14,25 5,15 Z" />
        <circle cx="12" cy="12" r="3" fill="#f6d776" />
      </svg>
      <svg viewBox="0 0 100 100" className="absolute top-3 right-3 w-10 h-10 text-emas scale-x-[-1] pointer-events-none" fill="currentColor">
        <path d="M5,5 L45,5 C45,5 30,12 25,25 C20,38 20,45 20,45 L15,45 C15,45 14,25 5,15 Z" />
        <circle cx="12" cy="12" r="3" fill="#f6d776" />
      </svg>
      <svg viewBox="0 0 100 100" className="absolute bottom-3 left-12 w-10 h-10 text-emas scale-y-[-1] pointer-events-none" fill="currentColor">
        <path d="M5,5 L45,5 C45,5 30,12 25,25 C20,38 20,45 20,45 L15,45 C15,45 14,25 5,15 Z" />
        <circle cx="12" cy="12" r="3" fill="#f6d776" />
      </svg>
      <svg viewBox="0 0 100 100" className="absolute bottom-3 right-3 w-10 h-10 text-emas scale-[-1] pointer-events-none" fill="currentColor">
        <path d="M5,5 L45,5 C45,5 30,12 25,25 C20,38 20,45 20,45 L15,45 C15,45 14,25 5,15 Z" />
        <circle cx="12" cy="12" r="3" fill="#f6d776" />
      </svg>

      <div className="absolute inset-4 sm:inset-5 border-2 border-emas/70 rounded-r-2xl rounded-l-sm pointer-events-none" />
      <div className="absolute inset-6 sm:inset-7 border border-emas/30 rounded-r-xl rounded-l-sm pointer-events-none" />

      <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-bintang/10 border border-bintang/30 pointer-events-none flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-bintang/20 border border-bintang/50 flex items-center justify-center animate-pulse">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-bintang drop-shadow-[0_0_10px_#f6d776]" fill="currentColor">
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8A9.006 9.006 0 0 0 12 3Z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 pl-8 pt-4">
        <span className="font-isi text-xs uppercase tracking-[0.25em] text-emas bg-malamgelap/85 border border-emas/60 px-4 py-1.5 rounded-full inline-block font-bold shadow-lg">
          {t('hero.eyebrow')}
        </span>
      </div>

      <div className="relative z-10 pl-8 my-auto">
        <div className="w-16 h-16 rounded-2xl bg-emas/20 border border-emas/70 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(201,162,39,0.35)] group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-emas" fill="currentColor">
            <circle cx="9" cy="9" r="2" />
            <circle cx="15" cy="9" r="2" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.46.04-.92.1-1.36 1.84.72 3.79 1.16 5.9 1.16 2.11 0 4.06-.44 5.9-1.16.06.44.1.9.1 1.36 0 4.41-3.59 8-8 8z" />
          </svg>
        </div>

        <h1 className="font-judul text-kertas text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-2 drop-shadow-lg">
          {t('hero.nama')}
        </h1>

        <p className="font-isi text-base sm:text-lg font-medium text-bintang mb-4 drop-shadow">
          {t('hero.peran')}
        </p>

        <p className="font-isi text-xs sm:text-sm text-kertas/90 leading-relaxed max-w-sm mb-6">
          {t('hero.tagline')}
        </p>

        <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={handleBuka}
            className="inline-flex items-center gap-2 bg-bintang text-malamgelap font-black rounded-full px-5 py-2.5 text-xs uppercase tracking-widest shadow-2xl hover:bg-emas hover:text-malamgelap transition-all cursor-pointer"
          >
            <Ikon nama="buku" kelas="w-4 h-4 text-malamgelap" />
            <span>{t('buku.bukaBuku')}</span>
          </button>

          <button
            type="button"
            onClick={handleLihatProyek}
            className="inline-flex items-center gap-2 bg-malamgelap/80 border border-emas text-emas font-bold rounded-full px-4 py-2.5 text-xs uppercase tracking-widest hover:bg-emas hover:text-malamgelap transition-all cursor-pointer shadow-lg"
          >
            <span>{t('hero.tombolProyek')}</span>
            <Ikon nama="panah-kanan" kelas="w-3.5 h-3.5" />
          </button>

          <TombolPil
            href={tautanCV}
            target="_blank"
            rel="noopener noreferrer"
            varian="emas"
            onClick={onKlikSfx}
          >
            <Ikon nama="unduh" kelas="w-3.5 h-3.5" />
            <span>{t('hero.tombolCV')}</span>
          </TombolPil>
        </div>
      </div>

      <div className="relative z-10 pl-8 pb-2 flex items-center justify-between text-xs text-emas/80 border-t border-emas/30 pt-4">
        <span className="font-tulisan text-xl text-bintang">
          Buku Portofolio 2026
        </span>
        <span className="font-isi uppercase tracking-widest text-[10px] text-kertas/70">
          SMKN 13 Bandung
        </span>
      </div>
    </div>
  )
}
