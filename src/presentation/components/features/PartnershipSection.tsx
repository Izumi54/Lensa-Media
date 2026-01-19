"use client";

import React from "react";
import { SectionHeading } from "@/presentation/components/ui/SectionHeading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake, faBullhorn, faAward } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Button } from "../ui/Button";

export const PartnershipSection = () => {
  return (
    <section id="kerjasama" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
            title="Jalin Kerja Sama" 
            subtitle="Kami terbuka untuk berbagai bentuk kolaborasi yang saling menguntungkan."
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Media Partner */}
            <PartnershipCard 
                icon={faHandshake} 
                title="Media Partner" 
                desc="Dukung publikasi acara organisasi atau instansi Anda melalui jaringan media sosial dan website kami." 
            />
            {/* Paid Promote */}
            <PartnershipCard 
                icon={faBullhorn} 
                title="Paid Promote" 
                desc="Promosikan produk, jasa, atau kampanye Anda secara efektif kepada ribuan mahasiswa audiens kami."
                highlight 
            />
            {/* Sponsorship */}
            <PartnershipCard 
                icon={faAward} 
                title="Sponsorship" 
                desc="Jadilah bagian dari event besar kami (Dies Natalis, Pelatihan) dan dapatkan eksposur brand eksklusif." 
            />
        </div>

        <div className="text-center">
            <a href="https://wa.me/6282244482470" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-2xl" />
                    Hubungi Humas via WhatsApp
                </button>
            </a>
        </div>
      </div>
    </section>
  );
};

const PartnershipCard = ({ icon, title, desc, highlight = false }: { icon: any, title: string, desc: string, highlight?: boolean }) => (
    <div className={`bg-white p-8 rounded-2xl border transition text-center group relative overflow-hidden h-full flex flex-col ${highlight ? 'border-secondary shadow-lg scale-105 z-10' : 'border-gray-100 shadow hover:shadow-lg'}`}>
        {highlight && (
            <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULER</div>
        )}
        <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 transition duration-300 ${highlight ? 'bg-amber-50 text-secondary group-hover:bg-secondary group-hover:text-white' : 'bg-blue-50 text-primary group-hover:bg-primary group-hover:text-white'}`}>
            <FontAwesomeIcon icon={icon} />
        </div>
        <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-6 grow">{desc}</p>
    </div>
);
