import React from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import Ikon from './Ikon'

export default function Footer({ onKlikSfx }) {
  const { t } = useBahasa()

  const kembaliKeAtas = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (onKlikSfx) onKlikSfx()
  }

  return (
    <footer className="bg-kertas text-tinta py-16 px-4 border-t border-pasir relative">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-px bg-lumut/40" />
          <span className="text-jingga">
            <Ikon nama="bintang" kelas="w-4 h-4" />
          </span>
          <h2 className="font-tulisan text-4xl text-jingga">
            {t('footer.tamat')}
          </h2>
          <span className="text-jingga">
            <Ikon nama="bintang" kelas="w-4 h-4" />
          </span>
          <span className="w-12 h-px bg-lumut/40" />
        </div>

        <p className="font-isi text-sm text-tinta/70 max-w-md mb-8">
          {t('footer.subtamat')}
        </p>

        <button
          type="button"
          onClick={kembaliKeAtas}
          className="inline-flex items-center gap-2 border border-hutan text-hutan rounded-full px-5 py-2 text-xs uppercase tracking-widest hover:bg-hutan hover:text-kertas transition-all duration-300 mb-10 shadow-sm"
          aria-label={t('footer.kembaliKeAtas')}
        >
          <Ikon nama="panah-atas" kelas="w-4 h-4" />
          <span>{t('footer.kembaliKeAtas')}</span>
        </button>

        <div className="w-full pt-6 border-t border-pasir flex flex-col sm:flex-row items-center justify-between text-xs text-tinta/60 gap-4">
          <p>{t('footer.hakCipta')}</p>
          <a
            href="https://github.com/Kalzz76"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-hutan underline underline-offset-4 transition-colors"
          >
            {t('footer.kreditFont')}
          </a>
        </div>
      </div>
    </footer>
  )
}
