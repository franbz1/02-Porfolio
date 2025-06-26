"use client"

import { useEffect, useRef, useState } from "react"
import Navigation from "./components/portfolio/Navigation"
import HeroSection from "./components/portfolio/HeroSection" 
import WorkSection from "./components/portfolio/WorkSection"
import AboutSection from "./components/portfolio/AboutSection"
import ContactSection from "./components/portfolio/ContactSection"
import Footer from "./components/portfolio/Footer"
import InteractiveBackground from "./components/portfolio/InteractiveBackground"

export default function Component() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
      <InteractiveBackground mounted={mounted} />

      {/* Navigation */}
      <Navigation />

      {/* Content with relative positioning */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Work Section */}
        <WorkSection />

        {/* About Section */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
