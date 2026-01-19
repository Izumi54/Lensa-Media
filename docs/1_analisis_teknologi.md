# 1. Analisis & Pemilihan Teknologi

Berdasarkan kebutuhan Anda:

- **Target:** Website Informasi Organisasi Mahasiswa.
- **Biaya:** Gratis hosting.
- **Performa:** Ringan (Optimasi HP).
- **Sifat Data:** Statis (Fix saat publish).

## 1. Apakah Perlu Backend?

**Jawaban: TIDAK.**

Untuk kasus di mana data "tidak berubah" (hanya pengurus yang mengupdate konten, bukan pengunjung yang login dan posting), membuat backend server (API) akan:

1.  Menambah biaya (perlu hosting server/database).
2.  Memperlambat akses (browser harus request ke server dulu).

**Solusi:** Gunakan **Next.js dengan Static Site Generation (SSG)**.

- Data disimpan dalam bentuk file **JSON** atau **Markdown (.md)** langsung di dalam folder project.
- Saat Anda siap publish, jalankan perintah `build`. Next.js akan membaca file-file tersebut dan merubahnya menjadi halaman HTML siap saji.
- Hasilnya: Website super kencang karena tidak ada "loading" database.

## 2. Frontend Framework

**Rekomendasi: Next.js (React Framework)**

- **Kenapa:** Mendukung SSG secara native. Paling populer untuk hosting gratis di Vercel. Punya optimasi gambar (`next/image`) otomatis agar ringan di HP.

## 3. State Management

Anda bertanya rekomendasi State Management.
**Rekomendasi: Zustand**

- **Kenapa:**
  - Sangat ringan (hanya beberapa KB).
  - Syntax sederhana (Hooks-based).
  - Cocok dengan Clean Architecture (bisa memisahkan logic store dari UI komponen).
- _Catatan:_ Untuk website statis, state management biasanya tidak terlalu kompleks (paling hanya untuk UI state seperti "Menu Navigasi Mobile Buka/Tutup" atau "Filter Divisi Organisasi"). Redux terlalu berat (overkill).

## 4. Styling

**Rekomendasi: Tailwind CSS**

- **Kenapa:**
  - Anda bisa membuat file CSS `utility-class` yang sangat kecil saat production.
  - Memudahkan membuat desain responsif (tampilan HP vs Laptop) tanpa pusing media query manual.
  - Sangat mudah dikustomisasi untuk "Aestetik Premium" (Warna custom, font, spacing).
