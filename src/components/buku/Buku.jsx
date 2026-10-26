import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { waktuVideo, daftarLembar, daftarBab } from '../../data/linimasa'
import Lembar from './Lembar'
import HalamanDasar from './HalamanDasar'
import SampulBelakang from './SampulBelakang'
import Latar from './Latar'
import IntroVideo from './IntroVideo'
import PenandaBab from './PenandaBab'
import IsiHero from '../isi/IsiHero'
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

export default function Buku({ onHalamanSfx, onLoncengSfx, onKlikSfx, onStatusBuku }) {
  const { t } = useBahasa()
  const kontainerRef = useRef(null)
  const [babAktifIndex, setBabAktifIndex] = useState(0)
  const [bukuTerbuka, setBukuTerbuka] = useState(false)

  const { scrollYProgress } = useScroll({
    target: kontainerRef,
    offset: ['start start', 'end end']
  })

  const skalaLatar = useTransform(
    scrollYProgress,
    [0.27, 0.40],
    [1.6, 1.2],
    { clamp: true }
  )

  const opacityVideo = useTransform(
    scrollYProgress,
    [0.27, 0.31],
    [1, 0],
    { clamp: true }
  )

  const opacityHero = useTransform(
    scrollYProgress,
    [0.03, 0.07],
    [1, 0],
    { clamp: true }
  )

  const opacityBuku = useTransform(
    scrollYProgress,
    [0.27, 0.31],
    [0, 1],
    { clamp: true }
  )

  const skalaBuku = useTransform(
    scrollYProgress,
    [0.27, 0.31],
    [0.9, 1.0],
    { clamp: true }
  )

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const terbuka = p >= 0.27
    if (terbuka !== bukuTerbuka) {
      setBukuTerbuka(terbuka)
      if (onStatusBuku) {
        onStatusBuku(terbuka)
      }
    }

    let indeksTerdekat = 0
    if (p >= 0.88) {
      indeksTerdekat = 5
    } else if (p >= 0.73) {
      indeksTerdekat = 4
    } else if (p >= 0.58) {
      indeksTerdekat = 3
    } else if (p >= 0.43) {
      indeksTerdekat = 2
    } else if (p >= 0.28) {
      indeksTerdekat = 1
    } else {
      indeksTerdekat = 0
    }

    if (indeksTerdekat !== babAktifIndex) {
      setBabAktifIndex(indeksTerdekat)
      const targetHash = '#' + daftarBab[indeksTerdekat].hash
      if (window.location.hash !== targetHash) {
        window.history.replaceState(null, '', targetHash)
      }
    }
  })

  const gulungKeBab = (indeks) => {
    if (!kontainerRef.current || indeks < 0 || indeks >= daftarBab.length) return
    const bab = daftarBab[indeks]
    const tinggiKontainer = kontainerRef.current.offsetHeight
    const tinggiLayar = window.innerHeight
    const posisiPixel = kontainerRef.current.offsetTop + bab.posisi * (tinggiKontainer - tinggiLayar)
    window.scrollTo({ top: posisiPixel, behavior: 'smooth' })
    setBabAktifIndex(indeks)
    window.history.replaceState(null, '', '#' + bab.hash)
  }

  const gulungKeHash = (hashNama) => {
    for (let i = 0; i < daftarBab.length; i++) {
      if (daftarBab[i].hash === hashNama) {
        gulungKeBab(i)
        break
      }
    }
  }

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && hash !== 'hero') {
      for (let i = 0; i < daftarBab.length; i++) {
        if (daftarBab[i].hash === hash) {
          if (kontainerRef.current) {
            const tinggiKontainer = kontainerRef.current.offsetHeight
            const tinggiLayar = window.innerHeight
            const posisiPixel = kontainerRef.current.offsetTop + daftarBab[i].posisi * (tinggiKontainer - tinggiLayar)
            window.scrollTo({ top: posisiPixel, behavior: 'auto' })
            setBabAktifIndex(i)
            const terbuka = i >= 1
            setBukuTerbuka(terbuka)
            if (onStatusBuku) onStatusBuku(terbuka)
          }
          break
        }
      }
    }

    const handleKeydown = (e) => {
      const tag = document.activeElement ? document.activeElement.tagName.toLowerCase() : ''
      if (tag === 'input' || tag === 'textarea') return

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (babAktifIndex < daftarBab.length - 1) {
          e.preventDefault()
          gulungKeBab(babAktifIndex + 1)
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (babAktifIndex > 0) {
          e.preventDefault()
          gulungKeBab(babAktifIndex - 1)
        }
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [babAktifIndex])

  return (
    <div ref={kontainerRef} className="relative h-[1000vh]">
      <Latar skala={skalaLatar} />

      <motion.div
        style={{ opacity: opacityVideo }}
        className="fixed inset-0 pointer-events-none z-10"
      >
        <IntroVideo
          progres={scrollYProgress}
          mulai={waktuVideo.mulai}
          selesai={waktuVideo.selesai}
        />
      </motion.div>

      <motion.div
        style={{ opacity: opacityHero }}
        className="fixed inset-x-0 bottom-8 sm:bottom-12 flex justify-center z-20 pointer-events-none"
      >
        <div className="pointer-events-auto">
          <IsiHero
            onAksiProyek={() => gulungKeHash('proyek')}
            onKlikSfx={onKlikSfx}
          />
        </div>
      </motion.div>

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden z-20 pointer-events-none">
        <motion.div
          style={{
            opacity: opacityBuku,
            scale: skalaBuku
          }}
          className="ruang-buku-3d w-full flex items-center justify-center px-1 sm:px-3 pointer-events-auto"
        >
          <div className="relative h-[min(82vh,780px)] w-[min(90vw,1100px)] aspect-[1.6/1]">
            <div className="absolute -inset-1 rounded-3xl bg-[#1c120c] border border-emas/40 pointer-events-none z-[-1] shadow-[0_30px_70px_rgba(0,0,0,0.85)]">
              <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-emas" />
              <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-emas" />
              <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-emas" />
              <div className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-emas" />
            </div>

            <div className="absolute -bottom-3 inset-x-2 h-3.5 rounded-b-lg tebal-halaman-bawah pointer-events-none z-10" />

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-4 rounded-b-xl bg-[#2b1b11] border-b border-x border-emas/50 shadow-md pointer-events-none z-20" />

            <HalamanDasar anak={<IlustrasiTentang />} />

            <div className="absolute right-0 top-0 w-1/2 h-full rounded-r-3xl bg-kertas border-y border-r border-lumut/30 tepi-kertas-kanan lengkung-halaman-kanan overflow-hidden z-0 select-none shadow-[inset_12px_0_24px_rgba(0,0,0,0.06)]">
              <div className="w-full h-full relative">
                <div className="absolute left-0 inset-y-0 w-10 sm:w-16 bg-gradient-to-r from-black/25 via-black/10 to-transparent pointer-events-none" />
              </div>
            </div>

            <Lembar
              indeks={0}
              totalLembar={5}
              mulai={daftarLembar[0].mulai}
              selesai={daftarLembar[0].selesai}
              scrollProgress={scrollYProgress}
              onPutarSfx={onHalamanSfx}
              sisiDepan={
                <IsiTentang
                  dalamBuku={true}
                  onKlikSfx={onKlikSfx}
                  onPindahBab={gulungKeHash}
                />
              }
              sisiBelakang={<IlustrasiKeahlian />}
            />

            <Lembar
              indeks={1}
              totalLembar={5}
              mulai={daftarLembar[1].mulai}
              selesai={daftarLembar[1].selesai}
              scrollProgress={scrollYProgress}
              onPutarSfx={onHalamanSfx}
              sisiDepan={<IsiKeahlian dalamBuku={true} />}
              sisiBelakang={<IlustrasiProyek />}
            />

            <Lembar
              indeks={2}
              totalLembar={5}
              mulai={daftarLembar[2].mulai}
              selesai={daftarLembar[2].selesai}
              scrollProgress={scrollYProgress}
              onPutarSfx={onHalamanSfx}
              sisiDepan={
                <IsiProyek
                  dalamBuku={true}
                  onHalamanSfx={onHalamanSfx}
                  onKlikSfx={onKlikSfx}
                />
              }
              sisiBelakang={<IlustrasiPencapaian />}
            />

            <Lembar
              indeks={3}
              totalLembar={5}
              mulai={daftarLembar[3].mulai}
              selesai={daftarLembar[3].selesai}
              scrollProgress={scrollYProgress}
              onPutarSfx={onHalamanSfx}
              sisiDepan={
                <IsiPencapaian
                  dalamBuku={true}
                  onHalamanSfx={onHalamanSfx}
                  onKlikSfx={onKlikSfx}
                />
              }
              sisiBelakang={<IlustrasiKontak />}
            />

            <Lembar
              indeks={4}
              totalLembar={5}
              mulai={0}
              selesai={0}
              scrollProgress={scrollYProgress}
              onPutarSfx={onHalamanSfx}
              sisiDepan={
                <IsiKontak
                  dalamBuku={true}
                  onLoncengSfx={onLoncengSfx}
                  onKlikSfx={onKlikSfx}
                />
              }
              sisiBelakang={
                <SampulBelakang
                  onBukaKembali={gulungKeHash}
                  onKlikSfx={onKlikSfx}
                />
              }
            />

            <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-4 bg-gradient-to-r from-black/50 via-malamgelap to-black/50 shadow-inner z-30 pointer-events-none rounded-full" />
          </div>
        </motion.div>

        {bukuTerbuka && (
          <div className="absolute bottom-3 inset-x-0 flex flex-col items-center justify-center gap-2 z-30 pointer-events-auto">
            <PenandaBab
              daftarBab={daftarBab}
              babAktifIndex={babAktifIndex}
              onPilihBab={gulungKeBab}
              onKlikSfx={onKlikSfx}
            />
          </div>
        )}
      </div>
    </div>
  )
}
