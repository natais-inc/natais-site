import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { Post } from '@/content/posts';
import type { Locale } from '@/i18n';

export function formatDate(date: string, locale: Locale) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString(locale === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
}

export default function PostCard({ post, locale }: { post: Post; locale: Locale }) {
  const t = useTranslations('blog');
  return (
    <Link className="post" href={`/${locale}/blog/${post.slug}`} style={{ ['--c' as any]: post.colour, ['--g' as any]: post.gradient }}>
      <div className="thumb"><span>{post.category[locale]}</span></div>
      <div className="pbody">
        <span className={`pill${post.status === 'published' ? ' pub' : ''}`}>
          {post.status === 'published' ? t('published') : `${t('scheduledFor')} ${formatDate(post.date, locale)}`}
        </span>
        <h3>{post.title[locale]}</h3>
        <p>{post.excerpt[locale]}</p>
        <span className="meta">Magloire Pondi Simb · {formatDate(post.date, locale)}</span>
      </div>
    </Link>
  );
}
