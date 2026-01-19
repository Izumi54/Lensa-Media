# 3. Rancangan Fitur dan Konten (Revisi Berdasarkan UI)

Berdasarkan referensi UI `index.html`, berikut adalah struktur final konten dan data yang dibutuhkan.

## 1. Sitemap (Struktur Halaman)

Website ini bersifat **Single Page Landing** (One Page), dengan navigasi scroll ke section terkait.

1.  **Header / Navbar**
    - Logo & Nama: "Lensa Media"
    - Menu: Beranda, E-Majalah, Kenangan, Kerja Sama.
    - CTA Button: "Join Kami" (Link External ke GForm).

2.  **Hero Section (Beranda)**
    - Tagline: "Pers Mahasiswa Terkini".
    - Headline: "Menyuarakan Kebenaran, Merangkai Peristiwa".
    - Subheadline: Deskripsi singkat portal.
    - Tombol Aksi: "Baca Berita Terkini" (Link External) & "Baca Majalah" (Scroll ke bawah).

3.  **Section E-Majalah**
    - Judul & Deskripsi Section.
    - **List Kartu Majalah**: Menampilkan Cover, Volume, Tanggal, Judul, Deskripsi Singkat, dan Link Baca.

4.  **Section Galeri Kenangan**
    - **Filter Tahun**: (Semua, 2025, 2024, 2023, dst).
    - **Grid Foto**: Foto kegiatan dengan overlay caption saat di-hover.

5.  **Section Kerja Sama**
    - **Jenis Kerjasama**: Media Partner, Paid Promote, Sponsorship.
    - CTA Button: "Hubungi Humas" (Link ke WhatsApp).

6.  **Footer**
    - Brand Info & Deskripsi Singkat.
    - Quick Links.
    - Info Kontak (Alamat, Email, WA).
    - Social Media Icons (IG, TikTok, FB, YT).

---

## 2. Struktur Data (JSON Schema)

Kita perlu 3 file data utama di `public/data/` untuk membuat konten ini dinamis namun statis.

### A. `magazines.json`

Mengisi section "E-Majalah".

```json
[
  {
    "id": "vol-1",
    "volume": "01",
    "date": "Januari 2024",
    "title": "Dinamika Kampus & Mahasiswa",
    "description": "Mengupas tuntas isu-isu terbaru seputar kebijakan kampus...",
    "coverImage": "/images/magazines/vol1.jpg",
    "pdfUrl": "/data/magazines/vol1.pdf"
  },
  {
    "id": "vol-2",
    "volume": "02",
    "date": "Juni 2024",
    "title": "Suara Demokrasi Muda",
    "description": "Refleksi gerakan mahasiswa dalam mengawal demokrasi...",
    "coverImage": "/images/magazines/vol2.jpg",
    "pdfUrl": "/data/magazines/vol2.pdf"
  }
]
```

> [!NOTE]
> **Fitur Baca Majalah**:
> Kita akan menggunakan **Modal Popup** yang berisi `iframe` PDF Viewer bawaan browser.
> File PDF ditaruh di folder `/public/data/magazines/`.
> Jika file terlalu besar, opsi fallback adalah tetap menggunakan link external (Google Drive/Issuu).

### B. `gallery.json`

Mengisi section "Kenangan". Field `year` digunakan untuk fitur filter.

```json
[
  {
    "id": "gal-1",
    "year": "2025",
    "title": "Rapat Kerja 2025",
    "image": "/images/gallery/raker2025.jpg"
  },
  {
    "id": "gal-2",
    "year": "2024",
    "title": "Liputan Lapangan",
    "image": "/images/gallery/liputan.jpg"
  },
  {
    "id": "gal-3",
    "year": "2023",
    "title": "Diklat Jurnalistik",
    "image": "/images/gallery/diklat.jpg"
  }
]
```

### C. `partnership.json` (Opsional)

Bisa di-hardcode di code karena jarang berubah, tapi jika ingin dinamis:

```json
[
  {
    "id": "p-1",
    "type": "Media Partner",
    "icon": "fa-handshake", // FontAwesome class
    "description": "Dukung publikasi acara organisasi...",
    "isPopular": false
  },
  {
    "id": "p-2",
    "type": "Paid Promote",
    "icon": "fa-bullhorn",
    "description": "Promosikan produk, jasa, atau kampanye...",
    "isPopular": true
  }
]
```
