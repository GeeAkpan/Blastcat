import React, { useState } from 'react'
import { soundFX } from '../utils/audio'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'What is BlastCat ($BCAT)?',
      a: 'BlastCat is the first and premier cat memecoin launched on Blast.fun — the native token launchpad on the Blast Layer 2 network.'
    },
    {
      q: 'What is Blast.fun?',
      a: 'Blast.fun is the revolutionary bonding-curve launchpad for Blast L2, ensuring 100% fair launches with no pre-mines or insider sniping. Once the curve fills, liquidity automatically migrates to DEX and is locked.'
    },
    {
      q: 'What are the transaction taxes?',
      a: '0% Buy Tax and 0% Sell Tax. What you swap is 100% what you get.'
    },
    {
      q: 'How does liquidity migration work?',
      a: 'When the bonding curve hits 100% progress on Blast.fun, all collected ETH and remaining tokens are automatically deposited into liquidity pools on Blast DEX and the LP tokens are burned forever.'
    }
  ]

  const toggle = (idx) => {
    soundFX.playTap()
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="section section-dark" id="faq">
      <div className="container faq-container">
        <div className="section-header text-center">
          <span className="section-pill">❓ QUESTIONS</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="accordion">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`accordion-item ${openIndex === i ? 'active' : ''}`}
            >
              <button
                className="accordion-header"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{f.q}</span>
                <span className="accordion-icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div className="accordion-body">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
