import DFCLogo from './DFCLogo';
import FilmReelSVG from './FilmReelSVG';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Exec Board', href: '#exec-board' },
  { label: 'Join Us', href: '#join' },
];

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

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: '#0D1B2A' }}>
      {/* Film strip top border */}
      <div className="flex h-3 w-full overflow-hidden" aria-hidden="true">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 ${i % 2 === 0 ? 'bg-black' : 'bg-gold/70'}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <DFCLogo size={52} />
              <div>
                <div
                  className="text-gold font-bold text-base leading-tight"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Desi Film Club
                </div>
                <div
                  className="text-gold/50 text-xs tracking-widest uppercase mt-0.5"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  @ SJSU
                </div>
              </div>
            </div>
            <p
              className="text-gold/70 text-sm leading-relaxed max-w-xs italic"
              style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '16px' }}
            >
              "Experience India in Every Frame"
            </p>
            <p
              className="text-white/40 text-xs leading-relaxed max-w-xs"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              San Jose State University's premier Bollywood film club. Connecting the Desi
              community through cinema, food, and culture.
            </p>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h3
              className="text-gold font-bold text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Quick Links
            </h3>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/60 hover:text-gold transition-colors duration-200 text-sm cursor-pointer flex items-center gap-2 group"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span
                      className="w-4 h-px bg-gold/30 group-hover:bg-gold group-hover:w-5 transition-all duration-200"
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Social + film reel */}
          <div>
            <h3
              className="text-gold font-bold text-sm uppercase tracking-widest mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Connect With Us
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/sjsu_dfc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors duration-200 text-sm cursor-pointer group"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="text-gold/50 group-hover:text-gold transition-colors duration-200">
                  <InstagramIcon />
                </span>
                @sjsu_dfc
              </a>
              <a
                href="https://linktr.ee/DesiFilmClub"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors duration-200 text-sm cursor-pointer group"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                <span className="text-gold/50 group-hover:text-gold transition-colors duration-200">
                  <LinktreeIcon />
                </span>
                linktr.ee/DesiFilmClub
              </a>
            </div>

            {/* Decorative film reel */}
            <div className="mt-8 opacity-20" aria-hidden="true">
              <FilmReelSVG size={64} color="#D4AF37" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-white/40 text-xs text-center sm:text-left"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            &copy; 2026 Desi Film Club &middot; SJSU &middot; Made with{' '}
            <span aria-label="love">❤️</span> for Desi cinema
          </p>
          <div className="flex items-center gap-1" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-sm ${i % 2 === 0 ? 'bg-gold/30' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
