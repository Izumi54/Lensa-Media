import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 transform active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-blue-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 rounded-full px-5 py-2.5",
    secondary: "bg-secondary text-white hover:bg-amber-600 shadow-md rounded-lg px-8 py-3.5 text-lg",
    outline: "bg-transparent border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary rounded-lg px-8 py-3.5 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
