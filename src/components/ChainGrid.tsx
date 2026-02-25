'use client';

import { useState } from 'react';

interface Chain {
  name: string;
  agentId: number;
  scanSlug: string;
  color: string;
  emoji: string;
  badge?: string;
  explorerUrl?: string;
  explorerName?: string;
}

function ChainCard({ chain }: { chain: Chain }) {
  const isZero = chain.agentId === 0;
  const isFirst = chain.agentId === 1;
  const scanUrl = `https://www.8004scan.io/agents/${chain.scanSlug}/${chain.agentId}`;

  return (
    <a
      href={scanUrl}
      target="_blank"
      rel="noopener"
      className={`chain-card group relative rounded-xl p-3.5 no-underline overflow-hidden ${
        isZero
          ? "chain-card-zero bg-gradient-to-br from-amber-500/[0.08] to-card border border-gold/25 shadow-[0_0_30px_rgba(251,191,36,0.06)]"
          : "bg-card border border-white/[0.05] hover:border-white/10 hover:bg-card-hover"
      }`}
      style={{ "--chain-color": chain.color } as React.CSSProperties}
    >
      <div className="chain-card-glow" />
      <div className="relative z-10 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className={`text-base flex-shrink-0 ${isZero ? "trophy-pulse" : ""}`}>
            {chain.emoji}
          </span>
          <div className="min-w-0">
            <div className={`font-heading font-bold text-[0.8rem] tracking-tight ${
              isZero ? "text-gold group-hover:text-amber-300" : "text-slate-200 group-hover:text-amber-400"
            } transition-colors duration-200`}>
              {chain.name}
            </div>
            {chain.badge && (
              <span className={`inline-block text-[0.55rem] font-extrabold uppercase tracking-[0.08em] px-1 py-0.5 rounded ${
                isZero ? "bg-amber-500/15 badge-zero" : "bg-amber-500/10 text-amber-400/80"
              }`}>
                {chain.badge}
              </span>
            )}
          </div>
        </div>
        <div className={`font-mono font-bold text-sm tracking-tight ${
          isZero ? "text-gold drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]" : isFirst ? "text-amber-400" : "text-slate-400"
        }`}>
          #{chain.agentId}
        </div>
      </div>
    </a>
  );
}

export default function ChainGrid({ chains }: { chains: Chain[] }) {
  const [expanded, setExpanded] = useState(false);
  const INITIAL_SHOW = 6;
  const visible = expanded ? chains : chains.slice(0, INITIAL_SHOW);
  const remaining = chains.length - INITIAL_SHOW;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {visible.map((chain) => (
          <ChainCard key={chain.name} chain={chain} />
        ))}
      </div>
      {!expanded && remaining > 0 && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-3 w-full py-3 rounded-xl bg-card border border-white/[0.05] hover:border-amber-500/15 hover:bg-card-hover text-slate-500 hover:text-amber-400 text-[0.8rem] font-medium transition-all duration-200 cursor-pointer"
        >
          Show {remaining} more chains ↓
        </button>
      )}
      {expanded && chains.length > INITIAL_SHOW && (
        <button
          onClick={() => setExpanded(false)}
          className="mt-3 w-full py-3 rounded-xl bg-card border border-white/[0.05] hover:border-amber-500/15 hover:bg-card-hover text-slate-500 hover:text-amber-400 text-[0.8rem] font-medium transition-all duration-200 cursor-pointer"
        >
          Show less ↑
        </button>
      )}
    </>
  );
}
