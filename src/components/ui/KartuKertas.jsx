import React from 'react'

export default function KartuKertas({ children, kelas = '', malam = false, onClick }) {
  let latar = 'bg-kartu'
  if (malam) {
    latar = 'bg-kartu/95 text-tinta'
  }

  return (
    <div
      onClick={onClick}
      className={`${latar} rounded-3xl shadow-lembut p-6 transition-all duration-300 ${kelas}`}
    >
      {children}
    </div>
  )
}
