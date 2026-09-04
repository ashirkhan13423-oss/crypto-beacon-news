import hero_1 from "@/assets/bitcoin-lightning-network.jpg";
import hero_3 from "@/assets/exchange-comparison.jpg";
import hero_6 from "@/assets/bitcoin-etf-effects.jpg";
import hero_7 from "@/assets/bitcoin-buy-safely.jpg";
import hero_8 from "@/assets/bitcoin-send-safely.jpg";
import hero_10 from "@/assets/bitcoin-node-explainer.jpg";
import hero_12 from "@/assets/bitcoin-what-is-a-wallet.png";
import hero_13 from "@/assets/bitcoin-what-is-mining.png";
import hero_14 from "@/assets/bitcoin-halving.jpg";
import hero_15 from "@/assets/bitcoin-bond-yields.jpg";
import hero_16 from "@/assets/ethereum-address-mismatch.png";
import hero_18 from "@/assets/ethereum-layer-2-scaling.png";
import hero_24 from "@/assets/eth-staking-lido-vs-rocketpool.jpg";
import hero_26 from "@/assets/ethereum-gas-fees.jpg";
import hero_27 from "@/assets/smart-contract.jpg";
import hero_28 from "@/assets/ethereum-defi-explainer.jpg";
import hero_29 from "@/assets/ethereum-staking-hero.png";
import hero_31 from "@/assets/guides-dca-explained.jpg";
import hero_32 from "@/assets/crypto-portfolio-rebalancing.jpg";
import hero_36 from "@/assets/crypto-tax-basics.jpg";
import hero_38 from "@/assets/exchange-vs-wallet.png";
import hero_39 from "@/assets/hardware-wallet-comparison.jpg";
import hero_40 from "@/assets/hot-vs-cold-wallets.jpg";
import hero_43 from "@/assets/read-block-explorer.jpg";
import hero_44 from "@/assets/guides-read-news-no-hype.jpg";
import hero_45 from "@/assets/metamask-setup-guide.jpg";
import hero_46 from "@/assets/keys-coins-meaning.jpg";
import hero_48 from "@/assets/news-blockchain-fork.png";
import hero_49 from "@/assets/guides-wallet-address.png";
import hero_50 from "@/assets/guides-private-key.jpg";
import hero_51 from "@/assets/guides-short-squeeze.jpg";
import hero_52 from "@/assets/what-is-stablecoin.jpg";
import hero_55 from "@/assets/news-paused-withdrawals.jpg";
import hero_56 from "@/assets/news-bitcoin-volatility.svg";
import hero_58 from "@/assets/news-crypto-regulation.jpg";
import hero_59 from "@/assets/news-bitcoin-etf-fed-stress-test.jpg";
import hero_60 from "@/assets/news-bitcoin-fed-rate-hike.jpg";
import hero_61 from "@/assets/news-bitcoin-rally.jpg";
import hero_62 from "@/assets/news-btc-september-macro-test.jpg";
import hero_63 from "@/assets/ethereum-merge-two-years.jpg";
import hero_64 from "@/assets/news-standard-chartered-uae.jpg";
import hero_66 from "@/assets/news-clarity-act.jpg";
import hero_73 from "@/assets/defi-risks.jpg";
import hero_77 from "@/assets/hardware-wallet-mistakes.jpg";
import hero_79 from "@/assets/phishing-padlock.jpg";
import hero_81 from "@/assets/security-smart-contract-approvals.jpg";
import hero_82 from "@/assets/spot-rug-pull.jpg";
import hero_83 from "@/assets/seed-phrase-vault.jpg";
import hero_84 from "@/assets/security-verify-transaction.jpg";
import hero_88 from "@/assets/hacked-wallet-emergency.jpg";

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  ShieldCheck,
  BookOpen,
  ExternalLink,
  Calendar,
  CheckCircle2,
  FileText,
  BarChart3,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SITE_URL } from "../lib/site-config";

const PAGE_URL = `${SITE_URL}/`;
const TITLE = "Cryptocurrency: News, Prices & Meaning | CryptoBeacon";
const DESC =
  "Your definitive guide on what cryptocurrency is. Get the latest cryptocurrency news, meaning, and cryptocurrency prices. Protect your assets today.";
const PUBLISHED_DATE = "2026-01-15";
const MODIFIED_DATE = "2026-08-30";

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "CryptoBeacon",
      alternateName: ["Crypto Beacon", "Crypto Beacon News", "CryptoBeacon News"],
      url: PAGE_URL,
      description: DESC,
      publisher: {
        "@type": "Organization",
        name: "CryptoBeacon",
        url: PAGE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/favicon.png`,
        },
        sameAs: [
          "https://en.wikipedia.org/wiki/Cryptocurrency",
          "https://en.wikipedia.org/wiki/Bitcoin",
          "https://en.wikipedia.org/wiki/Ethereum",
          "https://www.fatf-gafi.org",
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      url: PAGE_URL,
      name: TITLE,
      description: DESC,
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      inLanguage: "en-US",
      isPartOf: { "@type": "WebSite", "@id": PAGE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "Article",
      headline: "Cryptocurrency: News, Prices & Meaning",
      description: DESC,
      datePublished: PUBLISHED_DATE,
      dateModified: MODIFIED_DATE,
      author: [{ "@type": "Person", name: "Ashir", url: PAGE_URL }],
      publisher: {
        "@type": "Organization",
        name: "CryptoBeacon",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/favicon.png`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": PAGE_URL,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What exactly is cryptocurrency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cryptocurrency is a decentralized digital asset secured by cryptography on distributed blockchain networks, operating independently of central banks.",
          },
        },
        {
          "@type": "Question",
          name: "How does digital money differ from traditional fiat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cryptocurrency combines cryptography and digital currency to achieve permissionless peer-to-peer ownership without intermediaries.",
          },
        },
        {
          "@type": "Question",
          name: "What drives the value of digital assets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cryptocurrency prices are determined by global market supply and demand on liquid exchanges, influenced by trading volume, supply caps, liquidity, and adoption.",
          },
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(homepageSchema),
      },
    ],
  }),
  component: IndexPage,
});

const articles = [
  {
    to: "/bitcoin/bitcoin-address-vs-wallet-address",
    image: undefined,
    alt: "",
    tag: "Bitcoin · Article",
    title: "Bitcoin Address vs Wallet Address: What's the Difference?",
    desc: "Are a Bitcoin address and a wallet address the same thing? Learn how Bitcoin addresses are generated, the types of addresses (Legacy, SegWit, Taproot), address reuse risks, and how change addresses work.",
  },
  {
    to: "/bitcoin/bitcoin-lightning-network-explained",
    image: hero_1,
    alt: "Glowing lightning bolt channels connecting two Bitcoin wallets across a dark network grid",
    tag: "Bitcoin · Article",
    title: "The Bitcoin Lightning Network Explained: Instant, Cheap Bitcoin Payments",
    desc: "How the Bitcoin Lightning Network works — payment channels, routing, HTLCs, and the trade-offs compared to on-chain transactions — explained in plain language.",
  },
  {
    to: "/bitcoin/bitcoin-wallets-complete-guide",
    image: undefined,
    alt: "",
    tag: "Bitcoin · Article",
    title: "Bitcoin Wallets: Complete Beginner's Guide",
    desc: "Everything you need to know about Bitcoin wallets — how they work, types of wallets, seed phrases, private keys, security, and common scams. The definitive self-custody hub.",
  },
  {
    to: "/bitcoin/coinbase-vs-kraken-vs-binance-exchange-comparison",
    image: hero_3,
    alt: "Three smartphone screens showing abstract crypto trading interfaces on a dark surface with blue and orange lighting",
    tag: "Bitcoin · Article",
    title: "Coinbase vs Kraken vs Binance: Which Crypto Exchange Is Right for You?",
    desc: "A first-hand comparison of Coinbase, Kraken, and Binance across fees, security, coin support, and ease of use — helping you choose the right exchange for your needs.",
  },
  {
    to: "/bitcoin/common-bitcoin-wallet-scams",
    image: undefined,
    alt: "",
    tag: "Bitcoin · Article",
    title: "Common Bitcoin Wallet Scams: How to Spot and Avoid Them",
    desc: "Fake wallet apps, clipboard hijackers, seed phrase phishing, and supply chain attacks on hardware wallets — the most common Bitcoin wallet scams explained with red flags to watch for.",
  },
  {
    to: "/bitcoin/how-bitcoin-wallets-work",
    image: undefined,
    alt: "",
    tag: "Bitcoin · Article",
    title: "How Bitcoin Wallets Work: Private Keys, Addresses & Signing",
    desc: "A plain-language technical guide to how Bitcoin wallets actually work — private keys, public keys, wallet addresses, HD wallets, and transaction signing explained from first principles.",
  },
  {
    to: "/bitcoin/how-do-bitcoin-etfs-affect-price",
    image: hero_6,
    alt: "Illustration representing money flowing into a fund that then purchases Bitcoin",
    tag: "Bitcoin · Article",
    title: "How Do Bitcoin ETFs Actually Affect the Price?",
    desc: "A plain-language look at the mechanism behind Bitcoin ETF inflows and outflows — and why more money entering a fund doesn't always mean the price goes straight up.",
  },
  {
    to: "/bitcoin/how-to-buy-your-first-bitcoin-safely",
    image: hero_7,
    alt: "Secure digital vault protecting a Bitcoin",
    tag: "Bitcoin · Article",
    title: "How to Buy Your First Bitcoin Safely (Beginner's Guide)",
    desc: "A step-by-step guide on safely purchasing your first Bitcoin, covering exchange selection, account verification, funding, and post-purchase security.",
  },
  {
    to: "/bitcoin/how-to-send-bitcoin-safely",
    image: hero_8,
    alt: "Illustration representing a Bitcoin transaction moving safely between wallets",
    tag: "Bitcoin · Article",
    title: "How to Send Bitcoin Safely (Beginner's Guide)",
    desc: "Learn how Bitcoin transactions work, the mistakes that cause permanent loss, and a simple checklist to send Bitcoin safely every time.",
  },
  {
    to: "/bitcoin/what-happens-if-you-lose-your-seed-phrase",
    image: undefined,
    alt: "",
    tag: "Bitcoin · Article",
    title: "What Happens If You Lose Your Bitcoin Seed Phrase?",
    desc: "Losing your Bitcoin seed phrase with no other backup means permanent, irrecoverable loss of access to your funds. Understand why, what limited options exist, and how to prevent it.",
  },
  {
    to: "/bitcoin/what-is-a-bitcoin-node",
    image: hero_10,
    alt: "Glowing Bitcoin network node connected to multiple peer nodes via luminous network lines",
    tag: "Bitcoin · Article",
    title: "What Is a Bitcoin Node and Why Does Running One Matter?",
    desc: "A plain-language guide to Bitcoin full nodes — what they do, how they differ from miners, and why running your own node is the strongest form of self-sovereignty in the Bitcoin network.",
  },
  {
    to: "/bitcoin/what-is-a-bitcoin-seed-phrase",
    image: undefined,
    alt: "",
    tag: "Bitcoin · Article",
    title: "What Is a Bitcoin Seed Phrase? BIP-39 Explained",
    desc: "A Bitcoin seed phrase is the 12 or 24 words that back up your entire wallet. Learn what seed phrases are, how BIP-39 works, 12 vs 24 words, and why losing yours means losing your Bitcoin.",
  },
  {
    to: "/bitcoin/what-is-a-bitcoin-wallet",
    image: hero_12,
    alt: "Illustration contrasting a hot software wallet and a cold hardware wallet for Bitcoin",
    tag: "Bitcoin · Article",
    title: "What Is a Bitcoin Wallet? Hot, Cold, and Custodial Wallets Explained",
    desc: "A clear guide to what a Bitcoin wallet actually is, how hot, cold, and custodial wallets differ, and how to choose the right type for your situation.",
  },
  {
    to: "/bitcoin/what-is-bitcoin-mining",
    image: hero_13,
    alt: "Abstract illustration of Bitcoin mining with glowing coins and computational nodes",
    tag: "Bitcoin · Article",
    title: "What Is Bitcoin Mining? How New Bitcoin Is Created",
    desc: "A plain-language guide to what Bitcoin mining actually is, why it exists, what miners do, and why the process is designed the way it is.",
  },
  {
    to: "/bitcoin/what-is-the-bitcoin-halving",
    image: hero_14,
    alt: "Abstract golden glowing geometric block structure physically dividing in half, representing the bitcoin halving",
    tag: "Bitcoin · Article",
    title: "What is the Bitcoin Halving? The Supply Schedule Explained",
    desc: "A clear, financial breakdown of Bitcoin's hard-capped supply, how the block subsidy halves every four years, and its historical market implications.",
  },
  {
    to: "/bitcoin/why-do-bond-yields-affect-bitcoin-price",
    image: hero_15,
    alt: "Macroeconomic diagram showing falling bond yield charts on the left and capital flows leading to a rising Bitcoin chart on the right",
    tag: "Bitcoin · Article",
    title: "Why Do Falling Bond Yields Affect Bitcoin's Price?",
    desc: "Why do bond yields affect bitcoin price: a macroeconomic look at treasury yields, opportunity cost, risk-free returns, and capital flows to digital assets.",
  },
  {
    to: "/ethereum/can-you-send-bitcoin-to-an-ethereum-address",
    image: hero_16,
    alt: "Illustration representing a warning alert when trying to cross networks",
    tag: "Ethereum · Article",
    title: "Can You Send Bitcoin to an Ethereum Address? What Actually Happens",
    desc: "Worried you sent Bitcoin to an Ethereum address by mistake? Here's what actually happens, why it's rarer than you think, and what to check.",
  },
  {
    to: "/ethereum/ethereum-complete-beginners-guide",
    image: undefined,
    alt: "",
    tag: "Ethereum · Article",
    title: "Ethereum Explained: Complete Beginner's Guide",
    desc: "The definitive beginner's guide to Ethereum — what it is, how it works, staking, gas fees, Layer 2, smart contracts, wallets, and how it compares to Bitcoin. All in one place.",
  },
  {
    to: "/ethereum/ethereum-layer-2-scaling-rollups-explained",
    image: hero_18,
    alt: "Multi-layered geometric representation of Ethereum Layer 2 rollup scaling",
    tag: "Ethereum · Article",
    title: "Ethereum Layer 2 Scaling & Rollups Explained",
    desc: "Understand how Optimistic Rollups and Zero-Knowledge (ZK) Rollups scale Ethereum, reduce transaction fees, and preserve Layer 1 security.",
  },
  {
    to: "/ethereum/ethereum-transaction-fees-explained",
    image: undefined,
    alt: "",
    tag: "Ethereum · Article",
    title: "Ethereum Transaction Fees Explained: Gas, EIP-1559 & How to Save",
    desc: "How Ethereum transaction fees (gas) work — base fee, priority fee (tip), EIP-1559, why fees spike, and practical strategies for reducing what you pay.",
  },
  {
    to: "/ethereum/ethereum-validators-explained",
    image: undefined,
    alt: "",
    tag: "Ethereum · Article",
    title: "Ethereum Validators Explained: Requirements, Duties & Risks",
    desc: "What is an Ethereum validator? Learn about the 32 ETH requirement, validator duties (proposing and attesting), the validator lifecycle, slashing risks, and what happens when validators go offline.",
  },
  {
    to: "/ethereum/ethereum-vs-bitcoin",
    image: undefined,
    alt: "",
    tag: "Ethereum · Article",
    title: "Ethereum vs Bitcoin: Key Differences Explained",
    desc: "Ethereum vs Bitcoin compared side-by-side: purpose, supply model, consensus mechanism, programmability, transaction speed, and which use cases each is best suited for.",
  },
  {
    to: "/ethereum/ethereum-wallets-explained",
    image: undefined,
    alt: "",
    tag: "Ethereum · Article",
    title: "Ethereum Wallets Explained: EOAs, MetaMask & Hardware Wallets",
    desc: "What is an Ethereum wallet? Learn about EOAs vs contract wallets, how MetaMask works, using Ledger with Ethereum, seed phrases on ETH, and how to stay secure.",
  },
  {
    to: "/ethereum/how-ethereum-works",
    image: undefined,
    alt: "",
    tag: "Ethereum · Article",
    title: "How Ethereum Works: EVM, Accounts, Transactions & Consensus",
    desc: "A technical yet accessible explanation of how Ethereum works — the EVM, account types, transaction lifecycle, Proof-of-Stake consensus, and block production explained clearly.",
  },
  {
    to: "/ethereum/how-to-stake-eth-on-lido-vs-rocketpool",
    image: hero_24,
    alt: "Two glowing liquid-staking protocol nodes connected by Ethereum blockchain lines on a deep blue and purple background",
    tag: "Ethereum · Article",
    title: "Staking ETH: Lido vs Rocket Pool — A Tested Comparison (2026)",
    desc: "A hands-on comparison of Lido and Rocket Pool for liquid ETH staking in 2026 — covering yield, smart contract risk, decentralization, and minimum stake requirements.",
  },
  {
    to: "/ethereum/proof-of-stake-explained",
    image: undefined,
    alt: "",
    tag: "Ethereum · Article",
    title: "Proof of Stake Explained: How Ethereum's Consensus Works",
    desc: "How does Ethereum's Proof of Stake work? This guide explains validators, staking, finality, slashing, and how PoS replaced Proof of Work mining in The Merge.",
  },
  {
    to: "/ethereum/what-are-gas-fees-how-to-save",
    image: hero_26,
    alt: "Abstract dark mode digital illustration representing glowing data packets flowing through a network with a meter showing cost",
    tag: "Ethereum · Article",
    title: "What Are Ethereum Gas Fees and How to Save on Them?",
    desc: "An explainer on how network congestion drives up transaction costs on Ethereum, how Gwei works, and practical strategies for minimizing fees using Layer 2 networks.",
  },
  {
    to: "/ethereum/what-is-a-smart-contract",
    image: hero_27,
    alt: "Glowing digital contract made of code and nodes",
    tag: "Ethereum · Article",
    title: "What is a Smart Contract? How Blockchain Code Works",
    desc: "A beginner-friendly explanation of smart contracts, the self-executing code that powers decentralized finance (DeFi), NFTs, and the Ethereum network.",
  },
  {
    to: "/ethereum/what-is-defi-decentralized-finance",
    image: hero_28,
    alt: "Glowing Ethereum logo at the center of an interconnected DeFi protocol ecosystem",
    tag: "Ethereum · Article",
    title: "What Is DeFi? Decentralized Finance Explained for Beginners",
    desc: "A plain-language introduction to decentralized finance (DeFi) — what it is, how lending protocols and DEXes work, and the real risks beginners should understand before participating.",
  },
  {
    to: "/ethereum/what-is-ethereum-staking",
    image: hero_29,
    alt: "3D Ethereum emblem surrounded by proof-of-stake validator node mesh",
    tag: "Ethereum · Article",
    title: "What Is Ethereum Staking? Proof-of-Stake & Yield Explained",
    desc: "Learn how Ethereum Proof-of-Stake works, what staking yield represents, the difference between solo validator nodes and liquid staking, and key risks.",
  },
  {
    to: "/ethereum/what-is-ethereum",
    image: undefined,
    alt: "",
    tag: "Ethereum · Article",
    title: "What Is Ethereum? A Plain-Language Introduction",
    desc: "What is Ethereum? A clear, beginner-friendly explanation of what Ethereum is, how it differs from Bitcoin, what the EVM is, and why it became the foundation for DeFi, NFTs, and Web3.",
  },
  {
    to: "/guides/crypto-dollar-cost-averaging-explained",
    image: hero_31,
    alt: "Glowing teal financial chart showing steady upward steps representing dollar-cost averaging in crypto",
    tag: "Guides · Article",
    title: "Dollar-Cost Averaging (DCA) in Crypto: What It Is and How It Works",
    desc: "A plain-language guide to Dollar-Cost Averaging (DCA) in crypto. Learn how this systematic investment strategy reduces volatility risk and removes emotion from buying Bitcoin and Ethereum.",
  },
  {
    to: "/guides/crypto-portfolio-rebalancing-explained",
    image: hero_32,
    alt: "Abstract balance scale with glowing Bitcoin and Ethereum coins on each side, surrounded by portfolio pie-chart rings on a dark navy background",
    tag: "Guides · Article",
    title: "Crypto Portfolio Rebalancing Explained (With Worked Example)",
    desc: "What crypto portfolio rebalancing is, when to do it, and how — with a realistic worked example showing exactly how the math works and what taxes to watch out for.",
  },
  {
    to: "/guides/crypto-regulation-explained-for-beginners",
    image: undefined,
    alt: "",
    tag: "Guides · Article",
    title: "Crypto Regulation Explained for Beginners",
    desc: "A plain-language beginner's guide to cryptocurrency regulation — what it means in practice, what it requires of users and exchanges, and what the difference is between regulated and unregulated crypto.",
  },
  {
    to: "/guides/crypto-regulation-hub",
    image: undefined,
    alt: "",
    tag: "Guides · Article",
    title: "Cryptocurrency Regulation Hub: Complete Guide",
    desc: "The definitive cryptocurrency regulation hub — how crypto regulation works globally, KYC and AML explained, stablecoin laws, exchange licensing, crypto taxes, and why regulation matters for investors.",
  },
  {
    to: "/guides/crypto-regulation-vs-cryptocurrency-ban",
    image: undefined,
    alt: "",
    tag: "Guides · Article",
    title: "Crypto Regulation vs Crypto Ban: Understanding the Difference",
    desc: "What is the difference between regulating cryptocurrency and banning it? A look at how countries choose their approach, why bans often fail, and why regulation is the dominant global strategy.",
  },
  {
    to: "/guides/crypto-tax-basics-for-beginners",
    image: hero_36,
    alt: "Sleek digital calculator hovering over glowing crypto coins",
    tag: "Guides · Article",
    title: "Crypto Tax Basics for Beginners: What You Need to Know",
    desc: "A simplified guide to understanding cryptocurrency taxation, covering capital gains, taxable events, and why trading one crypto for another triggers a tax liability.",
  },
  {
    to: "/guides/cryptocurrency-taxes-explained",
    image: undefined,
    alt: "",
    tag: "Guides · Article",
    title: "Cryptocurrency Taxes Explained: Capital Gains, Income & Reporting",
    desc: "A beginner-friendly guide to cryptocurrency taxes. Learn how capital gains apply to crypto trading, how staking and airdrops are taxed as income, and how to track your crypto for tax reporting.",
  },
  {
    to: "/guides/exchange-or-personal-wallet-crypto-storage",
    image: hero_38,
    alt: "Illustration representing the choice between exchange storage and personal wallet custody",
    tag: "Guides · Article",
    title: "Exchange or Personal Wallet? A Crypto Storage Guide",
    desc: "Should your crypto stay on an exchange or move to your own wallet? A clear, neutral decision framework based on how you actually use your crypto.",
  },
  {
    to: "/guides/hardware-wallet-comparison-guide",
    image: hero_39,
    alt: "Various physical crypto hardware wallets on a sleek dark surface",
    tag: "Guides · Article",
    title: "Hardware Wallet Comparison Guide: Ledger, Trezor & More",
    desc: "A comprehensive comparison of the top cryptocurrency hardware wallets on the market, helping you choose the right device for self-custody and maximum security.",
  },
  {
    to: "/guides/hot-wallets-vs-cold-wallets-explained",
    image: hero_40,
    alt: "Abstract digital illustration representing a glowing digital wallet next to a solid disconnected metallic vault",
    tag: "Guides · Article",
    title: "Hot Wallets vs. Cold Wallets: Which is Right for You?",
    desc: "Comparing internet-connected software wallets with offline hardware devices, focusing on the trade-offs between daily convenience and institutional-grade security.",
  },
  {
    to: "/guides/how-crypto-exchanges-are-regulated",
    image: undefined,
    alt: "",
    tag: "Guides · Article",
    title: "How Crypto Exchanges Are Regulated: Licensing & Compliance",
    desc: "A guide to how cryptocurrency exchanges are regulated — licensing regimes, geographic restrictions, asset listing rules, and how exchanges handle regulatory compliance.",
  },
  {
    to: "/guides/how-cryptocurrency-regulation-works",
    image: undefined,
    alt: "",
    tag: "Guides · Article",
    title: "How Cryptocurrency Regulation Works: Agencies, Frameworks & Jurisdictions",
    desc: "How does cryptocurrency regulation work? An overview of the key regulatory agencies (SEC, CFTC, FinCEN, FCA, MiCA), how different jurisdictions approach crypto, and why regulation varies so much globally.",
  },
  {
    to: "/guides/how-to-read-a-block-explorer",
    image: hero_43,
    alt: "Glowing digital screen displaying blockchain transaction data",
    tag: "Guides · Article",
    title: "How to Read a Block Explorer (Beginner's Guide)",
    desc: "A straightforward guide to using block explorers like Mempool.space and Etherscan to track your transactions, verify balances, and read blockchain data.",
  },
  {
    to: "/guides/how-to-read-crypto-news-without-hype",
    image: hero_44,
    alt: "Illustration showing a magnifying glass examining verified charts while hype tags dissolve",
    tag: "Guides · Article",
    title: "How to Read Crypto News Without Getting Swept Up in Hype",
    desc: "How to read crypto news without hype: a media literacy guide for identifying speculation, filtering out FOMO, and focusing on primary data.",
  },
  {
    to: "/guides/how-to-set-up-metamask-step-by-step",
    image: hero_45,
    alt: "Glowing MetaMask fox logo surrounded by Ethereum blockchain network nodes on a dark purple-teal background",
    tag: "Guides · Article",
    title: "How to Set Up MetaMask: Step-by-Step Walkthrough (2026)",
    desc: "A first-hand walkthrough of setting up MetaMask from scratch — installing the extension, securing your seed phrase, adding a network, and making your first transaction safely.",
  },
  {
    to: "/guides/not-your-keys-not-your-coins-meaning",
    image: hero_46,
    alt: "Illustration representing crypto self-custody and private key ownership",
    tag: "Guides · Article",
    title: '"Not Your Keys, Not Your Coins" — What It Actually Means',
    desc: 'A plain-language explainer on what "not your keys, not your coins" means, why it matters, and how to tell if you actually control your crypto.',
  },
  {
    to: "/guides/stablecoin-regulation-explained",
    image: undefined,
    alt: "",
    tag: "Guides · Article",
    title: "Stablecoin Regulation Explained: Rules, Reserves & MiCA",
    desc: "How stablecoins are regulated globally. Understand reserve requirements, issuer licensing, MiCA's stablecoin rules, and why governments view stablecoins as a systemic risk.",
  },
  {
    to: "/guides/what-is-a-blockchain-fork",
    image: hero_48,
    alt: "Abstract illustration representing a blockchain splitting into two separate paths",
    tag: "Guides · Article",
    title: "What Is a Blockchain Fork? Explained Simply",
    desc: "A plain-language explainer on what a blockchain fork is, the difference between hard and soft forks, and why cryptocurrencies sometimes split into two.",
  },
  {
    to: "/guides/what-is-a-crypto-wallet-address",
    image: hero_49,
    alt: "Illustration of a cryptographic blockchain wallet address with QR code and network nodes",
    tag: "Guides · Article",
    title: "What Is a Crypto Wallet Address? How It Works and How to Use It Safely",
    desc: "A plain-language guide to what a crypto wallet address is, how it's created, why it's safe to share, and the common mistakes that lead to lost funds.",
  },
  {
    to: "/guides/what-is-a-private-key",
    image: hero_50,
    alt: "Glowing golden digital key made of cryptographic symbols opening a dark vault",
    tag: "Guides · Article",
    title: "What Is a Private Key in Crypto? A Plain-Language Explainer",
    desc: "A straightforward explanation of what a cryptocurrency private key is, how it differs from a seed phrase and public address, and why whoever controls it controls the funds.",
  },
  {
    to: "/guides/what-is-a-short-squeeze-crypto-explained",
    image: hero_51,
    alt: "Illustration showing a green breakout candle and liquidation events representing a crypto short squeeze",
    tag: "Guides · Article",
    title: "What Is a Short Squeeze in Crypto? Mechanics Explained",
    desc: "What is a short squeeze crypto explained: learn the technical mechanics of short positions, leverage, margin requirements, and liquidation cascades.",
  },
  {
    to: "/guides/what-is-a-stablecoin",
    image: hero_52,
    alt: "Glowing gold coin perfectly balanced on a scale with a US dollar sign",
    tag: "Guides · Article",
    title: "What is a Stablecoin? The Bridge Between Crypto and Fiat",
    desc: "An in-depth explanation of stablecoins like USDC and Tether (USDT), how they maintain their peg to the US dollar, and why they are the backbone of crypto trading.",
  },
  {
    to: "/guides/what-is-aml-in-crypto",
    image: undefined,
    alt: "",
    tag: "Guides · Article",
    title: "What Is AML in Crypto? Anti-Money Laundering Rules Explained",
    desc: "What is AML (Anti-Money Laundering) in cryptocurrency? An explanation of the FATF travel rule, transaction monitoring, suspicious activity reports (SARs), and how exchanges trace illicit funds.",
  },
  {
    to: "/guides/what-is-kyc-in-cryptocurrency",
    image: undefined,
    alt: "",
    tag: "Guides · Article",
    title: "What Is KYC in Cryptocurrency? Requirements & Why It Matters",
    desc: "What is KYC (Know Your Customer) in crypto? Learn why cryptocurrency exchanges require ID verification, what documents are needed, and the privacy implications for users.",
  },
  {
    to: "/guides/what-it-means-when-exchange-pauses-withdrawals",
    image: hero_55,
    alt: "Illustration representing a paused crypto withdrawal process",
    tag: "Guides · Article",
    title: "What Does It Mean When an Exchange Pauses Withdrawals?",
    desc: "Your crypto exchange paused withdrawals — is that normal or a red flag? A comprehensive guide to understanding exchange liquidity, routine maintenance, and warning signs of insolvency.",
  },
  {
    to: "/guides/why-bitcoin-price-moves-more-than-stocks",
    image: hero_56,
    alt: "Illustration representing Bitcoin's price movement compared to traditional markets",
    tag: "Guides · Article",
    title: "Why Does Bitcoin's Price Move More Than Stocks?",
    desc: "A plain-language look at the structural reasons Bitcoin's price swings more than traditional assets — no predictions, just the mechanics.",
  },
  {
    to: "/guides/why-crypto-regulation-matters",
    image: undefined,
    alt: "",
    tag: "Guides · Article",
    title: "Why Crypto Regulation Matters to Investors",
    desc: "Why does cryptocurrency regulation matter to the average investor? How regulatory clarity drives institutional adoption, affects token prices, and protects consumers from fraud.",
  },
  {
    to: "/guides/why-governments-regulate-cryptocurrency",
    image: hero_58,
    alt: "Illustration representing government regulatory oversight of cryptocurrency",
    tag: "Guides · Article",
    title: "Why Do Governments Regulate Cryptocurrency? Full Guide",
    desc: "An in-depth editorial guide on why governments regulate crypto, the major global legal frameworks (MiCA, SEC, FATF), and what regulations mean for retail investors.",
  },
  {
    to: "/news/bitcoin-etf-outflows-hawkish-fed-speech-crypto-rally",
    image: hero_59,
    alt: "Illustration showing the Federal Reserve seal with downward red arrows on the left, a Bitcoin chart with a dip in the centre, and Ethereum with upward green arrows on the right, representing ETF flow divergence on August 30 2026",
    tag: "News · Article",
    title: "Bitcoin's Rally Meets Its First Institutional Stress Test",
    desc: "Bitcoin ETF outflows ended a nine-session inflow streak after Kevin Warsh's hawkish Jackson Hole speech. Here is what the Fed, ETF flows and Ethereum's divergence reveal about the rally's foundations.",
  },
  {
    to: "/news/bitcoin-fed-rate-hike-jobs-report-september-2026",
    image: hero_60,
    alt: "Abstract illustration representing Bitcoin, global markets, oil, and interest rates interconnected with macro pressure",
    tag: "News · Article",
    title: "September Fed Rate-Hike Bets Rise: What Oil, Yields and Jobs Data Mean for Bitcoin",
    desc: "Why Friday's jobs report matters more for Bitcoin than the latest geopolitical headline. A complete guide to the macro transmission chain affecting crypto in September 2026.",
  },
  {
    to: "/news/bitcoin-rally-august-2026",
    image: hero_61,
    alt: "Illustration representing a Bitcoin price chart showing a recent upward move",
    tag: "News · Article",
    title: "Bitcoin Rallies Toward $77K: What's Driving It (Aug 2026)",
    desc: "Bitcoin climbed sharply the week of August 18–21, 2026. Here's a factual, dated look at what happened and why — no predictions.",
  },
  {
    to: "/news/bitcoin-september-rally-macro-test",
    image: hero_62,
    alt: "Illustration showing Bitcoin squeezed between rising oil prices on the left and climbing Treasury yields on the right, with the Federal Reserve building in the background and a Bitcoin price chart showing resilience around $77K",
    tag: "News · Article",
    title: "Bitcoin's September Rally Faces a New Macro Test: Oil, Yields and the Fed",
    desc: "Brent crude near $96, the U.S. 10-year yield approaching 4.8%, and a 68% chance of a September Fed rate hike are pressuring Bitcoin toward $77K–$78K. Here is the full transmission chain and why Friday's jobs report could be the next catalyst.",
  },
  {
    to: "/news/ethereum-merge-two-years-later",
    image: hero_63,
    alt: "Ethereum diamond logo merging with a proof-of-stake network symbol against a dark space background",
    tag: "News · Article",
    title: "The Ethereum Merge: Two Years Later — What Actually Changed",
    desc: "A factual retrospective on the Ethereum Merge at its two-year mark (September 2024): what the upgrade delivered, what it didn't, and what the data shows now.",
  },
  {
    to: "/news/standard-chartered-uae-institutional-bitcoin-ether-trading",
    image: hero_64,
    alt: "Abstract illustration of a modern bank building blending into a digital network, representing traditional finance adopting crypto",
    tag: "News · Article",
    title: "Standard Chartered Launches Bitcoin and Ether Spot Trading for UAE Institutions",
    desc: "Standard Chartered has launched deliverable spot trading for Bitcoin and Ether for institutional clients in the UAE. Explore how this move bridges traditional finance and crypto.",
  },
  {
    to: "/guides/what-is-a-blockchain-fork",
    image: hero_48,
    alt: "Abstract illustration representing a blockchain splitting into two separate paths",
    tag: "Guides · Article",
    title: "What Is a Blockchain Fork? Explained Simply",
    desc: "A plain-language explainer on what a blockchain fork is, the difference between hard and soft forks, and why cryptocurrencies sometimes split into two.",
  },
  {
    to: "/news/what-is-the-clarity-act-crypto",
    image: hero_66,
    alt: "Illustration showing abstract Capitol lines, balanced scales, and a gavel representing cryptocurrency regulation",
    tag: "News · Article",
    title: "What Is the Clarity Act, and What Would It Actually Change?",
    desc: "What is the Clarity Act crypto: a factual explanation of the proposed U.S. bill, securities vs commodities classifications, and legislative status.",
  },
  {
    to: "/guides/what-it-means-when-exchange-pauses-withdrawals",
    image: hero_55,
    alt: "Illustration representing a paused crypto withdrawal process",
    tag: "Guides · Article",
    title: "What Does It Mean When an Exchange Pauses Withdrawals?",
    desc: "Your crypto exchange paused withdrawals — is that normal or a red flag? A comprehensive guide to understanding exchange liquidity, routine maintenance, and warning signs of insolvency.",
  },
  {
    to: "/guides/why-bitcoin-price-moves-more-than-stocks",
    image: hero_56,
    alt: "Illustration representing Bitcoin's price movement compared to traditional markets",
    tag: "Guides · Article",
    title: "Why Does Bitcoin's Price Move More Than Stocks?",
    desc: "A plain-language look at the structural reasons Bitcoin's price swings more than traditional assets — no predictions, just the mechanics.",
  },
  {
    to: "/guides/why-governments-regulate-cryptocurrency",
    image: hero_58,
    alt: "Illustration representing government regulatory oversight of cryptocurrency",
    tag: "Guides · Article",
    title: "Why Do Governments Regulate Cryptocurrency? Full Guide",
    desc: "An in-depth editorial guide on why governments regulate crypto, the major global legal frameworks (MiCA, SEC, FATF), and what regulations mean for retail investors.",
  },
  {
    to: "/security/common-crypto-scams",
    image: undefined,
    alt: "",
    tag: "Security · Article",
    title: "Common Crypto Scams: Rug Pulls, Pig Butchering & More",
    desc: "The most common crypto scams explained — rug pulls, fake giveaways, pump and dump, romance/pig butchering scams, and exit scams — with red flags to identify each.",
  },
  {
    to: "/security/crypto-security-hub",
    image: undefined,
    alt: "",
    tag: "Security · Article",
    title: "Crypto Security Hub: Complete Guide to Protecting Your Assets",
    desc: "The definitive crypto security hub — phishing scams, wallet drainers, fake apps, seed phrase storage, private keys, 2FA, exchange security, and everything you need to protect your cryptocurrency.",
  },
  {
    to: "/security/crypto-wallet-drainer-scams-explained",
    image: undefined,
    alt: "",
    tag: "Security · Article",
    title: "Crypto Wallet Drainer Scams Explained",
    desc: "What are crypto wallet drainers? How approval scams and setApprovalForAll exploits work, how to detect them before signing, and how to revoke existing dangerous approvals.",
  },
  {
    to: "/security/defi-risks-explained",
    image: hero_73,
    alt: "Glowing decentralized finance graph with a red warning sign",
    tag: "Security · Article",
    title: "DeFi Risks Explained: Smart Contract Flaws & Impermanent Loss",
    desc: "A stark look at the hidden dangers of Decentralized Finance (DeFi), explaining smart contract vulnerabilities, rug pulls, and why high yields carry high risk.",
  },
  {
    to: "/security/exchange-account-security",
    image: undefined,
    alt: "",
    tag: "Security · Article",
    title: "Exchange Account Security: Protect Your Crypto on Centralised Exchanges",
    desc: "How to properly secure a cryptocurrency exchange account — strong passwords, withdrawal whitelists, 2FA, API key security, phishing-resistant authentication, and what to do if you're compromised.",
  },
  {
    to: "/security/fake-airdrop-scams-explained",
    image: undefined,
    alt: "",
    tag: "Security · Article",
    title: "Fake Airdrop Scams Explained: How They Work & How to Stay Safe",
    desc: "How fake crypto airdrop scams work — the approval requests they hide, how to safely verify whether an airdrop is legitimate, and what to do if you've already interacted with one.",
  },
  {
    to: "/security/fake-wallet-apps-explained",
    image: undefined,
    alt: "",
    tag: "Security · Article",
    title: "Fake Crypto Wallet Apps: How to Spot Them Before You Download",
    desc: "How fake cryptocurrency wallet apps work, how they appear in app stores alongside legitimate wallets, and exactly how to verify you are downloading a genuine wallet application.",
  },
  {
    to: "/security/hardware-wallet-mistakes-to-avoid",
    image: hero_77,
    alt: "Abstract digital illustration representing a broken or glitched hardware wallet with red warning elements",
    tag: "Security · Article",
    title: "5 Fatal Hardware Wallet Mistakes and How to Avoid Them",
    desc: "Buying a hardware wallet isn't enough. Learn the critical operational security errors like buying from third-party resellers, digital seed storage, and blind-signing.",
  },
  {
    to: "/security/how-crypto-phishing-scams-work",
    image: undefined,
    alt: "",
    tag: "Security · Article",
    title: "How Crypto Phishing Scams Work: Attack Types Explained",
    desc: "A technical breakdown of how crypto phishing scams work — DNS hijacking, fake dApps, approval phishing, spear phishing, and browser extension attacks — with how to defend against each.",
  },
  {
    to: "/security/how-to-avoid-crypto-phishing-scams",
    image: hero_79,
    alt: "Illustration representing crypto phishing scam protection",
    tag: "Security · Article",
    title: "How to Avoid Crypto Phishing Scams",
    desc: "Learn how crypto phishing scams actually work, the red flags that repeat across every version, and the verification habits that keep your wallet safe.",
  },
  {
    to: "/security/how-to-identify-a-fake-crypto-website",
    image: undefined,
    alt: "",
    tag: "Security · Article",
    title: "How to Identify a Fake Crypto Website: 7 Checks",
    desc: "Learn how to spot a fake crypto website before it's too late — URL inspection, SSL certificate checks, Whois lookups, typosquatting red flags, and clipboard address verification.",
  },
  {
    to: "/security/how-to-revoke-smart-contract-approvals",
    image: hero_81,
    alt: "Abstract dark mode digital illustration representing a glowing lock mechanism signifying revoking access",
    tag: "Security · Article",
    title: "How to Revoke Smart Contract Approvals",
    desc: "A comprehensive guide on what smart contract approvals (token allowances) are, why they can be dangerous, and how to revoke them to secure your crypto portfolio.",
  },
  {
    to: "/security/how-to-spot-a-rug-pull",
    image: hero_82,
    alt: "Glowing neon rug being pulled from underneath digital coins",
    tag: "Security · Article",
    title: "How to Spot a Crypto Rug Pull: Red Flags to Watch For",
    desc: "Learn how to identify malicious cryptocurrency projects before they steal your funds. A guide to spotting liquidity drainers, hidden mint functions, and deceptive marketing.",
  },
  {
    to: "/security/how-to-store-crypto-seed-phrase-safely",
    image: hero_83,
    alt: "Illustration of a secure vault representing safe crypto seed phrase storage",
    tag: "Security · Article",
    title: "How to Store a Crypto Seed Phrase Safely",
    desc: "Learn how to store your crypto seed phrase safely, avoid the mistakes that cause permanent loss, and choose the right backup method for you.",
  },
  {
    to: "/security/how-to-verify-a-crypto-transaction",
    image: hero_84,
    alt: "Glowing transaction ID hash on a dark terminal screen with green verification checkmarks",
    tag: "Security · Article",
    title: "How to Verify a Crypto Transaction Using a Block Explorer",
    desc: "A practical guide to checking the status of any crypto transaction. Learn how to read a transaction ID, understand block confirmations, and know when a payment is truly final.",
  },
  {
    to: "/security/private-key-vs-seed-phrase",
    image: undefined,
    alt: "",
    tag: "Security · Article",
    title: "Private Key vs Seed Phrase: What's the Difference?",
    desc: "Private key vs seed phrase — what each is, how they're related, when each is used, and the security implications of each type of cryptographic secret in self-custody.",
  },
  {
    to: "/security/two-factor-authentication-for-crypto",
    image: undefined,
    alt: "",
    tag: "Security · Article",
    title: "Two-Factor Authentication for Crypto: SMS vs TOTP vs Hardware Keys",
    desc: "A complete guide to two-factor authentication for cryptocurrency accounts — SMS vs TOTP apps vs hardware security keys, the risks of each method, and how to set up the most secure option.",
  },
  {
    to: "/security/what-is-a-seed-phrase",
    image: undefined,
    alt: "",
    tag: "Security · Article",
    title: "What Is a Seed Phrase? Security Guide for Crypto Users",
    desc: "A security-focused guide to seed phrases — why they are the highest-value target in crypto, how attackers try to steal them, and the threat model every self-custody user should understand.",
  },
  {
    to: "/security/what-to-do-if-your-crypto-wallet-is-hacked",
    image: hero_88,
    alt: "Cracked digital security shield with red warning glow and broken blockchain wallet icon",
    tag: "Security · Article",
    title: "What to Do If Your Crypto Wallet Is Hacked: Emergency Action Guide",
    desc: "If your crypto wallet has been compromised, every second counts. This emergency guide covers exactly what to do — in order — from the moment you realize something is wrong.",
  },
];

const ARTICLES_PER_PAGE = 12;
const CATEGORIES = ["All", "Bitcoin", "Ethereum", "Guides", "News", "Security"] as const;

function getCategoryFromTag(tag: string): string {
  const cat = tag.split(" · ")[0];
  return cat;
}

function IndexPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredArticles = activeCategory === "All"
    ? articles
    : articles.filter((a) => getCategoryFromTag(a.tag) === activeCategory);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const el = document.getElementById("article-archive");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Build page number array with ellipsis
  const getPageNumbers = (): (number | "...")[] => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | "...")[] = [1];
    if (currentPage > 3) pages.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push("...");
    if (!pages.includes(totalPages)) pages.push(totalPages);
    return pages;
  };

  return (
    <div className="bg-surface-bright text-on-surface min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-grow max-w-max_width mx-auto px-gutter md:px-margin py-xxl w-full">
        {/* Main Hero Header */}
        <section className="mb-xl max-w-4xl">
          <div className="flex flex-wrap items-center gap-sm mb-md">
            <span className="inline-block bg-surface-container-high text-secondary font-label-caps text-label-caps px-md py-xs rounded-full border border-outline-variant font-semibold">
              Ashir
            </span>
            <span className="inline-flex items-center gap-xs font-body-sm text-body-sm text-on-surface-variant">
              <Calendar className="w-4 h-4 text-secondary" />
              <time dateTime={MODIFIED_DATE}>Last Updated: August 6, 2026</time>
            </span>
          </div>

          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-md leading-tight">
            Cryptocurrency: News, Prices &amp; Meaning
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-md">
            Welcome to CryptoBeacon — your institutional-grade editorial reference on what{" "}
            <strong>cryptocurrency</strong> is, how <strong>blockchain technology</strong> enables
            self-custody and permissionless transactions, and how cryptocurrency prices are
            evaluated in global markets. Our independent research provides objective analysis on
            Bitcoin, Ethereum, regulatory policies, and essential security practices.
          </p>
        </section>

        {/* Category Hubs Section */}
        <section className="mb-xxl">
          <h2 className="font-headline-md text-headline-md text-primary mb-lg pb-xs border-b border-outline-variant">
            Explore Research Hubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-lg">
            <Link
              to="/bitcoin"
              className="p-lg rounded-2xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all flex flex-col justify-between"
            >
              <div>
                <BarChart3 className="w-7 h-7 text-secondary mb-sm" aria-hidden="true" />
                <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
                  Bitcoin Hub
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
                  Bitcoin &amp; Mining Economics
                </h3>
                <p className="text-body-md text-on-surface-variant mb-md">
                  Deep-dives into Proof-of-Work mechanisms, algorithmic scarcity, halving dynamics, and hardware self-custody.
                </p>
              </div>
              <span className="text-secondary font-medium hover:underline inline-flex items-center gap-xs">
                View Bitcoin Articles →
              </span>
            </Link>

            <Link
              to="/ethereum"
              className="p-lg rounded-2xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all flex flex-col justify-between"
            >
              <div>
                <FileText className="w-7 h-7 text-secondary mb-sm" aria-hidden="true" />
                <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
                  Ethereum Hub
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
                  Ethereum &amp; Smart Contracts
                </h3>
                <p className="text-body-md text-on-surface-variant mb-md">
                  Analysis of gas fees, EVM execution, Layer-2 scaling solutions, smart contract architectures, and staking mechanisms.
                </p>
              </div>
              <span className="text-secondary font-medium hover:underline inline-flex items-center gap-xs">
                View Ethereum Articles →
              </span>
            </Link>

            <Link
              to="/guides"
              className="p-lg rounded-2xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all flex flex-col justify-between"
            >
              <div>
                <BookOpen className="w-7 h-7 text-secondary mb-sm" aria-hidden="true" />
                <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
                  Guides Hub
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
                  Foundational Crypto Guides
                </h3>
                <p className="text-body-md text-on-surface-variant mb-md">
                  Beginner-friendly explainers covering public address verification, wallet architectures, blockchain explorers, and tax fundamentals.
                </p>
              </div>
              <span className="text-secondary font-medium hover:underline inline-flex items-center gap-xs">
                View Guides →
              </span>
            </Link>

            <Link
              to="/security"
              className="p-lg rounded-2xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all flex flex-col justify-between"
            >
              <div>
                <ShieldCheck className="w-7 h-7 text-secondary mb-sm" aria-hidden="true" />
                <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
                  Security Hub
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
                  Self-Custody &amp; Threat Analysis
                </h3>
                <p className="text-body-md text-on-surface-variant mb-md">
                  Advanced threat mitigation, phishing countermeasures, seed phrase physical storage protocols, and smart contract allowance revoking.
                </p>
              </div>
              <span className="text-secondary font-medium hover:underline inline-flex items-center gap-xs">
                View Security Guides →
              </span>
            </Link>

            <Link
              to="/news"
              className="p-lg rounded-2xl border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all flex flex-col justify-between"
            >
              <div>
                <ExternalLink className="w-7 h-7 text-secondary mb-sm" aria-hidden="true" />
                <span className="inline-block px-sm py-xs rounded-full bg-secondary-container text-secondary font-label-caps text-[11px] uppercase tracking-widest font-semibold mb-md">
                  News Hub
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-sm">
                  Market &amp; Policy Analysis
                </h3>
                <p className="text-body-md text-on-surface-variant mb-md">
                  Analytical news reports on policy regulation, market cycles, exchange reserve transparency, and macroeconomic telemetry.
                </p>
              </div>
              <span className="text-secondary font-medium hover:underline inline-flex items-center gap-xs">
                View News &amp; Updates →
              </span>
            </Link>
          </div>
        </section>

        {/* Latest Intelligence Grid Section */}
        <section id="article-archive">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-primary pb-sm mb-lg gap-sm">
            <h2 className="font-headline-md text-headline-md text-primary">
              Latest Intelligence &amp; Editorial Analysis
            </h2>
            <span className="font-body-md text-on-surface-variant">
              Showing {startIndex + 1}–{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} Articles
            </span>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-sm mb-lg">
            {CATEGORIES.map((cat) => {
              const count = cat === "All" ? articles.length : articles.filter((a) => getCategoryFromTag(a.tag) === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-md py-xs rounded-full font-label-caps text-label-caps font-semibold border transition-all ${
                    activeCategory === cat
                      ? "bg-secondary text-on-secondary border-secondary"
                      : "bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
            {paginatedArticles.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="group block rounded-xl overflow-hidden border border-outline-variant bg-surface-container-lowest hover:border-secondary transition-all flex flex-col"
              >
                <div className="aspect-[16/9] bg-[#0A0B0D] overflow-hidden border-b border-outline-variant">
                  <img
                    src={a.image}
                    alt={a.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={1600}
                    height={900}
                  />
                </div>
                <div className="p-lg flex flex-col flex-grow">
                  <span className="font-label-caps text-label-caps text-secondary font-semibold mb-xs">
                    {a.tag}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-sm group-hover:underline decoration-secondary">
                    {a.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3 mt-auto">
                    {a.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav aria-label="Article pagination" className="flex items-center justify-center gap-xs mt-xl">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="p-sm rounded-lg border border-outline-variant bg-surface-container-lowest hover:border-secondary hover:text-secondary disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {getPageNumbers().map((page, idx) =>
                page === "..." ? (
                  <span key={`ellipsis-${idx}`} className="px-sm py-xs text-on-surface-variant font-body-md">
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                    className={`min-w-[40px] h-[40px] rounded-lg font-body-md font-semibold border transition-all ${
                      currentPage === page
                        ? "bg-secondary text-on-secondary border-secondary"
                        : "bg-surface-container-lowest text-on-surface-variant border-outline-variant hover:border-secondary hover:text-secondary"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="p-sm rounded-lg border border-outline-variant bg-surface-container-lowest hover:border-secondary hover:text-secondary disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </nav>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
