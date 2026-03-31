import FilmReelSVG from './FilmReelSVG';
import MandalaSVG from './MandalaSVG';

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinktreeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M10 5h4M12 5v5M8 8l4 2 4-2M8 14l4 2 4-2M12 16v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function JoinCTA() {
  return (
    <section id="join" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#C41E3A' }}>
      {/* Mandala pattern overlays */}
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 pointer-events-none" aria-hidden="true">
        <MandalaSVG size={400} opacity={0.12} />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 pointer-events-none" aria-hidden="true">
        <MandalaSVG size={400} opacity={0.12} />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" aria-hidden="true">
        <MandalaSVG size={600} opacity={0.05} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Film reel icon */}
        <div className="flex justify-center mb-6">
          <div
            className="animate-spin"
            style={{ animationDuration: '12s' }}
            aria-hidden="true"
          >
            <FilmReelSVG size={72} color="#D4AF37" />
          </div>
        </div>

        {/* Heading */}
        <h2
          className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-none"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          JOIN US!
        </h2>

        {/* Sub-heading */}
        <p
          className="text-white/85 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Get ready to mingle with your Desi friends, it's going to be an eventful night!
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://linktr.ee/DesiFilmClub"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-navy font-bold text-base px-8 py-3.5 rounded-full hover:bg-gold/90 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-navy shadow-lg shadow-black/20 hover:scale-105 hover:shadow-xl min-w-[140px] text-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Join DFC
          </a>

          <a
            href="https://instagram.com/sjsu_dfc"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-semibold text-base px-6 py-3.5 rounded-full hover:bg-white hover:text-crimson transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white flex items-center gap-2 min-w-[240px] justify-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <InstagramIcon />
            Follow @sjsu_dfc
          </a>

          <a
            href="https://linktr.ee/DesiFilmClub"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-semibold text-base px-6 py-3.5 rounded-full hover:bg-white hover:text-crimson transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white flex items-center gap-2 min-w-[140px] justify-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <LinktreeIcon />
            Linktree
          </a>
        </div>

        {/* Free snacks note */}
        <p
          className="text-white/60 text-sm italic"
          style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '16px' }}
        >
          Free snacks provided at all events!
        </p>
      </div>
    </section>
  );
}
