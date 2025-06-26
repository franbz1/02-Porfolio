"use client"

import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    year: string
    tech: string[]
  }
  index: number
  viewCodeText: string
  liveDemoText: string
}

export default function ProjectCard({ project, index, viewCodeText, liveDemoText }: ProjectCardProps) {
  return (
    <div className="group">
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
              <span className="text-sm">{viewCodeText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <span className="text-sm">{liveDemoText}</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 