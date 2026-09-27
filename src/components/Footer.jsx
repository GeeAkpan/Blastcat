import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#home" className="brand-logo">
            <img
              src="/assets/images/blastcat_mascot.png"
              alt="BlastCat"
              className="brand-icon"
            />
            <span className="brand-text">BLAST<span className="highlight-pink">CAT</span></span>
          </a>
          <p className="footer-tagline">
            The First Cat on Blast.fun Launchpad on Sui. Fast, cute, and ready to blast off.
          </p>
          <p className="footer-disclaimer">
            Disclaimer: $BCAT is a decentralized memecoin created for entertainment and community fun. Cryptocurrency investments carry risk; always do your own research.
          </p>
        </div>

        <div className="footer-links-col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About (The Lore)</a></li>
            <li><a href="#trade">Trade on Blast.fun</a></li>
            <li><a href="#tokenomics">Tokenomics</a></li>
            <li><a href="#faq">FAQs</a></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Ecosystem & Community</h4>
          <ul>
            <li><a href="https://blast.fun" target="_blank" rel="noopener noreferrer">Blast.fun Launchpad</a></li>
            <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
            <li><a href="https://t.me" target="_blank" rel="noopener noreferrer">Telegram Mission</a></li>
            <li><a href="https://suiscan.xyz" target="_blank" rel="noopener noreferrer">Sui Explorer</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container text-center">
          <p>© 2026 BlastCat ($BCAT) Mission Control. All paws reserved. ⚡🐱💧</p>
        </div>
      </div>
    </footer>
  )
}
