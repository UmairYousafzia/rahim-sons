 import { Link } from 'react-router-dom';
export default function About() {
  return (
    <>
      {/* Page Header Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-display font-bold text-xs uppercase tracking-widest">Company Profile</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl mt-2">About Rahim &amp; Sons Enterprises</h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-base sm:text-lg">
            An Electrical &amp; Mechanical Solutions Provider dedicated to powering homes, businesses, and industries with
            sustainable energy and smart engineering.
          </p>
        </div>
      </section>

      {/* Company Story & Mission */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Who We Are</span>
              <h2 className="font-display font-extrabold text-3xl text-navy-900">
                Engineering Excellence Rooted in Trust &amp; Innovation
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Headquartered at <strong>Office No. 09, 1st Floor Askaan Center, E-11/3 Markaz, MPCHS, Islamabad</strong>,
                Rahim &amp; Sons Enterprises has established itself as a premier multidisciplinary engineering firm. We
                bridge the gap between heavy electrical &amp; mechanical works and modern digital infrastructure.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Whether designing high-yield commercial Solar &amp; Net-Metering plants, deploying enterprise-grade IP
                CCTV security networks, or executing structured fiber cabling and distribution panel installations, our
                certified engineers deliver projects on time and within budget.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-blue-600">
                  <h3 className="font-display font-bold text-lg text-navy-900">Our Mission</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    To empower clients across Pakistan with cost-effective renewable solar energy, resilient
                    mechanical/electrical systems, and intelligent security &amp; IT networks.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border-l-4 border-navy-900">
                  <h3 className="font-display font-bold text-lg text-navy-900">Our Vision</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    To be recognized as Pakistan's most reliable and innovative Electrical &amp; Mechanical Solutions
                    Provider setting benchmarks in safety and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src="/assets/images/5gridpanel.jpg"
                  alt="Rahim and Sons Engineering Operations"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="mt-20 pt-16 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Our Pillars</span>
              <h2 className="font-display font-extrabold text-3xl text-navy-900 mt-2">Core Engineering Standards</h2>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-blue-400 flex items-center justify-center font-display font-bold text-lg">
                  01
                </div>
                <h3 className="font-display font-bold text-xl text-navy-900 mt-5">Safety &amp; Regulatory Compliance</h3>
                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Every solar, electrical, and mechanical installation follows strict earthing, surge protection, and
                  NEPRA/IESCO regulatory standards.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-blue-400 flex items-center justify-center font-display font-bold text-lg">
                  02
                </div>
                <h3 className="font-display font-bold text-xl text-navy-900 mt-5">Transparent Consultation</h3>
                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Detailed ROI calculations, itemized bills of quantities (BOQ), and honest component warranties with zero
                  hidden charges.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover-lift">
                <div className="w-12 h-12 rounded-xl bg-navy-900 text-blue-400 flex items-center justify-center font-display font-bold text-lg">
                  03
                </div>
                <h3 className="font-display font-bold text-xl text-navy-900 mt-5">Lifecycle Maintenance</h3>
                <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                  Preventive maintenance contracts (SLA), remote inverter/CCTV health monitoring, and rapid on-site
                  troubleshooting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 1. Company Stats Strip ---------- */}
<section className="bg-navy-900 py-14 relative overflow-hidden">
  <div className="absolute inset-0 bg-engineering-grid opacity-30"></div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    <div>
      <div className="font-display font-extrabold text-3xl sm:text-4xl text-blue-400">350+</div>
      <div className="text-sm text-slate-300 mt-1">Projects Completed</div>
    </div>
    <div>
      <div className="font-display font-extrabold text-3xl sm:text-4xl text-blue-400">15+ MW</div>
      <div className="text-sm text-slate-300 mt-1">Solar Installed</div>
    </div>
    <div>
      <div className="font-display font-extrabold text-3xl sm:text-4xl text-blue-400">4</div>
      <div className="text-sm text-slate-300 mt-1">Core Service Divisions</div>
    </div>
    <div>
      <div className="font-display font-extrabold text-3xl sm:text-4xl text-blue-400">24/7</div>
      <div className="text-sm text-slate-300 mt-1">Technical Support</div>
    </div>
  </div>
</section>


{/* ---------- 2. Areas of Expertise ---------- */}
<section className="py-16 sm:py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto">
      <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Our Expertise</span>
      <h2 className="font-display font-extrabold text-3xl text-navy-900 mt-2">
        One Company for Power, Security &amp; Connectivity
      </h2>
      <p className="text-slate-600 mt-4 leading-relaxed">
        Instead of coordinating several contractors, you work with one accountable team across every system in your building.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-7">
      {[
        {
          title: 'Solar & Net-Metering',
          text: 'On-grid, hybrid, and off-grid plants for homes, plazas, and factories, including NEPRA/IESCO documentation and bidirectional meter commissioning.',
          to: '/solar-systems',
        },
        {
          title: 'Electrical & Mechanical Works',
          text: 'Distribution panels, earthing and surge protection, load calculations, cabling, and mechanical installations built to PEC and IEC safety standards.',
          to: '/services',
        },
        {
          title: 'Security & Surveillance',
          text: 'IP CCTV with NVR control rooms, biometric attendance, access control gates, and fire detection systems.',
          to: '/security-solutions',
        },
        {
          title: 'Networking & Fiber',
          text: 'Structured Cat6/Cat6A cabling, fiber splicing, rack dressing, and enterprise Wi-Fi for offices and campuses.',
          to: '/networking-solutions',
        },
      ].map((item) => (
        <div key={item.title} className="p-7 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover-lift flex flex-col">
          <h3 className="font-display font-bold text-xl text-navy-900">{item.title}</h3>
          <p className="text-sm text-slate-600 mt-2.5 leading-relaxed flex-grow">{item.text}</p>
          <Link to={item.to} className="mt-4 text-sm font-display font-bold text-blue-600 hover:text-blue-700">
            View details
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>


{/* ---------- 3. Our Journey (EDIT: replace years and milestones with real ones) ---------- */}
<section className="py-16 sm:py-24 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Our Journey</span>
      <h2 className="font-display font-extrabold text-3xl text-navy-900 mt-2">How We Grew</h2>
    </div>

    <ol className="mt-12 relative border-l-2 border-blue-200 ml-3 space-y-10">
      {[
        { year: '20XX', title: 'Company founded', text: 'Started as a local electrical contractor serving homes and small businesses in Islamabad.' },
        { year: '20XX', title: 'Expanded into solar', text: 'Added solar installation and began handling net-metering applications for clients.' },
        { year: '20XX', title: 'Security & networking divisions', text: 'Launched IP CCTV and structured cabling services to cover complete building infrastructure.' },
        { year: 'Today', title: '350+ projects delivered', text: 'Serving residential, commercial, and industrial clients in Islamabad and across Pakistan.' },
      ].map((m, i) => (
        <li key={i} className="pl-8 relative">
          <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></span>
          <div className="text-xs font-display font-bold text-blue-600">{m.year}</div>
          <h3 className="font-display font-bold text-lg text-navy-900 mt-0.5">{m.title}</h3>
          <p className="text-sm text-slate-600 mt-1 leading-relaxed">{m.text}</p>
        </li>
      ))}
    </ol>
  </div>
</section>


{/* ---------- 4. Compliance & Equipment Standards ---------- */}
<section className="py-16 sm:py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 space-y-4">
        <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Standards &amp; Quality</span>
        <h2 className="font-display font-extrabold text-3xl text-navy-900 leading-tight">
          Certified Work, Genuine Equipment
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Every project is documented, tested, and handed over with the paperwork you need for insurance,
          audits, and future maintenance.
        </p>
      </div>

      <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {[
          { title: 'Regulatory approvals', text: 'NEPRA and IESCO procedures followed for every net-metering project.' },
          { title: 'Safety standards', text: 'Work aligned with PEC and IEC guidelines, including proper earthing and surge protection.' },
          { title: 'Tier-1 components', text: 'Genuine solar panels, hybrid inverters, IP cameras, and networking gear with manufacturer warranty.' },
          { title: 'Full documentation', text: 'Engineering drawings, BOQ, test reports, and warranty papers delivered at handover.' },
        ].map((c) => (
          <div key={c.title} className="p-5 rounded-xl bg-white border border-slate-200/80 flex gap-3">
            <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="font-display font-bold text-base text-navy-900">{c.title}</h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


{/* ---------- 5. Team (EDIT: replace names, roles, and add real photos if available) ---------- */}
<section className="py-16 sm:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center max-w-2xl mx-auto">
      <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Our Team</span>
      <h2 className="font-display font-extrabold text-3xl text-navy-900 mt-2">The People Behind Your Project</h2>
      <p className="text-slate-600 mt-3 text-sm sm:text-base">
        Qualified engineers, certified technicians, and project coordinators working under one roof.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
      {[
        { name: 'Name Here', role: 'Managing Director' },
        { name: 'Name Here', role: 'Lead Electrical Engineer' },
        { name: 'Name Here', role: 'Solar & Net-Metering Manager' },
        { name: 'Name Here', role: 'IT & Security Systems Lead' },
      ].map((p, i) => (
        <div key={i} className="text-center p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover-lift">
          <div className="w-20 h-20 mx-auto rounded-full bg-navy-900 text-blue-400 flex items-center justify-center font-display font-extrabold text-xl">
            {p.name.charAt(0)}
          </div>
          <h3 className="font-display font-bold text-base text-navy-900 mt-4">{p.name}</h3>
          <p className="text-xs text-slate-500 mt-1">{p.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* ---------- 6. Call To Action ---------- */}
<section className="bg-navy-900 py-16 relative overflow-hidden">
  <div className="absolute inset-0 bg-engineering-grid opacity-30"></div>
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
    <div className="text-center lg:text-left max-w-2xl">
      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
        Planning a Project? Talk to Our Engineers.
      </h2>
      <p className="text-slate-300 mt-3 text-sm sm:text-base">
        Visit us at Askaan Center, E-11/3 Markaz, Islamabad, or book a free site assessment.
      </p>
    </div>

    <div className="flex flex-wrap justify-center gap-4 shrink-0">
      <Link
        to="/contact"
        className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm sm:text-base shadow-lg transition-all"
      >
        Contact Us
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
