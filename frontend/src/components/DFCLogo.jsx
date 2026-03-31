export default function DFCLogo({ size = 48 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Desi Film Club SJSU logo"
      role="img"
    >
      {/* Dark background circle */}
      <circle cx="24" cy="24" r="23" fill="#0D1B2A" stroke="#D4AF37" strokeWidth="1.5" />

      {/* Film perforation dots around the ring */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const r = 20;
        const x = 24 + r * Math.cos(rad);
        const y = 24 + r * Math.sin(rad);
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={i % 2 === 0 ? 1.2 : 0.6}
            fill="#D4AF37"
          />
        );
      })}

      {/* DFC text centered */}
      <text
        x="24"
        y="26.5"
        textAnchor="middle"
        fill="#D4AF37"
        fontSize="9"
        fontWeight="bold"
        fontFamily="'Playfair Display', serif"
        letterSpacing="0.5"
      >
        DFC
      </text>

      {/* SJSU at top arc */}
      <path
        id="topArc"
        d="M 10 24 A 14 14 0 0 1 38 24"
        fill="none"
      />
      <text fill="#D4AF37" fontSize="4" fontFamily="Inter, sans-serif" letterSpacing="1">
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          SJSU
        </textPath>
      </text>

      {/* DESI FILM CLUB at bottom arc */}
      <path
        id="bottomArc"
        d="M 8 26 A 16 16 0 0 0 40 26"
        fill="none"
      />
      <text fill="#D4AF37" fontSize="3" fontFamily="Inter, sans-serif" letterSpacing="0.8">
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          DESI FILM CLUB
        </textPath>
      </text>
    </svg>
  );
}
