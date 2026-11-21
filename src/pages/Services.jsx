import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      {/* Page Header Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-display font-bold text-xs uppercase tracking-widest">Our Expertise</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl mt-2">Engineering & Technology Services</h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-base sm:text-lg">
            Comprehensive Civil & Construction Works, Solar Systems, Net-Metering, Security, Networking, and
            Electrical & Mechanical solutions tailored to your facility.
          </p>
        </div>
      </section>

      {/* Detailed Services Sections */}
      <section className="py-16 sm:py-24 bg-white space-y-20">


        {/* Service 1: Solar Systems */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
            <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/15 text-blue-700 font-display font-bold text-xs uppercase">
                01. Renewable Energy
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy-900">
                Solar Power Systems (Hybrid, On-Grid & Off-Grid)
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Slash your electricity bills by up to 90% with custom-engineered solar power solutions using Tier-1 N-Type
                Bifacial modules, high-efficiency smart inverters, and lithium battery storage banks.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 pt-2">
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Residential 5kW – 30kW Hybrid Systems</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Commercial & Industrial 50kW – 1MW+ Plants</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Hot-Dip Galvanized Elevated Structures</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Mobile App Real-Time Generation Monitoring</li>
              </ul>
              <div className="pt-3 flex flex-wrap gap-4">
                <Link
                  to="/contact?service=Solar%20Power%20Systems"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-sm transition-colors shadow"
                >
                  Request Solar Quote
                </Link>
                <Link
                  to="/solar-systems"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-navy-900 font-display font-bold text-sm transition-colors"
                >
                  View Solar Details →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <img
                src="/assets/images/solar-2.jpg"
                alt="Solar Systems Installation"
                className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Service 2: Net-Metering */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
            <div className="lg:col-span-5">
              <img
                src="/assets/images/net metring.png"
                alt="Net-Metering Bi-Directional Meter"
                className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-md"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/15 text-blue-700 font-display font-bold text-xs uppercase">
                02. Grid Export Licensing
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy-900">
                Net-Metering & Green Meter Commissioning
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Export your surplus solar units back to the national grid and earn credits against peak-hour consumption.
                We handle the entire regulatory documentation and technical inspection workflow with IESCO & NEPRA.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 pt-2">
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> NEPRA Generation License Processing</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> IESCO Load Extension & NOC Approvals</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Dedicated AC/DC Earthing (less than 2 Ohms)</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Bi-Directional Green Meter Activation</li>
              </ul>
              <div className="pt-3 flex flex-wrap gap-4">
                <Link
                  to="/contact?service=Net-Metering%20Solutions"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-sm transition-colors shadow"
                >
                  Apply for Net-Metering
                </Link>
                <Link
                  to="/net-metering"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-navy-900 font-display font-bold text-sm transition-colors"
                >
                  View Net-Metering Details →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service 3: Security Solutions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
            <div className="lg:col-span-7 space-y-4 order-2 lg:order-1">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/15 text-blue-700 font-display font-bold text-xs uppercase">
                03. Smart Surveillance
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy-900">
                Security & Surveillance Solutions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Protect your premises 24/7 with AI-enabled IP surveillance, perimeter intrusion detection, biometric
                access control, and centralized security monitoring rooms.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 pt-2">
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> 4K ColorVu & PTZ IP Camera Networks</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Biometric Attendance & RFID Door Locks</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Walk-Through Gates & Barrier Systems</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Addressable Fire Alarm & Smoke Detection</li>
              </ul>
              <div className="pt-3 flex flex-wrap gap-4">
                <Link
                  to="/contact?service=Security%20Solutions"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-sm transition-colors shadow"
                >
                  Request Security Audit
                </Link>
                <Link
                  to="/security-solutions"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-navy-900 font-display font-bold text-sm transition-colors"
                >
                  View Security Details →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5 order-1 lg:order-2">
              <img
                src="/assets/images/security.jpg"
                alt="CCTV Security & Access Control"
                className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Service 4: Networking & Electrical/Mechanical Works */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
            <div className="lg:col-span-5">
              <img
                src="/assets/images/networking.jpg"
                alt="Enterprise Networking and Server Rack"
                className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-md"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/15 text-blue-700 font-display font-bold text-xs uppercase">
                04. IT & E&M Infrastructure
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy-900">
                Networking & Electrical / Mechanical Works
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Complete enterprise connectivity and heavy-duty electrical/mechanical installations for corporate offices,
                plazas, hospitals, and industrial facilities.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 pt-2">
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Cat6/Cat6A Structured Cabling & Patch Panels</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Fiber Optic Splicing & OTDR Testing</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Main LT/HT Distribution Boards & ATS Panels</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Mechanical Ducting, Pumps & Generator Sync</li>
              </ul>
              <div className="pt-3 flex flex-wrap gap-4">
                <Link
                  to="/contact?service=Networking%20%26%20E%26M%20Solutions"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-sm transition-colors shadow"
                >
                  Consult Our Engineers
                </Link>
                <Link
                  to="/networking-solutions"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-navy-900 font-display font-bold text-sm transition-colors"
                >
                  View Networking Details →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service 5: Civil & Construction Works */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
            <div className="lg:col-span-5">
              <img
                src="/assets/images/construction.png"
                alt="Civil and Construction Works"
                className="w-full h-72 sm:h-80 object-cover rounded-2xl shadow-md"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/15 text-blue-700 font-display font-bold text-xs uppercase">
                05. Civil & Structural Engineering
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-navy-900">
                Civil & Construction Works
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Residential and commercial building construction, structural design, RCC works, foundations,
                infrastructure development, and turnkey construction project management.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-700 pt-2">
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Residential & Commercial Building Construction</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Structural Design & RCC Works</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Foundations & Infrastructure Development</li>
                <li className="flex items-center gap-2"><span className="text-blue-500 font-bold">✓</span> Turnkey Construction Project Management</li>
              </ul>
              <div className="pt-3 flex flex-wrap gap-4">
                <Link
                  to="/contact?service=Civil%20%26%20Construction%20Works"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-sm transition-colors shadow"
                >
                  Request Construction Quote
                </Link>
                <Link
                  to="/civil-construction"
                  className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-navy-900 font-display font-bold text-sm transition-colors"
                >
                  View Construction Details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}