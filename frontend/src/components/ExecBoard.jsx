import nitishPhoto from '../assets/officers/nitty.jpeg';
import sujanPhoto from '../assets/officers/sujan.png';
import shreeyaPhoto from '../assets/officers/shreeya.png';
import keyuraPhoto from '../assets/officers/keyura.JPG';
import akashPhoto from '../assets/officers/akash.jpeg';

const EXEC_MEMBERS = [
  {
    id: 1,
    name: 'Nitish Medikonda',
    role: 'President',
    hometown: 'San Ramon, CA',
    fav: 'Goodachari',
    bg: '#E8651A',
    initials: 'NM',
    rotation: 'rotate-1',
    photo: nitishPhoto,
    objectPosition: 'center 15%',
  },
  {
    id: 2,
    name: 'Sujan Nandikol',
    role: 'Vice President',
    hometown: 'San Ramon, CA',
    fav: 'Ae Dil Hai Mushkil',
    bg: '#C41E3A',
    initials: 'SN',
    rotation: '-rotate-1',
    photo: sujanPhoto,
    objectPosition: 'center center',
  },
  {
    id: 3,
    name: 'Eshaan Singapuri',
    role: 'Treasurer',
    hometown: 'Surat, Gujarat',
    fav: 'Dhurandhar',
    bg: '#D4AF37',
    initials: 'ES',
    rotation: 'rotate-2',
    photo: null,
    objectPosition: 'center center',
  },
  {
    id: 4,
    name: 'Shreeya Vaidya',
    role: 'Director of PR',
    hometown: 'San Jose, CA',
    fav: 'Jab We Met',
    bg: '#800020',
    initials: 'SV',
    rotation: '-rotate-2',
    photo: shreeyaPhoto,
    objectPosition: 'center 20%',
  },
  {
    id: 5,
    name: 'Keyura Grandi',
    role: 'Event Coordinator',
    hometown: 'Fremont, CA',
    fav: 'Eega',
    bg: '#1a4a6b',
    initials: 'KG',
    rotation: 'rotate-1',
    photo: keyuraPhoto,
    objectPosition: 'center 10%',
  },
  {
    id: 6,
    name: 'Akash Chatterjee',
    role: 'Creative Director',
    hometown: 'Pleasanton, CA',
    fav: 'Bajirao Mastani',
    bg: '#4a1a6b',
    initials: 'AC',
    rotation: '-rotate-1',
    photo: akashPhoto,
    objectPosition: 'center 15%',
  },
];

function PolaroidCard({ member }) {
  return (
    <div
      className={`group ${member.rotation} hover:rotate-0 transition-all duration-300 cursor-pointer`}
      style={{ willChange: 'transform' }}
    >
      <div
        className="bg-white rounded-sm p-3 pb-0 group-hover:scale-105 transition-all duration-300"
        style={{
          boxShadow: '0 4px 15px rgba(0,0,0,0.15), 0 10px 30px rgba(0,0,0,0.08)',
        }}
      >
        {/* Photo area */}
        <div
          className="relative overflow-hidden rounded-sm mb-0"
          style={{
            backgroundColor: member.bg,
            aspectRatio: '3/4',
          }}
        >
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: member.objectPosition }}
            />
          ) : (
            <>
              {/* Subtle texture overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)',
                }}
                aria-hidden="true"
              />
              {/* Initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="text-white font-black text-4xl select-none drop-shadow-lg"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                  aria-hidden="true"
                >
                  {member.initials}
                </span>
              </div>
              {/* Corner accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 opacity-60"
                style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
                aria-hidden="true"
              />
            </>
          )}
        </div>

        {/* Caption area */}
        <div className="py-4 px-1">
          <h3
            className="text-navy font-bold text-base leading-tight mb-0.5"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            {member.name}
          </h3>
          <p
            className="text-crimson text-sm italic font-medium mb-2"
            style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '15px' }}
          >
            {member.role}
          </p>
          <div
            className="text-navy/50 text-xs leading-relaxed border-t border-navy/10 pt-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="block">{member.hometown}</span>
            <span className="block mt-0.5">
              <span className="text-gold font-medium">Fav:</span> {member.fav}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExecBoard() {
  return (
    <section id="exec-board" className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFF8F0' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            (re)INTRODUCING your
            <span className="block text-crimson mt-1">2026 Exec Board!</span>
          </h2>
          <p
            className="text-maroon text-lg italic"
            style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '20px' }}
          >
            we hope to have a good semester with you all :)
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-4 mt-8" aria-hidden="true">
            <div className="h-px flex-1 max-w-32 bg-gold/40" />
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {Array.from({ length: 6 }).map((_, i) => {
                const a = i * 60 * Math.PI / 180;
                return (
                  <circle
                    key={i}
                    cx={12 + 7 * Math.cos(a)}
                    cy={12 + 7 * Math.sin(a)}
                    r="2"
                    fill="#D4AF37"
                    fillOpacity="0.7"
                  />
                );
              })}
              <circle cx="12" cy="12" r="3" fill="#C41E3A" />
            </svg>
            <div className="h-px flex-1 max-w-32 bg-gold/40" />
          </div>
        </div>

        {/* Polaroid grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {EXEC_MEMBERS.map((member) => (
            <PolaroidCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
