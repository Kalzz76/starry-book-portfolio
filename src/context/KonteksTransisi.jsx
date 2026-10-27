import React, { createContext, useState, useRef } from 'react'
import { warnaRamuan } from '../data/ramuan'

export const KonteksTransisi = createContext({
  statusTransisi: 'diam',
  warnaAktif: '#4b2a6b',
  mulaiTransisi: () => {},
  selesaiMenutup: () => {},
  selesaiMembuka: () => {}
})

export function PenyediaTransisi({ children, onMainkanSfx }) {
  const [statusTransisi, setStatusTransisi] = useState('diam')
  const [warnaAktif, setWarnaAktif] = useState('#4b2a6b')
  const targetHashRef = useRef('hero')

  const mulaiTransisi = (hash) => {
    if (typeof window === 'undefined') return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      const el = document.getElementById(hash === 'hero' ? 'hero' : hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', '#' + hash)
      return
    }

    if (statusTransisi !== 'diam') return

    targetHashRef.current = hash
    setWarnaAktif(warnaRamuan[hash] || '#4b2a6b')
    setStatusTransisi('menutup')
    if (onMainkanSfx) onMainkanSfx('ramuan')
  }

  const selesaiMenutup = () => {
    const hash = targetHashRef.current
    const el = document.getElementById(hash === 'hero' ? 'hero' : hash)
    if (el) {
      el.scrollIntoView({ behavior: 'auto' })
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    window.history.replaceState(null, '', '#' + hash)
    setStatusTransisi('membuka')
  }

  const selesaiMembuka = () => {
    setStatusTransisi('diam')
  }

  return (
    <KonteksTransisi.Provider
      value={{
        statusTransisi,
        warnaAktif,
        mulaiTransisi,
        selesaiMenutup,
        selesaiMembuka
      }}
    >
      {children}
    </KonteksTransisi.Provider>
  )
}
