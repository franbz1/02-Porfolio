"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../../hooks/useLanguage"
import { translations } from "../../lib/translations"

export default function AboutSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
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
  )
} 