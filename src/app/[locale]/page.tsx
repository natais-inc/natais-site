import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n';
import HeroArt from '@/components/HeroArt';
import Marquee from '@/components/Marquee';
import Reveal from '@/components/Reveal';
import ProductCards from '@/components/ProductCards';
import EcoSection from '@/components/EcoSection';
import PostCard from '@/components/PostCard';
import { allPostsSorted } from '@/content/posts';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('hero');
  const h = useTranslations('home');
  const posts = allPostsSorted().slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="blobs" aria-hidden="true">
          <i className="blob b1" /><i className="blob b2" /><i className="blob b3" /><i className="blob b4" />
        </div>
        <div className="hero-copy stag">
          <span className="eyebrow">{t('eyebrow')}</span>
          <h1>{t('titleA')}<span className="grad">{t('titleGrad')}</span>{t('titleB')}</h1>
          <p className="lede">{t('lede')}</p>
          <div className="paths">
            <Link className="path employers" href={`/${locale}/work`}>
              <span className="k">{t('pathEmployersKey')}</span>
              <span className="t">{t('pathEmployersTitle')}</span>
              <span className="d">{t('pathEmployersDesc')}</span>
              <span className="go">{t('pathEmployersGo')}</span>
            </Link>
            <Link className="path partners" href={`/${locale}/about`}>
              <span className="k">{t('pathPartnersKey')}</span>
              <span className="t">{t('pathPartnersTitle')}</span>
              <span className="d">{t('pathPartnersDesc')}</span>
              <span className="go">{t('pathPartnersGo')}</span>
            </Link>
          </div>
        </div>
        <HeroArt />
      </section>

      <Marquee />

      <Reveal>
        <span className="eyebrow">{h('shippedEyebrow')}</span>
        <h2 style={{ margin: '.7rem 0' }}>{h('shippedTitle')}</h2>
        <p className="lede">{h('shippedLede')}</p>
      </Reveal>

      <Reveal><ProductCards /></Reveal>

      <Reveal><EcoSection /></Reveal>

      <Reveal>
        <span className="eyebrow">Blog</span>
        <h2 style={{ margin: '.7rem 0' }}>{h('blogTitle')}</h2>
      </Reveal>

      <Reveal>
        <div className="posts">
          {posts.map((p) => <PostCard key={p.slug} post={p} locale={locale as Locale} />)}
        </div>
      </Reveal>

      <Reveal>
        <div className="band">
          <div>
            <h2>{h('ctaTitle')}</h2>
            <p style={{ marginTop: '.4rem' }}>{h('ctaLede')}</p>
          </div>
          <Link className="btn" href={`/${locale}/contact`}>{h('ctaButton')}</Link>
        </div>
      </Reveal>
    </>
  );
}
