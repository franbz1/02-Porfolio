"use client"

import { Sun, Moon, Languages } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import { useLanguage } from "../../hooks/useLanguage"
import { translations } from "../../lib/translations"

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const { language, changeLanguage } = useLanguage()
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  const t = translations[language]

  return (
    <>
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

      {/* Click outside to close language menu */}
      {showLanguageMenu && <div className="fixed inset-0 z-40" onClick={() => setShowLanguageMenu(false)} />}
    </>
  )
} 