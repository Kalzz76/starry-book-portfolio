import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { daftarLembar, daftarBab } from '../../data/linimasa'
import Lembar from './Lembar'
import Sampul from './Sampul'
import SampulBelakang from './SampulBelakang'
import Latar from './Latar'
import PenandaBab from './PenandaBab'
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
import Ikon from '../ui/Ikon'

export default function Buku({ onHalamanSfx, onLoncengSfx, onKlikSfx, onStatusBuku }) {
  const { t } = useBahasa()
  const kontainerRef = useRef(null)
  const [babAktifIndex, setBabAktifIndex] = useState(0)
  const [bukuTerbuka, setBukuTerbuka] = useState(false)

  const { scrollYProgress } = useScroll({
    target: kontainerRef,
    offset: ['start start', 'end end']
  })

  const skalaKamera = useTransform(
    scrollYProgress,
    [0.0, 0.04, 0.14, 0.88, 0.96, 1.0],
    [0.88, 0.88, 1.0, 1.0, 0.88, 0.88],
    { clamp: true }
  )

  const geserKamera = useTransform(
    scrollYProgress,
    [0.0, 0.04, 0.14, 0.88, 0.96, 1.0],
    ['-25%', '-25%', '0%', '0%', '25%', '25%'],
    { clamp: true }
  )

  const miringBuku = useTransform(
    scrollYProgress,
    [0.0, 0.04, 0.14, 0.88, 0.96, 1.0],
    [5, 5, 16, 16, 5, 5],
    { clamp: true }
  )

  const opacityHalamanKiri = useTransform(
    scrollYProgress,
    [0.03, 0.10],
    [0, 1],
    { clamp: true }
  )

  const opacityHalamanKanan = useTransform(
    scrollYProgress,
    [0.91, 0.96],
    [1, 0],
    { clamp: true }
  )

  const opacityPunggung = useTransform(
    scrollYProgress,
    [0.04, 0.10, 0.90, 0.96],
    [0, 1, 1, 0],
    { clamp: true }
  )

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    const terbuka = p >= 0.05 && p <= 0.94
    if (terbuka !== bukuTerbuka) {
      setBukuTerbuka(terbuka)
      if (onStatusBuku) {
        onStatusBuku(terbuka)
      }
    }

    let indeksTerdekat = 0
    if (p >= 0.95) {
      indeksTerdekat = 6
    } else if (p >= 0.80) {
      indeksTerdekat = 5
    } else if (p >= 0.62) {
      indeksTerdekat = 4
    } else if (p >= 0.44) {
      indeksTerdekat = 3
    } else if (p >= 0.26) {
      indeksTerdekat = 2
    } else if (p >= 0.08) {
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

  const bukaBukuPertama = () => {
    gulungKeBab(1)
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
            const terbuka = i >= 1 && i <= 5
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
    <div ref={kontainerRef} className="relative h-[800vh]">
      <Latar />

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden z-10">
        <div className="ruang-buku-3d w-full flex items-center justify-center px-1 sm:px-3">
          <motion.div
            style={{
              scale: skalaKamera,
              x: geserKamera,
              rotateX: miringBuku,
              transformStyle: 'preserve-3d'
            }}
            className="relative h-[min(94vh,900px)] w-[min(88vw,1080px)] will-change-transform"
          >
            <motion.div
              style={{ opacity: opacityHalamanKiri }}
              className="absolute -inset-1 rounded-3xl bg-[#1c120c] border border-emas/40 pointer-events-none z-[-1] shadow-[0_30px_70px_rgba(0,0,0,0.85)]"
            >
              <div className="absolute top-1 left-1 w-6 h-6 border-t-2 border-l-2 border-emas" />
              <div className="absolute top-1 right-1 w-6 h-6 border-t-2 border-r-2 border-emas" />
              <div className="absolute bottom-1 left-1 w-6 h-6 border-b-2 border-l-2 border-emas" />
              <div className="absolute bottom-1 right-1 w-6 h-6 border-b-2 border-r-2 border-emas" />
            </motion.div>

            <motion.div
              style={{ opacity: opacityHalamanKiri }}
              className="absolute -bottom-3 inset-x-2 h-3.5 rounded-b-lg tebal-halaman-bawah pointer-events-none z-10"
            />

            <motion.div
              style={{ opacity: opacityHalamanKiri }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-4 rounded-b-xl bg-[#2b1b11] border-b border-x border-emas/50 shadow-md pointer-events-none z-20"
            />

            <motion.div
              style={{ opacity: opacityHalamanKiri }}
              className="absolute left-0 top-0 w-1/2 h-full rounded-l-3xl bg-kertas border-y border-l border-lumut/30 tepi-kertas-kiri lengkung-halaman-kiri overflow-hidden z-0"
            >
              <div className="w-full h-full relative">
                <div className="absolute right-0 inset-y-0 w-12 bg-gradient-to-l from-black/30 via-black/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: opacityHalamanKanan }}
              className="absolute right-0 top-0 w-1/2 h-full rounded-r-3xl bg-kertas border-y border-r border-lumut/30 tepi-kertas-kanan lengkung-halaman-kanan overflow-hidden z-0"
            >
              <div className="w-full h-full relative">
                <div className="absolute left-0 inset-y-0 w-12 bg-gradient-to-r from-black/30 via-black/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            <Lembar
              indeks={0}
              totalLembar={6}
              mulai={daftarLembar[0].mulai}
              selesai={daftarLembar[0].selesai}
              scrollProgress={scrollYProgress}
              onPutarSfx={onHalamanSfx}
              sisiDepan={
                <Sampul
                  onBukaBuku={gulungKeHash}
                  onKlikSfx={onKlikSfx}
                />
              }
              sisiBelakang={<IlustrasiTentang />}
            />

            <Lembar
              indeks={1}
              totalLembar={6}
              mulai={daftarLembar[1].mulai}
              selesai={daftarLembar[1].selesai}
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
              indeks={2}
              totalLembar={6}
              mulai={daftarLembar[2].mulai}
              selesai={daftarLembar[2].selesai}
              scrollProgress={scrollYProgress}
              onPutarSfx={onHalamanSfx}
              sisiDepan={<IsiKeahlian dalamBuku={true} />}
              sisiBelakang={<IlustrasiProyek />}
            />

            <Lembar
              indeks={3}
              totalLembar={6}
              mulai={daftarLembar[3].mulai}
              selesai={daftarLembar[3].selesai}
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
              indeks={4}
              totalLembar={6}
              mulai={daftarLembar[4].mulai}
              selesai={daftarLembar[4].selesai}
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
              indeks={5}
              totalLembar={6}
              mulai={daftarLembar[5].mulai}
              selesai={daftarLembar[5].selesai}
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

            <motion.div
              style={{ opacity: opacityPunggung }}
              className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-4 bg-gradient-to-r from-black/50 via-malamgelap to-black/50 shadow-inner z-30 pointer-events-none rounded-full"
            />
          </motion.div>
        </div>

        <div className="absolute bottom-3 inset-x-0 flex flex-col items-center justify-center gap-2 z-40">
          {!bukuTerbuka ? (
            babAktifIndex >= 6 ? (
              <button
                type="button"
                onClick={() => gulungKeBab(0)}
                className="flex items-center gap-2.5 bg-malamgelap/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-emas/50 shadow-2xl text-xs text-emas font-bold uppercase tracking-wider animasi-panah hover:bg-emas hover:text-malamgelap transition-all cursor-pointer"
              >
                <Ikon nama="panah-atas" kelas="w-4 h-4" />
                <span>{t('sampulBelakang.bacaKembali')}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={bukaBukuPertama}
                className="flex items-center gap-2.5 bg-malamgelap/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-emas/50 shadow-2xl text-xs text-emas font-bold uppercase tracking-wider animasi-panah hover:bg-emas hover:text-malamgelap transition-all cursor-pointer"
              >
                <span>{t('buku.petunjukScroll')}</span>
                <Ikon nama="panah-atas" kelas="w-4 h-4 rotate-180" />
              </button>
            )
          ) : (
            <PenandaBab
              daftarBab={daftarBab}
              babAktifIndex={babAktifIndex}
              onPilihBab={gulungKeBab}
              onKlikSfx={onKlikSfx}
            />
          )}
        </div>
      </div>
    </div>
  )
}
