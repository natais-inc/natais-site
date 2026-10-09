import { useTranslations } from 'next-intl';

const KEYS = ['w1','w2','w3','w4','w5','w6','w7','w8','w9','w10','w11'] as const;

export default function Marquee() {
  const t = useTranslations('marquee');
  const words = KEYS.map((k) => t(k));
  const items = [...words, ...words];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="mtrack">{items.map((w, i) => <span key={i}>{w}</span>)}</div>
    </div>
  );
}
