import React from 'react'

export default function SegelLilin({ anak, ukuran = 'sedang', kelas = '', stamped = false }) {
  let dimensi = 'w-12 h-12'
  if (ukuran === 'besar') {
    dimensi = 'w-16 h-16 sm:w-20 sm:h-20'
  } else if (ukuran === 'kecil') {
    dimensi = 'w-9 h-9'
  }

  return (
    <div
      className={`relative rounded-full flex items-center justify-center select-none shadow-[0_6px_16px_rgba(0,0,0,0.65)] ${dimensi} ${kelas} ${
        stamped ? 'animate-bounce' : ''
      }`}
      style={{
        backgroundColor: '#9b2c2c',
        backgroundImage: 'radial-gradient(circle at 35% 35%, #c53030 0%, #9b2c2c 60%, #631717 100%)',
        border: '2px solid rgba(201, 162, 39, 0.45)'
      }}
      aria-hidden="true"
    >
      <div className="absolute inset-1 rounded-full border border-emas/50 border-dashed opacity-60" />
      <div className="relative z-10 text-krem font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] flex items-center justify-center">
        {anak || <span className="font-judul text-xs sm:text-sm text-emas">🜂</span>}
      </div>
    </div>
  )
}
