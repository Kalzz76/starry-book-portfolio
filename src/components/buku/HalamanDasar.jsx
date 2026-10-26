import React from 'react'
import IlustrasiTentang from '../ilustrasi/IlustrasiTentang'

export default function HalamanDasar({ anak }) {
  return (
    <div className="absolute left-0 top-0 w-1/2 h-full rounded-l-3xl bg-kertas border-y border-l border-lumut/30 tepi-kertas-kiri lengkung-halaman-kiri overflow-hidden z-0 select-none shadow-[inset_-12px_0_24px_rgba(0,0,0,0.06)]">
      <div className="w-full h-full relative p-4 sm:p-8 flex items-center justify-center">
        {anak || <IlustrasiTentang />}
        <div className="absolute right-0 inset-y-0 w-10 sm:w-16 bg-gradient-to-l from-black/25 via-black/10 to-transparent pointer-events-none" />
      </div>
    </div>
  )
}
