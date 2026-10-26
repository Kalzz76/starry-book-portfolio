import React from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import TombolPil from '../ui/TombolPil'
import Ikon from '../ui/Ikon'
import BingkaiEmasBaroque from '../ui/BingkaiEmasBaroque'
import BintangVanGogh from '../dekorasi/BintangVanGogh'
import { dataProfil } from '../../data/profil'

export default function SampulBelakang({ onBukaKembali, onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const tautanCV = bahasaAktif === 'id' ? '/cv/CV_Kaka_ID.pdf' : '/cv/CV_Kaka_EN.pdf'

  const handleBukaAwal = (e) => {
    if (onKlikSfx) onKlikSfx()
    if (onBukaKembali) {
      if (e) e.preventDefault()
      onBukaKembali('hero')
    }
  }

  return (
    <div
      onClick={handleBukaAwal}
      className="relative w-full h-full rounded-l-3xl rounded-r-md overflow-hidden text-kertas shadow-[0_35px_80px_-15px_rgba(0,0,0,0.9)] flex flex-col justify-between p-6 sm:p-10 select-none cursor-pointer group"
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

      <div className="absolute inset-0 scale-x-[-1] pointer-events-none">
        <BingkaiEmasBaroque />
      </div>

      <div className="absolute right-0 inset-y-0 w-10 sm:w-12 bg-gradient-to-l from-[#1c120c] via-[#2d1e13] to-transparent border-l-2 border-[#d4af37]/60 pointer-events-none z-30 shadow-[-4px_0_12px_rgba(0,0,0,0.7)] flex flex-col justify-around py-12 items-center">
        <div className="w-full h-3 bg-gradient-to-l from-[#3b2413] via-[#d4af37] to-[#3b2413] opacity-80 shadow-md" />
        <div className="w-full h-3 bg-gradient-to-l from-[#3b2413] via-[#d4af37] to-[#3b2413] opacity-80 shadow-md" />
        <div className="w-full h-3 bg-gradient-to-l from-[#3b2413] via-[#d4af37] to-[#3b2413] opacity-80 shadow-md" />
        <div className="w-full h-3 bg-gradient-to-l from-[#3b2413] via-[#d4af37] to-[#3b2413] opacity-80 shadow-md" />
      </div>

      <div className="absolute top-8 left-8 z-20 pointer-events-none">
        <BintangVanGogh ukuran={32} jejakAngin={false} />
      </div>

      <div className="relative z-20 pr-8 pt-4 flex items-center justify-between">
        <span className="font-isi text-[11px] sm:text-xs uppercase tracking-[0.25em] text-emas bg-malamgelap/90 border border-emas/70 px-4 py-1.5 rounded-full inline-block font-bold shadow-xl backdrop-blur-sm">
          {t('sampulBelakang.subtamat')}
        </span>
        <div className="flex items-center gap-1.5 text-bintang text-xs font-bold mr-6">
          <Ikon nama="bintang" kelas="w-3.5 h-3.5 text-bintang" />
          <span>FIN</span>
        </div>
      </div>

      <div className="relative z-20 pr-8 my-auto text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-bintang/20 border-2 border-emas/80 flex items-center justify-center mb-5 shadow-[0_0_24px_rgba(246,215,118,0.4)] group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 24 24" className="w-9 h-9 text-bintang drop-shadow-[0_0_10px_#f6d776]" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
          </svg>
        </div>

        <h2 className="font-tulisan text-4xl sm:text-5xl text-bintang mb-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          {t('sampulBelakang.tamat')}
        </h2>

        <h3 className="font-judul text-kertas text-xl sm:text-2xl font-bold mb-3 drop-shadow">
          {t('sampulBelakang.nama')}
        </h3>

        <p className="font-isi text-xs sm:text-sm text-kertas/90 leading-relaxed max-w-sm mb-6 drop-shadow">
          {t('sampulBelakang.kutipan')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={handleBukaAwal}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-bintang via-emas to-bintang text-malamgelap font-black rounded-full px-5 py-2.5 text-xs uppercase tracking-widest shadow-[0_8px_20px_rgba(246,215,118,0.4)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <Ikon nama="panah-atas" kelas="w-3.5 h-3.5 text-malamgelap" />
            <span>{t('sampulBelakang.bacaKembali')}</span>
          </button>

          <TombolPil
            href={tautanCV}
            target="_blank"
            rel="noopener noreferrer"
            varian="emas"
            onClick={onKlikSfx}
          >
            <Ikon nama="unduh" kelas="w-3.5 h-3.5" />
            <span>{t('sampulBelakang.unduhCv')}</span>
          </TombolPil>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6" onClick={(e) => e.stopPropagation()}>
          <a
            href={dataProfil.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onKlikSfx}
            className="text-emas hover:text-bintang transition-colors p-1.5 rounded-full bg-malamgelap/80 border border-emas/40"
            aria-label="GitHub"
          >
            <Ikon nama="github" kelas="w-4 h-4" />
          </a>
          <a
            href={dataProfil.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onKlikSfx}
            className="text-emas hover:text-bintang transition-colors p-1.5 rounded-full bg-malamgelap/80 border border-emas/40"
            aria-label="LinkedIn"
          >
            <Ikon nama="linkedin" kelas="w-4 h-4" />
          </a>
          <a
            href={`mailto:${dataProfil.email}`}
            onClick={onKlikSfx}
            className="text-emas hover:text-bintang transition-colors p-1.5 rounded-full bg-malamgelap/80 border border-emas/40"
            aria-label="Email"
          >
            <Ikon nama="email" kelas="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="relative z-20 pr-8 pb-2 flex items-center justify-between text-xs text-emas border-t border-emas/40 pt-4">
        <span className="font-tulisan text-2xl text-bintang">
          Kisah Abadi 2026
        </span>
        <span className="font-isi uppercase tracking-widest text-[10px] text-kertas/80 bg-malamgelap/80 px-2.5 py-1 rounded-full border border-emas/30 mr-6">
          SMKN 13 Bandung
        </span>
      </div>
    </div>
  )
}
