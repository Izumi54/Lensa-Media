# 4. Rancangan Struktur Folder Project (Revisi UI)

Struktur file disesuaikan untuk mendukung komponen-komponen spesifik dari desain referensi.

```
/ (Root Project)
├── public/
│   ├── images/
│   │   ├── magazines/      # Cover majalah
│   │   ├── gallery/        # Foto kegiatan
│   │   └── parnertship/    # (Opsional) Icon jika pakai gambar
│   └── data/               # DATABASE JSON (Single Source of Truth)
│       ├── magazines.json
│       └── gallery.json
│
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Load Google Fonts (Inter & Merriweather) & Global CSS
│   │   ├── page.tsx        # Halaman Utama (One Page Scroll)
│   │   └── globals.css     # @tailwind directives & Custom Animations
│   │
│   ├── domain/             # CLEAN ARCH: TYPES & INTERFACES
│   │   └── entities/
│   │       ├── Magazine.ts
│   │       └── GalleryItem.ts
│   │
│   ├── data/               # CLEAN ARCH: DATA ACCESS
│   │   └── repositories/
│   │       ├── MagazineRepository.ts  # Fetch dari magazines.json
│   │       └── GalleryRepository.ts   # Fetch dari gallery.json
│   │
│   ├── presentation/       # CLEAN ARCH: UI COMPONENTS
│   │   ├── components/
│   │   │   ├── layout/     # Komponen Struktur Utama
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── SectionContainer.tsx
│   │   │   │
│   │   │   ├── features/   # Komponen Spesifik Fitur
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── MagazineSection.tsx
│   │   │   │   ├── GallerySection.tsx
│   │   │   │   └── PartnershipSection.tsx
│   │   │   │
│   │   │   └── ui/         # Komponen Kecil (Reusable)
│   │   │       ├── Button.tsx
│   │   │       ├── MagazineCard.tsx
│   │   │       ├── GalleryItem.tsx
│   │   │       └── SectionHeading.tsx
│   │   │
│   │   └── stores/         # ZUSTAND STORES
│   │       └── useUIStore.ts  # Handle Mobile Menu & Gallery Filter
│   │
│   └── lib/                # Utilities (misal: format tanggal, classNames)
│
├── tailwind.config.ts      # Config warna & font
└── package.json
```
