"use client";

import React from "react";
import { Modal } from "@/presentation/components/ui/Modal";
import { Magazine } from "@/domain/entities/Magazine";

interface MagazineViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  magazine: Magazine | null;
}

export const MagazineViewerModal: React.FC<MagazineViewerModalProps> = ({
  isOpen,
  onClose,
  magazine,
}) => {
  if (!magazine) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Baca: ${magazine.title}`}
      maxWidth="max-w-6xl"
    >
      <div className="w-full h-[70vh] md:h-[80vh] bg-gray-100 rounded-lg overflow-hidden flex flex-col items-center justify-center">
        {magazine.pdfUrl ? (
          <iframe
            src={magazine.pdfUrl}
            className="w-full h-full border-none"
            title={magazine.title}
          />
        ) : (
          <div className="text-center p-8">
            <p className="text-gray-500 mb-4">File PDF belum tersedia.</p>
            <p>Silakan hubungi redaksi untuk versi cetak.</p>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <span>Volume {magazine.volume} ({magazine.date})</span>
        {magazine.pdfUrl && (
             <a 
                href={magazine.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
             >
                Buka di Tab Baru
             </a>
        )}
      </div>
    </Modal>
  );
};
