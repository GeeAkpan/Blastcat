import React, { useState } from 'react'
import confetti from 'canvas-confetti'
import { soundFX } from '../utils/audio'

export default function BondingCurveTracker({ onToast }) {
  const [currency, setCurrency] = useState('SUI') // 'SUI' | 'ETH'
  const [payAmount, setPayAmount] = useState('50')
  const [curveProgress, setCurveProgress] = useState(94.8)
  const [marketCap, setMarketCap] = useState(74250)
  const [holders, setHolders] = useState(1488)

  // Rate: 1 SUI = 25,000 $BCAT | 1 ETH = 12,500,000 $BCAT
  const rate = currency === 'SUI' ? 25000 : 12500000
  const estimatedTokens = Math.floor((parseFloat(payAmount) || 0) * rate)

  const quickAmounts = currency === 'SUI' ? ['25', '50', '100', '250', '500'] : ['0.05', '0.1', '0.5', '1.0', '2.5']

  const handleSimulateBuy = () => {
    soundFX.playChaChing()
    const addedProg = Math.min(100, curveProgress + (currency === 'SUI' ? parseFloat(payAmount) * 0.015 : parseFloat(payAmount) * 0.8))
    setCurveProgress(parseFloat(addedProg.toFixed(1)))
    setMarketCap(prev => prev + Math.floor(currency === 'SUI' ? parseFloat(payAmount) * 2.2 : parseFloat(payAmount) * 3200))
    setHolders(prev => prev + 1)

    confetti({
      particleCount: 65,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#FCFC03', '#FF2A85', '#00F2FF']
    })

    onToast(`🚀 Simulated +${estimatedTokens.toLocaleString()} $BCAT Swap! Bonding curve pumped to ${addedProg.toFixed(1)}%!`)
  }

  return (
    <section className="section" id="trade">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-pill">⚡ BLAST.FUN LAUNCHPAD</span>
          <h2 className="section-title">Trade on Blast.fun</h2>
          <p className="section-subtitle">
            Live bonding curve radar & instant swap calculator for BlastCat ($BCAT) on Sui!
          </p>
        </div>

        <div className="launchpad-grid">
          {/* Bonding Curve Status Card */}
          <div className="card launchpad-card">
            <div className="card-header-flex">
              <div className="token-profile">
                <img src="/assets/images/blastcat_mascot.png" alt="BlastCat" className="token-thumb" />
                <div>
                  <h3 className="token-name">BlastCat <span className="token-symbol">($BCAT)</span></h3>
                  <span className="token-badge-blast">Blast.fun &bull; Sui Network</span>
                </div>
              </div>
              <div className="koth-badge">
                <span>👑 King of the Hill</span>
              </div>
            </div>

            {/* Bonding Meter */}
            <div className="bonding-progress-block">
              <div className="progress-labels">
                <span className="label-title">BONDING CURVE PROGRESS</span>
                <span className="label-pct">{curveProgress}%</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${curveProgress}%` }}>
                  <span className="progress-lightning">⚡</span>
                </div>
              </div>
              <p className="progress-note">
                ● When bonding curve hits 100%, all liquidity automatically deposits to Sui DEX & LP is permanently burned!
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="stats-row">
              <div className="stat-box">
                <span className="stat-label">Market Cap</span>
                <span className="stat-value text-yellow">${marketCap.toLocaleString()}</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Virtual Liquidity</span>
                <span className="stat-value">34,200 SUI</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Holders</span>
                <span className="stat-value">{holders.toLocaleString()}</span>
              </div>
              <div className="stat-box">
                <span className="stat-label">Network</span>
                <span className="stat-value text-cyan">Sui 💧</span>
              </div>
            </div>

            {/* Buy CTA */}
            <div className="launchpad-action-box">
              <a
                href="https://blast.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block btn-lg btn-pulse btn-blast"
                onClick={() => soundFX.playRocket()}
              >
                <span>⚡ Trade $BCAT on Blast.fun on Sui</span>
              </a>
            </div>
          </div>

          {/* Interactive Calculator / Swap Simulator */}
          <div className="card calc-card">
            <div className="calc-header">
              <div className="calc-title-row">
                <h3>⚡ Quick $BCAT Estimator</h3>
                <div className="curr-switch">
                  <button
                    className={`btn-curr ${currency === 'SUI' ? 'active' : ''}`}
                    onClick={() => {
                      setCurrency('SUI')
                      setPayAmount('50')
                      soundFX.playTap()
                    }}
                  >
                    💧 SUI
                  </button>
                  <button
                    className={`btn-curr ${currency === 'ETH' ? 'active' : ''}`}
                    onClick={() => {
                      setCurrency('ETH')
                      setPayAmount('0.1')
                      soundFX.playTap()
                    }}
                  >
                    ⚡ ETH
                  </button>
                </div>
              </div>
              <p>Simulate your BlastCat bag with native {currency}!</p>
            </div>

            <div className="calc-form">
              <div className="input-group">
                <label htmlFor="payInput">You Pay ({currency}):</label>
                <div className="input-wrap">
                  <input
                    type="number"
                    id="payInput"
                    value={payAmount}
                    onChange={(e) => setPayAmount(e.target.value)}
                    step={currency === 'SUI' ? '10' : '0.05'}
                    min="0.01"
                    max="100000"
                  />
                  <span className="currency-tag">{currency} {currency === 'SUI' ? '💧' : '⚡'}</span>
                </div>
              </div>

              {/* Quick chip buttons */}
              <div className="quick-btns">
                {quickAmounts.map((amt) => (
                  <button
                    key={amt}
                    className={`btn-chip ${payAmount === amt ? 'active' : ''}`}
                    onClick={() => {
                      setPayAmount(amt)
                      soundFX.playTap()
                    }}
                  >
                    {amt} {currency}
                  </button>
                ))}
              </div>

              <div className="swap-divider">
                <span className="swap-icon">⬇</span>
              </div>

              <div className="input-group">
                <label>You Receive (Est. BlastCat):</label>
                <div className="input-wrap result-wrap">
                  <span className="result-amount">
                    {estimatedTokens.toLocaleString()}
                  </span>
                  <span className="currency-tag pink-tag">$BCAT 🐱</span>
                </div>
              </div>

              <button
                className="btn btn-primary btn-block btn-sim btn-blast"
                onClick={handleSimulateBuy}
              >
                <span>🚀 Simulate Ape In & Blast Off!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
