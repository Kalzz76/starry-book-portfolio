import React from 'react'

export default function LingkaranSigil({ kelas = 'w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[620px] md:h-[620px]' }) {
  return (
    <div className={`relative flex items-center justify-center select-none pointer-events-none ${kelas}`} aria-hidden="true">
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emas/10 via-transparent to-ramuanmerah/10 blur-2xl" />

      <svg
        viewBox="0 0 600 600"
        className="w-full h-full text-emas drop-shadow-[0_0_12px_rgba(201,162,39,0.35)]"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="300" cy="300" r="290" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6" />
        <circle cx="300" cy="300" r="280" strokeWidth="2.5" opacity="0.85" />
        <circle cx="300" cy="300" r="248" strokeWidth="1" opacity="0.7" />

        <g className="animasi-putar-sigil-1" style={{ transformOrigin: '300px 300px' }}>
          <circle cx="300" cy="300" r="264" strokeWidth="1" strokeDasharray="2 8" opacity="0.5" />
          <path d="M300 36 L300 52 M300 548 L300 564 M36 300 L52 300 M548 300 L564 300" strokeWidth="2" opacity="0.8" />
          <path d="M113 113 L125 125 M475 475 L487 487 M113 487 L125 475 M475 125 L487 113" strokeWidth="1.5" opacity="0.7" />
          <circle cx="300" cy="44" r="5" fill="#c9a227" opacity="0.9" />
          <circle cx="300" cy="556" r="5" fill="#c9a227" opacity="0.9" />
          <circle cx="44" cy="300" r="5" fill="#c9a227" opacity="0.9" />
          <circle cx="556" cy="300" r="5" fill="#c9a227" opacity="0.9" />

          <text x="300" y="270" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif" opacity="0.75" transform="rotate(30 300 300)">🜂</text>
          <text x="300" y="270" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif" opacity="0.75" transform="rotate(60 300 300)">🜄</text>
          <text x="300" y="270" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif" opacity="0.75" transform="rotate(90 300 300)">🜁</text>
          <text x="300" y="270" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif" opacity="0.75" transform="rotate(120 300 300)">🜃</text>
          <text x="300" y="270" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif" opacity="0.75" transform="rotate(150 300 300)">☉</text>
          <text x="300" y="270" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif" opacity="0.75" transform="rotate(180 300 300)">☽</text>
          <text x="300" y="270" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif" opacity="0.75" transform="rotate(210 300 300)">☿</text>
          <text x="300" y="270" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif" opacity="0.75" transform="rotate(240 300 300)">♀</text>
          <text x="300" y="270" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif" opacity="0.75" transform="rotate(270 300 300)">♂</text>
          <text x="300" y="270" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif" opacity="0.75" transform="rotate(300 300 300)">♃</text>
          <text x="300" y="270" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif" opacity="0.75" transform="rotate(330 300 300)">♄</text>
          <text x="300" y="270" textAnchor="middle" fill="#c9a227" fontSize="14" fontFamily="serif" opacity="0.75" transform="rotate(0 300 300)">🜍</text>
        </g>

        <g className="animasi-putar-sigil-2" style={{ transformOrigin: '300px 300px' }}>
          <circle cx="300" cy="300" r="215" strokeWidth="2" opacity="0.8" />
          <polygon points="300,85 486,407 114,407" strokeWidth="1.75" opacity="0.65" />
          <polygon points="300,515 486,193 114,193" strokeWidth="1.75" opacity="0.65" />
          <circle cx="300" cy="300" r="145" strokeWidth="1" strokeDasharray="4 4" opacity="0.7" />
        </g>

        <g className="animasi-putar-sigil-3" style={{ transformOrigin: '300px 300px' }}>
          <circle cx="300" cy="300" r="105" strokeWidth="2" opacity="0.9" />
          <polygon points="300,195 374,270 300,345 226,270" strokeWidth="1.5" opacity="0.6" />
          <polygon points="300,225 353,300 300,375 247,300" strokeWidth="1.5" opacity="0.6" />
          <circle cx="300" cy="300" r="45" strokeWidth="1.5" fill="#1d1230" opacity="0.95" />
          <path d="M285 300 L315 300 M300 285 L300 315" strokeWidth="2" stroke="#ffe9a8" />
          <circle cx="300" cy="300" r="7" fill="#ffe9a8" />
        </g>
      </svg>
    </div>
  )
}
