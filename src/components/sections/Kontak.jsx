import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useBahasa } from '../../i18n/KonteksBahasa'
import Perkamen from '../ui/Perkamen'
import PemisahAlkimia from '../dekorasi/PemisahAlkimia'
import SegelLilin from '../dekorasi/SegelLilin'
import DebuBintang from '../efek/DebuBintang'

export default function Kontak({ onKlikSfx, onSegelSfx }) {
  const { t, bahasaAktif } = useBahasa()
  const tautanCV = bahasaAktif === 'id' ? '/cv/CV_Kaka_ID.pdf' : '/cv/CV_Kaka_EN.pdf'

  const [form, setForm] = useState({ nama: '', email: '', pesan: '', website: '' })
  const [status, setStatus] = useState('awal')
  const [pesanError, setPesanError] = useState('')
  const [emailTersalin, setEmailTersalin] = useState(false)
  const [ledakanSukses, setLedakanSukses] = useState(false)

  const handleSalinEmail = () => {
    if (onKlikSfx) onKlikSfx()
    try {
      navigator.clipboard.writeText('rafliar99@gmail.com')
      setEmailTersalin(true)
      setTimeout(() => setEmailTersalin(false), 2500)
    } catch (e) {}
  }

  const handleKirim = async (e) => {
    e.preventDefault()
    setPesanError('')

    if (form.website) {
      setStatus('sukses')
      return
    }

    if (!form.nama.trim() || !form.pesan.trim()) {
      setPesanError(t('kontak.errorKosong'))
      return
    }

    if (!form.email.includes('@') || !form.email.includes('.')) {
      setPesanError(t('kontak.errorEmail'))
      return
    }

    if (form.pesan.length > 1000) {
      setPesanError(t('kontak.errorPanjang'))
      return
    }

    setStatus('mengirim')
    if (onKlikSfx) onKlikSfx()

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'FORM_KEY_PLACEHOLDER'
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.nama,
          email: form.email,
          message: form.pesan,
          subject: 'Pesan Baru dari Grimoire Alkimia — ' + form.nama
        })
      })

      const hasil = await response.json()
      if (hasil.success) {
        setStatus('sukses')
        setLedakanSukses(true)
        if (onSegelSfx) onSegelSfx()
      } else {
        setStatus('error')
        setPesanError(t('kontak.errorKirim'))
      }
    } catch (err) {
      setStatus('error')
      setPesanError(t('kontak.errorKirim'))
    }
  }

  return (
    <section id="kontak" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto scroll-mt-20">
      <PemisahAlkimia simbol="☽" />

      <div className="relative mb-12 text-center">
        <span className="font-aksen italic text-sm text-tembaga block mb-1">
          {t('kontak.nomorBab')}
        </span>
        <div className="relative inline-block">
          <DebuBintang onMainkanSfx={onKlikSfx} picuLedakan={ledakanSukses} besar={ledakanSukses} />
          <h2 className="font-judul text-krem text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {t('kontak.judul')}
          </h2>
        </div>
        <p className="font-isi text-base sm:text-lg text-krem/75 max-w-xl mx-auto mt-2">
          {t('kontak.subjudul')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left bg-ungugelap/70 border border-emas/30 rounded-sm p-6 sm:p-8 shadow-halaman">
          <div className="w-full flex justify-center mb-6" aria-hidden="true">
            <svg viewBox="0 0 200 160" className="w-44 h-36 text-emas drop-shadow">
              <path d="M40 145 C40 140 160 140 160 145 L150 152 L50 152 Z" fill="#2e1f12" />
              <rect x="58" y="70" width="22" height="75" rx="3" fill="#c2a468" />
              <line x1="69" y1="70" x2="69" y2="58" stroke="#14173a" strokeWidth="2" />
              <ellipse cx="69" cy="50" rx="6" ry="12" fill="#ffd700" className="animate-lilin" />
              <ellipse cx="69" cy="52" rx="3" ry="7" fill="#ff4500" />

              <path d="M120 110 C110 110 105 125 105 145 L155 145 C155 125 150 110 140 110 Z" fill="#14173a" stroke="#c9a227" strokeWidth="2" />
              <rect x="123" y="98" width="14" height="12" rx="2" fill="#c9a227" />
              <path d="M130 100 L175 40 M175 40 L168 38 L165 48 Z" stroke="#ffe9a8" strokeWidth="3" fill="#ffe9a8" />
            </svg>
          </div>

          <h3 className="font-judul text-xl font-bold text-emas mb-3 tracking-wide">
            Segel Pos & Arsip Alkimia
          </h3>
          <p className="font-isi text-base text-krem/80 mb-6 leading-relaxed">
            Terbuka untuk diskusi proyek web, tawaran magang, serta kolaborasi pengembangan perangkat lunak.
          </p>

          <div className="w-full grid grid-cols-2 gap-3 mb-6">
            <a
              href="https://github.com/Kalzz76"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onKlikSfx}
              className="flex items-center gap-3 p-2.5 rounded-sm bg-black/40 border border-emas/30 hover:border-emas transition-colors group"
              aria-label="GitHub Kalzz76"
            >
              <SegelLilin ukuran="kecil" anak={<span className="text-xs">GH</span>} />
              <span className="font-aksen text-sm text-krem group-hover:text-cahayatinta font-medium truncate">
                GitHub
              </span>
            </a>

            <a
              href="https://www.linkedin.com/in/kaka-andrea-yahya"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onKlikSfx}
              className="flex items-center gap-3 p-2.5 rounded-sm bg-black/40 border border-emas/30 hover:border-emas transition-colors group"
              aria-label="LinkedIn Kaka Andrea Yahya"
            >
              <SegelLilin ukuran="kecil" anak={<span className="text-xs">IN</span>} />
              <span className="font-aksen text-sm text-krem group-hover:text-cahayatinta font-medium truncate">
                LinkedIn
              </span>
            </a>

            <a
              href="mailto:rafliar99@gmail.com"
              onClick={onKlikSfx}
              className="flex items-center gap-3 p-2.5 rounded-sm bg-black/40 border border-emas/30 hover:border-emas transition-colors group"
              aria-label="Kirim Email ke Kaka Andrea Yahya"
            >
              <SegelLilin ukuran="kecil" anak={<span className="text-xs">✉</span>} />
              <span className="font-aksen text-sm text-krem group-hover:text-cahayatinta font-medium truncate">
                Email Pos
              </span>
            </a>

            <a
              href={tautanCV}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onKlikSfx}
              className="flex items-center gap-3 p-2.5 rounded-sm bg-black/40 border border-emas/30 hover:border-emas transition-colors group"
              aria-label="Unduh CV Kaka Andrea Yahya"
            >
              <SegelLilin ukuran="kecil" anak={<span className="text-xs">📜</span>} />
              <span className="font-aksen text-sm text-krem group-hover:text-cahayatinta font-medium truncate">
                Unduh CV
              </span>
            </a>
          </div>

          <button
            type="button"
            onClick={handleSalinEmail}
            className="w-full py-2 px-3 bg-perkamentua/20 hover:bg-perkamentua/30 border border-tembaga/50 rounded-sm font-aksen text-xs text-cahayatinta flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>{emailTersalin ? t('kontak.tercatat') : t('kontak.salinEmail')}</span>
            <span>{emailTersalin ? '✓' : '📋'}</span>
          </button>
        </div>

        <div className="lg:col-span-7">
          <Perkamen>
            {status === 'sukses' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center"
              >
                <div className="mb-6 transform scale-125 transition-transform duration-500">
                  <SegelLilin
                    ukuran="besar"
                    stamped={true}
                    anak={<span className="font-judul text-xl text-emas">✦</span>}
                  />
                </div>

                <h3 className="font-judul text-2xl sm:text-3xl font-bold text-sepia mb-3">
                  {t('kontak.suksesJudul')}
                </h3>

                <p className="font-isi text-lg text-sepia/85 max-w-md mx-auto leading-relaxed mb-6">
                  {t('kontak.suksesPesan')}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setStatus('awal')
                    setForm({ nama: '', email: '', pesan: '', website: '' })
                  }}
                  className="font-judul text-xs uppercase tracking-widest px-6 py-2.5 border-2 border-tembaga text-sepia hover:bg-sepia hover:text-krem rounded-sm transition-colors"
                >
                  Kirim Surat Lainnya
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleKirim} className="space-y-4 sm:space-y-5">
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex="-1"
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="nama" className="block font-aksen italic text-sm text-tembaga font-bold mb-1">
                    {t('kontak.labelNama')}
                  </label>
                  <input
                    type="text"
                    id="nama"
                    name="nama"
                    required
                    value={form.nama}
                    onChange={(e) => setForm({ ...form, nama: e.target.value })}
                    placeholder={t('kontak.placeholderNama')}
                    className="w-full bg-perkamentua/60 text-sepia border-2 border-tembaga/60 rounded-sm px-3.5 py-2.5 font-isi placeholder:text-sepia/40 focus:border-ramuanmerah focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-aksen italic text-sm text-tembaga font-bold mb-1">
                    {t('kontak.labelEmail')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t('kontak.placeholderEmail')}
                    className="w-full bg-perkamentua/60 text-sepia border-2 border-tembaga/60 rounded-sm px-3.5 py-2.5 font-isi placeholder:text-sepia/40 focus:border-ramuanmerah focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="pesan" className="block font-aksen italic text-sm text-tembaga font-bold mb-1">
                    {t('kontak.labelPesan')}
                  </label>
                  <textarea
                    id="pesan"
                    name="pesan"
                    rows="4"
                    required
                    value={form.pesan}
                    onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                    placeholder={t('kontak.placeholderPesan')}
                    className="w-full bg-perkamentua/60 text-sepia border-2 border-tembaga/60 rounded-sm px-3.5 py-2.5 font-isi placeholder:text-sepia/40 focus:border-ramuanmerah focus:outline-none transition-colors resize-none"
                  />
                </div>

                {pesanError && (
                  <div className="bg-ramuanmerah/15 text-ramuanmerah border border-ramuanmerah rounded-sm px-3 py-2 text-sm font-isi flex flex-col gap-2">
                    <p>{pesanError}</p>
                    <a
                      href="mailto:rafliar99@gmail.com"
                      className="font-aksen font-bold underline text-xs"
                    >
                      {t('kontak.tombolEmailManual')} ↗
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'mengirim'}
                  className="w-full py-3 px-6 bg-ramuanmerah hover:bg-emas text-krem hover:text-sepia font-judul text-xs sm:text-sm uppercase tracking-widest border-2 border-emas rounded-sm transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 select-none"
                >
                  <span>{status === 'mengirim' ? t('kontak.mengirim') : t('kontak.tombolKirim')}</span>
                  <span>🜂</span>
                </button>
              </form>
            )}
          </Perkamen>
        </div>
      </div>
    </section>
  )
}
