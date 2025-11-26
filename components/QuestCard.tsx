import React from 'react';
import { Quest } from '../types';

interface QuestCardProps {
  quest: Quest;
}

export const QuestCard: React.FC<QuestCardProps> = ({ quest }) => {
  return (
    <div className="group relative min-w-[300px] w-[300px] md:min-w-[350px] bg-stone-900 rounded-xl overflow-hidden border border-stone-800 hover:border-saffron-600/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(234,88,12,0.15)] flex-shrink-0 snap-center">
      
      {/* Image Container with Gradient Overlay */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent z-10" />
        <img 
          src={quest.imageUrl} 
          alt={quest.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
        />
        <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-stone-700">
            <span className="text-saffron-400 font-sans font-bold text-xs tracking-wider">{quest.difficulty}</span>
        </div>
      </div>

      <div className="p-5 relative z-20">
        <div className="flex items-center justify-between mb-2">
            <span className="text-stone-500 text-xs font-mono uppercase tracking-widest">{quest.location}</span>
            <span className="text-saffron-600 text-xs font-bold">+{quest.xp} XP</span>
        </div>
        
        <h3 className="font-serif text-xl text-stone-100 mb-2 leading-tight group-hover:text-saffron-400 transition-colors">
          {quest.title}
        </h3>
        
        <p className="text-stone-400 font-sans text-sm line-clamp-2 mb-4">
          {quest.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
           <div className="flex gap-2">
             {quest.tags.map(tag => (
               <span key={tag} className="px-2 py-0.5 bg-stone-800 text-stone-400 text-[10px] rounded uppercase tracking-wide">
                 {tag}
               </span>
             ))}
           </div>
           <button className="w-8 h-8 rounded-full bg-saffron-600 flex items-center justify-center text-stone-950 hover:bg-white transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
               <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
             </svg>
           </button>
        </div>
      </div>
    </div>
  );
};