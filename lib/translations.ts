export const translations = {
  en: {
    nav: {
      home: "Home",
      work: "Portfolio",
      about: "About",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Francisco Ruales",
      description:
        "Full-stack engineer passionate about crafting scalable web solutions that generate real impact.",
    },
    work: {
      title: "Selected Projects",
      viewCode: "View Code",
      liveDemo: "Live Demo",
      projects: [
        {
          title: "Hotel San Miguel - Hotel Management System",
          description:
            "Full-stack platform built with NestJS and Next.js for end-to-end hotel operations: check-in link generation, JWT security, real-time SSE notifications, cron-jobs, and integration with TRA & legacy SIRE via Playwright—all documented with Swagger and developed under TDD.",
          tech: [
            "NestJS",
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "JWT",
            "Playwright",
            "SSE",
            "Cron",
            "Jest",
            "Swagger",
            "Tailwind CSS",
          ],
          year: "2025",
          hasLiveDemo: false,
          repoUrl: "https://github.com/franbz1/hotel-san-miguel",
          imageUrl: "/hsm.webp",
        },
        {
          title: "Hotel San Miguel Frontend",
          description:
            "Next.js frontend for hotel check-in flows, featuring dynamic forms (Zod & React Hook Form), global state with React Query & Context, and UI components via shadcn/ui and Tailwind CSS.",
          tech: [
            "Next.js",
            "TypeScript",
            "React Query",
            "React Hook Form",
            "Zod",
            "Tailwind CSS",
            "shadcn/ui",
          ],
          year: "2025",
          hasLiveDemo: false,
          repoUrl: "https://github.com/franbz1/hotel-san-miguel-f",
          imageUrl: "/hsmf.webp",
        },
        {
          title: "I-C-T-P – Project Management App",
          description:
            "Expo-based React Native app developed in a Parquesoft hackathon for electrical engineering firm I-C-T-P. Provides project dashboards, task tracking, activity logs, employee roles, and real-time Firebase updates.",
          tech: [
            "React Native",
            "Expo",
            "Firebase",
            "Firestore",
            "Firebase Auth",
            "Firebase Storage",
            "NativeWind",
          ],
          year: "2024",
          hasLiveDemo: false,
          repoUrl: "https://github.com/franbz1/I-C-T-P",
          imageUrl: "/ictp.webp",
        },
        {
          title: "Parabolic Motion Simulator",
          description:
            "Interactive React & TypeScript app visualizing projectile trajectories and interception in real time. Uses Canvas API for smooth animations, Vite for fast development, and Vitest for unit testing of kinematic calculations.",
          tech: ["React", "TypeScript", "Vite", "Canvas API", "Vitest", "ESLint"],
          year: "2025",
          hasLiveDemo: true,
          repoUrl: "https://github.com/franbz1/taller-parabola",
          liveDemoUrl: "https://franbz1.github.io/taller-parabola/",
          imageUrl: "/tllp.webp",
        },
        {
          title: "Matrix & Vector Calculator",
          description:
            "Educational web tool with React & TypeScript offering detailed, step-by-step matrix (determinants, inverses, Cramer) and vector (dot/cross product, angles, projections) calculations, enhanced with Tailwind CSS, Lucide icons and Framer Motion.",
          tech: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Lucide React",
            "Framer Motion",
            "shadcn/ui",
          ],
          year: "2025",
          hasLiveDemo: true,
          repoUrl: "https://github.com/franbz1/02-Algebra-linea",
          liveDemoUrl: "https://franbz1.github.io/02-Algebra-linea/",
          imageUrl: "/cm.webp",
        },
      ],
    },
    about: {
      title: "About Me",
      description: [
        "I'm a Software Engineering student 4.8 GPA and full-stack developer with 5+ years of hands-on experience. I love breaking down complex problems into clear steps, leading teams, and delivering scalable solutions.",
        "Outside of code, I tutor at UCC, explore cloud architectures (Clean, Hexagonal, Event-Driven), and co-run a gift-shop startup, learning brand building and finance.",
      ],
      downloadResume: "Download Resume",
      experience: {
        title: "Experience",
        items: [
          {
            title: "Full-Stack Developer & Product Founder",
            company: "Hotel San Miguel",
            period: "Nov 2024 — Present",
            location: "Pasto, Colombia",
          },
          {
            title: "Hackathon Team Leader",
            company: "Parquesoft Nariño",
            period: "Nov 2024",
            location: "Pasto, Colombia",
          },
          {
            title: "Programming Tutor",
            company: "Universidad Cooperativa de Colombia",
            period: "2024 — Present",
            location: "Pasto, Colombia",
          },
        ],
      },
      technologies: {
        title: "Tech Stack",
        items: [
          "TypeScript",
          "Next.js",
          "NestJS",
          "React",
          "React Native",
          "Prisma",
          "PostgreSQL",
          "Firebase",
          "Docker",
          "GitHub Actions",
        ],
      },
    },
    contact: {
      title: "Let's Build Together",
      description:
        "I'm eager to tackle new challenges and collaborate on impactful projects. Reach out and let's make it happen!",
      email: "franciscorualesp15@gmail.com",
      phone: "+57 321 661 1888",
    },
    footer: {
      copyright:
        "Crafted with care—and a passion for code.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      work: "Portafolio",
      about: "Acerca",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Francisco Ruales",
      description:
        "Ingeniero de software full-stack apasionado por crear soluciones web escalables que generan impacto real.",
    },
    work: {
      title: "Proyectos Destacados",
      viewCode: "Ver Código",
      liveDemo: "Demo en Vivo",
      projects: [
        {
          title: "Hotel San Miguel - Sistema de Gestión Hotelera",
          description:
            "Plataforma full-stack con NestJS y Next.js para operaciones hoteleras completas: generación de links de check-in, seguridad JWT, notificaciones SSE en tiempo real, cron-jobs e integración con TRA y SIRE legacy vía Playwright, documentada con Swagger y desarrollada bajo TDD.",
          tech: [
            "NestJS",
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "JWT",
            "Playwright",
            "SSE",
            "Cron",
            "Jest",
            "Swagger",
            "Tailwind CSS",
          ],
          year: "2025",
          hasLiveDemo: false,
          repoUrl: "https://github.com/franbz1/hotel-san-miguel-f",
          imageUrl: "/hsm.webp",
        },
        {
          title: "Hotel San Miguel Frontend",
          description:
            "Frontend en Next.js para flujos de check-in hotelero, con formularios dinámicos (Zod & React Hook Form), estado global con React Query y Context, y componentes UI usando shadcn/ui y Tailwind CSS.",
          tech: [
            "Next.js",
            "TypeScript",
            "React Query",
            "React Hook Form",
            "Zod",
            "Tailwind CSS",
            "shadcn/ui",
          ],
          year: "2025",
          hasLiveDemo: false,
          repoUrl: "https://github.com/franbz1/hotel-san-miguel",
          imageUrl: "/hsmf.webp",
        },
        {
          title: "I-C-T-P – App de Gestión de Proyectos",
          description:
            "App Expo React Native desarrollada en hackaton Parquesoft para I-C-T-P, con dashboard de proyectos, seguimiento de tareas, bitácoras, gestión de roles y actualizaciones en tiempo real con Firebase.",
          tech: [
            "React Native",
            "Expo",
            "Firebase",
            "Firestore",
            "Firebase Auth",
            "Firebase Storage",
            "NativeWind",
          ],
          year: "2024",
          hasLiveDemo: false,
          repoUrl: "https://github.com/franbz1/I-C-T-P",
          imageUrl: "/ictp.webp",
        },
        {
          title: "Simulador de Movimiento Parabólico",
          description:
            "App interactiva en React & TypeScript para visualizar trayectorias parabólicas e intercepciones en tiempo real. Usa Canvas API para animaciones fluidas, Vite para dev rápido y Vitest para tests de cálculos cinemáticos.",
          tech: ["React", "TypeScript", "Vite", "Canvas API", "Vitest", "ESLint"],
          year: "2025",
          hasLiveDemo: true,
          repoUrl: "https://github.com/franbz1/taller-parabola",
          liveDemoUrl: "https://franbz1.github.io/taller-parabola/",
          imageUrl: "/tllp.webp",
        },
        {
          title: "Calculadora de Matrices y Vectores",
          description:
            "Herramienta educativa con React & TypeScript que ofrece calculadoras de matrices (determinantes, inversas, sistemas) y vectores (producto escalar/cruz, ángulos, proyecciones), mostrando pasos detallados y visualizaciones gráficas.",
          tech: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "Lucide React",
            "Framer Motion",
            "shadcn/ui",
          ],
          year: "2025",
          hasLiveDemo: true,
          repoUrl: "https://github.com/franbz1/02-Algebra-linea",
          liveDemoUrl: "https://franbz1.github.io/02-Algebra-linea/",
          imageUrl: "/cm.webp",
        },
      ],
    },
    about: {
      title: "Acerca de Mí",
      description: [
        "Soy estudiante de Ingeniería de Software Promedio de 4.8 y desarrollador full-stack con más de 5 años de experiencia práctica. Disfruto descomponer problemas complejos, liderar equipos y entregar soluciones escalables.",
        "Fuera del código, doy tutorías en la UCC, exploro arquitecturas cloud (Clean, Hexagonal, Event-Driven) y co-dirijo una startup de artículos de regalo, aprendiendo sobre marca y finanzas.",
      ],
      downloadResume: "Descargar CV",
      experience: {
        title: "Experiencia",
        items: [
          {
            title: "Desarrollador Full-Stack & Fundador de Producto",
            company: "Hotel San Miguel",
            period: "Nov 2024 — Actualidad",
            location: "Pasto, Colombia",
          },
          {
            title: "Líder de Hackathon",
            company: "Parquesoft Nariño",
            period: "Nov 2024",
            location: "Pasto, Colombia",
          },
          {
            title: "Tutor de Programación",
            company: "Universidad Cooperativa de Colombia",
            period: "2024 — Actualidad",
            location: "Pasto, Colombia",
          },
        ],
      },
      technologies: {
        title: "Stack Técnico",
        items: [
          "TypeScript",
          "Next.js",
          "NestJS",
          "React",
          "React Native",
          "Prisma",
          "PostgreSQL",
          "Firebase",
          "Docker",
          "GitHub Actions",
        ],
      },
    },
    contact: {
      title: "Colaboremos",
      description:
        "Me entusiasman los nuevos retos y proyectos con impacto. ¡Hablemos y hagamos algo increíble!",
      email: "franciscorualesp15@gmail.com",
      phone: "+57 321 661 1888",
    },
    footer: {
      copyright:
        "Hecho con pasión y buen código.",
    },
  },
};

export type TranslationKey = keyof typeof translations.en;
