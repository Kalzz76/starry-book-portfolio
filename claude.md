# Portofolio Kaka Andrea Yahya — Konsep: Rumah Angker Halloween

Website portofolio pribadi milik **Kaka Andrea Yahya**, siswa SMKN 13 Bandung jurusan Rekayasa Perangkat Lunak (RPL) yang fokus pada pengembangan web dan mobile. Dibangun dengan **Vite + React + Tailwind CSS**, berupa **situs statis** tanpa backend dan tanpa database, dihosting gratis di **Cloudflare Pages**. Tidak ada login dan tidak ada halaman admin. Semua konten diubah lewat file data di `src/data/` dan `src/i18n/`.

> Cara memakai file ini: taruh di root folder proyek dengan nama `CLAUDE.md`.

## Konsep: Rumah Angker Halloween

Website adalah **sebuah rumah tua di malam Halloween**. Pengunjung "masuk" ke rumah dengan scroll biasa, dan setiap bab adalah **satu ruangan** di dalamnya: ruang tamu, rak toples ramuan, ruang bawah tanah, ruang piala, dan pintu depan. Latar di belakang semua ruangan adalah langit malam: bulan purnama, bintang, kabut tipis, kunang-kunang, dan siluet rumah tua.

Suasana yang dikejar adalah **seram tapi ramah (spooky-cute)**, modern, dan bersih. Tanpa gore, tanpa darah realistis, tanpa jump scare, tanpa suara mengagetkan.

Empat mekanik khas (semuanya dibuat dengan CSS, SVG, canvas 2D, dan framer-motion, tanpa 3D dan tanpa video):

1. **Ruangan** (`Ruangan`): kartu gelap bergaya kaca buram dengan tepi berpendar oranye yang berkedip pelan, sudut berhias sarang laba-laba (SVG buatan sendiri), dan bayangan dalam.
2. **Senter Gaib** (`SenterGaib`): teks ringkasan proyek hampir tidak terlihat, lalu **menyala hanya di sekitar kursor** seperti disorot senter, dan padam perlahan setelah kursor pergi.
3. **Transisi Kelelawar** (`TransisiKelelawar`): saat pengunjung klik menu navigasi, kawanan kelelawar SVG terbang melintasi layar sambil kabut gelap menutupinya, halaman melompat ke ruangan tujuan, lalu kabut dan kelelawar menghilang.
4. **Percikan Labu** (`PercikanLabu`): saat judul sebuah bab masuk layar, muncul ledakan percikan oranye dan wisp hijau kecil di sekitarnya, disertai kilatan tipis pada judul (sekali, lembut).

- **Satu layout untuk semua perangkat.** Scroll biasa.
- **Bahasa**: dwibahasa, Indonesia (default) dan Inggris.
- **Animasi level penuh**, dengan semua efek bisa dimatikan (reduced-motion dan tombol).
- **Suara**: ambience malam yang lembut dan efek kecil, **default mati**.
- **Target pengunjung**: calon pemberi kerja magang, juri lomba, guru, dan kolaborator. **Keterbacaan lebih penting daripada efek.** Karena itu ada tombol "Nyalakan Semua Senter" yang selalu tersedia (lihat bagian Senter Gaib).

### Aturan Orisinalitas (WAJIB)
- Dilarang menyalin website atau karya orang lain: ilustrasi, karakter, logo, teks, dan tata letak harus buatan sendiri.
- Dilarang memakai nama, logo, karakter, atau gaya visual khas franchise berhak cipta (contoh: The Nightmare Before Christmas, Jack Skellington, The Addams Family, Hocus Pocus, Hotel Transylvania, Casper, Scooby-Doo, Ghostbusters, Stranger Things, Scream, Halloween (film), Pokemon). Motif umum seperti labu jack-o'-lantern, hantu seprai, kelelawar, kucing hitam, sarang laba-laba, bulan purnama, dan rumah tua adalah motif budaya yang bebas dipakai, tetapi **digambar sendiri sebagai SVG**.
- Audio dan font harus buatan sendiri atau berlisensi bebas (CC0/MIT/OFL), dicatat di `docs/CREDITS.md`.

## URUTAN KERJA (BACA DULU SEBELUM MENGERJAKAN APA PUN)

1. Baca file ini sampai selesai.
2. Kalau ada folder `referensi/` berisi desain (screenshot atau HTML), CV lama, atau kode lama buatan sendiri, baca untuk memahami selera visual dan gaya penulisan kode.
3. Baru tulis kode, mengikuti ATURAN PENULISAN KODE di bawah.

Kalau ada perbedaan antara file lain dan file ini, **file ini yang jadi acuan final**. Kalau ada bagian bertanda `TODO` atau data yang belum jelas, **tanya dulu**, jangan mengarang.

## ATURAN PENULISAN KODE (WAJIB DIPATUHI)

Kode di project ini harus sederhana dan bersih, terlihat ditulis manual oleh pelajar, bukan hasil generate.

1. **DILARANG menulis komentar di dalam kode.** Tidak ada `//`, `/* */`, `{/* */}` di JSX, dan komentar di CSS atau JSON.
2. **Kode harus sederhana.** Tidak boleh ada pola arsitektur rumit: tanpa Redux/Zustand, tanpa React Query, tanpa `useReducer`, tanpa higher-order component, tanpa render props, tanpa class component. State cukup `useState`, `useEffect`, `useRef`, dan `useContext` untuk bahasa, suara, senter, dan transisi. `requestAnimationFrame` dan canvas **hanya boleh dipakai di folder `components/efek/`**. Custom hook yang diizinkan hanya `useSuara`.
3. **Hindari sintaks yang terlihat canggih**: `reduce` bertingkat, chaining `map().filter().map()` panjang, ternary bersarang, optional chaining bertumpuk, destructuring bertingkat, closure kompleks, `&&` berantai di JSX. Pakai `if`, `for`, `map` sederhana, dan fungsi biasa dengan nama jelas.
4. **Yang penting jalan dan tidak error.** Utamakan kode yang lurus dan mudah dibaca daripada kode yang pintar.
5. Nama variabel, fungsi, dan state boleh campur Indonesia/Inggris (`daftarProyek`, `bukaModal`, `bahasaAktif`, `handleKirim`). Nama komponen memakai PascalCase, satu komponen per file.
6. Semua teks untuk pengunjung (label, tombol, pesan error, pesan sukses) **tidak boleh ditulis langsung di komponen**. Ambil dari kamus bahasa lewat fungsi `t('kunci')`, dan tulis di `id.json` dan `en.json`.
7. Konten proyek, sertifikat, dan skill ditulis di `src/data/`, bukan di dalam komponen. Warna kabut per bab ditulis di `src/data/ruangan.js`.
8. Styling memakai **Tailwind CSS**. Warna memakai token tema, jangan menulis kode hex langsung di komponen. Hex hanya boleh di `tailwind.config.js`, `src/data/ruangan.js`, dan blok `:root` di `src/styles/index.css` (sebagai variabel `--warna-*` yang dipakai CSS buatan sendiri). CSS buatan sendiri hanya untuk hal yang tidak bisa dengan Tailwind (font, `@keyframes`, tekstur kartu, mask senter gaib).
9. Library tambahan yang diizinkan hanya: **framer-motion** (animasi) dan **howler** (suara). Canvas 2D dan IntersectionObserver adalah API bawaan browser dan boleh dipakai. Library lain **tanya dulu**.
10. Fitur yang tidak ada di file ini tidak boleh ditambahkan hanya karena terpikir bagus. Kalau ragu, tanya dulu.
11. `localStorage` dan `window` selalu dibungkus pemeriksaan aman (`try ... catch` untuk `localStorage`).
12. Jangan hardcode secret. Kunci layanan form dibaca dari `import.meta.env.VITE_WEB3FORMS_KEY`.
13. Teks yang **tampil di layar** boleh berisi tanda kutip atau simbol apa pun. Larangan komentar hanya berlaku untuk **kode sumber**.

Aturan ini berlaku untuk semua perubahan berikutnya, tanpa perlu diingatkan lagi.

## Tech Stack

- **Build tool**: Vite. **UI**: React 18 (JavaScript/JSX, bukan TypeScript).
- **Styling**: Tailwind CSS 3 lewat npm, token warna di `tailwind.config.js`.
- **Animasi**: framer-motion (`motion`, `AnimatePresence`, `whileInView`), CSS `@keyframes`, dan canvas 2D untuk percikan labu.
- **Suara**: howler.
- **Ikon dan hiasan**: SVG inline buatan sendiri (labu, hantu, kelelawar, bulan, sarang laba-laba, lentera, rumah tua). Tanpa library ikon.
- **Tekstur**: kartu gelap, noise, dan vignette dibuat dengan CSS (gradien, noise SVG sebagai data URI, inset box-shadow). Tanpa file gambar.
- **Font** (Google Fonts, OFL, `display=swap`): **Pirata One** (judul bab, nama, dan tombol), **Inter** (isi dan paragraf), **Courier Prime** (catatan pinggir, label, badge, dan kutipan, nuansa catatan mesin tik). Boleh diganti kalau Kaka punya selera lain, asal lisensinya OFL dan dicatat di `docs/CREDITS.md`.
- **Form kontak**: Web3Forms, dipanggil dengan `fetch`. **Hosting**: Cloudflare Pages.

Perintah: `npm install`, `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`.

**Catatan audio:** browser memblokir autoplay sebelum pengunjung berinteraksi, jadi musik hanya mulai setelah tombol suara ditekan.

## Struktur Project

```
portfolio-kaka/
├── public/
│   ├── audio/                 malam-loop.mp3, sfx-kelelawar.mp3, sfx-percik.mp3, sfx-senter.mp3, sfx-ketuk.mp3
│   ├── cv/                    CV_Kaka_ID.pdf, CV_Kaka_EN.pdf
│   ├── favicon.png
│   └── og-image.png           1200x630
├── src/
│   ├── assets/                logo-kaka.svg, potret-kaka.webp (opsional), assets/proyek/
│   ├── components/
│   │   ├── efek/              LatarMalam, PercikanLabu, TransisiKelelawar, RumahAngker
│   │   ├── dekorasi/          SudutLaba, PemisahHalloween, SimbolHalloween, MaskotKategori, StempelLabu, HurufAwal, Kelelawar
│   │   ├── sections/          Hero, Tentang, Keahlian, Proyek, Pencapaian, Kontak
│   │   └── ui/                Navbar, Ruangan, SenterGaib, TombolLabu, KartuBerkas, ToplesTeknologi, KartuBenda, Medali, Modal, TombolPlakat, TombolBahasa, TombolSuara, Ikon, Footer
│   ├── data/                  proyek.js, sertifikat.js, keahlian.js, profil.js, bab.js, ruangan.js
│   ├── i18n/                  id.json, en.json, KonteksBahasa.jsx
│   ├── context/               KonteksSenter.jsx, KonteksTransisi.jsx
│   ├── hooks/                 useSuara.js
│   ├── styles/                index.css
│   ├── App.jsx
│   └── main.jsx
├── docs/CREDITS.md
├── referensi/
├── .env.example               VITE_WEB3FORMS_KEY=
├── tailwind.config.js
└── vite.config.js
```

## Akses dan Pengelolaan Konten

- Tidak ada login, role, atau admin. Memperbarui konten cukup mengedit `src/data/` dan `src/i18n/`, lalu `git push`.
- Tombol unduh CV mengikuti bahasa aktif: `CV_Kaka_ID.pdf` atau `CV_Kaka_EN.pdf`.

## Palet Warna dan Tampilan

Token di `tailwind.config.js` bagian `theme.extend.colors`.

| Token           | Hex       | Penggunaan                                                |
| --------------- | --------- | --------------------------------------------------------- |
| `malamhitam`    | `#0b0a12` | Latar utama, navbar, ruang bawah tanah                    |
| `ungumalam`     | `#1a1030` | Latar kartu ruangan                                       |
| `kabutungu`     | `#2a1a4a` | Badge, tab tidak aktif, kabut                             |
| `ungusihir`     | `#8b5cf6` | Aksen sihir, garis, toples Database & Cloud               |
| `labu`          | `#ff7a1a` | Warna utama: judul, tombol, tepi berpendar                |
| `labutua`       | `#c2570c` | Bayangan dan garis labu                                   |
| `hijauhantu`    | `#6fd36b` | Wisp, status, catatan pinggir, kategori Web               |
| `biruhantu`     | `#4fb7d6` | Aksen dingin, toples Desain                               |
| `tulang`        | `#ece4d0` | Teks utama di atas latar gelap                            |
| `abukabut`      | `#a49fb8` | Teks pendukung dan placeholder                            |
| `darah`         | `#b3202e` | Stempel, pesan error (hanya warna, tanpa efek darah)      |
| `cahayasenter`  | `#fff1c2` | Warna tulisan saat senter gaib menyala                    |
| `bulan`         | `#f3e9c6` | Bulan purnama dan cahaya bulan                            |

| Elemen                         | Kelas Tailwind                                                                                              |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Latar halaman                  | `bg-malamhitam text-tulang font-isi` (ditimpa `LatarMalam`)                                                 |
| Navbar                         | `fixed top-0 inset-x-0 z-50 bg-malamhitam/90 backdrop-blur border-b border-labu/40`                         |
| Link navbar                    | `font-aksen text-sm tracking-[0.15em] text-tulang hover:text-labu`, aktif `text-labu`                       |
| Kartu ruangan (`Ruangan`)      | `relative bg-ungumalam text-tulang rounded-lg shadow-ruangan kartu-gelap p-6 md:p-10`                       |
| Ruang bawah tanah              | `relative bg-malamhitam text-tulang rounded-lg shadow-ruangan lantai-gelap p-6 md:p-10`                     |
| Tombol utama (`TombolPlakat`)  | `bg-labu text-malamhitam font-judul text-sm uppercase tracking-widest px-6 py-2.5 border-2 border-labu rounded-md hover:bg-tulang hover:border-tulang` |
| Tombol sekunder                | `border-2 border-labu text-labu font-judul text-sm uppercase tracking-widest px-6 py-2.5 rounded-md hover:bg-labu hover:text-malamhitam` |
| Judul bab                      | `font-judul text-labu text-4xl md:text-5xl`                                                                 |
| Catatan pinggir                | `font-aksen italic text-hijauhantu text-base`                                                               |
| Badge bahan                    | `bg-kabutungu text-tulang border border-ungusihir/60 rounded-md px-2 py-0.5 text-sm font-aksen`             |
| Tab aktif / tidak aktif        | aktif `bg-labu text-malamhitam`, tidak aktif `bg-kabutungu text-tulang`, keduanya `font-judul text-sm uppercase tracking-widest px-4 py-1.5 border-2 border-labu/70 rounded-md` |
| Kolom input                    | `bg-malamhitam/60 text-tulang border-2 border-ungusihir/60 rounded-md px-3 py-2 font-isi focus:border-labu outline-none` |
| Pesan error                    | `bg-darah/20 text-tulang border border-darah rounded-md px-3 py-2`                                          |
| Modal                          | overlay `bg-malamhitam/90 backdrop-blur-sm`, kotak `kartu-gelap max-w-2xl`                                  |

`shadow-ruangan` = `0 10px 30px rgba(0, 0, 0, 0.6)`. `shadow-cahayalabu` = `0 0 18px rgba(255, 122, 26, 0.35)`. Sudut membulat sedang (`rounded-md` sampai `rounded-lg`) supaya terasa modern.

**Kelas CSS buatan sendiri** di `index.css`:
- `.kartu-gelap`: gradien dari `ungumalam` ke `malamhitam`, satu noise SVG halus (data URI `feTurbulence`), `box-shadow` inset tipis berwarna `labu`, dan animasi `@keyframes kelip-labu` pada pendar tepi (opasitas 0.7 sampai 1, 2 sampai 4 detik, tiap kartu tidak serempak).
- `.lantai-gelap`: gradien lebih gelap dengan vignette di tepi dan noise halus, supaya senter gaib terlihat jelas.
- Semua warna di CSS memakai variabel `--warna-*`, bukan hex langsung.

### Tipografi
- `font-judul` = Pirata One (hanya judul bab, nama, dan tombol), `font-isi` = Inter, `font-aksen` = Courier Prime (catatan pinggir, label, badge, kutipan).
- Teks isi minimal `text-base`, paragraf pembuka `text-lg`.
- `HurufAwal`: huruf pertama paragraf pembuka Tentang, besar 3 sampai 4 baris, berwarna `labu`, di kotak bergaris `labu/50`.
- Jangan menaruh `ungusihir` sebagai teks kecil di atas latar gelap (kontras kurang). Gunakan `tulang` atau `labu`.

## Latar Malam (`LatarMalam`)

Lapisan tetap `fixed inset-0 -z-10`, dari belakang ke depan:
1. Gradien `malamhitam` ke `ungumalam` ke arah bawah.
2. **Bintang**: 70 titik kecil di desktop, 35 di mobile, dibuat **sekali** saat dimuat (`useState` dengan fungsi awal berisi perulangan `for`), berkedip dengan `@keyframes berkedip` (2 sampai 5 detik).
3. **Bulan purnama**: SVG di kanan atas dengan cahaya lembut (radial gradient, tanpa `filter: blur`), statis.
4. **Kabut**: dua lapisan gradien radial lebar yang bergeser pelan horizontal dengan `@keyframes kabut` (30 sampai 50 detik), hanya `transform`.
5. **Kunang-kunang**: 24 titik di desktop dan 12 di mobile, warna `labu` dan `hijauhantu`, melayang pelan dengan `@keyframes melayang` (10 sampai 20 detik).
6. **Siluet rumah tua dan pohon**: satu SVG di dasar layar, opasitas rendah, jendela kecilnya berkedip hangat dengan `@keyframes jendela`.
7. **Dua kelelawar CSS**: melintas sangat jarang (animasi 25 dan 40 detik, banyak jeda), sebagai kejutan kecil.

Reduced-motion: matikan kedip, kabut, melayang, jendela, dan kelelawar (semuanya statis).

## Senter Gaib (`SenterGaib`)

Dipakai **hanya** untuk **ringkasan proyek di kartu berkas** (bab Proyek di ruang bawah tanah). Tidak dipakai untuk judul, badge, tombol, link, atau teks yang wajib dibaca recruiter (nama, kontak, CV).

### Struktur
Satu `div` yang bisa difokus (`tabIndex={0}`) berisi **dua lapisan teks yang sama**:
- **Lapisan dasar** (`.senter-dasar`): warna `tulang` dengan opasitas sangat rendah (sekitar 0.14), supaya samar tapi masih ada bentuk hurufnya. Ini teks asli yang dibaca pembaca layar.
- **Lapisan cahaya** (`.senter-cahaya`): teks yang sama (`aria-hidden="true"`), `position: absolute`, warna `cahayasenter` dengan `text-shadow` bercahaya, dan **mask radial** yang mengikuti kursor.

### CSS inti (di `index.css`)

```css
.senter-gaib {
  position: relative;
}

.senter-dasar {
  color: var(--warna-tulang);
  opacity: 0.14;
}

.senter-cahaya {
  position: absolute;
  inset: 0;
  color: var(--warna-cahayasenter);
  text-shadow: 0 0 8px var(--warna-labu);
  pointer-events: none;
  opacity: 0;
  transition: opacity 1.5s ease;
  -webkit-mask-image: radial-gradient(circle 110px at var(--x, -300px) var(--y, -300px), #000 0%, transparent 100%);
  mask-image: radial-gradient(circle 110px at var(--x, -300px) var(--y, -300px), #000 0%, transparent 100%);
}

.senter-gaib.menyala .senter-cahaya {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.senter-gaib.semua .senter-dasar {
  opacity: 1;
}

.senter-gaib.semua .senter-cahaya {
  opacity: 0;
}
```

(`#000` dalam mask hanya penanda hitam penuh untuk mask, bukan warna tampilan.)

### Komponen

```jsx
import { useRef, useState, useContext } from 'react'
import { KonteksSenter } from '../../context/KonteksSenter.jsx'

export default function SenterGaib({ children }) {
  const kotakRef = useRef(null)
  const [menyala, setMenyala] = useState(false)
  const { terangSemua, mainkanSenter } = useContext(KonteksSenter)

  function handleGerak(e) {
    const kotak = kotakRef.current
    if (!kotak) {
      return
    }
    const area = kotak.getBoundingClientRect()
    kotak.style.setProperty('--x', e.clientX - area.left + 'px')
    kotak.style.setProperty('--y', e.clientY - area.top + 'px')
  }

  function handleMasuk() {
    setMenyala(true)
    mainkanSenter()
  }

  function handleKeluar() {
    setMenyala(false)
  }

  let kelas = 'senter-gaib'
  if (menyala) {
    kelas = kelas + ' menyala'
  }
  if (terangSemua) {
    kelas = kelas + ' semua'
  }

  return (
    <div
      ref={kotakRef}
      className={kelas}
      tabIndex={0}
      onPointerMove={handleGerak}
      onPointerEnter={handleMasuk}
      onPointerLeave={handleKeluar}
      onFocus={handleMasuk}
      onBlur={handleKeluar}
    >
      <p className="senter-dasar">{children}</p>
      <p className="senter-cahaya" aria-hidden="true">{children}</p>
    </div>
  )
}
```

`mainkanSenter` memainkan `sfx-senter` (klik halus) **hanya sekali per blok** per kunjungan (dicatat di dalam konteks), agar tidak mengganggu.

### Perilaku dan jalan keluar (WAJIB, supaya tidak menyulitkan pembaca)
- **Kursor (mouse/trackpad)**: tulisan menyala dalam lingkaran sekitar 110 px di bawah kursor, dan **padam perlahan** (1.5 detik) setelah kursor pergi.
- **Layar sentuh** (`(pointer: coarse)`): tidak ada kursor, jadi tiap blok **menyala penuh otomatis** satu kali saat berada di tengah layar (IntersectionObserver, ambang 0.6), dan tetap menyala sesudahnya. Mengetuk blok juga menyalakannya.
- **Keyboard**: fokus pada blok (Tab) menyalakannya penuh.
- **Tombol Nyalakan Semua Senter** (`TombolLabu`): tombol bulat berikon labu menyala di navbar. Menyetel `terangSemua` untuk seluruh situs (lapisan dasar menjadi opasitas penuh, tanpa glow). Pilihan disimpan di `localStorage` kunci `senterTerang`. Tombol punya `aria-pressed` dan `aria-label`.
- **prefers-reduced-motion**: `terangSemua` otomatis aktif.
- Di atas kartu proyek ada petunjuk kecil: "Sorot dengan kursor untuk membaca tulisan gaib" (di sentuh: "Tulisan akan menyala saat kamu menggulir ke sini").
- Saat `Modal` detail proyek dibuka, teks lengkap **menyala berurutan sendiri** (tiap paragraf fade-in dengan glow, jeda 0.4 detik) lalu **menetap terbaca penuh** tanpa perlu kursor.

## Transisi Kelelawar dan Percikan Labu

### `TransisiKelelawar` (saat klik menu)
Overlay penuh layar (`fixed inset-0 z-[60] pointer-events-none`, `aria-hidden="true"`). Tiga tahap dikelola di `KonteksTransisi` (`diam`, `menutup`, `membuka`) dengan `motion.div`:
1. **Menutup** (0.6 detik, `easeIn`): lapisan kabut gelap (SVG dengan tepi atas bergelombang seperti awan) naik dari bawah menutupi layar, sementara **kawanan kelelawar SVG** (14 di desktop, 8 di mobile) terbang melintasi layar dari kiri bawah ke kanan atas dengan jeda acak. Warna kabut dari `src/data/ruangan.js` sesuai bab tujuan. `sfx-kelelawar` dimainkan pelan.
2. Saat selesai menutup (`onAnimationComplete`): halaman melompat ke bab tujuan (`scrollIntoView` tanpa animasi), hash diubah dengan `history.replaceState`.
3. **Membuka** (0.7 detik, `easeOut`): kabut naik keluar layar, kelelawar menghilang, overlay kembali `diam`.
- Pemanggilan lewat fungsi `mulaiTransisi(hash)` dari konteks, dipakai Navbar, tombol Hero, dan tombol kembali ke atas.
- **Scroll biasa (wheel/sentuh) tidak memicu overlay.** Hanya klik navigasi.
- Hanya `transform` dan `opacity` yang dianimasikan.
- Reduced-motion: tanpa overlay, pakai scroll halus biasa.

```js
export const warnaRuangan = {
  hero: '#2a1a4a',
  tentang: '#c2570c',
  keahlian: '#2e6b3a',
  proyek: '#4a2a8a',
  pencapaian: '#ff7a1a',
  kontak: '#b3202e'
}
```

### `PercikanLabu` (saat judul bab masuk layar)
- Komponen canvas 2D absolut (`pointer-events-none`, `aria-hidden`) di belakang tiap judul bab. Saat judul masuk viewport (IntersectionObserver, ambang 0.6, **sekali saja**), muncul **36 partikel** di desktop dan 18 di mobile dari tengah judul.
- Tiap partikel: kecepatan acak ke segala arah, gravitasi sangat kecil (percikan sedikit naik seperti bara), hidup 1.6 detik, memudar, berbentuk titik bercahaya atau bintang empat sudut kecil, warna acak dari `labu`, `tulang`, dan `hijauhantu`.
- Judul mendapat **satu kilatan lembut** (naik lalu turun opasitas cahaya di belakang judul, durasi minimal 0.4 detik, **sekali saja**, tidak berkedip cepat).
- Digambar dengan `requestAnimationFrame` yang **berhenti otomatis** saat semua partikel mati. Ukuran canvas mengikuti pembungkus judul. `sfx-percik` dimainkan pelan.
- Juga dipicu satu kali saat pesan kontak berhasil terkirim (ledakan lebih besar).
- Reduced-motion: tidak ada ledakan dan tidak ada kilatan.

## Navigasi
- **Navbar**: logo "Kaka" bergaya Pirata One dengan ikon labu kecil. Menu: **Home, About, Skills, Projects, Achievements, Contact** (label ikut bahasa), hash `#hero`, `#tentang`, `#keahlian`, `#proyek`, `#pencapaian`, `#kontak`. Kanan: `TombolLabu`, `TombolBahasa`, `TombolSuara`, dan hamburger (mobile). **Di mobile semua tombol tampil bersamaan di lebar 360 px.**
- Klik menu memicu `TransisiKelelawar`. Link dengan hash yang dibuka langsung dari URL melompat tanpa overlay.
- Bab aktif ditandai dengan IntersectionObserver (ambang 0.5). `scroll-margin-top` sebesar tinggi navbar.

## Isi Tiap Bab

Setiap bab diawali `PemisahHalloween` (garis tipis `labu/50` dengan ikon kecil di tengah, misalnya labu, bulan sabit, atau kelelawar) dan judul dengan `PercikanLabu`. Elemen muncul dengan `whileInView` (opacity 0 ke 1, naik 24 px, 0.7 detik, sekali).

### 1. Gerbang (Hero) — `#hero`
Layar penuh. Di belakang teks: **`RumahAngker`** besar (SVG siluet rumah tua di bawah bulan purnama, jendela berkedip hangat, pohon gundul di kiri, kucing hitam kecil di atas pagar). Di tengah: label kecil "PENGEMBANG WEB & MOBILE · BANDUNG", judul "Kaka Andrea Yahya" (`font-judul text-labu`), peran "Software Engineering Student", tagline satu kalimat, dua tombol: **Ketuk Pintu** (memicu transisi kelelawar ke `#tentang`) dan **Unduh Gulungan CV** (tulisan tombol diatur lewat i18n). Petunjuk "Gulir untuk masuk" dengan panah bergerak pelan. Di mobile siluet rumah mengecil dan berada di belakang teks dengan opasitas rendah.

### 2. Ruang Tamu (Tentang) — `#tentang`
Satu kartu ruangan besar dengan **catatan pinggir**: coretan kecil `font-aksen italic` di tepi (contoh "diuji di Bandung", bisa diganti Kaka lewat i18n).
- Kiri: potret di dalam **bingkai potret oval** bergaris `labu` dengan sudut sarang laba-laba (`potret-kaka.webp`, kalau tidak ada tampilkan siluet hantu kecil dengan huruf "K").
- Kanan: nama, "Gelar: Pengembang Web & Mobile", paragraf bio dengan `HurufAwal`.
- Di bawah: **empat kartu benda** (`KartuBenda`): **Labu** (Asal: Bandung), **Lilin** (Akademi: SMKN 13 Bandung, RPL), **Kabut** (Organisasi: IRMA), **Kelelawar** (Bahasa: Indonesia aktif, Inggris dasar, Sunda dasar). Tiap kartu punya ikon benda SVG.
- **Dilarang** menampilkan level, statistik, atau angka kemampuan karangan.

### 3. Rak Toples (Keahlian) — `#keahlian`
Tampilan seperti **rak toples ramuan di gudang rumah angker**. Empat rak berwarna, tiap rak berisi **toples teknologi** (`ToplesTeknologi`): toples SVG berisi cairan berwarna rak yang bergoyang pelan, **simbol 2 huruf** besar di label (contoh `Js`), nama teknologi kecil di bawahnya, dan nomor urut kecil di pojok.

| Rak (judul kelompok)               | Isi                                  | Warna cairan   |
| ---------------------------------- | ------------------------------------ | -------------- |
| Bahasa Pemrograman                 | HTML, CSS, JavaScript, PHP, C#, Dart | `labu`         |
| Framework                          | Laravel, Flutter                     | `hijauhantu`   |
| Database & Cloud                   | MySQL, AWS                           | `ungusihir`    |
| Desain                             | Figma, Canva                         | `biruhantu`    |

Saat hover, toples terangkat dan bersinar warna rak-nya. **Dilarang persentase, bar, atau level.** Nama teknologi asli selalu tampil.

### 4. Ruang Bawah Tanah (Proyek) — `#proyek`
Kartu **ruang bawah tanah** (`lantai-gelap`, agar senter gaib terlihat jelas). Di atas: judul, petunjuk senter, filter pil **Semua, Web, Mobile, Lainnya**. Grid 1 kolom di HP, 2 di tablet, 3 di desktop. Semua proyek tampil (tanpa pagination).

`KartuBerkas`:
- `MaskotKategori` (SVG) berwarna sesuai kategori: Web berupa hantu `hijauhantu`, Mobile berupa labu `labu`, Lainnya berupa kelelawar `ungusihir`. Mengambang pelan naik turun.
- Label "Berkas No. n" (`font-aksen`), **judul proyek tampil jelas** berwarna `labu`.
- **Ringkasan dalam `SenterGaib`.**
- Baris "Bahan:" berisi badge teknologi (tampil jelas).
- Stempel miring "TERPECAHKAN" berwarna `darah` kalau `status` proyek `Selesai`.
- Tombol **Buka Berkas** membuka `Modal` "Berkas Kasus": gambar proyek, deskripsi lengkap (menyala berurutan lalu terbaca penuh), daftar bahan, tombol link demo dan GitHub (hanya kalau ada), `StempelLabu` kecil. Ditutup lewat tombol Tutup, klik di luar kotak, atau `Esc`, fokus kembali ke pemicu.

### 5. Ruang Piala (Pencapaian) — `#pencapaian`
Kartu ruangan dengan dua tab: **Tantangan Malam** (Lomba) dan **Lencana** (Sertifikat). Tiap item berbentuk **medali bersimbol** (`Medali`: lingkaran `labu` dengan ikon labu, bulan, atau bintang, nama, penyelenggara, tahun, keterangan, link kalau ada). Dilarang menampilkan juara atau gelar yang belum benar-benar diraih.

### 6. Pintu Depan (Kontak) — `#kontak`
Dua kolom (bertumpuk di HP):
- Kiri: ilustrasi **pintu kayu dengan lentera labu** (SVG sederhana, cahaya lentera berkedip) dan empat `StempelLabu` bulat berisi ikon **GitHub, LinkedIn, Email, Unduh CV** (link dengan `aria-label`).
- Kanan: kartu ruangan berbentuk surat dengan form kontak.
- Saat berhasil: `StempelLabu` besar tercap (skala 1.4 ke 1), `PercikanLabu` meledak, pesan "Suratmu sudah sampai di ambang pintu", dan `sfx-ketuk` dimainkan.

### Footer
Latar `malamhitam`, `PemisahHalloween`, tulisan "Rumah ini belum selesai direnovasi. Ruangan berikutnya masih dibangun.", teks hak cipta, ringkasan kredit aset, dan tombol kembali ke atas (memicu transisi kelelawar ke `#hero`).

### Form Kontak
- Kolom: Nama, Email, Pesan, dan kolom jebakan tersembunyi `website` (honeypot, harus kosong).
- Validasi sederhana dengan `if` di `handleKirim`: nama dan pesan tidak boleh kosong, email harus mengandung `@` dan titik, pesan maksimal 1000 karakter. Pesan error dari kamus bahasa.
- Kalau honeypot terisi, berhenti diam-diam tanpa mengirim.
- Kirim dengan `fetch` ke `https://api.web3forms.com/submit` memakai `VITE_WEB3FORMS_KEY`. Cek dokumentasi Web3Forms sebelum menulis parameter.
- Tombol dinonaktifkan saat mengirim dan 30 detik setelah berhasil.
- Kalau gagal: pesan ramah dan tombol alternatif **Kirim lewat Email** (`mailto:`). Jangan tampilkan error teknis mentah.

## Dwibahasa (ID/EN)
- Default Indonesia. Kunjungan pertama membaca `navigator.language`. Pilihan disimpan di `localStorage` kunci `bahasaPilihan`.
- `KonteksBahasa.jsx` menyediakan `bahasaAktif`, `gantiBahasa`, `t('kunci')`. Kunci bertingkat dipisah titik dan dibaca dengan perulangan `for`, bukan `reduce`.
- `id.json` dan `en.json` harus punya kunci identik. Kunci tidak ditemukan: `t` mengembalikan kunci itu sendiri.
- Data berbahasa ganda: `{ id: '...', en: '...' }`, dibaca `data[bahasaAktif]`. Perbarui `document.documentElement.lang` dan `document.title` saat bahasa berganti.
- Nama orang, proyek, teknologi, dan lomba tidak diterjemahkan. Julukan bertema (Berkas, Bahan, Rak Toples, Ruang Tamu, dan lainnya) diterjemahkan lewat kamus, dan nama asli teknologi selalu tampil.

## Suara
- File: `malam-loop.mp3` (ambience malam lembut: angin pelan, jangkrik, drone rendah, berulang), `sfx-kelelawar.mp3`, `sfx-percik.mp3`, `sfx-senter.mp3`, `sfx-ketuk.mp3`. Musik di bawah 1 MB, efek di bawah 50 KB. **Tidak boleh ada suara keras atau mengagetkan.**
- **Default MATI.** Audio tidak dimuat sebelum `TombolSuara` ditekan. `useSuara`: `suaraAktif`, `nyalakanSuara`, `matikanSuara`, `mainkanEfek(nama)`. Preferensi di `localStorage` kunci `suaraAktif`. Volume musik 0.3, efek 0.5.
- `TombolSuara` berbentuk tombol bulat berikon, dengan `aria-label` yang berubah.

## Daftar Aset
Hampir semua visual dibuat dengan kode. Yang perlu disiapkan:

| Aset                | Keterangan                                                         | Wajib? |
| ------------------- | ------------------------------------------------------------------ | ------ |
| `logo-kaka.svg`     | Logo teks "Kaka" bergaya Pirata One dengan ikon labu kecil          | Ya (boleh dari teks dulu) |
| `potret-kaka.webp`  | Foto atau ilustrasi, rasio 1:1, sekitar 600 x 600                   | Opsional, `TODO` |
| Gambar proyek       | Screenshot di `src/assets/proyek/`, rasio 16:10                     | `TODO` per proyek |
| `og-image.png`      | 1200 x 630                                                          | Ya |
| Audio               | Lima file di `public/audio/`, berlisensi bebas atau buatan sendiri  | Ya, bisa belakangan |

Gunakan **placeholder** untuk aset yang belum ada dan beri tahu. Jangan mengambil gambar atau audio dari internet tanpa lisensi jelas.

## Struktur Data
- **`profil.js`**: `nama`, `peran`, `tagline`, `tentang` (semuanya `{ id, en }` bila teks), `lokasi`, `github`, `linkedin`, `email`, `pendidikan`, `organisasi`, `bahasa`.
- **`proyek.js`**: `id`, `judul`, `kategori` (`Web` / `Mobile` / `Lainnya`), `status` (`Selesai` / `Berjalan`), `ringkasan` dan `deskripsi` (`{ id, en }`), `teknologi` (array), `gambar` atau `null`, `linkDemo` atau `null`, `linkGithub` atau `null`, `tahun`.
- **`sertifikat.js`**: `id`, `nama`, `jenis` (`Lomba` / `Sertifikat`), `penyelenggara`, `tahun`, `keterangan` (`{ id, en }`), `link` atau `null`.
- **`keahlian.js`**: array kelompok `{ rak: 'bahasa' | 'framework' | 'database' | 'desain', nama: { id, en }, daftar: [{ nama, simbol }] }`, hanya 4 kelompok. Contoh simbol: HTML `Ht`, CSS `Cs`, JavaScript `Js`, PHP `Ph`, C# `C#`, Dart `Da`, Laravel `La`, Flutter `Fl`, MySQL `My`, AWS `Aw`, Figma `Fi`, Canva `Ca`.
- **`bab.js`** (hash, kunci i18n per bab) dan **`ruangan.js`** (warna kabut per bab).

## Data Awal (dari CV, perlu diverifikasi)
Titik awal dari CV lama. Item bertanda `TODO` menunggu jawaban Kaka. **Jangan mengarang** angka, tahun, link, atau pencapaian.

**Profil**: Kaka Andrea Yahya, Bandung. Peran Software Engineering Student, Web & Mobile Developer. GitHub `https://github.com/Kalzz76`. LinkedIn `TODO`. Email publik `TODO` (di CV tertulis rafliar99@gmail.com, konfirmasi dulu). Nomor telepon **tidak ditampilkan** di website. Pendidikan SMKN 13 Bandung, RPL, tahun `TODO` (CV tertulis 2024-2026). Organisasi IRMA (Ikatan Remaja Masjid). Bahasa: Indonesia (aktif), Inggris (dasar, A1), Sunda (dasar). Bio singkat `TODO` (Kaka menulis 2 sampai 3 kalimat).

**Proyek** (semua `TODO` untuk gambar, link demo, link GitHub, tahun, dan konfirmasi `status`)
1. Website Mapping Klinik Pratama Bumi Sehat Bahagia. Web, Laravel. Sistem informasi layanan kesehatan dan pemetaan.
2. Classio, sistem manajemen sekolah terintegrasi. Web, teknologi `TODO` (CV tertulis C#, pastikan ASP.NET atau Blazor).
3. Sistem Peminjaman Perpustakaan. Web, Laravel. Aplikasi manajemen sirkulasi buku.
4. `TODO` proyek terbaru sejak CV terakhir.

**Pencapaian dan sertifikat** (tahun dan link `TODO`)
- Lomba: Jagoan Hosting Infra Competition (JHIC) 2025, Semi-Finalist. Samsung Innovation Campus Batch 6 (2024/2025), peserta.
- Sertifikat: AWS Academy Cloud Foundations. AWS Academy Architecting. Dicoding Pemrograman Dart (Dasar).
- `TODO` lomba dan sertifikat terbaru.

**Keahlian** (hanya yang ada di CV): Bahasa Pemrograman HTML, CSS, JavaScript, PHP, C#, Dart. Framework Laravel, Flutter (`TODO` konfirmasi React dan Tailwind CSS). Database & Cloud MySQL, AWS. Desain Figma, Canva.

**Perbaikan ejaan** dari CV lama: "Pemrograman", "Batch", "AWS", "PHP".

## Keamanan dan Privasi
- Nomor HP, alamat rumah, dan data pribadi sensitif tidak boleh muncul di kode atau teks website.
- `VITE_WEB3FORMS_KEY` ada di `.env` (tidak di-commit) dan di environment Cloudflare Pages. `.env.example` hanya berisi nama variabel.
- Link eksternal memakai `target="_blank"` dan `rel="noopener noreferrer"`. Jangan tampilkan error teknis ke pengunjung.

## Performa, Aksesibilitas, dan SEO
- Target Lighthouse mobile: Performance minimal 85, Accessibility minimal 95, SEO minimal 95. Hampir semua visual berupa SVG, CSS, dan canvas, jadi muat awal harus di bawah 1 MB tanpa audio.
- Animasi hanya `transform` dan `opacity`, kecuali mask senter yang hanya mengubah variabel CSS. `will-change: transform` hanya pada elemen yang sedang bergerak. Canvas percikan berhenti total saat tidak ada partikel. Hindari `filter: blur` pada elemen besar yang beranimasi.
- **Keamanan visual (fotosensitif)**: tidak ada elemen yang berkedip lebih dari 3 kali per detik, tidak ada kilatan putih layar penuh. Kilatan judul hanya sekali, lembut, dan area kecil.
- **Senter gaib tidak boleh menjadi hambatan**: teks asli selalu ada di DOM dan terbaca pembaca layar, ada tombol Nyalakan Semua Senter, sentuh dan keyboard punya jalan sendiri, dan reduced-motion mengungkap semuanya.
- Gambar bermakna punya `alt`; dekorasi (siluet rumah, bintang, kabut, kelelawar, canvas, overlay transisi) memakai `aria-hidden="true"`.
- Semua bisa dioperasikan dengan keyboard, fokus terlihat jelas (`focus:outline` warna `labu`), modal mengembalikan fokus ke pemicu.
- Kontras: `tulang` atau `labu` di atas `malamhitam` atau `ungumalam`. `labu` untuk teks kecil hanya di atas latar gelap.
- **Mobile first.** Semua bab nyaman di lebar 360 px.
- `index.html`: `title`, `meta description`, Open Graph, `theme-color` (`#0b0a12`), favicon.

## Deploy ke Cloudflare Pages
1. Push repo ke GitHub (akun Kalzz76). 2. Cloudflare Pages, Create project, hubungkan repo. 3. Build command `npm run build`, output `dist`. 4. Environment variables `NODE_VERSION` = `20` dan `VITE_WEB3FORMS_KEY`. 5. Setiap `git push` ke `main` otomatis ter-deploy. 6. Domain sendiri bisa ditambahkan belakangan.

## Urutan Pengerjaan Modul
Setelah tiap tahap pastikan `npm run dev` jalan dan `npm run build` berhasil.

1. **Fondasi**: Vite + React + Tailwind (token, font, `shadow-ruangan`), `index.css` (variabel `--warna-*`, `.kartu-gelap`, `.lantai-gelap`, senter gaib, semua `@keyframes`), struktur folder, `docs/CREDITS.md`.
2. **Bahasa**: `KonteksBahasa`, `id.json`, `en.json`, `TombolBahasa`.
3. **Kerangka**: `Navbar`, `Ruangan`, `TombolPlakat`, `PemisahHalloween`, `SudutLaba`, `Footer`, enam section kosong dengan data dan judul.
4. **Konten inti**: Tentang (empat kartu benda, `HurufAwal`), Keahlian (`ToplesTeknologi`), Pencapaian (medali, tab).
5. **Proyek tanpa senter**: `KartuBerkas`, `MaskotKategori`, filter, `Modal` (teks biasa dulu).
6. **Form kontak** dengan validasi, honeypot, Web3Forms, `StempelLabu`, `mailto:` cadangan.
7. **Latar**: `LatarMalam` (bintang, bulan, kabut, kunang-kunang, siluet) dan `RumahAngker` di Hero.
8. **Senter gaib**: `KonteksSenter`, `SenterGaib`, `TombolLabu`, jalur sentuh dan keyboard, modal menyala berurutan.
9. **Transisi**: `KonteksTransisi`, `TransisiKelelawar`, `PercikanLabu`, sambungkan ke Navbar dan form.
10. **Suara**: `useSuara`, `TombolSuara`, ambience, efek.
11. **Penutup**: reduced-motion, uji sentuh di HP asli, aksesibilitas, optimasi, SEO, deploy.

## Catatan Penting
- Semua konten di `src/data/` dan `src/i18n/`, kedua bahasa harus selalu lengkap.
- Aset yang belum ada: pakai placeholder dan beri tahu. Jangan commit file mentah besar atau `.env`. Commit kecil dan jelas.
- **Belum dikerjakan (ditunda, jangan ditambahkan kecuali diminta):** 3D, video intro, peta interaktif, parallax kompleks, game mini, blog, CMS atau admin, login, database, mode terang/gelap tambahan, bahasa ketiga, PWA, React Router, integrasi API GitHub, chatbot, statistik skill berbentuk persen atau level, kursor kustom yang menggantikan kursor asli, pintasan keyboard satu tombol.
- **Tampilan awal harus sudah bisa dinavigasi oleh screen reader**: Hero muncul tanpa menunggu transisi atau interaksi. Teks utama, tombol bahasa, dan tombol menu harus sudah ada di DOM sejak awal dengan `aria-label` yang proper dan dapat diakses sebelum senter gaib muncul.