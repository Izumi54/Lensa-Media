import React from "react";
import { Member } from "@/domain/entities/OrganizationStruct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

interface MemberCardProps {
  member: Member;
  size?: "lg" | "md" | "sm";
}

export const MemberCard: React.FC<MemberCardProps> = ({ member, size = "md" }) => {
  // Size affects text size and padding, not image anymore
  const containerClasses = {
    lg: "p-6 min-w-[200px]",
    md: "p-4 min-w-[160px]",
    sm: "p-3 min-w-[140px]",
  };
  
  const nameSize = {
     lg: "text-xl",
     md: "text-lg",
     sm: "text-base",
  };

  return (
    <div className={`flex flex-col items-center text-center bg-white rounded-xl shadow-sm border border-gray-100 p-4 min-w-[160px] hover:shadow-md hover:border-primary transition duration-300 group`}>
      <h4 className={`font-bold text-dark ${nameSize[size]} mb-1 leading-tight`}>{member.name}</h4>
      
      <p className="text-secondary text-xs font-bold uppercase tracking-wide group-hover:text-primary transition duration-300">
        {member.role}
      </p>
    </div>
  );
};
