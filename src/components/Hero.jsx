import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { soundFX } from '../utils/audio'

export default function Hero({ onToast }) {
  const [copied, setCopied] = useState(false)
  const [launchCode, setLaunchCode] = useState('')

  const contractAddress = '0xBCa700000000000000000000000000000000bCat'

  const handleCopyCA = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    soundFX.playChaChing()
    onToast('⚡ Contract Address Copied to Clipboard!')

    confetti({
      particleCount: 55,
      spread: 65,
      origin: { y: 0.7 },
      colors: ['#FCFC03', '#FF2A85', '#00F2FF']
    })

    setTimeout(() => setCopied(false), 2500)
  }

  const handleMascotClick = () => {
    soundFX.playMeow()
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.45 },
      colors: ['#FCFC03', '#FF2A85', '#00F2FF']
    })
    onToast('⚡ MEOW! BlastCat energized!')
  }

  const handleLaunchCodeVerify = (e) => {
    e.preventDefault()
    if (!launchCode.trim()) return
    soundFX.playRocket()
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#FCFC03', '#FF2A85', '#00F2FF']
    })
    onToast(`⚡ LAUNCH CODE [${launchCode.toUpperCase()}] ACCEPTED!`)
    setLaunchCode('')
  }

  return (
    <header className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          {/* Mission Control Badges */}
          <div className="mission-tags-row">
            <span className="tape-sticker tape-pink">BLAST.FUN · MISSION CONTROL</span>
            <span className="tape-sticker tape-cyan">⚡ SUI NETWORK PILOT</span>
            <span className="tape-sticker tape-yellow">SEASON ZERO // FLIGHT 001</span>
          </div>

          <h1 className="hero-title">
            MISSION CONTROL: <br />
            <span className="gradient-text-pink">BLASTCAT</span> TO THE <span className="gradient-text-yellow">MOON</span>!
          </h1>

          <p className="hero-subtitle">
            The official feline pilot of <strong>Blast.fun</strong> launchpad on <strong>Sui</strong>. Fast, cute, zero tax, and ready to blast off.
          </p>

          {/* CA Box */}
          <div className="ca-container">
            <div className="ca-label">
              <span className="terminal-dot green-dot"></span>
              <span className="ca-title">CONTRACT ADDRESS (BLAST.FUN / SUI):</span>
              <span className="ca-verified-badge">VERIFIED</span>
            </div>
            <div className="ca-inner">
              <code>{contractAddress}</code>
              <button
                className={`btn-copy ${copied ? 'copied' : ''}`}
                onClick={handleCopyCA}
                aria-label="Copy Contract Address"
              >
                <span>{copied ? '✓ COPIED!' : 'COPY CA'}</span>
              </button>
            </div>
            <div className="ca-hint">
              <span>● Status: Live on Blast.fun</span>
              <span>● Slippage: 0.5% - 1%</span>
            </div>
          </div>

          {/* Launch Code Input Terminal */}
          <form className="launch-code-terminal" onSubmit={handleLaunchCodeVerify}>
            <div className="terminal-prefix">&gt; LAUNCH CODE:</div>
            <input
              type="text"
              placeholder="e.g. SUIBLAST, MOONCAT, 100X"
              value={launchCode}
              onChange={(e) => setLaunchCode(e.target.value)}
              className="terminal-input"
            />
            <button type="submit" className="btn-terminal-send">
              TRANSMIT ⚡
            </button>
          </form>

          {/* Action Row */}
          <div className="hero-cta-group">
            <a
              href="https://blast.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-xl btn-pulse btn-blast"
              onClick={() => soundFX.playRocket()}
            >
              <span>🚀 APE IN ON BLAST.FUN</span>
            </a>
            <a
              href="#trade"
              className="btn btn-secondary btn-xl btn-retro"
              onClick={() => soundFX.playLightning()}
            >
              <span>📊 TRADE ON BLAST.FUN</span>
            </a>
          </div>

          {/* Social Quick Row */}
          <div className="social-quick-row">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-pill">
              <span className="social-icon">𝕏</span> Twitter
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="social-pill">
              <span className="social-icon">✈️</span> Telegram
            </a>
            <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="social-pill">
              <span className="social-icon">📈</span> Live Chart
            </a>
            <a href="https://suiscan.xyz" target="_blank" rel="noopener noreferrer" className="social-pill">
              <span className="social-icon">💧</span> Sui Explorer
            </a>
          </div>
        </div>

        {/* Hero Visual: Clean 2D Avatar Mascot */}
        <div className="hero-visual">
          <div className="mascot-stage">
            <div className="aura-glow"></div>

            {/* Just 2D Avatar Mascot */}
            <div className="mascot-card" onClick={handleMascotClick}>
              <div className="mascot-photo-frame animate-float">
                <img
                  src="/assets/images/blastcat_mascot.png"
                  alt="BlastCat 2D Avatar Mascot"
                  className="mascot-img"
                />
              </div>
              <div className="mascot-click-hint">⚡ TAP BLASTCAT FOR ENERGY BOOST ⚡</div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Strip */}
      <div className="banner-strip-wrap">
        <div className="banner-frame">
          <div className="frame-corner corner-tl"></div>
          <div className="frame-corner corner-tr"></div>
          <div className="frame-corner corner-bl"></div>
          <div className="frame-corner corner-br"></div>
          <img
            src="/assets/images/blastcat_banner.png"
            alt="BLASTCAT Banner"
            className="banner-img"
            onClick={() => {
              soundFX.playLightning()
              onToast('⚡ BLASTCAT ENGAGED!')
            }}
          />
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          <div className="ticker-item"><span className="ticker-spark">⚡</span> MISSION CONTROL: BLASTCAT PILOT ON SUI</div>
          <div className="ticker-item"><span className="ticker-spark">🚀</span> FIRST CAT ON BLAST.FUN LAUNCHPAD</div>
          <div className="ticker-item"><span className="ticker-spark">💧</span> FAST SUB-SECOND SUI ECOSYSTEM TRANSACTIONS</div>
          <div className="ticker-item"><span className="ticker-spark">🔥</span> 0% BUY / 0% SELL TAX FOREVER</div>
          <div className="ticker-item"><span className="ticker-spark">🐾</span> 100% AUTOMATIC LP BURN ON COMPLETION</div>
          <div className="ticker-item"><span className="ticker-spark">💎</span> DIAMOND PAWS ACTIVE &bull; 1,000,000,000 TOTAL SUPPLY</div>
          {/* Duplicate track */}
          <div className="ticker-item"><span className="ticker-spark">⚡</span> MISSION CONTROL: BLASTCAT PILOT ON SUI</div>
          <div className="ticker-item"><span className="ticker-spark">🚀</span> FIRST CAT ON BLAST.FUN LAUNCHPAD</div>
          <div className="ticker-item"><span className="ticker-spark">💧</span> FAST SUB-SECOND SUI ECOSYSTEM TRANSACTIONS</div>
          <div className="ticker-item"><span className="ticker-spark">🔥</span> 0% BUY / 0% SELL TAX FOREVER</div>
          <div className="ticker-item"><span className="ticker-spark">🐾</span> 100% AUTOMATIC LP BURN ON COMPLETION</div>
          <div className="ticker-item"><span className="ticker-spark">💎</span> DIAMOND PAWS ACTIVE &bull; 1,000,000,000 TOTAL SUPPLY</div>
        </div>
      </div>
    </header>
  )
}
