import React from 'react'

export default function PembatasGelombang({ kelas = '', balik = false }) {
  let gaya = {}
  if (balik) {
    gaya = { transform: 'rotate(180deg)' }
  }
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={'block w-full h-12 md:h-20 ' + kelas}
      style={gaya}
      aria-hidden="true"
    >
      <path
        d="M0 40 C120 80 240 0 360 30 C480 60 600 90 720 50 C840 10 960 0 1080 35 C1200 70 1320 60 1440 30 L1440 90 L0 90 Z"
        fill="currentColor"
      />
    </svg>
  )
}
