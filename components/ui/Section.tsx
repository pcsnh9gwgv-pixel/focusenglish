import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "gradient";
}

const backgrounds = {
  white: "bg-white",
  gray: "bg-slate-50",
  gradient: "bg-gradient-to-b from-violet-600 to-violet-700",
};

export function Section({ children, className = "", id, background = "white" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
}
