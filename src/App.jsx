import React, { useState } from 'react'
import { PenyediaBahasa } from './i18n/KonteksBahasa'
import { useSuara } from './hooks/useSuara'
import { useModeBuku } from './hooks/useModeBuku'
import Navbar from './components/ui/Navbar'
import Buku from './components/buku/Buku'
import ModeHalaman from './components/sections/ModeHalaman'
import Footer from './components/ui/Footer'
import KursorSihir from './components/dekorasi/KursorSihir'
import MaskotBurungHantu from './components/dekorasi/MaskotBurungHantu'
import { daftarBab } from './data/linimasa'

function AplikasiUtama() {
  const modeBuku = useModeBuku()
  const { suaraAktif, nyalakanSuara, matikanSuara, mainkanEfek } = useSuara()
  const [bukuTerbuka, setBukuTerbuka] = useState(false)
  const [kursorAktif, setKursorAktif] = useState(() => {
    try {
      return localStorage.getItem('kursorAktif') !== 'tidak'
    } catch (e) {
      return true
    }
  })
  const [maskotAktif, setMaskotAktif] = useState(() => {
    try {
      return localStorage.getItem('maskotAktif') !== 'tidak'
    } catch (e) {
      return true
    }
  })

  const handleToggleSuara = () => {
    if (suaraAktif) {
      matikanSuara()
    } else {
      nyalakanSuara()
    }
  }

  const handleToggleKursor = () => {
    setKursorAktif((prev) => {
      const baru = !prev
      try {
        localStorage.setItem('kursorAktif', baru ? 'ya' : 'tidak')
      } catch (e) {}
      return baru
    })
  }

  const handleToggleMaskot = () => {
    setMaskotAktif((prev) => {
      const baru = !prev
      try {
        localStorage.setItem('maskotAktif', baru ? 'ya' : 'tidak')
      } catch (e) {}
      return baru
    })
  }

  const bunyikanKlik = () => {
    mainkanEfek('klik')
  }

  const bunyikanHalaman = () => {
    mainkanEfek('halaman')
  }

  const bunyikanLonceng = () => {
    mainkanEfek('lonceng')
  }

  const navigasiKeBab = (hash) => {
    if (modeBuku === 'buku') {
      for (let i = 0; i < daftarBab.length; i++) {
        if (daftarBab[i].hash === hash) {
          const tinggiDokumen = document.documentElement.scrollHeight
          const tinggiLayar = window.innerHeight
          const posisi = daftarBab[i].posisi * (tinggiDokumen - tinggiLayar)
          window.scrollTo({ top: posisi, behavior: 'smooth' })
          window.history.replaceState(null, '', '#' + hash)
          break
        }
      }
    } else {
      const el = document.getElementById(hash === 'hero' ? 'tentang' : hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const tampilkanNavbar = modeBuku === 'buku' ? bukuTerbuka : true

  return (
    <div className="min-h-screen bg-malamgelap text-kertas font-isi relative selection:bg-bintang/30 selection:text-bintang">
      <KursorSihir aktif={kursorAktif} />
      <MaskotBurungHantu aktif={maskotAktif} onKlikSfx={bunyikanLonceng} />

      <Navbar
        terlihat={tampilkanNavbar}
        suaraAktif={suaraAktif}
        onToggleSuara={handleToggleSuara}
        kursorAktif={kursorAktif}
        onToggleKursor={handleToggleKursor}
        maskotAktif={maskotAktif}
        onToggleMaskot={handleToggleMaskot}
        onKlikSfx={bunyikanKlik}
        onNavigasiBab={navigasiKeBab}
      />

      <main>
        {modeBuku === 'buku' ? (
          <Buku
            onHalamanSfx={bunyikanHalaman}
            onLoncengSfx={bunyikanLonceng}
            onKlikSfx={bunyikanKlik}
            onStatusBuku={setBukuTerbuka}
          />
        ) : (
          <ModeHalaman
            onHalamanSfx={bunyikanHalaman}
            onLoncengSfx={bunyikanLonceng}
            onKlikSfx={bunyikanKlik}
          />
        )}
      </main>

      {modeBuku !== 'buku' && <Footer onKlikSfx={bunyikanKlik} />}
    </div>
  )
}

export default function App() {
  return (
    <PenyediaBahasa>
      <AplikasiUtama />
    </PenyediaBahasa>
  )
}
