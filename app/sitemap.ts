import type { MetadataRoute } from 'next'

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexoratechnologies.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/packages',
    '/process',
    '/testimonials',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-conditions',
    '/refund-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
