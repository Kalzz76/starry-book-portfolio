import React, { createContext, useContext, useState, useEffect } from 'react'
import idData from './id.json'
import enData from './en.json'

const KonteksBahasa = createContext()

const kamusData = {
  id: idData,
  en: enData
}

export function PenyediaBahasa({ children }) {
  const [bahasaAktif, setBahasaAktif] = useState(() => {
    try {
      const tersimpan = localStorage.getItem('bahasaPilihan')
      if (tersimpan === 'id' || tersimpan === 'en') {
        return tersimpan
      }
    } catch (e) {}

    if (typeof navigator !== 'undefined' && navigator.language) {
      if (navigator.language.toLowerCase().startsWith('id')) {
        return 'id'
      }
      return 'en'
    }
    return 'id'
  })

  useEffect(() => {
    try {
      localStorage.setItem('bahasaPilihan', bahasaAktif)
    } catch (e) {}

    document.documentElement.lang = bahasaAktif
    if (bahasaAktif === 'id') {
      document.title = 'Kaka Andrea Yahya — Portofolio Buku Dongeng'
    } else {
      document.title = 'Kaka Andrea Yahya — Storybook Portfolio'
    }
  }, [bahasaAktif])

  const gantiBahasa = (bahasaBaru) => {
    if (bahasaBaru === 'id' || bahasaBaru === 'en') {
      setBahasaAktif(bahasaBaru)
    }
  }

  const t = (kunci) => {
    if (!kunci) return ''
    const kamus = kamusData[bahasaAktif] || kamusData.id
    const bagian = kunci.split('.')
    let hasil = kamus

    for (let i = 0; i < bagian.length; i++) {
      const namaKunci = bagian[i]
      if (hasil && typeof hasil === 'object' && namaKunci in hasil) {
        hasil = hasil[namaKunci]
      } else {
        return kunci
      }
    }

    if (typeof hasil === 'string') {
      return hasil
    }
    return kunci
  }

  return (
    <KonteksBahasa.Provider value={{ bahasaAktif, gantiBahasa, t }}>
      {children}
    </KonteksBahasa.Provider>
  )
}

export function useBahasa() {
  return useContext(KonteksBahasa)
}
