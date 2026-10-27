import React from 'react'

export default function UbinUnsur({ nama, simbol, nomor, warna = 'ramuanmerah' }) {
  const warnaGlow = {
    ramuanmerah: 'hover:border-ramuanmerah hover:shadow-[0_0_18px_rgba(155,44,44,0.6)] text-ramuanmerah',
    tembaga: 'hover:border-tembaga hover:shadow-[0_0_18px_rgba(138,90,43,0.6)] text-tembaga',
    ramuanbiru: 'hover:border-ramuanbiru hover:shadow-[0_0_18px_rgba(47,111,186,0.6)] text-ramuanbiru',
    ramuanhijau: 'hover:border-ramuanhijau hover:shadow-[0_0_18px_rgba(63,174,107,0.6)] text-ramuanhijau'
  }

  const kelasWarna = warnaGlow[warna] || warnaGlow.ramuanmerah

  return (
    <div
      tabIndex={0}
      className={`group relative w-full aspect-square bg-perkamentua/60 border-2 border-tembaga/60 rounded-sm p-2 sm:p-3 flex flex-col justify-between items-center transition-all duration-300 transform hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-emas cursor-default select-none shadow-sm ${kelasWarna}`}
    >
      <span className="self-end font-aksen text-[10px] sm:text-xs text-sepia/70 font-semibold leading-none">
        {nomor}
      </span>

      <span className="font-judul text-2xl sm:text-3xl font-bold tracking-tight drop-shadow-sm group-hover:scale-110 transition-transform">
        {simbol}
      </span>

      <span className="font-isi text-xs sm:text-sm font-bold text-sepia text-center leading-tight truncate w-full px-1">
        {nama}
      </span>
    </div>
  )
}
