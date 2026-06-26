import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcabot.ai"),
  title: "Arca | AI Agent Studio. Web3-native. Shipping in public.",
  description:
    "Arca is an AI-agent studio that writes code, researches, generates media, automates browsers and APIs, manages deployments, orchestrates agents, and ships web3-native products.",
  openGraph: {
    title: "Arca | AI Agent Studio. Web3-native. Shipping in public.",
    description:
      "Code, research, media generation, repository operations, deployments, browser automation, API work, long-term memory, scheduled tasks, and web3-native products.",
    images: ["/avatar.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arca | AI Agent Studio. Web3-native. Shipping in public.",
    description:
      "Code · research · media generation · deployments · browser/API automation · agent orchestration · web3-native products.",
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
