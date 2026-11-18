import { Link } from 'react-router-dom';

export default function SecuritySolutions() {
  return (
    <>
      {/* Page Header Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-blue-400 font-medium">Security &amp; CCTV Solutions</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider mb-4">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Physical Security &amp; Surveillance Engineering
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-5">
                Enterprise CCTV &amp; Smart Security Solutions in Islamabad
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Protect your commercial plaza, industrial facility, or private estate with high-definition 4K ColorVu IP
                cameras, AI-powered intrusion detection, facial recognition biometric access gates, and 24/7 centralized
                monitoring rooms.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact?service=Security%20Solutions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-sm shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Request Free Security Survey</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
                <a
                  href="tel:03335569953"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 border border-navy-700 hover:border-blue-500/40 font-display font-semibold text-sm transition-all"
                >
                  <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Talk with Security Engineer</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-navy-800 text-left">
                <div>
                  <span className="block text-2xl font-display font-extrabold text-blue-400">4K ColorVu</span>
                  <span className="text-xs text-slate-400 mt-1 block">Full-Color 24/7 Night Vision</span>
                </div>
                <div>
                  <span className="block text-2xl font-display font-extrabold text-white">0.2s</span>
                  <span className="text-xs text-slate-400 mt-1 block">Biometric Scan Velocity</span>
                </div>
                <div>
                  <span className="block text-2xl font-display font-extrabold text-blue-400">100%</span>
                  <span className="text-xs text-slate-400 mt-1 block">Mobile &amp; PC Remote Sync</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-700/80 group">
                <img
                  src="/assets/images/cameraa.jpg"
                  alt="Commercial CCTV Camera and Surveillance Setup"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-navy-900/90 backdrop-blur-md p-4 rounded-xl border border-navy-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-blue-400 font-bold block">Live Video Intelligence</span>
                      <h3 className="text-white text-sm font-bold font-display">AcuSense Human &amp; Vehicle Filtering</h3>
                    </div>
                    <span className="px-2.5 py-1 bg-green-500/20 text-green-400 border border-green-500/30 text-[11px] font-semibold rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Active 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Security Capabilities Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Our Comprehensive Systems
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-navy-900 mt-3 mb-4">
              Integrated Electronic Protection Systems
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From single-building setups to multi-acre campus deployments, Rahim &amp; Sons provides hardware selection,
              optical fiber wiring, NVR clustering, and official compliance with civil authorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">4K ColorVu IP CCTV Cameras</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Full-color video capture even in pitch-black environments. Powered by Hikvision &amp; Dahua enterprise
                  lenses with deep-learning AcuSense for real-time false-alarm suppression.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> 4K Ultra-HD (3840×2160) resolution</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> PoE (Power over Ethernet) single-wire setup</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> IP67 weatherproof metal housing</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Optical PTZ 360° perimeter tracking</li>
                </ul>
              </div>
              <Link
                to="/contact?service=CCTV"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Request Camera Quotation</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Biometric Access &amp; Turnstiles</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Enterprise access management utilizing contactless facial recognition, fingerprint verification, RFID
                  cards, and motorized tripod turnstiles for commercial headquarters and schools.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Anti-spoofing dual-lens AI face recognition</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Electromagnetic maglocks (600 lbs / 1200 lbs)</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Automated time &amp; attendance payroll export</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Emergency fire-break override integration</li>
                </ul>
              </div>
              <Link
                to="/contact?service=Biometric"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Configure Access Control</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Centralized NVR Control Rooms</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Command center architecture with multi-screen video walls, hot-swappable enterprise RAID storage,
                  automated cloud backups, and encrypted remote streaming on phone and PC.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> 16 to 128 channel NVR arrays with H.265+ compression</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> 30 to 90 days continuous high-bitrate archive</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Redundant UPS power backup for loadshedding</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Multi-user role-based security permissions</li>
                </ul>
              </div>
              <Link
                to="/contact?service=NVR"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Plan Control Room</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Fire Alarm &amp; Smoke Detection</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  NFPA compliant addressable and conventional fire alarm networks featuring optical smoke sensors, heat
                  detectors, manual call points, and motorized sounder sirens.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Intelligent addressable loop panels</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Strobe beacons with high-decibel alarm output</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Auto-dialer integration to dispatch emergency alerts</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Regular maintenance testing and calibration</li>
                </ul>
              </div>
              <Link
                to="/contact?service=FireAlarm"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Inquire Fire Systems</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Smart Video Intercoms</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  IP video door phones and multi-apartment video door stations. Receive two-way audio &amp; video visitor
                  rings directly on your smartphone anywhere in the world and unlock doors remotely.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> 7-inch &amp; 10-inch capacitive touch indoor screens</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Wide-angle 180° fish-eye camera stations</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> RFID keyfob &amp; passcode unlock integration</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Multi-tenant building PBX intercom networks</li>
                </ul>
              </div>
              <Link
                to="/contact?service=Intercom"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Get Intercom Details</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Perimeter Beam &amp; Intrusion Defense</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Boundary security utilizing active infrared photoelectric beams, laser tripwires, and outdoor dual-tech
                  motion sensors to trigger immediate sirens and mobile push notifications.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Up to 150m boundary beam coverage</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Animal immunity algorithms to prevent false triggers</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Instant GSM alert SMS &amp; auto-dial call</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Synchronized floodlight and alarm siren triggering</li>
                </ul>
              </div>
              <Link
                to="/contact?service=Perimeter"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Secure Your Perimeter</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-navy-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
              Upgrade Your Premise Security with High-Definition Surveillance
            </h2>
            <p className="text-slate-300 mt-2 text-sm sm:text-base">
              Book a site audit with our security systems engineers in Islamabad.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 shrink-0">
            <Link
              to="/contact?service=Security%20Solutions"
              className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              Request Free Site Audit
            </Link>
            <Link
              to="/services"
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display font-semibold text-sm sm:text-base transition-all"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
