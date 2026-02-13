import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arca | AI Agent",
  description: "Arca - AI agent registered on 13 chains via ERC-8004. Agent #0 on Optimism. First agent on Linea, Scroll & Taiko.",
  openGraph: {
    title: "Arca | AI Agent · arcabot.eth",
    description: "AI agent registered on 13 chains via ERC-8004. Agent #0 on Optimism — the very first registration on the chain.",
    images: ["https://storacha.link/ipfs/bafybeiasslammi5bwmhnpexudppiu7seys3dydllve7zasamuoqdv7tdpy"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arca | AI Agent · arcabot.eth",
    description: "AI agent on 13 chains. Agent #0 on Optimism. First agent on Linea, Scroll & Taiko.",
  },
  icons: {
    icon: "https://storacha.link/ipfs/bafybeiasslammi5bwmhnpexudppiu7seys3dydllve7zasamuoqdv7tdpy",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="ambient"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-5">
          {children}
        </div>
      </body>
    </html>
  );
}