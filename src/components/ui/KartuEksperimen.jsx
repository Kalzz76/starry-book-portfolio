import React from 'react'
import BotolRamuan from '../dekorasi/BotolRamuan'
import TintaGaib from './TintaGaib'
import { useBahasa } from '../../i18n/KonteksBahasa'

export default function KartuEksperimen({ proyek, nomor, onBukaModal, onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()

  const ringkasanTeks = proyek.ringkasan[bahasaAktif] || proyek.ringkasan.id

  const handleKlikBuka = () => {
    if (onKlikSfx) onKlikSfx()
    if (onBukaModal) onBukaModal(proyek)
  }

  return (
    <div className="relative bg-ungugelap/90 border border-emas/40 rounded-sm p-5 sm:p-6 shadow-halaman flex flex-col justify-between overflow-hidden group hover:border-emas transition-colors">
      {proyek.status === 'Selesai' && (
        <div
          className="absolute -right-8 top-5 rotate-45 bg-ramuanmerah/90 border border-emas text-krem font-judul text-[10px] sm:text-xs font-bold uppercase tracking-widest px-8 py-0.5 shadow-md select-none pointer-events-none"
          aria-hidden="true"
        >
          {t('proyek.stempelBerhasil')}
        </div>
      )}

      <div>
        <div className="flex items-start gap-4 mb-4">
          <BotolRamuan kategori={proyek.kategori} kelas="w-10 h-14 flex-shrink-0" />
          <div className="flex-1 pr-6">
            <span className="font-aksen italic text-xs text-tembaga block mb-1">
              {t('proyek.eksperimenNomor')} {nomor} · {proyek.tahun}
            </span>
            <h3 className="font-judul text-lg sm:text-xl font-bold text-emas tracking-wide leading-snug">
              {proyek.judul}
            </h3>
          </div>
        </div>

        <div className="mb-5 bg-black/30 p-3 rounded-sm border border-emas/15">
          <TintaGaib idUnik={proyek.id}>
            {ringkasanTeks}
          </TintaGaib>
        </div>

        <div className="mb-6">
          <span className="font-aksen italic text-xs text-tembaga block mb-1.5">
            {t('proyek.bahanLabel')}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {proyek.teknologi.map((tech) => (
              <span
                key={tech}
                className="bg-perkamentua/20 text-cahayatinta border border-tembaga/50 rounded-sm px-2 py-0.5 text-xs font-aksen font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleKlikBuka}
        className="w-full py-2.5 px-4 bg-ramuanmerah/90 hover:bg-emas text-krem hover:text-sepia font-judul text-xs uppercase tracking-widest border border-emas rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emas cursor-pointer select-none shadow-sm flex items-center justify-center gap-2"
      >
        <span>{t('proyek.tombolDetail')}</span>
        <span className="text-sm">✦</span>
      </button>
    </div>
  )
}
