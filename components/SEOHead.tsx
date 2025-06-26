"use client"

import { useLanguage } from "@/hooks/useLanguage"
import { generateStructuredData } from "@/lib/seo"
import { useEffect } from "react"

export default function SEOHead() {
  const { language } = useLanguage()

  useEffect(() => {
    // Remover datos estructurados existentes
    const existingScript = document.querySelector('#structured-data')
    if (existingScript) {
      existingScript.remove()
    }

    // Agregar nuevos datos estructurados
    const structuredData = generateStructuredData(language)
    const script = document.createElement('script')
    script.id = 'structured-data'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script)

    // Actualizar lang del HTML
    document.documentElement.lang = language === 'es' ? 'es-ES' : 'en-US'

    return () => {
      const script = document.querySelector('#structured-data')
      if (script) {
        script.remove()
      }
    }
  }, [language])

  return null
} 