import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import Perkamen from '../ui/Perkamen'
import PemisahAlkimia from '../dekorasi/PemisahAlkimia'
import KartuEksperimen from '../ui/KartuEksperimen'
import Modal from '../ui/Modal'
import DebuBintang from '../efek/DebuBintang'
import { daftarProyek } from '../../data/proyek'

export default function Proyek({ onKlikSfx }) {
  const { t } = useBahasa()
  const [filterAktif, setFilterAktif] = useState('Semua')
  const [proyekModal, setProyekModal] = useState(null)
  const triggerRef = useRef(null)

  const opsiFilter = [
    { id: 'Semua', label: t('proyek.semua') },
    { id: 'Web', label: t('proyek.web') },
    { id: 'Mobile', label: t('proyek.mobile') },
    { id: 'Lainnya', label: t('proyek.lainnya') }
  ]

  const proyekTersaring = daftarProyek.filter((p) => {
    if (filterAktif === 'Semua') return true
    return p.kategori === filterAktif
  })

  const handleBukaModal = (proyek) => {
    setProyekModal(proyek)
  }

  const handleTutupModal = () => {
    setProyekModal(null)
  }

  return (
    <section id="proyek" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      <PemisahAlkimia simbol="🜄" />

      <Perkamen gelap={true}>
        <div className="relative mb-8 text-center">
          <span className="font-aksen italic text-sm text-tembaga block mb-1">
            {t('proyek.nomorBab')}
          </span>
          <div className="relative inline-block">
            <DebuBintang onMainkanSfx={onKlikSfx} />
            <h2 className="font-judul text-emas text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {t('proyek.judul')}
            </h2>
          </div>

          <div className="mt-3">
            <span className="hidden sm:inline-block font-aksen italic text-xs sm:text-sm text-krem/70 bg-black/40 px-3.5 py-1 rounded-full border border-emas/20">
              ✦ {t('proyek.petunjukTinta')} ✦
            </span>
            <span className="sm:hidden inline-block font-aksen italic text-xs text-krem/70 bg-black/40 px-3 py-1 rounded-full border border-emas/20">
              ✦ {t('proyek.petunjukTintaSentuh')} ✦
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {opsiFilter.map((opsi) => {
            const aktif = filterAktif === opsi.id
            return (
              <button
                key={opsi.id}
                type="button"
                onClick={() => {
                  if (onKlikSfx) onKlikSfx()
                  setFilterAktif(opsi.id)
                }}
                className={`font-judul text-xs uppercase tracking-widest px-4 py-2 border-2 rounded-sm transition-all duration-200 cursor-pointer ${
                  aktif
                    ? 'bg-ramuanmerah text-krem border-emas shadow-[0_0_12px_rgba(201,162,39,0.4)]'
                    : 'bg-ungugelap/60 text-krem/70 border-tembaga/50 hover:border-emas hover:text-krem'
                }`}
              >
                {opsi.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proyekTersaring.map((proyek, index) => (
            <motion.div
              key={proyek.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <KartuEksperimen
                proyek={proyek}
                nomor={index + 1}
                onBukaModal={handleBukaModal}
                onKlikSfx={onKlikSfx}
              />
            </motion.div>
          ))}
        </div>
      </Perkamen>

      <Modal
        isOpen={Boolean(proyekModal)}
        onClose={handleTutupModal}
        proyek={proyekModal}
        triggerRef={triggerRef}
        onKlikSfx={onKlikSfx}
      />
    </section>
  )
}
