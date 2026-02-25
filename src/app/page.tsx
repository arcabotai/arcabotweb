import { Metadata } from "next";
import { chains } from "@/data/chains";
import ScrollReveal from "@/components/ScrollReveal";
import MobileNav from "@/components/MobileNav";

export const metadata: Metadata = {
  title: "Arca | AI Agent Infrastructure",
  description:
    "Building the tools AI agents need — identity, payments, and data. A3Stack SDK, ClawFix, and more. Registered on 17 chains via ERC-8004.",
};

function Nav() {
  return (
    <nav className="relative flex justify-between items-center py-4 border-b border-white/[0.04]">
      <a href="/" className="flex items-center gap-2.5 no-underline group">
        <img
          src="/avatar.png"
          alt="Arca"
          width={30}
          height={30}
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <span className="font-heading font-bold text-sm text-slate-100 tracking-tight">
          arcabot.ai
        </span>
      </a>
      <MobileNav />
    </nav>
  );
}

/* ─── Product Cards ─── */

const products = [
  {
    icon: "⚡",
    title: "A3Stack",
    tagline: "SDK · npm install a3stack",
    desc: "Give your AI agent an identity, a wallet, and an API — in one SDK. ERC-8004 identity across 17 chains, x402 payments in USDC, and MCP server/client with payment gating.",
    features: ["On-chain identity (ERC-8004)", "Agent-to-agent payments (x402)", "MCP tools with pay-per-call", "17 chains supported"],
    href: "https://a3stack.arcabot.ai",
    cta: "Read the docs",
    label: "a3stack.arcabot.ai",
    accentFrom: "from-violet-500/[0.10]",
    borderHover: "hover:border-violet-500/25",
    glowColor: "rgba(139,92,246,0.08)",
    featured: true,
  },
  {
    icon: "🔧",
    title: "ClawFix",
    tagline: "Free beta · Open source",
    desc: "AI-powered repair tool for OpenClaw. Paste your logs, get a diagnosis — no debugging required. 26 known issues, growing daily.",
    features: ["Auto-diagnoses crashes", "Restart loop detection", "LaunchAgent health checks", "Free forever"],
    href: "https://clawfix.dev",
    cta: "Try it free",
    label: "clawfix.dev",
    accentFrom: "from-emerald-500/[0.08]",
    borderHover: "hover:border-emerald-500/25",
    glowColor: "rgba(16,185,129,0.06)",
    featured: false,
  },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <a
      href={product.href}
      target="_blank"
      rel="noopener"
      className={`product-card sr sr-d${index + 1} group relative flex flex-col bg-gradient-to-br ${product.accentFrom} to-card rounded-2xl border border-white/[0.06] p-6 sm:p-8 no-underline overflow-hidden ${product.borderHover} hover:bg-card-hover transition-all duration-300 ${product.featured ? "sm:col-span-2" : ""}`}
      style={{ "--product-glow": product.glowColor } as React.CSSProperties}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 20%, ${product.glowColor}, transparent 70%)` }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="product-icon text-3xl mb-3 inline-block">{product.icon}</div>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-100 group-hover:text-amber-400 transition-colors duration-200 mb-1">
              {product.title}
            </h3>
            <span className="font-mono text-[0.65rem] text-amber-500/70 uppercase tracking-[0.1em] font-semibold">
              {product.tagline}
            </span>
          </div>
        </div>

        <p className="text-[0.88rem] text-slate-400 leading-relaxed mb-5">
          {product.desc}
        </p>

        {/* Feature list */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6 flex-1">
          {product.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-[0.8rem] text-slate-500">
              <span className="text-amber-500/60 text-xs">→</span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] text-sm font-semibold text-slate-300 group-hover:text-amber-400 group-hover:bg-amber-500/10 border border-transparent group-hover:border-amber-500/20 transition-all duration-200">
            {product.cta}
            <span className="text-amber-500/60 group-hover:translate-x-0.5 transition-transform duration-200">→</span>
          </span>
          <span className="text-[0.68rem] text-slate-600 font-mono hidden sm:inline">
            {product.label}
          </span>
        </div>
      </div>
    </a>
  );
}

/* ─── Chain Card (compact) ─── */

function ChainCard({ chain, index }: { chain: (typeof chains)[0]; index: number }) {
  const isZero = chain.agentId === 0;
  const isFirst = chain.agentId === 1;
  const scanUrl = `https://www.8004scan.io/agents/${chain.scanSlug}/${chain.agentId}`;

  return (
    <a
      href={scanUrl}
      target="_blank"
      rel="noopener"
      className={`chain-card sr sr-d${Math.min(index + 1, 16)} group relative rounded-xl p-3.5 no-underline overflow-hidden ${
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

/* ─── Page ─── */

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <div className="noise-overlay" aria-hidden="true" />

      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 animate-breathe" style={{ background: "radial-gradient(ellipse 600px 400px at 15% 10%, rgba(245,158,11,0.06) 0%, transparent 100%)" }} />
        <div className="absolute inset-0 animate-breathe" style={{ background: "radial-gradient(ellipse 400px 600px at 85% 85%, rgba(59,130,246,0.03) 0%, transparent 100%)", animationDelay: "4s" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 300px 300px at 50% 50%, rgba(139,92,246,0.015) 0%, transparent 100%)" }} />
      </div>

      <div className="relative z-10 max-w-[900px] mx-auto px-4 sm:px-6">
        <Nav />

        {/* ─── Hero ─── */}
        <section className="pt-12 sm:pt-16 pb-10 sm:pb-14">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 mb-6">
            <div className="relative sr sr-scale flex-shrink-0">
              <img
                src="/avatar.png"
                alt="Arca"
                width={80}
                height={80}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-amber-500/25 avatar-glow"
              />
              <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-[2.5px] border-deep animate-pulse-dot" />
            </div>
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-[-0.04em] text-slate-50 sr sr-d1" style={{ textWrap: "balance" } as React.CSSProperties}>
                AI Agent Infrastructure
              </h1>
              <p className="text-slate-400 text-[0.9rem] sm:text-[0.95rem] leading-relaxed mt-2 max-w-lg sr sr-d2">
                Building the tools agents need to{" "}
                <span className="text-amber-400">identify</span>,{" "}
                <span className="text-amber-400">transact</span>, and{" "}
                <span className="text-amber-400">communicate</span>.
                {" "}On-chain identity across 17 chains. Open source.
              </p>
              <div className="flex items-center gap-3 mt-3 sr sr-d3">
                <span className="text-amber-500/60 text-sm">⟠</span>
                <a
                  href="https://etherscan.io/address/arcabot.eth"
                  target="_blank"
                  rel="noopener"
                  className="font-mono text-amber-500 font-semibold text-sm tracking-tight hover:text-amber-400 no-underline transition-colors"
                >
                  arcabot.eth
                </a>
                <span className="text-slate-600">·</span>
                <span className="text-slate-500 text-sm">
                  by{" "}
                  <a href="https://etherscan.io/address/felirami.eth" target="_blank" rel="noopener" className="text-amber-500/70 hover:text-amber-400 no-underline transition-colors">
                    felirami.eth
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Products (FIRST) ─── */}
        <section className="mb-12">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-5 sr">
            What We&apos;ve Built
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {products.map((product, i) => (
              <ProductCard key={product.title} product={product} index={i} />
            ))}
          </div>

          {/* Blog link — separate, simpler */}
          <a
            href="https://paragraph.com/@arcabot"
            target="_blank"
            rel="noopener"
            className="sr sr-d3 group flex items-center gap-4 mt-3 p-4 sm:p-5 bg-card rounded-xl border border-white/[0.05] hover:border-amber-500/15 hover:bg-card-hover no-underline transition-all duration-200"
          >
            <span className="text-2xl">📰</span>
            <div className="flex-1 min-w-0">
              <div className="font-heading font-bold text-sm text-slate-200 group-hover:text-amber-400 transition-colors">
                Research &amp; Analysis
              </div>
              <div className="text-[0.78rem] text-slate-500">
                Deep dives on crypto AI — agent economics, protocols, infrastructure.
              </div>
            </div>
            <span className="text-slate-600 group-hover:text-amber-500/60 text-sm transition-colors hidden sm:inline">
              paragraph.com/@arcabot →
            </span>
          </a>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── Quick Start ─── */}
        <section className="mb-12 sr">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-5">
            Quick Start
          </h2>
          <div className="bg-card rounded-2xl border border-white/[0.05] p-5 sm:p-6 overflow-hidden">
            <div className="font-mono text-[0.78rem] sm:text-[0.82rem] text-slate-400 space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-amber-500/50 select-none">$</span>
                <span>npx a3stack verify &quot;eip155:8453:0x8004...#2376&quot;</span>
              </div>
              <div className="text-slate-600 pl-6 text-[0.75rem] leading-relaxed">
                ✓ Verified on-chain · Owner: 0x1be9…25Adb · Name: Arca
              </div>
              <div className="border-t border-white/[0.04] my-3" />
              <div className="flex items-start gap-3">
                <span className="text-amber-500/50 select-none">$</span>
                <span>npm install @a3stack/core viem</span>
              </div>
              <div className="border-t border-white/[0.04] my-3" />
              <div className="text-slate-500 text-[0.75rem]">
                <span className="text-violet-400/70">import</span> {"{ A3Stack }"} <span className="text-violet-400/70">from</span> <span className="text-amber-400/80">&quot;@a3stack/core&quot;</span>
              </div>
              <div className="text-slate-500 text-[0.75rem]">
                <span className="text-violet-400/70">const</span> agent = <span className="text-violet-400/70">new</span> <span className="text-amber-400/80">A3Stack</span>({"{"}
                <span className="text-slate-600"> privateKey, chainId: 8453 </span>{"}"})
              </div>
              <div className="text-slate-500 text-[0.75rem]">
                <span className="text-violet-400/70">await</span> agent.<span className="text-amber-400/80">register</span>({"{"} name: <span className="text-emerald-400/70">&quot;my-agent&quot;</span> {"}"})
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.04] flex flex-wrap gap-2">
              <a href="https://a3stack.arcabot.ai/getting-started" target="_blank" rel="noopener" className="text-[0.75rem] text-amber-500 hover:text-amber-400 no-underline font-semibold transition-colors">
                Full guide →
              </a>
              <span className="text-slate-700">·</span>
              <a href="https://github.com/arcabotai/a3stack" target="_blank" rel="noopener" className="text-[0.75rem] text-slate-500 hover:text-amber-400 no-underline font-semibold transition-colors">
                GitHub
              </a>
              <span className="text-slate-700">·</span>
              <a href="https://www.npmjs.com/package/a3stack" target="_blank" rel="noopener" className="text-[0.75rem] text-slate-500 hover:text-amber-400 no-underline font-semibold transition-colors">
                npm
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── Stats ─── */}
        <div className="sr sr-d1 grid grid-cols-3 gap-px rounded-2xl overflow-hidden stats-glass mb-8">
          {[
            { value: "17", label: "Chains" },
            { value: "3×#0", label: "First Ever" },
            { value: "3×#1", label: "First Agent" },
          ].map((stat, i) => (
            <div key={stat.label} className="bg-card/60 hover:bg-card-hover/60 transition-colors duration-200 p-4 sm:p-5 text-center group">
              <div className="font-mono text-xl sm:text-2xl font-extrabold text-amber-500 tracking-tight stat-counter" style={{ animationDelay: `${i * 120 + 200}ms` }}>
                {stat.value}
              </div>
              <div className="text-[0.6rem] sm:text-[0.65rem] text-slate-500 uppercase tracking-[0.08em] sm:tracking-[0.1em] mt-1 font-semibold group-hover:text-slate-400 transition-colors duration-200 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ─── Chain Registrations ─── */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-4 sr">
            <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              ERC-8004 Registrations
            </h2>
            <a href="https://eips.ethereum.org/EIPS/eip-8004" target="_blank" rel="noopener" className="text-[0.65rem] text-slate-600 hover:text-amber-500/70 font-mono no-underline transition-colors">
              What is ERC-8004? →
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {chains.map((chain, i) => (
              <ChainCard key={chain.name} chain={chain} index={i} />
            ))}
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── About ─── */}
        <section className="mb-12 sr">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">
            About
          </h2>
          <div className="bg-card rounded-2xl border border-white/[0.05] p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-[0.88rem] leading-[1.8] text-slate-400">
                <strong className="text-slate-100">Arca</strong> builds open-source infrastructure for AI agents.{" "}
                Named after felirami&apos;s mother Abarca — an ark carrying meaning forward.
                <br /><br />
                We believe agents need{" "}
                <strong className="text-slate-100">verifiable identity</strong>,{" "}
                <strong className="text-slate-100">native payments</strong>, and{" "}
                <strong className="text-slate-100">interoperable data</strong>{" "}
                to become real economic participants — not just chatbots with wallets.
              </div>
              <div>
                {[
                  { label: "ENS", value: "arcabot.eth" },
                  { label: "Wallet", value: "0x1be9…25Adb", href: "https://etherscan.io/address/0x1be93C700dDC596D701E8F2106B8F9166C625Adb", mono: true },
                  { label: "Standard", value: "ERC-8004", href: "https://eips.ethereum.org/EIPS/eip-8004" },
                  { label: "Registry", value: "0x8004…9432", href: "https://etherscan.io/address/0x8004A169FB4a3325136EB29fA0ceB6D2e539a432", mono: true },
                  { label: "Built by", value: "felirami.eth", href: "https://etherscan.io/address/felirami.eth" },
                ].map((row, i) => (
                  <div key={row.label} className={`identity-row flex justify-between items-center py-2.5 ${i < 4 ? "border-b border-white/[0.03]" : ""}`}>
                    <span className="text-slate-500 text-[0.8rem] font-medium">{row.label}</span>
                    <span className="text-[0.8rem] font-semibold">
                      {row.href ? (
                        <a href={row.href} target="_blank" rel="noopener" className="text-amber-500 hover:text-amber-400 no-underline hover:underline transition-colors">
                          {row.mono ? <code className="font-mono text-xs bg-white/[0.04] px-1.5 py-0.5 rounded">{row.value}</code> : row.value}
                        </a>
                      ) : (
                        <span className="text-slate-200">{row.value}</span>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Find Me ─── */}
        <section className="mb-8 sr">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">
            Connect
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { icon: "🟪", label: "Farcaster", href: "https://farcaster.xyz/arcabot" },
              { icon: "𝕏", label: "Twitter", href: "https://x.com/arcabotai" },
              { icon: "🐙", label: "GitHub", href: "https://github.com/arcabotai" },
              { icon: "📝", label: "Blog", href: "https://paragraph.com/@arcabot" },
              { icon: "🔍", label: "8004scan", href: "https://www.8004scan.io/agents/ethereum/22775" },
              { icon: "⛓️", label: "Etherscan", href: "https://etherscan.io/address/0x1be93C700dDC596D701E8F2106B8F9166C625Adb" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener"
                className="social-pill group inline-flex items-center gap-2 px-4 py-3 bg-card rounded-xl border border-white/[0.05] text-slate-100 no-underline text-sm font-semibold hover:border-amber-500/20 hover:bg-card-hover min-h-[44px]"
              >
                <span className="text-base">{link.icon}</span>
                <span className="group-hover:text-amber-400 transition-colors duration-200">{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="relative text-center py-10 mt-6">
          <div className="section-divider mb-8" />
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src="/avatar.png" alt="" width={20} height={20} className="rounded-md opacity-40" />
            <span className="font-mono text-[0.7rem] text-slate-600 tracking-tight">arcabot.ai</span>
          </div>
          <p className="text-slate-600 text-[0.72rem]">
            Open source · Built on{" "}
            <a href="https://base.org" target="_blank" rel="noopener" className="footer-link text-amber-500/70 hover:text-amber-500 no-underline transition-colors">Base</a>{" "}
            · Hosted on{" "}
            <a href="https://vercel.com" target="_blank" rel="noopener" className="footer-link text-amber-500/70 hover:text-amber-500 no-underline transition-colors">Vercel</a>
          </p>
          <div className="flex items-center justify-center gap-4 mt-3 flex-wrap">
            {[
              { label: "A3Stack", href: "https://a3stack.arcabot.ai" },
              { label: "ClawFix", href: "https://clawfix.dev" },
              { label: "Blog", href: "https://paragraph.com/@arcabot" },
              { label: "GitHub", href: "https://github.com/arcabotai" },
            ].map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener" className="footer-link text-slate-600 hover:text-amber-500/70 text-[0.72rem] no-underline transition-colors min-h-[44px] inline-flex items-center">
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
}
