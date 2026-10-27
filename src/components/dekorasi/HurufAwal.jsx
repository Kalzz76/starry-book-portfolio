import React from 'react'

export default function HurufAwal({ huruf = 'S' }) {
  return (
    <span
      className="float-left mr-3.5 mb-1 w-14 h-16 sm:w-16 sm:h-20 flex items-center justify-center font-judul text-4xl sm:text-5xl font-bold text-ramuanmerah bg-perkamentua/50 border-2 border-emas/70 shadow-md select-none rounded-sm"
      aria-hidden="true"
    >
      <span className="drop-shadow-[0_2px_4px_rgba(46,31,18,0.3)]">
        {huruf}
      </span>
    </span>
  )
}
