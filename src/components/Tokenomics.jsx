import React from 'react'

export default function Tokenomics() {
  return (
    <section className="section" id="tokenomics">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-pill">📊 TOKENOMICS</span>
          <h2 className="section-title">Purr-fectly Balanced Math</h2>
          <p className="section-subtitle">
            Simple, clean, and 100% transparent. No complex gimmicks or hidden dev allocations.
          </p>
        </div>

        <div className="tokenomics-grid">
          {/* Main Supply Card */}
          <div className="card tokenomics-main-card">
            <div className="supply-highlight">
              <span className="supply-label">TOTAL SUPPLY</span>
              <span className="supply-number">1,000,000,000</span>
              <span className="supply-ticker">$BCAT</span>
            </div>

            <div className="token-bars">
              <div className="token-bar-item">
                <div className="bar-header">
                  <span className="bar-name">⚡ Blast.fun Bonding Curve</span>
                  <span className="bar-val">80% (800,000,000 $BCAT)</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill pink-bar" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div className="token-bar-item">
                <div className="bar-header">
                  <span className="bar-name">🔒 Blast DEX Liquidity Pool (Burned LP)</span>
                  <span className="bar-val">20% (200,000,000 $BCAT)</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill yellow-bar" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>

            <div className="taxes-pill-row">
              <div className="tax-box">
                <span className="tax-num">0%</span>
                <span className="tax-desc">BUY TAX</span>
              </div>
              <div className="tax-box">
                <span className="tax-num">0%</span>
                <span className="tax-desc">SELL TAX</span>
              </div>
              <div className="tax-box">
                <span className="tax-num">100%</span>
                <span className="tax-desc">LP BURNED</span>
              </div>
            </div>
          </div>

          {/* Side Highlights */}
          <div className="tokenomics-side-col">
            <div className="mini-info-card">
              <span className="info-icon">💎</span>
              <div>
                <h4>Zero Team Allocation</h4>
                <p>Devs buy off the bonding curve just like every other community member.</p>
              </div>
            </div>

            <div className="mini-info-card">
              <span className="info-icon">⚡</span>
              <div>
                <h4>Native Blast Fuel</h4>
                <p>Enjoy blazing fast sub-second transactions and microscopic gas fees on Blast L2.</p>
              </div>
            </div>

            <div className="mini-info-card">
              <span className="info-icon">🌐</span>
              <div>
                <h4>Contract Address</h4>
                <p className="contract-code-preview">0xBCa700000000000000000000000000000000bCat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
