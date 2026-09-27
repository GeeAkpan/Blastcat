import React, { useState } from 'react'
import BackgroundLightning from './components/BackgroundLightning'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LoreSection from './components/LoreSection'
import BondingCurveTracker from './components/BondingCurveTracker'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  const [toastMsg, setToastMsg] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [crtEnabled, setCrtEnabled] = useState(true)

  const handleToast = (msg) => {
    setToastMsg(msg)
    setShowToast(true)
    setTimeout(() => {
      setShowToast(false)
    }, 2800)
  }

  return (
    <div className={`app-root ${crtEnabled ? 'crt-active' : ''}`}>
      {/* CRT Scanline Overlay from Blast.fun Mission Control */}
      {crtEnabled && <div className="crt-scanlines-overlay" aria-hidden="true"></div>}

      {/* Dynamic Background Lightning & Spark Particles */}
      <BackgroundLightning />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections:
          1. Home
          2. About (The Lore)
          3. Trade on Blast.fun
          4. Tokenomics
          5. Roadmap
          6. FAQs
      */}
      <main>
        {/* 1. Home */}
        <Hero onToast={handleToast} />

        {/* 2. About (The Lore) */}
        <LoreSection />

        {/* 3. Trade on Blast.fun */}
        <BondingCurveTracker onToast={handleToast} />

        {/* 4. Tokenomics */}
        <Tokenomics />

        {/* 5. Roadmap */}
        <Roadmap />

        {/* 6. FAQs */}
        <FAQ />
      </main>

      {/* 7. Footer */}
      <Footer />

      {/* Toast Notification Container */}
      <div className={`toast-notification ${showToast ? 'show' : ''}`}>
        <span className="toast-icon">⚡</span>
        <span>{toastMsg}</span>
      </div>
    </div>
  )
}
