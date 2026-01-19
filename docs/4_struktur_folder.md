# 4. Rancangan Struktur Folder Project

Ini adalah peta fisik file kita nanti di VS Code.

```
/ (Root Project)
├── public/                 # File statis (Gambar, Logo, Icon)
│   ├── images/
│   │   ├── members/
│   │   └── events/
│   └── data/               # DATABASE KITA (File JSON)
│       ├── members.json
│       └── events.json
│
├── src/
│   ├── app/                # Next.js App Router (Halaman Website/Routing)
│   │   ├── page.tsx        # Halaman Home
│   │   ├── about/          # Halaman About
│   │   └── layout.tsx      # Layout utama (Navbar & Footer tetap)
│   │
│   ├── domain/             # CLEAN ARCH: DOMAIN LAYER
│   │   ├── entities/       # Definisi Tipe Data (TS Interfaces)
│   │   │   ├── Member.ts
│   │   │   └── Event.ts
│   │   └── repositories/   # Interface Kontrak Data
│   │       └── OrganizationRepository.ts
│   │
│   ├── data/               # CLEAN ARCH: DATA LAYER
│   │   └── repositories/   # Implementasi pengambilan data
│   │       └── JsonOrganizationRepository.ts
│   │
│   ├── presentation/       # CLEAN ARCH: PRESENTATION LAYER
│   │   ├── components/     # Komponen UI (Tombol, Kartu, Navbar)
│   │   │   ├── ui/         # Komponen kecil (Button, Input)
│   │   │   └── features/   # Komponen fitur (MemberCard, EventList)
│   │   ├── stores/         # State Management (Zustand)
│   │   │   └── useOrgStore.ts
│   │   └── styles/         # Global styles (Tailwind directives)
│   │
│   └── lib/                # Fungsi bantuan (Helpers/Utils)
│
├── docs/                   # Dokumen rancangan ini
├── next.config.js
└── package.json
```
