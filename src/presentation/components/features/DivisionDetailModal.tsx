"use client";

import React from "react";
import { Modal } from "@/presentation/components/ui/Modal";
import { Division } from "@/domain/entities/OrganizationStruct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUsers } from "@fortawesome/free-solid-svg-icons";

interface DivisionDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  division: Division | null;
}

export const DivisionDetailModal: React.FC<DivisionDetailModalProps> = ({
  isOpen,
  onClose,
  division,
}) => {
  if (!division) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Divisi ${division.name}`}
    >
      <div className="space-y-8 p-2">
        {/* Kepala Divisi */}
        <div className="text-center bg-blue-50 p-6 rounded-xl border border-blue-100">
           <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
              <FontAwesomeIcon icon={faUser} />
           </div>
           <h4 className="text-xl font-bold text-dark">{division.head}</h4>
           <div className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mt-2">
              CO / Koordinator
           </div>
        </div>

        {/* Anggota List */}
        <div>
            <h5 className="font-bold text-lg text-dark mb-4 flex items-center gap-2">
                <FontAwesomeIcon icon={faUsers} className="text-secondary" />
                Anggota Divisi
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {division.members.map((memberName, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                            {idx + 1}
                        </div>
                        <span className="font-medium text-gray-700">{memberName}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </Modal>
  );
};
