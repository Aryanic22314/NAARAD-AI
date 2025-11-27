import React from 'react';
import { PlaceCategory } from '../types';

interface CategoryCardProps {
  category: PlaceCategory;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="group relative min-w-[160px] h-[160px] bg-stone-900/50 backdrop-blur border border-stone-800 rounded-2xl p-4 flex flex-col justify-between cursor-pointer hover:bg-stone-800 transition-all duration-300 hover:border-saffron-600/50 hover:shadow-[0_0_20px_rgba(234,88,12,0.15)] overflow-hidden snap-center">
      
      {/* Background Hover Decoration */}
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-saffron-600/10 rounded-full blur-2xl group-hover:bg-saffron-600/20 transition-all duration-500" />

      {/* Icon */}
      <div className="w-16 h-16 text-stone-500 group-hover:text-saffron-500 transition-colors duration-300 group-hover:scale-110 transform origin-top-left">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="w-full h-full"
        >
          <path d={category.iconPath} />
        </svg>
      </div>

      <div className="flex items-end justify-between">
        <h3 className="font-serif text-stone-300 group-hover:text-white text-sm font-bold leading-tight max-w-[80%]">
          {category.name}
        </h3>
        
        {/* Arrow Icon */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0 text-saffron-500">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  );
};