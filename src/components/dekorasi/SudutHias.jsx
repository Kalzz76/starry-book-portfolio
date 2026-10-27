import React from 'react'

export default function SudutHias({ ukuran = 24, kelas = 'text-emas' }) {
  return (
    <>
      <div className={`absolute top-2 left-2 pointer-events-none ${kelas}`} style={{ width: ukuran, height: ukuran }} aria-hidden="true">
        <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-current" strokeWidth="2">
          <path d="M4 36 L4 12 Q4 4 12 4 L36 4" />
          <path d="M10 28 L10 14 Q10 10 14 10 L28 10" strokeWidth="1" opacity="0.7" />
          <circle cx="10" cy="10" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className={`absolute top-2 right-2 pointer-events-none ${kelas}`} style={{ width: ukuran, height: ukuran }} aria-hidden="true">
        <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-current" strokeWidth="2">
          <path d="M36 36 L36 12 Q36 4 28 4 L4 4" />
          <path d="M30 28 L30 14 Q30 10 26 10 L12 10" strokeWidth="1" opacity="0.7" />
          <circle cx="30" cy="10" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className={`absolute bottom-2 left-2 pointer-events-none ${kelas}`} style={{ width: ukuran, height: ukuran }} aria-hidden="true">
        <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-current" strokeWidth="2">
          <path d="M4 4 L4 28 Q4 36 12 36 L36 36" />
          <path d="M10 12 L10 26 Q10 30 14 30 L28 30" strokeWidth="1" opacity="0.7" />
          <circle cx="10" cy="30" r="2" fill="currentColor" />
        </svg>
      </div>

      <div className={`absolute bottom-2 right-2 pointer-events-none ${kelas}`} style={{ width: ukuran, height: ukuran }} aria-hidden="true">
        <svg viewBox="0 0 40 40" className="w-full h-full fill-none stroke-current" strokeWidth="2">
          <path d="M36 4 L36 28 Q36 36 28 36 L4 36" />
          <path d="M30 12 L30 26 Q30 30 26 30 L12 30" strokeWidth="1" opacity="0.7" />
          <circle cx="30" cy="30" r="2" fill="currentColor" />
        </svg>
      </div>
    </>
  )
}
