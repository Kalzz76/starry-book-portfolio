import React, { useState } from 'react'
import { useBahasa } from '../../i18n/KonteksBahasa'
import { dataProfil } from '../../data/profil'
import KartuKertas from '../ui/KartuKertas'
import TombolPil from '../ui/TombolPil'
import Ikon from '../ui/Ikon'
import DekorasiHalaman from '../dekorasi/DekorasiHalaman'

export default function IsiKontak({ dalamBuku = false, onLoncengSfx, onKlikSfx }) {
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

    if (websiteHoneypot) return

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
        if (onLoncengSfx) onLoncengSfx()
        setTimeout(() => setStatusKirim('diam'), 30000)
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
    <div className={`h-full relative flex flex-col justify-between ${dalamBuku ? 'pt-20 pb-14 px-6 sm:px-10 text-tinta' : 'py-8'}`}>
      {dalamBuku && <DekorasiHalaman sisi="kanan" />}
      <div className="relative z-10">
        <span className="font-tulisan text-jingga text-2xl block mb-1">
          {t('kontak.penandaBab')}
        </span>

        <h2 className={`font-judul text-hutan font-bold leading-tight ${dalamBuku ? 'text-2xl sm:text-3xl mb-2' : 'text-3xl md:text-5xl mb-4'}`}>
          {t('kontak.judul')}
        </h2>

        <p className={`font-isi text-tinta/80 leading-relaxed ${dalamBuku ? 'text-xs mb-3' : 'text-base sm:text-lg mb-6'}`}>
          {t('kontak.pengantar')}
        </p>

        <div className={`flex flex-wrap gap-2 ${dalamBuku ? 'mb-3' : 'mb-8'}`}>
          <TombolPil
            href={dataProfil.github}
            target="_blank"
            rel="noopener noreferrer"
            varian="terang"
            onClick={onKlikSfx}
            kelas={dalamBuku ? 'py-1.5 px-3 text-[10px]' : ''}
          >
            <Ikon nama="github" kelas="w-3.5 h-3.5" />
            <span>GitHub</span>
          </TombolPil>

          <TombolPil
            href={dataProfil.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            varian="terang"
            onClick={onKlikSfx}
            kelas={dalamBuku ? 'py-1.5 px-3 text-[10px]' : ''}
          >
            <Ikon nama="linkedin" kelas="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </TombolPil>

          <TombolPil
            href={`mailto:${dataProfil.email}`}
            varian="terang"
            onClick={onKlikSfx}
            kelas={dalamBuku ? 'py-1.5 px-3 text-[10px]' : ''}
          >
            <Ikon nama="email" kelas="w-3.5 h-3.5" />
            <span>Email</span>
          </TombolPil>

          <TombolPil
            href={tautanCV}
            target="_blank"
            rel="noopener noreferrer"
            varian="jingga"
            onClick={onKlikSfx}
            kelas={dalamBuku ? 'py-1.5 px-3 text-[10px]' : ''}
          >
            <Ikon nama="unduh" kelas="w-3.5 h-3.5" />
            <span>CV</span>
          </TombolPil>
        </div>

        <KartuKertas malam={!dalamBuku} kelas={`border border-lumut/40 ${dalamBuku ? 'p-3.5 rounded-2xl bg-pasir/40' : 'p-6'}`}>
          {statusKirim === 'sukses' ? (
            <div className="py-6 text-center">
              <div className="w-12 h-12 rounded-full bg-hutan text-bintang mx-auto flex items-center justify-center mb-3 shadow-md">
                <Ikon nama="bintang" kelas="w-6 h-6" />
              </div>
              <h3 className="font-judul text-xl font-bold text-hutan mb-1">
                {t('kontak.suksesJudul')}
              </h3>
              <p className="font-isi text-xs sm:text-sm text-tinta/80 max-w-sm mx-auto">
                {t('kontak.suksesPesan')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleKirim} className="flex flex-col gap-2.5">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website-buku">Website</label>
                <input
                  type="text"
                  id="website-buku"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  value={websiteHoneypot}
                  onChange={(e) => setWebsiteHoneypot(e.target.value)}
                />
              </div>

              <div className={dalamBuku ? 'grid grid-cols-2 gap-2.5' : 'flex flex-col gap-2.5'}>
                <div>
                  <label className="block font-isi text-[10px] uppercase tracking-wider text-hutan font-bold mb-1">
                    {t('kontak.labelNama')}
                  </label>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder={t('kontak.placeholderNama')}
                    className="w-full bg-kertas text-tinta border border-lumut/60 rounded-xl px-3 py-1.5 focus:border-hutan outline-none font-isi text-xs"
                    disabled={statusKirim === 'mengirim'}
                  />
                </div>

                <div>
                  <label className="block font-isi text-[10px] uppercase tracking-wider text-hutan font-bold mb-1">
                    {t('kontak.labelEmail')}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('kontak.placeholderEmail')}
                    className="w-full bg-kertas text-tinta border border-lumut/60 rounded-xl px-3 py-1.5 focus:border-hutan outline-none font-isi text-xs"
                    disabled={statusKirim === 'mengirim'}
                  />
                </div>
              </div>

              <div>
                <label className="block font-isi text-[10px] uppercase tracking-wider text-hutan font-bold mb-1">
                  {t('kontak.labelPesan')}
                </label>
                <textarea
                  rows={dalamBuku ? 2 : 4}
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  placeholder={t('kontak.placeholderPesan')}
                  className="w-full bg-kertas text-tinta border border-lumut/60 rounded-xl px-3 py-1.5 focus:border-hutan outline-none font-isi text-xs resize-none"
                  disabled={statusKirim === 'mengirim'}
                />
              </div>

              {pesanError && (
                <div className="bg-sakura/30 text-hutan border border-sakura rounded-xl px-3 py-1 text-[11px]">
                  {pesanError}
                </div>
              )}

              <div className="flex items-center justify-between gap-2 mt-1">
                <TombolPil
                  tipe="submit"
                  varian="utama"
                  disabled={statusKirim === 'mengirim'}
                  onClick={onKlikSfx}
                  kelas="py-1.5 px-4 text-[10px]"
                >
                  <Ikon nama="email" kelas="w-3.5 h-3.5" />
                  <span>
                    {statusKirim === 'mengirim' ? t('kontak.mengirim') : t('kontak.tombolKirim')}
                  </span>
                </TombolPil>

                <button
                  type="button"
                  onClick={handleSalinEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-hutan hover:text-jingga transition-colors cursor-pointer"
                >
                  <Ikon nama="link" kelas="w-3 h-3" />
                  <span>{emailDisalin ? t('kontak.tercatat') : t('kontak.salinEmail')}</span>
                </button>
              </div>

              {statusKirim === 'gagal' && (
                <div className="pt-2 border-t border-pasir/80">
                  <a
                    href={linkMailto}
                    className="text-[11px] font-bold text-jingga underline underline-offset-2 hover:text-hutan"
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
  )
}
