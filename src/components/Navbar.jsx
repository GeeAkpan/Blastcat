import React, { useState, useEffect } from 'react'
import { soundFX } from '../utils/audio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="top-announcement">
        <div className="announcement-content">
          <span className="live-dot"></span>
          <span className="tape-label">BLAST · FLIGHT 001</span>
          <span className="announcement-text">
            BlastCat ($BCAT) is officially live on Blast.fun on Sui!
          </span>
          <a href="#trade" className="announcement-link" onClick={() => soundFX.playMeow()}>
            [ TRADE ON BLAST.FUN &rarr; ]
          </a>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="brand-logo" onClick={() => soundFX.playMeow()}>
            <div className="brand-avatar-frame">
              <img src="/assets/images/blastcat_mascot.png" alt="BlastCat Mascot" className="brand-icon" />
            </div>
            <div className="brand-titles">
              <span className="brand-text">BLAST<span className="highlight-pink">CAT</span></span>
              <span className="brand-subtext">$BCAT</span>
            </div>
          </a>

          {/* Clean Navigation Links */}
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About (The Lore)</a>
            <a href="#trade" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Trade on Blast.fun</a>
            <a href="#tokenomics" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Tokenomics</a>
            <a href="#roadmap" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Roadmap</a>
            <a href="#faq" className="nav-link" onClick={() => setMobileMenuOpen(false)}>FAQs</a>
          </div>

          <div className="nav-actions">
            {/* CTA Button */}
            <a
              href="https://blast.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-blast"
              onClick={() => soundFX.playRocket()}
            >
              <span>⚡ TRADE ON BLAST.FUN</span>
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
              <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
              <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
