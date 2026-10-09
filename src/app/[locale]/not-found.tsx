import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('common');
  return (
    <div style={{ minHeight: '40vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div>
        <h1>404</h1>
        <p className="lede" style={{ marginTop: '.6rem' }}>{t('notFound')}</p>
        <p style={{ marginTop: '1.2rem' }}>
          <Link className="btn ghost" href="/">{t('backHome')}</Link>
        </p>
      </div>
    </div>
  );
}
