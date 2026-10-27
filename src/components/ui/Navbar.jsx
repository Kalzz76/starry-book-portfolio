import React, { useState, useEffect, useContext } from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { KonteksTransisi } from '../../context/KonteksTransisi'
import TombolBahasa from './TombolBahasa'
import TombolSuara from './TombolSuara'
import TombolLilin from './TombolLilin'
import { daftarBab } from '../../data/bab'

export default function Navbar({ suaraAktif, onToggleSuara, onKlikSfx }) {
  const { t } = useBahasa()
  const { mulaiTransisi } = useContext(KonteksTransisi)
  const [menuBuka, setMenuBuka] = useState(false)
  const [babAktif, setBabAktif] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120
      for (let i = daftarBab.length - 1; i >= 0; i--) {
        const el = document.getElementById(daftarBab[i].hash)
        if (el && el.offsetTop <= scrollPos) {
          setBabAktif(daftarBab[i].hash)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigasi = (hash, e) => {
    if (e) e.preventDefault()
    setMenuBuka(false)
    if (onKlikSfx) onKlikSfx()
    mulaiTransisi(hash)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-malamsihir/90 backdrop-blur-md border-b border-emas/50 text-krem transition-all duration-300">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNavigasi('hero', e)}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emas rounded p-1"
          aria-label="Kaka Andrea Yahya — Grimoire Alkimia"
        >
          <span className="text-emas text-base group-hover:rotate-45 transition-transform duration-300">
            🜂
          </span>
          <span className="font-judul text-lg sm:text-2xl font-bold text-krem tracking-wider">
            {t('nav.logo')}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Menu Utama">
          {daftarBab.map((item) => {
            const aktif = babAktif === item.hash
            return (
              <a
                key={item.hash}
                href={`#${item.hash}`}
                onClick={(e) => handleNavigasi(item.hash, e)}
                className={`font-aksen text-sm tracking-[0.15em] transition-colors duration-200 py-1 border-b-2 ${
                  aktif
                    ? 'text-emas border-emas font-bold'
                    : 'text-krem/80 hover:text-emas border-transparent'
                }`}
              >
                {t(item.kunci)}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <TombolLilin onKlikSfx={onKlikSfx} />
          <TombolBahasa onKlikSfx={onKlikSfx} />
          <TombolSuara suaraAktif={suaraAktif} onToggle={onToggleSuara} />

          <button
            type="button"
            onClick={() => {
              setMenuBuka(!menuBuka)
              if (onKlikSfx) onKlikSfx()
            }}
            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center bg-ungugelap text-krem border border-tembaga hover:border-emas transition-colors ml-1"
            aria-label={menuBuka ? t('nav.menuTutup') : t('nav.menuBuka')}
          >
            <span className="text-xs font-bold">{menuBuka ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {menuBuka && (
        <div className="md:hidden bg-malamsihir/98 border-b border-emas/40 px-4 py-5 shadow-2xl animate-fade-in">
          <nav className="flex flex-col gap-3" aria-label="Menu Mobile">
            {daftarBab.map((item) => (
              <a
                key={item.hash}
                href={`#${item.hash}`}
                onClick={(e) => handleNavigasi(item.hash, e)}
                className="font-aksen text-base tracking-widest text-krem/90 py-1.5 border-b border-tembaga/30 hover:text-emas transition-colors flex items-center justify-between"
              >
                <span>{t(item.kunci)}</span>
                <span className="text-xs text-emas font-judul">{item.nomor}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
