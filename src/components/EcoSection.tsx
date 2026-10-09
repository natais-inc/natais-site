import { useTranslations } from 'next-intl';
import EcoArt from './EcoArt';

export default function EcoSection() {
  const t = useTranslations('eco');
  return (
    <div className="eco">
      <div>
        <span className="eyebrow">{t('eyebrow')}</span>
        <h2 style={{ margin: '.7rem 0' }}>{t('title')}</h2>
        <p>{t('body')}</p>
        <div className="ecogrid">
          <div className="ecoitem"><span className="n">{t('i1n')}</span><span className="l">{t('i1l')}</span></div>
          <div className="ecoitem"><span className="n">{t('i2n')}</span><span className="l">{t('i2l')}</span></div>
          <div className="ecoitem"><span className="n">{t('i3n')}</span><span className="l">{t('i3l')}</span></div>
        </div>
        <p className="ecofine"><b>{t('fineLead')}</b>{t('fine')}</p>
      </div>
      <EcoArt />
    </div>
  );
}
