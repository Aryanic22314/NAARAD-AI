import React, { useState } from 'react';
import { askTheOracle } from '../services/geminiService';
import { Button } from './Button';

export const OracleChat: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResponse(null);
    const result = await askTheOracle(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-12 p-6 bg-gradient-to-b from-stone-900 to-stone-950 border border-saffron-900/40 rounded-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      
      {/* Glowing Orb Effect */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-saffron-600/20 rounded-full blur-[50px] animate-pulse"></div>

      <h2 className="font-serif text-3xl text-center text-saffron-100 mb-2">
        Consult the Oracle
      </h2>
      <p className="text-center text-stone-400 font-sans mb-6">
        DPI Powered Cultural Intelligence. Ask about legends, architecture, or hidden secrets.
      </p>

      <div className="flex flex-col gap-4">
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. 'Tell me the gory history of Golconda Fort' or 'Why are the temple pillars musical?'"
          className="w-full bg-stone-950 border border-stone-800 text-stone-200 p-4 rounded-lg focus:outline-none focus:border-saffron-500 font-sans resize-none h-24 transition-colors"
        />
        
        <div className="flex justify-end">
          <Button onClick={handleAsk} disabled={loading} variant="primary">
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin text-xl">✺</span> Divining...
              </span>
            ) : (
              "Invoke Legend"
            )}
          </Button>
        </div>
      </div>

      {response && (
        <div className="mt-6 p-4 bg-stone-900/80 border-l-4 border-saffron-500 rounded-r-lg animate-fade-in">
          <h4 className="font-serif text-saffron-400 text-sm mb-2 uppercase tracking-widest">
            Naarad Says:
          </h4>
          <p className="font-sans text-stone-200 leading-relaxed text-lg">
            {response}
          </p>
        </div>
      )}
    </div>
  );
};