import { useState, useEffect } from 'react';
import DFCLogo from './DFCLogo';

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="Instagram" role="img">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Exec Board', href: '#exec-board' },
  { label: 'Join Us', href: '#join' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-navy/95 shadow-lg shadow-black/30'
          : 'backdrop-blur-md bg-navy/90'
      }`}
    >
      {/* Film-strip top edge */}
      <div className="flex h-2 w-full overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 ${i % 2 === 0 ? 'bg-black' : 'bg-gold'}`}
          />
        ))}
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg"
          aria-label="Desi Film Club home"
        >
          <DFCLogo size={44} />
          <div className="hidden sm:block">
            <div
              className="text-gold font-bold text-sm leading-tight"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Desi Film Club
            </div>
            <div className="text-gold/60 text-xs tracking-widest uppercase">SJSU</div>
          </div>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white/80 hover:text-gold transition-colors duration-200 text-sm font-medium tracking-wide cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://instagram.com/sjsu_dfc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-gold transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-full p-1"
            aria-label="Instagram @sjsu_dfc"
          >
            <InstagramIcon />
          </a>
          <a
            href="#join"
            onClick={(e) => handleNavClick(e, '#join')}
            className="bg-gold text-navy text-sm font-semibold px-5 py-2 rounded-full hover:bg-gold/90 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Join Us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 bg-navy/98 border-t border-gold/20 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="list-none m-0 p-0 px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 px-4 text-white/80 hover:text-gold hover:bg-white/5 rounded-lg transition-colors duration-200 cursor-pointer text-base font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2 flex items-center gap-4 px-4">
            <a
              href="https://instagram.com/sjsu_dfc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-gold transition-colors duration-200 cursor-pointer"
              aria-label="Instagram @sjsu_dfc"
            >
              <InstagramIcon />
            </a>
            <a
              href="#join"
              onClick={(e) => handleNavClick(e, '#join')}
              className="bg-gold text-navy font-semibold px-5 py-2 rounded-full hover:bg-gold/90 transition-all duration-200 cursor-pointer text-sm"
            >
              Join Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
