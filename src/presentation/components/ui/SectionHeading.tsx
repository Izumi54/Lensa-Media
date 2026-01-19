import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  lightMode?: boolean; // Jika di background gelap
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = "center",
  lightMode = false,
}) => {
  const alignment = align === "center" ? "text-center" : "text-left";
  const titleColor = lightMode ? "text-white" : "text-dark";
  const subtitleColor = lightMode ? "text-gray-300" : "text-gray-600";
  const underlineColor = lightMode ? "bg-white" : "bg-primary";

  return (
    <div className={`mb-16 ${alignment}`}>
      <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>
      <div
        className={`w-20 h-1 rounded-full mb-4 ${underlineColor} ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && <p className={`${subtitleColor} max-w-2xl mx-auto`}>{subtitle}</p>}
    </div>
  );
};
