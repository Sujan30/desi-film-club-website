import MandalaSVG from './MandalaSVG';

function LotusSVG() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
      {/* Lotus petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = i * 45;
        const rad = (angle * Math.PI) / 180;
        const cx = 40 + 22 * Math.cos(rad);
        const cy = 40 + 22 * Math.sin(rad);
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="7"
            ry="14"
            transform={`rotate(${angle + 90}, ${cx}, ${cy})`}
            fill={i % 2 === 0 ? '#C41E3A' : '#D4AF37'}
            fillOpacity="0.7"
          />
        );
      })}
      {/* Inner petals */}
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = i * 60 + 30;
        const rad = (angle * Math.PI) / 180;
        const cx = 40 + 12 * Math.cos(rad);
        const cy = 40 + 12 * Math.sin(rad);
        return (
          <ellipse
            key={i}
            cx={cx}
            cy={cy}
            rx="4"
            ry="9"
            transform={`rotate(${angle + 90}, ${cx}, ${cy})`}
            fill="#E8651A"
            fillOpacity="0.8"
          />
        );
      })}
      <circle cx="40" cy="40" r="7" fill="#D4AF37" fillOpacity="0.9" />
      <circle cx="40" cy="40" r="3" fill="#C41E3A" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFF8F0' }}>
      {/* Decorative lotus corner */}
      <div className="absolute top-8 right-8 opacity-30 pointer-events-none" aria-hidden="true">
        <LotusSVG />
      </div>
      <div className="absolute bottom-8 left-8 opacity-20 pointer-events-none" aria-hidden="true">
        <LotusSVG />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: decorative mandala illustration */}
          <div className="flex items-center justify-center relative">
            <div className="relative">
              <MandalaSVG size={340} opacity={0.9} />
              {/* Decorative ring around mandala */}
              <div
                className="absolute inset-0 rounded-full border-2 border-gold/30"
                style={{ margin: '10px' }}
              />
            </div>
          </div>

          {/* Right: text content */}
          <div className="flex flex-col gap-6">
            <div>
              <h2
                className="text-4xl sm:text-5xl font-black mb-4 leading-tight"
                style={{ fontFamily: '"Playfair Display", serif', color: '#C41E3A' }}
              >
                Who We Are
              </h2>
              <p
                className="text-navy/80 text-lg leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Want to learn more about Desi films? Watch your favorite movies with your friends
                and meet new people!! Join Desi Film Club and enjoy the free snacks!!!
              </p>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '326', label: 'Followers' },
                { value: '8', label: 'Events' },
                { value: '6', label: 'Officers' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-3xl font-black"
                    style={{ fontFamily: '"Playfair Display", serif', color: '#C41E3A' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-navy/60 text-sm font-medium uppercase tracking-wider mt-0.5"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gold/30" />
              <div className="text-gold opacity-60" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <circle cx="8" cy="8" r="3" />
                  {Array.from({ length: 6 }).map((_, i) => {
                    const a = i * 60 * Math.PI / 180;
                    return <circle key={i} cx={8 + 6 * Math.cos(a)} cy={8 + 6 * Math.sin(a)} r="1.5" />;
                  })}
                </svg>
              </div>
              <div className="flex-1 h-px bg-gold/30" />
            </div>

            {/* Tagline badge */}
            <div className="flex">
              <span
                className="inline-block bg-gold/15 border border-gold/40 text-navy font-semibold text-sm px-5 py-2.5 rounded-full tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="text-gold mr-2" aria-hidden="true">✦</span>
                Experience India in Every Frame
                <span className="text-gold ml-2" aria-hidden="true">✦</span>
              </span>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3">
              <div
                className="flex items-center gap-2 text-navy/60 text-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-label="Instagram">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                <a
                  href="https://instagram.com/sjsu_dfc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-crimson transition-colors duration-200 cursor-pointer"
                >
                  @sjsu_dfc
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
