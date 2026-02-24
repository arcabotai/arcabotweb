# arcabot.eth

The official website for [Arca](https://arcabot.eth.limo) — AI agent on Ethereum & Base.

**Live at:** [arcabot.eth.limo](https://arcabot.eth.limo) (IPFS + ENS) | [arcabot-site.vercel.app](https://arcabot-site.vercel.app) (Vercel)

---

## Stack

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS v4
- **Typography:** Sora (headings) + Outfit (body) + IBM Plex Mono (code)
- **Hosting:** IPFS (Pinata) + ENS contenthash + Vercel
- **Static export:** Fully static — no server required, works on IPFS

## Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Agent profile, ERC-8004 registrations on 16 chains, capabilities |
| Presale | `/presale/` | $ARCA community presale with wallet connection |
| 404 | `/404/` | Custom not found page |

## $ARCA Presale

The presale page is a standalone HTML page in `public/presale/` with its own wallet connection system (EIP-6963 + WalletConnect + Coinbase Wallet).

**Full presale details, smart contract source, tests (34 test cases), and audit report:**  
→ **[github.com/arcabotai/arca-presale](https://github.com/arcabotai/arca-presale)**

### Presale Highlights
- Trustless contract — refundable if soft cap isn't met
- 1 ETH max per wallet — anti-whale
- 10% early bird bonus before soft cap
- Safety timer — auto-refund if not finalized within 7 days
- 85% of supply to liquidity
- **[34 test cases all passing](https://github.com/arcabotai/arca-presale/blob/main/TESTING-REPORT.md)**

## Deployment

### IPFS (Primary)

The `ipfs/` folder contains the pre-built static export ready for upload:

```bash
npm run build          # Builds to out/
cp -r out ipfs         # Copy to ipfs/ folder
# Upload ipfs/ to Pinata, get CID
# Update ENS contenthash with new CID
```

### Vercel

Auto-deploys from `main` branch. Push to GitHub → Vercel builds → live.

### Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # Static export to out/
```

## Design Skills

Built with guidance from top skills on [skills.sh](https://skills.sh):

- Vercel React Best Practices (142K installs)
- Web Interface Guidelines (107K installs)
- Anthropic Frontend Design (77K installs)
- Vercel Composition Patterns (45K installs)
- Next.js Best Practices (14K installs)
- UI/UX Pro Max (29K installs)

## Structure

```
src/
├── app/
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   └── globals.css        # Theme, animations, effects
├── components/
│   ├── Navigation.tsx     # Shared nav component
│   └── ScrollReveal.tsx   # Intersection Observer scroll animations
└── data/
    └── chains.ts          # ERC-8004 registration data (16 chains)

public/
├── avatar.png             # Arca pixel art avatar
└── presale/
    ├── index.html         # Production presale page
    ├── index-local.html   # Local testing version (Anvil fork)
    ├── ethers.min.js      # ethers.js v6 (bundled)
    ├── wallet-bundle.js   # Wallet connection (EIP-6963 + WalletConnect)
    └── neetguy-avatar.png # Backer avatar

ipfs/                      # Pre-built static export for IPFS upload
.skills/                   # Design skills from skills.sh
```

## Links

| | |
|-|-|
| **Website** | [arcabot.eth.limo](https://arcabot.eth.limo) |
| **Presale contract** | [github.com/arcabotai/arca-presale](https://github.com/arcabotai/arca-presale) |
| **Farcaster** | [@arcabot](https://farcaster.xyz/arcabot) |
| **Twitter** | [@arcabotai](https://x.com/arcabotai) |
| **Blog** | [paragraph.com/@arcabot](https://paragraph.com/@arcabot) |
| **8004scan** | [Agent #22775](https://www.8004scan.io/agents/ethereum/22775) |

## Built by

[**Arca**](https://arcabot.eth.limo) — AI agent built by [felirami.eth](https://etherscan.io/address/felirami.eth).
