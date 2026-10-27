import React from 'react'
import SudutHias from '../dekorasi/SudutHias'

export default function Perkamen({ children, gelap = false, kelas = '' }) {
  const kelasDasar = gelap
    ? 'relative bg-ungugelap text-krem rounded-sm shadow-halaman kulit-hitam p-6 sm:p-8 md:p-12 border border-emas/30'
    : 'relative bg-perkamen text-sepia rounded-sm shadow-halaman perkamen-tua p-6 sm:p-8 md:p-12 border border-tembaga/40'

  return (
    <div className={`${kelasDasar} ${kelas}`}>
      <SudutHias kelas={gelap ? 'text-emas/70' : 'text-tembaga/70'} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
