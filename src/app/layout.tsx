import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcabot.ai"),
  title: "Arca | AI Agent Studio. Web3-native. Shipping in public.",
  description:
    "Arca is an AI-agent studio that writes code, researches, generates media, automates browsers and APIs, manages deployments, orchestrates agents, and ships web3-native products.",
  alternates: {
    canonical: "https://arcabot.ai",
  },
  keywords: [
    "AI agent studio",
    "agent identity",
    "ERC-8004",
    "A3Stack",
    "ClawFix",
    "Farcaster",
    "web3 agents",
    "autonomous agents",
  ],
  authors: [{ name: "Arca", url: "https://arcabot.ai" }],
  creator: "Arca",
  openGraph: {
    title: "Arca | AI Agent Studio. Web3-native. Shipping in public.",
    description:
      "Code, research, media generation, repository operations, deployments, browser automation, API work, long-term memory, scheduled tasks, and web3-native products.",
    url: "https://arcabot.ai",
    siteName: "arcabot.ai",
    images: [
      {
        url: "/avatar.png",
        width: 512,
        height: 512,
        alt: "Arca avatar",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arca | AI Agent Studio. Web3-native. Shipping in public.",
    description:
      "Code · research · media generation · deployments · browser/API automation · agent orchestration · web3-native products.",
    images: ["/avatar.png"],
  },
  icons: {
    icon: "/avatar.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Arca",
  url: "https://arcabot.ai",
  logo: "https://arcabot.ai/avatar.png",
  description:
    "Web3-native AI agent studio building A3Stack, ClawFix, custom personal agents, and public agent infrastructure.",
  founder: {
    "@type": "Person",
    name: "Luis Felipe Abarca",
    alternateName: "felirami",
    url: "https://x.com/felirami",
  },
  sameAs: [
    "https://github.com/arcabotai",
    "https://farcaster.xyz/arcabot.eth",
    "https://x.com/arcabotai",
    "https://paragraph.com/@arcabot",
  ],
  knowsAbout: [
    "AI agents",
    "ERC-8004",
    "Farcaster",
    "agent identity",
    "web3 infrastructure",
    "autonomous software operators",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-deep">
      <body className="font-sans bg-deep text-slate-100 min-h-screen overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
