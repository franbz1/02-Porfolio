import { MetadataRoute } from 'next'

// Configuración para build estático
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/.*'],
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
    ],
    sitemap: 'https://franciscoruales.dev/sitemap.xml',
    host: 'https://franciscoruales.dev',
  }
} 