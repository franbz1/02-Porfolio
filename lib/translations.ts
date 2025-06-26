export const translations = {
  en: {
    nav: {
      home: "Home",
      work: "Work",
      about: "About",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Alex Rivera",
      description: "I craft digital experiences that blend creativity with functionality",
    },
    work: {
      title: "Selected Work",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      projects: [
        {
          title: "Nexus Commerce",
          description: "E-commerce platform with AI-powered recommendations",
          tech: ["Next.js", "TypeScript", "Stripe"],
          year: "2024",
        },
        {
          title: "Mindflow",
          description: "Collaborative workspace for creative teams",
          tech: ["React", "Node.js", "Socket.io"],
          year: "2023",
        },
        {
          title: "DataViz Pro",
          description: "Interactive data visualization dashboard",
          tech: ["Vue.js", "D3.js", "Python"],
          year: "2023",
        },
      ],
    },
    about: {
      title: "About Me",
      description: [
        "I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. I believe in the power of clean code, thoughtful design, and meaningful user experiences.",
        "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
      ],
      downloadResume: "Download Resume",
      experience: {
        title: "Experience",
        items: [
          {
            title: "Senior Full Stack Developer",
            company: "Tech Innovations",
            period: "2022 — Present",
            location: "Remote",
          },
          {
            title: "Frontend Developer",
            company: "Digital Studio",
            period: "2020 — 2022",
            location: "San Francisco",
          },
          {
            title: "Junior Developer",
            company: "StartUp Labs",
            period: "2019 — 2020",
            location: "New York",
          },
        ],
      },
      technologies: {
        title: "Technologies",
        items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "Docker"],
      },
    },
    contact: {
      title: "Let's Work Together",
      description:
        "I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.",
      email: "hello@alexrivera.dev",
      phone: "+1 (234) 567-890",
    },
    footer: {
      copyright: "Crafted with care.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      work: "Trabajo",
      about: "Acerca",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Alex Rivera",
      description: "Creo experiencias digitales que combinan creatividad con funcionalidad",
    },
    work: {
      title: "Trabajo Seleccionado",
      viewCode: "Ver Código",
      liveDemo: "Demo en Vivo",
      projects: [
        {
          title: "Nexus Commerce",
          description: "Plataforma de e-commerce con recomendaciones impulsadas por IA",
          tech: ["Next.js", "TypeScript", "Stripe"],
          year: "2024",
        },
        {
          title: "Mindflow",
          description: "Espacio de trabajo colaborativo para equipos creativos",
          tech: ["React", "Node.js", "Socket.io"],
          year: "2023",
        },
        {
          title: "DataViz Pro",
          description: "Dashboard interactivo de visualización de datos",
          tech: ["Vue.js", "D3.js", "Python"],
          year: "2023",
        },
      ],
    },
    about: {
      title: "Acerca de Mí",
      description: [
        "Soy un desarrollador full-stack apasionado con más de 5 años de experiencia creando soluciones digitales que marcan la diferencia. Creo en el poder del código limpio, el diseño reflexivo y las experiencias de usuario significativas.",
        "Cuando no estoy programando, me encontrarás explorando nuevas tecnologías, contribuyendo a proyectos de código abierto o compartiendo conocimiento con la comunidad de desarrolladores.",
      ],
      downloadResume: "Descargar CV",
      experience: {
        title: "Experiencia",
        items: [
          {
            title: "Desarrollador Full Stack Senior",
            company: "Tech Innovations",
            period: "2022 — Presente",
            location: "Remoto",
          },
          {
            title: "Desarrollador Frontend",
            company: "Digital Studio",
            period: "2020 — 2022",
            location: "San Francisco",
          },
          {
            title: "Desarrollador Junior",
            company: "StartUp Labs",
            period: "2019 — 2020",
            location: "Nueva York",
          },
        ],
      },
      technologies: {
        title: "Tecnologías",
        items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "PostgreSQL", "Docker"],
      },
    },
    contact: {
      title: "Trabajemos Juntos",
      description:
        "Siempre estoy interesado en nuevas oportunidades y proyectos emocionantes. Hablemos sobre cómo podemos dar vida a tus ideas.",
      email: "hello@alexrivera.dev",
      phone: "+1 (234) 567-890",
    },
    footer: {
      copyright: "Hecho con cariño.",
    },
  },
}

export type TranslationKey = keyof typeof translations.en
