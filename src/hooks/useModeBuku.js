import { useState, useEffect } from 'react'

export function useModeBuku() {
  const [mode, setMode] = useState(() => {
    if (typeof window === 'undefined') return 'halaman'
    const cukupLebar = window.innerWidth >= 1024
    const cukupTinggi = window.innerHeight >= 620
    const kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (cukupLebar && cukupTinggi && !kurangiGerak) {
      return 'buku'
    }
    return 'halaman'
  })

  useEffect(() => {
    const periksaMode = () => {
      const cukupLebar = window.innerWidth >= 1024
      const cukupTinggi = window.innerHeight >= 620
      const kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (cukupLebar && cukupTinggi && !kurangiGerak) {
        setMode('buku')
      } else {
        setMode('halaman')
      }
    }

    periksaMode()
    window.addEventListener('resize', periksaMode)

    const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaReduced.addEventListener) {
      mediaReduced.addEventListener('change', periksaMode)
    }

    return () => {
      window.removeEventListener('resize', periksaMode)
      if (mediaReduced.removeEventListener) {
        mediaReduced.removeEventListener('change', periksaMode)
      }
    }
  }, [])

  return mode
}
