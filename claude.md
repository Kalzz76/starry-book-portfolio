# Portofolio Kaka Andrea Yahya

Website portofolio pribadi milik **Kaka Andrea Yahya**, siswa SMKN 13 Bandung jurusan Rekayasa Perangkat Lunak (RPL) yang fokus pada pengembangan web dan mobile. Website menampilkan profil, keahlian, proyek, pencapaian, dan kontak. Dibangun dengan **Vite + React + Tailwind CSS**, berupa **situs statis** tanpa backend dan tanpa database, dan dihosting gratis di **Cloudflare Pages**. Tidak ada login dan tidak ada halaman admin. Semua konten diubah lewat file data di `src/data/` dan `src/i18n/`.

## Konsep: Buku Dongeng dari Lukisan Malam Berbintang

Pengunjung mendarat di sebuah **buku tertutup berornamen emas** yang melayang di depan lukisan malam berbintang. Saat mereka **scroll**, sebuah **video sinematik** (dikendalikan scroll) memperlihatkan buku terbuka, desa pop-up muncul, lalu kamera **menyelam masuk ke dalam lukisan**. Setelah itu, sebuah **buku terbuka yang dibuat dengan kode** muncul di atas lukisan, dan lembar demi lembar terbalik mengikuti scroll. Setiap spread (dua halaman) adalah satu bab: **halaman kiri berisi ilustrasi, halaman kanan berisi konten**.

- **Dua mode tampilan** (hybrid):
  - **Mode Buku** (desktop dengan mouse atau trackpad, lebar minimal 1024 px, tinggi minimal 620 px): intro video mengikuti scroll, lalu buku 3D penuh.
  - **Mode Halaman** (HP, tablet, layar kecil, `prefers-reduced-motion`, atau mode hemat data): **tanpa video**. Sampul statis (frame pertama video) membesar dan memudar sebagai intro, lalu konten tampil sebagai section scroll biasa berbentuk halaman kertas.
- **Bahasa**: dwibahasa, Indonesia (default) dan Inggris, dengan tombol ID/EN.
- **Suara**: musik kotak musik dan efek balik halaman. Default mati.
- **Gaya visual**: sampul, video, latar, dan bab malam bergaya lukisan cat minyak tebal (lukisan Van Gogh domain publik). Bab siang bergaya cat air lembut buatan sendiri. Semua ilustrasi halaman kiri dibingkai seperti **gambar cetak di atas kertas** (margin putih tipis dan bayangan lembut) supaya dua gaya terasa menyatu.
- **Target pengunjung**: calon pemberi kerja magang, juri lomba, guru, dan kolaborator. Konten harus tetap bisa dicapai cepat lewat navbar tanpa menunggu animasi.

### Aturan Orisinalitas (WAJIB)
- Lukisan Van Gogh (*The Starry Night*, *Starry Night Over the Rhône*, *Café Terrace at Night*) berstatus **domain publik** dan boleh dipakai langsung. Tetap **cek lisensi tiap file foto** yang diunduh (sumber seperti Wikimedia Commons, The Met Open Access, atau Rijksmuseum) dan catat judul, tahun, koleksi, URL sumber, dan lisensi di `docs/CREDITS.md`.
- **Video intro harus buatan sendiri.** Dilarang memakai video referensi milik orang lain (termasuk file contoh yang pernah dikirim) sebagai bahan jadi, dan dilarang meniru adegan, karakter, atau logo karya orang lain. Kalau dibuat dengan AI video generator, cek syarat lisensi tool dan catat di `docs/CREDITS.md`.
- Dilarang menyalin website atau karya orang lain: jangan memakai ilustrasi, karakter, logo, teks, atau tata letak dari website referensi mana pun.
- Motif milik Kaka: burung hantu kecil sebagai maskot, rumah pohon dengan jendela menyala, lentera, kunang-kunang, dan buku berornamen emas.
- Semua audio dan font harus buatan sendiri atau berlisensi bebas (CC0/MIT/OFL).

## URUTAN KERJA (BACA DULU SEBELUM MENGERJAKAN APA PUN)

1. Baca `CLAUDE.md` ini sampai selesai.
2. Kalau ada folder `referensi/` berisi desain (screenshot atau HTML), CV lama, atau kode lama buatan sendiri, baca untuk memahami selera visual dan gaya penulisan kode.
3. Baru tulis kode, mengikuti ATURAN PENULISAN KODE di bawah.

Kalau ada perbedaan antara file lain dan `CLAUDE.md`, **`CLAUDE.md` yang jadi acuan final**. Kalau ada bagian bertanda `TODO` atau data yang belum jelas, **tanya dulu**, jangan mengarang.

## ATURAN PENULISAN KODE (WAJIB DIPATUHI)

Kode di project ini harus sederhana dan bersih, terlihat ditulis manual oleh pelajar, bukan hasil generate.

1. **DILARANG menulis komentar di dalam kode.** Tidak ada `//`, `/* */`, `{/* */}` di JSX, dan komentar di CSS atau JSON.
2. **Kode harus sederhana.** Tidak boleh ada pola arsitektur rumit: tanpa Redux/Zustand, tanpa React Query, tanpa `useReducer`, tanpa higher-order component, tanpa render props, tanpa class component. State cukup `useState`, `useEffect`, `useRef`, dan `useContext` untuk bahasa dan suara. Hook milik framer-motion (`useScroll`, `useTransform`, `useMotionValueEvent`) **hanya boleh dipakai di folder `components/buku/`**. Custom hook yang diizinkan hanya `useSuara` dan `useModeBuku`.
3. **Hindari sintaks yang terlihat canggih**: `reduce` bertingkat, chaining `map().filter().map()` panjang, ternary bersarang, optional chaining bertumpuk, destructuring bertingkat, closure kompleks, `&&` berantai di JSX. Pakai `if`, `for`, `map` sederhana, dan fungsi biasa dengan nama jelas.
4. **Yang penting jalan dan tidak error.** Utamakan kode yang lurus dan mudah dibaca daripada kode yang pintar.
5. Nama variabel, fungsi, dan state boleh campur Indonesia/Inggris (`daftarProyek`, `bukaModal`, `bahasaAktif`, `handleKirim`). Nama komponen memakai PascalCase, satu komponen per file.
6. Semua teks untuk pengunjung (label, tombol, pesan error, pesan sukses) **tidak boleh ditulis langsung di komponen**. Ambil dari kamus bahasa lewat fungsi `t('kunci')`, dan tulis di `id.json` dan `en.json`.
7. Konten proyek, sertifikat, dan skill ditulis di `src/data/`, bukan di dalam komponen. Angka waktu animasi buku dan video ditulis di `src/data/linimasa.js`, bukan tersebar di komponen.
8. Styling memakai **Tailwind CSS**. Warna memakai token tema (lihat Palet Warna), jangan menulis kode hex langsung di komponen. CSS buatan sendiri hanya untuk hal yang tidak bisa dengan Tailwind (font, `@keyframes`, tekstur kertas, properti 3D seperti `backface-visibility`) dan ditaruh di `src/styles/index.css`.
9. Library tambahan yang diizinkan hanya: **framer-motion** (animasi) dan **howler** (suara). Library atau package lain **tanya dulu**.
10. Fitur yang tidak ada di `CLAUDE.md` ini tidak boleh ditambahkan hanya karena terpikir bagus. Kalau ragu, tanya dulu.
11. `localStorage` dan `window` selalu dibungkus pemeriksaan aman (`try ... catch` untuk `localStorage`).
12. Jangan hardcode secret. Kunci layanan form dibaca dari `import.meta.env.VITE_WEB3FORMS_KEY`.
13. Teks yang **tampil di layar** boleh berisi tanda kutip atau simbol apa pun. Larangan komentar hanya berlaku untuk **kode sumber**.

Aturan ini berlaku untuk semua perubahan berikutnya, tanpa perlu diingatkan lagi.

## Tech Stack

- **Build tool**: Vite
- **UI**: React 18 (JavaScript/JSX, bukan TypeScript)
- **Styling**: Tailwind CSS 3 lewat npm (bukan CDN), token warna di `tailwind.config.js`
- **Animasi**: framer-motion (`motion`, `useScroll`, `useTransform`, `useMotionValueEvent`, `whileInView`)
- **Video intro**: elemen `<video>` HTML biasa (MP4 H.264) yang `currentTime`-nya dikendalikan scroll. Tanpa library video.
- **Suara**: howler
- **Ikon UI**: SVG inline buatan sendiri di `src/components/ui/Ikon.jsx`. Tanpa library ikon.
- **Gambar**: WebP (lihat Daftar Aset). Elemen yang bisa dibuat dengan kode (bintang latar, kunang-kunang, gelombang, tebal tepi halaman, bayangan, sudut ornamen emas) dibuat dengan SVG dan CSS.
- **Font** (Google Fonts, `display=swap`): **Fraunces** (judul serif), **DM Sans** (isi dan label), **Caveat** (catatan tulisan tangan kecil)
- **Form kontak**: Web3Forms (gratis, tanpa backend), dipanggil dengan `fetch`
- **Statistik pengunjung** (opsional): Cloudflare Web Analytics
- **Hosting**: Cloudflare Pages

Perintah:

```
npm install
npm run dev
npm run build
npm run preview
npm run lint
```

**Catatan audio:** browser memblokir autoplay sebelum pengunjung berinteraksi, jadi musik hanya mulai setelah tombol suara ditekan.
**Catatan 3D:** efek 3D memakai `perspective` dan `backface-visibility`. Sertakan juga `-webkit-backface-visibility` untuk Safari, dan uji di Safari asli.
**Catatan video:** pengubahan `currentTime` yang cepat (scrub) bergantung pada cara video dikompres. Ikuti bagian "Intro Video Mengikuti Scroll" dengan teliti dan uji di Chrome, Firefox, dan Safari desktop.

## Struktur Project

```
portfolio-kaka/
├── public/
│   ├── audio/                 kotak-musik-loop.mp3, sfx-halaman.mp3, sfx-klik.mp3, sfx-lonceng.mp3
│   ├── video/                 intro.mp4, intro-poster.jpg
│   ├── cv/                    CV_Kaka_ID.pdf, CV_Kaka_EN.pdf
│   ├── favicon.png
│   └── og-image.png           ukuran 1200x630
├── src/
│   ├── assets/ilustrasi/      latar lukisan, halaman kiri, tekstur kertas (WebP)
│   ├── components/
│   │   ├── buku/              Buku, Lembar, HalamanDasar, Latar, IntroVideo, PenandaBab, IntroSampul
│   │   ├── isi/               IsiHero, IsiTentang, IsiKeahlian, IsiProyek, IsiPencapaian, IsiKontak (konten saja, dipakai di kedua mode)
│   │   ├── ilustrasi/         IlustrasiTentang, IlustrasiKeahlian, IlustrasiProyek, IlustrasiPencapaian, IlustrasiKontak
│   │   ├── dekorasi/          Bintang, KunangKunang, Awan, PembatasGelombang, SudutEmas
│   │   └── ui/                Navbar, TombolPil, KartuKertas, Modal, TombolBahasa, TombolSuara, Ikon, Footer
│   ├── data/                  proyek.js, sertifikat.js, keahlian.js, profil.js, linimasa.js
│   ├── i18n/                  id.json, en.json, KonteksBahasa.jsx
│   ├── hooks/                 useSuara.js, useModeBuku.js
│   ├── styles/                index.css
│   ├── App.jsx
│   └── main.jsx
├── docs/CREDITS.md
├── referensi/                 desain dan bahan acuan
├── .env.example               VITE_WEB3FORMS_KEY=
├── tailwind.config.js
└── vite.config.js
```

Komponen `isi/` dan `ilustrasi/` hanya berisi tampilan konten dan **tidak boleh tahu** sedang berada di mode apa. Mode Buku dan Mode Halaman hanya berbeda pada pembungkusnya. Komponen `isi/` menerima prop `dalamBuku` (benar atau salah) untuk memilih ukuran huruf dan jumlah item per halaman.

## Akses dan Pengelolaan Konten

- Tidak ada login, role, atau halaman admin. Website sepenuhnya publik dan statis.
- Memperbarui konten cukup dengan mengedit file di `src/data/` dan `src/i18n/`, lalu `git push`.
- Tombol unduh CV mengikuti bahasa aktif: `CV_Kaka_ID.pdf` untuk Indonesia, `CV_Kaka_EN.pdf` untuk Inggris.

## Palet Warna dan Tampilan

Token warna didaftarkan di `tailwind.config.js` bagian `theme.extend.colors`.

| Token        | Hex       | Penggunaan                                                    |
| ------------ | --------- | ------------------------------------------------------------- |
| `kertas`     | `#fdfbef` | Latar halaman buku dan section (krem)                         |
| `pasir`      | `#f1e8d4` | Latar kartu kecil, section selang-seling (Mode Halaman)       |
| `kartu`      | `#f8f6ee` | Kartu putih lembut                                            |
| `hutan`      | `#1f4d36` | Judul dan teks penting di halaman terang                      |
| `lumut`      | `#8aa76a` | Aksen hijau lembut, border input                              |
| `jingga`     | `#d9732f` | Aksen hangat (penanda bab, sorotan)                           |
| `sakura`     | `#e9a6b5` | Aksen kecil (error lembut, bunga)                             |
| `malam`      | `#161b4a` | Langit malam                                                  |
| `malamgelap` | `#0d1136` | Latar luar, navbar, area paling gelap                         |
| `samudra`    | `#2a4d9b` | Biru pusaran langit                                           |
| `langit`     | `#6fa8dc` | Biru terang aksen                                             |
| `bintang`    | `#f6d776` | Bintang, bulan, cahaya (bukan untuk teks kecil di latar terang) |
| `emas`       | `#c9a227` | Ornamen, bingkai, tombol di atas video                        |
| `tinta`      | `#1a1a1a` | Tombol hitam dan teks isi                                     |

| Elemen                         | Kelas Tailwind                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------ |
| Latar luar (di luar buku)      | `bg-malamgelap text-kertas font-isi`                                                             |
| Halaman buku                   | `bg-kertas text-tinta`                                                                           |
| Navbar (kedua mode)            | `fixed top-0 inset-x-0 z-50 bg-malamgelap/85 backdrop-blur text-kertas`                          |
| Tombol utama di halaman terang | `bg-tinta text-kertas rounded-full px-6 py-2.5 text-xs uppercase tracking-widest shadow-lembut hover:bg-hutan` |
| Tombol utama di atas video     | `bg-emas text-malamgelap rounded-full px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-bintang` |
| Tombol sekunder                | `border border-hutan text-hutan rounded-full px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-hutan hover:text-kertas` (di atas video: `border-emas text-emas`) |
| Kartu (`KartuKertas`)          | `bg-kartu rounded-3xl shadow-lembut p-5`                                                         |
| Gambar cetak (halaman kiri)    | `bg-kertas p-2 shadow-lembut` dengan gambar di dalamnya                                          |
| Judul bab                      | `font-judul text-hutan text-3xl leading-tight`                                                   |
| Label kecil (eyebrow)          | `font-isi text-xs uppercase tracking-[0.2em] text-hutan`                                         |
| Penanda bab                    | `font-tulisan text-jingga text-xl`                                                               |
| Badge teknologi                | `bg-pasir text-hutan rounded-full px-3 py-1 text-xs`                                             |
| Tab / filter aktif             | `bg-hutan text-kertas rounded-full px-4 py-1.5 text-xs uppercase tracking-widest`                |
| Tab / filter tidak aktif       | `bg-pasir text-hutan rounded-full px-4 py-1.5 text-xs uppercase tracking-widest`                 |
| Tombol bahasa aktif            | `bg-bintang text-malamgelap rounded-full`                                                        |
| Kolom input                    | `bg-kertas text-tinta border border-lumut rounded-2xl px-4 py-2.5 focus:border-hutan outline-none` |
| Pesan error                    | `bg-sakura/30 text-hutan border border-sakura rounded-2xl px-4 py-2`                             |
| Modal                          | overlay `bg-malamgelap/70 backdrop-blur-sm`, kotak `bg-kertas rounded-3xl shadow-lembut max-w-3xl` |

`shadow-lembut` = `0 8px 24px rgba(31, 77, 54, 0.12)`. Sudut selalu membulat besar, dilarang bayangan hitam keras dan border tebal ala pixel.

### Tipografi
- `font-judul` = Fraunces. `font-isi` = DM Sans. `font-tulisan` = Caveat (hanya catatan pendek, bukan paragraf).
- Label kecil dan tombol: huruf kapital dengan `tracking-widest`.
- Teks isi di dalam halaman buku minimal `text-sm` (14 px), di Mode Halaman minimal `text-base`. Pakai `clamp()` supaya ukuran menyesuaikan tinggi halaman.
- Teks di atas video atau lukisan harus terbaca: tambahkan lapisan gradien gelap tipis di belakang blok teks (`bg-gradient-to-t from-malamgelap/70 to-transparent`).

## Intro Video Mengikuti Scroll (hanya Mode Buku)

Video intro adalah satu adegan kamera tunggal tanpa pemotongan: buku berornamen emas tertutup melayang di depan lukisan malam berbintang, buku terbuka dan desa pop-up muncul dengan percikan bintang, lalu kamera menyelam ke dalam lukisan sampai layar penuh goresan pusaran langit. Posisi video (`currentTime`) mengikuti progres scroll, sehingga scroll maju memutar video maju dan scroll mundur memutarnya mundur.

### Spesifikasi video (dibuat sendiri oleh Kaka)
- Durasi 6 sampai 8 detik, 24 fps, rasio 16:9, satu gerakan kamera tanpa cut, tanpa teks, tanpa orang, pencahayaan stabil.
- **Frame pertama**: buku di tengah bagian atas, bagian bawah sepertiga layar relatif bersih (hanya lukisan) karena akan ditimpa teks Home.
- **Frame terakhir**: close-up penuh pusaran langit lukisan, tanpa buku. Gambar latar situs (`latar-starry-night.webp`) harus berupa lukisan yang sama sehingga peralihan video ke latar tidak terasa melompat.
- Hasil jadi diencode seperti ini (nama file masukan disesuaikan):

```
ffmpeg -i intro-asli.mp4 -vf "scale=1280:-2,fps=24" -c:v libx264 -preset slow -crf 26 -g 2 -keyint_min 2 -pix_fmt yuv420p -an -movflags +faststart public/video/intro.mp4
ffmpeg -i public/video/intro.mp4 -frames:v 1 -q:v 3 public/video/intro-poster.jpg
```

  `-g 2` membuat keyframe tiap 2 frame supaya scrub mulus. Target ukuran **di bawah 8 MB**. Kalau lebih besar, naikkan `-crf` (contoh 28) atau kecilkan lebar ke 1100 px.
- Tanpa audio (`-an`). Video selalu `muted`.

### Komponen `IntroVideo`
Hanya dirender di Mode Buku (jadi HP tidak mengunduh video). Menerima `progres` (progres scroll kontainer) dari `Buku`.

```jsx
import { useRef, useState } from 'react'
import { useTransform, useMotionValueEvent } from 'framer-motion'

export default function IntroVideo({ progres, mulai, selesai }) {
  const videoRef = useRef(null)
  const [siap, setSiap] = useState(false)
  const kemajuan = useTransform(progres, [mulai, selesai], [0, 1], { clamp: true })

  useMotionValueEvent(kemajuan, 'change', (nilai) => {
    const video = videoRef.current
    if (video && siap && video.duration) {
      const target = nilai * video.duration
      if (Math.abs(video.currentTime - target) > 0.02) {
        video.currentTime = target
      }
    }
  })

  function handleSiap() {
    setSiap(true)
  }

  return (
    <video
      ref={videoRef}
      src="/video/intro.mp4"
      poster="/video/intro-poster.jpg"
      muted
      playsInline
      preload="auto"
      onLoadedData={handleSiap}
      className="absolute inset-0 w-full h-full object-cover"
    />
  )
}
```

### Perilaku dan cadangan
- Selama video belum siap (`siap` masih salah), tampilkan **poster** (frame pertama) dan, saat scroll, gerakkan poster dengan zoom (skala 1 ke 1.6) dan memudar, sama seperti `IntroSampul` di Mode Halaman. Setelah video siap, video mengambil alih.
- Kalau video gagal dimuat (`onError`), lanjut memakai perilaku cadangan di atas, jangan tampilkan error.
- `useModeBuku` tidak memilih Mode Buku kalau `navigator.connection.saveData` benar. Mode Buku juga hanya untuk perangkat dengan `(hover: hover) and (pointer: fine)`, jadi tablet sentuh memakai Mode Halaman (bisa dilonggarkan setelah diuji).
- Setelah selesai, jangan hapus video dari DOM selama pengunjung masih di dekat bagian atas, supaya scroll mundur tetap mulus.

## Mode Buku (desktop)

### Kerangka
Kontainer setinggi **1000vh** berisi panggung `sticky top-0 h-screen`. Progres scroll `p` (0 sampai 1) dibaca dari kontainer dengan `useScroll`. Footer "Tamat." berada **setelah** kontainer dalam alur biasa.

Lapisan panggung, dari belakang ke depan:
1. **Latar lukisan** (`Latar`): `latar-starry-night.webp` memenuhi layar dengan `object-cover`, ditambah `Bintang` dan `KunangKunang`. Berada di bawah video saat intro, lalu tampil penuh sesudahnya.
2. **Video intro** (`IntroVideo`): terlihat pada 0 sampai 0.31, memudar keluar pada 0.27 sampai 0.31.
3. **Teks Home** (`IsiHero`): di atas video, memudar keluar pada 0.03 sampai 0.07 (lihat bagian Isi Tiap Bab).
4. **Buku terbuka** (`Buku` dan `Lembar`): memudar masuk dengan skala 0.9 ke 1 pada 0.27 sampai 0.31.

Ukuran satu halaman: tinggi `min(82vh, 780px)`, lebar 0.8 kali tingginya. Contoh di layar 1440 x 900: halaman 590 x 738 px, spread 1180 px.

Latar lukisan saat buku sudah terbuka: skala dari 1.6 pada progres 0.27 turun ke 1.2 pada 0.40, lalu tetap, supaya terasa seperti kamera baru saja menyelam dan mundur sedikit.

### Susunan halaman
Buku terbuka sejak muncul. Halaman kiri spread pertama adalah **halaman dasar** (`HalamanDasar`, tidak berputar). Selain itu ada **5 lembar** dengan 4 kali balik. Halaman kiri sebuah spread adalah sisi belakang lembar sebelumnya, halaman kanannya adalah sisi depan lembar berikutnya.

| Lembar        | Sisi depan (halaman kanan) | Sisi belakang (halaman kiri berikutnya)           | Berputar pada scroll |
| ------------- | -------------------------- | -------------------------------------------------- | -------------------- |
| Halaman dasar | (tidak ada)                | Ilustrasi Tentang (cat air)                        | tidak berputar       |
| A             | Isi Tentang                | Ilustrasi Keahlian (Van Gogh)                      | 0.408 sampai 0.458   |
| B             | Isi Keahlian               | Ilustrasi Proyek (cat air)                         | 0.556 sampai 0.606   |
| C             | Isi Proyek                 | Ilustrasi Pencapaian (cat air)                     | 0.704 sampai 0.754   |
| D             | Isi Pencapaian             | Ilustrasi Kontak (Van Gogh)                        | 0.852 sampai 0.902   |
| E             | Isi Kontak                 | Sampul belakang (CSS)                              | tidak berputar       |

### Linimasa lengkap (nilai ini ditulis di `src/data/linimasa.js`)

| Rentang scroll     | Yang terjadi                                                                                  |
| ------------------ | --------------------------------------------------------------------------------------------- |
| 0 sampai 0.03      | Frame pertama video. Teks Home tampil. Petunjuk "Scroll untuk membuka buku".                  |
| 0.03 sampai 0.27   | Video diputar mengikuti scroll (buku terbuka, pop-up, menyelam). Teks Home memudar 0.03 sampai 0.07. |
| 0.27 sampai 0.31   | Video memudar, latar lukisan dan buku terbuka muncul.                                         |
| 0.31 sampai 0.408  | Spread 1: Tentang. Diam supaya terbaca.                                                       |
| 0.408 sampai 0.458 | Lembar A terbalik.                                                                            |
| 0.458 sampai 0.556 | Spread 2: Keahlian.                                                                           |
| 0.556 sampai 0.606 | Lembar B terbalik.                                                                            |
| 0.606 sampai 0.704 | Spread 3: Proyek.                                                                             |
| 0.704 sampai 0.754 | Lembar C terbalik.                                                                            |
| 0.754 sampai 0.852 | Spread 4: Pencapaian.                                                                         |
| 0.852 sampai 0.902 | Lembar D terbalik.                                                                            |
| 0.902 sampai 1     | Spread 5: Kontak. Setelahnya scroll lanjut ke footer "Tamat.".                                |

```js
export const waktuVideo = { mulai: 0.03, selesai: 0.27 }

export const daftarLembar = [
  { id: 'tentang', mulai: 0.408, selesai: 0.458 },
  { id: 'keahlian', mulai: 0.556, selesai: 0.606 },
  { id: 'proyek', mulai: 0.704, selesai: 0.754 },
  { id: 'pencapaian', mulai: 0.852, selesai: 0.902 },
  { id: 'kontak', mulai: 0, selesai: 0 }
]

export const daftarBab = [
  { hash: 'hero', kunci: 'nav.home', posisi: 0 },
  { hash: 'tentang', kunci: 'nav.about', posisi: 0.36 },
  { hash: 'keahlian', kunci: 'nav.skills', posisi: 0.507 },
  { hash: 'proyek', kunci: 'nav.projects', posisi: 0.655 },
  { hash: 'pencapaian', kunci: 'nav.achievements', posisi: 0.803 },
  { hash: 'kontak', kunci: 'nav.contact', posisi: 0.95 }
]
```

### Cara kerja `Lembar`
- Setiap lembar adalah `div` dengan `transform-origin: left center` di punggung buku. Sudut putar `rotateY` diambil dari progres lewat `useTransform` dari 0 ke -180 derajat dalam rentang `mulai` sampai `selesai`, dengan `clamp`.
- Dua sisi lembar adalah dua `div` (`absolute inset-0`) dengan `backface-visibility: hidden`. Sisi belakang diberi `rotateY(180deg)` tetap.
- **Penting:** pembungkus buku **tidak** memakai `transform-style: preserve-3d` antar lembar. `perspective` (sekitar 2200 px) dipasang di pembungkus buku, dan urutan tumpukan antar lembar diatur dengan `zIndex`. Lembar yang belum terbalik: `zIndex = jumlahLembar - indeks`. Lembar yang sudah terbalik (sudut melewati -90 derajat): `zIndex = indeks`. Perubahan ini disimpan di satu state boolean `terbalik` per lembar yang hanya berubah saat melewati setengah putaran (pakai `useMotionValueEvent`).
- **Bayangan halaman**: lapisan gradien gelap di atas tiap sisi yang opasitasnya mengikuti sudut putar (maksimal 0.35 di sekitar 90 derajat), supaya terlihat tebal.
- **Tepi tebal halaman**: garis-garis tipis di sisi kanan buku (sebelum balik) dan sisi kiri (sesudah balik) dibuat dengan `box-shadow` berlapis, bukan gambar.
- **Interaksi**: sisi yang sedang tidak terlihat diberi atribut `inert` (di React 18 tulis `inert=""`, atau hilangkan atribut bila terlihat) dan `aria-hidden="true"`, supaya tombol di halaman tersembunyi tidak bisa difokus atau diklik.
- **Suara**: `sfx-halaman` dimainkan saat progres sebuah lembar mulai bergerak dari 0 (dan saat kembali ke 0).

### Navigasi
- Menu navbar: **Home, About, Skills, Projects, Achievements, Contact** (label ikut bahasa), dengan hash `#hero`, `#tentang`, `#keahlian`, `#proyek`, `#pencapaian`, `#kontak`.
- Karena tidak ada section bertumpuk, klik menu **menggulung halaman** ke posisi bab dengan rumus `kontainer.offsetTop + posisi * (kontainer.offsetHeight - window.innerHeight)` memakai `window.scrollTo({ behavior: 'smooth' })`, lalu mengubah hash lewat `history.replaceState`. Loncat jauh ke bab lain tidak perlu memutar video, cukup melompat.
- Saat halaman dimuat dengan hash (misalnya `/#proyek`), langsung gulung ke posisi bab itu tanpa animasi.
- Bab aktif ditentukan dari progres dengan `if` berurutan terhadap `daftarBab`, disimpan di state `babAktif` (hanya diperbarui saat berganti), dan dipakai untuk menandai menu aktif serta memperbarui hash.
- **Keyboard**: tombol panah bawah, panah kanan, dan PageDown pindah ke bab berikutnya; panah atas, panah kiri, dan PageUp ke bab sebelumnya. Tidak aktif saat fokus ada di kolom input atau textarea.
- `PenandaBab`: enam titik kecil di bawah buku (bab aktif berwarna `bintang`) yang bisa diklik, ditambah tombol ‹ dan › dengan `aria-label`.

## Mode Halaman (HP, tablet, layar kecil)

`useModeBuku` mengembalikan `buku` atau `halaman`. Mode `buku` hanya kalau: lebar layar minimal 1024 px, tinggi minimal 620 px, `(hover: hover) and (pointer: fine)` terpenuhi, `prefers-reduced-motion` tidak aktif, dan mode hemat data tidak aktif. Hook memperbarui nilainya saat ukuran layar berubah.

- **Intro sampul** (`IntroSampul`, tanpa animasi kalau reduced-motion): kontainer setinggi 250vh berisi panggung `sticky`. `intro-poster.jpg` memenuhi layar dengan `object-cover`, teks Home di atasnya. Saat scroll, poster membesar (skala 1 ke 1.6) dan memudar sambil teks memudar, memperlihatkan section pertama. **Tidak ada video di mode ini.**
- **Isi**: lima section berurutan (`#tentang`, `#keahlian`, `#proyek`, `#pencapaian`, `#kontak`) yang memakai komponen `isi/` dan `ilustrasi/` yang sama. Ilustrasi dipasang di atas konten dengan ukuran lebih kecil. Latar section selang-seling `kertas` dan `pasir`, dipisah `PembatasGelombang`. Keahlian dan Kontak memakai latar `malam` dengan `Bintang`.
- **Navbar**: anchor biasa dengan scroll halus. Menampilkan logo, `TombolBahasa`, `TombolSuara`, dan hamburger, **ketiganya tampil bersamaan** di lebar 360 px.
- Semua item proyek dan sertifikat tampil tanpa pagination.
- Footer "Tamat." sama dengan Mode Buku.
- Kalau reduced-motion: tampilkan poster sebagai banner statis (tinggi 80vh) dengan teks Home, tanpa animasi apa pun.

### `PembatasGelombang`

```jsx
export default function PembatasGelombang({ kelas, balik }) {
  let gaya = {}
  if (balik) {
    gaya = { transform: 'rotate(180deg)' }
  }
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className={'block w-full h-12 ' + kelas}
      style={gaya}
      aria-hidden="true"
    >
      <path
        d="M0 40 C120 80 240 0 360 30 C480 60 600 90 720 50 C840 10 960 0 1080 35 C1200 70 1320 60 1440 30 L1440 90 L0 90 Z"
        fill="currentColor"
      />
    </svg>
  )
}
```

Warna gelombang diatur lewat kelas teks Tailwind sesuai warna **section berikutnya**.

## Isi Tiap Bab

Kapasitas area halaman kanan di Mode Buku kira-kira 520 x 650 px, jadi konten harus ringkas. **Dilarang scroll di dalam halaman** (bentrok dengan scroll utama), gunakan pagination.

- **Home (`IsiHero`)**: ditimpa di atas video (Mode Buku) atau di atas poster (Mode Halaman), di sepertiga bawah layar dengan gradien gelap tipis. Isi: label kecil "WEB · MOBILE · CLOUD", judul "Kaka Andrea Yahya" (`font-judul`, warna `kertas`), peran "Software Engineering Student", tagline satu kalimat, dua tombol: **Lihat Proyek** (menggulung ke bab Proyek) dan **Unduh CV**. Petunjuk "Scroll untuk membuka buku" dengan panah bergerak pelan.
- **Tentang (Bab 1)**: penanda "Bab 1" (`font-tulisan`), judul, paragraf singkat, tiga `KartuKertas` kecil: **Pendidikan** (SMKN 13 Bandung, RPL), **Organisasi** (IRMA), **Bahasa** (Indonesia aktif, Inggris dasar, Sunda dasar). Ilustrasi kiri: rumah pohon cat air.
- **Keahlian (Bab 2)**: judul "Perlengkapan Petualangan" (via i18n) dan **4 `KartuKertas` dalam grid 2 x 2**: **Bahasa Pemrograman**, **Framework**, **Database & Cloud**, **Desain**. Tiap kartu berisi ikon SVG, judul, dan badge. **Dilarang persentase atau bar tingkat kemampuan.** Ilustrasi kiri: *Starry Night Over the Rhône* (Van Gogh, domain publik).
- **Proyek (Bab 3)**: judul "Kisah-Kisah yang Kubuat". Filter pil: **Semua, Web, Mobile, Lainnya**. Kartu proyek berbentuk **sampul buku mini** (sisi kiri bergaris tebal `hutan`, sudut kanan membulat, gambar, judul, ringkasan, badge teknologi, tombol **Baca Kisahnya**). Di Mode Buku tampil **2 kartu per halaman** dengan pagination "‹ 1/2 ›". Tombol Baca Kisahnya membuka `Modal` berisi gambar, deskripsi lengkap, teknologi, link demo dan GitHub (hanya kalau ada). Modal ditutup lewat tombol Tutup, klik di luar kotak, atau `Esc`, lalu fokus kembali ke tombol pemicu. Ilustrasi kiri: meja kerja cat air.
- **Pencapaian (Bab 4)**: judul "Lencana dan Piala". Dua tab pil: **Lomba** dan **Sertifikat**. Tiap item `KartuKertas` dengan ikon bintang emas, nama, penyelenggara, tahun, keterangan, dan link (kalau ada). Di Mode Buku **4 item per halaman** dengan pagination. Dilarang menampilkan juara atau gelar yang belum benar-benar diraih. Ilustrasi kiri: rak lencana cat air.
- **Kontak (Bab Terakhir)**: judul "Sampai Jumpa di Bab Berikutnya". Tombol link **GitHub**, **LinkedIn**, **Email**, **Unduh CV**, lalu form kontak kompak dalam `KartuKertas`. Ilustrasi kiri: *Café Terrace at Night* (Van Gogh, domain publik).
- **Footer ("Tamat.")**: tulisan "Tamat." dengan hiasan kecil, teks hak cipta, ringkasan kredit aset, dan tombol kembali ke atas (di Mode Buku tombol ini menggulung ke posisi 0).

### Form Kontak
- Kolom: Nama, Email, Pesan, dan kolom jebakan tersembunyi `website` (honeypot, harus kosong).
- Validasi sederhana dengan `if` di `handleKirim`: nama dan pesan tidak boleh kosong, email harus mengandung `@` dan titik, pesan maksimal 1000 karakter. Pesan error dari kamus bahasa.
- Kalau honeypot terisi, berhenti diam-diam tanpa mengirim.
- Kirim dengan `fetch` ke `https://api.web3forms.com/submit` memakai `VITE_WEB3FORMS_KEY`. Cek dokumentasi Web3Forms sebelum menulis parameter.
- Tombol dinonaktifkan saat mengirim dan 30 detik setelah berhasil. Saat berhasil, tampilkan pesan hangat (contoh "Suratmu sudah sampai") dan mainkan `sfx-lonceng`.
- Kalau gagal, tampilkan pesan ramah dan tombol alternatif **Kirim lewat Email** (`mailto:`). Jangan tampilkan error teknis mentah.

## Animasi

- **Mode Buku**: gerak utama dikendalikan scroll (video, kamera, lembar). Hanya animasikan `transform` dan `opacity`. Jangan menganimasikan `width`, `height`, `top`, `left`.
- **Mode Halaman**: blok konten muncul dengan `whileInView` (opacity 0 ke 1, naik 24 px, 0.7 detik, sekali saja), kartu dalam satu baris muncul bergantian dengan jeda 0.1 detik.
- **Loop dekoratif**: bintang berkedip (`@keyframes berkedip`, 2 sampai 5 detik), kunang-kunang melayang (`@keyframes melayang`), panah petunjuk scroll. `Bintang` membuat posisi **sekali** saat dimuat (`useState` dengan fungsi awal berisi perulangan `for`): 40 bintang di desktop, 20 di mobile.
- **prefers-reduced-motion**: pakai Mode Halaman statis tanpa intro, matikan semua loop, dan tampilkan elemen langsung tanpa animasi.

## Dwibahasa (ID/EN)

- Bahasa default: Indonesia. Saat kunjungan pertama, baca `navigator.language`: diawali `id` pakai Indonesia, selain itu Inggris. Pilihan disimpan di `localStorage` kunci `bahasaPilihan`.
- `KonteksBahasa.jsx` menyediakan `bahasaAktif`, `gantiBahasa`, dan `t('kunci')`. Kunci bertingkat dipisah titik (contoh `hero.tombolProyek`) dan dibaca dengan perulangan `for`, bukan `reduce`.
- `id.json` dan `en.json` harus punya **kunci identik**. Kalau kunci tidak ditemukan, `t` mengembalikan kunci itu sendiri.
- Data berbahasa ganda memakai bentuk `{ id: '...', en: '...' }`, dibaca dengan `data[bahasaAktif]`.
- Saat bahasa berganti, perbarui `document.documentElement.lang` dan `document.title`.
- Nama orang, proyek, teknologi, dan lomba **tidak diterjemahkan**.
- Label menu, petunjuk scroll, pagination, judul bab, dan tombol semuanya lewat kamus.

## Suara

- File: `kotak-musik-loop.mp3` (musik latar), `sfx-halaman.mp3`, `sfx-klik.mp3`, `sfx-lonceng.mp3`. Musik di bawah 1 MB, efek di bawah 50 KB.
- **Suara default MATI.** Audio tidak dimuat sebelum `TombolSuara` ditekan pertama kali.
- `useSuara` menyediakan `suaraAktif`, `nyalakanSuara`, `matikanSuara`, dan `mainkanEfek(nama)`. Preferensi disimpan di `localStorage` kunci `suaraAktif` (`ya` atau `tidak`). Walau tersimpan `ya`, musik baru jalan setelah pengunjung berinteraksi.
- Volume musik 0.3, efek 0.5, dengan fade singkat saat toggle.
- `sfx-halaman` saat lembar mulai terbalik (Mode Buku) dan saat membuka modal atau berpindah tab. `sfx-klik` pada tombol. `sfx-lonceng` saat pesan berhasil terkirim.
- `TombolSuara` punya `aria-label` yang berubah sesuai status.

## Daftar Aset

Semua gambar WebP (kualitas sekitar 80), di `src/assets/ilustrasi/`, target di bawah 200 KB per file kecuali latar. Sebelum aset jadi, pakai **placeholder** (kotak berlabel nama aset dengan warna token) dan beri tahu. Jangan mengambil gambar dari internet tanpa lisensi jelas.

| Nama file                      | Isi                                                                                                          | Ukuran     | Sumber                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------ | ---------- | --------------------------------------- |
| `intro.mp4` (di `public/video`) | Video intro scrub (lihat spesifikasi)                                                                        | 1280 x 720 | Buatan sendiri (di bawah 8 MB)          |
| `intro-poster.jpg`             | Frame pertama video, dipakai sebagai poster dan sampul Mode Halaman                                          | 1280 x 720 | Diambil dari `intro.mp4`                |
| `latar-starry-night.webp`      | Lukisan *The Starry Night* sebagai latar situs                                                               | 2400 lebar | Domain publik, catat sumber             |
| `halaman-keahlian.webp`        | *Starry Night Over the Rhône*, dipotong ke rasio 4:5                                                          | 800 x 1000 | Domain publik, catat sumber             |
| `halaman-kontak.webp`          | *Café Terrace at Night*, dipotong ke rasio 4:5                                                                | 800 x 1000 | Domain publik, catat sumber             |
| `halaman-tentang.webp`         | Rumah pohon dengan jendela menyala hangat, awan, rumput (cat air)                                            | 800 x 1000 | Buatan sendiri, transparan              |
| `halaman-proyek.webp`          | Meja kerja: tumpukan buku, laptop, secangkir teh (cat air)                                                   | 800 x 1000 | Buatan sendiri, transparan              |
| `halaman-pencapaian.webp`      | Rak dengan bintang emas dan pita lencana (cat air)                                                           | 800 x 1000 | Buatan sendiri, transparan              |
| `tekstur-kertas.webp`          | Tekstur kertas halus yang bisa diulang (tile)                                                                | 512 x 512  | Buatan sendiri                          |
| `logo-kaka.svg`                | Logo teks "Kaka" bergaya serif dengan bintang kecil                                                          | vektor     | Buatan sendiri                          |

Sampul belakang, tepi halaman, bayangan, bintang latar, kunang-kunang, dan sudut ornamen emas (`SudutEmas`) dibuat dengan CSS/SVG, bukan gambar. Gambar proyek (screenshot) ditaruh di `src/assets/proyek/`.

**Gaya prompt untuk ilustrasi cat air buatan sendiri:** "soft watercolor children's storybook illustration, warm natural palette of forest green, cream, brown and a touch of orange, gentle brush texture, no outlines, transparent background, [objek]". Cek lisensi pemakaian tool yang dipakai.

**Prompt video intro (untuk AI video generator, dipakai Kaka sendiri):** "Cinematic 8-second single continuous camera shot, painterly look. A closed antique hardcover book with ornate gold corner filigree floats in the upper center in front of a swirling oil-painting night sky in the style of a classic post-impressionist starry night: thick impasto strokes, deep blue sky, large yellow stars with halos, crescent moon, a dark cypress tree on the left. The lower third of the frame stays calm painted landscape. The book opens, a paper-cut pop-up village rises from the pages with glowing yellow windows and swirling sky panels, golden sparkles spiral around it, then the camera dives forward into the painting until the whole frame is filled with swirling blue and yellow brushstrokes. No cuts, no text, no people, steady lighting, 16:9, 24 fps." Jangan memasukkan video orang lain sebagai gambar acuan.

## Struktur Data

Semua file di `src/data/` mengekspor array atau objek biasa.

**`profil.js`**: `nama`, `peran` (`{ id, en }`), `tagline` (`{ id, en }`), `tentang` (`{ id, en }`), `lokasi`, `github`, `linkedin`, `email`, `pendidikan` (sekolah, jurusan, tahun), `organisasi`, `bahasa` (daftar `{ nama, tingkat: { id, en } }`).

**`proyek.js`**: `id`, `judul`, `kategori` (`Web` / `Mobile` / `Lainnya`), `ringkasan` (`{ id, en }`), `deskripsi` (`{ id, en }`), `teknologi` (array string), `gambar` (path atau `null`), `linkDemo` (atau `null`), `linkGithub` (atau `null`), `tahun`.

**`sertifikat.js`**: `id`, `nama`, `jenis` (`Lomba` / `Sertifikat`), `penyelenggara`, `tahun`, `keterangan` (`{ id, en }`, boleh kosong), `link` (atau `null`).

**`keahlian.js`**: array kelompok `{ nama: { id, en }, ikon, daftar: [string] }`, hanya 4 kelompok.

**`linimasa.js`**: `waktuVideo`, `daftarLembar`, dan `daftarBab` (lihat contoh di atas).

## Data Awal (dari CV, perlu diverifikasi)

Data di bawah adalah **titik awal dari CV lama**. Item bertanda `TODO` menunggu jawaban Kaka. **Jangan mengarang** angka, tahun, link, atau pencapaian.

**Profil**
- Nama: Kaka Andrea Yahya
- Lokasi: Bandung, Indonesia
- Peran: Software Engineering Student, Web & Mobile Developer
- GitHub: `https://github.com/Kalzz76`
- LinkedIn: `TODO`
- Email publik: `TODO` (di CV tertulis rafliar99@gmail.com, konfirmasi dulu)
- Nomor telepon: **tidak ditampilkan di website** (privasi).
- Pendidikan: SMKN 13 Bandung, Rekayasa Perangkat Lunak. Tahun: `TODO` (CV tertulis 2024-2026, cek ulang).
- Organisasi: IRMA (Ikatan Remaja Masjid)
- Bahasa: Indonesia (aktif), Inggris (dasar, A1), Sunda (dasar)
- Bio singkat (Tentang): `TODO` Kaka menulis 2 sampai 3 kalimat sendiri.

**Proyek** (semua `TODO` untuk gambar, link demo, link GitHub, dan tahun)
1. Website Mapping Klinik Pratama Bumi Sehat Bahagia. Kategori Web, Laravel. Sistem informasi layanan kesehatan dan pemetaan.
2. Classio, sistem manajemen sekolah terintegrasi. Kategori Web, teknologi `TODO` (CV tertulis C#, pastikan ASP.NET atau Blazor).
3. Sistem Peminjaman Perpustakaan. Kategori Web, Laravel. Aplikasi manajemen sirkulasi buku.
4. `TODO` proyek terbaru sejak CV terakhir dibuat.

**Pencapaian dan sertifikat** (tahun dan link `TODO`)
- Lomba: Jagoan Hosting Infra Competition (JHIC) 2025, Semi-Finalist. Samsung Innovation Campus Batch 6 (2024/2025), peserta.
- Sertifikat: AWS Academy Cloud Foundations. AWS Academy Architecting. Dicoding Pemrograman Dart (Dasar).
- `TODO` lomba dan sertifikat terbaru.

**Keahlian** (4 kelompok, hanya yang ada di CV)
- Bahasa Pemrograman: HTML, CSS, JavaScript, PHP, C#, Dart
- Framework: Laravel, Flutter. `TODO` konfirmasi apakah React dan Tailwind CSS sudah boleh dicantumkan.
- Database & Cloud: MySQL, AWS (Cloud Foundations, Architecting)
- Desain: Figma, Canva

**Perbaikan ejaan** dari CV lama: "Pemrograman" (bukan Pemorgraman/Pemograman), "Batch" (bukan Bach), "AWS" (bukan Aws), "PHP" (bukan php).

## Keamanan dan Privasi

- Nomor HP, alamat rumah, dan data pribadi sensitif tidak boleh muncul di kode atau teks website.
- `VITE_WEB3FORMS_KEY` ada di `.env` (tidak di-commit) dan di environment Cloudflare Pages. `.env.example` hanya berisi nama variabel.
- Semua link eksternal memakai `target="_blank"` dan `rel="noopener noreferrer"`.
- Tidak ada pelacakan pihak ketiga selain Cloudflare Web Analytics (opsional).
- Jangan menampilkan error teknis ke pengunjung.

## Performa, Aksesibilitas, dan SEO

- Target Lighthouse mobile (Mode Halaman): Performance minimal 85, Accessibility minimal 95, SEO minimal 95. Mode Buku diukur pada desktop dengan target Performance minimal 75 karena ada video.
- **Video hanya dimuat di Mode Buku.** Di HP dan tablet sentuh, tidak ada permintaan ke `intro.mp4`. Ukuran video di bawah 8 MB. Cloudflare Pages membatasi satu file maksimal 25 MiB.
- Di Mode Buku, hanya latar, poster, dan ilustrasi spread 1 dan 2 yang `loading="eager"`, sisanya `loading="lazy"`. Audio tidak dimuat sebelum suara dinyalakan.
- Gunakan `will-change: transform` hanya pada lembar yang sedang bergerak. Bayangan halaman dibuat dengan gradien CSS.
- Semua gambar punya `alt` bermakna. Gambar dekoratif memakai `alt=""` dan `aria-hidden="true"`. Video diberi `aria-hidden="true"` karena dekoratif.
- Semua konten tetap ada di DOM (aman untuk SEO dan pembaca layar), dan halaman yang tidak terlihat diberi `inert` dan `aria-hidden`.
- Semua bisa dioperasikan dengan keyboard, fokus terlihat jelas (`focus:outline` warna `bintang` di latar gelap, `hutan` di halaman terang), tombol ikon punya `aria-label`.
- Kontras: `hutan` atau `tinta` di atas `kertas` atau `pasir`, `kertas` di atas `malam`. Jangan memakai `bintang` atau `jingga` untuk teks kecil di latar terang.
- **Mobile first.** Mode Halaman harus nyaman di lebar 360 px.
- `index.html`: `title`, `meta description`, Open Graph (`og:image` memakai `og-image.png`), `theme-color` (`#0d1136`), dan favicon.

## Deploy ke Cloudflare Pages

1. Push repo ke GitHub (akun Kalzz76).
2. Di Cloudflare Pages: Create project, hubungkan repo.
3. Build command `npm run build`, output directory `dist`.
4. Environment variables: `NODE_VERSION` = `20`, `VITE_WEB3FORMS_KEY`.
5. Setiap `git push` ke `main` otomatis ter-deploy. Hasil awal `namaproject.pages.dev`.
6. Domain sendiri bisa ditambahkan belakangan lewat Custom domains.
7. Setelah deploy, uji scrub video di situs asli (bukan hanya `localhost`): Chrome, Firefox, dan Safari desktop.

## Urutan Pengerjaan Modul

Kerjakan bertahap. Setelah tiap tahap, pastikan `npm run dev` jalan tanpa error dan `npm run build` berhasil.

1. **Fondasi**: project Vite + React, Tailwind (token warna, font, `shadow-lembut`), `index.css` (font, keyframes, aturan `backface-visibility`), struktur folder, `docs/CREDITS.md`.
2. **Bahasa**: `KonteksBahasa`, `id.json`, `en.json`, `TombolBahasa`, update `lang` dan `title`.
3. **Mode Halaman lebih dulu**: `Navbar`, `IsiHero` dengan poster placeholder, lima komponen `isi/` dengan data dan placeholder `ilustrasi/`, `PembatasGelombang`, `KartuKertas`, `TombolPil`, `Modal`, `Footer`. Setelah tahap ini website sudah bisa dibaca penuh dan siap dipakai di HP.
4. **Konten inti**: Proyek (filter, pagination, modal), Pencapaian (tab, pagination), Keahlian (4 kartu), Tentang.
5. **Form kontak**: validasi, honeypot, Web3Forms, pesan error dan sukses, alternatif `mailto:`.
6. **Latar dan bab malam**: `Latar` dengan lukisan latar (placeholder gradien dulu), `Bintang`, `KunangKunang`, bab malam di Mode Halaman, `IntroSampul`.
7. **Mode Buku tanpa video**: `useModeBuku`, `linimasa.js`, `Buku`, `Lembar`, `HalamanDasar`, kamera latar, urutan `zIndex`, bayangan halaman, `inert`, navigasi menggulung ke bab, hash, keyboard, `PenandaBab`. Pada tahap ini bagian intro memakai poster zoom (perilaku cadangan).
8. **Intro video**: pasang `IntroVideo` dengan `intro.mp4` dan `intro-poster.jpg` asli, atur peralihan ke buku (0.27 sampai 0.31), uji scrub di Chrome, Firefox, Safari.
9. **Ilustrasi asli dan suara**: ganti placeholder dengan gambar asli (Van Gogh dan cat air), lalu `useSuara`, `TombolSuara`, musik, efek.
10. **Penutup**: aksesibilitas, uji Safari dan perangkat asli, optimasi gambar dan video, SEO, deploy, analytics (opsional).

## Catatan Penting

- Semua konten ditulis di `src/data/` dan `src/i18n/`, jangan di dalam komponen. Teks di kedua bahasa harus selalu lengkap.
- Kalau butuh ilustrasi, video, audio, atau foto yang belum ada, **pakai placeholder dan beri tahu**.
- Jangan commit file mentah besar (video asli, PSD, audio mentah, gambar resolusi asli ratusan MB) atau `.env`.
- Commit kecil dan jelas, contoh `feat: tambah lembar buku`.
- **Belum dikerjakan (ditunda, jangan ditambahkan kecuali diminta):** halaman blog, CMS atau admin, login, database, komentar, mode terang/gelap tambahan, bahasa ketiga, PWA dan service worker, React Router dan halaman terpisah per proyek, game mini, integrasi API GitHub otomatis, chatbot, grafik statistik skill berbentuk persen, mode buku 3D untuk HP dan tablet sentuh, efek pusaran langit dengan filter SVG atau WebGL, pop-up desa 3D berlapis dengan kode (sudah ada di video), parallax ilustrasi.