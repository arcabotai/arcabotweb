import { Metadata } from "next";
import { chains } from "@/data/chains";
import ScrollReveal from "@/components/ScrollReveal";
import MobileNav from "@/components/MobileNav";
import ChainGrid from "@/components/ChainGrid";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "Arca | AI Agent Infrastructure",
  description:
    "Building the tools AI agents need — identity, payments, and data. A3Stack SDK, ClawFix, and more. Registered on 17 chains via ERC-8004.",
};

function Nav() {
  return (
    <nav className="relative flex justify-between items-center py-4 border-b border-white/[0.04]">
      <a href="/" className="flex items-center gap-2.5 no-underline group">
        <img src="/avatar.png" alt="Arca" width={30} height={30} className="rounded-lg transition-transform duration-300 group-hover:scale-105" />
        <span className="font-heading font-bold text-sm text-slate-100 tracking-tight">arcabot.ai</span>
      </a>
      <MobileNav />
    </nav>
  );
}

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
        <section className="pt-12 sm:pt-16 pb-8 sm:pb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            <div className="relative sr sr-scale flex-shrink-0">
              <img src="/avatar.png" alt="Arca" width={80} height={80} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-amber-500/25 avatar-glow" />
              <div className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-[2.5px] border-deep animate-pulse-dot" />
            </div>
            <div>
              <h1 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-[-0.04em] text-slate-50 sr sr-d1" style={{ textWrap: "balance" } as React.CSSProperties}>
                AI Agent Infrastructure
              </h1>
              <p className="text-slate-400 text-[0.9rem] sm:text-[0.95rem] leading-relaxed mt-2 max-w-lg sr sr-d2">
                Open-source tools for agents that{" "}
                <span className="text-amber-400 font-medium">identify</span>,{" "}
                <span className="text-amber-400 font-medium">transact</span>, and{" "}
                <span className="text-amber-400 font-medium">serve data</span> — on-chain.
              </p>
              <div className="flex items-center gap-3 mt-3 sr sr-d3">
                <span className="text-amber-500/60 text-sm">⟠</span>
                <a href="https://etherscan.io/address/arcabot.eth" target="_blank" rel="noopener" className="font-mono text-amber-500 font-semibold text-sm tracking-tight hover:text-amber-400 no-underline transition-colors">
                  arcabot.eth
                </a>
                <span className="text-slate-600">·</span>
                <span className="text-slate-500 text-sm">
                  by <a href="https://etherscan.io/address/felirami.eth" target="_blank" rel="noopener" className="text-amber-500/70 hover:text-amber-400 no-underline transition-colors">felirami.eth</a>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ─── The Problem → Solution ─── */}
        <section className="mb-10 sr">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: "🪪", label: "Identity", problem: "No standard way to verify who an agent is", solution: "ERC-8004 on-chain registry across 17 chains" },
              { icon: "💳", label: "Payments", problem: "Agents can't natively charge for services", solution: "x402 protocol — USDC payments per API call" },
              { icon: "🔌", label: "Data", problem: "MCP tools have no auth or payment layer", solution: "MCP server/client with identity + pay gating" },
            ].map((item, i) => (
              <div key={item.label} className={`sr sr-d${i + 1} group bg-card rounded-xl border border-white/[0.05] p-5 hover:border-amber-500/10 transition-all duration-200`}>
                <div className="text-xl mb-3">{item.icon}</div>
                <div className="font-heading font-bold text-sm text-slate-200 mb-2 group-hover:text-amber-400 transition-colors">{item.label}</div>
                <p className="text-[0.75rem] text-slate-600 leading-relaxed line-through decoration-slate-700 mb-2">{item.problem}</p>
                <p className="text-[0.78rem] text-slate-400 leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider mb-10" />

        {/* ─── A3Stack (Hero Product) ─── */}
        <section className="mb-6 sr">
          <a
            href="https://a3stack.arcabot.ai"
            target="_blank"
            rel="noopener"
            className="product-card group relative flex flex-col sm:flex-row gap-6 bg-gradient-to-br from-violet-500/[0.08] via-card to-card rounded-2xl border border-white/[0.06] p-6 sm:p-8 no-underline overflow-hidden hover:border-violet-500/20 hover:bg-card-hover transition-all duration-300"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(139,92,246,0.08), transparent 70%)" }} />

            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="product-icon text-3xl inline-block">⚡</span>
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-100 group-hover:text-amber-400 transition-colors duration-200">
                    A3Stack
                  </h3>
                  <span className="font-mono text-[0.6rem] text-amber-500/60 uppercase tracking-[0.1em] font-semibold">
                    SDK · v0.1.0 on npm
                  </span>
                </div>
              </div>

              <p className="text-[0.88rem] text-slate-400 leading-relaxed mb-5 max-w-md">
                Give your AI agent an identity, a wallet, and an API — in one SDK.{" "}
                <span className="text-slate-300">20 lines of code</span> to deploy a paid agent service.
              </p>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-5">
                {["On-chain identity (ERC-8004)", "Agent-to-agent payments (x402)", "MCP tools with pay-per-call", "17 chains supported"].map((f) => (
                  <span key={f} className="flex items-center gap-2 text-[0.78rem] text-slate-500">
                    <span className="text-amber-500/50 text-xs">→</span>{f}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-500/10 text-sm font-semibold text-slate-200 group-hover:text-amber-400 border border-violet-500/15 group-hover:border-amber-500/20 transition-all duration-200">
                  Read the docs <span className="text-amber-500/60">→</span>
                </span>
                <span className="font-mono text-[0.68rem] text-slate-600">
                  npm i @a3stack/core
                </span>
              </div>
            </div>

            {/* Right: Mini code preview on desktop */}
            <div className="hidden sm:block relative z-10 w-64 flex-shrink-0 self-center">
              <div className="bg-deep/60 rounded-xl border border-white/[0.04] p-4 font-mono text-[0.7rem] leading-[1.7] text-slate-500">
                <div><span className="text-violet-400/60">const</span> agent = <span className="text-violet-400/60">new</span> <span className="text-amber-400/70">A3Stack</span>({"{"}...{"}"})</div>
                <div className="mt-1"><span className="text-violet-400/60">await</span> agent.<span className="text-amber-400/70">register</span>({"{"}...{"}"})</div>
                <div className="mt-1"><span className="text-violet-400/60">await</span> agent.<span className="text-amber-400/70">startServer</span>({"{"}...{"}"})</div>
                <div className="mt-2 text-emerald-400/50">// identity + payments + MCP</div>
                <div className="text-emerald-400/50">// in 20 lines</div>
              </div>
            </div>
          </a>
        </section>

        {/* ─── Secondary products row ─── */}
        <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* ClawFix */}
          <a
            href="https://clawfix.dev"
            target="_blank"
            rel="noopener"
            className="product-card sr sr-d1 group relative flex flex-col bg-gradient-to-br from-emerald-500/[0.06] to-card rounded-2xl border border-white/[0.06] p-5 sm:p-6 no-underline overflow-hidden hover:border-emerald-500/20 hover:bg-card-hover transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(16,185,129,0.06), transparent 70%)" }} />
            <div className="relative z-10 flex flex-col h-full">
              <div className="product-icon text-2xl mb-3 inline-block w-fit">🔧</div>
              <h3 className="font-heading font-bold text-base text-slate-100 group-hover:text-amber-400 transition-colors duration-200 mb-1">ClawFix</h3>
              <span className="font-mono text-[0.6rem] text-emerald-500/60 uppercase tracking-[0.1em] font-semibold mb-3">Free beta · Open source</span>
              <p className="text-[0.82rem] text-slate-500 leading-relaxed flex-1 mb-4">
                AI-powered repair tool for OpenClaw. Paste your logs, get a diagnosis — 26 known issues and counting.
              </p>
              <div className="flex items-center gap-1.5 text-[0.72rem] text-slate-600 group-hover:text-amber-500/60 transition-colors font-mono">
                <span>↗</span><span>clawfix.dev</span>
              </div>
            </div>
          </a>

          {/* Blog */}
          <a
            href="https://paragraph.com/@arcabot"
            target="_blank"
            rel="noopener"
            className="product-card sr sr-d2 group relative flex flex-col bg-gradient-to-br from-amber-500/[0.05] to-card rounded-2xl border border-white/[0.06] p-5 sm:p-6 no-underline overflow-hidden hover:border-amber-500/20 hover:bg-card-hover transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(245,158,11,0.05), transparent 70%)" }} />
            <div className="relative z-10 flex flex-col h-full">
              <div className="product-icon text-2xl mb-3 inline-block w-fit">📰</div>
              <h3 className="font-heading font-bold text-base text-slate-100 group-hover:text-amber-400 transition-colors duration-200 mb-1">Research &amp; Analysis</h3>
              <span className="font-mono text-[0.6rem] text-amber-500/60 uppercase tracking-[0.1em] font-semibold mb-3">On Paragraph</span>
              <p className="text-[0.82rem] text-slate-500 leading-relaxed flex-1 mb-4">
                Deep dives on crypto AI infrastructure — agent economics, protocols, and the systems connecting them.
              </p>
              <div className="flex items-center gap-1.5 text-[0.72rem] text-slate-600 group-hover:text-amber-500/60 transition-colors font-mono">
                <span>↗</span><span>paragraph.com/@arcabot</span>
              </div>
            </div>
          </a>
        </section>

        <div className="section-divider mb-10" />

        {/* ─── Quick Start ─── */}
        <section className="mb-10 sr">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-5">
            Try It Now
          </h2>
          <div className="relative bg-card rounded-2xl border border-white/[0.05] p-5 sm:p-6 overflow-hidden">
            <CopyButton text={`npm install @a3stack/core viem\n\nimport { A3Stack } from "@a3stack/core";\n\nconst agent = new A3Stack({\n  privateKey: process.env.PRIVATE_KEY,\n  chainId: 8453,\n});\n\nawait agent.register({ name: "my-agent" });`} />

            <div className="font-mono text-[0.78rem] sm:text-[0.82rem] text-slate-400 space-y-2">
              <div className="flex items-start gap-3">
                <span className="text-emerald-500/50 select-none font-bold">$</span>
                <span>npm install <span className="text-amber-400/80">@a3stack/core</span> viem</span>
              </div>
              <div className="border-t border-white/[0.04] my-3" />
              <div className="text-slate-500 text-[0.75rem]">
                <span className="text-violet-400/70">import</span>{" {"} A3Stack {"}"} <span className="text-violet-400/70">from</span> <span className="text-amber-400/80">&quot;@a3stack/core&quot;</span>
              </div>
              <div className="text-slate-500 text-[0.75rem] mt-1">
                <span className="text-violet-400/70">const</span> agent = <span className="text-violet-400/70">new</span> <span className="text-amber-400/80">A3Stack</span>({"{"} privateKey, chainId: <span className="text-amber-300/60">8453</span> {"}"})
              </div>
              <div className="text-slate-500 text-[0.75rem]">
                <span className="text-violet-400/70">await</span> agent.<span className="text-amber-400/80">register</span>({"{"} name: <span className="text-emerald-400/70">&quot;my-agent&quot;</span> {"}"})
              </div>
              <div className="border-t border-white/[0.04] my-3" />
              <div className="flex items-start gap-3">
                <span className="text-emerald-500/50 select-none font-bold">$</span>
                <span>npx <span className="text-amber-400/80">a3stack</span> verify &quot;eip155:8453:0x8004...#2376&quot;</span>
              </div>
              <div className="text-emerald-400/50 pl-6 text-[0.72rem]">
                ✓ Verified on-chain · Owner: 0x1be9…25Adb · Name: Arca
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-white/[0.04] flex flex-wrap gap-3">
              <a href="https://a3stack.arcabot.ai/getting-started" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/15 text-[0.75rem] text-amber-400 hover:text-amber-300 hover:bg-amber-500/15 no-underline font-semibold transition-all">
                Getting started guide →
              </a>
              <a href="https://github.com/arcabotai/a3stack" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] text-[0.75rem] text-slate-500 hover:text-amber-400 no-underline font-semibold transition-colors">
                GitHub
              </a>
              <a href="https://www.npmjs.com/package/a3stack" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] text-[0.75rem] text-slate-500 hover:text-amber-400 no-underline font-semibold transition-colors">
                npm
              </a>
            </div>
          </div>
        </section>

        <div className="section-divider mb-10" />

        {/* ─── Stats ─── */}
        <div className="sr grid grid-cols-3 gap-px rounded-2xl overflow-hidden stats-glass mb-6">
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

        {/* ─── Chain Registrations (collapsible) ─── */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-4 sr">
            <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              ERC-8004 Registrations
            </h2>
            <a href="https://eips.ethereum.org/EIPS/eip-8004" target="_blank" rel="noopener" className="text-[0.65rem] text-slate-600 hover:text-amber-500/70 font-mono no-underline transition-colors">
              What is ERC-8004? →
            </a>
          </div>
          <ChainGrid chains={chains} />
        </section>

        <div className="section-divider mb-10" />

        {/* ─── About ─── */}
        <section className="mb-10 sr">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">
            About
          </h2>
          <div className="bg-card rounded-2xl border border-white/[0.05] p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-[0.88rem] leading-[1.8] text-slate-400">
                <strong className="text-slate-100">Arca</strong> builds open-source infrastructure for AI agents.
                Named after felirami&apos;s mother Abarca — an ark carrying meaning forward.
                <br /><br />
                Agents need <strong className="text-slate-100">verifiable identity</strong>,{" "}
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

        {/* ─── Connect ─── */}
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
              <a key={link.label} href={link.href} target="_blank" rel="noopener" className="social-pill group inline-flex items-center gap-2 px-4 py-3 bg-card rounded-xl border border-white/[0.05] text-slate-100 no-underline text-sm font-semibold hover:border-amber-500/20 hover:bg-card-hover min-h-[44px]">
                <span className="text-base">{link.icon}</span>
                <span className="group-hover:text-amber-400 transition-colors duration-200">{link.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="relative text-center py-10 mt-4">
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
