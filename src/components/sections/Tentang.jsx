import React from 'react'
import { motion } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import Perkamen from '../ui/Perkamen'
import PemisahAlkimia from '../dekorasi/PemisahAlkimia'
import HurufAwal from '../dekorasi/HurufAwal'
import SimbolAlkimia from '../dekorasi/SimbolAlkimia'
import DebuBintang from '../efek/DebuBintang'

export default function Tentang({ onKlikSfx }) {
  const { t } = useBahasa()

  const paragraf = t('tentang.paragraf1')
  const hurufPertama = paragraf.charAt(0)
  const sisaParagraf = paragraf.slice(1)

  const kartuUnsur = [
    {
      unsur: 'tanah',
      judul: t('tentang.kartuTanahJudul'),
      sub: t('tentang.kartuTanahSub'),
      warna: 'text-tembaga',
      border: 'border-tembaga/50'
    },
    {
      unsur: 'api',
      judul: t('tentang.kartuApiJudul'),
      sub: t('tentang.kartuApiSub'),
      warna: 'text-ramuanmerah',
      border: 'border-ramuanmerah/50'
    },
    {
      unsur: 'air',
      judul: t('tentang.kartuAirJudul'),
      sub: t('tentang.kartuAirSub'),
      warna: 'text-ramuanbiru',
      border: 'border-ramuanbiru/50'
    },
    {
      unsur: 'udara',
      judul: t('tentang.kartuUdaraJudul'),
      sub: t('tentang.kartuUdaraSub'),
      warna: 'text-ramuanhijau',
      border: 'border-ramuanhijau/50'
    }
  ]

  return (
    <section id="tentang" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      <PemisahAlkimia simbol="🜃" />

      <Perkamen>
        <div className="relative mb-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-tembaga/30 pb-4">
          <div>
            <span className="font-aksen italic text-sm text-tembaga block mb-1">
              {t('tentang.nomorBab')}
            </span>
            <div className="relative inline-block">
              <DebuBintang onMainkanSfx={onKlikSfx} />
              <h2 className="font-judul text-sepia text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                {t('tentang.judul')}
              </h2>
            </div>
          </div>

          <span className="font-aksen italic text-sm text-tembaga/80 bg-perkamentua/40 px-3 py-1 rounded-sm border border-tembaga/30 self-center sm:self-end">
            ~ {t('tentang.catatanPinggir')} ~
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border-4 border-emas/70 bg-gradient-to-br from-perkamentua to-perkamen flex items-center justify-center shadow-lg group">
              <div className="absolute inset-2 rounded-full border border-dashed border-tembaga/60" />
              <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-2 border-emas bg-ungugelap flex items-center justify-center text-emas shadow-inner">
                <span className="font-judul text-5xl sm:text-6xl font-bold tracking-widest text-cahayatinta drop-shadow-[0_2px_8px_rgba(201,162,39,0.5)]">
                  K
                </span>
              </div>
              <div className="absolute -bottom-2 bg-ramuanmerah text-krem border border-emas px-3 py-0.5 rounded-sm font-aksen text-xs uppercase tracking-widest font-semibold shadow">
                Alkemis
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="mb-4">
              <h3 className="font-judul text-2xl sm:text-3xl font-bold text-sepia leading-snug">
                Kaka Andrea Yahya
              </h3>
              <p className="font-aksen italic text-base sm:text-lg text-tembaga font-semibold">
                {t('tentang.gelar')}
              </p>
            </div>

            <div className="font-isi text-lg sm:text-xl text-sepia leading-relaxed">
              <HurufAwal huruf={hurufPertama} />
              <p>{sisaParagraf}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-tembaga/30">
          {kartuUnsur.map((kartu) => (
            <motion.div
              key={kartu.unsur}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`bg-perkamentua/40 border ${kartu.border} rounded-sm p-4 flex flex-col justify-between shadow-sm`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-judul text-xs uppercase tracking-wider text-sepia font-bold">
                  {kartu.judul}
                </span>
                <div className={kartu.warna}>
                  <SimbolAlkimia unsur={kartu.unsur} kelas="w-5 h-5" />
                </div>
              </div>
              <p className="font-isi text-base sm:text-lg text-sepia/90 font-medium leading-snug">
                {kartu.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </Perkamen>
    </section>
  )
}
