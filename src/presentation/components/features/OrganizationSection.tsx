"use client";

import React, { useState, useEffect } from "react";
import { SectionHeading } from "@/presentation/components/ui/SectionHeading";
import { MemberCard } from "@/presentation/components/ui/MemberCard";
import { DivisionDetailModal } from "./DivisionDetailModal";
import { OrganizationStructure, Division } from "@/domain/entities/OrganizationStruct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPenNib, faNewspaper, faUsers } from "@fortawesome/free-solid-svg-icons";

// Helper to map icon names from JSON to actual Icon objects
const getIcon = (iconName?: string) => {
  switch(iconName) {
    case 'faNewspaper': return faNewspaper;
    case 'faLaptopCode': return faLaptopCode;
    case 'faPenNib': return faPenNib;
    default: return faUsers;
  }
};

export const OrganizationSection = () => {
  const [orgData, setOrgData] = useState<OrganizationStructure | null>(null);
  const [selectedDivision, setSelectedDivision] = useState<Division | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/data/structure.json")
      .then((res) => res.json())
      .then((data) => setOrgData(data))
      .catch((err) => console.error("Failed to load organization structure:", err));
  }, []);

  const handleDivisionClick = (div: Division) => {
    setSelectedDivision(div);
    setIsModalOpen(true);
  };

  if (!orgData) return null; // Or loading spinner

  return (
    <section id="organisasi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Struktur Organisasi" 
          subtitle="Mengenal lebih dekat pengurus LPM Lensa Media periode ini."
        />

        {/* 1. Pelindung & Penanggung Jawab */}
        <div className="mb-16">
           <h3 className="text-center font-bold text-gray-400 uppercase tracking-widest text-sm mb-8">Pelindung & Penanggung Jawab</h3>
           <div className="flex flex-wrap justify-center gap-10">
               {orgData.advisors.map((member, idx) => (
                   <MemberCard key={idx} member={member} size="sm" />
               ))}
           </div>
        </div>

        {/* 2. Pimpinan Inti */}
        <div className="mb-16">
            <h3 className="text-center font-bold text-gray-400 uppercase tracking-widest text-sm mb-8">Pimpinan Inti</h3>
            <div className="flex flex-wrap justify-center gap-10 lg:gap-20 mb-10">
                {orgData.leaders.map((member, idx) => (
                    <MemberCard key={idx} member={member} size="lg" />
                ))}
            </div>
            {/* BPH */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
                {orgData.bph.map((member, idx) => (
                    <MemberCard key={idx} member={member} size="md" />
                ))}
            </div>
        </div>

        {/* 3. Divisi Grid (Hybrid) */}
        <div>
            <h3 className="text-center font-bold text-gray-400 uppercase tracking-widest text-sm mb-8">Divisi - Divisi</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {orgData.divisions.map((div, idx) => (
                    <div 
                        key={idx}
                        onClick={() => handleDivisionClick(div)}
                        className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-primary hover:shadow-lg transition cursor-pointer group text-center"
                    >
                        <div className="w-16 h-16 bg-blue-50 text-secondary rounded-full flex items-center justify-center text-3xl mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition duration-300">
                            <FontAwesomeIcon icon={getIcon(div.iconName)} />
                        </div>
                        <h4 className="text-xl font-bold text-dark mb-1">{div.name}</h4>
                        <p className="text-sm text-gray-500">Klik untuk lihat {div.members.length} anggota</p>
                    </div>
                ))}
            </div>
        </div>

        <DivisionDetailModal 
            isOpen={isModalOpen} 
            onClose={() => setIsModalOpen(false)} 
            division={selectedDivision} 
        />
      </div>
    </section>
  );
};
