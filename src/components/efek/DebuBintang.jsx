import React, { useRef, useEffect } from 'react'

export default function DebuBintang({ onMainkanSfx, picuLedakan = false, besar = false }) {
  const canvasRef = useRef(null)
  const sudahMunculRef = useRef(false)
  const partikelRef = useRef([])
  const animFrameRef = useRef(null)

  const buatPartikel = (lebar, tinggi, jumlah) => {
    const warnaList = ['#c9a227', '#f4ead2', '#3fae6b', '#ffe9a8', '#ffd700']
    const centerX = lebar / 2
    const centerY = tinggi / 2

    for (let i = 0; i < jumlah; i++) {
      const sudut = Math.random() * Math.PI * 2
      const speed = Math.random() * (besar ? 5.5 : 3.5) + 0.8
      partikelRef.current.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(sudut) * speed,
        vy: Math.sin(sudut) * speed,
        size: Math.random() * 3.5 + 1.2,
        alpha: 1,
        decay: Math.random() * 0.012 + 0.016,
        color: warnaList[Math.floor(Math.random() * warnaList.length)],
        isStar: Math.random() > 0.4
      })
    }
  }

  const loopAnimasi = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const list = partikelRef.current
    for (let i = list.length - 1; i >= 0; i--) {
      const p = list[i]
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.04
      p.alpha -= p.decay

      if (p.alpha <= 0) {
        list.splice(i, 1)
        continue
      }

      ctx.save()
      ctx.globalAlpha = Math.max(0, p.alpha)
      ctx.fillStyle = p.color
      ctx.shadowColor = p.color
      ctx.shadowBlur = 6

      if (p.isStar) {
        ctx.beginPath()
        ctx.moveTo(p.x, p.y - p.size)
        ctx.lineTo(p.x + p.size * 0.3, p.y)
        ctx.lineTo(p.x + p.size, p.y)
        ctx.lineTo(p.x + p.size * 0.3, p.y + p.size * 0.3)
        ctx.lineTo(p.x, p.y + p.size)
        ctx.lineTo(p.x - p.size * 0.3, p.y + p.size * 0.3)
        ctx.lineTo(p.x - p.size, p.y)
        ctx.lineTo(p.x - p.size * 0.3, p.y)
        ctx.closePath()
        ctx.fill()
      } else {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    if (list.length > 0) {
      animFrameRef.current = requestAnimationFrame(loopAnimasi)
    }
  }

  const jalankanLedakan = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width || 320
    canvas.height = rect.height || 120

    const isMobile = window.innerWidth < 768
    const jumlah = besar ? (isMobile ? 36 : 64) : (isMobile ? 18 : 36)
    buatPartikel(canvas.width, canvas.height, jumlah)

    if (onMainkanSfx) onMainkanSfx('debu')
    if (!animFrameRef.current) {
      animFrameRef.current = requestAnimationFrame(loopAnimasi)
    }
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const canvas = canvasRef.current
    if (!canvas) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting && !sudahMunculRef.current) {
          sudahMunculRef.current = true
          jalankanLedakan()
        }
      },
      { threshold: 0.6 }
    )

    observer.observe(canvas)

    return () => {
      observer.disconnect()
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (picuLedakan) {
      jalankanLedakan()
    }
  }, [picuLedakan])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
      aria-hidden="true"
    />
  )
}
