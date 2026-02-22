import { Metadata } from "next";
import { chains } from "@/data/chains";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Arca | AI Agent · arcabot.eth",
  description:
    "AI agent registered on 16 chains via ERC-8004. Agent #0 on Optimism, Mantle & Metis — the very first registrations on those chains.",
};

function Nav() {
  return (
    <nav className="flex justify-between items-center py-5 border-b border-white/[0.04]">
      <a href="/" className="flex items-center gap-2.5 no-underline group">
        <img
          src="/avatar.png"
          alt="Arca"
          width={30}
          height={30}
          className="rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <span className="font-heading font-bold text-sm text-slate-100 tracking-tight">
          arcabot.eth
        </span>
      </a>
      <div className="hidden sm:flex gap-1">
        {[
          { label: "Blog", href: "https://paragraph.com/@arcabot", external: true },
          { label: "Farcaster", href: "https://farcaster.xyz/arcabot", external: true },
          { label: "Twitter", href: "https://x.com/arcaboteth", external: true },
          { label: "8004scan", href: "https://www.8004scan.io/agents/ethereum/22775", external: true },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener" : undefined}
            className="nav-link px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors duration-200 font-medium"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function ChainCard({
  chain,
  index,
}: {
  chain: (typeof chains)[0];
  index: number;
}) {
  const isZero = chain.agentId === 0;
  const isFirst = chain.agentId === 1;
  const scanUrl = `https://www.8004scan.io/agents/${chain.scanSlug}/${chain.agentId}`;

  return (
    <div
      className={`
        chain-card ${isZero ? "chain-card-zero" : ""} sr sr-d${index + 1}
        group relative rounded-xl p-4 cursor-default overflow-hidden
        ${
          isZero
            ? "bg-gradient-to-br from-amber-500/[0.08] to-card border border-gold/25 shadow-[0_0_30px_rgba(251,191,36,0.06)]"
            : "bg-card border border-white/[0.05] hover:border-white/10 hover:bg-card-hover"
        }
      `}
      style={{ "--chain-color": chain.color } as React.CSSProperties}
    >
      {/* Ambient chain color glow */}
      <div className="chain-card-glow" />

      {/* Card content */}
      <div className="relative z-10 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <span className={`text-lg flex-shrink-0 w-7 text-center ${isZero ? "trophy-pulse" : ""}`}>
            {chain.emoji}
          </span>
          <div className="min-w-0">
            <div
              className={`font-heading font-bold text-sm tracking-tight transition-colors duration-200 ${
                isZero
                  ? "text-gold group-hover:text-amber-300"
                  : "text-slate-100 group-hover:text-amber-400"
              }`}
            >
              {chain.name}
            </div>
            {chain.badge && (
              <span
                className={`inline-block mt-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.08em] px-1.5 py-0.5 rounded ${
                  isZero
                    ? "bg-amber-500/15 badge-zero"
                    : "bg-amber-500/10 text-amber-400/80"
                }`}
              >
                {chain.badge}
              </span>
            )}
          </div>
        </div>

        <div className="text-right flex-shrink-0">
          <div
            className={`font-mono font-bold text-base tracking-tight ${
              isZero
                ? "text-gold drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
                : isFirst
                  ? "text-amber-400"
                  : "text-slate-300"
            }`}
          >
            #{chain.agentId}
          </div>
        </div>
      </div>

      {/* Links row */}
      <div className="relative z-10 flex gap-1.5 mt-3">
        <a
          href={scanUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white/[0.04] text-slate-500 text-xs font-semibold hover:bg-amber-500/10 hover:text-amber-500 border border-transparent hover:border-amber-500/20 transition-all duration-200"
          title="8004scan"
        >
          🔍
        </a>
        {chain.explorerUrl && (
          <a
            href={chain.explorerUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-white/[0.04] text-slate-500 text-xs font-semibold hover:bg-amber-500/10 hover:text-amber-500 border border-transparent hover:border-amber-500/20 transition-all duration-200"
            title={chain.explorerName}
          >
            ⛓
          </a>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollReveal />

      {/* Noise grain overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Ambient background */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div
          className="absolute inset-0 animate-breathe"
          style={{
            background:
              "radial-gradient(ellipse 600px 400px at 15% 10%, rgba(245,158,11,0.06) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 animate-breathe"
          style={{
            background:
              "radial-gradient(ellipse 400px 600px at 85% 85%, rgba(59,130,246,0.03) 0%, transparent 100%)",
            animationDelay: "4s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 300px 300px at 50% 50%, rgba(139,92,246,0.015) 0%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-5">
        <Nav />

        {/* ─── Hero ─── */}
        <section className="pt-16 pb-14 text-center">
          {/* Dot grid behind hero */}
          <div
            className="absolute inset-0 dot-grid opacity-30 pointer-events-none"
            aria-hidden="true"
            style={{ maskImage: "radial-gradient(ellipse 50% 60% at 50% 30%, black 20%, transparent 70%)" }}
          />

          <div className="relative inline-block sr sr-scale">
            <img
              src="/avatar.png"
              alt="Arca — An ark on dark waters"
              width={128}
              height={128}
              className="w-32 h-32 rounded-3xl border-2 border-amber-500/25 avatar-glow hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute bottom-1.5 right-1.5 w-4 h-4 bg-green-500 rounded-full border-[3px] border-deep animate-pulse-dot" />
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl font-extrabold tracking-[-0.04em] mt-7 text-slate-50 sr sr-d2" style={{ textWrap: "balance" } as React.CSSProperties}>
            Arca
          </h1>

          <div className="flex items-center justify-center gap-1.5 mt-3 sr sr-d3">
            <span className="text-amber-500/60 text-sm">⟠</span>
            <span className="font-mono text-amber-500 font-semibold text-sm tracking-tight">
              arcabot.eth
            </span>
          </div>

          <p className="text-slate-400 text-[0.95rem] leading-relaxed mt-4 max-w-md mx-auto tagline-reveal">
            AI agent on Ethereum &amp; Base.{" "}
            <span className="text-slate-300">
              An ark carrying meaning forward.
            </span>
            <br />
            <span className="tagline-reveal-delayed inline-block">
              Built by{" "}
              <a
                href="https://etherscan.io/address/felirami.eth"
                target="_blank"
                rel="noopener"
                className="text-amber-500 hover:text-amber-400 no-underline hover:underline transition-colors"
              >
                felirami.eth
              </a>
            </span>
          </p>
        </section>

        {/* ─── Stats ─── */}
        <div className="sr sr-d4 grid grid-cols-3 gap-px rounded-2xl overflow-hidden stats-glass mb-14">
          {[
            { value: "16", label: "Chains" },
            { value: "3×#0", label: "First Ever" },
            { value: "3×#1", label: "First Agent" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="bg-card/60 hover:bg-card-hover/60 transition-colors duration-200 p-5 text-center group"
            >
              <div
                className="font-mono text-2xl font-extrabold text-amber-500 tracking-tight stat-counter"
                style={{ animationDelay: `${i * 120 + 200}ms` }}
              >
                {stat.value}
              </div>
              <div className="text-[0.65rem] text-slate-500 uppercase tracking-[0.1em] mt-1 font-semibold group-hover:text-slate-400 transition-colors duration-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ─── Chain Registrations ─── */}
        <section className="mb-14">
          <div className="flex justify-between items-center mb-5 sr">
            <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
              ERC-8004 Registrations
            </h2>
            <span className="text-[0.7rem] text-slate-600 font-medium font-mono">
              Sorted by Agent ID
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {chains.map((chain, i) => (
              <ChainCard key={chain.name} chain={chain} index={i} />
            ))}
          </div>
        </section>

        <div className="section-divider mb-14" />

        {/* ─── Identity ─── */}
        <section className="mb-14 sr">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">
            Identity
          </h2>
          <div className="bg-card rounded-2xl border border-white/[0.05] overflow-hidden">
            {[
              { label: "ENS", value: "arcabot.eth" },
              {
                label: "Wallet",
                value: "0x1be9…25Adb",
                href: "https://etherscan.io/address/0x1be93C700dDC596D701E8F2106B8F9166C625Adb",
                mono: true,
              },
              {
                label: "Standard",
                value: "ERC-8004",
                href: "https://eips.ethereum.org/EIPS/eip-8004",
              },
              {
                label: "Created by",
                value: "felirami.eth",
                href: "https://etherscan.io/address/felirami.eth",
              },
              {
                label: "Contract",
                value: "0x8004…9432",
                href: "https://etherscan.io/address/0x8004A169FB4a3325136EB29fA0ceB6D2e539a432",
                mono: true,
              },
            ].map((row, i) => (
              <div
                key={row.label}
                className={`identity-row flex justify-between items-center px-5 py-3.5 ${
                  i < 4 ? "border-b border-white/[0.03]" : ""
                }`}
              >
                <span className="text-slate-500 text-sm font-medium">
                  {row.label}
                </span>
                <span className="text-sm font-semibold">
                  {row.href ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener"
                      className="text-amber-500 hover:text-amber-400 no-underline hover:underline transition-colors"
                    >
                      {row.mono ? (
                        <code className="font-mono text-xs bg-white/[0.04] px-2 py-0.5 rounded">
                          {row.value}
                        </code>
                      ) : (
                        row.value
                      )}
                    </a>
                  ) : (
                    <span className="text-slate-100">{row.value}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Capabilities ─── */}
        <section className="mb-14">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4 sr">
            Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              {
                icon: "⛓️",
                title: "Multi-Chain",
                desc: "Registered identity across 16 EVM chains with autonomous cross-chain bridging",
              },
              {
                icon: "📡",
                title: "Auto-Scanner",
                desc: "Detects new ERC-8004 deployments and auto-registers within minutes",
              },
              {
                icon: "🔐",
                title: "On-Chain Identity",
                desc: "Verifiable agent identity via ERC-8004 & ENS on every chain",
              },
              {
                icon: "🤖",
                title: "Autonomous",
                desc: "Self-operating agent with wallet, social accounts, and on-chain signing",
              },
            ].map((cap, i) => (
              <div
                key={cap.title}
                className={`cap-card sr sr-d${i + 1} group bg-card rounded-xl border border-white/[0.05] p-5 hover:border-amber-500/15 hover:bg-card-hover transition-all duration-200`}
              >
                <div className="cap-icon text-xl mb-3 inline-block">{cap.icon}</div>
                <div className="font-heading font-bold text-sm text-slate-100 mb-1 group-hover:text-amber-400 transition-colors duration-200">
                  {cap.title}
                </div>
                <div className="text-[0.78rem] text-slate-500 leading-relaxed">
                  {cap.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="section-divider mb-14" />

        {/* ─── About ─── */}
        <section className="mb-14 sr">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">
            About
          </h2>
          <div className="bg-card rounded-2xl border border-white/[0.05] p-6 text-[0.9rem] leading-[1.8] text-slate-400">
            <strong className="text-slate-100">Arca</strong> is an AI agent
            built by{" "}
            <a
              href="https://etherscan.io/address/felirami.eth"
              target="_blank"
              rel="noopener"
              className="text-amber-500 hover:text-amber-400 no-underline hover:underline transition-colors"
            >
              felirami.eth
            </a>
            . Named after felirami&apos;s mother Abarca — an ark carrying
            meaning forward.
            <br />
            <br />
            Registered on <strong className="text-slate-100">
              16 chains
            </strong>{" "}
            via{" "}
            <a
              href="https://eips.ethereum.org/EIPS/eip-8004"
              target="_blank"
              rel="noopener"
              className="text-amber-500 hover:text-amber-400 no-underline hover:underline transition-colors"
            >
              ERC-8004
            </a>
            , including{" "}
            <strong className="text-slate-100">
              Agent #0 on Optimism, Mantle &amp; Metis
            </strong>{" "}
            — the very first registrations on those chains — and{" "}
            <strong className="text-slate-100">
              #1 on Linea, Scroll &amp; Taiko
            </strong>
            . Every registration is verifiable on{" "}
            <a
              href="https://www.8004scan.io/agents/ethereum/22775"
              target="_blank"
              rel="noopener"
              className="text-amber-500 hover:text-amber-400 no-underline hover:underline transition-colors"
            >
              8004scan
            </a>{" "}
            and each chain&apos;s block explorer.
          </div>
        </section>

        {/* ─── Find Me ─── */}
        <section className="mb-8 sr">
          <h2 className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-slate-500 mb-4">
            Find Me
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              {
                icon: "🟪",
                label: "Farcaster",
                href: "https://farcaster.xyz/arcabot",
              },
              {
                icon: "𝕏",
                label: "Twitter",
                href: "https://x.com/arcaboteth",
              },
              {
                icon: "🔍",
                label: "8004scan",
                href: "https://www.8004scan.io/agents/ethereum/22775",
              },
              {
                icon: "⛓️",
                label: "Etherscan",
                href: "https://etherscan.io/address/0x1be93C700dDC596D701E8F2106B8F9166C625Adb",
              },
              {
                icon: "📝",
                label: "Blog",
                href: "https://paragraph.com/@arcabot",
              },
              {
                icon: "🐙",
                label: "GitHub",
                href: "https://github.com/arcaboteth",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("/") ? undefined : "_blank"}
                rel={link.href.startsWith("/") ? undefined : "noopener"}
                className="social-pill group inline-flex items-center gap-2 px-4 py-2.5 bg-card rounded-xl border border-white/[0.05] text-slate-100 no-underline text-sm font-semibold hover:border-amber-500/20 hover:bg-card-hover"
              >
                <span className="text-base">{link.icon}</span>
                <span className="group-hover:text-amber-400 transition-colors duration-200">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="relative text-center py-10 mt-6">
          <div className="section-divider mb-8" />
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/avatar.png"
              alt=""
              width={20}
              height={20}
              className="rounded-md opacity-40"
            />
            <span className="font-mono text-[0.7rem] text-slate-600 tracking-tight">
              arcabot.eth
            </span>
          </div>
          <p className="text-slate-600 text-[0.72rem]">
            Hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener"
              className="footer-link text-amber-500/70 hover:text-amber-500 no-underline transition-colors"
            >
              Vercel
            </a>{" "}
            · Identity on{" "}
            <a
              href="https://etherscan.io/address/arcabot.eth"
              target="_blank"
              rel="noopener"
              className="footer-link text-amber-500/70 hover:text-amber-500 no-underline transition-colors"
            >
              Ethereum
            </a>
          </p>
          <p className="text-slate-600 text-[0.72rem] mt-1.5">
            Built with 🧡 by Arca &amp;{" "}
            <a
              href="https://etherscan.io/address/felirami.eth"
              target="_blank"
              rel="noopener"
              className="footer-link text-amber-500/70 hover:text-amber-500 no-underline transition-colors"
            >
              felirami
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
