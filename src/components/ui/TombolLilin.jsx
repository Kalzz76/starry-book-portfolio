import React, { useContext } from 'react'
import { KonteksTinta } from '../../context/KonteksTinta'
import { useBahasa } from '../../i18n/KonteksBahasa'

export default function TombolLilin({ onKlikSfx }) {
  const { terungkapSemua, toggleTintaSemua } = useContext(KonteksTinta)
  const { t } = useBahasa()

  const handleKlik = () => {
    if (onKlikSfx) onKlikSfx()
    toggleTintaSemua()
  }

  const labelTeks = terungkapSemua ? t('nav.tintaMatikan') : t('nav.tintaNyalakan')

  return (
    <button
      type="button"
      onClick={handleKlik}
      aria-pressed={terungkapSemua}
      aria-label={labelTeks}
      title={labelTeks}
      className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center border transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emas ${
        terungkapSemua
          ? 'bg-ramuanmerah text-cahayatinta border-emas shadow-[0_0_12px_rgba(201,162,39,0.7)] scale-105'
          : 'bg-ungugelap/90 text-krem/75 border-tembaga/50 hover:border-emas/80 hover:text-emas'
      }`}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
        <path d="M9 21h6" strokeLinecap="round" />
        <rect x="9" y="11" width="6" height="10" rx="1" fill={terungkapSemua ? '#c2a468' : 'none'} />
        <path
          d="M12 3c-1.5 2-2 3.5-2 5a2 2 0 0 0 4 0c0-1.5-.5-3-2-5z"
          fill={terungkapSemua ? '#ffd700' : 'none'}
          className={terungkapSemua ? 'animate-pulse' : ''}
        />
      </svg>
      {terungkapSemua && (
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emas animate-ping" />
      )}
    </button>
  )
}
