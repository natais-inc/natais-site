import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import PostCard from '@/components/PostCard';
import { allPostsSorted } from '@/content/posts';
import type { Locale } from '@/i18n';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return { title: t('blog'), description: t('blogDesc'), alternates: { canonical: `/${locale}/blog`, languages: { en: '/en/blog', fr: '/fr/blog' } } };
}

export default function BlogPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('blog');
  return (
    <>
      <div>
        <span className="eyebrow">Blog</span>
        <h1 style={{ margin: '.6rem 0' }}>{t('titleA')}<span className="grad">{t('titleGrad')}</span>.</h1>
        <p className="lede">{t('lede')}</p>
      </div>
      <div className="posts">
        {allPostsSorted().map((p) => <PostCard key={p.slug} post={p} locale={locale as Locale} />)}
      </div>
    </>
  );
}
