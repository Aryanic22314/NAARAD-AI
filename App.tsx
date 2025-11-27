import React from "react";
import { DEMO_COMPASS_DATA, DEMO_QUESTS, VALUE_PROPS } from "./constants";
import { CuriosityCompass } from "./components/CuriosityCompass";
import { QuestCard } from "./components/QuestCard";
import { Button } from "./components/Button";
import { OracleChat } from "./components/OracleChat";

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
              The Digital OS for Cultural Tourism
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] drop-shadow-2xl">
              Become a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron-400 to-gold-500">
                Cultural Legend
              </span>
            </h1>
            <p className="text-lg md:text-xl text-stone-300 max-w-lg leading-relaxed">
              Collect 20 Unique NFTs in One Trip. NAARAD preloads your entire cultural journey,
              unlocking cinematic stories, AR moments, and friend tracking even when the signal
              disappears.
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

      {/* Collections / Quests Slider */}
      <section className="py-20 overflow-hidden relative" id="quests">
        <div className="max-w-7xl mx-auto px-4 mb-8 flex justify-between items-end">
          <div>
            <h2 className="font-serif text-3xl text-white mb-2">Discover Curated Collections</h2>
            <p className="text-stone-400">Handcrafted trails tested by historians and locals.</p>
          </div>
          <div className="hidden md:flex gap-2">
            <button className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-white hover:bg-stone-800">
              ←
            </button>
            <button className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-white hover:bg-stone-800">
              →
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-6 px-4 pb-12 snap-x snap-mandatory scrollbar-hide max-w-[100vw]">
          <div className="w-[max(0px,calc(50%-42rem))] shrink-0"></div>
          {DEMO_QUESTS.map((quest) => (
            <QuestCard key={quest.id} quest={quest} />
          ))}
          <div className="min-w-[50px]"></div>
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
            Know a new world. Know it with Naarad.
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
          <div>© 2024 NAARAD Cultural OS</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
