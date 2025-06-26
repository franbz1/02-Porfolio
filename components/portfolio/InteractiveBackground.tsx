"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

interface InteractiveBackgroundProps {
  mounted: boolean
}

export default function InteractiveBackground({ mounted }: InteractiveBackgroundProps) {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 12000)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.4 + 0.2,
        })
      }

      particlesRef.current = particles
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current
      const isDark = theme === "dark"

      // Update particles
      particles.forEach((particle) => {
        // Mouse attraction
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 120) {
          const force = (120 - distance) / 120
          particle.vx += (dx / distance) * force * 0.008
          particle.vy += (dy / distance) * force * 0.008
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Friction
        particle.vx *= 0.98
        particle.vy *= 0.98

        // Boundary bounce
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.5
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.5

        // Keep in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))
      })

      // Draw particles
      particles.forEach((particle) => {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const isNearMouse = distance < 60

        ctx.globalAlpha = particle.opacity * (isNearMouse ? 2 : 1)
        ctx.fillStyle = isDark
          ? isNearMouse
            ? "rgba(96, 165, 250, 0.9)"
            : "rgba(156, 163, 175, 0.5)"
          : isNearMouse
            ? "rgba(59, 130, 246, 0.9)"
            : "rgba(107, 114, 128, 0.4)"

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * (isNearMouse ? 1.8 : 1), 0, Math.PI * 2)
        ctx.fill()

        // Add subtle glow effect for particles near mouse
        if (isNearMouse) {
          ctx.globalAlpha = 0.1
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()

    window.addEventListener("resize", () => {
      resizeCanvas()
      createParticles()
    })
    window.addEventListener("mousemove", handleMouseMove)

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mounted, theme])

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0" 
      style={{ background: "transparent" }} 
    />
  )
} 