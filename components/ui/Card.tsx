import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddings = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({ children, className = "", hover = false, padding = "md" }: CardProps) {
  const hoverClasses = hover ? "hover:shadow-xl hover:-translate-y-1" : "";
  
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 ${paddings[padding]} ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}
