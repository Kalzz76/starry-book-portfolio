import { useState, useEffect } from 'react'

export function useModeBuku() {
  const [mode, setMode] = useState(() => {
    if (typeof window === 'undefined') return 'halaman'
    const cukupLebar = window.innerWidth >= 1024
    const cukupTinggi = window.innerHeight >= 620
    const kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const pointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const hematData = navigator.connection ? navigator.connection.saveData : false
    if (cukupLebar && cukupTinggi && pointerFine && !kurangiGerak && !hematData) {
      return 'buku'
    }
    return 'halaman'
  })

  useEffect(() => {
    const periksaMode = () => {
      const cukupLebar = window.innerWidth >= 1024
      const cukupTinggi = window.innerHeight >= 620
      const kurangiGerak = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const pointerFine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
      const hematData = navigator.connection ? navigator.connection.saveData : false
      if (cukupLebar && cukupTinggi && pointerFine && !kurangiGerak && !hematData) {
        setMode('buku')
      } else {
        setMode('halaman')
      }
    }

    periksaMode()
    window.addEventListener('resize', periksaMode)

    const mediaReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const mediaPointer = window.matchMedia('(hover: hover) and (pointer: fine)')

    if (mediaReduced.addEventListener) {
      mediaReduced.addEventListener('change', periksaMode)
    }
    if (mediaPointer.addEventListener) {
      mediaPointer.addEventListener('change', periksaMode)
    }

    return () => {
      window.removeEventListener('resize', periksaMode)
      if (mediaReduced.removeEventListener) {
        mediaReduced.removeEventListener('change', periksaMode)
      }
      if (mediaPointer.removeEventListener) {
        mediaPointer.removeEventListener('change', periksaMode)
      }
    }
  }, [])

  return mode
}
