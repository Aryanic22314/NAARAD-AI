import React from 'react';
import { RouteCategory } from '../types';

interface RouteCardProps {
  category: RouteCategory;
}

export const RouteCard: React.FC<RouteCardProps> = ({ category }) => {
  return (
    <div className="group relative min-w-[280px] h-[360px] rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 snap-center border border-stone-800 hover:border-saffron-600 transition-colors duration-300">
      
      {/* Background Image */}
      <img 
        src={category.imageUrl} 
        alt={category.name} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center justify-between mb-2">
            <span className="text-stone-400 text-xs font-mono uppercase tracking-widest bg-black/50 backdrop-blur px-2 py-1 rounded">
              {category.count} Routes
            </span>
            <div className="text-stone-500 group-hover:text-saffron-500 transition-colors duration-300">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
               </svg>
            </div>
          </div>
          
          <h3 className="font-serif text-2xl text-white group-hover:text-saffron-100 transition-colors leading-tight">
            {category.name}
          </h3>
        </div>
      </div>
    </div>
  );
};