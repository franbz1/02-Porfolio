"use client"

import { Mail } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "../../hooks/useLanguage"
import { translations } from "../../lib/translations"

export default function ContactSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
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
  )
} 