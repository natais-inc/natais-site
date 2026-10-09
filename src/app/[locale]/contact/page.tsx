import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import ContactForm from '@/components/ContactForm';
import { site } from '@/content/site';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  return { title: t('contact'), description: t('contactDesc'), alternates: { canonical: `/${locale}/contact`, languages: { en: '/en/contact', fr: '/fr/contact' } } };
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('contact');
  return (
    <>
      <div>
        <span className="eyebrow">Contact</span>
        <h1 style={{ margin: '.6rem 0' }}>{t('titleA')}<span className="grad">{t('titleGrad')}</span>.</h1>
        <p className="lede">{t('lede')}</p>
      </div>
      <div className="split">
        <ContactForm />
        <div>
          <h3 style={{ marginBottom: '.6rem' }}>{t('direct')}</h3>
          <p style={{ fontSize: '.9rem', color: 'var(--ink-soft)', marginBottom: '.7rem' }}>{t('coverage')}</p>
          <address>
            North American Technologies<br />and AI Solutions Inc.<br />
            {site.address.street}<br />
            {site.address.city}, {site.address.region} {site.address.postalCode}<br />
            {site.address.country}<br /><br />
            <a href={`tel:${site.phoneHref}`} style={{ color: 'var(--teal)' }}>{site.phone}</a><br />
            <a href={`mailto:${site.email}`} style={{ color: 'var(--teal)' }}>{site.email}</a>
          </address>
          <p style={{ fontSize: '.85rem', color: 'var(--ink-faint)', marginTop: '1rem' }}>{t('serviceLangs')}</p>
        </div>
      </div>
    </>
  );
}
