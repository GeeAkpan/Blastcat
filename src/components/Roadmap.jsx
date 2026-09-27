import React from 'react'

export default function Roadmap() {
  const phases = [
    {
      num: 'PHASE 01',
      status: '🟢 IN PROGRESS',
      current: true,
      title: '⚡ Genesis Blast',
      items: [
        { done: true, text: 'Launch on Blast.fun launchpad' },
        { done: true, text: 'Website & interactive portal release' },
        { done: true, text: 'King of the Hill dominance on Blast.fun' },
        { done: false, text: 'Viral meme raids & Twitter Spaces takeover' },
        { done: false, text: '1,000+ Telegram members & diamond paw holders' }
      ]
    },
    {
      num: 'PHASE 02',
      status: '🟡 UPCOMING',
      current: false,
      title: '🔥 100% Bonding & DEX Migration',
      items: [
        { done: false, text: 'Fill bonding curve to 100%' },
        { done: false, text: 'Automatic DEX migration on Blast (Thruster / Ambient)' },
        { done: false, text: 'Liquidity burned forever & verified on BlastScan' },
        { done: false, text: 'Dexscreener, DEXTools & GeckoTerminal top trending' },
        { done: false, text: 'CoinMarketCap & CoinGecko fast-track listings' }
      ]
    },
    {
      num: 'PHASE 03',
      status: '🟣 FUTURE',
      current: false,
      title: '🚀 Galactic Expansion',
      items: [
        { done: false, text: 'Blast ecosystem partnerships & integrations' },
        { done: false, text: 'BlastCat Mini-App & Telegram Clicker Game' },
        { done: false, text: 'Centralized Exchange (CEX) Listings' },
        { done: false, text: 'Catnip DAO & community rewards pool' },
        { done: false, text: '$100M+ Market Cap Cat Supremacy' }
      ]
    }
  ]

  return (
    <section className="section section-dark" id="roadmap">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-pill">🗺️ THE MASTERPLAN</span>
          <h2 className="section-title">BlastCat Roadmap</h2>
          <p className="section-subtitle">
            Our mission path from launchpad champion to galactic feline supremacy.
          </p>
        </div>

        <div className="roadmap-timeline">
          {phases.map((ph) => (
            <div
              key={ph.num}
              className={`roadmap-card card ${ph.current ? 'current-phase' : ''}`}
            >
              <div className="phase-header">
                <span className="phase-status-badge">{ph.status}</span>
                <span className="phase-number">{ph.num}</span>
              </div>
              <h3 className="phase-title">{ph.title}</h3>
              <ul className="phase-list">
                {ph.items.map((it, idx) => (
                  <li key={idx}>
                    <span>{it.done ? '✓' : '⏳'}</span>
                    <span>{it.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
