"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight, Download, Sun, Moon, Languages } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"
import { useLanguage } from "./hooks/useLanguage"
import { translations } from "./lib/translations"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export default function Component() {
  const { theme, setTheme } = useTheme()
  const { language, changeLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)

  const t = translations[language]

  useEffect(() => {
    setMounted(true)
  }, [])

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

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      {/* Interactive Background Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />

      {/* Floating Navigation */}
      <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-full px-6 py-3 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/20">
          <div className="flex items-center space-x-8 text-sm">
            <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.home}
            </a>
            <a href="#work" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.work}
            </a>
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.about}
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {t.nav.contact}
            </a>

            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:scale-110"
                aria-label="Change language"
              >
                <Languages className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </button>

              {showLanguageMenu && (
                <div className="absolute top-10 right-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 min-w-[80px]">
                  <button
                    onClick={() => {
                      changeLanguage("en")
                      setShowLanguageMenu(false)
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      language === "en"
                        ? "text-blue-600 dark:text-blue-400 font-medium"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage("es")
                      setShowLanguageMenu(false)
                    }}
                    className={`w-full px-3 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      language === "es"
                        ? "text-blue-600 dark:text-blue-400 font-medium"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    Español
                  </button>
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400 transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Content with relative positioning */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="text-center max-w-4xl mx-auto px-8">
            <div className="mb-12">
              <div className="w-24 h-24 mx-auto mb-8 relative group">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 p-0.5">
                  <Image
                    src="/placeholder.svg?height=96&width=96"
                    alt="Profile"
                    width={96}
                    height={96}
                    className="w-full h-full rounded-full object-cover bg-white dark:bg-gray-800 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-6xl lg:text-8xl font-light mb-8 tracking-tight">
              <span className="block text-gray-400 dark:text-gray-500 text-2xl lg:text-3xl font-normal mb-4">
                {t.hero.greeting}
              </span>
              {t.hero.name}
            </h1>

            <p className="text-xl lg:text-2xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              {t.hero.description}
            </p>

            <div className="flex items-center justify-center space-x-8">
              <Link href="#" className="group">
                <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" />
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" />
                </div>
              </Link>
              <Link href="#" className="group">
                <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" />
                </div>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-32 px-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <h2 className="text-5xl lg:text-6xl font-light mb-6">{t.work.title}</h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500"></div>
            </div>

            <div className="space-y-32">
              {t.work.projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-500/20 dark:to-purple-500/20"></div>
                        <div className="absolute bottom-4 right-4 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
                          <ArrowUpRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-sm text-gray-400 dark:text-gray-500 font-mono">{project.year}</span>
                        <div className="flex space-x-2">
                          {project.tech.slice(0, 2).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-light mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex items-center space-x-6">
                        <Link
                          href="#"
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                        >
                          <span className="text-sm">{t.work.viewCode}</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <Link
                          href="#"
                          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                        >
                          <span className="text-sm">{t.work.liveDemo}</span>
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-8 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-5xl lg:text-6xl font-light mb-8">{t.about.title}</h2>
                <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t.about.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-12">
                  <Button className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-full px-8 py-3 transition-colors">
                    <Download className="w-4 h-4 mr-2" />
                    {t.about.downloadResume}
                  </Button>
                </div>
              </div>

              <div>
                <div className="mb-12">
                  <h3 className="text-2xl font-light mb-8">{t.about.experience.title}</h3>
                  <div className="space-y-8">
                    {t.about.experience.items.map((exp, index) => (
                      <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 relative">
                        <div className="absolute -left-2 top-0 w-3 h-3 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 rounded-full"></div>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-gray-100">{exp.title}</h4>
                          <span className="text-sm text-gray-400 dark:text-gray-500 font-mono">{exp.period}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{exp.company}</p>
                        <p className="text-gray-400 dark:text-gray-500 text-xs">{exp.location}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-light mb-8">{t.about.technologies.title}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {t.about.technologies.items.map((tech, index) => (
                      <div
                        key={index}
                        className="text-gray-600 dark:text-gray-300 text-sm py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-6xl font-light mb-8">{t.contact.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              {t.contact.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <Link
                href={`mailto:${t.contact.email}`}
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg">{t.contact.email}</span>
              </Link>

              <div className="hidden sm:block w-px h-12 bg-gray-200 dark:bg-gray-700"></div>

              <Link
                href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-colors">
                  <span className="text-sm font-mono">+1</span>
                </div>
                <span className="text-lg">{t.contact.phone}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-8 border-t border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} {t.hero.name}. {t.footer.copyright}
            </p>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <Link
                href="#"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Github className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </footer>
      </div>

      {/* Click outside to close language menu */}
      {showLanguageMenu && <div className="fixed inset-0 z-40" onClick={() => setShowLanguageMenu(false)} />}
    </div>
  )
}
