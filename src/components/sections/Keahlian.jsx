import React from 'react'
import { motion } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import Perkamen from '../ui/Perkamen'
import PemisahAlkimia from '../dekorasi/PemisahAlkimia'
import SimbolAlkimia from '../dekorasi/SimbolAlkimia'
import UbinUnsur from '../ui/UbinUnsur'
import DebuBintang from '../efek/DebuBintang'
import { daftarKeahlian } from '../../data/keahlian'

export default function Keahlian({ onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()

  return (
    <section id="keahlian" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
      <PemisahAlkimia simbol="🜁" />

      <Perkamen>
        <div className="relative mb-10 text-center">
          <span className="font-aksen italic text-sm text-tembaga block mb-1">
            {t('keahlian.nomorBab')}
          </span>
          <div className="relative inline-block">
            <DebuBintang onMainkanSfx={onKlikSfx} />
            <h2 className="font-judul text-sepia text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              {t('keahlian.judul')}
            </h2>
          </div>
          <p className="font-isi text-base sm:text-lg text-sepia/80 max-w-xl mx-auto mt-2">
            {t('keahlian.subjudul')}
          </p>
        </div>

        <div className="space-y-8">
          {daftarKeahlian.map((grup) => {
            const namaGrup = grup.nama[bahasaAktif] || grup.nama.id
            return (
              <motion.div
                key={grup.unsur}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-t border-tembaga/30 pt-4"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-1.5 rounded-sm bg-perkamentua/60 border border-tembaga/50 text-${grup.warna}`}>
                    <SimbolAlkimia unsur={grup.unsur} kelas="w-5 h-5" />
                  </div>
                  <h3 className="font-judul text-lg sm:text-xl font-bold text-sepia tracking-wide">
                    {namaGrup}
                  </h3>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
                  {grup.daftar.map((item) => (
                    <UbinUnsur
                      key={item.nama}
                      nama={item.nama}
                      simbol={item.simbol}
                      nomor={item.nomor}
                      warna={grup.warna}
                    />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </Perkamen>
    </section>
  )
}
