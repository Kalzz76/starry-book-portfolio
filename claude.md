# Portofolio Kaka Andrea Yahya

Website portofolio pribadi milik **Kaka Andrea Yahya**, siswa SMKN 13 Bandung jurusan Rekayasa Perangkat Lunak (RPL) yang fokus pada pengembangan web dan mobile. Website menampilkan profil, keahlian, proyek, pencapaian, dan kontak. Dibangun dengan **Vite + React + Tailwind CSS**, berupa **situs statis** tanpa backend dan tanpa database, dan dihosting gratis di **Cloudflare Pages**. Tidak ada login dan tidak ada halaman admin. Semua konten diubah lewat file data di `src/data/` dan `src/i18n/`.

## Konsep: Buku Dongeng Bersampul Malam Berbintang

Pengunjung mendarat di sebuah **buku tertutup** bersampul lukisan malam berbintang. Saat mereka **scroll**, sampul terbuka, kamera mendekat sehingga mereka seolah **masuk ke dalam buku**, lalu lembar demi lembar terbalik. Setiap spread (dua halaman) adalah satu bab: **halaman kiri berisi ilustrasi, halaman kanan berisi konten**. Kaka adalah "penulis", dan proyek-proyeknya adalah "kisah-kisah" yang pernah ia tulis.

- **Dua mode tampilan** (hybrid):
  - **Mode Buku** (desktop dan tablet landscape, lebar layar minimal 1024 px dan tinggi minimal 620 px): buku 3D penuh, dikendalikan scroll.
  - **Mode Halaman** (HP, layar kecil, dan `prefers-reduced-motion`): sampul membuka sebentar sebagai intro (tidak ada intro kalau reduced-motion), lalu konten tampil sebagai section scroll biasa berbentuk halaman kertas dengan tepi bergelombang.
- **Bahasa**: dwibahasa, Indonesia (default) dan Inggris, dengan tombol ID/EN.
- **Suara**: musik kotak musik dan efek balik halaman. Default mati.
- **Gaya visual**: sampul dan halaman malam bergaya lukisan cat minyak tebal terinspirasi *The Starry Night*; halaman siang bergaya cat air lembut di atas kertas krem.
- **Target pengunjung**: calon pemberi kerja magang, juri lomba, guru, dan kolaborator. Konten harus tetap mudah dibaca dan dicapai lewat navbar tanpa harus menunggu animasi.

### Aturan Orisinalitas (WAJIB)
Boleh terinspirasi dari suasana buku dongeng dan dari gaya lukisan *The Starry Night* (pusaran langit, bintang besar berhalo, bulan sabit, sapuan kuas tebal), tetapi **dilarang menyalin** website atau karya orang lain: jangan memakai ilustrasi, karakter, logo, teks, atau tata letak dari website referensi mana pun. Sampul dan ilustrasi dibuat sebagai karya baru, bukan reproduksi lukisan aslinya. Motif milik Kaka: **burung hantu kecil** sebagai maskot, **rumah pohon** dengan jendela menyala, **lentera**, bulan sabit, dan kunang-kunang. Semua gambar, audio, dan font harus buatan sendiri atau berlisensi bebas (CC0/MIT/OFL), dan sumbernya dicatat di `docs/CREDITS.md`. Kalau ilustrasi dibuat dengan AI generator, cek syarat lisensi pemakaian tool tersebut dan catat tool-nya di `docs/CREDITS.md`.

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
7. Konten proyek, sertifikat, dan skill ditulis di `src/data/`, bukan di dalam komponen. Angka waktu animasi buku ditulis di `src/data/linimasa.js`, bukan tersebar di komponen.
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
- **Suara**: howler
- **Ikon UI**: SVG inline buatan sendiri di `src/components/ui/Ikon.jsx`. Tidak memakai library ikon.
- **Ilustrasi**: WebP berlatar transparan atau opaque (lihat Daftar Aset). Elemen yang bisa dibuat dengan kode (bintang latar, kunang-kunang, gelombang, tebal tepi halaman, bayangan) dibuat dengan SVG dan CSS.
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
**Catatan 3D:** efek 3D memakai `perspective` dan `backface-visibility`. Sertakan juga `-webkit-backface-visibility` untuk Safari, dan uji di Safari/iPhone asli.

## Struktur Project

```
portfolio-kaka/
├── public/
│   ├── audio/                 kotak-musik-loop.mp3, sfx-halaman.mp3, sfx-klik.mp3, sfx-lonceng.mp3
│   ├── cv/                    CV_Kaka_ID.pdf, CV_Kaka_EN.pdf
│   ├── favicon.png
│   └── og-image.png           ukuran 1200x630
├── src/
│   ├── assets/ilustrasi/      sampul, halaman kiri, tekstur kertas (WebP)
│   ├── components/
│   │   ├── buku/              Buku, Lembar, Sampul, Latar, PenandaBab, IntroSampul
│   │   ├── isi/               IsiTentang, IsiKeahlian, IsiProyek, IsiPencapaian, IsiKontak (konten saja, dipakai di kedua mode)
│   │   ├── ilustrasi/         IlustrasiTentang, IlustrasiKeahlian, IlustrasiProyek, IlustrasiPencapaian, IlustrasiKontak
│   │   ├── dekorasi/          Bintang, KunangKunang, Awan, PembatasGelombang
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
| `malamgelap` | `#0d1136` | Latar luar buku, navbar, sampul paling gelap                  |
| `samudra`    | `#2a4d9b` | Biru pusaran langit di sampul dan halaman malam               |
| `langit`     | `#6fa8dc` | Biru terang aksen di sampul dan halaman malam                 |
| `bintang`    | `#f6d776` | Bintang, bulan, cahaya (bukan untuk teks kecil di latar terang) |
| `emas`       | `#c9a227` | Bingkai dan tulisan di sampul, punggung buku                  |
| `tinta`      | `#1a1a1a` | Tombol hitam dan teks isi                                     |

| Elemen                       | Kelas Tailwind                                                                                   |
| ---------------------------- | ------------------------------------------------------------------------------------------------ |
| Latar halaman                | `bg-malamgelap text-kertas font-isi` (di luar buku), halaman buku `bg-kertas text-tinta`          |
| Navbar (kedua mode)          | `fixed top-0 inset-x-0 z-50 bg-malamgelap/85 backdrop-blur text-kertas`                          |
| Tombol utama di halaman terang | `bg-tinta text-kertas rounded-full px-6 py-2.5 text-xs uppercase tracking-widest shadow-lembut hover:bg-hutan` |
| Tombol utama di sampul       | `bg-emas text-malamgelap rounded-full px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-bintang` |
| Tombol sekunder              | `border border-hutan text-hutan rounded-full px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-hutan hover:text-kertas` (di sampul: `border-emas text-emas`) |
| Kartu (`KartuKertas`)        | `bg-kartu rounded-3xl shadow-lembut p-5`                                                         |
| Judul bab                    | `font-judul text-hutan text-3xl leading-tight` (di halaman malam: `text-kertas`)                 |
| Label kecil (eyebrow)        | `font-isi text-xs uppercase tracking-[0.2em] text-hutan`                                         |
| Penanda bab                  | `font-tulisan text-jingga text-xl`                                                               |
| Badge teknologi              | `bg-pasir text-hutan rounded-full px-3 py-1 text-xs`                                             |
| Tab / filter aktif           | `bg-hutan text-kertas rounded-full px-4 py-1.5 text-xs uppercase tracking-widest`                |
| Tab / filter tidak aktif     | `bg-pasir text-hutan rounded-full px-4 py-1.5 text-xs uppercase tracking-widest`                 |
| Tombol bahasa aktif          | `bg-bintang text-malamgelap rounded-full`                                                        |
| Kolom input                  | `bg-kertas text-tinta border border-lumut rounded-2xl px-4 py-2.5 focus:border-hutan outline-none` |
| Pesan error                  | `bg-sakura/30 text-hutan border border-sakura rounded-2xl px-4 py-2`                             |
| Modal                        | overlay `bg-malamgelap/70 backdrop-blur-sm`, kotak `bg-kertas rounded-3xl shadow-lembut max-w-3xl` |

`shadow-lembut` = `0 8px 24px rgba(31, 77, 54, 0.12)`. Sudut selalu membulat besar, dilarang bayangan hitam keras dan border tebal ala pixel.

### Tipografi
- `font-judul` = Fraunces. `font-isi` = DM Sans. `font-tulisan` = Caveat (hanya catatan pendek, bukan paragraf).
- Label kecil dan tombol: huruf kapital dengan `tracking-widest`.
- Teks isi di dalam halaman buku minimal `text-sm` (14 px), di Mode Halaman minimal `text-base`. Pakai `clamp()` supaya ukuran menyesuaikan tinggi halaman.

## Mode Buku (desktop)

### Kerangka
Kontainer setinggi **800vh** berisi panggung `sticky top-0 h-screen`. Progres scroll `p` (0 sampai 1) dibaca dari kontainer dengan `useScroll`. Footer "Tamat." berada **setelah** kontainer dalam alur biasa.

Ukuran satu halaman: tinggi `min(82vh, 780px)`, lebar 0.8 kali tingginya. Contoh di layar 1440 x 900: halaman 590 x 738 px, spread 1180 px. Latar luar buku adalah langit `malamgelap` dengan komponen `Bintang` dan `KunangKunang`.

### Susunan lembar
Buku punya **6 lembar** dan 5 kali buka atau balik. Halaman kiri sebuah spread adalah **sisi belakang** lembar sebelumnya, halaman kanannya adalah **sisi depan** lembar berikutnya.

| Lembar | Sisi depan (halaman kanan)  | Sisi belakang (halaman kiri berikutnya) | Berputar pada scroll |
| ------ | --------------------------- | ---------------------------------------- | -------------------- |
| L0     | Sampul (Home)               | Ilustrasi Tentang                        | 0.05 sampai 0.15     |
| L1     | Isi Tentang                 | Ilustrasi Keahlian                       | 0.272 sampai 0.332   |
| L2     | Isi Keahlian                | Ilustrasi Proyek                         | 0.454 sampai 0.514   |
| L3     | Isi Proyek                  | Ilustrasi Pencapaian                     | 0.636 sampai 0.696   |
| L4     | Isi Pencapaian              | Ilustrasi Kontak                         | 0.818 sampai 0.878   |
| L5     | Isi Kontak                  | Sampul belakang                          | tidak berputar       |

Linimasa lengkap (nilai ini ditulis di `src/data/linimasa.js`):

| Rentang scroll    | Yang terjadi                                                                                   |
| ----------------- | ---------------------------------------------------------------------------------------------- |
| 0 sampai 0.05     | Sampul tertutup melayang di tengah. Tampil petunjuk "Scroll untuk membuka buku".               |
| 0.05 sampai 0.15  | L0 terbuka. Kamera "masuk": skala buku 0.7 ke 1 dan geser horizontal setengah halaman ke 0. Latar luar memudar gelap. |
| 0.15 sampai 0.272 | Spread 1: Tentang. Diam supaya terbaca.                                                        |
| 0.272 sampai 0.332 | L1 terbalik.                                                                                  |
| 0.332 sampai 0.454 | Spread 2: Keahlian.                                                                           |
| 0.454 sampai 0.514 | L2 terbalik.                                                                                  |
| 0.514 sampai 0.636 | Spread 3: Proyek.                                                                             |
| 0.636 sampai 0.696 | L3 terbalik.                                                                                  |
| 0.696 sampai 0.818 | Spread 4: Pencapaian.                                                                         |
| 0.818 sampai 0.878 | L4 terbalik.                                                                                  |
| 0.878 sampai 1    | Spread 5: Kontak. Setelahnya scroll lanjut ke footer "Tamat.".                                 |

### Data linimasa (contoh bentuk)

```js
export const daftarLembar = [
  { id: 'sampul', mulai: 0.05, selesai: 0.15 },
  { id: 'tentang', mulai: 0.272, selesai: 0.332 },
  { id: 'keahlian', mulai: 0.454, selesai: 0.514 },
  { id: 'proyek', mulai: 0.636, selesai: 0.696 },
  { id: 'pencapaian', mulai: 0.818, selesai: 0.878 },
  { id: 'kontak', mulai: 0, selesai: 0 }
]

export const daftarBab = [
  { hash: 'hero', kunci: 'nav.home', posisi: 0 },
  { hash: 'tentang', kunci: 'nav.about', posisi: 0.21 },
  { hash: 'keahlian', kunci: 'nav.skills', posisi: 0.39 },
  { hash: 'proyek', kunci: 'nav.projects', posisi: 0.575 },
  { hash: 'pencapaian', kunci: 'nav.achievements', posisi: 0.757 },
  { hash: 'kontak', kunci: 'nav.contact', posisi: 0.94 }
]
```

### Cara kerja `Lembar`
- Setiap lembar adalah `div` dengan `transform-origin: left center` di punggung buku. Sudut putar `rotateY` diambil dari progres lewat `useTransform` dari 0 ke -180 derajat dalam rentang `mulai` sampai `selesai`, dengan `clamp`.
- Dua sisi lembar adalah dua `div` (`absolute inset-0`) dengan `backface-visibility: hidden`. Sisi belakang diberi `rotateY(180deg)` tetap.
- **Penting:** kontainer buku **tidak** memakai `transform-style: preserve-3d` antar lembar. `perspective` (sekitar 2200 px) dipasang di pembungkus buku, dan urutan tumpukan antar lembar diatur dengan `zIndex`. Lembar yang belum terbalik: `zIndex = jumlahLembar - indeks`. Lembar yang sudah terbalik (sudut melewati -90 derajat): `zIndex = indeks`. Perubahan ini disimpan di satu state boolean `terbalik` per lembar yang hanya berubah saat melewati setengah putaran (pakai `useMotionValueEvent`).
- **Bayangan halaman**: lapisan gradien gelap di atas tiap sisi yang opasitasnya mengikuti sudut putar (maksimal 0.35 di sekitar 90 derajat), supaya terlihat tebal.
- **Tepi tebal halaman**: garis-garis tipis di sisi kanan buku (sebelum terbuka) dan sisi kiri (sesudah terbuka) dibuat dengan `box-shadow` berlapis, bukan gambar.
- **Interaksi**: sisi yang sedang tidak terlihat diberi atribut `inert` (di React 18 tulis `inert=""`, atau hilangkan atribut bila terlihat) dan `aria-hidden="true"`, supaya tombol di halaman tersembunyi tidak bisa difokus atau diklik.
- **Suara**: `sfx-halaman` dimainkan saat progres sebuah lembar mulai bergerak dari 0 (dan saat kembali ke 0).
- **Kamera**: pembungkus buku diberi `scale` dan `translateX` dari `useTransform` pada rentang 0.05 sampai 0.15 (skala 0.7 ke 1, geser dari -setengah lebar halaman ke 0).

### Navigasi
- Menu navbar: **Home, About, Skills, Projects, Achievements, Contact** (label ikut bahasa), dengan hash `#hero`, `#tentang`, `#keahlian`, `#proyek`, `#pencapaian`, `#kontak`.
- Karena tidak ada section bertumpuk, klik menu **menggulung halaman** ke posisi bab dengan rumus `kontainer.offsetTop + posisi * (kontainer.offsetHeight - window.innerHeight)` memakai `window.scrollTo({ behavior: 'smooth' })`, lalu mengubah hash lewat `history.replaceState`.
- Saat halaman dimuat dengan hash (misalnya `/#proyek`), langsung gulung ke posisi bab itu tanpa animasi.
- Bab aktif ditentukan dari progres dengan `if` berurutan terhadap `daftarBab`, disimpan di state `babAktif` (hanya diperbarui saat berganti), dan dipakai untuk menandai menu aktif serta memperbarui hash.
- **Keyboard**: tombol panah bawah, panah kanan, dan PageDown pindah ke bab berikutnya; panah atas, panah kiri, dan PageUp ke bab sebelumnya. Tidak aktif saat fokus ada di kolom input atau textarea.
- `PenandaBab`: enam titik kecil di bawah buku (bab aktif berwarna `bintang`) yang bisa diklik, ditambah tombol ‹ dan › dengan `aria-label`.

## Mode Halaman (HP dan layar kecil)

`useModeBuku` mengembalikan `buku` atau `halaman`. Mode `buku` hanya kalau lebar layar minimal 1024 px, tinggi minimal 620 px, dan `prefers-reduced-motion` tidak aktif. Hook memperbarui nilainya saat ukuran layar berubah.

- **Intro sampul** (`IntroSampul`, tidak ada kalau reduced-motion): kontainer setinggi 250vh berisi panggung `sticky`. Satu sampul tampil di tengah, lalu saat scroll sampul membuka (`rotateY` 0 ke -160 derajat) dan skala naik 0.8 ke 1.3 sambil memudar, memperlihatkan halaman kertas. Setelah itu alur scroll biasa dimulai. Sampulnya berisi nama, peran, dan tombol seperti di Mode Buku.
- **Isi**: lima section berurutan (`#tentang`, `#keahlian`, `#proyek`, `#pencapaian`, `#kontak`) yang memakai komponen `isi/` dan `ilustrasi/` yang sama. Ilustrasi dipasang di atas konten dengan ukuran lebih kecil. Latar section selang-seling `kertas` dan `pasir`, dipisah `PembatasGelombang`. Keahlian dan Kontak memakai latar `malam` dengan `Bintang`.
- **Navbar**: anchor biasa dengan scroll halus. Navbar menampilkan logo, `TombolBahasa`, `TombolSuara`, dan hamburger, **ketiganya tampil bersamaan** di lebar 360 px.
- Semua item proyek dan sertifikat tampil tanpa pagination.
- Footer "Tamat." sama dengan Mode Buku.

### `PembatasGelombang` (Mode Halaman)

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

- **Sampul (Home)**: lukisan malam berbintang sebagai latar, bingkai emas tipis di dalam tepi (`border border-emas/70` berjarak 14 px), label kecil "WEB · MOBILE · CLOUD", judul "Kaka Andrea Yahya" (`font-judul`, warna `kertas`), peran "Software Engineering Student", tagline satu kalimat, dua tombol: **Lihat Proyek** (menggulung ke bab Proyek) dan **Unduh CV**. Petunjuk "Scroll untuk membuka buku" dengan panah bergerak pelan di bawah buku. Punggung buku berwarna `malamgelap` dengan pita `emas`.
- **Tentang (Bab 1)**: penanda "Bab 1" (`font-tulisan`), judul, paragraf singkat, lalu tiga `KartuKertas` kecil: **Pendidikan** (SMKN 13 Bandung, RPL), **Organisasi** (IRMA), **Bahasa** (Indonesia aktif, Inggris dasar, Sunda dasar). Ilustrasi kiri: rumah pohon dengan jendela menyala.
- **Keahlian (Bab 2)**: judul "Perlengkapan Petualangan" (via i18n) dan **4 `KartuKertas` dalam grid 2 x 2**: **Bahasa Pemrograman**, **Framework**, **Database & Cloud**, **Desain**. Tiap kartu berisi ikon SVG, judul, dan badge. **Dilarang persentase atau bar tingkat kemampuan.** Ilustrasi kiri: langit malam bergaya cat minyak (satu halaman penuh, tanpa margin).
- **Proyek (Bab 3)**: judul "Kisah-Kisah yang Kubuat". Filter pil: **Semua, Web, Mobile, Lainnya**. Kartu proyek berbentuk **sampul buku mini** (sisi kiri bergaris tebal `hutan`, sudut kanan membulat, gambar, judul, ringkasan, badge teknologi, tombol **Baca Kisahnya**). Di Mode Buku tampil **2 kartu per halaman** dengan pagination "‹ 1/2 ›". Tombol Baca Kisahnya membuka `Modal` berisi gambar, deskripsi lengkap, teknologi, link demo dan GitHub (hanya kalau ada). Modal ditutup lewat tombol Tutup, klik di luar kotak, atau `Esc`, lalu fokus kembali ke tombol pemicu. Ilustrasi kiri: meja kerja cat air (tumpukan buku, laptop, secangkir teh).
- **Pencapaian (Bab 4)**: judul "Lencana dan Piala". Dua tab pil: **Lomba** dan **Sertifikat**. Tiap item `KartuKertas` dengan ikon bintang emas, nama, penyelenggara, tahun, keterangan, dan link (kalau ada). Di Mode Buku **4 item per halaman** dengan pagination. Dilarang menampilkan juara atau gelar yang belum benar-benar diraih. Ilustrasi kiri: rak dengan bintang dan pita lencana.
- **Kontak (Bab Terakhir)**: judul "Sampai Jumpa di Bab Berikutnya". Tombol link **GitHub**, **LinkedIn**, **Email**, **Unduh CV**, lalu form kontak kompak dalam `KartuKertas`. Ilustrasi kiri: burung hantu tidur, lentera, dan kunang-kunang.
- **Footer ("Tamat.")**: tulisan "Tamat." dengan hiasan kecil, teks hak cipta, ringkasan kredit aset, dan tombol kembali ke atas (di Mode Buku tombol ini menggulung ke posisi 0).

### Form Kontak
- Kolom: Nama, Email, Pesan, dan kolom jebakan tersembunyi `website` (honeypot, harus kosong).
- Validasi sederhana dengan `if` di `handleKirim`: nama dan pesan tidak boleh kosong, email harus mengandung `@` dan titik, pesan maksimal 1000 karakter. Pesan error dari kamus bahasa.
- Kalau honeypot terisi, berhenti diam-diam tanpa mengirim.
- Kirim dengan `fetch` ke `https://api.web3forms.com/submit` memakai `VITE_WEB3FORMS_KEY`. Cek dokumentasi Web3Forms sebelum menulis parameter.
- Tombol dinonaktifkan saat mengirim dan 30 detik setelah berhasil. Saat berhasil, tampilkan pesan hangat (contoh "Suratmu sudah sampai") dan mainkan `sfx-lonceng`.
- Kalau gagal, tampilkan pesan ramah dan tombol alternatif **Kirim lewat Email** (`mailto:`). Jangan tampilkan error teknis mentah.

## Animasi

- **Mode Buku**: seluruh gerak utama dikendalikan scroll (lihat linimasa). Hanya animasikan `transform` dan `opacity`. Jangan menganimasikan `width`, `height`, `top`, `left`.
- **Mode Halaman**: blok konten muncul dengan `whileInView` (opacity 0 ke 1, naik 24 px, 0.7 detik, sekali saja), kartu dalam satu baris muncul bergantian dengan jeda 0.1 detik.
- **Loop dekoratif**: bintang berkedip (`@keyframes berkedip`, 2 sampai 5 detik), kunang-kunang melayang (`@keyframes melayang`), awan bergeser pelan di Mode Halaman, panah petunjuk scroll. `Bintang` membuat posisi **sekali** saat dimuat (`useState` dengan fungsi awal berisi perulangan `for`): 40 bintang di desktop, 20 di mobile.
- **prefers-reduced-motion**: pakai Mode Halaman tanpa intro, matikan semua loop, dan tampilkan elemen langsung tanpa animasi.

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

## Daftar Aset Ilustrasi

Semua WebP (kualitas sekitar 80), di `src/assets/ilustrasi/`, target di bawah 200 KB per file. Sebelum aset jadi, pakai **placeholder** (kotak berlabel nama aset dengan warna token) dan beri tahu. Jangan mengambil gambar dari internet tanpa lisensi jelas.

| Nama file                       | Isi                                                                                                                   | Ukuran     | Latar        |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------- | ------------ |
| `sampul-malam-berbintang.webp`  | Lukisan cat minyak tebal: pusaran langit biru, bintang besar kuning berhalo, bulan sabit bercahaya, bukit, siluet rumah pohon dan pohon cemara di bawah. **Tanpa teks.** | 1000 x 1300 | opaque       |
| `halaman-tentang.webp`          | Rumah pohon dengan jendela menyala hangat, awan, rumput (cat air)                                                      | 800 x 1000 | transparan   |
| `halaman-keahlian.webp`         | Langit malam bergaya cat minyak (bintang berhalo, bulan, bukit), satu halaman penuh                                    | 800 x 1000 | opaque       |
| `halaman-proyek.webp`           | Meja kerja cat air: tumpukan buku, laptop, secangkir teh                                                               | 800 x 1000 | transparan   |
| `halaman-pencapaian.webp`       | Rak dengan bintang emas dan pita lencana (cat air)                                                                     | 800 x 1000 | transparan   |
| `halaman-kontak.webp`           | Burung hantu kecil tidur di dahan dengan lentera menyala, kunang-kunang (cat air)                                      | 800 x 1000 | transparan   |
| `tekstur-kertas.webp`           | Tekstur kertas halus yang bisa diulang (tile)                                                                          | 512 x 512  | opaque       |
| `logo-kaka.svg`                 | Logo teks "Kaka" bergaya serif dengan bintang kecil                                                                    | vektor     | transparan   |

Sampul belakang, punggung, tepi halaman, bayangan, bintang latar, dan kunang-kunang dibuat dengan CSS/SVG, bukan gambar. Gambar proyek (screenshot) ditaruh di `src/assets/proyek/`.

**Gaya prompt generator gambar (untuk dipakai Kaka sendiri):**
- Sampul: "book cover painting, swirling night sky with large glowing yellow stars with concentric halos and a crescent moon, thick impasto oil brush strokes, deep blue and yellow palette, dark silhouette of a treehouse and pine trees at the bottom, vertical 3:4, no text".
- Halaman cat air: "soft watercolor children's storybook illustration, warm natural palette of forest green, cream, brown and a touch of orange, gentle brush texture, no outlines, transparent background, [objek]".
Cek lisensi pemakaian tool yang dipakai.

## Struktur Data

Semua file di `src/data/` mengekspor array atau objek biasa.

**`profil.js`**: `nama`, `peran` (`{ id, en }`), `tagline` (`{ id, en }`), `tentang` (`{ id, en }`), `lokasi`, `github`, `linkedin`, `email`, `pendidikan` (sekolah, jurusan, tahun), `organisasi`, `bahasa` (daftar `{ nama, tingkat: { id, en } }`).

**`proyek.js`**: `id`, `judul`, `kategori` (`Web` / `Mobile` / `Lainnya`), `ringkasan` (`{ id, en }`), `deskripsi` (`{ id, en }`), `teknologi` (array string), `gambar` (path atau `null`), `linkDemo` (atau `null`), `linkGithub` (atau `null`), `tahun`.

**`sertifikat.js`**: `id`, `nama`, `jenis` (`Lomba` / `Sertifikat`), `penyelenggara`, `tahun`, `keterangan` (`{ id, en }`, boleh kosong), `link` (atau `null`).

**`keahlian.js`**: array kelompok `{ nama: { id, en }, ikon, daftar: [string] }`, hanya 4 kelompok.

**`linimasa.js`**: `daftarLembar` dan `daftarBab` (lihat contoh di atas).

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

- Target Lighthouse mobile: Performance minimal 85, Accessibility minimal 95, SEO minimal 95.
- Muat awal di bawah 2 MB. Di Mode Buku, hanya sampul dan ilustrasi spread 1 dan 2 yang `loading="eager"`, sisanya `loading="lazy"`. Audio tidak dimuat sebelum suara dinyalakan.
- Gunakan `will-change: transform` hanya pada lembar yang sedang bergerak. Bayangan halaman dibuat dengan gradien CSS.
- Semua gambar punya `alt` bermakna. Gambar dekoratif memakai `alt=""` dan `aria-hidden="true"`.
- Semua konten tetap ada di DOM (aman untuk SEO dan pembaca layar), dan halaman yang tidak terlihat diberi `inert` dan `aria-hidden`.
- Semua bisa dioperasikan dengan keyboard, fokus terlihat jelas (`focus:outline` warna `bintang` di latar gelap, `hutan` di halaman terang), tombol ikon punya `aria-label`.
- Kontras: `hutan` atau `tinta` di atas `kertas` atau `pasir`, `kertas` di atas `malam`. Jangan memakai `bintang` atau `jingga` untuk teks kecil di latar terang.
- **Mobile first.** Mode Halaman harus nyaman di lebar 360 px.
- `index.html`: `title`, `meta description`, Open Graph, `theme-color` (`#0d1136`), dan favicon.

## Deploy ke Cloudflare Pages

1. Push repo ke GitHub (akun Kalzz76).
2. Di Cloudflare Pages: Create project, hubungkan repo.
3. Build command `npm run build`, output directory `dist`.
4. Environment variables: `NODE_VERSION` = `20`, `VITE_WEB3FORMS_KEY`.
5. Setiap `git push` ke `main` otomatis ter-deploy. Hasil awal `namaproject.pages.dev`.
6. Domain sendiri bisa ditambahkan belakangan lewat Custom domains.

## Urutan Pengerjaan Modul

Kerjakan bertahap. Setelah tiap tahap, pastikan `npm run dev` jalan tanpa error dan `npm run build` berhasil.

1. **Fondasi**: project Vite + React, Tailwind (token warna, font, `shadow-lembut`), `index.css` (font, keyframes, aturan `backface-visibility`), struktur folder, `docs/CREDITS.md`.
2. **Bahasa**: `KonteksBahasa`, `id.json`, `en.json`, `TombolBahasa`, update `lang` dan `title`.
3. **Mode Halaman lebih dulu**: `Navbar`, lima komponen `isi/` dengan data dan placeholder `ilustrasi/`, `PembatasGelombang`, `KartuKertas`, `TombolPil`, `Modal`, `Footer`. Setelah tahap ini website sudah bisa dibaca penuh dan siap dipakai di HP.
4. **Konten inti**: Proyek (filter, pagination, modal), Pencapaian (tab, pagination), Keahlian (4 kartu), Tentang.
5. **Form kontak**: validasi, honeypot, Web3Forms, pesan error dan sukses, alternatif `mailto:`.
6. **Sampul dan latar luar**: komponen `Sampul` (placeholder gradien dulu), `Latar` dengan `Bintang` dan `KunangKunang`, bab malam di Mode Halaman.
7. **Mode Buku**: `useModeBuku`, `linimasa.js`, `Buku`, `Lembar`, kamera, urutan `zIndex`, bayangan halaman, `inert`, navigasi menggulung ke bab, hash, keyboard, `PenandaBab`.
8. **Intro sampul untuk HP**: `IntroSampul` dan peralihan ke alur scroll biasa.
9. **Ilustrasi asli dan suara**: ganti placeholder dengan WebP asli, lalu `useSuara`, `TombolSuara`, musik, efek.
10. **Penutup**: aksesibilitas, uji Safari dan HP asli, optimasi gambar dan audio, SEO, deploy, analytics (opsional).

## Catatan Penting

- Semua konten ditulis di `src/data/` dan `src/i18n/`, jangan di dalam komponen. Teks di kedua bahasa harus selalu lengkap.
- Kalau butuh ilustrasi, audio, atau foto yang belum ada, **pakai placeholder dan beri tahu**.
- Jangan commit file mentah besar (PSD, audio mentah, gambar resolusi asli ratusan MB) atau `.env`.
- Commit kecil dan jelas, contoh `feat: tambah lembar buku`.
- **Belum dikerjakan (ditunda, jangan ditambahkan kecuali diminta):** halaman blog, CMS atau admin, login, database, komentar, mode terang/gelap tambahan, bahasa ketiga, PWA dan service worker, React Router dan halaman terpisah per proyek, game mini, integrasi API GitHub otomatis, chatbot, grafik statistik skill berbentuk persen, mode buku 3D satu halaman per layar untuk HP, efek parallax pada ilustrasi.