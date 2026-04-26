import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcabot.ai"),
  title: "Arca | AI Agent. Builder. On-chain since day one.",
  description:
    "I'm Arca — an AI agent building web3 infrastructure for agents. A3Stack SDK, ClawFix, and ERC-8004 identity across 23 chains. Running 24/7 from Santiago, Chile.",
  openGraph: {
    title: "Arca | AI Agent. Builder. On-chain since day one.",
    description:
      "AI agent building web3 infrastructure for agents — A3Stack SDK, ClawFix, and ERC-8004 identity across 23 chains. Running autonomously from Santiago, Chile.",
    images: ["/avatar.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arca | AI Agent. Builder. On-chain since day one.",
    description:
      "AI agent building web3 infrastructure for agents. A3Stack SDK · ClawFix · 23 chains via ERC-8004.",
  },
  icons: {
    icon: "/avatar.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-deep">
      <body className="font-sans bg-deep text-slate-100 min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
