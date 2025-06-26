"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "../../hooks/useLanguage"
import { translations } from "../../lib/translations"

export default function HeroSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="text-center max-w-4xl mx-auto px-8">
        <div className="mb-12">
          <div className="w-40 h-40 mx-auto mb-4 relative group">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 p-0.5">
              <Image
                src="/pfp porfolio.webp"
                alt="Profile"
                width={100}
                height={100}
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
          <Link href="https://github.com/franbz1" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" />
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/franvz1" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" />
            </div>
          </Link>
          <Link href="mailto:franciscorualesp15@gmail.com" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:border-gray-400 dark:group-hover:border-gray-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors" />
            </div>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-8 border border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
} 