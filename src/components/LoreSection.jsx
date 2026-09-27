import React from 'react'

export default function LoreSection() {
  const features = [
    {
      icon: '⚡',
      title: 'First Cat on Blast.fun',
      desc: 'Every major chain has its iconic feline. BlastCat is the pioneer cat of Blast.fun launchpad, commanding the original feline meta with unstoppable viral hype.'
    },
    {
      icon: '🔋',
      title: 'Blast Native Yield Power',
      desc: "Built directly for the Blast ecosystem. We embrace Blast's native yield and gas refund mechanics to benefit holders and fund viral community raid campaigns."
    },
    {
      icon: '🛡️',
      title: '100% Fair & Safe',
      desc: 'No seed rounds, no insider allocations, no honeypots. Fair launched on the bonding curve with 0% buy tax and 0% sell tax forever.'
    },
    {
      icon: '🔥',
      title: 'Automated Liquidity Burn',
      desc: 'Upon bonding curve completion at 100%, the Blast.fun smart contract automatically pairs liquidity on the top Blast DEX and burns LP keys permanently.'
    }
  ]

  return (
    <section className="section section-dark" id="about">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-pill">⚡ THE ORIGIN</span>
          <h2 className="section-title">About (The Lore)</h2>
          <p className="section-subtitle">
            Born in the high-yield lightning storms of Blast.fun on Sui, BlastCat wears the pink lightning helmet of destiny.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feat, index) => (
            <div key={index} className="card feature-card">
              <div className="feature-icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
