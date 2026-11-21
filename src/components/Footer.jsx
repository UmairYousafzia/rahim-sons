import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 py-16 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-blue-500 shadow border border-white/10 overflow-hidden p-1">
                <img
                  src="/download.jpg"
                  alt="Rahim & Sons Logo"
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/100x100/0B192C/2563EB?text=R%26S';
                  }}
                />
              </div>
              <div>
                <span className="block font-display font-extrabold text-lg tracking-tight text-white leading-none">
                  RAHIM <span className="text-blue-500">&amp;</span> SONS
                </span>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-slate-400 mt-1">
                  Enterprises
                </span>
              </div>
            </Link>
            <p className="text-blue-400 font-display font-semibold text-sm">
              An Electrical &amp; Mechanical Solutions Provider
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Delivering reliable Solar Power Systems, NEPRA/IESCO Net-Metering, IP Security Surveillance, and Enterprise
              Networking solutions across Islamabad and Pakistan.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-blue-400 transition-colors">Projects Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Core Solutions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Our Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/solar-systems" className="hover:text-blue-400 transition-colors">Solar Systems (Hybrid / On-Grid)</Link></li>
              <li><Link to="/net-metering" className="hover:text-blue-400 transition-colors">Net-Metering &amp; Green Meter</Link></li>
              <li><Link to="/security-solutions" className="hover:text-blue-400 transition-colors">Security &amp; IP CCTV Surveillance</Link></li>
              <li><Link to="/networking-solutions" className="hover:text-blue-400 transition-colors">Enterprise Networking &amp; Fiber</Link></li>
              <li><Link to="/networking-solutions" className="hover:text-blue-400 transition-colors">Electrical &amp; Mechanical Works</Link></li>
              <li><Link to="/civil-construction" className="hover:text-blue-400 transition-colors">Civil &amp; Construction Works</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-blue-500 shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Office No. 09, 1st Floor Askaan Center, E-11/3 Markaz, MPCHS, Islamabad</span>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-blue-500 shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="space-y-0.5">
                  <a href="tel:03335569953" className="block hover:text-blue-400">0333-5569953</a>
                  <a href="tel:03015555788" className="block hover:text-blue-400">0301-5555788</a>
                  <a href="tel:0518319970" className="block hover:text-blue-400">051-8319970</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@rahimandsons.tech" className="hover:text-blue-400">info@rahimandsons.tech</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-12 pt-8 border-t border-navy-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Rahim &amp; Sons Enterprises. All Rights Reserved.</p>
          <p>An Electrical &amp; Mechanical Solutions Provider | Islamabad, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
