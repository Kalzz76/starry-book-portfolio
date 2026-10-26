import React, { useState } from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import TombolBahasa from './TombolBahasa'
import TombolSuara from './TombolSuara'
import Ikon from './Ikon'

export default function Navbar({ suaraAktif, onToggleSuara, onKlikSfx, onNavigasiBab, terlihat = true }) {
  const { t } = useBahasa()
  const [menuBuka, setMenuBuka] = useState(false)

  const daftarMenu = [
    { kunci: 'beranda', hash: 'hero' },
    { kunci: 'tentang', hash: 'tentang' },
    { kunci: 'keahlian', hash: 'keahlian' },
    { kunci: 'proyek', hash: 'proyek' },
    { kunci: 'pencapaian', hash: 'pencapaian' },
    { kunci: 'kontak', hash: 'kontak' }
  ]

  const handleKlikMenu = (hash, e) => {
    setMenuBuka(false)
    if (onKlikSfx) onKlikSfx()

    if (onNavigasiBab) {
      e.preventDefault()
      onNavigasiBab(hash)
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-malamgelap/90 backdrop-blur-md border-b border-emas/20 text-kertas transition-all duration-500 ${
        terlihat
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-12 pointer-events-none'
      }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleKlikMenu('hero', e)}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-bintang rounded-lg p-1"
          aria-label="Kaka Andrea Yahya — Beranda"
        >
          <span className="text-bintang group-hover:rotate-12 transition-transform duration-300">
            <Ikon nama="bintang" kelas="w-4 h-4" />
          </span>
          <span className="font-judul text-xl sm:text-2xl font-bold text-kertas tracking-tight">
            {t('nav.logo')}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Menu Utama">
          {daftarMenu.map((item) => (
            <a
              key={item.kunci}
              href={`#${item.hash}`}
              onClick={(e) => handleKlikMenu(item.hash, e)}
              className="font-isi text-xs uppercase tracking-widest text-kertas/80 hover:text-bintang transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-bintang"
            >
              {t(`nav.${item.kunci}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <TombolBahasa onKlikSfx={onKlikSfx} />
          <TombolSuara suaraAktif={suaraAktif} onToggle={onToggleSuara} />

          <button
            type="button"
            onClick={() => {
              setMenuBuka(!menuBuka)
              if (onKlikSfx) onKlikSfx()
            }}
            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center bg-malam/90 text-kertas border border-emas/40 hover:bg-malam transition-colors"
            aria-label={menuBuka ? t('nav.menuTutup') : t('nav.menuBuka')}
          >
            <Ikon nama={menuBuka ? 'silang' : 'menu'} kelas="w-4 h-4" />
          </button>
        </div>
      </div>

      {menuBuka && (
        <div className="md:hidden bg-malamgelap/95 backdrop-blur-md border-b border-emas/20 px-4 py-6 shadow-lembut">
          <nav className="flex flex-col gap-4" aria-label="Menu Mobile">
            {daftarMenu.map((item) => (
              <a
                key={item.kunci}
                href={`#${item.hash}`}
                onClick={(e) => handleKlikMenu(item.hash, e)}
                className="font-isi text-sm uppercase tracking-widest text-kertas/90 py-2 border-b border-malam hover:text-bintang transition-colors"
              >
                {t(`nav.${item.kunci}`)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
