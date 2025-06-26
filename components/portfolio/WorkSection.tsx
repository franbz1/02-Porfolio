"use client"

import { useLanguage } from "../../hooks/useLanguage"
import { translations } from "../../lib/translations"
import ProjectCard from "./ProjectCard"

export default function WorkSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="work" className="py-32 px-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl lg:text-6xl font-light mb-6">{t.work.title}</h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500"></div>
        </div>

        <div className="space-y-32">
          {t.work.projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              viewCodeText={t.work.viewCode}
              liveDemoText={t.work.liveDemo}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 