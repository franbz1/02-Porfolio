"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "../../hooks/useLanguage"
import { translations } from "../../lib/translations"

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="py-12 px-8 border-t border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-gray-400 dark:text-gray-500 text-sm">
          © {new Date().getFullYear()} {t.hero.name}. {t.footer.copyright}
        </p>
        <div className="flex items-center space-x-6 mt-4 sm:mt-0">
          <Link
            href="https://github.com/franbz1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <Github className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/franvz1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link
            href="mailto:franciscorualesp15@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
} 