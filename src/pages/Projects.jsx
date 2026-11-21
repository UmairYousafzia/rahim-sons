import { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: '50kW Commercial Solar & Green Meter',
    location: 'E-11 Markaz, Islamabad',
    category: 'solar',
    badgeText: 'Solar & Net-Metering',
    badgeClass: 'bg-blue-600 text-white',
    image: '/assets/images/5gridpanel.jpg',
    description: 'Complete turnkey installation with elevated galvanized structure, on-grid inverter, and IESCO bi-directional net-metering approval.'
  },
  {
    id: 2,
    title: 'Enterprise Data Rack & Fiber Cabling',
    location: 'Blue Area, Islamabad',
    category: 'networking',
    badgeText: 'Networking & E&M',
    badgeClass: 'bg-navy-900 text-blue-400',
    image: '/assets/images/FiberBackbone.jpg',
    description: '42U server cabinet dressing, Cat6A patch panels, fiber backbone termination, and dedicated UPS power distribution board.'
  },
  {
    id: 3,
    title: '64-Camera IP Surveillance & Access Control',
    location: 'I-9 Industrial Area, Islamabad',
    category: 'security',
    badgeText: 'Security & CCTV',
    badgeClass: 'bg-navy-900 text-blue-400',
    image: '/assets/images/cameraa.jpg',
    description: 'Perimeter night-vision IP cameras, biometric turnstiles, and centralized 24/7 video wall monitoring room.'
  },
  {
    id: 4,
    title: '20kW Hybrid Villa Solar + Lithium Bank',
    location: 'F-7/2, Islamabad',
    category: 'solar',
    badgeText: 'Solar & Net-Metering',
    badgeClass: 'bg-blue-600 text-white',
    image: '/assets/images/solar-1.jpg',
    description: 'Zero-transfer-time hybrid inverter paired with 15kWh lithium battery bank and active NEPRA net-metering export.'
  },
  {
    id: 5,
    title: 'Commercial Plaza Main LT Panel & ATS',
    location: 'G-11 Markaz, Islamabad',
    category: 'networking',
    badgeText: 'Networking & E&M',
    badgeClass: 'bg-navy-900 text-blue-400',
    image: '/assets/images/network2.jpg',
    description: 'Custom fabricated 400A main distribution board, automatic generator transfer switch, and complete mechanical conduit wiring.'
  },
  {
    id: 6,
    title: 'Corporate Campus Fire Alarm & RFID Access',
    location: 'Bahria Town Phase 7, Rawalpindi',
    category: 'security',
    badgeText: 'Security & CCTV',
    badgeClass: 'bg-navy-900 text-blue-400',
    image: '/assets/images/security.jpg',
    description: 'Multi-floor addressable smoke detection system integrated with magnetic door access controllers and emergency alarms.'
  },
  {
    id: 7,
    title: 'Multi-Storey Commercial Plaza & RCC Framework',
    location: 'Gulberg Greens, Islamabad',
    category: 'civil',
    badgeText: 'Civil & Construction',
    badgeClass: 'bg-navy-900 text-blue-400',
    image: '/assets/images/construction.png',
    description: 'Turnkey structural RCC grey framework, raft foundation with subterranean retaining walls, and complete MEP conduit integration.'
  },
  {
    id: 8,
    title: 'Luxury 1-Kanal Designer Villa Construction',
    location: 'Sector B-17, Islamabad',
    category: 'civil',
    badgeText: 'Civil & Construction',
    badgeClass: 'bg-blue-600 text-white',
    image: '/assets/images/construction.png',
    description: 'Complete architectural layout, high-tensile Grade-60 steel rebar structure, premium porcelain finishing, and solar-ready roof.'
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Page Header Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-display font-bold text-xs uppercase tracking-widest">Our Portfolio</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl mt-2">Engineering Projects &amp; Case Studies</h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-base sm:text-lg">
            Explore our completed installations across Islamabad, Rawalpindi, and Punjab across Civil Construction, Solar, Net-Metering,
            Security, and IT Networking domains.
          </p>
        </div>
      </section>

      {/* Projects Filter & Grid Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-xl text-sm font-display font-bold transition-all shadow-sm ${
                activeCategory === 'all'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveCategory('solar')}
              className={`px-5 py-2.5 rounded-xl text-sm font-display font-bold transition-all ${
                activeCategory === 'solar'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Solar &amp; Net-Metering
            </button>
            <button
              onClick={() => setActiveCategory('security')}
              className={`px-5 py-2.5 rounded-xl text-sm font-display font-bold transition-all ${
                activeCategory === 'security'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Security &amp; CCTV
            </button>
            <button
              onClick={() => setActiveCategory('networking')}
              className={`px-5 py-2.5 rounded-xl text-sm font-display font-bold transition-all ${
                activeCategory === 'networking'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Networking &amp; E&amp;M
            </button>
            <button
              onClick={() => setActiveCategory('civil')}
              className={`px-5 py-2.5 rounded-xl text-sm font-display font-bold transition-all ${
                activeCategory === 'civil'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Civil &amp; Construction
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all hover-lift"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 px-3 py-1 rounded-full font-bold text-xs ${project.badgeClass}`}>
                    {project.badgeText}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-navy-900">{project.title}</h3>
                  <p className="text-xs text-blue-600 font-semibold mt-1">{project.location}</p>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
