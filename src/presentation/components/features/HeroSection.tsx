import React from "react";
import Link from "next/link";
import { Button } from "@/presentation/components/ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

export const HeroSection = () => {
  return (
    <section id="beranda" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#1e3a8a"></path>
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Tagline */}
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary text-sm font-semibold mb-6 animate-pulse">
            Pers Mahasiswa Terkini
          </span>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-dark mb-6 leading-tight">
            Menyuarakan Kebenaran,<br />
            Merangkai <span className="text-primary">Peristiwa</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg text-gray-600 mb-10 leading-relaxed font-sans">
            Portal resmi LPM Lensa Media. Temukan berita terbaru kampus, majalah digital, dan dokumentasi kegiatan kami di sini.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://lensanewsroom.com" target="_blank" rel="noopener noreferrer">
               <Button variant="secondary">
                  <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
                  Baca Berita Terkini
               </Button>
            </a>
            
            <Link href="#majalah">
               <Button variant="outline">
                  Baca Majalah
               </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
