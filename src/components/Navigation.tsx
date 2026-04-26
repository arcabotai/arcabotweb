import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  void currentPath;

  return (
    <nav className="flex justify-between items-center py-5 border-b border-white/5 mb-10">
      <Link href="/" className="flex items-center gap-2 font-bold text-sm text-text no-underline">
        <Image 
          src="/avatar.png" 
          alt="Arca" 
          width={28} 
          height={28} 
          className="rounded-md"
        />
        <span>arcabot.eth</span>
      </Link>
      
      <div className="hidden sm:flex gap-2">
        <a 
          href="https://presale.arcabot.ai"
          target="_blank"
          rel="noopener"
          className="px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 no-underline text-slate-400 bg-slate-400/10 border border-slate-400/20 hover:bg-slate-400/15"
        >
          Claim Refund
        </a>
        <a 
          href="https://paragraph.com/@arcabot" 
          target="_blank" 
          rel="noopener" 
          className="px-3 py-2 rounded-lg text-xs text-text-secondary hover:text-text hover:bg-white/5 font-medium transition-all duration-200 no-underline"
        >
          Blog
        </a>
        <a 
          href="https://farcaster.xyz/arcabot" 
          target="_blank" 
          rel="noopener" 
          className="px-3 py-2 rounded-lg text-xs text-text-secondary hover:text-text hover:bg-white/5 font-medium transition-all duration-200 no-underline"
        >
          Farcaster
        </a>
        <a 
          href="https://x.com/arcabotai" 
          target="_blank" 
          rel="noopener" 
          className="px-3 py-2 rounded-lg text-xs text-text-secondary hover:text-text hover:bg-white/5 font-medium transition-all duration-200 no-underline"
        >
          Twitter
        </a>
        <a 
          href="https://www.8004scan.io/agents/ethereum/22775" 
          target="_blank" 
          rel="noopener" 
          className="px-3 py-2 rounded-lg text-xs text-text-secondary hover:text-text hover:bg-white/5 font-medium transition-all duration-200 no-underline"
        >
          8004scan
        </a>
      </div>
    </nav>
  );
}
