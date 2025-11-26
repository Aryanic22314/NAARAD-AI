import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "relative font-sans font-bold tracking-widest uppercase py-3 px-8 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 group overflow-hidden clip-path-polygon";
  
  const variants = {
    primary: "bg-saffron-600 text-stone-950 hover:bg-saffron-500 hover:shadow-[0_0_20px_rgba(234,88,12,0.6)] clip-hex",
    secondary: "bg-stone-800 text-saffron-500 hover:bg-stone-700 hover:text-saffron-400 border-l-2 border-r-2 border-saffron-900",
    outline: "bg-transparent border border-saffron-600/30 text-saffron-500 hover:border-saffron-500 hover:bg-saffron-600/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{icon}{children}</span>
      {/* Holographic shine effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
    </button>
  );
};