# JURNAL KEGIATAN HARIAN PENGEMBANGAN SISTEM
**Nama Proyek:** Portofolio Pop-up Book 3D Interaktif (Starry Book Portfolio)
**Pengembang:** Kaka Andrea Yahya (SMKN 13 Bandung - Rekayasa Perangkat Lunak)
**Hari / Tanggal:** Senin, 26 Oktober 2026
**Repositori:** https://github.com/Kalzz76/starry-book-portfolio

---

## 📌 Ringkasan Umum
Pada sesi ini dilakukan serangkaian kegiatan terpadu, mulai dari perencanaan identitas dan inisialisasi repositori GitHub, sinkronisasi awal proyek ke remote repository, bedah analisis frame video referensi (vam gogh.mp4), hingga rekonstruksi total aspek visual buku 3D, sampul ornamen barok klasik, efek ketebalan lembaran kertas, latar kanvas hidup, dan implementasi diorama pop-up interaktif.

---

## ⏱️ Rincian Linimasa & Tahapan Kegiatan

### 1. Perancangan & Pembuatan Repositori GitHub (14:30 - 14:35 WIB)
- **Aktivitas:**
  - Melakukan brainstorming penamaan repositori dan deskripsi proyek sesuai konsep buku dongeng pop-up dan tema The Starry Night.
  - Memilih nama repositori: starry-book-portfolio.
  - Menyiapkan dan memperbarui file .gitignore agar folder referensi lokal (referensi/), file video berat, dan direktori build tidak mengotori repositori git.
  - Menyusun file README.md berstandar profesional yang mencakup deskripsi proyek, fitur utama, teknologi yang digunakan, serta panduan instalasi dan build.
  - Menginisialisasi repositori Git lokal pada branch main.
  - Melakukan Initial Commit (021ddf8) sebanyak 70 file sumber.
  - Menghubungkan remote GitHub https://github.com/Kalzz76/starry-book-portfolio.git dan menjalankan git push -u origin main.
- **Hasil:** Repositori GitHub resmi aktif dan tersinkronisasi.

---

### 2. Analisis & Dekonstruksi Video Referensi (14:36 - 14:45 WIB)
- **Aktivitas:**
  - Mengekstrak sampel frame dari file referensi vam gogh.mp4 untuk membedah seluruh aspek visual dan perilaku animasinya secara detail.
  - Mengidentifikasi elemen kunci untuk direplikasi:
    1. Kanvas Latar Belakang: Langit malam The Starry Night yang dinamis dengan pusaran sapuan kuas bercahaya, hembusan pita angin, bintang-bintang 3D faset melayang, dan denyut halo keemasan.
    2. Sampul Hardcover Klasik: Sampul buku kulit dengan 4 sudut pelindung kuningan berukir (brass corner guards), bingkai barok keemasan mengelilingi lukisan, punggung buku bertulang 3D (raised spine ribs), dan gesper kulit beraksen emas.
    3. Sudut Pandang & Ketebalan Buku: Kemiringan elevasi 3D (isometric tilt) dengan tumpukan fisik lembaran kertas (page block thickness) di tepi bawah dan samping, serta lengkungan punggung buku.
    4. Diorama Pop-up 3D: Lanskap desa malam berbintang dengan rumah beratap genteng, jendela bercahaya lilin hangat, cerobong asap mengepul, pohon sypress menjulang, dan bintang-bintang timbul di udara.

---

### 3. Pembuatan Aset Visual & Komponen Baru (14:46 - 14:55 WIB)
- **Aktivitas:**
  - Membuat komponen BingkaiEmasBaroque.jsx: Bingkai ornamen barok vektor SVG beresolusi tinggi dengan gradien emas metalik, ornamen sudut pelindung L-shape, garis ganda bermotif, dan drop shadow timbul.
  - Membuat komponen BintangVanGogh.jsx: Bintang faset 3D kuning keemasan dengan efek pencahayaan origami, animasi ayunan melayang (wobble/float), serta jejak hembusan angin bercahaya (luminous wind trails).
  - Menambahkan keyframe animasi CSS di index.css: anginSwoosh, bintangWobble, asapCerobong, jendelaLilap, bukuMengapung, serta kelas utilitas tebal-halaman-bawah dan lengkung-halaman.

---

### 4. Rekonstruksi Komponen Buku & Tata Letak (14:56 - 15:02 WIB)
- **Aktivitas:**
  - Latar.jsx: Mengintegrasikan latar lukisan kanvas hidup dengan hembusan angin multikurva, pusaran kuas bercahaya, dan bintang 3D melayang di 4 sudut layar.
  - Sampul.jsx: Memperbarui sampul buku depan dengan tekstur kulit berpadu kanvas Van Gogh, bingkai emas barok, sudut pelindung kuningan, punggung buku bertulang 4 baris, dan tombol aksi bergaya segel buku kuno.
  - SampulBelakang.jsx: Menyelaraskan sampul belakang dengan bingkai emas barok cermin, sudut pelindung kuningan, dan tautan profil terintegrasi.
  - Buku.jsx: Mengatur elevasi miringBuku menjadi 16 derajat saat terbuka agar efek 3D pop-up dan ketebalan kertas terlihat natural. Menambahkan lapisan fisik tumpukan lembaran kertas tebal di bagian bawah serta lengkungan punggung buku.
  - IlustrasiTentang.jsx: Membangun diorama pop-up 3D desa malam berbintang lengkap dengan pohon sypress, menara gereja, pondok dengan jendela menyala berkedip, cerobong berasap, kebun bunga matahari, dan bintang timbul melayang.
  - Mengintegrasikan aksen bintang 3D pada seluruh ilustrasi bab lainnya (Keahlian, Proyek, Pencapaian, dan Kontak).

---

### 5. Pengujian Teknis, Debugging Encoding, & Verifikasi Browser (15:03 - 15:06 WIB)
- **Kendala & Solusi:**
  - Kendala: Vite dev server sempat menghasilkan error SyntaxError: The requested module does not provide an export named default pada beberapa komponen baru.
  - Analisis: Penulisan file melalui PowerShell menghasilkan format file UTF-8 dengan BOM (Byte Order Mark) yang tidak didukung parser ES Module Vite.
  - Solusi: Menjalankan pembersihan 3-byte BOM pada seluruh file sumber di folder src/ menggunakan Python. Modul langsung terdeteksi normal.
- **Pengujian:**
  - Menjalankan npm run build: Berhasil tanpa error dalam waktu 3.51 detik.
  - Memverifikasi tampilan visual di browser pada viewport desktop dan tablet: Sampul buku barok, animasi latar, perspektif 3D, dan diorama desa pop-up tampil sempurna sesuai video referensi.

---

### 6. Sinkronisasi Akhir ke Repositori GitHub (15:06 WIB)
- **Aktivitas:**
  - Melakukan staging file yang diperbarui: git add .
  - Membuat commit: feat: implement 3D Van Gogh pop-up book visuals, baroque cover, and floating stars (Commit Hash: 537c1b5).
  - Melakukan push ke branch utama: git push origin main.
  - Repositori telah diperbarui dengan seluruh aset dan fungsionalitas visual terbaru.
