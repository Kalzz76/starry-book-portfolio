import React from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'

export default function TombolBahasa({ onKlikSfx }) {
  const { bahasaAktif, gantiBahasa } = useBahasa()

  const handlePilih = (bahasa) => {
    if (bahasa !== bahasaAktif) {
      gantiBahasa(bahasa)
      if (onKlikSfx) onKlikSfx()
    }
  }

  return (
    <div className="inline-flex items-center bg-malam/90 rounded-full p-1 border border-emas/40 shadow-sm">
      <button
        type="button"
        onClick={() => handlePilih('id')}
        className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-colors duration-200 ${
          bahasaAktif === 'id'
            ? 'bg-bintang text-malamgelap shadow-sm'
            : 'text-kertas/80 hover:text-bintang'
        }`}
        aria-label="Bahasa Indonesia"
      >
        ID
      </button>
      <button
        type="button"
        onClick={() => handlePilih('en')}
        className={`px-2.5 py-1 text-[11px] font-bold rounded-full transition-colors duration-200 ${
          bahasaAktif === 'en'
            ? 'bg-bintang text-malamgelap shadow-sm'
            : 'text-kertas/80 hover:text-bintang'
        }`}
        aria-label="English Language"
      >
        EN
      </button>
    </div>
  )
}
