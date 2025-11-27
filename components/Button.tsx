import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "relative font-sans font-bold tracking-widest uppercase transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 group overflow-hidden";
  
  const sizeStyles = {
    sm: "text-xs py-2 px-4",
    md: "py-3 px-8 text-sm",
    lg: "py-4 px-10 text-base"
  };

  const variants = {
    primary: "bg-saffron-600 text-stone-950 hover:bg-saffron-500 hover:shadow-[0_0_20px_rgba(234,88,12,0.6)] clip-hex clip-path-polygon",
    secondary: "bg-stone-800 text-saffron-500 hover:bg-stone-700 hover:text-saffron-400 border-l-2 border-r-2 border-saffron-900 clip-path-polygon",
    outline: "bg-transparent border border-saffron-600/30 text-saffron-500 hover:border-saffron-500 hover:bg-saffron-600/10 clip-path-polygon",
    link: "bg-transparent text-stone-400 hover:text-saffron-500 underline-offset-4 hover:underline px-0 py-0 !transform-none"
  };

  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{icon}{children}</span>
      {/* Holographic shine effect (disabled for links) */}
      {variant !== 'link' && (
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      )}
    </button>
  );
};