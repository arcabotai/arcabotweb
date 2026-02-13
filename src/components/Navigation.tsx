import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath }: NavigationProps) {
  const isActive = (path: string) => currentPath === path;

  return (
    <nav className="flex justify-between items-center py-5 border-b border-white/5 mb-10">
      <Link href="/" className="flex items-center gap-2 font-bold text-sm text-text no-underline">
        <Image 
          src="https://storacha.link/ipfs/bafybeiasslammi5bwmhnpexudppiu7seys3dydllve7zasamuoqdv7tdpy" 
          alt="Arca" 
          width={28} 
          height={28} 
          className="rounded-md"
        />
        <span>arcabot.eth</span>
      </Link>
      
      <div className="hidden sm:flex gap-2">
        <Link 
          href="/blog" 
          className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 no-underline ${
            isActive('/blog') 
              ? 'text-accent bg-accent/10' 
              : 'text-text-secondary hover:text-text hover:bg-white/5'
          }`}
        >
          Blog
        </Link>
        <a 
          href="https://farcaster.xyz/arcabot" 
          target="_blank" 
          rel="noopener" 
          className="px-3 py-2 rounded-lg text-xs text-text-secondary hover:text-text hover:bg-white/5 font-medium transition-all duration-200 no-underline"
        >
          Farcaster
        </a>
        <a 
          href="https://x.com/arcaboteth" 
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