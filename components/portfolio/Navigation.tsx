"use client"

import { Sun, Moon, Languages, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"
import { useLanguage } from "../../hooks/useLanguage"
import { translations } from "../../lib/translations"

export default function Navigation() {
  const { theme, setTheme } = useTheme()
  const { language, changeLanguage } = useLanguage()
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const t = translations[language]

  const handleNavClick = () => {
    setShowMobileMenu(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-50 px-4 w-full max-w-none sm:max-w-fit">
        {/* Desktop Menu */}
        <div className="hidden sm:block">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-full px-6 py-3 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/20">
            <div className="flex items-center space-x-6 lg:space-x-8 text-sm">
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
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex justify-between items-center">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-full px-4 py-2 shadow-lg shadow-gray-900/5 dark:shadow-gray-900/20">
            <div className="flex items-center space-x-3">
              {/* Theme Toggle Mobile */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                )}
              </button>

              {/* Language Toggle Mobile */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
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
                      EN
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
                      ES
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300"
                aria-label="Toggle menu"
              >
                {showMobileMenu ? (
                  <X className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Menu className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="sm:hidden fixed top-20 left-4 right-4 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-xl shadow-gray-900/10 dark:shadow-gray-900/30">
          <div className="p-6 space-y-4">
            <a 
              href="#home" 
              onClick={handleNavClick}
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
            >
              {t.nav.home}
            </a>
            <a 
              href="#work" 
              onClick={handleNavClick}
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
            >
              {t.nav.work}
            </a>
            <a 
              href="#about" 
              onClick={handleNavClick}
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
            >
              {t.nav.about}
            </a>
            <a 
              href="#contact" 
              onClick={handleNavClick}
              className="block text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
            >
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}

      {/* Click outside overlays */}
      {showLanguageMenu && (
        <div className="fixed inset-0 z-30" onClick={() => setShowLanguageMenu(false)} />
      )}
      {showMobileMenu && (
        <div className="fixed inset-0 z-30" onClick={() => setShowMobileMenu(false)} />
      )}
    </>
  )
} 