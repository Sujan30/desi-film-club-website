import MandalaSVG from './MandalaSVG';
import FilmReelSVG from './FilmReelSVG';

function FilmStripBar() {
  return (
    <div className="flex h-4 w-full overflow-hidden absolute top-0 left-0 right-0 z-10" aria-hidden="true">
      {Array.from({ length: 80 }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 ${i % 2 === 0 ? 'bg-black' : 'bg-gold'}`}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const scrollToSection = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#0D1B2A' }}
    >
      <FilmStripBar />

      {/* Mandala decorative overlays */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <MandalaSVG size={360} opacity={0.12} />
      </div>
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <MandalaSVG size={360} opacity={0.12} />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 pointer-events-none" aria-hidden="true">
        <MandalaSVG size={500} opacity={0.08} />
      </div>

      {/* Floating film reel — decorative */}
      <div
        className="absolute right-8 top-1/3 opacity-10 pointer-events-none animate-spin"
        style={{ animationDuration: '20s' }}
        aria-hidden="true"
      >
        <FilmReelSVG size={140} color="#D4AF37" />
      </div>
      <div
        className="absolute left-8 bottom-1/3 opacity-10 pointer-events-none animate-spin"
        style={{ animationDuration: '30s', animationDirection: 'reverse' }}
        aria-hidden="true"
      >
        <FilmReelSVG size={100} color="#C41E3A" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-16">
        {/* Tag line */}
        <p
          className="text-gold text-xs sm:text-sm uppercase tracking-[0.3em] mb-6 font-medium"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Desi Film Club Presents
        </p>

        {/* Giant heading */}
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-black leading-none mb-2"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #C41E3A 0%, #D4AF37 60%, #E8651A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Experience India
          </span>
        </h1>
        <h1
          className="text-5xl sm:text-7xl md:text-8xl font-black leading-none mb-8"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #D4AF37 0%, #C41E3A 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            in Every Frame
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-white/70 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Connect with us through food, culture, and film!
          <br></br>
          SJSU's Premier Desi Film Club
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe51sjma-Kt67Sxbg_ozWwl2PpxZMzLvRRfWF9Vf4HFypE1lA/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy font-bold text-base px-8 py-3.5 rounded-full hover:bg-gold/90 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-lg shadow-gold/30 hover:shadow-gold/50 hover:scale-105"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Join DFC
          </a>
          <button
            onClick={() => scrollToSection('#events')}
            className="border-2 border-crimson text-crimson font-bold text-base px-8 py-3.5 rounded-full hover:bg-crimson hover:text-white transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            View Events
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection('#about')}
        role="button"
        tabIndex={0}
        aria-label="Scroll to About section"
        onKeyDown={(e) => e.key === 'Enter' && scrollToSection('#about')}
      >
        <span className="text-white/40 text-xs tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
          Scroll
        </span>
        <div className="animate-bounce">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
