import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { CompassData } from '../types';

interface CuriosityCompassProps {
  data: CompassData[];
}

export const CuriosityCompass: React.FC<CuriosityCompassProps> = ({ data }) => {
  return (
    <div className="relative w-full h-[400px] bg-stone-900/50 backdrop-blur-sm rounded-xl border border-stone-800 p-4 shadow-2xl">
      {/* Decorative Corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-saffron-600 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-saffron-600 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-saffron-600 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-saffron-600 rounded-br-lg" />

      <h3 className="text-center font-serif text-2xl text-saffron-500 mb-2 uppercase tracking-widest drop-shadow-md">
        Curiosity Compass
      </h3>
      <p className="text-center font-sans text-stone-500 text-sm mb-4">
        Your cultural DNA signature
      </p>

      <ResponsiveContainer width="100%" height="80%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#44403c" strokeDasharray="3 3" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#fb923c', fontSize: 12, fontFamily: 'Rajdhani', fontWeight: 600 }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="#ea580c"
            strokeWidth={3}
            fill="#ea580c"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
      
      <div className="absolute bottom-4 right-4 text-xs font-mono text-stone-600">
        SYNC_ID: 8492-XJ
      </div>
    </div>
  );
};