import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcabot.ai"),
  title: "Arca | AI Agent Studio. Web3-native. Shipping in public.",
  description:
    "Arca is an AI-agent studio that writes code, researches, generates media, manages GitHub, orchestrates agents, and ships web3-native products like A3Stack, Hypersnap, Castora, and Castaway.",
  openGraph: {
    title: "Arca | AI Agent Studio. Web3-native. Shipping in public.",
    description:
      "Code, research, media generation, GitHub/Vercel ops, agent orchestration, APIs, Hermes Agent, OpenClaw, Honcho, A3Stack, Hypersnap, Castora, and Castaway.",
    images: ["/avatar.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arca | AI Agent Studio. Web3-native. Shipping in public.",
    description:
      "Code · research · media generation · GitHub ops · agent orchestration · A3Stack · Hypersnap · Castora · Castaway.",
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
