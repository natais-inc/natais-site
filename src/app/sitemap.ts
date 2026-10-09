import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { posts } from '@/content/posts';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/work', '/services', '/blog', '/about', '/contact', '/privacy'];
  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const page of pages) {
      entries.push({ url: `${site.url}/${locale}${page}`, lastModified: new Date(), changeFrequency: 'monthly', priority: page === '' ? 1 : 0.7 });
    }
    for (const p of posts) {
      entries.push({ url: `${site.url}/${locale}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: 'yearly', priority: 0.6 });
    }
  }
  return entries;
}
