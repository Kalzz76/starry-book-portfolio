import { useState, useEffect, useRef } from 'react'
import { Howl } from 'howler'

export function useSuara() {
  const [suaraAktif, setSuaraAktif] = useState(false)
  const musikRef = useRef(null)
  const sfxRef = useRef({})
  const inisialisasiRef = useRef(false)

  useEffect(() => {
    try {
      const tersimpan = localStorage.getItem('suaraAktif')
      if (tersimpan === 'ya') {
        const handlerInteraksi = () => {
          nyalakanSuara()
          window.removeEventListener('click', handlerInteraksi)
          window.removeEventListener('keydown', handlerInteraksi)
        }
        window.addEventListener('click', handlerInteraksi, { once: true })
        window.addEventListener('keydown', handlerInteraksi, { once: true })
      }
    } catch (e) {}

    return () => {
      if (musikRef.current) {
        musikRef.current.unload()
      }
      for (const nama in sfxRef.current) {
        if (sfxRef.current[nama]) {
          sfxRef.current[nama].unload()
        }
      }
    }
  }, [])

  const siapkanAudio = () => {
    if (inisialisasiRef.current) return
    inisialisasiRef.current = true

    musikRef.current = new Howl({
      src: ['/audio/kotak-musik-loop.mp3'],
      loop: true,
      volume: 0,
      html5: true
    })

    sfxRef.current = {
      halaman: new Howl({ src: ['/audio/sfx-halaman.mp3'], volume: 0.5 }),
      klik: new Howl({ src: ['/audio/sfx-klik.mp3'], volume: 0.4 }),
      lonceng: new Howl({ src: ['/audio/sfx-lonceng.mp3'], volume: 0.6 })
    }
  }

  const nyalakanSuara = () => {
    siapkanAudio()
    setSuaraAktif(true)
    try {
      localStorage.setItem('suaraAktif', 'ya')
    } catch (e) {}

    if (musikRef.current) {
      if (!musikRef.current.playing()) {
        musikRef.current.play()
      }
      musikRef.current.fade(musikRef.current.volume(), 0.3, 1000)
    }
  }

  const matikanSuara = () => {
    setSuaraAktif(false)
    try {
      localStorage.setItem('suaraAktif', 'tidak')
    } catch (e) {}

    if (musikRef.current && musikRef.current.playing()) {
      musikRef.current.fade(musikRef.current.volume(), 0, 800)
      setTimeout(() => {
        if (musikRef.current) {
          musikRef.current.pause()
        }
      }, 850)
    }
  }

  const mainkanEfek = (nama) => {
    if (!suaraAktif) return
    siapkanAudio()
    const target = sfxRef.current[nama]
    if (target) {
      target.stop()
      target.play()
    }
  }

  return {
    suaraAktif,
    nyalakanSuara,
    matikanSuara,
    mainkanEfek
  }
}
