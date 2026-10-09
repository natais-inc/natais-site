import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { site } from '@/content/site';
import type { Locale } from '@/i18n';

export default function Footer({ locale }: { locale: Locale }) {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  return (
    <footer className="site">
      <div className="footin">
        <div>
          <h4>{t('company')}</h4>
          <address>
            North American Technologies<br />and AI Solutions Inc.<br />
            {site.address.street}<br />
            {site.address.city}, {site.address.region} {site.address.postalCode}<br />
            {site.address.country}
          </address>
          <p style={{ fontSize: '.85rem', color: 'var(--ink-faint)', marginTop: '.6rem' }}>{t('coverage')}</p>
        </div>
        <div>
          <h4>{t('productsTitle')}</h4>
          <a href="https://carpoolwork.ca" target="_blank" rel="noopener noreferrer">CarpoolWork</a>
          <a href="https://franchir.app" target="_blank" rel="noopener noreferrer">Franchir</a>
          <Link href={`/${locale}/work`}>{nav('work')}</Link>
        </div>
        <div>
          <h4>{t('explore')}</h4>
          <Link href={`/${locale}/services`}>{nav('services')}</Link>
          <Link href={`/${locale}/blog`}>{nav('blog')}</Link>
          <Link href={`/${locale}/about`}>{nav('about')}</Link>
          <Link href={`/${locale}/privacy`}>{t('privacy')}</Link>
        </div>
        <div>
          <h4>{t('reach')}</h4>
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <div className="legal">
        <span>© {new Date().getFullYear()} {site.legalName}</span>
        <span>{t('rights')}</span>
      </div>
    </footer>
  );
}
