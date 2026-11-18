import { Link } from 'react-router-dom';

export default function NetMetering() {
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
            <span className="text-blue-400 font-medium">Net-Metering Solutions</span>
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-300 font-display font-bold text-xs uppercase tracking-widest">
            NEPRA &amp; IESCO Regulatory Licensing
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl mt-3 tracking-tight">
            Net-Metering Solutions
            <span className="block text-blue-400 text-2xl sm:text-4xl mt-1 font-bold">
              Bi-Directional Green Meter Activation
            </span>
          </h1>
          <p className="text-slate-300 mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">
            Export your extra daytime solar units directly into the national power grid and earn billing credits against
            night consumption. We handle the entire documentation, load extension, and meter installation with IESCO and
            NEPRA.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <Link
              to="/contact?service=Net-Metering%20Solutions"
              className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Apply for Net-Metering
            </Link>
            <a
              href="tel:03335569953"
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display font-semibold text-sm sm:text-base transition-all"
            >
              Consult Net-Metering Officer (0333-5569953)
            </a>
          </div>
        </div>
      </section>

      {/* How Net-Metering Works */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">
                End-to-End Processing
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 leading-tight">
                Turn Your Electric Meter into an Income Asset
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Under NEPRA’s Alternative &amp; Renewable Energy regulations, residential and commercial consumers with a
                3-Phase connection can export surplus solar units to IESCO through an authorized bi-directional meter.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                At <strong>Rahim &amp; Sons Enterprises</strong>, we take 100% of the bureaucratic burden off your
                shoulders. From your initial application dossier, site inspection, and load sanctioning to the green meter
                installation and first net-metered bill verification, our engineers handle everything.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-navy-900">Application &amp; NOC Preparation</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Dossier preparation, bill history analysis, and DISCO load sanctioning.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-navy-900">Dedicated AC/DC Earthing &amp; Inspection</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Chemical earthing bores with certified test reports (&lt; 2 Ohms resistance).</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-navy-900">NEPRA Distributed Generation License</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Official generation license issuance and IESCO agreement signing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-navy-900">Green Meter Commissioning</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Installation of IESCO certified bi-directional meter and live grid export.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="/assets/images/net metring.png"
                  alt="Net-Metering Bi-Directional Meter"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute bottom-5 left-5 right-5 bg-navy-900/95 text-white p-5 rounded-xl border border-white/10 backdrop-blur-md">
                  <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">IESCO Approved Vendor</p>
                  <p className="text-sm font-medium mt-1">100% Approval Record Across Islamabad &amp; Rawalpindi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Checklist Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Requirements</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 mt-2">
              Net-Metering Eligibility Checklist
            </h2>
            <p className="text-slate-600 mt-3 text-base">Check whether your home or commercial building is ready for Net-Metering:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base mb-4">
                01
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">3-Phase Connection</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                You must have an active 3-Phase electricity connection. If you have single-phase, we handle the 3-phase load extension conversion with IESCO.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base mb-4">
                02
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">Sanctioned Load</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Solar system size (kW) can be installed up to 1.5x of your sanctioned load. If load extension is required, we process it concurrently.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base mb-4">
                03
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">Three-Phase Inverter</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                The solar inverter must be a PEC/NEPRA approved On-Grid or Hybrid 3-phase inverter with anti-islanding protection.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base mb-4">
                04
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">Earthing Certificate</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Separate AC and DC chemical earthing pits with resistance less than 2 ohms verified by certified earth-tester equipment.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base mb-4">
                05
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">Valid Ownership Papers</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Copy of property allotment letter / registry, CNIC of connection holder, and recent paid electricity bills with zero arrears.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base mb-4">
                06
              </div>
              <h3 className="font-display font-bold text-lg text-navy-900">Turnkey Partner</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Rahim &amp; Sons Enterprises provides end-to-end representation from application to final green meter testing.
              </p>
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
              Start Exporting Units to IESCO Grid Today
            </h2>
            <p className="text-slate-300 mt-2 text-sm sm:text-base">
              Contact Rahim &amp; Sons Enterprises to begin your Net-Metering licensing dossier in Islamabad.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 shrink-0">
            <Link
              to="/contact?service=Net-Metering%20Solutions"
              className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              Apply for Green Meter
            </Link>
            <Link
              to="/services"
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display font-semibold text-sm sm:text-base transition-all"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
