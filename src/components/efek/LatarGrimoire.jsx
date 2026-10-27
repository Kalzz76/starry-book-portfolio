import React, { useState, useEffect } from 'react'

export default function LatarGrimoire() {
  const [bintangList] = useState(() => {
    const total = typeof window !== 'undefined' && window.innerWidth >= 768 ? 70 : 35
    const arr = []
    for (let i = 0; i < total; i++) {
      arr.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        ukuran: Math.random() * 2 + 1,
        durasi: (Math.random() * 3 + 2).toFixed(1),
        jeda: (Math.random() * 4).toFixed(1),
        opacity: (Math.random() * 0.6 + 0.3).toFixed(2)
      })
    }
    return arr
  })

  const [debuList] = useState(() => {
    const total = typeof window !== 'undefined' && window.innerWidth >= 768 ? 24 : 12
    const arr = []
    for (let i = 0; i < total; i++) {
      arr.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        ukuran: Math.random() * 2.5 + 1.2,
        durasi: (Math.random() * 10 + 10).toFixed(1),
        jeda: (Math.random() * 5).toFixed(1)
      })
    }
    return arr
  })

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#101330] via-[#14173a] to-[#0a0c1f]" />

      <svg
        viewBox="0 0 500 500"
        className="absolute top-4 right-4 w-72 sm:w-96 h-72 sm:h-96 opacity-30 text-emas"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
      >
        <circle cx="280" cy="80" r="3" fill="#c9a227" />
        <circle cx="360" cy="140" r="2.5" fill="#f4ead2" />
        <circle cx="410" cy="230" r="3" fill="#c9a227" />
        <circle cx="330" cy="270" r="2.5" fill="#c9a227" />
        <circle cx="240" cy="210" r="3" fill="#f4ead2" />
        <circle cx="200" cy="130" r="2.5" fill="#c9a227" />
        <polyline points="280,80 360,140 410,230 330,270 240,210 200,130 280,80" strokeDasharray="3 3" />
        <line x1="280" y1="80" x2="330" y2="270" strokeDasharray="2 4" />
        <line x1="200" y1="130" x2="410" y2="230" strokeDasharray="2 4" />
      </svg>

      {bintangList.map((b, i) => (
        <div
          key={`b-${i}`}
          className="absolute rounded-full bg-krem"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: `${b.ukuran}px`,
            height: `${b.ukuran}px`,
            opacity: b.opacity,
            animation: `berkedip ${b.durasi}s ease-in-out infinite`,
            animationDelay: `${b.jeda}s`,
            boxShadow: '0 0 4px rgba(244, 234, 210, 0.8)'
          }}
        />
      ))}

      {debuList.map((d, i) => (
        <div
          key={`d-${i}`}
          className="absolute rounded-full bg-emas"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.ukuran}px`,
            height: `${d.ukuran}px`,
            animation: `melayang ${d.durasi}s ease-in-out infinite`,
            animationDelay: `${d.jeda}s`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 6px rgba(201, 162, 39, 0.6)'
          }}
        />
      ))}

      <div
        className="absolute -bottom-24 -left-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(217, 115, 47, 0.28) 0%, rgba(201, 162, 39, 0.12) 40%, transparent 70%)',
          animation: 'lilin 4.2s ease-in-out infinite'
        }}
      />

      <div
        className="absolute -bottom-24 -right-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(217, 115, 47, 0.24) 0%, rgba(201, 162, 39, 0.10) 40%, transparent 70%)',
          animation: 'lilin 3.7s ease-in-out infinite',
          animationDelay: '1.2s'
        }}
      />
    </div>
  )
}
