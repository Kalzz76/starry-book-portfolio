import React from 'react'

export default function BingkaiEmasBaroque() {
  return (
    <svg
      viewBox="0 0 400 560"
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="emas-mewah" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8db" />
          <stop offset="25%" stopColor="#f6d776" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="75%" stopColor="#aa7c11" />
          <stop offset="100%" stopColor="#664606" />
        </linearGradient>

        <linearGradient id="emas-terang" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fffde6" />
          <stop offset="50%" stopColor="#f6d776" />
          <stop offset="100%" stopColor="#c9a227" />
        </linearGradient>

        <filter id="bayangan-emas" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="#000000" floodOpacity="0.75" />
        </filter>
      </defs>

      <rect
        x="18"
        y="18"
        width="364"
        height="524"
        rx="8"
        fill="none"
        stroke="url(#emas-mewah)"
        strokeWidth="3.5"
        filter="url(#bayangan-emas)"
      />
      <rect
        x="24"
        y="24"
        width="352"
        height="512"
        rx="6"
        fill="none"
        stroke="url(#emas-terang)"
        strokeWidth="1.2"
        opacity="0.8"
      />
      <rect
        x="28"
        y="28"
        width="344"
        height="504"
        rx="4"
        fill="none"
        stroke="url(#emas-mewah)"
        strokeWidth="0.8"
        strokeDasharray="4 3"
        opacity="0.6"
      />

      <g transform="translate(18, 18)" filter="url(#bayangan-emas)">
        <path
          d="M0,0 L65,0 C60,8 54,16 45,22 C38,28 32,32 30,42 C28,52 20,58 14,65 L0,65 Z"
          fill="url(#emas-mewah)"
        />
        <path
          d="M6,6 L50,6 C44,14 38,20 30,26 C24,32 20,40 18,48 L6,48 Z"
          fill="#3b2413"
          opacity="0.4"
        />
        <circle cx="10" cy="10" r="3" fill="#fffde6" />
        <circle cx="48" cy="10" r="2.5" fill="#f6d776" />
        <circle cx="10" cy="48" r="2.5" fill="#f6d776" />
        <path
          d="M12,24 Q24,18 24,30 Q20,38 32,34"
          fill="none"
          stroke="#fff8db"
          strokeWidth="1.5"
        />
      </g>

      <g transform="translate(382, 18) scale(-1, 1)" filter="url(#bayangan-emas)">
        <path
          d="M0,0 L65,0 C60,8 54,16 45,22 C38,28 32,32 30,42 C28,52 20,58 14,65 L0,65 Z"
          fill="url(#emas-mewah)"
        />
        <path
          d="M6,6 L50,6 C44,14 38,20 30,26 C24,32 20,40 18,48 L6,48 Z"
          fill="#3b2413"
          opacity="0.4"
        />
        <circle cx="10" cy="10" r="3" fill="#fffde6" />
        <circle cx="48" cy="10" r="2.5" fill="#f6d776" />
        <circle cx="10" cy="48" r="2.5" fill="#f6d776" />
        <path
          d="M12,24 Q24,18 24,30 Q20,38 32,34"
          fill="none"
          stroke="#fff8db"
          strokeWidth="1.5"
        />
      </g>

      <g transform="translate(18, 542) scale(1, -1)" filter="url(#bayangan-emas)">
        <path
          d="M0,0 L65,0 C60,8 54,16 45,22 C38,28 32,32 30,42 C28,52 20,58 14,65 L0,65 Z"
          fill="url(#emas-mewah)"
        />
        <path
          d="M6,6 L50,6 C44,14 38,20 30,26 C24,32 20,40 18,48 L6,48 Z"
          fill="#3b2413"
          opacity="0.4"
        />
        <circle cx="10" cy="10" r="3" fill="#fffde6" />
        <circle cx="48" cy="10" r="2.5" fill="#f6d776" />
        <circle cx="10" cy="48" r="2.5" fill="#f6d776" />
        <path
          d="M12,24 Q24,18 24,30 Q20,38 32,34"
          fill="none"
          stroke="#fff8db"
          strokeWidth="1.5"
        />
      </g>

      <g transform="translate(382, 542) scale(-1, -1)" filter="url(#bayangan-emas)">
        <path
          d="M0,0 L65,0 C60,8 54,16 45,22 C38,28 32,32 30,42 C28,52 20,58 14,65 L0,65 Z"
          fill="url(#emas-mewah)"
        />
        <path
          d="M6,6 L50,6 C44,14 38,20 30,26 C24,32 20,40 18,48 L6,48 Z"
          fill="#3b2413"
          opacity="0.4"
        />
        <circle cx="10" cy="10" r="3" fill="#fffde6" />
        <circle cx="48" cy="10" r="2.5" fill="#f6d776" />
        <circle cx="10" cy="48" r="2.5" fill="#f6d776" />
        <path
          d="M12,24 Q24,18 24,30 Q20,38 32,34"
          fill="none"
          stroke="#fff8db"
          strokeWidth="1.5"
        />
      </g>

      <g transform="translate(200, 20)" filter="url(#bayangan-emas)">
        <path
          d="M-40,0 Q-20,10 0,2 Q20,10 40,0 Q20,-3 0,-1 Q-20,-3 -40,0 Z"
          fill="url(#emas-mewah)"
        />
        <circle cx="0" cy="1" r="3.5" fill="#fffde6" />
        <circle cx="-16" cy="2" r="2" fill="#f6d776" />
        <circle cx="16" cy="2" r="2" fill="#f6d776" />
      </g>

      <g transform="translate(200, 540) scale(1, -1)" filter="url(#bayangan-emas)">
        <path
          d="M-40,0 Q-20,10 0,2 Q20,10 40,0 Q20,-3 0,-1 Q-20,-3 -40,0 Z"
          fill="url(#emas-mewah)"
        />
        <circle cx="0" cy="1" r="3.5" fill="#fffde6" />
        <circle cx="-16" cy="2" r="2" fill="#f6d776" />
        <circle cx="16" cy="2" r="2" fill="#f6d776" />
      </g>
    </svg>
  )
}
