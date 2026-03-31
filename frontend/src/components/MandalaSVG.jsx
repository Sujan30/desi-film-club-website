export default function MandalaSVG({ size = 400, opacity = 0.15, className = '' }) {
  const colors = ['#C41E3A', '#D4AF37', '#E8651A', '#800020'];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      {/* Concentric circles */}
      {[180, 150, 120, 90, 60, 30].map((r, i) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          stroke={colors[i % colors.length]}
          strokeWidth="1"
          fill="none"
        />
      ))}

      {/* Outer petal layer — 16 petals */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16;
        const rad = (angle * Math.PI) / 180;
        const r = 165;
        const cx = 200 + r * Math.cos(rad);
        const cy = 200 + r * Math.sin(rad);
        return (
          <ellipse
            key={`outer-${i}`}
            cx={cx}
            cy={cy}
            rx="10"
            ry="18"
            transform={`rotate(${angle + 90}, ${cx}, ${cy})`}
            fill={colors[i % colors.length]}
            fillOpacity="0.6"
          />
        );
      })}

      {/* Mid petal layer — 12 petals */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30) + 15;
        const rad = (angle * Math.PI) / 180;
        const r = 125;
        const cx = 200 + r * Math.cos(rad);
        const cy = 200 + r * Math.sin(rad);
        return (
          <ellipse
            key={`mid-${i}`}
            cx={cx}
            cy={cy}
            rx="8"
            ry="16"
            transform={`rotate(${angle + 90}, ${cx}, ${cy})`}
            fill={colors[(i + 1) % colors.length]}
            fillOpacity="0.5"
          />
        );
      })}

      {/* Inner petal layer — 8 petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45);
        const rad = (angle * Math.PI) / 180;
        const r = 80;
        const cx = 200 + r * Math.cos(rad);
        const cy = 200 + r * Math.sin(rad);
        return (
          <ellipse
            key={`inner-${i}`}
            cx={cx}
            cy={cy}
            rx="7"
            ry="14"
            transform={`rotate(${angle + 90}, ${cx}, ${cy})`}
            fill={colors[(i + 2) % colors.length]}
            fillOpacity="0.7"
          />
        );
      })}

      {/* Center dot cluster */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        return (
          <circle
            key={`dot-${i}`}
            cx={200 + 28 * Math.cos(angle)}
            cy={200 + 28 * Math.sin(angle)}
            r="4"
            fill="#D4AF37"
            fillOpacity="0.8"
          />
        );
      })}
      <circle cx="200" cy="200" r="10" fill="#D4AF37" fillOpacity="0.6" />
      <circle cx="200" cy="200" r="4" fill="#D4AF37" />

      {/* Diagonal cross lines */}
      {[0, 45, 90, 135].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line
            key={`line-${angle}`}
            x1={200 - 180 * Math.cos(rad)}
            y1={200 - 180 * Math.sin(rad)}
            x2={200 + 180 * Math.cos(rad)}
            y2={200 + 180 * Math.sin(rad)}
            stroke="#D4AF37"
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
        );
      })}
    </svg>
  );
}
