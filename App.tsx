import React from "react";
import { DEMO_COMPASS_DATA, DEMO_QUESTS, VALUE_PROPS, PLACE_CATEGORIES, ROUTE_CATEGORIES } from "./constants";
import { CuriosityCompass } from "./components/CuriosityCompass";
import { QuestCard } from "./components/QuestCard";
import { Button } from "./components/Button";
import { OracleChat } from "./components/OracleChat";
import { CategoryCard } from "./components/CategoryCard";
import { RouteCard } from "./components/RouteCard";
import { FeatureSection } from "./components/FeatureSection";

function App() {
  return (
    <div className="min-h-screen bg-stone-950 font-sans selection:bg-saffron-600 selection:text-white overflow-x-hidden">
      {/* Navigation (Sticky) */}
      <nav className="fixed top-0 w-full z-50 bg-stone-950/80 backdrop-blur-md border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-2xl tracking-widest text-white">
              NAARAD
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8 text-sm font-bold tracking-wider text-stone-400 uppercase">
            <a href="#compass" className="hover:text-saffron-500 transition-colors">
              Compass
            </a>
            <a href="#places" className="hover:text-saffron-500 transition-colors">
              Places
            </a>
            <a href="#quests" className="hover:text-saffron-500 transition-colors">
              Quests
            </a>
            <a href="#oracle" className="hover:text-saffron-500 transition-colors">
              Oracle
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="outline" className="text-sm py-2 px-4 !border-saffron-600">
            Get App
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-4 md:px-0 bg-[url('https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-950/80 to-stone-950" />
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-3 py-1 bg-saffron-900/30 border border-saffron-600/30 rounded text-saffron-400 text-xs font-bold tracking-[0.2em] uppercase">
              The Digital Curiosity Compass
            </div>
            
            <h1 className="font-serif text-white leading-[1.1] drop-shadow-2xl">
              <span className="block text-4xl md:text-5xl lg:text-6xl mb-2">
                Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 to-gold-500">
                  Personal Cultural Compass
                </span>
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl text-stone-300 font-normal">
              </span>
              <span className="block text-sm text-saffron-400 font-sans tracking-wider uppercase mt-2 opacity-80">
                (Powered by Multilingual AI Storytelling)
              </span>
            </h1>

            <p className="text-lg text-stone-300 max-w-lg leading-relaxed">
              Frustrated with boring tours and patchy networks? NAARAD preloads your entire cultural journey, unlocking cinematic stories, AR moments, and friend tracking even when the signal disappears. NAARAD uses AI for Bharat-backed multilingual intelligence to serve stories that feel authentic, local, and crafted just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary">Start Your Quest</Button>
              <Button variant="outline">View Trailer</Button>
            </div>

            {/* Stat Pills */}
            <div className="flex gap-6 pt-8 border-t border-stone-800/50">
              <div>
                <div className="text-2xl font-bold text-white font-serif">2.1B</div>
                <div className="text-xs text-stone-500 uppercase tracking-wide">Trips by 2025</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-serif">68%</div>
                <div className="text-xs text-stone-500 uppercase tracking-wide">Offline Sites</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end" id="compass">
            {/* Interactive Compass Component */}
            <CuriosityCompass data={DEMO_COMPASS_DATA} />
          </div>
        </div>
      </header>

      {/* Value Props / Pain-to-Proof */}
      <section className="py-20 bg-stone-900 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Feeling lost at heritage sites?
            </h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              It's not your fault, it's the lack of real storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUE_PROPS.map((prop) => (
              <div
                key={prop.id}
                className="p-6 bg-stone-950 border border-stone-800 rounded-xl hover:border-saffron-600/40 transition-colors group"
              >
                <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">
                  {prop.icon}
                </div>
                <h3 className="font-serif text-lg text-saffron-500 mb-2 leading-tight">
                  {prop.differentiator}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed font-sans">
                  {prop.headline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE 1: Plan the perfect route */}
      <FeatureSection
        title="Plan the perfect pilgrimage"
        description="Whether you're looking for smooth asphalt for your road bike or rugged paths to ancient forts, Naarad helps you generate heritage-specific routes tailored to your spiritual frequency and interests."
        primaryCtaText="Plan your route now"
        imageSide="left"
        visual={
          <div className="relative w-full aspect-[4/3] bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 shadow-2xl transform rotate-1">
             {/* Map Background */}
             <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/77.2090,28.6139,12,0/800x600?access_token=pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGZ4In0')] bg-cover opacity-40 grayscale" style={{backgroundImage: 'radial-gradient(circle at center, #292524 0%, #0c0a09 100%)'}}>
               {/* Simplified Vector Map Grid (Mock) */}
               <svg className="w-full h-full opacity-20" viewBox="0 0 100 100">
                 <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                   <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                 </pattern>
                 <rect width="100" height="100" fill="url(#grid)" />
               </svg>
             </div>
             
             {/* The Route Path */}
             <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(234,88,12,0.8)]" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M 20 80 Q 40 70 50 50 T 80 20" fill="none" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="4 2" className="animate-pulse" />
               
               {/* Waypoints */}
               <circle cx="20" cy="80" r="2" fill="#0c0a09" stroke="#ea580c" strokeWidth="1" />
               <circle cx="50" cy="50" r="2" fill="#0c0a09" stroke="#ea580c" strokeWidth="1" />
               <circle cx="80" cy="20" r="2" fill="#ea580c" className="animate-ping" />
             </svg>

             {/* UI Overlay Card - Route Stats */}
             <div className="absolute top-4 right-4 bg-stone-950/90 backdrop-blur border border-stone-800 p-3 rounded-lg w-32 shadow-xl">
               <div className="flex items-center gap-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-saffron-500" />
                 <span className="text-[10px] uppercase text-stone-400 tracking-wider">Hampi Ruins</span>
               </div>
               <div className="h-8 flex items-end gap-1">
                 <div className="w-1 bg-stone-800 h-3 rounded-t" />
                 <div className="w-1 bg-stone-800 h-5 rounded-t" />
                 <div className="w-1 bg-saffron-600 h-8 rounded-t" />
                 <div className="w-1 bg-stone-800 h-4 rounded-t" />
                 <div className="w-1 bg-stone-800 h-2 rounded-t" />
               </div>
               <div className="mt-2 text-xs font-mono text-saffron-400">
                 +450 XP
               </div>
             </div>
          </div>
        }
      />

      {/* FEATURE 2: Find the right inspiration */}
      <FeatureSection
        title="Find the right saga"
        description="From epic Ramayana trails to hidden colonial ghost towns. Filter by Dynasty, Era, or Architectural style, and set off with context."
        primaryCtaText="Find inspiration now"
        imageSide="right"
        visual={
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
            {/* Background Photos Collage */}
            <div className="absolute inset-0 grid grid-cols-2 gap-2 transform -rotate-2 scale-95 opacity-50 blur-[1px]">
               <img src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=400&h=300&fit=crop" className="rounded-lg object-cover w-full h-full grayscale" />
               <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=300&fit=crop" className="rounded-lg object-cover w-full h-full grayscale" />
               <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=400&h=300&fit=crop" className="rounded-lg object-cover w-full h-full grayscale" />
               <img src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=400&h=300&fit=crop" className="rounded-lg object-cover w-full h-full grayscale" />
            </div>

            {/* Floating Filters Card */}
            <div className="relative bg-stone-950 border border-saffron-900/50 rounded-xl p-6 shadow-2xl w-3/4 max-w-xs transform rotate-2">
               <h4 className="font-serif text-saffron-500 mb-4 text-sm tracking-widest uppercase border-b border-stone-800 pb-2">Filter By Saga</h4>
               
               <div className="space-y-3">
                 <div className="flex justify-between items-center text-sm text-stone-300">
                   <span>Mauryan Empire</span>
                   <div className="w-4 h-4 border border-stone-600 rounded bg-stone-800" />
                 </div>
                 <div className="flex justify-between items-center text-sm text-stone-300">
                   <span>Chola Dynasty</span>
                   <div className="w-4 h-4 border border-saffron-500 rounded bg-saffron-600 flex items-center justify-center text-black text-xs">✓</div>
                 </div>
                 <div className="flex justify-between items-center text-sm text-stone-300">
                   <span>Mughal Era</span>
                   <div className="w-4 h-4 border border-stone-600 rounded bg-stone-800" />
                 </div>
               </div>

               <div className="mt-6">
                 <div className="flex justify-between text-xs text-stone-500 mb-1 font-mono">
                   <span>DURATION</span>
                   <span>2 - 5 Days</span>
                 </div>
                 <div className="h-1 bg-stone-800 rounded-full overflow-hidden">
                   <div className="h-full bg-saffron-600 w-2/3 ml-4" />
                 </div>
               </div>
            </div>
          </div>
        }
      />

      {/* FEATURE 3: More effective navigation */}
      <FeatureSection
        title="Navigate the forgotten paths"
        description="Even inside deep caves or dense jungles, Naarad keeps you on course. With offline vector maps and AR markers, focus on the history, not the signal."
        primaryCtaText="Download offline map"
        imageSide="left"
        visual={
          <div className="relative w-full aspect-[4/3] bg-stone-900 rounded-2xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&q=80" alt="Navigation" className="w-full h-full object-cover grayscale-[50%]" />
             
             {/* AR Overlay UI */}
             <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
             
             {/* Turn Indicator Floating Card */}
             <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-stone-100 text-stone-950 px-6 py-3 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center gap-4 w-64 transform -rotate-1 border-4 border-white">
                <div className="text-3xl font-bold">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-stone-500">Then</div>
                  <div className="text-xl font-serif font-bold">Enter Sanctum</div>
                </div>
             </div>

             {/* Distance Marker */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-saffron-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg animate-bounce">
               50m
               <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-saffron-600" />
             </div>
          </div>
        }
      />

      {/* FEATURE 4: Share your adventure */}
      <FeatureSection
        title="Share your conquest"
        description="Inspire millions of culture seekers with photos and discoveries. Mint your off-trail finds as NFTs and climb the leaderboard of the Cultural Guild."
        primaryCtaText="Join the Guild"
        imageSide="right"
        visual={
          <div className="relative w-full aspect-[4/3]">
             {/* Grid of Polaroid-style images */}
             <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-4 p-4">
                <div className="bg-white p-2 pb-6 shadow-xl transform -rotate-3 transition-transform hover:rotate-0 z-10">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="bg-white p-2 pb-6 shadow-xl transform rotate-2 transition-transform hover:rotate-0 translate-y-4">
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="bg-white p-2 pb-6 shadow-xl transform rotate-6 transition-transform hover:rotate-0 -translate-y-2">
                   <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300" className="w-full h-full object-cover grayscale" />
                </div>
                
                {/* NFT/Badge Overlay */}
                <div className="relative flex items-center justify-center bg-stone-900 border border-saffron-600/50 rounded-xl shadow-2xl transform -rotate-2">
                   <div className="text-center">
                     <div className="text-4xl mb-2">🏆</div>
                     <div className="text-xs font-serif text-saffron-500 uppercase">Guild Leader</div>
                     <div className="text-xs font-mono text-stone-500">Level 42</div>
                   </div>
                </div>
             </div>
          </div>
        }
      />

      {/* Browse Places Carousel */}
      <section className="py-20 bg-stone-950 border-t border-stone-800 relative overflow-hidden" id="places">
        <div className="max-w-7xl mx-auto px-4 mb-8 flex justify-between items-end">
          <div>
             <h2 className="font-serif text-3xl text-white mb-2">Browse Places</h2>
             <p className="text-stone-400">Find your next sanctuary by terrain.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-stone-800 text-stone-400 hover:text-saffron-500 hover:border-saffron-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="p-2 rounded-full border border-stone-800 text-stone-400 hover:text-saffron-500 hover:border-saffron-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
        
        {/* Infinite Scrolling Strip */}
        <div className="flex overflow-hidden relative w-full mask-linear-fade">
          <div className="flex gap-4 animate-scroll-fast hover:paused w-max px-4">
            {/* Double the list to create seamless loop */}
            {[...PLACE_CATEGORIES, ...PLACE_CATEGORIES].map((category, index) => (
              <CategoryCard key={`${category.id}-${index}`} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Discover New Routes (Large Cards) */}
      <section className="py-20 bg-stone-950 border-t border-stone-800 relative">
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <h2 className="font-serif text-3xl text-white mb-2">Discover new routes</h2>
        </div>
        <div className="flex overflow-x-auto gap-4 px-4 pb-8 mask-linear-fade no-scrollbar">
           {ROUTE_CATEGORIES.map(category => (
             <RouteCard key={category.id} category={category} />
           ))}
        </div>
      </section>

      {/* Collections / Quests Slider */}
      <section className="py-20 overflow-hidden relative bg-stone-950" id="quests">
        <div className="max-w-7xl mx-auto px-4 mb-8 flex justify-between items-end">
          <div>
            <h2 className="font-serif text-3xl text-white mb-2">Discover Curated Collections</h2>
            <p className="text-stone-400">Handcrafted trails tested by historians and locals.</p>
          </div>
        </div>

        {/* Infinite Scrolling Container */}
        <div className="flex overflow-hidden relative w-full mask-linear-fade">
          <div className="flex gap-6 animate-scroll-slow hover:paused w-max px-4">
             {/* Double the list to create seamless loop */}
            {[...DEMO_QUESTS, ...DEMO_QUESTS].map((quest, index) => (
              <QuestCard key={`${quest.id}-${index}`} quest={quest} />
            ))}
          </div>
        </div>
      </section>

      {/* AI Oracle Section */}
      <section
        className="py-20 bg-stone-950 relative border-t border-stone-900"
        id="oracle"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-saffron-900/10 via-stone-950 to-stone-950 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-4 inline-block">
            <span className="animate-pulse text-saffron-500 text-sm font-bold tracking-widest uppercase border border-saffron-500/30 px-3 py-1 rounded-full">
              Beta Feature
            </span>
          </div>
          <OracleChat />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-saffron-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-950 font-bold mb-6">
            Know a new world. Know it with NAARAD.
          </h2>
          <p className="text-stone-900/80 text-xl font-medium mb-10 max-w-2xl mx-auto">
            Join 50M+ outdoor explorers. Download the offline maps today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-stone-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 2.528l.265.234c2.445 2.215 4.312 5.374 4.312 8.766 0 5.48-5.351 9.943-10.371 9.943-5.065 0-9.729-4.838-9.729-9.967 0-3.376 1.848-6.505 4.275-8.718l.263-.232.895 1.054-.234.209c-2.122 1.934-3.738 4.67-3.738 7.632 0 4.516 4.148 8.766 8.529 8.766 4.417 0 8.871-4.101 8.871-8.745 0-2.977-1.637-5.733-3.784-7.683l-.234-.207.896-1.054zM12.009 5.86c-2.733 0-4.965 2.228-4.965 4.978 0 2.75 2.232 4.978 4.965 4.978 2.734 0 4.966-2.228 4.966-4.978 0-2.75-2.232-4.978-4.966-4.978zm0 1.436c1.956 0 3.542 1.587 3.542 3.542 0 1.956-1.586 3.542-3.542 3.542-1.955 0-3.541-1.586-3.541-3.542 0-1.955 1.586-3.542 3.541-3.542z" />
              </svg>
              Google Play
            </button>
            <button className="bg-stone-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.897 12.015c.01 3.511 2.949 4.706 2.976 4.717-.024.082-.46 1.594-1.518 3.16-1.309 1.928-2.67 1.85-3.666 1.874-.972.025-2.583-.615-3.992-.615-1.428 0-2.887.6-3.805.626-.957.025-2.607.054-4.156-2.23-2.129-3.111-2.222-7.59-2.222-7.66 0-.056.028-4.576 3.992-4.665.987-.022 2.37.564 3.327.564.938 0 2.593-.68 4.25-.568 1.585.107 2.825.86 3.528 1.956-.098.058-2.102 1.25-2.096 3.49.006 2.775 2.408 3.738 2.441 3.751zM13.253 2.544c.833-1.042 1.393-2.482 1.24-3.744-1.203.05-2.657.834-3.52 1.868-.77.904-1.442 2.368-1.26 3.725 1.341.107 2.712-.806 3.54-1.849z" />
              </svg>
              App Store
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 py-12 px-4 border-t border-stone-900 text-stone-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6">
            <a href="#" className="hover:text-saffron-500">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-saffron-500">
              Terms of Service
            </a>
            <a href="#" className="hover:text-saffron-500">
              Imprint
            </a>
          </div>
          <div>© 2024 NAARAD Cultural Curiosity Compass</div>
        </div>
      </footer>
    </div>
  );
}

export default App;