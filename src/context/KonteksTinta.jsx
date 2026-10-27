import React, { createContext, useState, useEffect, useRef } from 'react'

export const KonteksTinta = createContext({
  terungkapSemua: false,
  nyalakanSemuaTinta: () => {},
  toggleTintaSemua: () => {},
  mainkanTinta: () => {}
})

export function PenyediaTinta({ children, onMainkanSfx }) {
  const [terungkapSemua, setTerungkapSemua] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (reduced) return true
        return localStorage.getItem('tintaTerungkap') === 'ya'
      }
    } catch (e) {}
    return false
  })

  const blokTerdengarRef = useRef(new Set())

  useEffect(() => {
    try {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced) setTerungkapSemua(true)
    } catch (e) {}
  }, [])

  const nyalakanSemuaTinta = () => {
    setTerungkapSemua(true)
    try {
      localStorage.setItem('tintaTerungkap', 'ya')
    } catch (e) {}
    if (onMainkanSfx) onMainkanSfx('tinta')
  }

  const toggleTintaSemua = () => {
    setTerungkapSemua((prev) => {
      const baru = !prev
      try {
        localStorage.setItem('tintaTerungkap', baru ? 'ya' : 'tidak')
      } catch (e) {}
      return baru
    })
    if (onMainkanSfx) onMainkanSfx('tinta')
  }

  const mainkanTinta = (id = 'default') => {
    if (blokTerdengarRef.current.has(id)) return
    blokTerdengarRef.current.add(id)
    if (onMainkanSfx) onMainkanSfx('tinta')
  }

  return (
    <KonteksTinta.Provider
      value={{
        terungkapSemua,
        nyalakanSemuaTinta,
        toggleTintaSemua,
        mainkanTinta
      }}
    >
      {children}
    </KonteksTinta.Provider>
  )
}
