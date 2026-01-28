# LPM Lensa Media Website

Website profil resmi untuk Lembaga Pers Mahasiswa (LPM) Lensa Media. Website ini dirancang untuk menampilkan berita terkini, majalah digital, struktur organisasi, dan galeri kegiatan dengan tampilan yang modern dan responsif.

## 🚀 Teknologi

Project ini dibangun menggunakan tech stack modern yang ringan dan cepat:

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) (untuk UI state)
- **Icons**: FontAwesome
- **Deployment**: Static Export (Siap deploy ke Vercel/GitHub Pages)

## 📂 Struktur Proyek (Clean Architecture)

Kode disusun menggunakan pendekatan **Simplified Clean Architecture** agar rapi dan mudah dikembangkan:

```
src/
├── app/                  # Next.js App Router (Pages, Layout)
├── domain/               # Business Logic & Entities (Types)
│   └── entities/         # Definisi tipe data (Member, Magazine, etc)
├── presentation/         # UI Components
│   ├── components/
│   │   ├── ui/           # Komponen dasar (Button, Card, Modal)
│   │   ├── features/     # Komponen fitur (Hero, MagazineSection)
│   │   └── layout/       # Navbar & Footer
│   └── stores/           # Zustand Stores
└── lib/                  # Utilities
```

## 🛠️ Cara Menjalankan (Development)

1.  **Install Dependencies**:

    ```bash
    npm install
    ```

2.  **Jalankan Server Lokal**:

    ```bash
    npm run dev
    ```

3.  Buka browser di [http://localhost:3000](http://localhost:3000).

## 📝 Manajemen Konten (Data)

Website ini menggunakan sistem **JSON Database** yang terletak di folder `public/data/`. Anda dapat mengubah konten website tanpa perlu menyentuh kodingan utama.

### 1. Mengubah Struktur Organisasi

File: `public/data/structure.json`

- Berisi daftar Pelindung, Pimpinan, BPH, dan Divisi.
- Edit nama atau jabatan langsung di file ini.

### 2. Update E-Majalah

File: `public/data/magazines.json`

- Untuk menambah majalah baru, tambahkan objek baru ke dalam array:
  ```json
  {
    "id": "vol-3",
    "volume": "03",
    "date": "Bulan Tahun",
    "title": "Judul Majalah",
    "coverImage": "/images/magazines/nama-cover.png",
    "pdfUrl": "/data/nama-file.pdf"
  }
  ```
- Pastikan file PDF diletakkan di `public/data/` dan gambar cover di `public/images/magazines/`.

## 🎨 Fitur Utama

- **Hybrid Organization Structure**: Menampilkan Pimpinan Utama secara langsung, namun anggota Divisi ditampilkan dalam **Popup Modal** untuk menghemat ruang di layar HP.
- **PDF Viewer**: Pembaca majalah built-in tanpa perlu download.
- **Mobile Responsive**: Tampilan menu dan grid otomatis menyesuaikan ukuran layar.
- **Gallery Filter**: Filter foto berdasarkan tahun kegiatan.

---

&copy; 2025-2026 LPM Lensa Media
