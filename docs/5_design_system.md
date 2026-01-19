# 5. Design System

Dokumen ini menjadi acuan tunggal ("Single Source of Truth") untuk gaya visual website Lensa Media. Mengacu pada referensi `UI/index.html`.

## 1. Color Palette (Warna)

| Name           | Hex Code        | Utility Class                     | Penggunaan                                                  |
| :------------- | :-------------- | :-------------------------------- | :---------------------------------------------------------- |
| **Primary**    | `#1e3a8a`       | `bg-primary` / `text-primary`     | Navbar Brand, Tombol Utama, Judul Section, Aksen Teks       |
| **Secondary**  | `#f59e0b`       | `bg-secondary` / `text-secondary` | Tombol Aksi Sekunder (Berita), Ikon Highlight, Border Aksen |
| **Dark**       | `#111827`       | `text-dark`                       | Judul Artikel, Headings Utama (h1, h2, h3)                  |
| **Body Text**  | `text-gray-600` | `text-gray-600`                   | Paragraf, Keterangan                                        |
| **Background** | `#f3f4f6`       | `bg-gray-50` / `bg-light`         | Latar Belakang Section Selang-seling                        |
| **White**      | `#ffffff`       | `bg-white`                        | Latar Kartu, Navbar, Section Utama                          |

## 2. Typography (Huruf)

### Font Families

- **Headings (Serif)**: `Merriweather`, serif.
  - Memberikan kesan kredibel, jurnalistik, dan tegas.
  - Usage: `font-serif`
- **Body & UI (Sans-Serif)**: `Inter`, sans-serif.
  - Memberikan kesan modern, bersih, dan mudah dibaca (legibility tinggi).
  - Usage: `font-sans`

### Scale & Styles

- **H1 (Hero)**: `text-4xl md:text-6xl font-bold` (Line height tight)
- **H2 (Section Title)**: `text-3xl md:text-4xl font-bold`
- **H3 (Card Title)**: `text-xl md:text-2xl font-bold`
- **Button Text**: `font-bold` (Tracking normal)

## 3. UI Components Styles

### Buttons (Tombol)

- **Primary Button**:
  - Baground: `#1e3a8a` (Primary) -> Hover: `blue-800`
  - Shape: `rounded-full` (Pill shape)
  - Shadow: `shadow-lg` -> Hover: `shadow-xl`
  - Animation: `transform hover:-translate-y-0.5`
- **Secondary Button**:
  - Baground: `#f59e0b` (Secondary) -> Hover: `amber-600`
  - Shape: `rounded-lg` (Rounded corners)
- **Outline Button**:
  - Border: `2px solid gray-200` -> Hover: `border-primary`
  - Text: `gray-700` -> Hover: `text-primary`

### Cards (Kartu)

- **Majalah Card**:
  - Background: `bg-gray-50`
  - Border: `border-gray-100`
  - Radius: `rounded-2xl`
  - Shadow: `shadow-sm` -> Hover: `shadow-lg` (Lift up effect)
  - Image Aspect: Landscape standard.
- **Partnership Card**:
  - Background: `bg-white`
  - Radius: `rounded-2xl`
  - Decoration: Icon centered in circle (`w-16 h-16`).

### Gallery Grid

- **Item**:
  - Aspect Ratio: `aspect-square` (1:1)
  - Interaction: Hover overlay `bg-black/50` + Caption slide up.

### Modals / Popups (Viewer)

- **Overlay**:
  - Backdrop: `bg-black/80` (Backdrop blur transparan gelap)
  - Position: `fixed inset-0 z-50`
- **Content Container**:
  - Size: `w-full max-w-5xl h-[85vh]` (Responsive)
  - Background: `bg-white`
  - Radius: `rounded-xl`
  - Animation: `scale-95` -> `scale-100` (Zoom in effect)
- **Close Button**:
  - Position: Absolute top-right outside or inside corner.
  - Style: `text-white/80` hover `text-white`.

## 4. Effects & Animations

- **Smooth Scroll**: `scroll-behavior: smooth` (Global HTML)
- **Fade In**: Kustom animasi untuk filter galeri.
- **Transition**: `duration-300` digunakan hampir di semua interaksi hover.
