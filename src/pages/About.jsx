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
    </>
  );
}
