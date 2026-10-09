'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(fd.entries())),
      });
      setState(res.ok ? 'ok' : 'error');
      if (res.ok) e.currentTarget.reset();
    } catch {
      setState('error');
    }
  }

  return (
    <form className="contact" onSubmit={onSubmit}>
      <label>{t('name')}<input name="name" type="text" required autoComplete="name" /></label>
      <label>{t('org')}<input name="org" type="text" autoComplete="organization" /></label>
      <label>{t('email')}<input name="email" type="email" required autoComplete="email" /></label>
      <label>{t('subject')}
        <select name="subject" defaultValue={t('t1')}>
          <option>{t('t1')}</option><option>{t('t2')}</option><option>{t('t3')}</option><option>{t('t4')}</option>
        </select>
      </label>
      <label>{t('message')}<textarea name="message" required /></label>
      <button className="btn grad" type="submit" style={{ alignSelf: 'flex-start' }} disabled={state === 'sending'}>
        {state === 'sending' ? t('sending') : t('send')}
      </button>
      {state === 'ok' && <p style={{ color: 'var(--teal)', fontSize: '.9rem' }}>{t('ok')}</p>}
      {state === 'error' && <p style={{ color: 'var(--coral)', fontSize: '.9rem' }}>{t('error')}</p>}
    </form>
  );
}
