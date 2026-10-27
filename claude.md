# Portofolio Kaka Andrea Yahya — Konsep: Grimoire Alkimia

Website portofolio pribadi milik **Kaka Andrea Yahya**, siswa SMKN 13 Bandung jurusan Rekayasa Perangkat Lunak (RPL) yang fokus pada pengembangan web dan mobile. Dibangun dengan **Vite + React + Tailwind CSS**, berupa **situs statis** tanpa backend dan tanpa database, dihosting gratis di **Cloudflare Pages**. Tidak ada login dan tidak ada halaman admin. Semua konten diubah lewat file data di `src/data/` dan `src/i18n/`.

> Cara memakai file ini: ganti namanya menjadi `CLAUDE.md` dan taruh di root folder proyek.

## Konsep: Grimoire Alkimia

Website adalah **buku sihir alkimia kuno** milik seorang alkemis muda. Setiap bab adalah satu **halaman perkamen tua** yang berisi catatan, tabel unsur, resep ramuan, dan segel. Pengunjung membaca dengan scroll biasa. Latar di belakang halaman adalah ruang studi alkemis di malam hari: bintang, debu melayang, dan cahaya lilin berkedip.

Empat mekanik khas (semuanya dibuat dengan CSS, SVG, canvas 2D, dan framer-motion, tanpa 3D dan tanpa video):

1. **Halaman perkamen tua**: kartu besar bertekstur kertas tua dengan tepi hangus, noda, bingkai emas, dan ornamen sudut.
2. **Tinta tak kasat mata** (`TintaGaib`): teks ringkasan proyek hampir tidak terlihat, lalu **menyala (glowing)** hanya di sekitar kursor saat disorot, dan padam perlahan setelah kursor pergi.
3. **Transisi ramuan tumpah** (`TransisiRamuan`): saat pengunjung klik menu navigasi, cairan ramuan berwarna naik menutupi layar, halaman melompat ke bab tujuan, lalu cairan turun.
4. **Debu bintang** (`DebuBintang`): saat judul sebuah bab masuk layar, ledakan debu bintang kecil muncul di sekitarnya.

- **Satu layout untuk semua perangkat.** Scroll biasa.
- **Bahasa**: dwibahasa, Indonesia (default) dan Inggris.
- **Animasi level penuh**, dengan semua efek bisa dimatikan (reduced-motion dan tombol).
- **Suara**: musik misterius lembut dan efek sihir, **default mati**.
- **Target pengunjung**: calon pemberi kerja magang, juri lomba, guru, dan kolaborator. **Keterbacaan lebih penting daripada efek.** Karena itu ada tombol "Nyalakan Semua Tinta" yang selalu tersedia (lihat bagian Tinta Tak Kasat Mata).

### Aturan Orisinalitas (WAJIB)
- Dilarang menyalin website atau karya orang lain: ilustrasi, karakter, logo, teks, dan tata letak harus buatan sendiri.
- Dilarang memakai nama, logo, karakter, atau simbol khas franchise berhak cipta (contoh: Harry Potter, Fullmetal Alchemist, Dungeons & Dragons, The Elder Scrolls, Hogwarts, Deathly Hallows). Simbol alkimia klasik (planet, unsur api, air, tanah, udara) adalah simbol sejarah dan bebas dipakai, tetapi digambar sendiri sebagai SVG.
- Audio dan font harus buatan sendiri atau berlisensi bebas (CC0/MIT/OFL), dicatat di `docs/CREDITS.md`.

## URUTAN KERJA (BACA DULU SEBELUM MENGERJAKAN APA PUN)

1. Baca file ini sampai selesai.
2. Kalau ada folder `referensi/` berisi desain (screenshot atau HTML), CV lama, atau kode lama buatan sendiri, baca untuk memahami selera visual dan gaya penulisan kode.
3. Baru tulis kode, mengikuti ATURAN PENULISAN KODE di bawah.

Kalau ada perbedaan antara file lain dan file ini, **file ini yang jadi acuan final**. Kalau ada bagian bertanda `TODO` atau data yang belum jelas, **tanya dulu**, jangan mengarang.

## ATURAN PENULISAN KODE (WAJIB DIPATUHI)

Kode di project ini harus sederhana dan bersih, terlihat ditulis manual oleh pelajar, bukan hasil generate.

1. **DILARANG menulis komentar di dalam kode.** Tidak ada `//`, `/* */`, `{/* */}` di JSX, dan komentar di CSS atau JSON.
2. **Kode harus sederhana.** Tidak boleh ada pola arsitektur rumit: tanpa Redux/Zustand, tanpa React Query, tanpa `useReducer`, tanpa higher-order component, tanpa render props, tanpa class component. State cukup `useState`, `useEffect`, `useRef`, dan `useContext` untuk bahasa, suara, tinta, dan transisi. `requestAnimationFrame` dan canvas **hanya boleh dipakai di folder `components/efek/`**. Custom hook yang diizinkan hanya `useSuara`.
3. **Hindari sintaks yang terlihat canggih**: `reduce` bertingkat, chaining `map().filter().map()` panjang, ternary bersarang, optional chaining bertumpuk, destructuring bertingkat, closure kompleks, `&&` berantai di JSX. Pakai `if`, `for`, `map` sederhana, dan fungsi biasa dengan nama jelas.
4. **Yang penting jalan dan tidak error.** Utamakan kode yang lurus dan mudah dibaca daripada kode yang pintar.
5. Nama variabel, fungsi, dan state boleh campur Indonesia/Inggris (`daftarProyek`, `bukaModal`, `bahasaAktif`, `handleKirim`). Nama komponen memakai PascalCase, satu komponen per file.
6. Semua teks untuk pengunjung (label, tombol, pesan error, pesan sukses) **tidak boleh ditulis langsung di komponen**. Ambil dari kamus bahasa lewat fungsi `t('kunci')`, dan tulis di `id.json` dan `en.json`.
7. Konten proyek, sertifikat, dan skill ditulis di `src/data/`, bukan di dalam komponen. Warna ramuan per bab ditulis di `src/data/ramuan.js`.
8. Styling memakai **Tailwind CSS**. Warna memakai token tema, jangan menulis kode hex langsung di komponen. Hex hanya boleh di `tailwind.config.js`, `src/data/ramuan.js`, dan blok `:root` di `src/styles/index.css` (sebagai variabel `--warna-*` yang dipakai CSS buatan sendiri). CSS buatan sendiri hanya untuk hal yang tidak bisa dengan Tailwind (font, `@keyframes`, tekstur perkamen, mask tinta gaib).
9. Library tambahan yang diizinkan hanya: **framer-motion** (animasi) dan **howler** (suara). Canvas 2D dan IntersectionObserver adalah API bawaan browser dan boleh dipakai. Library lain **tanya dulu**.
10. Fitur yang tidak ada di file ini tidak boleh ditambahkan hanya karena terpikir bagus. Kalau ragu, tanya dulu.
11. `localStorage` dan `window` selalu dibungkus pemeriksaan aman (`try ... catch` untuk `localStorage`).
12. Jangan hardcode secret. Kunci layanan form dibaca dari `import.meta.env.VITE_WEB3FORMS_KEY`.
13. Teks yang **tampil di layar** boleh berisi tanda kutip atau simbol apa pun. Larangan komentar hanya berlaku untuk **kode sumber**.

Aturan ini berlaku untuk semua perubahan berikutnya, tanpa perlu diingatkan lagi.

## Tech Stack

- **Build tool**: Vite. **UI**: React 18 (JavaScript/JSX, bukan TypeScript).
- **Styling**: Tailwind CSS 3 lewat npm, token warna di `tailwind.config.js`.
- **Animasi**: framer-motion (`motion`, `AnimatePresence`, `whileInView`), CSS `@keyframes`, dan canvas 2D untuk debu bintang.
- **Suara**: howler.
- **Ikon dan hiasan**: SVG inline buatan sendiri (simbol alkimia, botol ramuan, segel lilin, sudut hias, lingkaran sigil). Tanpa library ikon.
- **Tekstur**: perkamen, noda, dan hangus dibuat dengan CSS (gradien, noise SVG sebagai data URI, inset box-shadow). Tanpa file gambar.
- **Font** (Google Fonts, OFL, `display=swap`): **Cinzel Decorative** (judul besar dan nama), **Cormorant Garamond** (isi dan paragraf), **IM Fell English** (catatan pinggir, label, dan kutipan miring).
- **Form kontak**: Web3Forms, dipanggil dengan `fetch`. **Hosting**: Cloudflare Pages.

Perintah: `npm install`, `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`.

**Catatan audio:** browser memblokir autoplay sebelum pengunjung berinteraksi, jadi musik hanya mulai setelah tombol suara ditekan.

## Struktur Project

```
portfolio-kaka/
├── public/
│   ├── audio/                 grimoire-loop.mp3, sfx-ramuan.mp3, sfx-debu.mp3, sfx-tinta.mp3, sfx-segel.mp3
│   ├── cv/                    CV_Kaka_ID.pdf, CV_Kaka_EN.pdf
│   ├── favicon.png
│   └── og-image.png           1200x630
├── src/
│   ├── assets/                logo-kaka.svg, potret-kaka.webp (opsional), assets/proyek/
│   ├── components/
│   │   ├── efek/              LatarGrimoire, DebuBintang, TransisiRamuan, LingkaranSigil
│   │   ├── dekorasi/          SudutHias, PemisahAlkimia, SimbolAlkimia, BotolRamuan, SegelLilin, HurufAwal
│   │   ├── sections/          Hero, Tentang, Keahlian, Proyek, Pencapaian, Kontak
│   │   └── ui/                Navbar, Perkamen, TintaGaib, TombolLilin, KartuEksperimen, UbinUnsur, Modal, TombolPlakat, TombolBahasa, TombolSuara, Ikon, Footer
│   ├── data/                  proyek.js, sertifikat.js, keahlian.js, profil.js, bab.js, ramuan.js
│   ├── i18n/                  id.json, en.json, KonteksBahasa.jsx
│   ├── context/               KonteksTinta.jsx, KonteksTransisi.jsx
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

| Token          | Hex       | Penggunaan                                           |
| -------------- | --------- | ---------------------------------------------------- |
| `malamsihir`   | `#14173a` | Latar studio alkemis (langit ruang), navbar          |
| `ungu`         | `#4b2a6b` | Aksen sihir, ramuan Web                              |
| `ungugelap`    | `#1d1230` | Kulit hitam (halaman Proyek, tempat tinta menyala)   |
| `perkamen`     | `#d8c08a` | Halaman perkamen utama                               |
| `perkamentua`  | `#c2a468` | Noda, badge, tab tidak aktif                         |
| `sepia`        | `#2e1f12` | Teks di atas perkamen                                |
| `tembaga`      | `#8a5a2b` | Garis dan ornamen cokelat                            |
| `emas`         | `#c9a227` | Bingkai, judul di latar gelap, ornamen               |
| `krem`         | `#f4ead2` | Teks di atas latar gelap                             |
| `ramuanhijau`  | `#3fae6b` | Ramuan, status, kategori Web                         |
| `ramuanbiru`   | `#2f6fba` | Ramuan, kategori Mobile                              |
| `ramuanmerah`  | `#9b2c2c` | Segel lilin, stempel, tombol utama                   |
| `cahayatinta`  | `#ffe9a8` | Warna tulisan saat tinta gaib menyala                |

| Elemen                        | Kelas Tailwind                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------ |
| Latar halaman                 | `bg-malamsihir text-krem font-isi` (ditimpa `LatarGrimoire`)                                           |
| Navbar                        | `fixed top-0 inset-x-0 z-50 bg-malamsihir/90 backdrop-blur border-b border-emas/50`                    |
| Link navbar                   | `font-aksen text-sm tracking-[0.15em] text-krem hover:text-emas`, aktif `text-emas`                    |
| Halaman perkamen (`Perkamen`) | `relative bg-perkamen text-sepia rounded-sm shadow-halaman perkamen-tua p-6 md:p-10`                   |
| Halaman kulit hitam           | `relative bg-ungugelap text-krem rounded-sm shadow-halaman kulit-hitam p-6 md:p-10`                    |
| Tombol utama (`TombolPlakat`) | `bg-ramuanmerah text-krem font-judul text-xs uppercase tracking-widest px-6 py-2.5 border-2 border-emas rounded-sm hover:bg-emas hover:text-sepia` |
| Tombol sekunder               | `border-2 border-emas text-emas font-judul text-xs uppercase tracking-widest px-6 py-2.5 rounded-sm hover:bg-emas hover:text-sepia` |
| Judul bab di perkamen         | `font-judul text-sepia text-3xl md:text-4xl`                                                           |
| Judul bab di kulit hitam      | `font-judul text-emas text-3xl md:text-4xl`                                                            |
| Catatan pinggir               | `font-aksen italic text-tembaga text-base`                                                             |
| Badge bahan                   | `bg-perkamentua text-sepia border border-tembaga/60 rounded-sm px-2 py-0.5 text-sm font-aksen`         |
| Tab aktif / tidak aktif       | aktif `bg-ramuanmerah text-krem`, tidak aktif `bg-perkamentua text-sepia`, keduanya `font-judul text-xs uppercase tracking-widest px-4 py-1.5 border-2 border-emas/70 rounded-sm` |
| Kolom input                   | `bg-perkamentua/60 text-sepia border-2 border-tembaga/60 rounded-sm px-3 py-2 font-isi focus:border-ramuanmerah outline-none` |
| Pesan error                   | `bg-ramuanmerah/15 text-ramuanmerah border border-ramuanmerah rounded-sm px-3 py-2`                    |
| Modal                         | overlay `bg-malamsihir/85 backdrop-blur-sm`, kotak halaman kulit hitam `max-w-2xl`                     |

`shadow-halaman` = `0 10px 30px rgba(0, 0, 0, 0.55)`. Sudut hampir tajam (`rounded-sm`).

**Kelas CSS buatan sendiri** di `index.css`:
- `.perkamen-tua`: lapisan `background-image` berisi beberapa `radial-gradient` noda cokelat transparan, satu noise SVG halus (data URI `feTurbulence`), serta `box-shadow: inset 0 0 70px rgba(74, 47, 26, 0.6), inset 0 0 10px rgba(0, 0, 0, 0.5)` agar tepi tampak hangus.
- `.kulit-hitam`: gradien gelap dengan noise halus dan inset shadow tipis berwarna emas.
- Semua warna di CSS memakai variabel `--warna-*`, bukan hex langsung.

### Tipografi
- `font-judul` = Cinzel Decorative (hanya judul bab, nama, dan tombol), `font-isi` = Cormorant Garamond, `font-aksen` = IM Fell English (catatan pinggir, label, badge, kutipan).
- Teks isi minimal `text-lg` (Cormorant berukuran kecil secara optik). Di perkamen pakai `text-xl` untuk paragraf pembuka.
- `HurufAwal`: huruf pertama paragraf pembuka Tentang, besar 4 baris, berwarna `ramuanmerah`, di kotak bergaris emas tipis.
- Jangan menaruh `emas` atau `cahayatinta` sebagai teks kecil di atas `perkamen` (kontras kurang).

## Latar Studio Alkemis (`LatarGrimoire`)

Lapisan tetap `fixed inset-0 -z-10`, dari belakang ke depan:
1. Gradien gelap `malamsihir` ke warna yang lebih gelap.
2. **Bintang**: 70 titik kecil di desktop, 35 di mobile, dibuat **sekali** saat dimuat (`useState` dengan fungsi awal berisi perulangan `for`), berkedip dengan `@keyframes berkedip` (2 sampai 5 detik).
3. **Debu melayang**: 24 titik di desktop dan 12 di mobile, naik pelan dengan `@keyframes melayang` (10 sampai 20 detik).
4. **Cahaya lilin**: dua gradien radial hangat di dua sudut bawah, animasi `@keyframes lilin` (opasitas 0.55 sampai 0.8, 3 sampai 5 detik, tidak serempak).
5. **Rasi bintang**: satu SVG garis tipis penghubung beberapa bintang besar di sisi kanan atas (statis).

Reduced-motion: matikan kedip, melayang, dan lilin (semuanya statis).

## Tinta Tak Kasat Mata (`TintaGaib`)

Dipakai **hanya** untuk **ringkasan proyek di kartu eksperimen** (bab Proyek di halaman kulit hitam). Tidak dipakai untuk judul, badge, tombol, link, atau teks yang wajib dibaca recruiter (nama, kontak, CV).

### Struktur
Satu `div` yang bisa difokus (`tabIndex={0}`) berisi **dua lapisan teks yang sama**:
- **Lapisan dasar** (`.tinta-dasar`): warna `krem` dengan opasitas sangat rendah (sekitar 0.14), supaya samar tapi masih ada bentuk goresannya. Ini teks asli yang dibaca pembaca layar.
- **Lapisan cahaya** (`.tinta-cahaya`): teks yang sama (`aria-hidden="true"`), `position: absolute`, warna `cahayatinta` dengan `text-shadow` bercahaya, dan **mask radial** yang mengikuti kursor.

### CSS inti (di `index.css`)

```css
.tinta-gaib {
  position: relative;
}

.tinta-dasar {
  color: var(--warna-krem);
  opacity: 0.14;
}

.tinta-cahaya {
  position: absolute;
  inset: 0;
  color: var(--warna-cahayatinta);
  text-shadow: 0 0 8px var(--warna-emas);
  pointer-events: none;
  opacity: 0;
  transition: opacity 1.5s ease;
  -webkit-mask-image: radial-gradient(circle 90px at var(--x, -300px) var(--y, -300px), #000 0%, transparent 100%);
  mask-image: radial-gradient(circle 90px at var(--x, -300px) var(--y, -300px), #000 0%, transparent 100%);
}

.tinta-gaib.menyala .tinta-cahaya {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.tinta-gaib.semua .tinta-dasar {
  opacity: 1;
}

.tinta-gaib.semua .tinta-cahaya {
  opacity: 0;
}
```

(`#000` dalam mask hanya penanda hitam penuh untuk mask, bukan warna tampilan.)

### Komponen

```jsx
import { useRef, useState, useEffect, useContext } from 'react'
import { KonteksTinta } from '../../context/KonteksTinta.jsx'

export default function TintaGaib({ children }) {
  const kotakRef = useRef(null)
  const [menyala, setMenyala] = useState(false)
  const { terungkapSemua, mainkanTinta } = useContext(KonteksTinta)

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
    mainkanTinta()
  }

  function handleKeluar() {
    setMenyala(false)
  }

  let kelas = 'tinta-gaib'
  if (menyala) {
    kelas = kelas + ' menyala'
  }
  if (terungkapSemua) {
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
      <p className="tinta-dasar">{children}</p>
      <p className="tinta-cahaya" aria-hidden="true">{children}</p>
    </div>
  )
}
```

`mainkanTinta` memainkan `sfx-tinta` **hanya sekali per blok** per kunjungan (dicatat di dalam konteks), agar tidak mengganggu.

### Perilaku dan jalan keluar (WAJIB, supaya tidak menyulitkan pembaca)
- **Kursor (mouse/trackpad)**: tulisan menyala dalam lingkaran sekitar 90 px di bawah kursor, dan **padam perlahan** (1.5 detik) setelah kursor pergi.
- **Layar sentuh** (`(pointer: coarse)`): tidak ada kursor, jadi tiap blok **menyala penuh otomatis** satu kali saat berada di tengah layar (IntersectionObserver, ambang 0.6), dan tetap menyala sesudahnya. Mengetuk blok juga menyalakannya.
- **Keyboard**: fokus pada blok (Tab) menyalakannya penuh.
- **Tombol Nyalakan Semua Tinta** (`TombolLilin`): tombol bulat berikon lilin di navbar. Menyetel `terungkapSemua` untuk seluruh situs (lapisan dasar menjadi opasitas penuh, tanpa glow). Pilihan disimpan di `localStorage` kunci `tintaTerungkap`. Tombol punya `aria-pressed` dan `aria-label`.
- **prefers-reduced-motion**: `terungkapSemua` otomatis aktif.
- Di atas kartu proyek ada petunjuk kecil: "Sorot dengan kursor untuk membaca tulisan gaib" (di sentuh: "Tulisan akan menyala saat kamu menggulir ke sini").
- Saat `Modal` detail proyek dibuka, teks lengkap **menyala berurutan sendiri** (tiap paragraf fade-in dengan glow, jeda 0.4 detik) lalu **menetap terbaca penuh** tanpa perlu kursor.

## Transisi Ramuan Tumpah dan Debu Bintang

### `TransisiRamuan` (saat klik menu)
Overlay penuh layar (`fixed inset-0 z-[60] pointer-events-none`). Tiga tahap dikelola di `KonteksTransisi` (`diam`, `menutup`, `membuka`) dengan `motion.div`:
1. **Menutup** (0.6 detik, `easeIn`): cairan ramuan (SVG dengan tepi atas bergelombang dan gelembung kecil) naik dari bawah menutupi layar. Warna dari `src/data/ramuan.js` sesuai bab tujuan. `sfx-ramuan` dimainkan.
2. Saat selesai menutup (`onAnimationComplete`): halaman melompat ke bab tujuan (`scrollIntoView` tanpa animasi), hash diubah dengan `history.replaceState`.
3. **Membuka** (0.7 detik, `easeOut`): cairan turun ke atas (menguap) dan overlay kembali `diam`.
- Pemanggilan lewat fungsi `mulaiTransisi(hash)` dari konteks, dipakai Navbar, tombol Hero, dan tombol kembali ke atas.
- **Scroll biasa (wheel/sentuh) tidak memicu overlay.** Hanya klik navigasi.
- Reduced-motion: tanpa overlay, pakai scroll halus biasa.

```js
export const warnaRamuan = {
  hero: '#4b2a6b',
  tentang: '#8a5a2b',
  keahlian: '#3fae6b',
  proyek: '#2f6fba',
  pencapaian: '#c9a227',
  kontak: '#9b2c2c'
}
```

### `DebuBintang` (saat judul bab masuk layar)
- Komponen canvas 2D absolut (`pointer-events-none`, `aria-hidden`) di belakang tiap judul bab. Saat judul masuk viewport (IntersectionObserver, ambang 0.6, **sekali saja**), muncul **36 partikel** di desktop dan 18 di mobile dari tengah judul.
- Tiap partikel: kecepatan acak ke segala arah, gravitasi sangat kecil, hidup 1.6 detik, memudar, berbentuk titik bercahaya atau bintang empat sudut kecil, warna acak dari `emas`, `krem`, dan `ramuanhijau`.
- Digambar dengan `requestAnimationFrame` yang **berhenti otomatis** saat semua partikel mati. Ukuran canvas mengikuti pembungkus judul. `sfx-debu` dimainkan pelan.
- Juga dipicu satu kali saat pesan kontak berhasil terkirim (ledakan lebih besar).
- Reduced-motion: tidak ada ledakan.

## Navigasi
- **Navbar**: logo "Kaka" bergaya Cinzel dengan simbol alkimia kecil. Menu: **Home, About, Skills, Projects, Achievements, Contact** (label ikut bahasa), hash `#hero`, `#tentang`, `#keahlian`, `#proyek`, `#pencapaian`, `#kontak`. Kanan: `TombolLilin`, `TombolBahasa`, `TombolSuara`, dan hamburger (mobile). **Di mobile semua tombol tampil bersamaan di lebar 360 px.**
- Klik menu memicu `TransisiRamuan`. Link dengan hash yang dibuka langsung dari URL melompat tanpa overlay.
- Bab aktif ditandai dengan IntersectionObserver (ambang 0.5). `scroll-margin-top` sebesar tinggi navbar.

## Isi Tiap Bab

Setiap bab diawali `PemisahAlkimia` (garis tipis emas dengan simbol alkimia di tengah) dan judul dengan `DebuBintang`. Elemen muncul dengan `whileInView` (opacity 0 ke 1, naik 24 px, 0.7 detik, sekali).

### 1. Segel Pembuka (Hero) — `#hero`
Layar penuh. Di tengah: **`LingkaranSigil`** besar (SVG, tiga cincin konsentris yang berputar berlawanan arah sangat pelan, 60 sampai 120 detik, berisi 12 simbol alkimia, garis segitiga dan bintang di tengah). Di dalam lingkaran: label kecil "ALKEMIS WEB & MOBILE · BANDUNG", judul "Kaka Andrea Yahya" (`font-judul text-emas`), peran "Software Engineering Student", tagline satu kalimat, dua tombol: **Buka Grimoire** (memicu transisi ramuan ke `#tentang`) dan **Unduh Gulungan CV**. Petunjuk "Gulir untuk membalik halaman" dengan panah bergerak pelan. Di mobile sigil mengecil dan berada di belakang teks dengan opasitas rendah.

### 2. Catatan Sang Alkemis (Tentang) — `#tentang`
Satu halaman perkamen besar dengan **catatan pinggir**: coretan kecil `font-aksen italic` di tepi (contoh "diuji di Bandung", bisa diganti Kaka lewat i18n).
- Kiri: potret di dalam **lingkaran alkimia** bergaris emas (`potret-kaka.webp`, kalau tidak ada tampilkan simbol "K").
- Kanan: nama, "Gelar: Pengembang Web & Mobile", paragraf bio dengan `HurufAwal`.
- Di bawah: **empat kartu unsur**: **Tanah** (Asal: Bandung), **Api** (Akademi: SMKN 13 Bandung, RPL), **Air** (Organisasi: IRMA), **Udara** (Bahasa: Indonesia aktif, Inggris dasar, Sunda dasar). Tiap kartu punya simbol unsur SVG.
- **Dilarang** menampilkan level, statistik, atau angka kemampuan karangan.

### 3. Tabel Unsur (Keahlian) — `#keahlian`
Tampilan seperti **tabel periodik versi alkimia** di atas perkamen. Empat kelompok berwarna sesuai unsur, tiap kelompok berisi **ubin unsur** (`UbinUnsur`): kotak persegi bergaris emas berisi **simbol 2 huruf** besar (contoh `Js`), nama teknologi kecil di bawahnya, dan nomor urut kecil di pojok.

| Unsur (judul kelompok)        | Isi                                        | Warna ubin       |
| ----------------------------- | ------------------------------------------ | ---------------- |
| Api (Bahasa Pemrograman)      | HTML, CSS, JavaScript, PHP, C#, Dart       | `ramuanmerah`    |
| Tanah (Framework)             | Laravel, Flutter                           | `tembaga`        |
| Air (Database & Cloud)        | MySQL, AWS                                 | `ramuanbiru`     |
| Udara (Desain)                | Figma, Canva                               | `ramuanhijau`    |

Saat hover, ubin terangkat dan bersinar warna kelompoknya. **Dilarang persentase, bar, atau level.** Nama teknologi asli selalu tampil.

### 4. Ramuan dan Eksperimen (Proyek) — `#proyek`
Halaman **kulit hitam** (agar tinta menyala terlihat jelas). Di atas: judul, petunjuk tinta, filter pil **Semua, Web, Mobile, Lainnya**. Grid 1 kolom di HP, 2 di tablet, 3 di desktop. Semua proyek tampil (tanpa pagination).

`KartuEksperimen`:
- `BotolRamuan` (SVG) berwarna sesuai kategori: Web `ramuanhijau`, Mobile `ramuanbiru`, Lainnya `ungu`. Cairan di dalam botol bergoyang pelan.
- Label "Eksperimen No. n" (`font-aksen`), **judul proyek tampil jelas** berwarna `emas`.
- **Ringkasan dalam `TintaGaib`.**
- Baris "Bahan:" berisi badge teknologi (tampil jelas).
- Stempel miring "BERHASIL" berwarna `ramuanmerah` kalau `status` proyek `Selesai`.
- Tombol **Buka Eksperimen** membuka `Modal` "Halaman Resep": gambar proyek, deskripsi lengkap (menyala berurutan lalu terbaca penuh), daftar bahan, tombol link demo dan GitHub (hanya kalau ada), `SegelLilin` kecil. Ditutup lewat tombol Tutup, klik di luar kotak, atau `Esc`, fokus kembali ke pemicu.

### 5. Segel dan Gelar (Pencapaian) — `#pencapaian`
Halaman perkamen dengan dua tab: **Ujian Besar** (Lomba) dan **Segel Piagam** (Sertifikat). Tiap item berbentuk **medali bersimbol** (lingkaran emas dengan simbol alkimia, nama, penyelenggara, tahun, keterangan, link kalau ada). Dilarang menampilkan juara atau gelar yang belum benar-benar diraih.

### 6. Pesan Gaib (Kontak) — `#kontak`
Dua kolom (bertumpuk di HP):
- Kiri: ilustrasi **lilin dan tintera** (SVG sederhana, api lilin berkedip) dan empat `SegelLilin` berisi ikon **GitHub, LinkedIn, Email, Unduh CV** (link dengan `aria-label`).
- Kanan: halaman perkamen berbentuk surat dengan form kontak.
- Saat berhasil: `SegelLilin` besar tercap (skala 1.4 ke 1), `DebuBintang` meledak, pesan "Suratmu sudah menyatu dengan bintang", dan `sfx-segel` dimainkan.

### Footer
Latar `malamsihir`, `PemisahAlkimia`, tulisan "Grimoire ini belum selesai. Halaman berikutnya masih ditulis.", teks hak cipta, ringkasan kredit aset, dan tombol kembali ke atas (memicu transisi ramuan ke `#hero`).

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
- Nama orang, proyek, teknologi, dan lomba tidak diterjemahkan. Julukan bertema (Eksperimen, Bahan, Tabel Unsur, dan lainnya) diterjemahkan lewat kamus, dan nama asli teknologi selalu tampil.

## Suara
- File: `grimoire-loop.mp3` (musik misterius lembut berbahan celesta atau harpsichord, berulang), `sfx-ramuan.mp3`, `sfx-debu.mp3`, `sfx-tinta.mp3`, `sfx-segel.mp3`. Musik di bawah 1 MB, efek di bawah 50 KB.
- **Default MATI.** Audio tidak dimuat sebelum `TombolSuara` ditekan. `useSuara`: `suaraAktif`, `nyalakanSuara`, `matikanSuara`, `mainkanEfek(nama)`. Preferensi di `localStorage` kunci `suaraAktif`. Volume musik 0.3, efek 0.5.
- `TombolSuara` berbentuk plakat bulat berikon, dengan `aria-label` yang berubah.

## Daftar Aset
Hampir semua visual dibuat dengan kode. Yang perlu disiapkan:

| Aset                | Keterangan                                                         | Wajib? |
| ------------------- | ------------------------------------------------------------------ | ------ |
| `logo-kaka.svg`     | Logo teks "Kaka" bergaya Cinzel dengan simbol alkimia kecil         | Ya (boleh dari teks dulu) |
| `potret-kaka.webp`  | Foto atau ilustrasi gaya sketsa, rasio 1:1, sekitar 600 x 600       | Opsional, `TODO` |
| Gambar proyek       | Screenshot di `src/assets/proyek/`, rasio 16:10                     | `TODO` per proyek |
| `og-image.png`      | 1200 x 630                                                          | Ya |
| Audio               | Lima file di `public/audio/`, berlisensi bebas atau buatan sendiri  | Ya, bisa belakangan |

Gunakan **placeholder** untuk aset yang belum ada dan beri tahu. Jangan mengambil gambar atau audio dari internet tanpa lisensi jelas.

## Struktur Data
- **`profil.js`**: `nama`, `peran`, `tagline`, `tentang` (semuanya `{ id, en }` bila teks), `lokasi`, `github`, `linkedin`, `email`, `pendidikan`, `organisasi`, `bahasa`.
- **`proyek.js`**: `id`, `judul`, `kategori` (`Web` / `Mobile` / `Lainnya`), `status` (`Selesai` / `Berjalan`), `ringkasan` dan `deskripsi` (`{ id, en }`), `teknologi` (array), `gambar` atau `null`, `linkDemo` atau `null`, `linkGithub` atau `null`, `tahun`.
- **`sertifikat.js`**: `id`, `nama`, `jenis` (`Lomba` / `Sertifikat`), `penyelenggara`, `tahun`, `keterangan` (`{ id, en }`), `link` atau `null`.
- **`keahlian.js`**: array kelompok `{ unsur: 'api' | 'tanah' | 'air' | 'udara', nama: { id, en }, daftar: [{ nama, simbol }] }`, hanya 4 kelompok. Contoh simbol: HTML `Ht`, CSS `Cs`, JavaScript `Js`, PHP `Ph`, C# `C#`, Dart `Da`, Laravel `La`, Flutter `Fl`, MySQL `My`, AWS `Aw`, Figma `Fi`, Canva `Ca`.
- **`bab.js`** (hash, kunci i18n per bab) dan **`ramuan.js`** (warna per bab).

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
- Animasi hanya `transform` dan `opacity`, kecuali mask tinta yang hanya mengubah variabel CSS. `will-change: transform` hanya pada elemen yang sedang bergerak. Canvas debu bintang berhenti total saat tidak ada partikel.
- **Tinta gaib tidak boleh menjadi hambatan**: teks asli selalu ada di DOM dan terbaca pembaca layar, ada tombol Nyalakan Semua Tinta, sentuh dan keyboard punya jalan sendiri, dan reduced-motion mengungkap semuanya.
- Gambar bermakna punya `alt`; dekorasi (sigil, bintang, debu, canvas, overlay ramuan) memakai `aria-hidden="true"`.
- Semua bisa dioperasikan dengan keyboard, fokus terlihat jelas (`focus:outline` warna `emas`), modal mengembalikan fokus ke pemicu.
- Kontras: `sepia` di atas `perkamen`, `krem` atau `emas` di atas gelap.
- **Mobile first.** Semua bab nyaman di lebar 360 px.
- `index.html`: `title`, `meta description`, Open Graph, `theme-color` (`#14173a`), favicon.

## Deploy ke Cloudflare Pages
1. Push repo ke GitHub (akun Kalzz76). 2. Cloudflare Pages, Create project, hubungkan repo. 3. Build command `npm run build`, output `dist`. 4. Environment variables `NODE_VERSION` = `20` dan `VITE_WEB3FORMS_KEY`. 5. Setiap `git push` ke `main` otomatis ter-deploy. 6. Domain sendiri bisa ditambahkan belakangan.

## Urutan Pengerjaan Modul
Setelah tiap tahap pastikan `npm run dev` jalan dan `npm run build` berhasil.

1. **Fondasi**: Vite + React + Tailwind (token, font, `shadow-halaman`), `index.css` (variabel `--warna-*`, `.perkamen-tua`, `.kulit-hitam`, tinta gaib, semua `@keyframes`), struktur folder, `docs/CREDITS.md`.
2. **Bahasa**: `KonteksBahasa`, `id.json`, `en.json`, `TombolBahasa`.
3. **Kerangka**: `Navbar`, `Perkamen`, `TombolPlakat`, `PemisahAlkimia`, `SudutHias`, `Footer`, enam section kosong dengan data dan judul.
4. **Konten inti**: Tentang (empat unsur, `HurufAwal`), Keahlian (`UbinUnsur`), Pencapaian (medali, tab).
5. **Proyek tanpa tinta**: `KartuEksperimen`, `BotolRamuan`, filter, `Modal` (teks biasa dulu).
6. **Form kontak** dengan validasi, honeypot, Web3Forms, `SegelLilin`, `mailto:` cadangan.
7. **Latar**: `LatarGrimoire` (bintang, debu, lilin) dan `LingkaranSigil` di Hero.
8. **Tinta gaib**: `KonteksTinta`, `TintaGaib`, `TombolLilin`, jalur sentuh dan keyboard, modal menyala berurutan.
9. **Transisi**: `KonteksTransisi`, `TransisiRamuan`, `DebuBintang`, sambungkan ke Navbar dan form.
10. **Suara**: `useSuara`, `TombolSuara`, musik, efek.
11. **Penutup**: reduced-motion, uji sentuh di HP asli, aksesibilitas, optimasi, SEO, deploy.

## Catatan Penting
- Semua konten di `src/data/` dan `src/i18n/`, kedua bahasa harus selalu lengkap.
- Aset yang belum ada: pakai placeholder dan beri tahu. Jangan commit file mentah besar atau `.env`. Commit kecil dan jelas.
- **Belum dikerjakan (ditunda, jangan ditambahkan kecuali diminta):** buku 3D, video intro, peta interaktif, parallax kompleks, game mini, blog, CMS atau admin, login, database, mode terang/gelap tambahan, bahasa ketiga, PWA, React Router, integrasi API GitHub, chatbot, statistik skill berbentuk persen atau level, kursor kustom yang menggantikan kursor asli.
- **Tampilan awal harus sudah bisa dinavigasi oleh screen reader**: Hero muncul tanpa menunggu transisi atau interaksi. Teks utama, tombol bahasa, dan tombol menu harus sudah ada di DOM sejak awal dengan `aria-label` yang properti dan dapat diakses sebelum tinta gaib muncul.

## Instruksi Voice Access
**Web Voice Access** aktif dengan tombol keyboard "d" (Bongkar/Nyalakan Semua Tinta). Saat "d" ditekan, lakukan hal berikut secara berurutan:

1. **Nyalakan tinta gaib di semua bab** dengan memanggil fungsi `nyalakanSemuaTinta()` dari `KonteksTinta`.
2. **Animasi tinta selesai** saat semua animasi `opacity` dan `transform` selesai di setiap bab.
3. **Fokus kembali ke Hero** dengan memindahkan fokus ke elemen pertama yang dapat difokus pada bab Hero (misalnya tombol menu atau judul).
4. **Tampilkan overlay segel lilin** di bagian bawah layar saat semua tinta telah menyala.

### Alur Keyboard untuk Voice Access (terpisah dari tombol "d"):
- `d` - Bongkar/Nyalakan Semua Tinta (memanggil `nyalakanSemuaTinta()`)
- `w` - Beralih Bahasa (ID/EN)
- `f` - Beralih Filter Proyek
- `t` - Toggle Tinta Gaib (menyalakan/mematikan tinta)
- `m` - Buka Modal
- `s` - Toggle Suara (musik/sound effect)
- `h` - Toggle Reduced Motion (mematikan semua animasi)
- `1-6` - Langsung ke Bab 1-6
- panah kiri/kanan - Navigasi antar bab
- panah atas/bawah - Scroll halaman
- `Escape` - Tutup modal, batalkan tinta