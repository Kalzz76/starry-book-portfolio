import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { dataProfil } from '../../data/profil'
import KartuKertas from '../ui/KartuKertas'
import TombolPil from '../ui/TombolPil'
import Bintang from '../dekorasi/Bintang'
import KunangKunang from '../dekorasi/KunangKunang'
import PembatasGelombang from '../dekorasi/PembatasGelombang'
import Parallax from '../dekorasi/Parallax'
import Ikon from '../ui/Ikon'

export default function Kontak({ onLoncengSfx, onKlikSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const tautanCV = bahasaAktif === 'id' ? '/cv/CV_Kaka_ID.pdf' : '/cv/CV_Kaka_EN.pdf'

  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [pesan, setPesan] = useState('')
  const [websiteHoneypot, setWebsiteHoneypot] = useState('')

  const [statusKirim, setStatusKirim] = useState('diam')
  const [pesanError, setPesanError] = useState('')
  const [emailDisalin, setEmailDisalin] = useState(false)

  const handleSalinEmail = () => {
    try {
      navigator.clipboard.writeText(dataProfil.email)
      setEmailDisalin(true)
      if (onKlikSfx) onKlikSfx()
      setTimeout(() => setEmailDisalin(false), 2500)
    } catch (e) {}
  }

  const handleKirim = async (e) => {
    e.preventDefault()
    setPesanError('')

    if (websiteHoneypot) {
      return
    }

    const namaBersih = nama.trim()
    const emailBersih = email.trim()
    const pesanBersih = pesan.trim()

    if (!namaBersih || !pesanBersih) {
      setPesanError(t('kontak.errorKosong'))
      return
    }

    if (!emailBersih.includes('@') || !emailBersih.includes('.')) {
      setPesanError(t('kontak.errorEmail'))
      return
    }

    if (pesanBersih.length > 1000) {
      setPesanError(t('kontak.errorPanjang'))
      return
    }

    setStatusKirim('mengirim')

    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY || 'FORM_KEY_PLACEHOLDER'

    try {
      const respon = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: apiKey,
          name: namaBersih,
          email: emailBersih,
          message: pesanBersih,
          subject: 'Pesan Buku Dongeng Portofolio dari ' + namaBersih
        })
      })

      const hasil = await respon.json()

      if (hasil.success) {
        setStatusKirim('sukses')
        setNama('')
        setEmail('')
        setPesan('')
        if (onLoncengSfx) {
          onLoncengSfx()
        }
        setTimeout(() => {
          setStatusKirim('diam')
        }, 30000)
      } else {
        setStatusKirim('gagal')
        setPesanError(t('kontak.errorKirim'))
      }
    } catch (err) {
      setStatusKirim('gagal')
      setPesanError(t('kontak.errorKirim'))
    }
  }

  const linkMailto = `mailto:${dataProfil.email}?subject=Halo%20Kaka%20Andrea%20Yahya&body=${encodeURIComponent(pesan)}`

  return (
    <section id="kontak" className="relative bg-malam text-kertas pt-20 md:pt-28 overflow-hidden">
      <Bintang jumlah={35} />
      <KunangKunang jumlah={8} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 pb-20 md:pb-32">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="font-tulisan text-jingga text-2xl mb-1">
            {t('kontak.penandaBab')}
          </span>

          <h2 className="font-judul text-kertas text-3xl md:text-5xl font-bold leading-tight mb-4">
            {t('kontak.judul')}
          </h2>

          <p className="font-isi text-base sm:text-lg text-kertas/80 leading-relaxed mb-8">
            {t('kontak.pengantar')}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <TombolPil
              href={dataProfil.github}
              target="_blank"
              rel="noopener noreferrer"
              varian="terang"
              onClick={onKlikSfx}
              ariaLabel="GitHub Kaka Andrea Yahya"
            >
              <Ikon nama="github" kelas="w-4 h-4" />
              <span>GitHub</span>
            </TombolPil>

            <TombolPil
              href={dataProfil.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              varian="terang"
              onClick={onKlikSfx}
              ariaLabel="LinkedIn Kaka Andrea Yahya"
            >
              <Ikon nama="linkedin" kelas="w-4 h-4" />
              <span>LinkedIn</span>
            </TombolPil>

            <TombolPil
              href={`mailto:${dataProfil.email}`}
              varian="terang"
              onClick={onKlikSfx}
              ariaLabel="Email Kaka Andrea Yahya"
            >
              <Ikon nama="email" kelas="w-4 h-4" />
              <span>Email</span>
            </TombolPil>

            <TombolPil
              href={tautanCV}
              target="_blank"
              rel="noopener noreferrer"
              varian="jingga"
              onClick={onKlikSfx}
              ariaLabel="Unduh CV Kaka"
            >
              <Ikon nama="unduh" kelas="w-4 h-4" />
              <span>Unduh CV</span>
            </TombolPil>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <Parallax rentang={15} kelas="w-full max-w-sm">
              <div className="relative bg-kartu/95 rounded-3xl p-6 sm:p-8 shadow-lembut border border-lumut/40 text-center text-tinta">
                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
                    <circle cx="100" cy="100" r="86" fill="#161b4a" />
                    
                    <path d="M20 155 Q100 135 180 155 L180 186 L20 186 Z" fill="#1f4d36" opacity="0.9" />
                    <rect x="70" y="135" width="60" height="12" rx="4" fill="#694326" />
                    
                    <circle cx="100" cy="115" r="22" fill="#d9732f" />
                    <circle cx="94" cy="112" r="5" fill="#fdfbef" />
                    <circle cx="106" cy="112" r="5" fill="#fdfbef" />
                    <line x1="91" y1="112" x2="97" y2="112" stroke="#1a1a1a" strokeWidth="2" />
                    <line x1="103" y1="112" x2="109" y2="112" stroke="#1a1a1a" strokeWidth="2" />
                    <polygon points="100,117 97,122 103,122" fill="#f6d776" />
                    
                    <rect x="42" y="90" width="22" height="34" rx="4" fill="#694326" />
                    <rect x="45" y="95" width="16" height="22" rx="2" fill="#f6d776" opacity="0.9" />
                    <circle cx="53" cy="106" r="3" fill="#ffffff" />
                    <line x1="53" y1="75" x2="53" y2="90" stroke="#694326" strokeWidth="2" />
                    <circle cx="53" cy="74" r="3" fill="#694326" />
                    
                    <circle cx="40" cy="70" r="2.5" fill="#f6d776" className="animasi-berkedip" />
                    <circle cx="150" cy="85" r="3" fill="#f6d776" className="animasi-melayang" />
                    <circle cx="160" cy="60" r="2" fill="#f6d776" className="animasi-berkedip" />
                  </svg>
                </div>

                <div className="mt-4 pt-3 border-t border-pasir">
                  <span className="font-tulisan text-2xl text-jingga block">
                    Burung Hantu & Lentera Malam
                  </span>
                  <span className="font-isi text-xs text-tinta/60">
                    Menjaga peraduan hingga bab berikutnya
                  </span>
                </div>
              </div>
            </Parallax>
          </div>

          <div className="lg:col-span-7">
            <KartuKertas malam={true} kelas="border border-lumut/40">
              {statusKirim === 'sukses' ? (
                <div className="py-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-hutan text-bintang mx-auto flex items-center justify-center mb-4 shadow-md">
                    <Ikon nama="bintang" kelas="w-7 h-7" />
                  </div>
                  <h3 className="font-judul text-2xl font-bold text-hutan mb-2">
                    {t('kontak.suksesJudul')}
                  </h3>
                  <p className="font-isi text-base text-tinta/80 max-w-md mx-auto mb-6">
                    {t('kontak.suksesPesan')}
                  </p>
                  <p className="font-tulisan text-lg text-jingga">
                    Sampai jumpa di balasan surat berikutnya!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleKirim} className="flex flex-col gap-4">
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex="-1"
                      autoComplete="off"
                      value={websiteHoneypot}
                      onChange={(e) => setWebsiteHoneypot(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="form-nama" className="block font-isi text-xs uppercase tracking-wider text-hutan font-bold mb-1.5">
                      {t('kontak.labelNama')}
                    </label>
                    <input
                      type="text"
                      id="form-nama"
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                      placeholder={t('kontak.placeholderNama')}
                      className="w-full bg-kertas text-tinta border border-lumut/60 rounded-2xl px-4 py-2.5 focus:border-hutan focus:ring-1 focus:ring-hutan outline-none transition-all font-isi text-sm"
                      disabled={statusKirim === 'mengirim'}
                    />
                  </div>

                  <div>
                    <label htmlFor="form-email" className="block font-isi text-xs uppercase tracking-wider text-hutan font-bold mb-1.5">
                      {t('kontak.labelEmail')}
                    </label>
                    <input
                      type="email"
                      id="form-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('kontak.placeholderEmail')}
                      className="w-full bg-kertas text-tinta border border-lumut/60 rounded-2xl px-4 py-2.5 focus:border-hutan focus:ring-1 focus:ring-hutan outline-none transition-all font-isi text-sm"
                      disabled={statusKirim === 'mengirim'}
                    />
                  </div>

                  <div>
                    <label htmlFor="form-pesan" className="block font-isi text-xs uppercase tracking-wider text-hutan font-bold mb-1.5">
                      {t('kontak.labelPesan')}
                    </label>
                    <textarea
                      id="form-pesan"
                      rows="4"
                      value={pesan}
                      onChange={(e) => setPesan(e.target.value)}
                      placeholder={t('kontak.placeholderPesan')}
                      className="w-full bg-kertas text-tinta border border-lumut/60 rounded-2xl px-4 py-2.5 focus:border-hutan focus:ring-1 focus:ring-hutan outline-none transition-all font-isi text-sm resize-none"
                      disabled={statusKirim === 'mengirim'}
                    />
                    <div className="flex justify-end mt-1">
                      <span className="text-[11px] text-tinta/50">
                        {pesan.length}/1000
                      </span>
                    </div>
                  </div>

                  {pesanError && (
                    <div className="bg-sakura/30 text-hutan border border-sakura rounded-2xl px-4 py-2.5 text-xs font-medium">
                      {pesanError}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
                    <TombolPil
                      tipe="submit"
                      varian="utama"
                      disabled={statusKirim === 'mengirim'}
                      onClick={onKlikSfx}
                    >
                      <Ikon nama="email" kelas="w-4 h-4" />
                      <span>
                        {statusKirim === 'mengirim'
                          ? t('kontak.mengirim')
                          : t('kontak.tombolKirim')}
                      </span>
                    </TombolPil>

                    <button
                      type="button"
                      onClick={handleSalinEmail}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-hutan hover:text-jingga transition-colors cursor-pointer"
                    >
                      <Ikon nama="link" kelas="w-3.5 h-3.5" />
                      <span>{emailDisalin ? t('kontak.tercatat') : t('kontak.salinEmail')}</span>
                    </button>
                  </div>

                  {statusKirim === 'gagal' && (
                    <div className="pt-3 border-t border-pasir/80">
                      <a
                        href={linkMailto}
                        className="inline-flex items-center gap-2 text-xs font-bold text-jingga underline underline-offset-4 hover:text-hutan"
                      >
                        {t('kontak.tombolEmailManual')}
                      </a>
                    </div>
                  )}
                </form>
              )}
            </KartuKertas>
          </div>
        </div>
      </div>

      <PembatasGelombang kelas="text-kertas" />
    </section>
  )
}
