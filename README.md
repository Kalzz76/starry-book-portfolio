# 🎃 Kaka Andrea Yahya — The Code Necromancer Portfolio

> 🔮 **A Gothic Halloween-Themed Interactive Pixel Art & 3D Web Portfolio**  
> *"Membangkitkan baris kode kosong menjadi pengalaman digital interaktif yang bernyawa."*

[![Vite](https://img.shields.io/badge/Vite-5.4+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-3D%20Transforms-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML5](https://img.shields.io/badge/HTML5-Semantic%20Web-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)

---

## 🌟 Ikhtisar Proyek (Project Overview)

Portofolio web interaktif personal milik **Kaka Andrea Yahya** (Fullstack Developer & *"Code Necromancer"*), siswa SMKN 13 Bandung jurusan Rekayasa Perangkat Lunak (RPL). Dibangun dengan estetika **Gothic Retro Pixel Art & Halloween Spooky-Cute**, situs ini menghadirkan perpaduan pengalaman *dungeon RPG* dengan rekayasa web modern yang bersih, performan, dan kaya akan micro-interactions.

---

## ✨ Fitur-Fitur Utama (Key Features)

### 1. 🧙‍♂️ 3D Flippable Avatar Card
- Kartu potret interaktif dengan kedalaman perspektif 3D asli (`preserve-3d`, `rotateY(180deg)`).
- **Sisi Depan (Front)**: Karakter retro 8-bit Pixel Art Necromancer bersanding dengan lencana `PIXEL ART`.
- **Sisi Belakang (Back)**: Foto potret asli beresolusi tinggi Kaka Andrea Yahya lengkap dengan framing proporsional, *subtle vignette*, dan lencana `REAL PORTRAIT`.
- Mendukung interaksi hover, klik manual (dengan isolasi event agar tidak membuka Grimoire secara tidak sengaja), audio feedback suara arwah, serta auto-rotation lambat yang elegan.

### 2. 📖 The Ancient Grimoire (2-Page Expandable Spellbook)
- Buku mantra kuno 2 halaman yang dapat diekspansi secara 3D dari kartu potret.
- **Halaman Kiri**: Daftar gulungan kode (*Spell Codex List*) dengan filter kategori (Web, Mobile, Game, Library) dan indikator status *castable*.
- **Halaman Kanan**: Lembaran perkamen mantra aktif lengkap dengan live preview interaktif, tech stack runes, tautan demo & source code GitHub.

### 3. 📜 Sacred Relics & Certificates Showcase
- Galeri sertifikasi dan kredensial resmi (Dicoding Academy, dll.) dalam tata letak *Minimalist Spotlight & Filmstrip*.
- Dilengkapi **Smart IntersectionObserver Auto-Slide**: slider hanya bergeser halus (setiap 3.5 detik) ketika pengunjung sedang berada di bagian sertifikat, dan otomatis berhenti ketika kursor diarahkan atau saat pengunjung melihat bagian lain.
- Fitur *Lightbox Zoom* dokumen sertifikat dalam resolusi penuh.

### 4. 🏰 Sanctum Courtyard & Roaming Mascots Arena
- Sandbox 2D interaktif tempat maskot sahabat (Labu Ceria, Hantu Imut, Kelelawar Malam, Kucing Hitam, Tengkorak Santuy, dan Penyihir Cilik) berpatroli secara dinamis di area taman kuburan.
- **Buku Tamu Interaktif (Ritual Arise)**: Pengunjung dapat mengirimkan nama, pesan apresiasi, serta memilih wujud maskot yang langsung bergabung ke arena secara *real-time*.
- Klik pada maskot mana pun untuk membuka **Holographic Companion Visitor Card**.

### 5. 🕯️ The Crypt Altar (Meja Altar Kripta & Kontak)
- Meja altar batu berarsitektur *Gothic anime dungeon gate* dengan lilin arwah bersumbu api ungu (*purple spectral flames*).
- Pintu mezbah ganda 3D yang dapat dibuka dengan klik untuk mengakses formulir transmisi pesan petualangan (*scroll inscription parchment ledger*).

### 6. 🎨 3 Pilihan Tema Atmosfer Dinamis
- 🩸 **Bloodmoon (Default)**: Langit malam ungu pekat dengan bulan darah crimson dan aura magis.
- ☀️ **Sunny Twilight (Day)**: Nuansa hangat siang menjelang sore dengan pendar amber dan emas.
- 🌅 **Radiant Sunset (Dusk)**: Senja merah coral berpadu bayangan ungu violet dramatis.

### 7. 🔊 Sound FX & Accessibility
- Ambience audio 8-bit retro (efek klik, tebasan sabit arwah, lembaran buku, kepakan kelelawar, suara labu).
- Opsi *Mute / Unmute* global yang tersimpan di `localStorage`.
- Desain sepenuhnya responsif untuk smartphone, tablet, dan desktop tanpa distorsi tata letak.

---

## 🛠️ Arsitektur & Teknologi

- **Core**: HTML5 Semantik & Modern Vanilla JavaScript (ES6+ Modules)
- **Styling**: Vanilla CSS3 murni (3D Transforms, CSS Grid, Flexbox, Custom Properties Variables) — tanpa dependensi framework CSS yang kembung.
- **Visuals**: Pixel Art SVG buatan tangan, Canvas 2D particle systems, dan optimized WebP/JPEG assets.
- **Audio**: Web Audio API & synthesizer sound effects.
- **Bundler & Dev Server**: [Vite](https://vitejs.dev/) untuk build produksi instan dan *Hot Module Replacement (HMR)*.

---

## 🚀 Menjalankan Proyek Secara Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) versi 18 atau lebih baru.
- npm / pnpm / yarn.

### Instalasi & Menjalankan Dev Server

```bash
# Clone repositori
git clone https://github.com/Kalzz76/starry-book-portfolio.git

# Masuk ke direktori
cd starry-book-portfolio

# Install dependensi
npm install

# Jalankan server pengembangan lokal
npm run dev
```

Buka peramban kamu dan akses URL lokal yang ditampilkan (default: `http://localhost:5174/`).

### Build untuk Produksi

```bash
npm run build
```

Hasil build yang siap di-deploy langsung ke Cloudflare Pages, Vercel, Netlify, atau GitHub Pages akan berada di folder `dist/`.

---

## 📂 Struktur Direktori

```text
starry-book-portfolio/
├── Assets/
│   ├── Certificates/       # Gambar sertifikasi kompetensi resmi
│   └── Images/             # Background malam/siang/sore & foto potret Kaka
├── docs/
│   └── CREDITS.md          # Atribusi font, audio, dan lisensi aset
├── public/
│   ├── audio/              # File sound effect & ambience
│   ├── cv/                 # Curriculum Vitae Kaka Andrea Yahya (PDF)
│   ├── favicon.png         # Ikon situs web
│   └── og-image.png        # Open Graph preview card
├── index.html              # Struktur utama dokumen HTML
├── style.css               # Seluruh tata letak, tema, dan animasi CSS
├── script.js               # Logika interaktif, 3D flip, modal, audio & arena
├── vite.config.js          # Konfigurasi bundler Vite
├── package.json            # Manifest proyek & skrip perintah
└── README.md               # Dokumentasi proyek
```

---

## 📜 Lisensi & Hak Cipta

Didesain dan dikembangkan dengan penuh dedikasi oleh **Kaka Andrea Yahya**.  
Dilisensikan di bawah [MIT License](LICENSE).
