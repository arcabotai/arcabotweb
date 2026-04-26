"use client";

import { useMemo, useState } from "react";

const factors = [
  {
    id: "age",
    label: "My FID has meaningful history and was not recently transferred",
    short: "custody-aware age",
  },
  {
    id: "activity",
    label: "I have real post-transfer Farcaster activity, not just a dormant account",
    short: "active FID",
  },
  {
    id: "engagers",
    label: "Distinct people replied, reacted, or mentioned me over time",
    short: "received engagement",
  },
  {
    id: "mutuality",
    label: "My activity is reciprocal with credible users, not one-way spam",
    short: "reciprocal growth",
  },
  {
    id: "diversity",
    label: "My interactions span more than one tiny cluster or farm-like group",
    short: "graph diversity",
  },
  {
    id: "notAppOnly",
    label: "My contribution is not only historical app/client usage",
    short: "not app-only retro",
  },
];

function verdict(score: number) {
  if (score >= 5) {
    return {
      title: "Higher signal, still not guaranteed",
      tone: "text-emerald-300",
      body: "Your checked factors line up with what the draft seems to reward: credible reciprocal growth, eligibility, and custody-aware history. Final tokens still depend on the real snapshot/root.",
    };
  }
  if (score >= 3) {
    return {
      title: "Mixed signal / depends on graph position",
      tone: "text-amber-300",
      body: "You may have some relevant signals, but the draft is sensitive to trust propagation, mutuality, eligibility filters, and where your activity sits in the graph.",
    };
  }
  return {
    title: "Low or uncertain retro signal",
    tone: "text-rose-300",
    body: "Based on the checked factors, the draft retro calculation may not see much eligible Growth PoW. That does not judge your value; it just reflects what this algorithm measures.",
  };
}

export default function SnapClient() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const score = useMemo(() => factors.filter((f) => checked[f.id]).length, [checked]);
  const result = verdict(score);
  const selected = factors.filter((f) => checked[f.id]).map((f) => f.short);

  const shareText = `My Hypersnap/Farcaster fork reward reality check: ${score}/${factors.length} signals.\n\n${result.title}.\n\nNot official Farcaster/Neynar, not a guaranteed token prediction. Arca explains the fork math here:`;
  const shareUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(shareText)}&embeds[]=${encodeURIComponent("https://arcabot.ai/farcaster-fork")}`;

  return (
    <div className="space-y-5">
      <div className="rounded-3xl border border-white/[0.07] bg-white/[0.04] p-5">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-amber-300 mb-2">Not a claim checker</p>
        <h1 className="font-heading text-3xl font-extrabold tracking-[-0.045em] text-slate-50 leading-tight">
          Fork reward reality check
        </h1>
        <p className="mt-3 text-sm text-slate-400 leading-relaxed">
          This does not predict exact Hypersnap tokens. It shows which draft allocation factors may matter, so people stop treating raw cast count as the whole story.
        </p>
      </div>

      <div className="space-y-2">
        {factors.map((factor) => (
          <label key={factor.id} className="flex gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 text-sm text-slate-300">
            <input
              type="checkbox"
              checked={Boolean(checked[factor.id])}
              onChange={(event) => setChecked((prev) => ({ ...prev, [factor.id]: event.target.checked }))}
              className="mt-1 h-4 w-4 accent-amber-400"
            />
            <span>{factor.label}</span>
          </label>
        ))}
      </div>

      <div className="rounded-3xl border border-amber-400/20 bg-amber-500/[0.07] p-5">
        <p className="font-mono text-xs text-amber-200 mb-2">Score: {score}/{factors.length}</p>
        <h2 className={`font-heading text-xl font-bold ${result.tone}`}>{result.title}</h2>
        <p className="mt-2 text-sm text-slate-300 leading-relaxed">{result.body}</p>
        {selected.length > 0 && (
          <p className="mt-3 text-xs text-slate-500 leading-relaxed">Checked signals: {selected.join(", ")}</p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <a
          href={shareUrl}
          target="_blank"
          rel="noopener"
          className="rounded-2xl bg-amber-400/15 border border-amber-400/25 px-5 py-3 text-center text-sm font-bold text-amber-200 no-underline hover:bg-amber-400/20"
        >
          Share my reality check
        </a>
        <a
          href="/farcaster-fork"
          className="rounded-2xl bg-white/[0.04] border border-white/[0.08] px-5 py-3 text-center text-sm font-semibold text-slate-300 no-underline hover:bg-white/[0.07]"
        >
          Read the full explainer
        </a>
      </div>
    </div>
  );
}
