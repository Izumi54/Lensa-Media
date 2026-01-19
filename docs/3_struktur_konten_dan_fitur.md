# 3. Rancangan Fitur dan Konten

Sebelum coding, kita harus sepakat apa saja yang tampil di layar HP user.

## Struktur Halaman (Sitemap)

1.  **Beranda (Home)**
    - **Hero Section:** Foto besar pengurus/kegiatan + Jargon Organisasi. Kesan pertama "Wah keren".
    - **Tentang Singkat:** Visi Misi ringkas.
    - **Highlight Kegiatan:** 3 kegiatan terbaru/terbesar.
    - **CTA (Call to Action):** Tombol "Bergabung" atau "Hubungi Kami".

2.  **Profil (About Us)**
    - **Sejarah:** Cerita berdirinya organisasi.
    - **Visi & Misi:** Detail.
    - **Struktur Organisasi:** Bagan organisasi (Ketua, Wakil, Sekretaris, Divisi).

3.  **Divisi / Departemen**
    - Daftar divisi.
    - Detail per divisi (Tugas, Proker, Anggota).

4.  **Galeri / Kegiatan (Events)**
    - Dokumentasi foto-foto kegiatan.
    - Artikel singkat per kegiatan.

5.  **Kontak**
    - Alamat Sekretariat (bisa embed Google Maps).
    - Link Sosmed (Instagram, TikTok, LinkedIn).
    - Form Email (Opsional, bisa diarahkan ke WhatsApp Link agar lebih mudah/gratis tanpa server email).

## Struktur Data (JSON Schema Draft)

Ini gambaran bagaimana kita menyimpan data nanti.

**members.json**

```json
[
  {
    "id": "1",
    "name": "Budi Santoso",
    "position": "Ketua Umum",
    "division": "BPH",
    "photoUrl": "/images/members/budi.jpg",
    "instagram": "@budisan"
  },
  ...
]
```

**events.json**

```json
[
  {
    "id": "ev-1",
    "title": "Latihan Kepemimpinan 2024",
    "date": "2024-02-10",
    "description": "Acara tahunan untuk melatih jiwa kepemimpinan...",
    "thumbnail": "/images/events/lkmm.jpg"
  }
]
```
