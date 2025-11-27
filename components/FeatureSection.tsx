import React from 'react';
import { Button } from './Button';

interface FeatureSectionProps {
  title: string;
  description: string;
  primaryCtaText: string;
  imageSide?: 'left' | 'right';
  visual: React.ReactNode;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  primaryCtaText,
  imageSide = 'left',
  visual,
}) => {
  return (
    <section className="py-24 bg-stone-950 border-t border-stone-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${imageSide === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative group">
             {/* Background Blob for depth */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-saffron-600/5 blur-[100px] rounded-full pointer-events-none" />
             
             {/* The Custom Visual Container */}
             <div className="relative z-10 transform transition-transform duration-700 hover:scale-[1.02] hover:rotate-1">
               {visual}
             </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl text-stone-100 leading-tight">
              {title}
            </h2>
            <p className="font-sans text-lg text-stone-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button variant="primary">
                {primaryCtaText}
              </Button>
              <div className="flex items-center gap-2 text-sm font-sans text-stone-500">
                <span>or</span>
                <Button variant="link" size="sm" className="!text-stone-300 !font-bold">
                  Get the App
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};