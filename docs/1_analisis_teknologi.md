# 1. Analisis & Spesifikasi Teknologi (Revisi UI)

Berdasarkan referensi desain yang diberikan, berikut adalah spesifikasi teknis final.

## 1. Core Stack

- **Framework**: Next.js (App Router) - Mode Static Export.
- **Styling**: Tailwind CSS (Wajib, sesuai referensi).
- **Icons**: FontAwesome (via CDN atau react-icons).

## 2. Design System (Diekstrak dari UI)

Kita akan mengonfigurasikan `tailwind.config.ts` agar sesuai persis dengan referensi `index.html`.

### Warna (Color Palette)

- **Primary (Biru Pers)**: `#1e3a8a` (Sesuai class `bg-primary`)
- **Secondary (Kuning Aksen)**: `#f59e0b` (Sesuai class `bg-secondary`)
- **Dark (Teks Utama)**: `#111827`
- **Light (Background)**: `#f3f4f6` & `#ffffff`

### Tipografi

Menggunakan Google Fonts:

1.  **Judul/Headings**: `Merriweather` (Serif) - Memberikan kesan formal, "surat kabar", dan elegan.
2.  **Body Text**: `Inter` (Sans-serif) - Modern, bersih, mudah dibaca di layar HP.

### UI Library Support

- **Animation**: Referensi menggunakan `@keyframes fadeIn`. Di React kita bisa gunakan `framer-motion` untuk hasil lebih smooth, atau cukup native CSS transition sesuai referensi agar ringan. -> **Keputusan: Native CSS / Tailwind Class (sesuai request "Ringan").**
- **Scroll**: Smooth scrolling diaktifkan di `html`.

## 3. State Management

- **Zustand**: Digunakan untuk:
  - Mobile Menu Toggle (Buka/Tutup Sidebar).
  - Gallery Filter State (Menyimpan tahun yang dipilih: 'all', '2025', dll).

## 4. Hosting Strategy

- Tanpa Backend.
- Images disimpan di folder `/public/images`.
- Deployment target: Vercel (Recommended) atau GitHub Pages.

## 5. Strategi Optimasi Performa (Anti-Lemot)

Untuk menjamin website **sangat ringan** di HP dan PC, kita menerapkan standar berikut:

1.  **Static Site Generation (SSG)**: Semua halaman HTML sudah jadi saat build time. Tidak ada proses loading database saat user membuka web. Loading time < 1 detik.
2.  **Next.js Image Optimization**: Kita wajib menggunakan komponen `<Image />`.
    - Otomatis mengubah format gambar ke **WebP/AVIF** (ukuran file 30% lebih kecil).
    - Otomatis **Resize** gambar sesuai ukuran layar (HP tidak akan mendownload gambar resolusi 4K).
    - **Lazy Loading**: Gambar yang belum terlihat di layar tidak akan didownload sampai user scroll ke sana.
3.  **Code Splitting**: JavaScript hanya didownload seperlunya per halaman/komponen.
4.  **Font Optimization**: Google Fonts didownload saat build, mencegah "Flash of Unstyled Text" dan layout bergeser.
5.  **PDF Lazy Load**: Penampil majalah hanya akan loading jika tombol "Baca" diklik, tidak membebani halaman utama.
