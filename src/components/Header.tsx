'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import type { Locale } from '@/i18n';

const ITEMS = [
  { href: '', key: 'home' },
  { href: '/work', key: 'work' },
  { href: '/services', key: 'services' },
  { href: '/blog', key: 'blog' },
  { href: '/about', key: 'about' },
  { href: '/contact', key: 'contact' },
] as const;

export default function Header({ locale }: { locale: Locale }) {
  const t = useTranslations('nav');
  const pathname = usePathname() || '/';
  const rest = pathname.replace(/^\/(en|fr)/, '') || '';
  const other: Locale = locale === 'fr' ? 'en' : 'fr';

  return (
    <header className="top">
      <div className="topbar">
        <Link className="brand" href={`/${locale}`}>
          <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
            <defs>
              <linearGradient id="lg" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--teal)" />
                <stop offset="100%" stopColor="var(--indigo)" />
              </linearGradient>
            </defs>
            <rect width="40" height="40" rx="10" fill="url(#lg)" />
            <path d="M12 28V12l16 16V12" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="28" cy="12" r="2.8" fill="var(--gold)" />
          </svg>
          <span>
            <span className="wm">NATAIS</span>
            <span className="sub">North American Technologies &amp; AI Solutions</span>
          </span>
        </Link>
        <nav className="main">
          {ITEMS.map((it) => {
            const href = `/${locale}${it.href}`;
            const active = it.href === '' ? rest === '' : rest.startsWith(it.href);
            return (
              <Link key={it.key} href={href} aria-current={active ? 'page' : undefined}>
                {t(it.key)}
              </Link>
            );
          })}
          <span className="langtoggle">
            <Link href={`/en${rest}`} aria-current={locale === 'en' ? 'true' : undefined} hrefLang="en">EN</Link>
            <Link href={`/fr${rest}`} aria-current={locale === 'fr' ? 'true' : undefined} hrefLang="fr">FR</Link>
          </span>
        </nav>
      </div>
    </header>
  );
}
