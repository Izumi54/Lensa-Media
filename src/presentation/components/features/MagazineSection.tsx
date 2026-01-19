"use client";

import React, { useState, useEffect } from "react";
import { SectionHeading } from "@/presentation/components/ui/SectionHeading";
import { MagazineCard } from "@/presentation/components/ui/MagazineCard";
import { MagazineViewerModal } from "./MagazineViewerModal";
import { Magazine } from "@/domain/entities/Magazine";

export const MagazineSection = () => {
  const [magazines, setMagazines] = useState<Magazine[]>([]);
  const [selectedMagazine, setSelectedMagazine] = useState<Magazine | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/data/magazines.json")
      .then((res) => res.json())
      .then((data) => setMagazines(data))
      .catch((err) => console.error("Failed to load magazines:", err));
  }, []);

  const handleRead = (mag: Magazine) => {
    setSelectedMagazine(mag);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedMagazine(null);
  };

  return (
    <section id="majalah" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
            title="E-Majalah" 
            subtitle="Baca edisi terbaru majalah Lensa Media secara gratis dan akses arsip eksklusif kami."
        />

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {magazines.map((mag) => (
                <MagazineCard key={mag.id} magazine={mag} onRead={handleRead} />
            ))}
        </div>

        <MagazineViewerModal 
            isOpen={isModalOpen} 
            onClose={handleClose} 
            magazine={selectedMagazine} 
        />
      </div>
    </section>
  );
};
