import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Reveal from '@/components/Reveal';
import { site } from '@/content/site';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return { title: t('about'), description: t('aboutDesc'), alternates: { canonical: `/${locale}/about`, languages: { en: '/en/about', fr: '/fr/about' } } };
}

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('about');
  const nav = useTranslations('nav');
  return (
    <>
      <div>
        <span className="eyebrow">{nav('about')}</span>
        <h1 style={{ margin: '.6rem 0' }}>{t('titleA')}<span className="grad">{t('titleGrad')}</span>.</h1>
      </div>

      <div className="split" style={{ gridTemplateColumns: 'minmax(0,270px) minmax(0,1fr)' }}>
        <div className="portrait">{t('photo')}</div>
        <div>
          <h2>{t('founderRole')}</h2>
          <p style={{ marginTop: '.9rem' }}>{t('bio1')}</p>
          <p style={{ marginTop: '.9rem' }}>{t('bio2')}</p>
        </div>
      </div>

      <Reveal>
        <h2>{t('sensibilityTitle')}</h2>
        <p className="lede" style={{ marginTop: '.7rem' }}>{t('sensibility')}</p>
      </Reveal>

      <Reveal>
        <h2>{t('identifiersTitle')}</h2>
        <p className="lede" style={{ margin: '.6rem 0 1rem' }}>{t('identifiersLede')}</p>
        <dl className="facts">
          <div><dt>{t('legalName')}</dt><dd>{site.legalName}</dd></div>
          <div><dt>{t('corpNumber')}</dt><dd>{site.corporationNumber}</dd></div>
          <div><dt>{t('bizNumber')}</dt><dd>{site.businessNumber}</dd></div>
          <div><dt>{t('incorporated')}</dt><dd>{site.incorporated}</dd></div>
          <div><dt>{t('act')}</dt><dd>CBCA / LCSA</dd></div>
          <div><dt>{t('office')}</dt><dd>{site.address.city}, {site.address.region}</dd></div>
          <div><dt>{t('territory')}</dt><dd>{t('territoryValue')}</dd></div>
          <div><dt>{t('markets')}</dt><dd>{t('marketsValue')}</dd></div>
        </dl>
      </Reveal>

      <Reveal>
        <h2>{t('notTitle')}</h2>
        <ul className="plain" style={{ marginTop: '.8rem' }}>
          <li>{t('not1')}</li><li>{t('not2')}</li><li>{t('not3')}</li>
        </ul>
      </Reveal>
    </>
  );
}
