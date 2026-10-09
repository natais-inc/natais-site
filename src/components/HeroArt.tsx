export default function HeroArt() {
  return (
    <svg className="hero-art" viewBox="0 0 420 340" role="img" aria-label="NATAIS products network">
      <defs>
        <linearGradient id="hb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--teal)" stopOpacity=".16" />
          <stop offset="50%" stopColor="var(--indigo)" stopOpacity=".12" />
          <stop offset="100%" stopColor="var(--coral)" stopOpacity=".14" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="404" height="324" rx="22" fill="url(#hb)" />
      <g fill="none" strokeWidth="2">
        <path className="flow" d="M210 100 C 150 120, 100 180, 90 250" stroke="var(--teal)" strokeOpacity=".6" />
        <path className="flow" d="M210 100 C 270 120, 320 180, 330 250" stroke="var(--indigo)" strokeOpacity=".6" />
      </g>
      <g stroke="var(--paper)" strokeWidth="3">
        <circle className="nd" cx="210" cy="100" r="8" fill="var(--indigo)" />
        <circle className="nd" cx="90" cy="250" r="7" fill="var(--teal)" />
        <circle className="nd" cx="330" cy="250" r="7" fill="var(--coral)" />
      </g>
      <g fontFamily="Archivo, sans-serif" fontSize="11" fontWeight="700" fill="var(--ink-faint)">
        <text x="210" y="80" textAnchor="middle">NATAIS</text>
        <text x="90" y="278" textAnchor="middle">CarpoolWork</text>
        <text x="330" y="278" textAnchor="middle">Franchir</text>
      </g>
    </svg>
  );
}
