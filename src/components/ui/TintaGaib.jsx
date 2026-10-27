import React, { useRef, useState, useEffect, useContext } from 'react'
import { KonteksTinta } from '../../context/KonteksTinta'

export default function TintaGaib({ children, idUnik = 'proyek' }) {
  const kotakRef = useRef(null)
  const [menyala, setMenyala] = useState(false)
  const { terungkapSemua, mainkanTinta } = useContext(KonteksTinta)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (!isTouch) return

    const kotak = kotakRef.current
    if (!kotak) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setMenyala(true)
          mainkanTinta(idUnik)
        }
      },
      { threshold: 0.6 }
    )

    observer.observe(kotak)
    return () => observer.disconnect()
  }, [idUnik])

  const handleGerak = (e) => {
    const kotak = kotakRef.current
    if (!kotak) return
    const area = kotak.getBoundingClientRect()
    kotak.style.setProperty('--x', e.clientX - area.left + 'px')
    kotak.style.setProperty('--y', e.clientY - area.top + 'px')
  }

  const handleMasuk = () => {
    setMenyala(true)
    mainkanTinta(idUnik)
  }

  const handleKeluar = () => {
    setMenyala(false)
  }

  let kelas = 'tinta-gaib focus:outline-none focus:ring-1 focus:ring-emas/50 rounded-sm'
  if (menyala) {
    kelas = kelas + ' menyala'
  }
  if (terungkapSemua) {
    kelas = kelas + ' semua'
  }

  return (
    <div
      ref={kotakRef}
      className={kelas}
      tabIndex={0}
      onPointerMove={handleGerak}
      onPointerEnter={handleMasuk}
      onPointerLeave={handleKeluar}
      onFocus={handleMasuk}
      onBlur={handleKeluar}
      onClick={handleMasuk}
    >
      <p className="tinta-dasar font-isi text-base sm:text-lg leading-relaxed select-none">
        {children}
      </p>
      <p className="tinta-cahaya font-isi text-base sm:text-lg leading-relaxed select-none" aria-hidden="true">
        {children}
      </p>
    </div>
  )
}
