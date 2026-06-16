import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://adithyasgraphics.com'

  const getChangeFrequency = (path: string) => {
    // Home and portfolio pages change more frequently
    if (path === '/' || path === '/portfolio') return 'weekly'
    // Static pages change less frequently
    return 'monthly'
  }

  const getPriority = (path: string) => {
    if (path === '/') return 1.0
    if (path === '/portfolio') return 0.9
    if (path === '/about') return 0.8
    if (path === '/contact') return 0.8
    return 0.7
  }

  const routes = [
    '/',
    '/portfolio',
    '/about',
    '/testimonials',
    '/promises',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: getChangeFrequency(route) as 'weekly' | 'monthly',
    priority: getPriority(route),
  }))
}
