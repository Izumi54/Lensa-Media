import React from "react";
import Image from "next/image";
import { GalleryItem } from "@/domain/entities/GalleryItem";

interface GalleryItemProps {
  item: GalleryItem;
}

export const GalleryItemComponent: React.FC<GalleryItemProps> = ({ item }) => {
  return (
    <div className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer bg-gray-200">
        <Image 
            src={item.image} 
            alt={item.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <div className="text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                <span className="block text-secondary font-bold text-xs uppercase mb-1">{item.year}</span>
                <span className="block text-white font-bold text-lg leading-tight">{item.title}</span>
            </div>
        </div>
    </div>
  );
};
