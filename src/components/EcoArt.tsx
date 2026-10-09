export default function EcoArt() {
  return (
    <svg viewBox="0 0 320 260" style={{ width: '100%', height: 'auto' }} aria-hidden="true">
      <g fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2">
        <path className="flow" d="M40 210 C 110 210, 120 120, 190 120" />
        <path className="flow" d="M190 120 C 250 120, 250 60, 285 60" />
      </g>
      <g fill="rgba(255,255,255,.9)">
        <path className="lf" d="M60 150c0-24 20-44 44-44 0 24-20 44-44 44z" />
        <path className="lf" d="M150 96c0-24 20-44 44-44 0 24-20 44-44 44z" />
        <path className="lf" d="M228 176c0-24 20-44 44-44 0 24-20 44-44 44z" />
      </g>
      <g stroke="rgba(255,255,255,.9)" strokeWidth="3" fill="rgba(255,255,255,.25)">
        <circle cx="40" cy="210" r="7" /><circle cx="190" cy="120" r="7" /><circle cx="285" cy="60" r="7" />
      </g>
    </svg>
  );
}
