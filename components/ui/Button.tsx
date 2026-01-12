import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const variants = {
  primary: "bg-violet-600 text-white hover:bg-violet-700 shadow-lg shadow-violet-600/30",
  secondary: "bg-white text-slate-900 hover:bg-slate-50 border border-slate-200",
  outline: "bg-transparent text-violet-600 hover:bg-violet-50 border-2 border-violet-600",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${sizes[size]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={baseClasses}>
      {children}
    </button>
  );
}
