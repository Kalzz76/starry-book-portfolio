# 📜 JURNAL PENGEMBANGAN: THE CODE NECROMANCER CHRONICLES
**Website Portofolio Interaktif Kaka Andrea Yahya (Jilid 2)**  
*Catatan Harian Rekayasa Perangkat Lunak, Optimasi UI/UX, dan Perjalanan Rancang Bangun*

---

## 📅 JURNAL 1: SELASA, 28 OKTOBER 2026
**Fokus Kegiatan**: Peremajaan Tipografi Retro, Grid Kitab Mantra Semanggi 5, Animasi Music HUD, Guild Card Anime, dan Deployment Awal.

Melanjutkan perancangan website portofolio interaktif Kaka Andrea Yahya (*Code Necromancer Jilid 2*), fokus kegiatan hari ini adalah optimasi antarmuka (UI/UX), peremajaan sistem tipografi retro, dan penyempurnaan modul-modul interaktif hingga tahap peluncuran awal (*deployment*).

Tahap pertama dimulai dengan mengintegrasikan font *Pixelify Sans* dan *MedievalSharp* agar teks pada seluruh antarmuka tampil lebih proporsional, tegas, dan nyaman dibaca tanpa sedikit pun menghilangkan kesan otentik *pixel art* dan fantasi gotik. Saya juga merombak total tata letak Kitab Mantra Semanggi 5 pada bagian Grimoire Proyek menjadi *grid* simetris 50:50 dengan batas padding aman (*spine margin*), sehingga teks deskripsi dan aset tidak lagi terpotong oleh lekukan punggung buku. Selain itu, ikon pada daftar proyek diperkaya dengan simbol-simbol tematik yang variatif (gulungan mantra, tengkorak magis, dan kristal alkimia) untuk mempertegas identitas masing-masing dari 9 karya *flagship*.

Tahap kedua difokuskan pada audio dan lingkungan interaktif. Saya mengembangkan modul *Floating Retro Music HUD* yang memutar alunan musik 8-bit Halloween dengan animasi visual gulungan kertas kuno (*scroll unroll effect*). Agar tampilan tetap rapi, saya menambahkan algoritma pembatas area gerak (*roaming boundary*) bagi kawanan maskot di panggung permukaan rumput agar mereka tidak menabrak atau menutupi panel kontrol audio di pojok layar. Bersamaan dengan itu, warna pada formulir Buku Tamu (Altar Kontak) diselaraskan secara dinamis mengikuti perubahan siklus waktu atmosferik (Malam, Siang, dan Sore), serta dihubungkan langsung ke layanan Web3Forms API agar pesan apresiasi pengunjung dapat terkirim secara instan ke email pengembang.

Tahap ketiga diselesaikan dengan mempercantik kartu profil pengembang menjadi bergaya lisensi petualang anime (*Adventurer Guild Card*). Kartu ini dilengkapi foto potret bergaya fantasi, *progress bar* atribut RPG (Front-End Mastery, Backend Sorcery, System Architecture), serta segel stempel verifikasi resmi. Setelah seluruh rangkaian fitur dan estetika visual tervalidasi dengan baik, saya melakukan proses *bundling* produksi menggunakan Vite dan menuntaskan tahap *deployment* versi awal ke repositori remote GitHub agar dapat diakses dan diuji secara daring.

---

## 📅 JURNAL 2: RABU, 29 OKTOBER 2026
**Fokus Kegiatan**: Rombak Total Fitur Mistis, Interaktivitas Katakombe Bawah Tanah, Penjaga Berjubah, Mode Hemat Daya, dan Penuntasan Layar Mobile.

Melanjutkan pengembangan dari versi rilis kemarin, fokus kegiatan hari ini adalah perombakan menyeluruh pada elemen mistis dunia pekuburan, penambahan karakter penjaga mandiri, interaktivitas lingkungan katakombe, efisiensi performa lintas perangkat, serta penyelesaian tuntas kendala teknis pada antarmuka mobile (*touchscreen*).

Tahap pertama diawali dengan memperluas ekosistem interaksi pada Peta *Land of Dusk* (LOD). Saya merancang jaringan rute jalan bercabang (*pathfinding network*) dengan *chibi bodies* para maskot yang dapat berpatroli, serta menyematkan fitur sapaan balon dialog (*pointerenter hover greeting*) sehingga setiap maskot di peta akan langsung merespons dan menyapa ramah saat kursor pengunjung melintas di atas mereka.

Tahap kedua berpusat pada penciptaan karakter baru: **Penjaga Berjubah (*Cloaked Guardian*)** dan **Papan Pengumuman Kayu**. Sosok penjaga ini di-generate menggunakan teknik *pixel art canvas* berukuran 16×20 piksel yang dikonversi sekali jalan menjadi DataURL, menghasilkan grafis ringan tanpa beban komputasi loop GPU. Penjaga ini berdiri tenang di dekat pohon, memiliki inisiatif menyapa pengunjung baru maupun lama secara otonom, dan dibekali kecerdasan pertahanan unik: saat kursor Arwah Reaper mendekat, ia tidak kabur seperti maskot lain, melainkan memasang kuda-kuda siaga dan meluncurkan proyektil sihir pertahanan ber-cooldown ketat 1.0 detik. Di sampingnya, Papan Pengumuman menampilkan kabar berkala sesuai waktu riil dan tombol *▼ GALI KE BAWAH* untuk mengajak pengunjung menelusuri isi perut bumi.

Tahap ketiga difokuskan pada Katakombe Bawah Tanah. Saya menyempurnakan indikator kedalaman dengan sistem sumbu Kartesius relatif: permukaan tanah sebagai titik nol (0 m), area langit sebagai ketinggian positif (`⛏ 35 m` tanpa tanda plus), dan katakombe menukik turun hingga dasar batuan terdalam (`⛏ -66 m`). Seluruh kartu pencapaian (*Achievements*) dirombak agar terasa usang, retak, dan terkubur tanah purba menggunakan filter SVG retakan kuno (`--ck`) dan tekstur debu fraktal (`--nz`), lengkap dengan fitur pembersihan interaktif (*dust cleaning*) di mana debu dan retakan akan memudar saat disapu oleh kursor mouse atau sentuhan jari.

Tahap keempat menghadirkan optimasi performa dan standar aksesibilitas modern. Untuk menjamin kenyamanan pengguna smartphone lawas maupun desktop hemat energi, saya menambahkan **Mode Hemat Daya (*Eco & Performance Mode*)** dengan sakelar beraksen hijau emerald di modal *Ritual Settings*. Mode ini mematikan partikel berat (kelelawar, roh arwah, debu makam) dan menyederhanakan bayangan grafis kompleks. Sistem ini juga terintegrasi otomatis dengan preferensi sistem operasi `prefers-reduced-motion` untuk menghemat konsumsi daya baterai.

Tahap kelima ditutup dengan investigasi dan penyelesaian tuntas masalah layar "kejang-kejang" (*tremor/jitter*) pada perangkat mobile saat hendak turun ke bawah tanah. Masalah ini ternyata disebabkan oleh benturan antara mesin fisika *kinetic momentum scrolling* bawaan layar sentuh HP dengan fungsi penguncian scroll instan lama, diperparah oleh pemaksaan kalkulasi layout berulang (*layout thrashing*). Saya menuntaskannya dengan menerapkan status kekebalan transisi (`isTransitioningUnderground`), fitur *fluid auto-unlock* saat jempol menggeser layar melewati papan, kompensasi offset navbar 70px, serta merombak susunan Papan Pengumuman mobile menjadi satu kolom vertikal yang lapang dengan tombol *Gali ke Bawah* berukuran penuh. Seluruh perbaikan berhasil dikompilasi dengan mulus dalam 0.92 detik dan resmi di-push ke repositori utama GitHub.
