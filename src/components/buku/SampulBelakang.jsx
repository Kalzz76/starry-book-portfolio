import React from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import TombolPil from '../ui/TombolPil'
import Ikon from '../ui/Ikon'
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
      className="relative w-full h-full rounded-l-3xl rounded-r-md overflow-hidden bg-gradient-to-bl from-[#0a0e2a] via-[#141b4d] to-[#0a0e2a] text-kertas border-y-2 border-l-2 border-emas/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.85)] flex flex-col justify-between p-6 sm:p-10 select-none cursor-pointer group"
    >
      <div
        className="absolute inset-4 sm:inset-6 rounded-l-2xl rounded-r-sm bg-cover bg-center opacity-25 mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: "url('/gambar/van_gogh_starry_night.jpg')",
          backgroundPosition: 'center 35%'
        }}
      />

      <div className="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-black/90 via-[#0a0e2a] to-transparent border-l border-emas/40 pointer-events-none" />
      <div className="absolute right-3 inset-y-0 w-2 bg-gradient-to-b from-emas via-bintang to-emas pointer-events-none shadow-[0_0_10px_#c9a227]" />

      <svg viewBox="0 0 100 100" className="absolute top-3 right-12 w-10 h-10 text-emas scale-x-[-1] pointer-events-none" fill="currentColor">
        <path d="M5,5 L45,5 C45,5 30,12 25,25 C20,38 20,45 20,45 L15,45 C15,45 14,25 5,15 Z" />
        <circle cx="12" cy="12" r="3" fill="#f6d776" />
      </svg>
      <svg viewBox="0 0 100 100" className="absolute top-3 left-3 w-10 h-10 text-emas pointer-events-none" fill="currentColor">
        <path d="M5,5 L45,5 C45,5 30,12 25,25 C20,38 20,45 20,45 L15,45 C15,45 14,25 5,15 Z" />
        <circle cx="12" cy="12" r="3" fill="#f6d776" />
      </svg>
      <svg viewBox="0 0 100 100" className="absolute bottom-3 right-12 w-10 h-10 text-emas scale-[-1] pointer-events-none" fill="currentColor">
        <path d="M5,5 L45,5 C45,5 30,12 25,25 C20,38 20,45 20,45 L15,45 C15,45 14,25 5,15 Z" />
        <circle cx="12" cy="12" r="3" fill="#f6d776" />
      </svg>
      <svg viewBox="0 0 100 100" className="absolute bottom-3 left-3 w-10 h-10 text-emas scale-y-[-1] pointer-events-none" fill="currentColor">
        <path d="M5,5 L45,5 C45,5 30,12 25,25 C20,38 20,45 20,45 L15,45 C15,45 14,25 5,15 Z" />
        <circle cx="12" cy="12" r="3" fill="#f6d776" />
      </svg>

      <div className="absolute inset-4 sm:inset-5 border-2 border-emas/70 rounded-l-2xl rounded-r-sm pointer-events-none" />
      <div className="absolute inset-6 sm:inset-7 border border-emas/30 rounded-l-xl rounded-r-sm pointer-events-none" />

      <div className="relative z-10 pr-8 pt-4 flex items-center justify-between">
        <span className="font-isi text-xs uppercase tracking-[0.25em] text-emas bg-malamgelap/85 border border-emas/60 px-4 py-1.5 rounded-full inline-block font-bold shadow-lg">
          {t('sampulBelakang.subtamat')}
        </span>
        <div className="flex items-center gap-1.5 text-emas/70 text-xs font-semibold">
          <Ikon nama="bintang" kelas="w-3.5 h-3.5 text-bintang" />
          <span>FIN</span>
        </div>
      </div>

      <div className="relative z-10 pr-8 my-auto text-center flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-bintang/20 border-2 border-emas/70 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(246,215,118,0.35)] group-hover:scale-105 transition-transform">
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-bintang drop-shadow-[0_0_10px_#f6d776]" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
          </svg>
        </div>

        <h2 className="font-tulisan text-4xl sm:text-5xl text-bintang mb-2 drop-shadow-lg">
          {t('sampulBelakang.tamat')}
        </h2>

        <h3 className="font-judul text-kertas text-xl sm:text-2xl font-bold mb-3 drop-shadow">
          {t('sampulBelakang.nama')}
        </h3>

        <p className="font-isi text-xs sm:text-sm text-kertas/90 leading-relaxed max-w-sm mb-6">
          {t('sampulBelakang.kutipan')}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            onClick={handleBukaAwal}
            className="inline-flex items-center gap-2 bg-bintang text-malamgelap font-black rounded-full px-5 py-2.5 text-xs uppercase tracking-widest shadow-2xl hover:bg-emas hover:text-malamgelap transition-all cursor-pointer"
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
            className="text-emas/80 hover:text-bintang transition-colors p-1"
            aria-label="GitHub"
          >
            <Ikon nama="github" kelas="w-4 h-4" />
          </a>
          <a
            href={dataProfil.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onKlikSfx}
            className="text-emas/80 hover:text-bintang transition-colors p-1"
            aria-label="LinkedIn"
          >
            <Ikon nama="linkedin" kelas="w-4 h-4" />
          </a>
          <a
            href={`mailto:${dataProfil.email}`}
            onClick={onKlikSfx}
            className="text-emas/80 hover:text-bintang transition-colors p-1"
            aria-label="Email"
          >
            <Ikon nama="email" kelas="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="relative z-10 pr-8 pb-2 flex items-center justify-between text-xs text-emas/80 border-t border-emas/30 pt-4">
        <span className="font-tulisan text-lg text-bintang">
          Kisah Abadi 2026
        </span>
        <span className="font-isi uppercase tracking-widest text-[10px] text-kertas/70">
          SMKN 13 Bandung
        </span>
      </div>
    </div>
  )
}
