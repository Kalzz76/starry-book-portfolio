import React, { useEffect, useRef, useState } from 'react'

export default function KursorSihir({ aktif = true }) {
  const canvasRef = useRef(null)
  const followerRef = useRef(null)
  const [bisaTampil, setBisaTampil] = useState(false)
  const [adaDiLayar, setAdaDiLayar] = useState(false)
  const [lagiHover, setLagiHover] = useState(false)

  const posisiRef = useRef({
    targetX: -100,
    targetY: -100,
    currX: -100,
    currY: -100
  })

  const partikelRef = useRef([])
  const animFrameRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (finePointer && !reducedMotion && aktif) {
      setBisaTampil(true)
    } else {
      setBisaTampil(false)
    }
  }, [aktif])

  useEffect(() => {
    if (!bisaTampil) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let lebar = (canvas.width = window.innerWidth)
    let tinggi = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvasRef.current) return
      lebar = canvasRef.current.width = window.innerWidth
      tinggi = canvasRef.current.height = window.innerHeight
    }

    const warnaBintang = ['#f6d365', '#ffdf78', '#ffd700', '#ffffff', '#fed6e3']

    const buatPartikel = (x, y, jumlah = 2, ledakan = false) => {
      for (let i = 0; i < jumlah; i++) {
        const sudut = ledakan ? (Math.PI * 2 * i) / jumlah + Math.random() * 0.5 : Math.random() * Math.PI * 2
        const kecepatan = ledakan ? Math.random() * 3 + 1.5 : Math.random() * 1.2 + 0.3
        partikelRef.current.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: Math.cos(sudut) * kecepatan,
          vy: Math.sin(sudut) * kecepatan - (ledakan ? 0.5 : 0.8),
          size: Math.random() * 2.8 + 1,
          alpha: 1,
          decay: Math.random() * 0.02 + 0.015,
          color: warnaBintang[Math.floor(Math.random() * warnaBintang.length)],
          rotasi: Math.random() * Math.PI,
          vRotasi: (Math.random() - 0.5) * 0.1
        })
      }
    }

    let jarakTerakhir = 0
    let posXSebelumnya = -100
    let posYSebelumnya = -100

    const handleMouseMove = (e) => {
      setAdaDiLayar(true)
      posisiRef.current.targetX = e.clientX
      posisiRef.current.targetY = e.clientY

      const dx = e.clientX - posXSebelumnya
      const dy = e.clientY - posYSebelumnya
      jarakTerakhir = Math.sqrt(dx * dx + dy * dy)

      if (jarakTerakhir > 7) {
        buatPartikel(e.clientX, e.clientY, 1, false)
        posXSebelumnya = e.clientX
        posYSebelumnya = e.clientY
      }

      const targetEl = e.target
      if (
        targetEl &&
        (targetEl.closest('a') ||
          targetEl.closest('button') ||
          targetEl.closest('[role="button"]') ||
          targetEl.closest('input') ||
          targetEl.closest('textarea') ||
          targetEl.closest('select'))
      ) {
        setLagiHover(true)
      } else {
        setLagiHover(false)
      }
    }

    const handleMouseDown = (e) => {
      buatPartikel(e.clientX, e.clientY, 10, true)
    }

    const handleMouseLeave = () => {
      setAdaDiLayar(false)
    }

    const gambarBintang = (ctx, cx, cy, spikes, outerRadius, innerRadius, color, alpha, rotasi) => {
      ctx.save()
      ctx.beginPath()
      ctx.translate(cx, cy)
      ctx.rotate(rotasi)
      let rot = (Math.PI / 2) * 3
      let x = 0
      let y = 0
      const step = Math.PI / spikes

      ctx.moveTo(0, -outerRadius)
      for (let i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outerRadius
        y = Math.sin(rot) * outerRadius
        ctx.lineTo(x, y)
        rot += step

        x = Math.cos(rot) * innerRadius
        y = Math.sin(rot) * innerRadius
        ctx.lineTo(x, y)
        rot += step
      }
      ctx.lineTo(0, -outerRadius)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.globalAlpha = Math.max(0, alpha)
      ctx.shadowBlur = 6
      ctx.shadowColor = color
      ctx.fill()
      ctx.restore()
    }

    const renderLoop = () => {
      ctx.clearRect(0, 0, lebar, tinggi)

      const pos = posisiRef.current
      pos.currX += (pos.targetX - pos.currX) * 0.18
      pos.currY += (pos.targetY - pos.currY) * 0.18

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${pos.currX}px, ${pos.currY}px, 0)`
      }

      const pList = partikelRef.current
      for (let i = pList.length - 1; i >= 0; i--) {
        const p = pList[i]
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.02
        p.alpha -= p.decay
        p.rotasi += p.vRotasi

        if (p.alpha <= 0) {
          pList.splice(i, 1)
          continue
        }

        gambarBintang(ctx, p.x, p.y, 4, p.size, p.size * 0.35, p.color, p.alpha, p.rotasi)
      }

      animFrameRef.current = requestAnimationFrame(renderLoop)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseleave', handleMouseLeave)

    animFrameRef.current = requestAnimationFrame(renderLoop)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [bisaTampil])

  if (!bisaTampil) return null

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-40 select-none"
        aria-hidden="true"
      />

      <div
        ref={followerRef}
        className={`fixed top-0 left-0 pointer-events-none z-50 -ml-3 -mt-3 select-none transition-opacity duration-300 ${
          adaDiLayar ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
        aria-hidden="true"
      >
        <div
          className={`relative flex items-center justify-center transition-transform duration-200 ${
            lagiHover ? 'scale-125' : 'scale-100'
          }`}
        >
          <div className="absolute w-8 h-8 rounded-full bg-bintang/20 blur-sm animate-pulse" />
          <div className="absolute w-4 h-4 rounded-full bg-emas/40 blur-[1px]" />
          <svg
            className="w-6 h-6 text-bintang drop-shadow-[0_0_8px_rgba(246,211,101,0.9)] animate-spin"
            style={{ animationDuration: '6s' }}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </div>
      </div>
    </>
  )
}
