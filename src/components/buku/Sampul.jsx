import React from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import TombolPil from '../ui/TombolPil'
import Ikon from '../ui/Ikon'
import BingkaiEmasBaroque from '../ui/BingkaiEmasBaroque'
import BintangVanGogh from '../dekorasi/BintangVanGogh'

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
      className="relative w-full h-full rounded-r-3xl rounded-l-md overflow-hidden text-kertas shadow-[0_35px_80px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-between p-6 sm:p-10 select-none cursor-pointer group"
      style={{
        backgroundColor: '#101530',
        backgroundImage: "radial-gradient(ellipse at center, rgba(16, 21, 48, 0.4) 0%, rgba(8, 11, 28, 0.95) 100%), url('/gambar/van_gogh_starry_night.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: 'radial-gradient(#f6d776 0.75px, transparent 0.75px)',
          backgroundSize: '16px 16px'
        }}
      />

      <BingkaiEmasBaroque />

      <div className="absolute left-0 inset-y-0 w-10 sm:w-12 bg-gradient-to-r from-[#1c120c] via-[#2d1e13] to-transparent border-r-2 border-[#d4af37]/60 pointer-events-none z-30 shadow-[4px_0_12px_rgba(0,0,0,0.7)] flex flex-col justify-around py-12 items-center">
        <div className="w-full h-3 bg-gradient-to-r from-[#3b2413] via-[#d4af37] to-[#3b2413] opacity-80 shadow-md" />
        <div className="w-full h-3 bg-gradient-to-r from-[#3b2413] via-[#d4af37] to-[#3b2413] opacity-80 shadow-md" />
        <div className="w-full h-3 bg-gradient-to-r from-[#3b2413] via-[#d4af37] to-[#3b2413] opacity-80 shadow-md" />
        <div className="w-full h-3 bg-gradient-to-r from-[#3b2413] via-[#d4af37] to-[#3b2413] opacity-80 shadow-md" />
      </div>

      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-8 h-20 bg-[#422815] rounded-r-lg border-y-2 border-r-2 border-[#d4af37] shadow-2xl flex items-center justify-center pointer-events-none z-30">
        <div className="w-4 h-8 border-2 border-[#d4af37] rounded-sm flex items-center justify-center bg-[#24150b]">
          <div className="w-2 h-2 rounded-full bg-bintang shadow-[0_0_6px_#f6d776]" />
        </div>
      </div>

      <div className="absolute top-8 right-8 z-20 pointer-events-none">
        <BintangVanGogh ukuran={34} jejakAngin={false} />
      </div>
      <div className="absolute bottom-16 right-12 z-20 pointer-events-none">
        <BintangVanGogh ukuran={28} jejakAngin={false} />
      </div>

      <div className="relative z-20 pl-8 pt-4 flex items-center justify-between">
        <span className="font-isi text-[11px] sm:text-xs uppercase tracking-[0.25em] text-emas bg-malamgelap/90 border border-emas/70 px-4 py-1.5 rounded-full inline-block font-bold shadow-xl backdrop-blur-sm">
          {t('hero.eyebrow')}
        </span>
        <span className="font-tulisan text-2xl text-bintang drop-shadow mr-6">
          2026
        </span>
      </div>

      <div className="relative z-20 pl-8 my-auto">
        <div className="w-16 h-16 rounded-2xl bg-malamgelap/80 border-2 border-emas/80 flex items-center justify-center mb-5 shadow-[0_0_24px_rgba(246,215,118,0.4)] group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 24 24" className="w-9 h-9 text-emas" fill="currentColor">
            <circle cx="9" cy="9" r="2.2" />
            <circle cx="15" cy="9" r="2.2" />
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.46.04-.92.1-1.36 1.84.72 3.79 1.16 5.9 1.16 2.11 0 4.06-.44 5.9-1.16.06.44.1.9.1 1.36 0 4.41-3.59 8-8 8z" />
          </svg>
        </div>

        <h1 className="font-judul text-kertas text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          {t('hero.nama')}
        </h1>

        <div className="flex items-center gap-2 mb-3">
          <div className="h-0.5 w-8 bg-gradient-to-r from-emas to-transparent" />
          <p className="font-isi text-sm sm:text-base font-semibold text-bintang tracking-wide drop-shadow">
            {t('hero.peran')}
          </p>
        </div>

        <p className="font-isi text-xs sm:text-sm text-kertas/90 leading-relaxed max-w-sm mb-6 drop-shadow">
          {t('hero.tagline')}
        </p>

        <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={handleBuka}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-bintang via-emas to-bintang text-malamgelap font-black rounded-full px-5 py-2.5 text-xs uppercase tracking-widest shadow-[0_8px_20px_rgba(246,215,118,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Ikon nama="buku" kelas="w-4 h-4 text-malamgelap" />
            <span>{t('buku.bukaBuku')}</span>
          </button>

          <button
            type="button"
            onClick={handleLihatProyek}
            className="inline-flex items-center gap-2 bg-malamgelap/90 border border-emas text-emas font-bold rounded-full px-4 py-2.5 text-xs uppercase tracking-widest hover:bg-emas hover:text-malamgelap transition-all cursor-pointer shadow-lg"
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

      <div className="relative z-20 pl-8 pb-2 flex items-center justify-between text-xs text-emas border-t border-emas/40 pt-4">
        <span className="font-tulisan text-2xl text-bintang">
          Buku Portofolio Dongeng
        </span>
        <span className="font-isi uppercase tracking-widest text-[10px] text-kertas/80 bg-malamgelap/80 px-2.5 py-1 rounded-full border border-emas/30 mr-6">
          SMKN 13 Bandung
        </span>
      </div>
    </div>
  )
}
