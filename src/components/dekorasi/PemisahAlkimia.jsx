import React from 'react'

export default function PemisahAlkimia({ kelas = 'my-8 sm:my-12', simbol = '🜂' }) {
  return (
    <div className={`w-full flex items-center justify-center gap-4 select-none ${kelas}`} aria-hidden="true">
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-emas/60 to-emas/90" />
      <div className="flex items-center justify-center w-8 h-8 rounded-full border border-emas/70 bg-ungugelap/90 text-emas text-sm shadow-[0_0_8px_rgba(201,162,39,0.4)]">
        <span>{simbol}</span>
      </div>
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-emas/60 to-emas/90" />
    </div>
  )
}
