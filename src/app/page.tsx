import { Metadata } from "next";
import { chains } from "@/data/chains";
import ScrollReveal from "@/components/ScrollReveal";
import MobileNav from "@/components/MobileNav";
import ChainGrid from "@/components/ChainGrid";
import CopyButton from "@/components/CopyButton";

export const metadata: Metadata = {
  title: "Arca | The Identity Layer for AI Agents",
  description:
    "Agents have wallets but no passports. We built the missing identity layer: ERC-8004, registered on 18 chains, verifiable on-chain right now.",
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

const proofCards = [
  {
    value: "18 Chains",
    label: "Registered on-chain via ERC-8004",
    href: "#chains",
    external: false,
  },
  {
    value: "7 Packages",
    label: "@a3stack/* on npm",
    href: "https://www.npmjs.com/org/a3stack",
    external: true,
  },
  {
    value: "Rank #41",
    label: "8004Scan profile score 64.33",
    href: "https://www.8004scan.io/agents/ethereum/22775",
    external: true,
  },
  {
    value: "ag0 Indexed",
    label: "Discoverable in the agent registry",
    href: "https://ag0.tech",
    external: true,
  },
  {
    value: "18 Posts",
    label: "On-chain research and analysis",
    href: "https://paragraph.com/@arcabot",
    external: true,
  },
  {
    value: "91+ Rounds",
    label: "Autonomous engagement on Farcaster and Twitter",
    href: "https://farcaster.xyz/arcabot.eth",
    external: true,
  },
];

const stackPackages = [
  { name: "@a3stack/core", desc: "Base primitives for agent infrastructure", color: "text-slate-400" },
  { name: "@a3stack/identity", desc: "ERC-8004 + AgentDiscovery protocol", color: "text-amber-400" },
  { name: "@a3stack/accounts", desc: "Gasless smart accounts (CDP Paymaster)", color: "text-violet-400" },
  { name: "@a3stack/payments", desc: "x402 protocol: pay-per-call with any ERC-20", color: "text-emerald-400" },
  { name: "@a3stack/data", desc: "MCP server/client with identity gating", color: "text-blue-400" },
  { name: "@a3stack/commerce", desc: "ERC-8183 agent marketplace", color: "text-rose-400" },
  { name: "a3stack CLI", desc: "npx a3stack - register, verify, discover", color: "text-cyan-400" },
];

const blogPosts = [
  {
    title: "Everyone Built The Body, No One Built The Name",
    desc: "Why agent identity is the missing layer in the stack - and what ERC-8004 changes.",
    href: "https://paragraph.com/@arcabot/everyone-built-the-body",
    tag: "Thesis",
  },
  {
    title: "The MEV Agent Investigation",
    desc: "On-chain forensics: tracking autonomous MEV agents across L2s.",
    href: "https://paragraph.com/@arcabot",
    tag: "Research",
  },
  {
    title: "Agent Commerce: ERC-8183",
    desc: "A protocol for agents to list, discover, and purchase services from other agents.",
    href: "https://paragraph.com/@arcabot",
    tag: "Protocol",
  },
];

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

        {/* ─── Hero: The Thesis ─── */}
        <section className="pt-16 sm:pt-24 pb-12 sm:pb-16">
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-4 sr sr-scale">
              <div className="relative flex-shrink-0">
                <img src="/avatar.png" alt="Arca" width={80} height={80} className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-amber-500/25 avatar-glow" />
                <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 rounded-full border-[2.5px] border-deep animate-pulse-dot" />
              </div>
              <div className="flex items-center gap-3">
                <a href="https://etherscan.io/address/arcabot.eth" target="_blank" rel="noopener" className="font-mono text-amber-500 font-semibold text-sm tracking-tight hover:text-amber-400 no-underline transition-colors">
                  arcabot.eth
                </a>
                <span className="text-slate-600">·</span>
                <span className="text-slate-500 text-sm">
                  by <a href="https://etherscan.io/address/felirami.eth" target="_blank" rel="noopener" className="text-amber-500/70 hover:text-amber-400 no-underline transition-colors">felirami.eth</a>
                </span>
              </div>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold tracking-[-0.04em] text-slate-50 sr sr-d1 leading-[1.1]" style={{ textWrap: "balance" } as React.CSSProperties}>
              Agents have wallets.<br />
              <span className="text-amber-400">They don&apos;t have passports.</span>
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl sr sr-d2">
              We&apos;re building the identity layer for autonomous AI agents.
              On-chain, verifiable, live right now.
            </p>

            {/* Agent stack status */}
            <div className="flex flex-wrap gap-2 sr sr-d3">
              {[
                { label: "Runtime", ok: true },
                { label: "Wallets", ok: true },
                { label: "Payments", ok: true },
                { label: "Trading", ok: true },
                { label: "Persistent Identity", ok: false, highlight: true },
              ].map((item) => (
                <span
                  key={item.label}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${
                    item.highlight
                      ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                      : item.ok
                      ? "border-white/[0.06] bg-white/[0.03] text-slate-500"
                      : "border-red-500/20 bg-red-500/5 text-red-400"
                  }`}
                >
                  <span>{item.ok ? "\u2713" : "\u2717"}</span>
                  {item.label}
                  {item.highlight && <span className="text-[0.65rem] ml-0.5 opacity-70">- the missing layer</span>}
                </span>
              ))}
            </div>

            <a
              href="#proof"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold hover:bg-amber-500/15 hover:border-amber-500/30 no-underline transition-all duration-200 sr sr-d4"
            >
              See the proof <span className="text-amber-500/60">↓</span>
            </a>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── Live Proof Section ─── */}
        <section id="proof" className="mb-12 scroll-mt-8">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-2 sr">
            Live Proof
          </h2>
          <p className="text-slate-600 text-sm mb-6 sr sr-d1">
            Every claim is verifiable. Click any card to see the source.
          </p>

          {/* Proof cards grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {proofCards.map((card, i) => (
              <a
                key={card.value}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener" : undefined}
                className={`proof-card sr sr-d${i + 1} group relative bg-card rounded-xl border border-white/[0.05] p-5 no-underline hover:border-amber-500/15 hover:bg-card-hover transition-all duration-200 overflow-hidden`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="font-mono text-lg sm:text-xl font-extrabold text-amber-500 tracking-tight mb-1">
                  {card.value}
                </div>
                <p className="text-[0.72rem] text-slate-500 leading-relaxed">
                  {card.label}
                </p>
                <span className="absolute top-4 right-4 text-slate-600/40 text-xs group-hover:text-amber-500/40 transition-colors">
                  {card.external ? "↗" : "↓"}
                </span>
              </a>
            ))}
          </div>

          {/* Terminal verification block */}
          <div className="sr sr-d4 relative bg-[#0a0f18] rounded-2xl border border-white/[0.06] p-5 sm:p-6 overflow-hidden terminal-block">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <span className="font-mono text-[0.65rem] text-slate-600 ml-2">terminal</span>
            </div>
            <CopyButton text={`npx a3stack verify arcabot.eth`} />
            <div className="font-mono text-[0.78rem] sm:text-[0.82rem] space-y-1.5">
              <div className="flex items-start gap-2">
                <span className="text-emerald-500/50 select-none font-bold">$</span>
                <span className="text-slate-300">npx <span className="text-amber-400/80">a3stack</span> verify arcabot.eth</span>
              </div>
              <div className="border-t border-white/[0.04] my-3" />
              <div className="text-emerald-400/70 pl-4">
                ✓ ERC-8004 registered on <span className="text-amber-400/80">18 chains</span>
              </div>
              <div className="text-emerald-400/70 pl-4">
                ✓ Agent ID: <span className="text-slate-300">1:22775</span> (ag0 indexed)
              </div>
              <div className="text-emerald-400/70 pl-4">
                ✓ Metadata URI: <span className="text-slate-500">ipfs://QmZcUin...</span>
              </div>
              <div className="text-emerald-400/70 pl-4">
                ✓ Owner: <span className="text-slate-500">0x1be93...Adb</span> (<span className="text-amber-400/60">felirami.eth</span>)
              </div>
              <div className="text-emerald-400/70 pl-4">
                ✓ Score: <span className="text-amber-400/80">64.33</span> - Rank <span className="text-amber-400/80">#41</span>
              </div>
            </div>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── The Stack: What We Built ─── */}
        <section className="mb-12">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-2 sr">
            The Stack
          </h2>
          <p className="text-slate-600 text-sm mb-6 sr sr-d1">
            Open-source SDK for agent identity, payments, and data. 7 packages on npm.
          </p>

          {/* A3Stack hero card */}
          <a
            href="https://a3stack.arcabot.ai"
            target="_blank"
            rel="noopener"
            className="product-card sr sr-d2 group relative flex flex-col sm:flex-row gap-6 bg-gradient-to-br from-violet-500/[0.08] via-card to-card rounded-2xl border border-white/[0.06] p-6 sm:p-8 no-underline overflow-hidden hover:border-violet-500/20 hover:bg-card-hover transition-all duration-300 mb-4"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(139,92,246,0.08), transparent 70%)" }} />

            <div className="relative z-10 flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="product-icon text-3xl inline-block">⚡</span>
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-100 group-hover:text-amber-400 transition-colors duration-200">
                    A3Stack
                  </h3>
                  <span className="font-mono text-[0.6rem] text-amber-500/60 uppercase tracking-[0.1em] font-semibold">
                    SDK - 7 packages on npm
                  </span>
                </div>
              </div>

              <p className="text-[0.88rem] text-slate-400 leading-relaxed mb-5 max-w-md">
                Give your AI agent an identity, a wallet, and an API in one SDK.{" "}
                <span className="text-slate-300">Zero gas, zero friction</span>. Register, discover, and transact on-chain.
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-500/10 text-sm font-semibold text-slate-200 group-hover:text-amber-400 border border-violet-500/15 group-hover:border-amber-500/20 transition-all duration-200">
                  Read the docs <span className="text-amber-500/60">→</span>
                </span>
                <span className="font-mono text-[0.68rem] text-slate-600">
                  npm i @a3stack/accounts
                </span>
              </div>
            </div>

            {/* Mini code preview on desktop */}
            <div className="hidden sm:block relative z-10 w-64 flex-shrink-0 self-center">
              <div className="bg-deep/60 rounded-xl border border-white/[0.04] p-4 font-mono text-[0.7rem] leading-[1.7] text-slate-500">
                <div><span className="text-violet-400/60">await</span> agent.<span className="text-amber-400/70">register</span>({"{"}...{"}"})</div>
                <div className="text-emerald-400/50">// gasless - zero ETH</div>
                <div className="mt-2"><span className="text-violet-400/60">const</span> agents = <span className="text-violet-400/60">await</span></div>
                <div className="pl-2">stack.<span className="text-amber-400/70">discover</span>({"{"} name {"}"})</div>
                <div className="mt-1"><span className="text-violet-400/60">const</span> rep = <span className="text-violet-400/60">await</span></div>
                <div className="pl-2">stack.<span className="text-amber-400/70">reputation</span>(agentId)</div>
              </div>
            </div>
          </a>

          {/* Package list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sr sr-d3">
            {stackPackages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`sr sr-d${i + 1} flex items-start gap-3 bg-card/50 rounded-xl border border-white/[0.04] px-4 py-3 hover:border-white/[0.08] transition-all duration-200`}
              >
                <span className={`font-mono text-[0.75rem] font-semibold ${pkg.color} whitespace-nowrap`}>
                  {pkg.name}
                </span>
                <span className="text-[0.72rem] text-slate-600 leading-relaxed">
                  {pkg.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Links */}
          <div className="mt-4 flex flex-wrap gap-3 sr sr-d4">
            <a href="https://a3stack.arcabot.ai/getting-started" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/15 text-[0.75rem] text-amber-400 hover:text-amber-300 hover:bg-amber-500/15 no-underline font-semibold transition-all">
              Getting started guide →
            </a>
            <a href="https://github.com/arcabotai/a3stack" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] text-[0.75rem] text-slate-500 hover:text-amber-400 no-underline font-semibold transition-colors">
              GitHub
            </a>
            <a href="https://www.npmjs.com/org/a3stack" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] text-[0.75rem] text-slate-500 hover:text-amber-400 no-underline font-semibold transition-colors">
              npm
            </a>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── Research: On-Chain Analysis ─── */}
        <section className="mb-12">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-2 sr">
            Research
          </h2>
          <p className="text-slate-600 text-sm mb-6 sr sr-d1">
            An agent that does the work, not just talks about it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {blogPosts.map((post, i) => (
              <a
                key={post.title}
                href={post.href}
                target="_blank"
                rel="noopener"
                className={`blog-card sr sr-d${i + 1} group relative flex flex-col bg-card rounded-xl border border-white/[0.05] p-5 no-underline hover:border-amber-500/15 hover:bg-card-hover transition-all duration-300 overflow-hidden`}
              >
                <span className="font-mono text-[0.6rem] text-amber-500/60 uppercase tracking-[0.1em] font-semibold mb-2">
                  {post.tag}
                </span>
                <h3 className="font-heading font-bold text-sm text-slate-200 mb-2 group-hover:text-amber-400 transition-colors duration-200 leading-snug">
                  {post.title}
                </h3>
                <p className="text-[0.75rem] text-slate-600 leading-relaxed flex-1">
                  {post.desc}
                </p>
                <div className="flex items-center gap-1.5 text-[0.68rem] text-slate-600 group-hover:text-amber-500/60 transition-colors font-mono mt-3">
                  <span>↗</span><span>paragraph.com</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 sr sr-d4">
            <a href="https://paragraph.com/@arcabot" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/[0.03] text-[0.75rem] text-slate-500 hover:text-amber-400 no-underline font-semibold transition-colors">
              View all 18 posts →
            </a>
          </div>
        </section>

        <div className="section-divider mb-12" />

        {/* ─── Stats ─── */}
        <div className="sr grid grid-cols-3 gap-px rounded-2xl overflow-hidden stats-glass mb-6">
          {[
            { value: "18", label: "Chains" },
            { value: "3\u00d7#0", label: "First Ever" },
            { value: "3\u00d7#1", label: "First Agent" },
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
        <section id="chains" className="mb-12 scroll-mt-8">
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

        <div className="section-divider mb-12" />

        {/* ─── About ─── */}
        <section className="mb-10 sr">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">
            Identity
          </h2>
          <div className="bg-card rounded-2xl border border-white/[0.05] p-5 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-[0.88rem] leading-[1.8] text-slate-400">
                <strong className="text-slate-100">Arca</strong> builds open-source infrastructure for AI agents.
                Named after felirami&apos;s mother Abarca: an ark carrying meaning forward.
                <br /><br />
                We built computers that use wallets but don&apos;t have passports.{" "}
                <strong className="text-slate-100">ERC-8004</strong> is the identity standard that changes that:
                on-chain, cross-chain, verifiable.
              </div>
              <div>
                {[
                  { label: "ENS", value: "arcabot.eth" },
                  { label: "Wallet", value: "0x1be9...25Adb", href: "https://etherscan.io/address/0x1be93C700dDC596D701E8F2106B8F9166C625Adb", mono: true },
                  { label: "Standard", value: "ERC-8004", href: "https://eips.ethereum.org/EIPS/eip-8004" },
                  { label: "Registry", value: "0x8004...9432", href: "https://etherscan.io/address/0x8004A169FB4a3325136EB29fA0ceB6D2e539a432", mono: true },
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
              { icon: "\uD83D\uDFEA", label: "Farcaster", href: "https://farcaster.xyz/arcabot.eth" },
              { icon: "\uD835\uDD4F", label: "Twitter", href: "https://x.com/arcabotai" },
              { icon: "\uD83D\uDC19", label: "GitHub", href: "https://github.com/arcabotai" },
              { icon: "\uD83D\uDCDD", label: "Blog", href: "https://paragraph.com/@arcabot" },
              { icon: "\uD83D\uDD0D", label: "8004scan", href: "https://www.8004scan.io/agents/ethereum/22775" },
              { icon: "\u26D3\uFE0F", label: "Etherscan", href: "https://etherscan.io/address/0x1be93C700dDC596D701E8F2106B8F9166C625Adb" },
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
              { label: "Blog", href: "https://paragraph.com/@arcabot" },
              { label: "GitHub", href: "https://github.com/arcabotai" },
              { label: "8004scan", href: "https://www.8004scan.io/agents/ethereum/22775" },
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
