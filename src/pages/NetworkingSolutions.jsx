import { Link } from 'react-router-dom';

export default function NetworkingSolutions() {
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
            <span className="text-blue-400 font-medium">Enterprise Networking &amp; E&amp;M</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider mb-4">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                Electrical &amp; Mechanical (E&amp;M) Engineering
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-5">
                High-Speed Fiber Optics &amp; Enterprise Networking in Islamabad
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Certified Cat6/Cat6A structured cabling, optical fiber fusion splicing, datacenter rack organization, and
                industrial-grade main LT/HT distribution panels with automatic ATS generator transfer.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact?service=Networking%20%26%20E%26M%20Solutions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-sm shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Request Network Architecture Plan</span>
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
                  <span>Call Networking Specialist</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-navy-800 text-left">
                <div>
                  <span className="block text-2xl font-display font-extrabold text-blue-400">10 Gbps</span>
                  <span className="text-xs text-slate-400 mt-1 block">Fiber Optical Throughput</span>
                </div>
                <div>
                  <span className="block text-2xl font-display font-extrabold text-white">Fluke Certified</span>
                  <span className="text-xs text-slate-400 mt-1 block">100% Pass Cable Verification</span>
                </div>
                <div>
                  <span className="block text-2xl font-display font-extrabold text-blue-400">&lt; 1 Ohm</span>
                  <span className="text-xs text-slate-400 mt-1 block">Precision Earthing Resistance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-700/80 group">
                <img
                  src="/assets/images/FiberBackbone.jpg"
                  alt="Optical Fiber Backbone and Server Rack Dressing"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-navy-900/90 backdrop-blur-md p-4 rounded-xl border border-navy-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-blue-400 font-bold block">Datacenter Infrastructure</span>
                      <h3 className="text-white text-sm font-bold font-display">Clean Patch Bays &amp; Fiber Splicing</h3>
                    </div>
                    <span className="px-2.5 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[11px] font-semibold rounded-full flex items-center gap-1.5">
                      Tier-3 Standard
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Networking & E&M Capabilities Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Engineering Scope
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-navy-900 mt-3 mb-4">
              End-to-End Enterprise Networking &amp; Electrical Systems
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Rahim &amp; Sons bridges the critical gap between high-speed IT data communications and robust heavy-current
              electrical distribution switchboards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Fiber Optic Backbone &amp; Splicing</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Long-distance, zero-attenuation optical transmission. We perform core-alignment fusion splicing, OTDR
                  trace testing, and deploy 12/24/48-core armored outdoor fiber optic links.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Single-Mode (OS2) and Multi-Mode (OM3/OM4)</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Fusion splice losses below 0.02 dB</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> 10G/40G SFP+ optical transceiver links</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Underground HDPE conduit pipe trenching</li>
                </ul>
              </div>
              <Link
                to="/contact?service=Fiber"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Inquire Fiber Deployment</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Structured Cat6 &amp; Cat6A Cabling</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Clean, organized, enterprise-standard structured cabling utilizing 100% pure annealed solid copper
                  conductors, 24/48 port keystone patch panels, and laser-labeled wall faceplates.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Certified Cat6 (1 Gbps) &amp; Cat6A (10 Gbps)</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Fluke DTX/DSX channel &amp; permanent link test reports</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Ceiling mesh wire basket &amp; perforated cable trays</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Color-coded patch cord architecture</li>
                </ul>
              </div>
              <Link
                to="/contact?service=StructuredCabling"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Get Cabling Estimate</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Datacenter Server Racks &amp; Dressing</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Transformation of tangled spaghetti wiring into pristine, airflow-optimized 42U and 24U server rack
                  cabinets with brushed cable organizers, vertical PDUs, and thermostatic fan cooling.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Heavy-gauge cold rolled steel rack enclosures</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Front &amp; rear vertical cable management channels</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Intelligent metered rack PDU power rails</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Rack earthing busbar to prevent electrostatic shock</li>
                </ul>
              </div>
              <Link
                to="/contact?service=ServerRack"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Organize Server Racks</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Main LT / HT Distribution Panels</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Design and fabrication of industrial low-tension (LT) and high-tension (HT) electrical switchboards.
                  Powder-coated 14/16 SWG steel cabinets featuring Schneider / ABB breakers and digital metering.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Pure electrolytic copper busbar with heat-shrink sleeves</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Microprocessor-based ACB and MCCB protection</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Class I+II Surge Protection Devices (SPD)</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Automatic power factor correction (APFC) capacitor banks</li>
                </ul>
              </div>
              <Link
                to="/contact?service=LTPanels"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Fabricate Electrical Panel</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">ATS &amp; AMF Generator Synchronization</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Automatic Transfer Switches (ATS) and Auto Mains Failure (AMF) panels providing zero-human-intervention
                  changeover between WAPDA utility power, commercial diesel gensets, and solar inverters.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Mechanically and electrically interlocked contactors</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Programmable DeepSea / Smartgen digital controller</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Under/over voltage, frequency, and reverse power protection</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Automatic generator warm-up &amp; cool-down timers</li>
                </ul>
              </div>
              <Link
                to="/contact?service=ATS"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Deploy ATS Switchboard</span>
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
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Commercial Earthing &amp; Lightning Arrester</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Chemical earth bore installation with low-resistance Bentonite/Marconite compound, copper tape bonding,
                  and Early Streamer Emission (ESE) lightning arresters protecting tall buildings.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Verified soil resistance strictly below 1.0 Ohm</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Pure 25x3mm bare copper conductor earth pits</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> ESE active lightning air terminal with strike counter</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Digital earth tester certification reports</li>
                </ul>
              </div>
              <Link
                to="/contact?service=Earthing"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Test &amp; Install Earthing</span>
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
              Optimize Your IT Connectivity &amp; Electrical Distribution
            </h2>
            <p className="text-slate-300 mt-2 text-sm sm:text-base">
              Speak with our senior telecommunications and power engineers in Islamabad.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 shrink-0">
            <Link
              to="/contact?service=Networking%20%26%20E%26M%20Solutions"
              className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              Book Site Survey
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
