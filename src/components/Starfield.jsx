import { useEffect, useRef } from 'react'

// Lightweight animated starfield canvas for backdrop
export default function Starfield({ density = 0.0015, speed = 0.05, className = '' }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const starsRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let w = (canvas.width = canvas.offsetWidth)
    let h = (canvas.height = canvas.offsetHeight)

    const createStars = () => {
      const count = Math.floor(w * h * density)
      starsRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * w,
        y: Math.random() * h,
        z: Math.random() * 1 + 0.2,
        s: Math.random() * 1.2 + 0.2,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      // slight gradient space
      const g = ctx.createRadialGradient(w*0.7, h*0.3, 0, w*0.7, h*0.3, Math.max(w, h))
      g.addColorStop(0, 'rgba(56, 189, 248, 0.05)')
      g.addColorStop(1, 'rgba(2,6,23,0.0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      const mx = (mouseRef.current.x / w - 0.5) * 2
      const my = (mouseRef.current.y / h - 0.5) * 2

      for (const star of starsRef.current) {
        const parX = star.x + mx * star.z * 10
        const parY = star.y + my * star.z * 10
        ctx.globalAlpha = 0.6 + star.z * 0.4
        ctx.fillStyle = '#a5b4fc'
        ctx.fillRect(parX, parY, star.s, star.s)
        // motion
        star.y += speed * (star.z * 2)
        if (star.y > h) star.y = 0
      }
    }

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
      createStars()
    }

    const onMouse = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    createStars()

    const loop = () => {
      draw()
      animationRef.current = requestAnimationFrame(loop)
    }

    loop()

    window.addEventListener('resize', onResize)
    window.addEventListener('mousemove', onMouse)

    return () => {
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [density, speed])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      role="img"
      aria-label="Animovaná hviezdna obloha v pozadí"
    />
  )
}
