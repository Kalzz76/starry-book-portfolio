import React from 'react'
import IntroSampul from '../buku/IntroSampul'
import PembatasGelombang from '../dekorasi/PembatasGelombang'
import Bintang from '../dekorasi/Bintang'
import KunangKunang from '../dekorasi/KunangKunang'
import IlustrasiTentang from '../ilustrasi/IlustrasiTentang'
import IlustrasiKeahlian from '../ilustrasi/IlustrasiKeahlian'
import IlustrasiProyek from '../ilustrasi/IlustrasiProyek'
import IlustrasiPencapaian from '../ilustrasi/IlustrasiPencapaian'
import IlustrasiKontak from '../ilustrasi/IlustrasiKontak'
import IsiTentang from '../isi/IsiTentang'
import IsiKeahlian from '../isi/IsiKeahlian'
import IsiProyek from '../isi/IsiProyek'
import IsiPencapaian from '../isi/IsiPencapaian'
import IsiKontak from '../isi/IsiKontak'

export default function ModeHalaman({ onHalamanSfx, onLoncengSfx, onKlikSfx }) {
  const kurangiGerak = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  return (
    <div className="w-full">
      {!kurangiGerak && <IntroSampul onKlikSfx={onKlikSfx} />}

      <section id="tentang" className="relative bg-pasir text-tinta pt-16 md:pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="w-48 sm:w-64 mx-auto mb-6">
            <IlustrasiTentang />
          </div>
          <IsiTentang
            dalamBuku={false}
            onKlikSfx={onKlikSfx}
          />
        </div>
        <PembatasGelombang kelas="text-malam" />
      </section>

      <section id="keahlian" className="relative bg-malam text-kertas pt-16 md:pt-24 overflow-hidden">
        <Bintang jumlah={30} mobile={true} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="w-full max-w-sm mx-auto mb-8 h-48 rounded-2xl overflow-hidden border border-emas/40">
            <IlustrasiKeahlian />
          </div>
          <IsiKeahlian dalamBuku={false} />
        </div>
        <PembatasGelombang kelas="text-kertas" />
      </section>

      <section id="proyek" className="relative bg-kertas text-tinta pt-16 md:pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="w-48 sm:w-64 mx-auto mb-6">
            <IlustrasiProyek />
          </div>
          <IsiProyek
            dalamBuku={false}
            onHalamanSfx={onHalamanSfx}
            onKlikSfx={onKlikSfx}
          />
        </div>
        <PembatasGelombang kelas="text-pasir" />
      </section>

      <section id="pencapaian" className="relative bg-pasir text-tinta pt-16 md:pt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="w-48 sm:w-64 mx-auto mb-6">
            <IlustrasiPencapaian />
          </div>
          <IsiPencapaian
            dalamBuku={false}
            onHalamanSfx={onHalamanSfx}
            onKlikSfx={onKlikSfx}
          />
        </div>
        <PembatasGelombang kelas="text-malam" />
      </section>

      <section id="kontak" className="relative bg-malam text-kertas pt-16 md:pt-24 overflow-hidden">
        <Bintang jumlah={30} mobile={true} />
        <KunangKunang jumlah={6} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="w-48 sm:w-64 mx-auto mb-6">
            <IlustrasiKontak />
          </div>
          <IsiKontak
            dalamBuku={false}
            onLoncengSfx={onLoncengSfx}
            onKlikSfx={onKlikSfx}
          />
        </div>
        <PembatasGelombang kelas="text-kertas" />
      </section>
    </div>
  )
}
