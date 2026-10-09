import { useTranslations } from 'next-intl';
import { products } from '@/content/site';

export default function ProductCards() {
  const t = useTranslations('products');
  return (
    <div className="grid3">
      {products.map((p) => (
        <article className="card" key={p.slug} style={{ ['--c' as any]: p.colour }}>
          <div className="top">
            <h3>{p.name}</h3>
            <span className={`status${p.status === 'founder' ? ' ghost' : ''}`}>
              {p.status === 'live' ? t('live') : t('founder')}
            </span>
          </div>
          <p>{t(p.slug)}</p>
          <div className="metrics">
            {p.metrics.map((m) => (
              <div className="metric" key={m.key}>
                <span className="n">{m.n}</span>
                <span className="l">{t(m.key)}</span>
              </div>
            ))}
          </div>
          {p.url ? (
            <a className="cardlink" href={p.url} target="_blank" rel="noopener noreferrer">{p.label} →</a>
          ) : null}
        </article>
      ))}
    </div>
  );
}
