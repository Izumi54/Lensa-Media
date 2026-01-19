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
