import FilmReelSVG from './FilmReelSVG';

const EVENTS = [
  {
    id: 1,
    name: 'Mahavatar Narsimha Movie Night',
    date: 'Thu, March 26',
    location: 'DMH Room 357',
    time: '6:30 – 10 PM',
    description: 'Movie screening co-hosted with SKY × Prakriti × Pranahuti. Come join us for this epic cinematic experience!',
    color: '#C41E3A',
    tag: 'Movie Night',
  },
  {
    id: 2,
    name: 'Bake Sale Fundraiser',
    date: 'Thu, March 12',
    location: '7th Street',
    time: '12 – 3 PM',
    description: 'Banana Bread & Choc Chip Cookies · 1 for $2, 3 for $5. Support DFC while enjoying homemade baked goods!',
    color: '#D4AF37',
    tag: 'Fundraiser',
  },
  {
    id: 3,
    name: 'Raanjhanaa Movie Night',
    date: 'March 5',
    location: 'Macquarrie Hall 235',
    time: '6 – 10 PM',
    description: 'Holi Event — Carrom, lagori & snacks included! Celebrate Holi with a beautiful film and fun games.',
    color: '#E8651A',
    tag: 'Holi Special',
  },
  {
    id: 4,
    name: 'Pie an Officer Fundraiser',
    date: 'Thu, Feb 26',
    location: '7th Street',
    time: '1 – 3 PM',
    description: 'Pie your favorite officer for $5! A hilarious fundraiser — all proceeds go toward future DFC events.',
    color: '#800020',
    tag: 'Fundraiser',
  },
  {
    id: 5,
    name: 'Rocky Aur Rani & Bracelet Making',
    date: 'Feb 12',
    location: 'DMH 234',
    time: '6 – 8 PM',
    description: 'Movie screening + bracelet-making activity. A perfect combo of cinema and creativity!',
    color: '#C41E3A',
    tag: 'Movie Night',
  },
  {
    id: 6,
    name: 'Yeh Jawaani Hai Deewani Movie Night',
    date: 'Nov 20, 2025',
    location: 'DMH 208',
    time: '6 PM',
    description: 'Free collectables! Clothes, food, drinks! Kick back and enjoy one of Bollywood\'s most beloved films.',
    color: '#D4AF37',
    tag: 'Movie Night',
  },
];

function FilmStripDots({ color }) {
  return (
    <div className="flex items-center justify-around px-3 py-1.5" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-3 h-4 rounded-sm border-2"
          style={{ borderColor: 'rgba(255,255,255,0.35)', backgroundColor: 'rgba(0,0,0,0.25)' }}
        />
      ))}
    </div>
  );
}

function EventCard({ event }) {
  return (
    <article
      className="group relative rounded-2xl overflow-hidden border border-white/10 flex flex-col transition-all duration-200 hover:-translate-y-1 cursor-pointer"
      style={{ backgroundColor: '#0D1B2A', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}
    >
      {/* Top colored band with film strip perforation */}
      <div
        className="relative pt-1 transition-all duration-200"
        style={{ backgroundColor: event.color }}
      >
        <FilmStripDots color={event.color} />
        <div className="px-5 pb-4 pt-2 flex items-start justify-between gap-3">
          <div>
            <span
              className="text-white/80 text-xs font-semibold uppercase tracking-widest"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {event.tag}
            </span>
          </div>
          <FilmReelSVG size={36} color="rgba(255,255,255,0.9)" />
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3
          className="text-white font-bold text-lg leading-snug group-hover:text-gold transition-colors duration-200"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          {event.name}
        </h3>

        {/* Date badge */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full border"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: event.color === '#D4AF37' ? '#0D1B2A' : '#D4AF37',
              borderColor: event.color === '#D4AF37' ? '#D4AF37' : 'rgba(212,175,55,0.5)',
              backgroundColor: event.color === '#D4AF37' ? '#D4AF37' : 'rgba(212,175,55,0.1)',
            }}
          >
            {event.date}
          </span>
          <span
            className="text-white/50 text-xs"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {event.time}
          </span>
        </div>

        {/* Location */}
        <div
          className="flex items-center gap-1.5 text-white/60 text-sm"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
          </svg>
          {event.location}
        </div>

        {/* Description */}
        <p
          className="text-white/55 text-sm leading-relaxed line-clamp-2 flex-1"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {event.description}
        </p>

        {/* Learn more */}
        <div className="pt-1">
          <span
            className="text-gold text-sm font-semibold hover:underline cursor-pointer transition-all duration-200 inline-flex items-center gap-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* Hover glow border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1.5px rgba(212,175,55,0.6), 0 0 20px rgba(212,175,55,0.15)` }}
      />
    </article>
  );
}

export default function Events() {
  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0D1B2A' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p
            className="text-crimson text-xl sm:text-2xl font-semibold italic mb-3"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Desi Film Club Presents
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gold tracking-wide uppercase"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Upcoming Events
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6" aria-hidden="true">
            <div className="h-px flex-1 max-w-24 bg-gold/30" />
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold/60" />
              ))}
            </div>
            <div className="h-px flex-1 max-w-24 bg-gold/30" />
          </div>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}
