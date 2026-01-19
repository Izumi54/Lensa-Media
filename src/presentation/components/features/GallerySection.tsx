"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/presentation/components/ui/SectionHeading";
import { GalleryItemComponent } from "@/presentation/components/ui/GalleryItem";
import { GalleryItem } from "@/domain/entities/GalleryItem";

// Dummy Data Galeri
const GALLERY_DATA: GalleryItem[] = [
    { id: "1", year: "2025", title: "Rapat Kerja", image: "https://placehold.co/400x400/1e3a8a/FFF?text=Rapat+2025" },
    { id: "2", year: "2024", title: "Liputan Lapangan", image: "https://placehold.co/400x400/333/FFF?text=Liputan" },
    { id: "3", year: "2024", title: "Dies Natalis", image: "https://placehold.co/400x400/555/FFF?text=Dies+Natalis" },
    { id: "4", year: "2023", title: "Diklat Jurnalistik", image: "https://placehold.co/400x400/777/FFF?text=Diklat" },
    { id: "5", year: "2023", title: "Pelantikan Anggota", image: "https://placehold.co/400x400/888/FFF?text=Pelantikan" },
    { id: "6", year: "2022", title: "Bakti Sosial", image: "https://placehold.co/400x400/999/FFF?text=Baksos" },
];

export const GallerySection = () => {
  const [filter, setFilter] = useState("all");
  const years = ["2025", "2024", "2023", "2022"];

  const filteredItems = filter === "all" 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.year === filter);

  return (
    <section id="kenangan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="mb-6 md:mb-0 w-full md:w-auto text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark mb-2">Galeri Kenangan</h2>
                <p className="text-gray-600">Dokumentasi perjalanan kami dari tahun ke tahun.</p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full md:w-auto">
                <button 
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition ${filter === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                    Semua
                </button>
                {years.map(year => (
                    <button 
                        key={year}
                        onClick={() => setFilter(year)}
                        className={`px-4 py-2 rounded-full text-sm font-bold transition ${filter === year ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        {year}
                    </button>
                ))}
            </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map(item => (
                <GalleryItemComponent key={item.id} item={item} />
            ))}
        </div>
        
        {filteredItems.length === 0 && (
            <div className="text-center py-10 text-gray-500">
                Tidak ada dokumentasi untuk tahun {filter}.
            </div>
        )}
      </div>
    </section>
  );
};
