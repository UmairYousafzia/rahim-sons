import { Link } from 'react-router-dom';

export default function SolarSystems() {
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
            <span className="text-blue-400 font-medium">Solar Power Systems</span>
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-600/20 border border-blue-400/30 text-blue-300 font-display font-bold text-xs uppercase tracking-widest">
            Turnkey Renewable Energy Engineering
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl mt-3 tracking-tight">
            Solar Power Systems
            <span className="block text-blue-400 text-2xl sm:text-4xl mt-1 font-bold">
              Hybrid, On-Grid &amp; Off-Grid Plants
            </span>
          </h1>
          <p className="text-slate-300 mt-4 max-w-3xl text-base sm:text-lg leading-relaxed">
            Slash electricity bills by up to 90% and protect your property from load-shedding with precision-engineered
            Tier-1 solar panel systems, high-efficiency smart inverters, and lithium battery banks.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-6">
            <Link
              to="/contact?service=Solar%20Power%20Systems"
              className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Request Solar Assessment
            </Link>
            <a
              href="tel:03335569953"
              className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-display font-semibold text-sm sm:text-base transition-all"
            >
              Call Solar Engineer (0333-5569953)
            </a>
          </div>
        </div>
      </section>

      {/* Detailed Solutions Overview */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">
                Engineered for Maximum Yield
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 leading-tight">
                High-Performance Solar Energy Designed for Pakistan's Climate
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                At <strong>Rahim &amp; Sons Enterprises</strong>, we design and install custom solar arrays tailored
                specifically to your roof structure, shadow profile, and daytime/nighttime power consumption patterns.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Every installation uses genuine, factory-certified Tier-1 N-Type TOPCon and Bifacial solar modules, German
                and European standard cabling, and high-spec surge protection devices (SPDs) to withstand voltage
                fluctuations and lightning.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-display font-bold text-navy-900 text-sm flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✓</span> Tier-1 Bifacial Modules
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Up to 25% extra generation from rear reflected sunlight.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-display font-bold text-navy-900 text-sm flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✓</span> Smart Mobile App
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Live 24/7 monitoring of generation, export, and load.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-display font-bold text-navy-900 text-sm flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✓</span> Heavy Duty Galvanized Structure
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Hot-dip galvanized (14-gauge) frames built for 140km/h winds.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-display font-bold text-navy-900 text-sm flex items-center gap-2">
                    <span className="text-blue-600 font-bold">✓</span> Dual AC/DC Earthing
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">Chemical earthing bores with resistance strictly &lt; 2 Ohms.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="/assets/images/solar-2.jpg"
                  alt="Solar Systems Installation"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute bottom-5 left-5 right-5 bg-navy-900/95 text-white p-5 rounded-xl border border-white/10 backdrop-blur-md">
                  <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">Turnkey Engineering Guarantee</p>
                  <p className="text-sm font-medium mt-1">25-Year Panel Performance Warranty • 5-Year Inverter Replacement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Types Breakdown */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Configuration Options</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 mt-2">
              Choose the Perfect Solar System Architecture
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              We engineer the three primary configurations based on your load priorities and grid reliability.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: On-Grid */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all hover-lift flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-display font-extrabold text-lg mb-5">
                01
              </div>
              <h3 className="font-display font-bold text-xl text-navy-900">On-Grid Solar Systems</h3>
              <p className="text-xs text-blue-600 font-semibold mt-1">Best for Bill Reduction &amp; Net-Metering</p>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed flex-grow">
                Synchronizes directly with the WAPDA/IESCO grid. Daytime solar directly powers your premises, and surplus
                power is exported to the grid via bidirectional Net-Metering.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 mt-5 pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Fastest payback period (2.5 – 3 years)</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Lowest initial capital investment</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Zero battery maintenance costs</li>
              </ul>
              <Link
                to="/contact?service=On-Grid%20Solar"
                className="mt-6 block text-center py-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-navy-900 font-display font-bold text-xs transition-colors"
              >
                Get On-Grid Quote
              </Link>
            </div>

            {/* Card 2: Hybrid */}
            <div className="bg-white rounded-2xl p-7 border-2 border-blue-600 shadow-lg hover:shadow-2xl transition-all hover-lift flex flex-col relative">
              <span className="absolute -top-3 right-5 px-3 py-1 rounded-full bg-blue-600 text-white font-display font-bold text-[11px] uppercase tracking-wider">
                Most Popular
              </span>
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-display font-extrabold text-lg mb-5">
                02
              </div>
              <h3 className="font-display font-bold text-xl text-navy-900">Hybrid Solar Systems</h3>
              <p className="text-xs text-blue-600 font-semibold mt-1">Net-Metering + 24/7 Battery Backup</p>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed flex-grow">
                The ultimate residential solution: powers your home, exports surplus to grid, and automatically switches
                to lithium battery storage during power outages in milliseconds.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 mt-5 pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Zero transfer time (no computer/AC reset)</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Active Net-Metering export enabled</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> High-life Lithium LiFePO4 batteries</li>
              </ul>
              <Link
                to="/contact?service=Hybrid%20Solar"
                className="mt-6 block text-center py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-xs transition-colors shadow"
              >
                Get Hybrid Quote
              </Link>
            </div>

            {/* Card 3: Off-Grid */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all hover-lift flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-display font-extrabold text-lg mb-5">
                03
              </div>
              <h3 className="font-display font-bold text-xl text-navy-900">Off-Grid Solar Systems</h3>
              <p className="text-xs text-blue-600 font-semibold mt-1">Complete Energy Independence</p>
              <p className="text-sm text-slate-600 mt-4 leading-relaxed flex-grow">
                Ideal for remote farmhouses, agricultural tubewells, and areas without stable grid access. Operates 100%
                autonomously with dedicated battery banks and generator sync.
              </p>
              <ul className="text-xs text-slate-600 space-y-2 mt-5 pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> 100% independent of power utility</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Heavy-duty tubewell/VFD compatibility</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Generator auto-start integration</li>
              </ul>
              <Link
                to="/contact?service=Off-Grid%20Solar"
                className="mt-6 block text-center py-3 rounded-xl bg-slate-100 hover:bg-blue-600 hover:text-white text-navy-900 font-display font-bold text-xs transition-colors"
              >
                Get Off-Grid Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Capacities & Applications Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-blue-600 font-display font-bold text-xs uppercase tracking-widest">Capacities &amp; Sizing</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-900 mt-2">
              Recommended System Sizing for Islamabad Properties
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm text-slate-600">
              <thead className="bg-navy-900 text-white font-display text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6">System Size</th>
                  <th className="py-4 px-6">Monthly Units (Avg.)</th>
                  <th className="py-4 px-6">Recommended For</th>
                  <th className="py-4 px-6">Net-Metering Eligible</th>
                  <th className="py-4 px-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-display font-bold text-navy-900">5kW – 7kW</td>
                  <td className="py-4 px-6">650 – 900 Units</td>
                  <td className="py-4 px-6">5 to 10 Marla Homes (1 AC + Fridge + Lights)</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">✓ Yes (3-Phase)</td>
                  <td className="py-4 px-6">
                    <Link to="/contact?service=5kW%20Solar" className="text-xs font-bold text-blue-600 hover:text-blue-800">
                      Inquire →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-display font-bold text-navy-900">10kW – 15kW</td>
                  <td className="py-4 px-6">1,300 – 1,950 Units</td>
                  <td className="py-4 px-6">1 Kanal Villa (2 to 4 Inverter ACs + Water Pump)</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">✓ Yes (Standard)</td>
                  <td className="py-4 px-6">
                    <Link to="/contact?service=10kW%20Solar" className="text-xs font-bold text-blue-600 hover:text-blue-800">
                      Inquire →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-display font-bold text-navy-900">20kW – 30kW</td>
                  <td className="py-4 px-6">2,600 – 3,900 Units</td>
                  <td className="py-4 px-6">2 Kanal Villas, Commercial Plazas &amp; Clinics</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">✓ Yes (High Export)</td>
                  <td className="py-4 px-6">
                    <Link to="/contact?service=20kW%20Solar" className="text-xs font-bold text-blue-600 hover:text-blue-800">
                      Inquire →
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-display font-bold text-navy-900">50kW – 200kW+</td>
                  <td className="py-4 px-6">6,500 – 26,000+ Units</td>
                  <td className="py-4 px-6">Hospitals, Schools, Factories &amp; Industrial Units</td>
                  <td className="py-4 px-6 text-emerald-600 font-bold">✓ Yes (Commercial NEPRA)</td>
                  <td className="py-4 px-6">
                    <Link to="/contact?service=Commercial%20Solar" className="text-xs font-bold text-blue-600 hover:text-blue-800">
                      Inquire →
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-navy-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
              Ready to Zero Out Your Electricity Bills?
            </h2>
            <p className="text-slate-300 mt-2 text-sm sm:text-base">
              Book a free on-site roof survey and detailed solar ROI proposal with our Islamabad engineers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 shrink-0">
            <Link
              to="/contact?service=Solar%20Power%20Systems"
              className="px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-display font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              Book Site Survey
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
