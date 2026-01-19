# 2. Rancangan Arsitektur Sistem (Clean Architecture)

Meskipun ini website statis, menerapkan Clean Architecture sangat bagus agar kode rapi dan mudah dirawat jangka panjang.

Konsep intinya adalah memisahkan kode menjadi lapisan-lapisan (Layers). Arah ketergantungan mengarah ke dalam (Domain).

## Diagram Lapisan

```mermaid
graph TD
    UI[Presentation Layer (React Components)] --> Domain
    Data[Data Layer (Repositories)] --> Domain
    Domain[Domain Layer (Entities & Interfaces)]
```

## Detail Lapisan

### 1. Domain Layer (Jantung Aplikasi)

Lapisan ini berisi definisi "Objek Bisnis" kita. Tidak boleh ada kode React, CSS, atau fetch data di sini. Murni TypeScript interfaces/types.
_Contoh file:_

- `src/domain/entities/Member.ts` (Definisi bentuk data Anggota)
- `src/domain/entities/Event.ts` (Definisi bentuk data Acara)
- `src/domain/repositories/IMemberRepository.ts` (Kontrak/Interface cara mengambil data)

### 2. Data Layer (Sumber Data)

Lapisan ini bertanggung jawab mengambil data nyata. Karena kita tidak pakai Backend Server, lapisan ini akan membaca file JSON lokal.
_Contoh file:_

- `src/data/sources/LocalJsonSource.ts`
- `src/data/repositories/MemberRepositoryImpl.ts` (Implementasi dari interface di Domain)

### 3. Presentation Layer (Tampilan)

Lapisan ini adalah apa yang dilihat user. Berisi Logic State dan UI Components.
_Contoh file:_

- `src/presentation/components/MemberCard.tsx`
- `src/presentation/pages/HomePage.tsx`
- `src/presentation/store/useMemberStore.ts` (Zustand)

## Keuntungan Struktur Ini

1.  **Mudah diubah:** Jika nanti organisasi Anda menjadi besar dan _butuh_ Backend sungguhan (misal pakai Firebase atau MySQL), Anda hanya perlu mengubah **Data Layer**. **Domain** dan **Presentation (UI)** tidak perlu dirombak total!
2.  **Teruji:** Logika bisnis terisolasi.
