import React from 'react'

export default function Awan({ kelas = '' }) {
  return (
    <div className={`absolute inset-x-0 pointer-events-none overflow-hidden ${kelas}`} aria-hidden="true">
      <div className="animasi-awan flex justify-between w-[120%] -ml-[10%] opacity-40">
        <svg className="w-48 h-20 text-pasir/70" viewBox="0 0 100 45" fill="currentColor">
          <path d="M10 35 Q15 15 35 20 Q45 5 65 15 Q80 10 90 25 Q100 35 85 40 Q50 45 10 35 Z" />
        </svg>
        <svg className="w-64 h-24 text-pasir/60" viewBox="0 0 100 45" fill="currentColor">
          <path d="M10 35 Q20 10 40 18 Q55 5 75 15 Q90 15 95 30 Q90 45 50 42 Q15 45 10 35 Z" />
        </svg>
      </div>
    </div>
  )
}
