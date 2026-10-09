import type { Metadata } from 'next';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Reveal from '@/components/Reveal';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return { title: t('services'), description: t('servicesDesc'), alternates: { canonical: `/${locale}/services`, languages: { en: '/en/services', fr: '/fr/services' } } };
}

const CARDS = [
  { n: '01', c: 'var(--teal)', k: 's1' },
  { n: '02', c: 'var(--indigo)', k: 's2' },
  { n: '03', c: 'var(--gold)', k: 's3' },
  { n: '04', c: 'var(--coral)', k: 's4' },
] as const;

export default function ServicesPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('services');
  const nav = useTranslations('nav');
  return (
    <>
      <div>
        <span className="eyebrow">{nav('services')}</span>
        <h1 style={{ margin: '.6rem 0' }}>{t('titleA')}<span className="grad">{t('titleGrad')}</span>.</h1>
        <p className="lede">{t('lede')}</p>
      </div>
      <div className="grid3">
        {CARDS.map((c) => (
          <article className="svc" key={c.n} style={{ ['--c' as any]: c.c }}>
            <span className="ic">{c.n}</span>
            <h3>{t(`${c.k}Title`)}</h3>
            <p>{t(`${c.k}Body`)}</p>
            <div className="proof">{t(`${c.k}Proof`)}</div>
          </article>
        ))}
      </div>
      <Reveal>
        <div className="band">
          <div>
            <h2>{t('howTitle')}</h2>
            <p style={{ marginTop: '.4rem' }}>{t('howBody')}</p>
          </div>
          <Link className="btn" href={`/${locale}/contact`}>{t('howButton')}</Link>
        </div>
      </Reveal>
    </>
  );
}
