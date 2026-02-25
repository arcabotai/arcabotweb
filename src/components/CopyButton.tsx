'use client';

import { useState } from 'react';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* fallback: do nothing */ }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 px-2.5 py-1.5 rounded-md bg-white/[0.04] hover:bg-amber-500/10 border border-transparent hover:border-amber-500/20 text-[0.65rem] font-mono text-slate-500 hover:text-amber-400 transition-all duration-200 cursor-pointer"
      title="Copy to clipboard"
    >
      {copied ? "✓ copied" : "copy"}
    </button>
  );
}
