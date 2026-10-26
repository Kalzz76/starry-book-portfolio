import React, { useState } from 'react'

export default function Bintang({ jumlah = 40, mobile = false }) {
  const [daftarBintang] = useState(() => {
    const hasil = []
    const total = mobile ? 20 : jumlah
    for (let i = 0; i < total; i++) {
      hasil.push({
        id: i,
        top: (Math.random() * 88 + 4).toFixed(2) + '%',
        left: (Math.random() * 94 + 3).toFixed(2) + '%',
        ukuran: (Math.random() * 3 + 2).toFixed(1) + 'px',
        durasi: (Math.random() * 3 + 2).toFixed(2) + 's',
        jeda: (Math.random() * 3).toFixed(2) + 's'
      })
    }
    return hasil
  })

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {daftarBintang.map((b) => (
        <span
          key={b.id}
          className="absolute rounded-full bg-bintang animasi-berkedip"
          style={{
            top: b.top,
            left: b.left,
            width: b.ukuran,
            height: b.ukuran,
            animationDuration: b.durasi,
            animationDelay: b.jeda,
            boxShadow: '0 0 6px #f6d776'
          }}
        />
      ))}
    </div>
  )
}
