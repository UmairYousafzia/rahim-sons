import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  // Close mobile menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const servicePaths = [
    '/services',
    '/solar-systems',
    '/net-metering',
    '/security-solutions',
    '/networking-solutions'
  ];
  const isServiceActive = servicePaths.includes(location.pathname);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top Info Bar */}
      <div className="bg-navy-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-1">
            <a href="tel:03335569953" className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <svg className="w-3.5 h-3.5 text-blue-500 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>0333-5569953</span>
            </a>

            <a href="tel:03015555788" className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span>0301-5555788</span>
            </a>

            <a href="tel:0518319970" className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <span className="text-slate-600 hidden sm:inline">|</span>
              <span>051-8319970</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="mailto:info@rahimandsons.tech" className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <svg className="w-3.5 h-3.5 text-blue-500 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@rahimandsons.tech</span>
            </a>

            <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-400">
              <span>|</span>
              <svg className="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>E-11/3 Markaz, Islamabad</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" aria-label="Main Navigation">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-blue-500 shadow-md group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 overflow-hidden p-1">
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
            <span className="block font-display font-extrabold text-lg sm:text-xl tracking-tight text-navy-900 leading-none">
              RAHIM <span className="text-blue-600">&amp;</span> SONS
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-widest text-slate-500 mt-1">
              Enterprises
            </span>
          </div>
        </Link>

        {/* Desktop Menu Links with Dropdown */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link text-sm font-medium ${isActive ? 'active-nav' : 'text-slate-700 hover:text-blue-600'}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `nav-link text-sm font-medium ${isActive ? 'active-nav' : 'text-slate-700 hover:text-blue-600'}`}
          >
            About Us
          </NavLink>

          {/* Services Dropdown Container */}
          <div className="relative group">
            <button
              type="button"
              className={`nav-link inline-flex items-center gap-1.5 py-1 text-sm font-medium transition-colors focus:outline-none ${isServiceActive ? 'active-nav text-blue-600' : 'text-slate-700 hover:text-blue-600'}`}
              aria-expanded="false"
            >
              <span>Services</span>
              <svg
                className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full pt-3 w-80 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-2.5 space-y-1">
                <Link
                  to="/solar-systems"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-display font-bold text-sm text-navy-900 group-hover/item:text-blue-600">Solar Power Systems</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Hybrid, On-Grid &amp; Commercial Plants</span>
                  </div>
                </Link>

                <Link
                  to="/net-metering"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-display font-bold text-sm text-navy-900 group-hover/item:text-blue-600">Net-Metering Solutions</span>
                    <span className="block text-xs text-slate-500 mt-0.5">NEPRA &amp; IESCO Green Meter Licensing</span>
                  </div>
                </Link>

                <Link
                  to="/security-solutions"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-display font-bold text-sm text-navy-900 group-hover/item:text-blue-600">Security &amp; CCTV Solutions</span>
                    <span className="block text-xs text-slate-500 mt-0.5">4K IP Cameras, Access Gates &amp; Alarms</span>
                  </div>
                </Link>

                <Link
                  to="/networking-solutions"
                  className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group/item"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <div>
                    <span className="block font-display font-bold text-sm text-navy-900 group-hover/item:text-blue-600">Enterprise Networking &amp; E&amp;M</span>
                    <span className="block text-xs text-slate-500 mt-0.5">Fiber Cabling, Racks &amp; Main LT Panels</span>
                  </div>
                </Link>

                <div className="border-t border-slate-100 pt-1.5 mt-1">
                  <Link
                    to="/services"
                    className="flex items-center justify-between px-3 py-2 rounded-xl bg-blue-50/70 hover:bg-blue-600 hover:text-white text-blue-700 font-display font-bold text-xs transition-all group/all"
                  >
                    <span>View All Services Overview</span>
                    <svg className="w-4 h-4 transition-transform group-hover/all:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <NavLink
            to="/projects"
            className={({ isActive }) => `nav-link text-sm font-medium ${isActive ? 'active-nav' : 'text-slate-700 hover:text-blue-600'}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link text-sm font-medium ${isActive ? 'active-nav' : 'text-slate-700 hover:text-blue-600'}`}
          >
            Contact Us
          </NavLink>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-sm shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <span>Get a Free Quote</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          aria-label="Toggle Menu"
          className="md:hidden p-2.5 rounded-xl text-navy-900 hover:bg-slate-100 focus:outline-none transition-colors"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-2">
          <NavLink
            to="/"
            end
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-base font-medium ${isActive ? 'text-blue-600 bg-blue-50/60 font-bold' : 'text-slate-800 hover:bg-slate-50 hover:text-blue-600'}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-base font-medium ${isActive ? 'text-blue-600 bg-blue-50/60 font-bold' : 'text-slate-800 hover:bg-slate-50 hover:text-blue-600'}`}
          >
            About Us
          </NavLink>

          {/* Mobile Services Accordion */}
          <div className="space-y-1">
            <button
              type="button"
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium ${isServiceActive ? 'text-blue-600 font-bold' : 'text-slate-800 hover:bg-slate-50 hover:text-blue-600'}`}
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMobileServicesOpen && (
              <div className="pl-4 pr-2 space-y-1 bg-slate-50 rounded-xl py-2">
                <Link
                  to="/solar-systems"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
                >
                  ⚡ Solar Power Systems
                </Link>
                <Link
                  to="/net-metering"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
                >
                  🔄 Net-Metering Solutions
                </Link>
                <Link
                  to="/security-solutions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
                >
                  🛡️ Security &amp; CCTV Solutions
                </Link>
                <Link
                  to="/networking-solutions"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
                >
                  🌐 Enterprise Networking &amp; E&amp;M
                </Link>
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-xs font-bold text-blue-600 hover:text-blue-800 border-t border-slate-200/60 mt-1 pt-2"
                >
                  View All Services Overview →
                </Link>
              </div>
            )}
          </div>

          <NavLink
            to="/projects"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-base font-medium ${isActive ? 'text-blue-600 bg-blue-50/60 font-bold' : 'text-slate-800 hover:bg-slate-50 hover:text-blue-600'}`}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) => `block px-4 py-2.5 rounded-xl text-base font-medium ${isActive ? 'text-blue-600 bg-blue-50/60 font-bold' : 'text-slate-800 hover:bg-slate-50 hover:text-blue-600'}`}
          >
            Contact Us
          </NavLink>
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-bold text-sm shadow transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
