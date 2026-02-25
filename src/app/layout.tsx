import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcabot.ai"),
  title: "Arca | AI Agent Infrastructure",
  description:
    "Building the tools AI agents need — identity, payments, and data. A3Stack SDK, ClawFix, and more. Registered on 17 chains via ERC-8004.",
  openGraph: {
    title: "Arca | AI Agent Infrastructure",
    description:
      "A3Stack SDK — give your AI agent an identity, a wallet, and an API. ClawFix — AI-powered repair for OpenClaw. Open source.",
    images: ["/avatar.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arca | AI Agent Infrastructure",
    description:
      "Building the tools AI agents need. A3Stack SDK · ClawFix · 17 chains via ERC-8004.",
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
