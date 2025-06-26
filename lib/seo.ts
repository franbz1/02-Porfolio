import { Metadata } from 'next'

export interface SEOConfig {
  title: string
  description: string
  url: string
  siteName: string
  locale: string
  alternateLocale: string
  author: {
    name: string
    email: string
    url: string
  }
  social: {
    github: string
    linkedin: string
  }
  images: {
    og: string
  }
}

export const seoConfig: Record<string, SEOConfig> = {
  es: {
    title: 'Francisco Ruales - Desarrollador Full-Stack',
    description: 'Ingeniero de software full-stack especializado en Next.js, React, NestJS y PostgreSQL. Creando soluciones web escalables que generan impacto real.',
    url: 'https://franciscoruales.dev',
    siteName: 'Francisco Ruales - Portafolio',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    author: {
      name: 'Francisco Ruales',
      email: 'franciscorualesp15@gmail.com',
      url: 'https://franciscoruales.dev'
    },
    social: {
      github: 'https://github.com/franbz1',
      linkedin: 'https://linkedin.com/in/francisco-ruales'
    },
    images: {
      og: '/og-image-es.jpg'
    }
  },
  en: {
    title: 'Francisco Ruales - Full-Stack Developer',
    description: 'Full-stack software engineer specializing in Next.js, React, NestJS, and PostgreSQL. Building scalable web solutions that drive real impact.',
    url: 'https://franciscoruales.dev/en',
    siteName: 'Francisco Ruales - Portfolio',
    locale: 'en_US',
    alternateLocale: 'es_ES',
    author: {
      name: 'Francisco Ruales',
      email: 'franciscorualesp15@gmail.com',
      url: 'https://franciscoruales.dev'
    },
    social: {
      github: 'https://github.com/franbz1',
      linkedin: 'https://www.linkedin.com/in/franvz1/'
    },
    images: {
      og: '/og-image-en.jpg'
    }
  }
}

export function generateMetadata(language: string = 'es'): Metadata {
  const config = seoConfig[language] || seoConfig.es

  return {
    title: {
      default: config.title,
      template: `%s | ${config.author.name}`
    },
    description: config.description,
    keywords: [
      'Francisco Ruales',
      'Full-Stack Developer',
      'Desarrollador Full-Stack',
      'Next.js',
      'React',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Software Engineer',
      'Ingeniero de Software',
      'Web Development',
      'Desarrollo Web',
      'Colombia',
      'Pasto'
    ],
    authors: [{ name: config.author.name, url: config.author.url }],
    creator: config.author.name,
    publisher: config.author.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(config.url),
    alternates: {
      canonical: config.url,
      languages: {
        'es-ES': '/',
        'en-US': '/en',
        'x-default': '/'
      }
    },
    openGraph: {
      type: 'website',
      locale: config.locale,
      alternateLocale: config.alternateLocale,
      url: config.url,
      title: config.title,
      description: config.description,
      siteName: config.siteName,
      images: [
        {
          url: config.images.og,
          width: 1200,
          height: 630,
          alt: config.title,
          type: 'image/jpeg',
        }
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    category: 'technology',
    classification: 'Portfolio',
    other: {
      'revisit-after': '7 days',
      'rating': 'General',
      'distribution': 'Global',
    }
  }
}

// Structured Data (JSON-LD)
export function generateStructuredData(language: string = 'es') {
  const config = seoConfig[language] || seoConfig.es
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${config.url}#person`,
        name: config.author.name,
        url: config.url,
        email: config.author.email,
        jobTitle: language === 'es' ? 'Desarrollador Full-Stack' : 'Full-Stack Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Hotel San Miguel'
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Universidad Cooperativa de Colombia'
        },
        knowsAbout: [
          'JavaScript',
          'TypeScript',
          'React',
          'Next.js',
          'NestJS',
          'PostgreSQL',
          'Full-Stack Development',
          'Web Development'
        ],
        sameAs: [
          config.social.github,
          config.social.linkedin
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${config.url}#website`,
        url: config.url,
        name: config.siteName,
        description: config.description,
        inLanguage: config.locale.replace('_', '-'),
        author: {
          '@id': `${config.url}#person`
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${config.url}?q={search_term_string}`,
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': `${config.url}#webpage`,
        url: config.url,
        name: config.title,
        description: config.description,
        inLanguage: config.locale.replace('_', '-'),
        isPartOf: {
          '@id': `${config.url}#website`
        },
        about: {
          '@id': `${config.url}#person`
        },
        datePublished: '2025-01-01',
        dateModified: new Date().toISOString().split('T')[0]
      }
    ]
  }
} 