import React, { useState, useEffect, useRef } from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import Ikon from './Ikon'

export default function MenuPengaturan({
  kursorAktif,
  onToggleKursor,
  maskotAktif,
  onToggleMaskot,
  suaraAktif,
  onToggleSuara,
  onKlikSfx
}) {
  const { t } = useBahasa()
  const [buka, setBuka] = useState(false)
  const wadahRef = useRef(null)

  useEffect(() => {
    const handleKlikLuar = (e) => {
      if (wadahRef.current && !wadahRef.current.contains(e.target)) {
        setBuka(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setBuka(false)
      }
    }

    if (buka) {
      document.addEventListener('mousedown', handleKlikLuar)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleKlikLuar)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [buka])

  const toggleBuka = () => {
    if (onKlikSfx) onKlikSfx()
    setBuka((prev) => !prev)
  }

  const handleToggle = (aksi) => {
    if (onKlikSfx) onKlikSfx()
    if (aksi) aksi()
  }

  const renderItemToggle = (judul, sub, nilai, onAksi) => {
    return (
      <div className="flex items-center justify-between gap-3 py-2 border-b border-emas/15 last:border-b-0">
        <div className="flex-1 pr-2">
          <div className="font-isi text-xs sm:text-sm font-semibold text-kertas tracking-wide">
            {judul}
          </div>
          <div className="font-isi text-[10px] sm:text-xs text-kertas/60 leading-tight mt-0.5">
            {sub}
          </div>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={nilai}
          onClick={() => handleToggle(onAksi)}
          className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-bintang ${
            nilai ? 'bg-emas' : 'bg-pasir/30'
          }`}
        >
          <span
            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-malamgelap shadow-md ring-0 transition duration-300 ease-in-out ${
              nilai ? 'translate-x-5 bg-white' : 'translate-x-0'
            }`}
          />
        </button>
      </div>
    )
  }

  return (
    <div ref={wadahRef} className="relative">
      <button
        type="button"
        onClick={toggleBuka}
        className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
          buka
            ? 'bg-emas text-malam border-bintang shadow-sm scale-105'
            : 'bg-malam/80 text-kertas border-emas/30 hover:border-emas/80 hover:bg-malam'
        }`}
        aria-label={t('pengaturan.judul')}
        title={t('pengaturan.judul')}
        aria-expanded={buka}
      >
        <Ikon
          nama="pengaturan"
          kelas={`w-4 h-4 transition-transform duration-500 ${buka ? 'rotate-90' : 'group-hover:rotate-45'}`}
        />
      </button>

      {buka && (
        <div className="absolute right-0 top-full mt-2 w-72 sm:w-80 bg-malamgelap/95 backdrop-blur-md border border-emas/40 rounded-2xl p-4 shadow-malam z-50 text-kertas animate-fade-in">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-emas/20">
            <div className="flex items-center gap-2 text-emas">
              <span>✦</span>
              <h3 className="font-judul text-sm sm:text-base font-bold tracking-tight">
                {t('pengaturan.judul')}
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setBuka(false)}
              className="text-kertas/50 hover:text-kertas text-xs font-bold p-1"
              aria-label="Tutup pengaturan"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col">
            {renderItemToggle(
              t('pengaturan.kursor'),
              t('pengaturan.kursorSub'),
              kursorAktif,
              onToggleKursor
            )}
            {renderItemToggle(
              t('pengaturan.maskot'),
              t('pengaturan.maskotSub'),
              maskotAktif,
              onToggleMaskot
            )}
            {renderItemToggle(
              t('pengaturan.suara'),
              t('pengaturan.suaraSub'),
              suaraAktif,
              onToggleSuara
            )}
          </div>
        </div>
      )}
    </div>
  )
}
