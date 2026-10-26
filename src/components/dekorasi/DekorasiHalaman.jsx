import React from 'react'

export default function DekorasiHalaman({ sisi = 'kanan', tema = 'emas' }) {
  const adalahKiri = sisi === 'kiri'

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "radial-gradient(#1f4d36 0.6px, transparent 0.6px), radial-gradient(#d9732f 0.4px, transparent 0.4px)",
          backgroundSize: "28px 28px, 14px 14px",
          backgroundPosition: "0 0, 7px 7px"
        }}
      />

      <div
        className={`absolute top-0 ${adalahKiri ? 'left-0' : 'right-0'} w-64 h-64 opacity-20 pointer-events-none`}
        style={{
          background: 'radial-gradient(circle at top, #f6d776 0%, #2a4d9b 40%, transparent 70%)'
        }}
      />

      <div
        className={`absolute bottom-0 ${adalahKiri ? 'right-0' : 'left-0'} w-72 h-72 opacity-15 pointer-events-none`}
        style={{
          background: 'radial-gradient(circle at bottom, #85c1e9 0%, #1f4d36 50%, transparent 75%)'
        }}
      />

      <svg
        viewBox="0 0 100 100"
        className={`absolute top-2 ${adalahKiri ? 'left-2' : 'right-2'} w-14 h-14 text-emas/60 ${adalahKiri ? '' : 'scale-x-[-1]'}`}
        fill="currentColor"
      >
        <path d="M5,5 L45,5 C45,5 30,12 25,25 C20,38 20,45 20,45 L15,45 C15,45 14,25 5,15 Z" />
        <circle cx="12" cy="12" r="3" fill="#f6d776" />
        <circle cx="28" cy="8" r="1.5" fill="#c9a227" />
        <circle cx="8" cy="28" r="1.5" fill="#c9a227" />
        <path d="M5,5 L5,45 L8,45 L8,18 C15,18 25,12 28,5 Z" opacity="0.7" />
      </svg>

      <svg
        viewBox="0 0 100 100"
        className={`absolute bottom-2 ${adalahKiri ? 'left-2' : 'right-2'} w-14 h-14 text-emas/60 ${adalahKiri ? 'scale-y-[-1]' : 'scale-[-1]'}`}
        fill="currentColor"
      >
        <path d="M5,5 L45,5 C45,5 30,12 25,25 C20,38 20,45 20,45 L15,45 C15,45 14,25 5,15 Z" />
        <circle cx="12" cy="12" r="3" fill="#f6d776" />
        <circle cx="28" cy="8" r="1.5" fill="#c9a227" />
        <circle cx="8" cy="28" r="1.5" fill="#c9a227" />
      </svg>

      <svg
        viewBox="0 0 200 200"
        className={`absolute ${adalahKiri ? 'bottom-16 left-6' : 'top-16 right-6'} w-36 h-36 opacity-10 text-hutan`}
        fill="none"
        stroke="currentColor"
      >
        <circle cx="100" cy="100" r="80" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="100" cy="100" r="60" strokeWidth="1" />
        <circle cx="100" cy="100" r="35" strokeWidth="0.75" />
        <line x1="100" y1="10" x2="100" y2="190" strokeWidth="1" />
        <line x1="10" y1="100" x2="190" y2="100" strokeWidth="1" />
        <line x1="36" y1="36" x2="164" y2="164" strokeWidth="0.75" strokeDasharray="2 2" />
        <line x1="36" y1="164" x2="164" y2="36" strokeWidth="0.75" strokeDasharray="2 2" />
        <polygon points="100,20 105,95 180,100 105,105 100,180 95,105 20,100 95,95" fill="currentColor" opacity="0.3" />
      </svg>

      <svg
        viewBox="0 0 300 80"
        className={`absolute ${adalahKiri ? 'top-12 right-6' : 'bottom-12 left-6'} w-52 h-16 opacity-25`}
        fill="none"
      >
        <path
          d="M10,40 Q80,10 150,45 T290,30"
          stroke="#f6d776"
          strokeWidth="3"
          strokeDasharray="14 10"
          className="animasi-arus-kuas"
        />
        <path
          d="M30,55 Q100,25 170,55 T280,45"
          stroke="#6fa8dc"
          strokeWidth="4"
          strokeDasharray="18 12"
          className="animasi-arus-kuas"
        />
        <circle cx="65" cy="28" r="4" fill="#f6d776" className="animasi-berkedip" />
        <circle cx="210" cy="35" r="3.5" fill="#f6d776" className="animasi-berkedip" />
        <circle cx="140" cy="50" r="2.5" fill="#d9732f" />
      </svg>

      <div
        className={`absolute ${adalahKiri ? 'top-6 right-8' : 'bottom-6 left-8'} flex items-center gap-1.5 opacity-40`}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-bintang" />
        <div className="w-8 h-px bg-emas/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-emas/40 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-bintang" />
        </div>
        <div className="w-8 h-px bg-emas/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-bintang" />
      </div>
    </div>
  )
}
