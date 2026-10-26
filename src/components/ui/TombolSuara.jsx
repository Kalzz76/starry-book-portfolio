import React from 'react'
import Ikon from './Ikon'
import { useBahasa } from '../../i18n/KonteksBahasa'

export default function TombolSuara({ suaraAktif, onToggle }) {
  const { t } = useBahasa()
  const labelTeks = suaraAktif ? t('nav.suaraMatikan') : t('nav.suaraNyalakan')

  return (
    <button
      type="button"
      onClick={onToggle}
      className={`relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border ${
        suaraAktif
          ? 'bg-hutan text-kertas border-lumut shadow-sm scale-105'
          : 'bg-pasir/80 text-hutan border-lumut/40 hover:bg-pasir'
      }`}
      aria-label={labelTeks}
      title={labelTeks}
    >
      <Ikon nama={suaraAktif ? 'speaker' : 'speaker-mati'} kelas="w-4 h-4" />
      {suaraAktif && (
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-jingga rounded-full animate-ping" />
      )}
    </button>
  )
}
