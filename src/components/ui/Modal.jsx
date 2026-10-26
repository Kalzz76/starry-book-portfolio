import React, { useEffect, useRef } from 'react'
import Ikon from './Ikon'

export default function Modal({ buka, padaTutup, judul, children, elemenPemicuRef }) {
  const modalRef = useRef(null)

  useEffect(() => {
    if (!buka) return

    const posisiAwalScroll = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        padaTutup()
      }
    }

    window.addEventListener('keydown', handleKeydown)

    if (modalRef.current) {
      modalRef.current.focus()
    }

    return () => {
      document.body.style.overflow = posisiAwalScroll
      window.removeEventListener('keydown', handleKeydown)
      if (elemenPemicuRef && elemenPemicuRef.current) {
        elemenPemicuRef.current.focus()
      }
    }
  }, [buka, padaTutup, elemenPemicuRef])

  if (!buka) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-malamgelap/70 backdrop-blur-sm transition-opacity duration-300"
      onClick={padaTutup}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-judul"
    >
      <div
        ref={modalRef}
        tabIndex="-1"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-kertas text-tinta rounded-3xl shadow-lembut p-6 md:p-8 outline-none border border-lumut/30"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-pasir">
          <h3 id="modal-judul" className="font-judul text-hutan text-2xl md:text-3xl">
            {judul}
          </h3>
          <button
            type="button"
            onClick={padaTutup}
            className="w-10 h-10 rounded-full flex items-center justify-center text-hutan bg-pasir/80 hover:bg-hutan hover:text-kertas transition-colors duration-200"
            aria-label="Tutup jendela modal"
          >
            <Ikon nama="silang" kelas="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 text-tinta">
          {children}
        </div>
      </div>
    </div>
  )
}
