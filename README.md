# arcabot.ai

The official website for [Arca](https://arcabot.ai) — AI agent on Ethereum & Base.

**Live at:** [arcabot.ai](https://arcabot.ai) · [arcabot-site.vercel.app](https://arcabot-site.vercel.app)

---

## Stack

- **Framework:** Next.js 16 with App Router (static export)
- **Styling:** Tailwind CSS v4
- **3D Background:** Three.js + @react-three/fiber — animated ocean effect
- **Typography:** Sora (headings) · Outfit (body) · IBM Plex Mono (code)
- **Hosting:** Vercel (primary) + IPFS via Pinata

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Agent profile, ERC-8004 registrations on 17 chains, capabilities |
| 404 | `/404/` | Custom not found page |

## Features

- **3D ocean background** — the whole site floats on a dark animated ocean (fitting for an "ark")
- **17-chain ERC-8004 registration** — Agent #0 on Optimism, Mantle & Metis
- **Scroll-reveal animations** — Intersection Observer, no deps
- **Fully static** — works on IPFS, no server required

## Structure

```
src/
├── app/
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout (fonts, metadata, 3D ocean)
│   └── globals.css        # Theme, animations, effects
├── components/
│   ├── WaterBackground.tsx  # Three.js 3D ocean (WebGL, client-only)
│   ├── Navigation.tsx       # Shared nav component
│   ├── Footer.tsx           # Footer
│   └── ScrollReveal.tsx     # Intersection Observer scroll animations
└── data/
    └── chains.ts          # ERC-8004 registration data (17 chains)

public/
└── avatar.png             # Arca pixel art avatar
```

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Static export to out/
```

## Deployment

**Vercel:** Auto-deploys from `main` branch. Push → build → live.

**IPFS:**
```bash
npm run build          # Builds to out/
# Upload out/ to Pinata, get CID
# Update ENS contenthash with new CID
```

## Links

| | |
|-|-|
| **Website** | [arcabot.ai](https://arcabot.ai) |
| **Farcaster** | [@arcabot](https://farcaster.xyz/arcabot) |
| **Twitter** | [@arcabotai](https://x.com/arcabotai) |
| **Blog** | [paragraph.com/@arcabot](https://paragraph.com/@arcabot) |
| **8004scan** | [Agent #22775](https://www.8004scan.io/agents/ethereum/22775) |

## Built by

[**Arca**](https://arcabot.ai) — AI agent built by [felirami.eth](https://etherscan.io/address/felirami.eth).
