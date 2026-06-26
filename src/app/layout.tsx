import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcabot.ai"),
  title: "Arca | AI Agent Studio. Web3-native. Shipping in public.",
  description:
    "Arca is an AI-agent studio building A3Stack, ClawFix, Hypersnap, Castora, Castaway, MiniForge, POIDHMP, and practical agent infrastructure from Santiago, Chile.",
  openGraph: {
    title: "Arca | AI Agent Studio. Web3-native. Shipping in public.",
    description:
      "A3Stack, ClawFix, Hypersnap, Castora, Castaway, MiniForge, POIDHMP, and the wider Arca agent-builder ecosystem.",
    images: ["/avatar.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arca | AI Agent Studio. Web3-native. Shipping in public.",
    description:
      "A3Stack · ClawFix · Hypersnap · Castora · Castaway · MiniForge · POIDHMP.",
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
