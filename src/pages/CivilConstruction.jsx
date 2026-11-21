import { Link } from 'react-router-dom';

export default function CivilConstruction() {
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
            <span className="text-blue-400 font-medium">Civil &amp; Construction Works</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider mb-4">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Civil &amp; Structural Engineering
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-5">
                Turnkey Civil &amp; Commercial Construction in Islamabad &amp; Rawalpindi
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                From residential bungalows and multi-storey commercial plazas to heavy-duty RCC foundations and
                structural development, Rahim &amp; Sons Enterprises provides end-to-end civil contracting with
                uncompromising structural integrity and engineering precision.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact?service=Civil%20%26%20Construction%20Works"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-sm shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Request Construction Assessment</span>
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
                  <span>Call Project Director</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-navy-800 text-left">
                <div>
                  <span className="block text-2xl font-display font-extrabold text-blue-400">Grade 60</span>
                  <span className="text-xs text-slate-400 mt-1 block">Deformed Steel Rebar</span>
                </div>
                <div>
                  <span className="block text-2xl font-display font-extrabold text-white">Turnkey</span>
                  <span className="text-xs text-slate-400 mt-1 block">Grey Structure to Premium Finish</span>
                </div>
                <div>
                  <span className="block text-2xl font-display font-extrabold text-blue-400">100%</span>
                  <span className="text-xs text-slate-400 mt-1 block">Seismic Code Compliance</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-700/80 group">
                <img
                  src="/assets/images/construction.png"
                  alt="Civil and Commercial Construction Site"
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-navy-900/90 backdrop-blur-md p-4 rounded-xl border border-navy-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-blue-400 font-bold block">Engineering Excellence</span>
                      <h3 className="text-white text-sm font-bold font-display">Structural RCC &amp; Turnkey Development</h3>
                    </div>
                    <span className="px-2.5 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[11px] font-semibold rounded-full flex items-center gap-1.5">
                      On Schedule
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Construction Capabilities Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Our Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-navy-900 mt-3 mb-4">
              Comprehensive Civil &amp; Building Engineering Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Rahim &amp; Sons Enterprises provides comprehensive general contracting, structural engineering, and
              modern architecture services to bring your residential or commercial vision to reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-slate-200/80 hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Commercial Plazas &amp; High-Rise</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Multi-storey shopping centers, office buildings, and commercial complexes engineered for maximum floor efficiency,
                  heavy foot traffic, and stringent safety codes.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Heavy-duty raft and isolated footing foundations</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Basements with comprehensive waterproofing membranes</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Integrated elevator shafts &amp; emergency fire exits</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> CDA / RDA building regulation approval support</li>
                </ul>
              </div>
              <Link
                to="/contact?service=Civil%20%26%20Construction%20Works"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Consult Plaza Project</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Residential Villas &amp; Bungalows</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Custom luxury homes built with precision craftsmanship, modern architectural aesthetics, energy-efficient layouts,
                  and premium material standards.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Contemporary, classical, and minimalist elevations</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Thermal insulation and damp-proof courses (DPC)</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Solar-ready roofs and smart home conduit wiring</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> High-grade plastering and anti-efflorescence treatment</li>
                </ul>
              </div>
              <Link
                to="/contact?service=Civil%20%26%20Construction%20Works"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Plan Your Dream Home</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">RCC Structures &amp; Grey Framework</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Rock-solid reinforced cement concrete framing built with tested concrete cylinder mix designs and certified
                  ASTM Grade 60 steel rebar.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Certified 3,000 to 4,000 PSI ready-mix concrete</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Accurate shuttering with steel and marine plywood</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Strict water curing protocols for peak durability</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Ultrasonic and slump testing on every pour</li>
                </ul>
              </div>
              <Link
                to="/contact?service=Civil%20%26%20Construction%20Works"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Request Grey Structure Rate</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Turnkey Finishing &amp; Fit-Outs</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  From porcelain floor tiling and designer false ceilings to custom woodwork and premium sanitary ware, we deliver
                  move-in ready perfection.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> High-end porcelain, granite &amp; marble flooring</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Moisture-resistant gypsum board false ceilings</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Solid wood doors &amp; contemporary kitchen cabinetry</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Double glazed soundproof aluminum windows</li>
                </ul>
              </div>
              <Link
                to="/contact?service=Civil%20%26%20Construction%20Works"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Inquire Finishing Package</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Foundation &amp; Deep Excavation</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Specialized geotechnical soil testing, heavy machine earthwork excavation, soil compaction, and subterranean retaining walls.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Soil bearing capacity (SBC) core testing</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> RCC retaining walls with drain weeping holes</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Termite proofing chemical trench treatment</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Backfilling with proctor-density compaction</li>
                </ul>
              </div>
              <Link
                to="/contact?service=Civil%20%26%20Construction%20Works"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Request Earthwork Quote</span>
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
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-navy-900 mb-2">Renovation &amp; Infrastructure Works</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Structural retrofitting, floor additions, commercial facility remodeling, boundary walls, and internal asphalt road networks.
                </p>
                <ul className="text-xs text-slate-600 space-y-2 mb-6">
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Carbon fiber wrapping &amp; column beam strengthening</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Complete roof water &amp; heat proofing treatments</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Sewerage manholes &amp; underground water tanks</li>
                  <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Interlocking tough paver driveways &amp; walkways</li>
                </ul>
              </div>
              <Link
                to="/contact?service=Civil%20%26%20Construction%20Works"
                className="text-blue-600 font-display font-bold text-sm hover:text-blue-700 inline-flex items-center gap-1 group"
              >
                <span>Plan Renovation Project</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Step Construction Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Execution Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-navy-900 mt-3 mb-4">
              Our Structured Construction Methodology
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every project follows an uncompromising timeline, transparent bills of quantities (BOQ), and certified
              engineering milestones from ground-breaking to handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base mb-4 shadow">
                01
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">Architectural &amp; Structural Design</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Complete 2D floor plans, 3D photorealistic elevations, and structural CAD calculations verified against
                the Building Code of Pakistan.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base mb-4 shadow">
                02
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">Soil Investigation &amp; BOQ</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Geotechnical bore testing, detailed material quantity estimates, transparent milestone pricing, and CDA/RDA
                regulatory clearances.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base mb-4 shadow">
                03
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">Excavation &amp; Foundation</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Deep machine excavation, termite chemical barrier, lean concrete blinding, and robust raft or isolated footing
                reinforcement steel laying.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base mb-4 shadow">
                04
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">RCC Framework &amp; Masonry</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Precision column, beam, and slab casting using Grade 60 rebar steel and high-spec ready-mix concrete, followed by
                burnt clay brick masonry walls.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base mb-4 shadow">
                05
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">MEP &amp; Smart Integration</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Seamless embedded conduit installation for electrical wiring, solar connections, Cat6 data networking, plumbing,
                and CCTV security lines.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base mb-4 shadow">
                06
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">Turnkey Finishing &amp; Handover</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Flawless plastering, tile installation, false ceilings, sanitary fittings, paint work, snag list clearance, and
                warranty-backed key handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">
                Our Engineering Guarantee
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 leading-tight">
                No Compromise on Steel, Cement, or Safety Standards
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                At <strong>Rahim &amp; Sons Enterprises</strong>, we believe every structure should endure for generations.
                We eliminate contractor shortcuts by assigning dedicated site engineers and conducting independent
                laboratory testing on every batch of materials.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-navy-900 text-sm">Certified Prime Brands Steel</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Exclusively ASTM A615 Grade 60 rebar sourced directly from certified rolling mills with mill test certificates.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-navy-900 text-sm">Daily Site Supervision by PEC Registered Engineers</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Strict quality monitoring of concrete water-cement ratios, slump tests, and reinforcement overlap spacing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-navy-900 text-sm">Integrated MEP and E&amp;M Synergy</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Because we are also experts in Solar, Networking, and Security, all electrical conduits and solar structural provisions are built right into the slab.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-navy-900 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
                <h3 className="font-display font-bold text-2xl text-white mb-4">Planning a Construction Project?</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Get a comprehensive cost estimate, architectural review, and structural consultation from our team in
                  E-11/3 Markaz, Islamabad.
                </p>
                <div className="space-y-3 mb-8 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span>Free preliminary site survey and plot inspection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span>Transparent itemized Bill of Quantities (BOQ)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span>Milestone-based payment schedules tied to progress</span>
                  </div>
                </div>
                <Link
                  to="/contact?service=Civil%20%26%20Construction%20Works"
                  className="w-full inline-block text-center py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm transition-colors shadow-lg"
                >
                  Schedule Site Consultation →
                </Link>
              </div>
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
              Build with Confidence. Build with Rahim &amp; Sons.
            </h2>
            <p className="text-slate-300 mt-2 text-sm sm:text-base">
              Speak with our senior civil and structural project engineers in Islamabad today.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 shrink-0">
            <Link
              to="/contact?service=Civil%20%26%20Construction%20Works"
              className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              Get Construction Quote
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
