import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { posts, getPost } from '@/content/posts';
import { formatDate } from '@/components/PostCard';
import { locales, type Locale } from '@/i18n';
import { site } from '@/content/site';

export function generateStaticParams() {
  return locales.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: { locale: string; slug: string } }): Promise<Metadata> {
  const post = getPost(params.slug);
  if (!post) return {};
  const l = params.locale as Locale;
  return {
    title: post.title[l],
    description: post.excerpt[l],
    alternates: {
      canonical: `/${l}/blog/${post.slug}`,
      languages: { en: `/en/blog/${post.slug}`, fr: `/fr/blog/${post.slug}` },
    },
    openGraph: { type: 'article', title: post.title[l], description: post.excerpt[l], publishedTime: post.date },
  };
}

export default async function ArticlePage({ params }: { params: { locale: string; slug: string } }) {
  unstable_setRequestLocale(params.locale);
  const post = getPost(params.slug);
  if (!post) notFound();
  const l = params.locale as Locale;
  const t = await getTranslations({ locale: params.locale, namespace: 'blog' });

  const ld = post.status === 'published' ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title[l],
    description: post.excerpt[l],
    datePublished: post.date,
    inLanguage: l === 'fr' ? 'fr-CA' : 'en-CA',
    author: { '@type': 'Person', name: 'Magloire Pondi Simb' },
    publisher: { '@type': 'Organization', name: site.legalName },
    mainEntityOfPage: `${site.url}/${l}/blog/${post.slug}`,
  } : null;

  return (
    <article className="full">
      {ld && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />}
      <span className="kicker">{post.category[l]}</span>
      <h1>{post.title[l]}</h1>
      <div className="byline">
        <b>Magloire Pondi Simb</b> · {t('role')} · {formatDate(post.date, l)}
      </div>

      {post.body ? (
        <>
          {post.body[l].map((b, i) => {
            if (b.type === 'h2') return <h2 key={i}>{b.text}</h2>;
            if (b.type === 'stat') return (
              <div className="stat" key={i}>
                <span className="big">{b.big}</span>
                <span className="cap">{b.caption}</span>
              </div>
            );
            return <p key={i}>{b.text}</p>;
          })}
          {post.sources && post.sources.length > 0 && (
            <div className="sources">
              <h4>{t('sources')}</h4>
              <ol>
                {post.sources.map((s, i) => (
                  <li key={i}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title[l]}</a></li>
                ))}
              </ol>
            </div>
          )}
        </>
      ) : (
        <>
          <p className="lede">{post.excerpt[l]}</p>
          <div className="warn">{t('notWritten')} — {t('scheduledFor')} {formatDate(post.date, l)}.</div>
        </>
      )}

      <Link className="btn ghost" href={`/${l}/blog`} style={{ alignSelf: 'flex-start' }}>← {t('back')}</Link>
    </article>
  );
}
