import React from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'

export default function PenandaBab({ daftarBab, babAktifIndex, onPilihBab, onKlikSfx }) {
  const { t } = useBahasa()

  const handleSebelumnya = () => {
    if (babAktifIndex > 0) {
      onPilihBab(babAktifIndex - 1)
      if (onKlikSfx) onKlikSfx()
    }
  }

  const handleBerikutnya = () => {
    if (babAktifIndex < daftarBab.length - 1) {
      onPilihBab(babAktifIndex + 1)
      if (onKlikSfx) onKlikSfx()
    }
  }

  return (
    <div className="flex items-center gap-3 bg-malamgelap/80 backdrop-blur-md px-4 py-2 rounded-full border border-emas/40 shadow-lg select-none">
      <button
        type="button"
        disabled={babAktifIndex <= 0}
        onClick={handleSebelumnya}
        className="w-7 h-7 rounded-full flex items-center justify-center text-kertas hover:bg-emas hover:text-malamgelap disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-kertas transition-colors"
        aria-label={t('buku.babSebelumnya')}
      >
        ‹
      </button>

      <div className="flex items-center gap-2">
        {daftarBab.map((bab, index) => {
          const aktif = babAktifIndex === index
          return (
            <button
              key={bab.hash}
              type="button"
              onClick={() => {
                onPilihBab(index)
                if (onKlikSfx) onKlikSfx()
              }}
              className={`transition-all duration-300 rounded-full ${
                aktif
                  ? 'w-6 h-2 bg-bintang shadow-[0_0_8px_#f6d776]'
                  : 'w-2 h-2 bg-kertas/40 hover:bg-kertas/80'
              }`}
              aria-label={t(bab.kunci)}
              aria-current={aktif ? 'true' : undefined}
            />
          )
        })}
      </div>

      <button
        type="button"
        disabled={babAktifIndex >= daftarBab.length - 1}
        onClick={handleBerikutnya}
        className="w-7 h-7 rounded-full flex items-center justify-center text-kertas hover:bg-emas hover:text-malamgelap disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-kertas transition-colors"
        aria-label={t('buku.babBerikutnya')}
      >
        ›
      </button>
    </div>
  )
}
