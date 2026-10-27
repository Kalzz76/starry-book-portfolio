import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import TombolPlakat from './TombolPlakat'
import SegelLilin from '../dekorasi/SegelLilin'
import SudutHias from '../dekorasi/SudutHias'

export default function Modal({ isOpen, onClose, proyek, triggerRef, onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const modalRef = useRef(null)
  const [faseParagraf, setFaseParagraf] = useState(0)

  useEffect(() => {
    if (!isOpen) {
      setFaseParagraf(0)
      return
    }

    const timer1 = setTimeout(() => setFaseParagraf(1), 350)
    const timer2 = setTimeout(() => setFaseParagraf(2), 750)

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (onKlikSfx) onKlikSfx()
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
      if (triggerRef && triggerRef.current) {
        triggerRef.current.focus()
      }
    }
  }, [isOpen])

  if (!isOpen || !proyek) return null

  const deskripsiTeks = proyek.deskripsi[bahasaAktif] || proyek.deskripsi.id

  const handleKlikTutup = () => {
    if (onKlikSfx) onKlikSfx()
    onClose()
  }

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-malamsihir/85 backdrop-blur-sm select-none"
        onClick={handleKlikTutup}
        aria-modal="true"
        role="dialog"
      >
        <motion.div
          ref={modalRef}
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-ungugelap text-krem border-2 border-emas rounded-sm shadow-2xl p-6 sm:p-8 kulit-hitam max-h-[90vh] overflow-y-auto"
        >
          <SudutHias kelas="text-emas/75" />

          <div className="flex items-start justify-between gap-4 pb-3 mb-4 border-b border-emas/30">
            <div className="flex items-center gap-3">
              <SegelLilin ukuran="kecil" />
              <div>
                <span className="font-aksen italic text-xs text-tembaga block">
                  {proyek.kategori} · {proyek.tahun}
                </span>
                <h3 className="font-judul text-xl sm:text-2xl font-bold text-emas tracking-wide">
                  {proyek.judul}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={handleKlikTutup}
              className="w-8 h-8 rounded-sm border border-emas/40 flex items-center justify-center text-emas hover:bg-emas hover:text-sepia transition-colors font-bold text-sm"
              aria-label={t('proyek.tutup')}
            >
              ✕
            </button>
          </div>

          <div className="mb-6">
            <span className="font-aksen italic text-xs text-tembaga block mb-2">
              {t('proyek.bahanLabel')}
            </span>
            <div className="flex flex-wrap gap-2">
              {proyek.teknologi.map((tech) => (
                <span
                  key={tech}
                  className="bg-perkamentua/20 text-cahayatinta border border-tembaga/60 rounded-sm px-2.5 py-1 text-xs font-aksen font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6 bg-black/40 p-4 sm:p-5 rounded-sm border border-emas/20">
            <p
              className={`font-isi text-base sm:text-lg leading-relaxed transition-all duration-700 ${
                faseParagraf >= 1
                  ? 'text-krem drop-shadow-[0_0_6px_rgba(201,162,39,0.3)] opacity-100'
                  : 'text-cahayatinta opacity-40 blur-[0.5px]'
              }`}
            >
              {deskripsiTeks}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-emas/20">
            <div className="flex flex-wrap gap-3">
              {proyek.linkDemo && (
                <TombolPlakat
                  href={proyek.linkDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  varian="utama"
                  onClick={onKlikSfx}
                >
                  <span>{t('proyek.demo')}</span>
                </TombolPlakat>
              )}

              {proyek.linkGithub && (
                <TombolPlakat
                  href={proyek.linkGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  varian="sekunder"
                  onClick={onKlikSfx}
                >
                  <span>{t('proyek.kode')}</span>
                </TombolPlakat>
              )}
            </div>

            <button
              type="button"
              onClick={handleKlikTutup}
              className="font-aksen italic text-sm text-tembaga hover:text-emas transition-colors ml-auto"
            >
              {t('proyek.tutup')} ✕
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
