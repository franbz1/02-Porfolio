"use client"

import { Download, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "../../hooks/useLanguage"
import { translations } from "../../lib/translations"
import { useState } from "react"
import { useToast } from "../../hooks/use-toast"

export default function AboutSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const { toast } = useToast()
  const [isDownloading, setIsDownloading] = useState(false)

  const getCVFileName = () => {
    switch (language) {
      case 'es':
        return 'CV_Francisco_Ruales_2025_ES.pdf'
      case 'en':
        return 'CV_Francisco_Ruales_2025_EN.pdf'
      default:
        return 'CV_Francisco_Ruales_2025_ES.pdf'
    }
  }

  const handleDownload = async () => {
    if (isDownloading) return

    setIsDownloading(true)
    const fileName = getCVFileName()
    const filePath = `/${fileName}`

    try {
      // Verificar si el archivo existe
      const response = await fetch(filePath, { method: 'HEAD' })
      
      if (!response.ok) {
        throw new Error(`Archivo no encontrado: ${response.status}`)
      }

      // Crear y ejecutar la descarga
      const link = document.createElement('a')
      link.href = filePath
      link.download = fileName
      link.style.display = 'none'
      
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      // Mostrar notificación de éxito
      toast({
        title: language === 'es' ? "Descarga iniciada" : "Download started",
        description: language === 'es' 
          ? "El CV se está descargando..." 
          : "The CV is being downloaded...",
      })

    } catch (error) {
      console.error('Error al descargar el CV:', error)
      
      // Mostrar notificación de error
      toast({
        title: language === 'es' ? "Error en la descarga" : "Download error",
        description: language === 'es' 
          ? "No se pudo descargar el CV. Por favor, inténtalo de nuevo." 
          : "Could not download the CV. Please try again.",
        variant: "destructive"
      })
    } finally {
      setIsDownloading(false)
    }
  }

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
              <Button 
                onClick={handleDownload} 
                disabled={isDownloading}
                className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-900 rounded-full px-8 py-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Download className="w-4 h-4 mr-2" />
                )}
                {isDownloading 
                  ? (language === 'es' ? 'Descargando...' : 'Downloading...') 
                  : t.about.downloadResume
                }
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