# 📜 JURNAL PENGEMBANGAN: THE CODE NECROMANCER CHRONICLES
**Website Portofolio Interaktif Kaka Andrea Yahya (Jilid 2)**  
*Catatan Harian Rekayasa Perangkat Lunak, Optimasi UI/UX, dan Perjalanan Rancang Bangun*

---

## 📅 JURNAL 1: SELASA, 28 OKTOBER 2026
**Fokus Kegiatan**: Tipografi Retro, Grid Kitab Mantra Semanggi 5, Floating Music HUD, Anime Guild Card, dan Deployment Awal.

Melanjutkan perancangan portofolio interaktif *Code Necromancer Jilid 2*, fokus kegiatan hari ini adalah optimasi antarmuka (UI/UX), tipografi retro, dan penyempurnaan modul interaktif hingga tahap rilis awal.

Tahap pertama dimulai dengan mengintegrasikan font *Pixelify Sans* dan *MedievalSharp* agar teks proporsional dan nyaman dibaca tanpa menghilangkan nuansa *pixel art*. Saya juga merombak tata letak Kitab Mantra Semanggi 5 menjadi *grid* simetris 50:50 dengan batas padding aman agar teks tidak terpotong punggung buku, serta mengganti ikon daftar proyek dengan simbol tematik variatif.

Selanjutnya, saya mengembangkan modul *Floating Music HUD* (lagu 8-bit Halloween) dengan animasi gulungan kertas kuno (*scroll unroll*), membatasi area jalan maskot agar tidak menabrak kontrol audio, dan menyelaraskan warna form Buku Tamu secara dinamis mengikuti tema waktu (Malam, Siang, Sore) yang terhubung ke Web3Forms API. Hari ini ditutup dengan mempercantik kartu profil bergaya lisensi anime (*Guild Card*) lengkap dengan *progress bar* atribut RPG, sebelum di-bundle dan di-deploy ke GitHub.

---

## 📅 JURNAL 2: RABU, 29 OKTOBER 2026
**Fokus Kegiatan**: Peta Land of Dusk, Penjaga Berjubah, Katakombe -66m Lapuk, Mode Hemat Daya, dan Fix Layar Mobile.

Melanjutkan versi rilis kemarin, fokus kegiatan hari ini adalah perombakan total dunia pekuburan, penambahan karakter penjaga otonom, efisiensi perangkat, dan penuntasan navigasi mobile.

Tahap awal dimulai dengan memperluas Peta *Land of Dusk* (LOD) lewat rute patroli chibi maskot dan fitur sapaan kursor (*hover greeting*). Saya kemudian menciptakan karakter baru **Penjaga Berjubah** (sprite canvas pixel art ringan) yang mampu menyapa mandiri serta meluncurkan proyektil sihir anti-Reaper (cooldown 1 detik), berdiri berdampingan dengan Papan Pengumuman cuaca dan tombol *Gali ke Bawah*.

Di area Katakombe, indikator kedalaman disempurnakan dengan sumbu Kartesius (0 m hingga -66 m) dan kartu pencapaian dirombak menjadi lapuk, retak, serta tertimbun tanah yang interaktif dibersihkan dengan kursor atau jari. Untuk efisiensi baterai, saya menyematkan **Mode Hemat Daya** (sakelar hijau emerald) dan dukungan `prefers-reduced-motion`. Kegiatan ditutup dengan menuntaskan bug layar "kejang-kejang" pada mobile lewat *fluid auto-unlock*, status kebal transisi 1.3 detik, offset navbar 70px, dan perapian tata letak vertikal papan pengumuman sebelum di-push ke GitHub.
