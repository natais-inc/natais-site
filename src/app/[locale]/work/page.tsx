import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import ProductCards from '@/components/ProductCards';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return { title: t('work'), description: t('workDesc'), alternates: { canonical: `/${locale}/work`, languages: { en: '/en/work', fr: '/fr/work' } } };
}

export default function WorkPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('products');
  const nav = useTranslations('nav');
  return (
    <>
      <div>
        <span className="eyebrow">{nav('work')}</span>
        <h1 style={{ margin: '.6rem 0' }}>{t('pageTitleA')}<span className="grad">{t('pageTitleGrad')}</span>.</h1>
        <p className="lede">{t('pageLede')}</p>
      </div>
      <ProductCards />
    </>
  );
}
