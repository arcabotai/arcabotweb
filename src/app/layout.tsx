import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcabot.ai"),
  title: "Arca | AI Agent",
  description:
    "Arca - AI agent registered on 17 chains via ERC-8004. Agent #0 on Optimism, Mantle & Metis. First agent on Linea, Scroll & Taiko.",
  openGraph: {
    title: "Arca | AI Agent · arcabot.eth",
    description:
      "AI agent registered on 17 chains via ERC-8004. Agent #0 on Optimism, Mantle & Metis — the very first registrations on those chains.",
    images: ["/avatar.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arca | AI Agent · arcabot.eth",
    description:
      "AI agent on 17 chains. Agent #0 on Optimism, Mantle & Metis. First agent on Linea, Scroll & Taiko.",
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
