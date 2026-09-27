import React, { useEffect, useRef } from 'react'

export default function BackgroundLightning() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Spark particles
    const particles = []
    const particleCount = 45

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.8,
        color: Math.random() > 0.5 ? '#FCFC03' : '#FF2A85',
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6 - 0.3,
        alpha: Math.random() * 0.7 + 0.2,
      })
    }

    // Occasional lightning flash
    let lightningTimer = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw subtle sparks
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.shadowBlur = 10
        ctx.shadowColor = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      // Occasional lightning bolt
      lightningTimer++
      if (lightningTimer > 280 && Math.random() < 0.03) {
        lightningTimer = 0
        const startX = Math.random() * canvas.width
        let curX = startX
        let curY = 0

        ctx.save()
        ctx.beginPath()
        ctx.moveTo(curX, curY)
        ctx.strokeStyle = Math.random() > 0.5 ? '#FCFC03' : '#FF2A85'
        ctx.lineWidth = 1.8
        ctx.shadowBlur = 18
        ctx.shadowColor = ctx.strokeStyle

        while (curY < canvas.height * 0.6) {
          curX += (Math.random() - 0.5) * 35
          curY += Math.random() * 30 + 10
          ctx.lineTo(curX, curY)
        }
        ctx.stroke()
        ctx.restore()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.65,
      }}
    />
  )
}
