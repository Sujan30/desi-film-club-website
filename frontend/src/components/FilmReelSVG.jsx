export default function FilmReelSVG({ size = 80, color = '#D4AF37', className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Film reel decorative icon"
      role="img"
      className={className}
    >
      {/* Outer serrated edge */}
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        const rad = (angle * Math.PI) / 180;
        const r1 = 36;
        const r2 = 39;
        const x1 = 40 + r1 * Math.cos(rad);
        const y1 = 40 + r1 * Math.sin(rad);
        const x2 = 40 + r2 * Math.cos(rad);
        const y2 = 40 + r2 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}

      {/* Main outer circle */}
      <circle cx="40" cy="40" r="35" stroke={color} strokeWidth="2" fill="none" />

      {/* Inner ring */}
      <circle cx="40" cy="40" r="28" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.08" />

      {/* 6 oval sprocket holes around center */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const r = 18;
        const cx = 40 + r * Math.cos(angle);
        const cy = 40 + r * Math.sin(angle);
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="4"
            ry="6"
            transform={`rotate(${i * 60}, ${cx}, ${cy})`}
            fill={color}
            fillOpacity="0.7"
          />
        );
      })}

      {/* Center hub */}
      <circle cx="40" cy="40" r="7" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.2" />
      <circle cx="40" cy="40" r="3" fill={color} />
    </svg>
  );
}
