import React, { useContext } from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { KonteksTransisi } from '../../context/KonteksTransisi'
import PemisahAlkimia from '../dekorasi/PemisahAlkimia'

export default function Footer({ onKlikSfx }) {
  const { t } = useBahasa()
  const { mulaiTransisi } = useContext(KonteksTransisi)

  const handleKembaliKeAtas = () => {
    if (onKlikSfx) onKlikSfx()
    mulaiTransisi('hero')
  }

  return (
    <footer className="relative bg-malamsihir text-krem py-16 px-4 border-t border-emas/30 overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <PemisahAlkimia kelas="my-4" simbol="🜍" />

        <p className="font-aksen italic text-lg sm:text-xl text-cahayatinta/90 max-w-lg mb-8 leading-relaxed">
          "{t('footer.teks')}"
        </p>

        <button
          type="button"
          onClick={handleKembaliKeAtas}
          className="px-6 py-2.5 mb-10 border-2 border-emas text-emas hover:bg-emas hover:text-sepia font-judul text-xs uppercase tracking-widest rounded-sm transition-all duration-300 shadow-sm cursor-pointer flex items-center gap-2"
          aria-label={t('footer.kembaliKeAtas')}
        >
          <span>↑</span>
          <span>{t('footer.kembaliKeAtas')}</span>
        </button>

        <div className="w-full pt-6 border-t border-emas/20 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm font-isi text-krem/60 gap-4">
          <p>{t('footer.hakCipta')}</p>
          <p className="font-aksen italic text-tembaga">{t('footer.kreditFont')}</p>
        </div>
      </div>
    </footer>
  )
}
