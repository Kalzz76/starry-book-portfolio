import React, { useState } from 'react'

export default function KunangKunang({ jumlah = 8 }) {
  const [daftarKunang] = useState(() => {
    const hasil = []
    for (let i = 0; i < jumlah; i++) {
      hasil.push({
        id: i,
        top: (Math.random() * 75 + 15).toFixed(2) + '%',
        left: (Math.random() * 85 + 8).toFixed(2) + '%',
        ukuran: (Math.random() * 3 + 3).toFixed(1) + 'px',
        durasi: (Math.random() * 4 + 5).toFixed(2) + 's',
        jeda: (Math.random() * 4).toFixed(2) + 's'
      })
    }
    return hasil
  })

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {daftarKunang.map((k) => (
        <span
          key={k.id}
          className="absolute rounded-full bg-bintang animasi-melayang"
          style={{
            top: k.top,
            left: k.left,
            width: k.ukuran,
            height: k.ukuran,
            animationDuration: k.durasi,
            animationDelay: k.jeda,
            boxShadow: '0 0 10px 2px rgba(246, 215, 118, 0.7)'
          }}
        />
      ))}
    </div>
  )
}
