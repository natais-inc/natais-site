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
        <path className="flow" d="M70 258 C 130 258, 145 155, 205 155" stroke="var(--teal)" strokeOpacity=".6" />
        <path className="flow" d="M205 155 C 265 155, 275 72, 345 72" stroke="var(--indigo)" strokeOpacity=".6" />
        <path className="flow" d="M70 258 C 165 258, 195 262, 345 242" stroke="var(--coral)" strokeOpacity=".55" />
        <path className="flow" d="M205 155 C 235 195, 275 225, 345 242" stroke="var(--gold)" strokeOpacity=".55" />
      </g>
      <g stroke="var(--paper)" strokeWidth="3">
        <circle className="nd" cx="70" cy="258" r="7" fill="var(--teal)" />
        <circle className="nd" cx="205" cy="155" r="7" fill="var(--indigo)" />
        <circle className="nd" cx="345" cy="72" r="7" fill="var(--gold)" />
        <circle className="nd" cx="345" cy="242" r="7" fill="var(--coral)" />
      </g>
      <g fontFamily="Archivo, sans-serif" fontSize="11" fontWeight="700" fill="var(--ink-faint)">
        <text x="70" y="284" textAnchor="middle">CarpoolWork</text>
        <text x="345" y="58" textAnchor="middle">Franchir</text>
        <text x="345" y="268" textAnchor="middle">Écoles</text>
        <text x="205" y="137" textAnchor="middle">NATAIS</text>
      </g>
    </svg>
  );
}
