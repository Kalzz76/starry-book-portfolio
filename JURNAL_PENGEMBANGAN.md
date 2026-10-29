# 📜 JURNAL PENGEMBANGAN: THE CODE NECROMANCER CHRONICLES
**Portofolio Interaktif Kaka Andrea Yahya**  
*Dokumentasi Lengkap Perjalanan Rancang Bangun, Arsitektur Teknis, dan Milestone Fitur*

---

## 📌 Ringkasan Eksekutif
Portofolio ini bukan sekadar situs profil biasa, melainkan sebuah **pengalaman interaktif gamifikasi bergaya retro RPG 8-Bit (Tema Halloween Code Necromancer)** yang dirancang dengan dedikasi tinggi. Seluruh sistem dibangun menggunakan **Pure Vanilla Architecture (HTML5, CSS3, JavaScript Native ES6+)** tanpa ketergantungan framework berat, menjamin waktu muat instan (*blazing fast load*), estetika retro yang kental, dan integrasi atmosfer audio-visual yang imersif.

---

## 🗺️ Milestone & Kronologi Pengembangan

### 🧙‍♂️ Fase 1: Konsep Alkimia & Grimoire Proyek
- **Grimoire Buku Mantra Interaktif**: Transformasi daftar proyek konvensional menjadi buku mantra alkimia kuno dua halaman lengkap dengan sampul kulit berornamen runic emas.
- **9 Flagship Proyek Unggulan**:
  1. *Web Pemantauan & Simulasi Kebakaran Hutan* (GIS Leaflet, Wind Simulator, Laravel)
  2. *Classio – School CBT & Admin Platform* (Flutter, Multiplatform Desktop C++ Runner)
  3. *Hospital Indoor Pathfinding Visualizer* (A* Search Algorithm, HTML5 Canvas)
  4. *Rhea AI – Healthcare & Triage Assistant* (AI-assisted Medical Triage)
  5. *Kelompokku – Decoupled Team Collaboration* (React 19 SPA + Laravel RESTful API)
  6. *Pomodoro Focus Mobile App* (Flutter, FL Chart Statistics)
  7. *Heart Attack Risk Prediction System* (Data Science, Orange ML, Python)
  8. *Bank Sampah Management System* (C# .NET Desktop Architecture)
  9. *Web Portal Publik SMKN 13 Bandung* (Laravel, Automated Feature Testing)

---

### 💀 Fase 2: Ekosistem Makhluk Kuburan & Peta *Land of Dusk*
- **Kawanan Maskot Otonom**: Kemunculan empat sahabat arwah legendaris di atas panggung rumput:
  - *Skully*: Tengkorak gemetar yang reaktif terhadap kursor.
  - *Zombo*: Zombie ramah yang keluar masuk makam.
  - *Pumpling*: Labu oranye ceria yang suka melompat.
  - *Witch*: Penyihir kecil pembuat ramuan dengan topi ungu.
- **Sistem Interaksi Sosial**: Maskot dapat saling mendekati, bertukar sapaan balon dialog, dan memancarkan partikel emotikon persahabatan.
- **Peta Land of Dusk (LOD)**: Peta eksplorasi rute wilayah dengan maskot chibi, node interaktif, navigasi jalan bercabang, dan fitur toggle on/off maskot pada peta.
- **Sapaan Interaktif Kursor**: Maskot di peta menyapa pengunjung secara personal saat kursor mouse diarahkan ke mereka (*pointerenter* / *hover*).

---

### 🌑 Fase 3: Atmosfer Waktu, Senter Kursor & Audio 8-Bit
- **Siklus 5 Waktu Atmosferik**: Pagi, Siang, Sore, Malam, dan Tengah Malam dengan perubahan palet langit, gradien pegunungan, dan pencahayaan dunia secara prosedural.
- **Mode Tengah Malam & Senter Global**: Kegelapan total di mana hanya lingkaran cahaya kursor (*global torch flashlight*) yang menerangi layar.
- **Kursor Arwah Reaper & Sabit Gaib**: Arwah melayang yang memegang sabit ungu, memancarkan roh melayang (*ghost spirits*) dan kelelawar kecil saat layar diklik, serta memicu kepanikan pada maskot biasa.
- **Sintesis Audio 8-Bit (Web Audio API)**: Sound effect retro tanpa file audio eksternal berat (klik, blip, lompat, bangkit, desis batu, tawa gaib).
- **Retro Music Player**: Pemutar musik 8-bit tema Halloween (*Halloween-bg.mp3*) dengan HUD kaset retro di pojok kiri bawah.

---

### ⛏️ Fase 4: Katakombe Bawah Tanah (-66m) & Penjaga Berjubah
- **Kedalaman Relatif Sumbu Kartesius**:
  - Permukaan tanah berada di titik acuan **0 m**.
  - Area langit/atmosfer diukur dengan ketinggian positif (misal: `⛏ 35 m`).
  - Katakombe bawah tanah menukik turun hingga batuan dasar terdalam (`⛏ -66 m`).
- **Penjaga Berjubah (Cloaked Guardian)**:
  - Sosok misterius berjubah indigo dengan tudung gelap, mata amber menyala, bros emas, dan tongkat lentera bercahaya.
  - *Sapaan Kontekstual*: Menyapa pendatang baru, menyapa pengunjung lama, dan menyapa saat pengunjung kembali dari bawah tanah.
  - *Obrolan Otonom*: Memberikan 6 petunjuk rahasia secara berkala saat pengunjung berada di permukaan.
  - *Pertahanan Anti-Reaper*: Satu-satunya sosok yang tidak takut pada kursor Reaper. Mengaktifkan pose waspada bersudut pertahanan dan menembakkan proyektil sihir oranye dengan cooldown 1.0 detik.
- **Papan Pengumuman Kayu**: Menampilkan kabar atmosferik dinamis sesuai waktu dan tombol *▼ GALI KE BAWAH* untuk menggulir mulus ke bawah tanah.
- **Kartu Pencapaian Lapuk & Tertimbun Tanah (Weathered Achievements)**:
  - Lapisan debu tanah (`--nz`), retakan kuno melintang (`--ck`), dan gundukan tanah bergerigi 16-titik poligon.
  - *Pembersihan Interaktif*: Debu dan retakan dapat disapu bersih saat kursor mouse digerakkan atau jari digeser di atas kartu.

---

### ⚡ Fase 5: Efisiensi Baterai & Aksesibilitas Modern
- **Mode Hemat Daya (Eco & Performance Mode)**:
  - Sakelar ke-4 di modal *Ritual Settings* beraksen warna hijau emerald (`#10b981`).
  - Meringankan beban GPU dengan menyederhanakan bayangan blur dan mematikan partikel berat untuk kenyamanan HP spek kentang.
- **Dukungan Penuh `prefers-reduced-motion`**:
  - Menghormati pengaturan aksesibilitas sistem operasi (Android, iOS, Windows, macOS).
  - Menghentikan animasi loop berulang secara otomatis demi menghemat daya baterai.

---

### 📱 Fase 6: Optimasi Pengalaman Mobile & Solusi Layar Kejang (Hari Ini)
- **Akar Masalah**:
  - Pada layar sentuh HP (*touchscreen*), mekanisme penguncian scroll permukaan sebelumnya memaksa posisi scroll mundur (`window.scrollTo instant`) saat mendeteksi geseran jari melewati batas permukaan.
  - Hal ini bertabrakan dengan mesin fisika *kinetic momentum scrolling* bawaan browser mobile (Chrome Android & Safari iOS), memicu osilasi getar hebat 60Hz (*kejang-kejang/tremor*).
  - Pemanggilan fungsi efek getar tombol secara berulang memicu *layout thrashing* (`void btn.offsetWidth`) di setiap pixel scroll.
- **Solusi yang Diterapkan**:
  1. *Fluid Descent on Swipe*: Jika pengguna di perangkat mobile menggeser layar melewati papan pengumuman, sistem secara cerdas langsung mengaktifkan fungsi turun mulus (*smooth glide down*) tanpa mengunci paksa atau mengadu kinetika jari.
  2. *Transition Immunity Lock (`isTransitioningUnderground`)*: Selama 1.3 detik proses transisi turun ke tanah gembur (`#about`), semua logika pengunci scroll dibebaskan sepenuhnya agar tidak terjadi perebutan koordinat.
  3. *Offset Navigasi 70px*: Posisi scroll `#about` diperhitungkan dengan kompensasi navbar melayang sehingga judul dan lencana strata tanah tidak tertutup bilah menu.
  4. *Redesain Papan Pengumuman Mobile*:
     - Papan kayu diatur menjadi tata letak kolom vertikal yang rapi.
     - Teks kabar pengumuman tidak lagi terjepit sempit.
     - Tombol *▼ GALI KE BAWAH* diperlebar penuh (*full width*), sangat nyaman ditekan dengan jempol pengguna HP.
     - Penjaga Berjubah berdiri kokoh di samping papan dengan balon percakapan yang pas di layar 360px–420px tanpa terpotong.

---

## 📊 Matriks Fitur & Status Implementasi

| Fitur | Teknologi | Status | Keterangan |
| :--- | :--- | :---: | :--- |
| **Grimoire 9 Flagship** | CSS 3D Transforms & Grid | ✅ Selesai | Responsif di semua ukuran layar |
| **Kawanan Maskot Otonom** | Canvas Pixel Art & State Machine | ✅ Selesai | 4 karakter dengan obrolan sosial |
| **Peta Land of Dusk** | SVG / Canvas Chibi Pathfinding | ✅ Selesai | Hover greeting & return button |
| **Kursor Arwah Reaper** | DOM Follower & Velocity Vector | ✅ Selesai | Efek tebasan sabit & arwah gaib |
| **Siklus 5 Waktu & Senter** | CSS Custom Properties & Radial Mask | ✅ Selesai | Real-time & manual switch |
| **Katakombe -66m** | Cartesian Depth Calculator | ✅ Selesai | 13 achievement dengan secret card |
| **Penjaga Berjubah** | Dual Sprite Frame & Projectile Physics | ✅ Selesai | Anti-Reaper counter attack 1.0s CD |
| **Weathered Achievements** | CSS Masking & Fractal SVG Noise | ✅ Selesai | Interaktif disapu kursor/jari |
| **Mode Hemat Daya (Eco)** | Scoped CSS & Media Query | ✅ Selesai | Hemat baterai di HP low-end |
| **Transisi Halus Mobile** | Throttled Smooth Scroll & Touch Physics | ✅ Selesai | Bebas getar, bebas kejang layar |

---

## 💡 Refleksi & Penutup
Pengembangan portofolio ini membuktikan bahwa batas antara **Web Application Engineering** dan **Creative Game Design** dapat disatukan secara elegan. Dengan menjaga integritas kode murni (*Vanilla JavaScript & CSS*), website ini tidak hanya memikat secara visual dan interaktif bagi para perekrut maupun pengunjung, tetapi juga tetap ringan, berperforma tinggi, dan stabil di segala jenis perangkat.

*Dokumen ini dibuat sebagai catatan abadi proses kreasi dan penyempurnaan portofolio Kaka Andrea Yahya.*
