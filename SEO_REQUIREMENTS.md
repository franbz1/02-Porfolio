# Requisitos SEO para el Portafolio de Francisco Ruales

## Imágenes Requeridas para SEO Completo

### 1. Open Graph Images (Para Redes Sociales)
- **og-image-es.jpg** (1200x630px) - Imagen para redes sociales en español
- **og-image-en.jpg** (1200x630px) - Imagen para redes sociales en inglés

### 2. Favicons y Icons
- **favicon.ico** (32x32px) - Favicon tradicional
- **favicon.svg** - Favicon vectorial
- **favicon-16x16.png** (16x16px)
- **favicon-32x32.png** (32x32px)
- **apple-touch-icon.png** (180x180px) - Para dispositivos Apple
- **android-chrome-192x192.png** (192x192px) - Para Android
- **android-chrome-512x512.png** (512x512px) - Para Android

### 3. Screenshots para PWA
- **screenshot-desktop.jpg** (1280x720px) - Screenshot de escritorio
- **screenshot-mobile.jpg** (390x844px) - Screenshot móvil

### 4. Imagen de Perfil Optimizada
- **pfp porfolio.webp** - Ya existe, pero verificar que esté optimizada

## 🎨 Cómo Generar las Imágenes con Dimensiones Exactas

### Opción 1: Canva (Recomendado - Fácil)

1. **Ve a [Canva.com](https://canva.com)**
2. **Crear diseño personalizado** con estas dimensiones:

#### Para Open Graph (og-image-es.jpg y og-image-en.jpg):
- **Dimensiones**: 1200 x 630 píxeles
- **Contenido sugerido**:
  - Foto de perfil en un lado
  - Nombre: "Francisco Ruales"
  - Título: "Desarrollador Full-Stack" (ES) / "Full-Stack Developer" (EN)
  - Tecnologías: Next.js, React, NestJS, PostgreSQL
  - Fondo atractivo con colores de tu marca

#### Para Favicons:
- **Dimensiones múltiples**: 16x16, 32x32, 180x180, 192x192, 512x512
- **Contenido**: Iniciales "FR" o un logo simple
- **Colores**: Contrastar bien en fondos claros y oscuros

### Opción 2: Figma (Profesional)

1. **Abre [Figma.com](https://figma.com)**
2. **Crear nuevo archivo**
3. **Crear frames con dimensiones exactas**:

```
Frame 1: 1200 x 630 (Open Graph ES)
Frame 2: 1200 x 630 (Open Graph EN)
Frame 3: 180 x 180 (Apple Touch Icon)
Frame 4: 192 x 192 (Android Chrome)
Frame 5: 512 x 512 (Android Chrome Large)
```

### Opción 3: Herramientas Online Especializadas

#### Para Open Graph Images:
- **[OG Image Generator](https://og-image.vercel.app/)**
- **[Social Image Generator](https://www.bannerbear.com/tools/social-media-image-generator/)**

#### Para Favicons:
- **[Favicon.io](https://favicon.io/)** - Genera todos los tamaños automáticamente
- **[RealFaviconGenerator](https://realfavicongenerator.net/)** - Más completo

### Opción 4: Photoshop/GIMP

#### En Photoshop:
1. **Archivo → Nuevo**
2. **Introducir dimensiones exactas** (ej: 1200x630px, 72 DPI)
3. **Diseñar la imagen**
4. **Exportar → Exportar como → JPG/PNG**

#### En GIMP (Gratuito):
1. **Archivo → Imagen nueva**
2. **Establecer dimensiones** (1200x630 para Open Graph)
3. **Crear diseño**
4. **Archivo → Exportar como → .jpg/.png**

## 📐 Plantilla de Contenido para Open Graph

### Para og-image-es.jpg:
```
FRANCISCO RUALES
Desarrollador Full-Stack

Especializado en:
• Next.js & React
• NestJS & Node.js
• PostgreSQL & Prisma
• TypeScript
```

### Para og-image-en.jpg:
```
FRANCISCO RUALES
Full-Stack Developer

Specializing in:
• Next.js & React
• NestJS & Node.js
• PostgreSQL & Prisma
• TypeScript
```

## 🎯 Consejos de Diseño

### Open Graph Images (1200x630):
- **Usar colores de tu marca** (azul, morado de tu portfolio)
- **Texto grande y legible** (mínimo 24px)
- **Imagen de perfil** en un lado
- **Fondo atractivo** pero no muy ocupado
- **Contrastar texto y fondo**

### Favicons:
- **Simple y reconocible** a tamaños pequeños
- **Usar iniciales "FR"** o un símbolo
- **Bueno en fondo claro y oscuro**
- **Bordes suaves** para mejor visualización

## 🛠️ Herramientas Automáticas Recomendadas

### 1. Real Favicon Generator
- **URL**: [realfavicongenerator.net](https://realfavicongenerator.net/)
- **Beneficio**: Genera TODOS los favicons necesarios desde una imagen
- **Cómo usar**:
  1. Sube una imagen cuadrada de alta resolución (512x512 mínimo)
  2. Ajusta para cada plataforma
  3. Descarga el paquete completo
  4. Copia los archivos a `/public/`

### 2. OG Image Generator
- **URL**: [og-image.vercel.app](https://og-image.vercel.app/)
- **Beneficio**: Crea Open Graph images rápidamente
- **Personalizable** con texto, colores y fuentes

## 📋 Checklist Final

- [ ] og-image-es.jpg (1200x630)
- [ ] og-image-en.jpg (1200x630)
- [ ] favicon.ico (32x32)
- [ ] favicon.svg
- [ ] favicon-16x16.png
- [ ] favicon-32x32.png
- [ ] apple-touch-icon.png (180x180)
- [ ] android-chrome-192x192.png
- [ ] android-chrome-512x512.png
- [ ] screenshot-desktop.jpg (1280x720)
- [ ] screenshot-mobile.jpg (390x844)

## Mejoras Implementadas

### ✅ Configuración SEO Completa
- **Metadata dinámica** con soporte multiidioma (español/inglés)
- **Open Graph tags** optimizados para redes sociales
- **Structured Data (JSON-LD)** para mejor indexación
- **Sitemap.xml** dinámico
- **Robots.txt** optimizado
- **Manifest.json** para PWA

### ✅ Optimizaciones Técnicas
- **Next.js config** optimizado para SEO y performance
- **Headers de seguridad** configurados
- **Compresión GZIP** habilitada
- **Cache headers** optimizados
- **Etiquetas semánticas** mejoradas (itemProp, Schema.org)

### ✅ Componentes SEO
- **SEOHead component** para datos estructurados dinámicos
- **Metadata multiidioma** automática
- **Alt texts** descriptivos en imágenes
- **Priority loading** para imagen de perfil

## Próximos Pasos

1. **Generar las imágenes requeridas** usando las herramientas mencionadas
2. **Subir las imágenes** al directorio `/public/`
3. **Verificar URLs** en `lib/seo.ts` (cambiar dominio si es necesario)
4. **Probar el SEO** con herramientas como:
   - Google PageSpeed Insights
   - Google Search Console
   - Facebook Sharing Debugger

## Configuración de Dominio

Actualmente configurado para: `https://franciscoruales.dev`

Si tu dominio es diferente, actualiza la URL en:
- `lib/seo.ts` (línea 15 y 37)
- `app/sitemap.ts` (línea 4)
- `app/robots.ts` (línea 22 y 23)

## Herramientas de Validación SEO

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Schema.org Validator](https://validator.schema.org/)

## Puntuación SEO Esperada

Con estas optimizaciones deberías obtener:
- **Google PageSpeed**: 95-100/100
- **SEO Score**: 95-100/100
- **Accessibility**: 95-100/100
- **Best Practices**: 95-100/100 