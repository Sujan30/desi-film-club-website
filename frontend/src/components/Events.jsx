import FilmReelSVG from './FilmReelSVG';

const EVENTS = [
  {
    id: 7,
    name: 'Desi Til Dawn — Social Night',
    date: 'April 16',
    dateISO: '2026-04-16',
    location: '88 W San Carlos St (The Grad)',
    time: '5:30 – 9 PM',
    description: 'DFC × Prakriti present a night packed with fun, food, games, movies, and dancing. Whether you\'re a longtime member or just looking to connect with your desi community, come ready to have a great time! Spots are limited, RSVP with the link in our bio. Hosted by SJSU Desi Film Club × Prakriti.',
    color: '#C41E3A',
    tag: 'Social',
    instagramUrl: 'https://www.instagram.com/p/DWpJhFcEjas/',
    rsvpUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdCuD2yc1PGrW5zR9w4KXpwurMw5ckV9damAa2Rg7B7O0jQjg/viewform',
  },
  {
    id: 1,
    name: 'Mahavatar Narsimha Movie Night',
    date: 'March 26',
    dateISO: '2026-03-26',
    location: 'DMH Room 357',
    time: '6:30 – 10 PM',
    description: 'Movie screening co-hosted with SKY × Prakriti × Pranahuti. Come join us for this epic cinematic experience!',
    color: '#C41E3A',
    tag: 'Movie Night',
    instagramUrl: 'https://www.instagram.com/p/DWN2d93k49C/',
  },
  {
    id: 2,
    name: 'Bake Sale Fundraiser',
    date: 'March 12',
    dateISO: '2026-03-12',
    location: '7th Street',
    time: '12 – 3 PM',
    description: 'Banana Bread & Choc Chip Cookies · 1 for $2, 3 for $5. Support DFC while enjoying homemade baked goods!',
    color: '#D4AF37',
    tag: 'Fundraiser',
    instagramUrl: 'https://www.instagram.com/p/DVu7e-5kwD-/',
  },
  {
    id: 3,
    name: 'Raanjhanaa Movie Night',
    date: 'March 5',
    dateISO: '2026-03-05',
    location: 'Macquarrie Hall 235',
    time: '6 – 10 PM',
    description: 'Holi Event — Carrom, lagori & snacks included! Celebrate Holi with a beautiful film and fun games.',
    color: '#E8651A',
    tag: 'Holi Special',
    instagramUrl: 'https://www.instagram.com/p/DVIgP7IE3zx/',
  },
  {
    id: 4,
    name: 'Pie an Officer Fundraiser',
    date: 'Feb 26',
    dateISO: '2026-02-26',
    location: '7th Street',
    time: '1 – 3 PM',
    description: 'Pie your favorite officer for $5! A hilarious fundraiser — all proceeds go toward future DFC events.',
    color: '#800020',
    tag: 'Fundraiser',
    instagramUrl: 'https://www.instagram.com/p/DVFYkjdkVwi/',
  },
  {
    id: 5,
    name: 'Rocky Aur Rani & Bracelet Making',
    date: 'Feb 12',
    dateISO: '2026-02-12',
    location: 'DMH 234',
    time: '6 – 8 PM',
    description: 'Movie screening + bracelet-making activity. A perfect combo of cinema and creativity!',
    color: '#C41E3A',
    tag: 'Movie Night',
    instagramUrl: 'https://www.instagram.com/p/DUUpkEyETwa/',
  },
  {
    id: 6,
    name: 'Yeh Jawaani Hai Deewani Movie Night',
    date: 'Nov 20, 2025',
    dateISO: '2025-11-20',
    location: 'DMH 208',
    time: '6 PM - 10 PM',
    description: 'Free collectables! Clothes, food, drinks! Kick back and enjoy one of Bollywood\'s most beloved films.',
    color: '#D4AF37',
    tag: 'Movie Night',
    instagramUrl: 'https://www.instagram.com/p/DRKwLuTkjUY/',
  },
];

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function getDayOfWeek(dateISO) {
  // Use noon UTC to avoid date-shifting from timezone offsets
  const d = new Date(dateISO + 'T12:00:00');
  return DAY_NAMES[d.getDay()];
}

const TODAY = new Date();
TODAY.setHours(0, 0, 0, 0);

const upcomingEvents = EVENTS.filter(e => new Date(e.dateISO) >= TODAY);
const pastEvents = EVENTS.filter(e => new Date(e.dateISO) < TODAY);

function FilmStripDots() {
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

function EventCard({ event, isPast }) {
  const learnMoreContent = (
    <>
      Learn More
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );

  return (
    <article
      className="group relative rounded-2xl overflow-hidden border border-white/10 flex flex-col transition-all duration-200 hover:-translate-y-1 cursor-pointer"
      style={{
        backgroundColor: '#0D1B2A',
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        opacity: isPast ? 0.8 : 1,
      }}
    >
      {/* Top colored band with film strip perforation */}
      <div
        className="relative pt-1 transition-all duration-200"
        style={{ backgroundColor: event.color }}
      >
        <FilmStripDots />
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
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: '#0D1B2A',
              backgroundColor: '#D4AF37',
            }}
          >
            {getDayOfWeek(event.dateISO)}, {event.date}
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

        {/* Description — full text, no clamp */}
        <p
          className="text-white/55 text-sm leading-relaxed flex-1"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {event.description}
        </p>

        {/* Actions */}
        <div className="pt-1 flex items-center gap-3 flex-wrap">
          <a
            href={event.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold text-sm font-semibold hover:underline transition-all duration-200 inline-flex items-center gap-1"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {learnMoreContent}
          </a>
          {event.rsvpUrl && (
            <a
              href={event.rsvpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold px-4 py-1.5 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{
                fontFamily: 'Inter, sans-serif',
                backgroundColor: '#C41E3A',
                color: '#fff',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              RSVP
            </a>
          )}
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

function SubsectionLabel({ children }) {
  return (
    <p
      className="text-xs font-bold uppercase tracking-widest mb-4"
      style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(212,175,55,0.5)' }}
    >
      {children}
    </p>
  );
}

function SubsectionDivider() {
  return (
    <div
      className="my-10"
      style={{
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)',
      }}
      aria-hidden="true"
    />
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
            Events
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

        {/* Upcoming Events */}
        <div>
          <SubsectionLabel>Upcoming Events</SubsectionLabel>
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} isPast={false} />
              ))}
            </div>
          ) : (
            <div
              className="flex items-center justify-center rounded-2xl text-sm"
              style={{
                border: '1px dashed rgba(212,175,55,0.2)',
                background: 'rgba(212,175,55,0.03)',
                color: 'rgba(255,255,255,0.3)',
                fontFamily: 'Inter, sans-serif',
                minHeight: '140px',
              }}
            >
              Stay tuned — more events coming soon!
            </div>
          )}
        </div>

        <SubsectionDivider />

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <div>
            <SubsectionLabel>Past Events</SubsectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map(event => (
                <EventCard key={event.id} event={event} isPast={true} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
