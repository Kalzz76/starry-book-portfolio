import React, { useEffect, useContext } from 'react'
import { PenyediaBahasa, useBahasa } from './i18n/KonteksBahasa'
import { PenyediaTinta, KonteksTinta } from './context/KonteksTinta'
import { PenyediaTransisi, KonteksTransisi } from './context/KonteksTransisi'
import { useSuara } from './hooks/useSuara'
import LatarGrimoire from './components/efek/LatarGrimoire'
import TransisiRamuan from './components/efek/TransisiRamuan'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import Tentang from './components/sections/Tentang'
import Keahlian from './components/sections/Keahlian'
import Proyek from './components/sections/Proyek'
import Pencapaian from './components/sections/Pencapaian'
import Kontak from './components/sections/Kontak'
import Footer from './components/ui/Footer'
import { daftarBab } from './data/bab'

function PengendaliAksesibilitas() {
  const { gantiBahasa, bahasaAktif } = useBahasa()
  const { nyalakanSemuaTinta, toggleTintaSemua } = useContext(KonteksTinta)
  const { mulaiTransisi } = useContext(KonteksTransisi)

  useEffect(() => {
    const handleKeyDown = (e) => {
      const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : ''
      if (tag === 'input' || tag === 'textarea') return

      const kunci = e.key.toLowerCase()

      if (kunci === 'd') {
        e.preventDefault()
        nyalakanSemuaTinta()
        const elHero = document.getElementById('hero')
        if (elHero) {
          const tombolPertama = elHero.querySelector('button, a')
          if (tombolPertama) tombolPertama.focus()
        }
      } else if (kunci === 'w') {
        e.preventDefault()
        gantiBahasa(bahasaAktif === 'id' ? 'en' : 'id')
      } else if (kunci === 't') {
        e.preventDefault()
        toggleTintaSemua()
      } else if (kunci === 'f') {
        e.preventDefault()
        mulaiTransisi('proyek')
      } else if (kunci === 'h') {
        e.preventDefault()
        document.documentElement.classList.toggle('prefers-reduced-motion')
        nyalakanSemuaTinta()
      } else if (['1', '2', '3', '4', '5', '6'].includes(kunci)) {
        e.preventDefault()
        const indeks = parseInt(kunci, 10) - 1
        if (daftarBab[indeks]) {
          mulaiTransisi(daftarBab[indeks].hash)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [bahasaAktif, gantiBahasa, nyalakanSemuaTinta, toggleTintaSemua, mulaiTransisi])

  return null
}

function IsiAplikasi({ suaraAktif, onToggleSuara, onKlikSfx, onSegelSfx }) {
  return (
    <div className="min-h-screen bg-malamsihir text-krem font-isi relative selection:bg-emas/30 selection:text-cahayatinta">
      <LatarGrimoire />
      <TransisiRamuan />
      <PengendaliAksesibilitas />

      <Navbar
        suaraAktif={suaraAktif}
        onToggleSuara={onToggleSuara}
        onKlikSfx={onKlikSfx}
      />

      <main id="konten-utama">
        <Hero onKlikSfx={onKlikSfx} />
        <Tentang onKlikSfx={onKlikSfx} />
        <Keahlian onKlikSfx={onKlikSfx} />
        <Proyek onKlikSfx={onKlikSfx} />
        <Pencapaian onKlikSfx={onKlikSfx} />
        <Kontak onKlikSfx={onKlikSfx} onSegelSfx={onSegelSfx} />
      </main>

      <Footer onKlikSfx={onKlikSfx} />
    </div>
  )
}

export default function App() {
  const { suaraAktif, nyalakanSuara, matikanSuara, mainkanEfek } = useSuara()

  const handleToggleSuara = () => {
    if (suaraAktif) {
      matikanSuara()
    } else {
      nyalakanSuara()
    }
  }

  const bunyikanKlik = () => {
    mainkanEfek('klik')
  }

  const bunyikanSegel = () => {
    mainkanEfek('segel')
  }

  return (
    <PenyediaBahasa>
      <PenyediaTinta onMainkanSfx={mainkanEfek}>
        <PenyediaTransisi onMainkanSfx={mainkanEfek}>
          <IsiAplikasi
            suaraAktif={suaraAktif}
            onToggleSuara={handleToggleSuara}
            onKlikSfx={bunyikanKlik}
            onSegelSfx={bunyikanSegel}
          />
        </PenyediaTransisi>
      </PenyediaTinta>
    </PenyediaBahasa>
  )
}
