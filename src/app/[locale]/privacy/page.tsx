import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return { title: t('privacy'), alternates: { canonical: `/${locale}/privacy`, languages: { en: '/en/privacy', fr: '/fr/privacy' } } };
}

export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('privacy');
  return (
    <article className="full">
      <h1>{t('title')}</h1>
      <p className="byline">{t('updated')}</p>
      <p>{t('p1')}</p>
      <p>{t('p2')}</p>
      <p>{t('p3')}</p>
      <p>{t('p4')}</p>
    </article>
  );
}
