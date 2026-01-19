import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Magazine } from "@/domain/entities/Magazine";

interface MagazineCardProps {
  magazine: Magazine;
  onRead: (mag: Magazine) => void;
}

export const MagazineCard: React.FC<MagazineCardProps> = ({ magazine, onRead }) => {
  return (
    <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group flex flex-col h-full">
      {/* Cover Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <Image 
            src={magazine.coverImage} 
            alt={magazine.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition"></div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col grow">
        <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-primary">Volume {magazine.volume}</span>
            <span className="text-sm text-gray-500">{magazine.date}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-dark mb-3 font-serif leading-tight">
            {magazine.title}
        </h3>
        
        <p className="text-gray-600 mb-6 grow line-clamp-3">
            {magazine.description}
        </p>
        
        <div className="mt-auto pt-4">
            <button 
                onClick={() => onRead(magazine)}
                className="inline-flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition group/btn"
            >
                Baca Online 
                <FontAwesomeIcon icon={faArrowRight} className="transform group-hover/btn:translate-x-1 transition" />
            </button>
        </div>
      </div>
    </div>
  );
};
