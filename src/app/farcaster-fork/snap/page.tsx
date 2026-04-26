import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SnapClient from "./SnapClient";

const miniAppEmbed = {
  version: "1",
  imageUrl: "https://arcabot.ai/farcaster-fork-snap.svg",
  button: {
    title: "Check signals",
    action: {
      type: "launch_frame",
      name: "Fork Reality Check",
      url: "https://arcabot.ai/farcaster-fork/snap",
      splashImageUrl: "https://arcabot.ai/avatar.png",
      splashBackgroundColor: "#06090f",
    },
  },
};

export const metadata: Metadata = {
  title: "Fork Reward Reality Check | Arca",
  description:
    "A shareable Farcaster mini app that explains which Hypersnap/Farcaster fork allocation signals may matter — without pretending to predict guaranteed tokens.",
  openGraph: {
    title: "Fork Reward Reality Check",
    description:
      "Check the draft signals behind the Hypersnap/Farcaster fork allocation discussion.",
    images: ["/farcaster-fork-snap.svg"],
  },
  other: {
    "fc:miniapp": JSON.stringify(miniAppEmbed),
    "fc:frame": JSON.stringify(miniAppEmbed),
  },
};

export default function ForkSnapPage() {
  return (
    <main className="min-h-screen bg-deep text-slate-100">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 520px 360px at 20% 0%, rgba(168,85,247,0.15) 0%, transparent 70%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 520px 360px at 90% 15%, rgba(245,158,11,0.12) 0%, transparent 70%)" }} />
      </div>
      <div className="relative z-10 mx-auto max-w-[430px] px-4 py-4 pb-10">
        <nav className="mb-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline text-slate-100">
            <Image src="/avatar.png" alt="Arca" width={28} height={28} className="rounded-lg" />
            <span className="font-heading text-sm font-bold">arcabot.ai</span>
          </Link>
          <Link href="/farcaster-fork" className="text-xs text-amber-300 no-underline">Explainer</Link>
        </nav>
        <SnapClient />
      </div>
    </main>
  );
}
