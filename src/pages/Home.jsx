import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy-900 text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/solar-1.jpg"
            alt="Rahim & Sons Solar and Electrical Engineering"
            className="w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900/95 to-navy-900/80"></div>
          <div className="absolute inset-0 bg-engineering-grid opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                <span>Trusted Engineering Partner in Islamabad &amp; Nationwide</span>
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
                Rahim &amp; Sons Enterprises
                <span className="block text-blue-400 mt-2 text-2xl sm:text-4xl lg:text-[42px] font-bold">
                  An Electrical &amp; Mechanical Solutions Provider
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Delivering turnkey clean energy Solar Systems, NEPRA-certified Net-Metering, intelligent IP Security
                Surveillance, and high-speed Enterprise Networking infrastructure for residential, commercial, and
                industrial clients.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm sm:text-base shadow-lg shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Explore Our Solutions</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display font-semibold text-sm sm:text-base backdrop-blur-sm transition-all"
                >
                  <span>Request Site Survey</span>
                </Link>
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-xl">
                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-blue-400">350+</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5">Projects Completed</div>
                </div>

                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-blue-400">15+ MW</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5">Solar Installed</div>
                </div>

                <div>
                  <div className="font-display font-extrabold text-2xl sm:text-3xl text-blue-400">100%</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-0.5">IESCO / NEPRA Approved</div>
                </div>
              </div>
            </div>

            {/* Hero Featured Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-navy-800/80 shadow-2xl p-3 backdrop-blur-sm">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                  <img
                    src="/assets/images/net metring.png"
                    alt="Solar & Electrical Engineering Showcase"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-navy-900/90 border border-white/10 rounded-xl p-3.5 backdrop-blur-md">
                    <div>
                      <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Head Office Islamabad</p>
                      <p className="text-sm font-medium text-white mt-0.5">Askaan Center, E-11/3 Markaz</p>
                    </div>

                    <a
                      href="tel:03335569953"
                      className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-colors shrink-0"
                      title="Call Now"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview Section */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">What We Do</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 mt-2">
              Integrated Electrical, Mechanical &amp; Smart Technology Solutions
            </h2>
            <p className="text-slate-600 mt-4 text-base sm:text-lg">
              From clean solar energy generation to enterprise security and fiber networking, we engineer reliable systems
              built for long-term performance.
            </p>
          </div>

          {/* 4 Primary Service Cards */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {/* Card 1: Solar Systems */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col hover-lift">
              <div className="h-44 overflow-hidden relative bg-navy-900">
                <img
                  src="/assets/images/solar-2.jpg"
                  alt="Solar Systems Installation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display font-bold text-xl text-navy-900 group-hover:text-blue-600 transition-colors">
                  Solar Systems
                </h3>
                <p className="text-slate-600 text-sm mt-2.5 leading-relaxed flex-grow">
                  Tier-1 Hybrid, On-Grid, and Off-Grid solar power plants engineered for homes, plazas, factories, and
                  corporate offices.
                </p>
                <Link
                  to="/solar-systems"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-display font-bold text-navy-900 group-hover:text-blue-600"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 2: Net-Metering */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col hover-lift">
              <div className="h-44 overflow-hidden relative bg-navy-900">
                <img
                  src="/assets/images/net metring.png"
                  alt="Net-Metering Green Meter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display font-bold text-xl text-navy-900 group-hover:text-blue-600 transition-colors">
                  Net-Metering
                </h3>
                <p className="text-slate-600 text-sm mt-2.5 leading-relaxed flex-grow">
                  End-to-end NEPRA &amp; IESCO green meter licensing, earthing compliance, bidirectional meter installation,
                  and grid synchronization.
                </p>
                <Link
                  to="/net-metering"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-display font-bold text-navy-900 group-hover:text-blue-600"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 3: Security Solutions */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col hover-lift">
              <div className="h-44 overflow-hidden relative bg-navy-900">
                <img
                  src="/assets/images/security.jpg"
                  alt="CCTV Security Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display font-bold text-xl text-navy-900 group-hover:text-blue-600 transition-colors">
                  Security Solutions
                </h3>
                <p className="text-slate-600 text-sm mt-2.5 leading-relaxed flex-grow">
                  4K IP CCTV surveillance, NVR monitoring rooms, biometric attendance, access control gates, and fire
                  detection systems.
                </p>
                <Link
                  to="/security-solutions"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-display font-bold text-navy-900 group-hover:text-blue-600"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card 4: Networking Solutions */}
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col hover-lift">
              <div className="h-44 overflow-hidden relative bg-navy-900">
                <img
                  src="/assets/images/networking.jpg"
                  alt="Enterprise Networking Solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-display font-bold text-xl text-navy-900 group-hover:text-blue-600 transition-colors">
                  Networking Solutions
                </h3>
                <p className="text-slate-600 text-sm mt-2.5 leading-relaxed flex-grow">
                  Structured Cat6/Cat6A cabling, fiber optic splicing, server rack dressing, enterprise Wi-Fi, and
                  electrical/mechanical panels.
                </p>
                <Link
                  to="/networking-solutions"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-display font-bold text-navy-900 group-hover:text-blue-600"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white border-y border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-5">
        <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Go Solar</span>
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 mt-2 leading-tight">
          Cut Your Electricity Bill and Sell Extra Units Back to IESCO
        </h2>
        <p className="text-slate-600 mt-4 leading-relaxed">
          With a net-metered solar system, the power you don't use goes back to the grid and is credited
          against your monthly bill. We size the system to your actual load, so you don't overpay for panels
          you don't need.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-display font-bold text-sm transition-all"
        >
          Get a Free Solar Quote
        </Link>
      </div>

      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover-lift">
          <div className="font-display font-extrabold text-3xl text-blue-600">Up to 90%</div>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">Reduction in monthly electricity bills, depending on system size and usage.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover-lift">
          <div className="font-display font-extrabold text-3xl text-blue-600">3–4 Years</div>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">Typical payback period for on-grid systems at current tariffs.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover-lift">
          <div className="font-display font-extrabold text-3xl text-blue-600">25 Years</div>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">Panel performance warranty on Tier-1 modules.</p>
        </div>
      </div>
    </div>
    <p className="text-xs text-slate-400 mt-5">
      Figures are typical estimates. Your actual savings depend on roof area, sunlight, load, and tariff slab.
    </p>
  </div>
</section>

      {/* Why Choose Rahim & Sons Section */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/assets/images/5gridpanel.jpg"
                  alt="Electrical and Mechanical Engineers"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
                <div className="absolute bottom-5 left-5 right-5 bg-navy-900/95 text-white p-5 rounded-xl border border-white/10 backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-display font-extrabold text-xl shrink-0">
                      E&amp;M
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base">Certified Engineering Standards</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Strict adherence to PEC, NEPRA, and IEC safety &amp; quality protocols.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Why Choose Us</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 leading-tight">
                Precision Engineering Backed by Reliable After-Sales Support
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                At <strong>Rahim &amp; Sons Enterprises</strong>, we combine deep electrical and mechanical expertise with
                modern smart infrastructure to eliminate energy losses, downtime, and security blind spots.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="font-display font-bold text-navy-900 text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    Tier-1 Equipment Only
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Genuine A-grade solar panels, hybrid inverters, Hikvision/Dahua IP cameras, and certified networking gear.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="font-display font-bold text-navy-900 text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    Fast Net-Metering
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Fast-track NEPRA licensing and IESCO bidirectional green meter commissioning with zero hassle.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="font-display font-bold text-navy-900 text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    Turnkey Delivery
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    From engineering drawings and load calculations to civil mountings and final electrical certification.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70">
                  <h4 className="font-display font-bold text-navy-900 text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    24/7 Support SLA
                  </h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Dedicated technical hotline, preventive maintenance visits, and swift on-site troubleshooting across Islamabad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">How It Works</span>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 mt-2">
        From Site Survey to Commissioning in Four Steps
      </h2>
      <p className="text-slate-600 mt-4 text-base sm:text-lg">
        A clear, documented process, so you always know what happens next.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
      {[
        {
          step: '1',
          title: 'Site Survey',
          text: 'Our engineers visit your site, check your load, roof or rack space, and existing wiring.',
        },
        {
          step: '2',
          title: 'Design & Quotation',
          text: 'You receive engineering drawings, a bill of materials, and a transparent price with no hidden costs.',
        },
        {
          step: '3',
          title: 'Installation',
          text: 'Certified technicians install, test, and label everything to PEC and IEC safety standards.',
        },
        {
          step: '4',
          title: 'Approval & Handover',
          text: 'We handle NEPRA/IESCO paperwork where needed, commission the system, and train your team.',
        },
      ].map((item) => (
        <div key={item.step} className="relative bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover-lift">
          <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center font-display font-extrabold text-lg">
            {item.step}
          </div>
          <h3 className="font-display font-bold text-lg text-navy-900 mt-4">{item.title}</h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-20 sm:py-24 bg-navy-900 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-engineering-grid opacity-30"></div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl">
      <span className="text-blue-400 font-display font-bold text-xs uppercase tracking-widest">Who We Serve</span>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl mt-2">
        Systems Built for the Way Your Business Runs
      </h2>
    </div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: 'Homes & Societies', text: 'Hybrid solar with battery backup, home CCTV, and Wi-Fi coverage for every room.' },
        { name: 'Offices & Plazas', text: 'Net-metered solar, structured cabling, access control, and server room setup.' },
        { name: 'Factories & Warehouses', text: 'Large on-grid plants, industrial CCTV, electrical panels, and load management.' },
        { name: 'Schools & Hospitals', text: 'Reliable backup power, campus-wide networking, and fire detection systems.' },
        { name: 'Banks & Retail Chains', text: 'Multi-branch CCTV, biometric attendance, and secure network infrastructure.' },
        { name: 'Mosques & Institutions', text: 'Cost-saving solar systems and lighting designed for long-term low maintenance.' },
      ].map((item) => (
        <div key={item.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
          <h3 className="font-display font-bold text-lg text-white">{item.name}</h3>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Featured Projects Showcase Section */}
      <section className="py-20 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Our Work</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 mt-2">
                Recent Engineering Milestones
              </h2>
              <p className="text-slate-600 mt-2 text-base">A glimpse into our deployed commercial and residential projects.</p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-display font-bold text-blue-600 hover:text-blue-700"
            >
              <span>View All Projects</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-7">
            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm group hover-lift">
              <div className="h-56 overflow-hidden relative">
                <img
                  src="/assets/images/5gridpanel.jpg"
                  alt="50kW Commercial Solar & Net Metering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-navy-900/90 text-blue-400 text-xs font-semibold">
                  Solar &amp; Net-Metering
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-navy-900">50kW Commercial On-Grid System</h3>
                <p className="text-xs text-slate-500 mt-1">E-11 Markaz, Islamabad • IESCO Green Meter Active</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm group hover-lift">
              <div className="h-56 overflow-hidden relative">
                <img
                  src="/assets/images/FiberBackbone.jpg"
                  alt="Enterprise Fiber & Data Rack"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-navy-900/90 text-blue-400 text-xs font-semibold">
                  Networking
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-navy-900">Corporate Server Room &amp; Fiber Backbone</h3>
                <p className="text-xs text-slate-500 mt-1">Blue Area, Islamabad • 120 Nodes Structured Cabling</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm group hover-lift">
              <div className="h-56 overflow-hidden relative">
                <img
                  src="/assets/images/cameraa.jpg"
                  alt="Industrial IP CCTV Surveillance"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-navy-900/90 text-blue-400 text-xs font-semibold">
                  Security
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-navy-900">64-Channel IP CCTV &amp; Biometric Access</h3>
                <p className="text-xs text-slate-500 mt-1">I-9 Industrial Area, Islamabad • 24/7 Control Room</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- 4. Testimonials ---------- */}
{/* NOTE: Replace these with real client reviews (with permission) before publishing. */}
<section className="py-20 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Client Feedback</span>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 mt-2">
        What Our Clients Say
      </h2>
    </div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
      {[
        {
          quote: 'The team finished our 50kW installation on schedule and got the green meter approved without us chasing IESCO.',
          name: 'Client Name',
          role: 'Business Owner, Islamabad',
        },
        {
          quote: 'Our office network and CCTV were set up cleanly, with neat racks and clear documentation. Support has been quick whenever we call.',
          name: 'Client Name',
          role: 'IT Manager, Blue Area',
        },
        {
          quote: 'Our electricity bill dropped sharply after the hybrid system went in, and the backup runs through load-shedding without a hitch.',
          name: 'Client Name',
          role: 'Homeowner, G-13',
        },
      ].map((t, i) => (
        <figure key={i} className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col">
          <blockquote className="text-slate-700 leading-relaxed flex-grow">“{t.quote}”</blockquote>
          <figcaption className="mt-5 pt-4 border-t border-slate-200">
            <div className="font-display font-bold text-navy-900 text-sm">{t.name}</div>
            <div className="text-xs text-slate-500 mt-0.5">{t.role}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  </div>
</section>


{/* ---------- 5. FAQ ---------- */}
<section className="py-20 sm:py-24 bg-slate-50">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">FAQ</span>
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 mt-2">
        Common Questions
      </h2>
    </div>

    <div className="mt-10 space-y-4">
      {[
        {
          q: 'How long does net-metering approval take?',
          a: 'Timelines depend on IESCO and NEPRA processing. We prepare and submit the complete file, follow up on your behalf, and keep you updated at each stage.',
        },
        {
          q: 'Which solar system is right for me: on-grid, hybrid, or off-grid?',
          a: 'On-grid suits most daytime users who want the lowest cost. Hybrid adds battery backup for load-shedding. Off-grid is for locations with no grid access. We recommend one after reviewing your load.',
        },
        {
          q: 'Do you provide a warranty and after-sales service?',
          a: 'Yes. Equipment carries manufacturer warranties, and we offer maintenance visits and on-site troubleshooting after handover.',
        },
        {
          q: 'Do you work outside Islamabad?',
          a: 'Yes. We serve Islamabad, Rawalpindi, and clients nationwide on larger projects. Contact us with your location and requirements.',
        },
        {
          q: 'Is the site survey really free?',
          a: 'Yes. The initial technical assessment and quotation are free, with no obligation to proceed.',
        },
      ].map((item, i) => (
        <details key={i} className="group bg-white rounded-xl border border-slate-200 p-5 open:shadow-md transition-shadow">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-bold text-navy-900">
            <span>{item.q}</span>
            <svg
              className="w-5 h-5 shrink-0 text-blue-600 transition-transform group-open:rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
            </svg>
          </summary>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">{item.a}</p>
        </details>
      ))}
    </div>
  </div>
</section>

      {/* Call To Action Banner */}
      <section className="bg-navy-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
              Ready to Upgrade Your Power, Security, or Network Infrastructure?
            </h2>
            <p className="text-slate-300 mt-3 text-sm sm:text-base">
              Schedule a free on-site technical assessment with Rahim &amp; Sons Enterprises today.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              Book Free Consultation
            </Link>

            <a
              href="tel:03335569953"
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display font-semibold text-sm sm:text-base transition-all"
            >
              Call 0333-5569953
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
