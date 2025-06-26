"use client"

import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  project: {
    title: string
    description: string
    year: string
    tech: string[]
    hasLiveDemo: boolean
    repoUrl: string
    liveDemoUrl?: string
    imageUrl: string
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
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
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
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              <span className="text-sm">{viewCodeText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            {project.hasLiveDemo && project.liveDemoUrl && (
              <Link
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                <span className="text-sm">{liveDemoText}</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 