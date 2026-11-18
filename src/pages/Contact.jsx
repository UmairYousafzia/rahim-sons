import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: 'Solar Power Systems',
    location: '',
    message: ''
  });

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      // Find matching service option
      const options = [
        'Solar Power Systems',
        'Net-Metering Solutions',
        'Security Solutions',
        'Networking & E&M Solutions',
        'Complete Turnkey Project'
      ];
      const match = options.find((opt) => opt.toLowerCase().includes(serviceParam.toLowerCase()));
      if (match) {
        setFormData((prev) => ({ ...prev, service: match }));
      }
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: 'Solar Power Systems',
      location: '',
      message: ''
    });
  };

  return (
    <>
      {/* Page Header Banner */}
      <section className="bg-navy-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-display font-bold text-xs uppercase tracking-widest">Get In Touch</span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl mt-2">Contact Rahim &amp; Sons Enterprises</h1>
          <p className="text-slate-300 mt-3 max-w-2xl text-base sm:text-lg">
            Reach out for free site surveys, system quotations, Net-Metering consultancy, or technical support in
            Islamabad.
          </p>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Direct Contact Information Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <h2 className="font-display font-bold text-2xl text-navy-900">Head Office Details</h2>
                <p className="text-sm text-slate-600">
                  Visit our office in E-11/3 Markaz, Islamabad or contact our engineering team directly via phone or
                  email.
                </p>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-navy-900">Office Address</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      Office No. 09, 1st Floor Askaan Center,<br />
                      E-11/3 Markaz, MPCHS, Islamabad
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-navy-900">Phone &amp; WhatsApp</h3>
                    <div className="mt-1 space-y-1 text-sm">
                      <a href="tel:03335569953" className="block text-slate-700 hover:text-blue-600 font-medium">
                        0333-5569953 (Mobile &amp; WhatsApp)
                      </a>
                      <a href="tel:03015555788" className="block text-slate-700 hover:text-blue-600 font-medium">
                        0301-5555788 (Mobile)
                      </a>
                      <a href="tel:0518319970" className="block text-slate-700 hover:text-blue-600 font-medium">
                        051-8319970 (Landline)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/15 text-blue-600 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-navy-900">Official Email</h3>
                    <a href="mailto:info@rahimandsons.tech" className="block text-sm text-slate-700 hover:text-blue-600 font-medium mt-1">
                      info@rahimandsons.tech
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Location Map */}
              <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <iframe
                  title="Rahim &amp; Sons Enterprises Location - E-11/3 Markaz Islamabad"
                  src="https://www.google.com/maps?q=Askaan+Center+E-11/3+Markaz+MPCHS+Islamabad&amp;output=embed"
                  className="w-full h-56 rounded-xl border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Interactive Quote & Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-7 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="font-display font-bold text-2xl text-navy-900">Request a Free Quote or Site Survey</h2>
                <p className="text-sm text-slate-600 mt-1.5">
                  Fill out the form below and our project engineer will contact you within 2 business hours.
                </p>

                {/* Confirmation Banner */}
                {submitted && (
                  <div className="mt-6 p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="font-display font-bold text-base">Inquiry Submitted Successfully!</h4>
                        <p className="text-sm text-emerald-800 mt-1">
                          Thank you for contacting <strong>Rahim &amp; Sons Enterprises</strong>. Our engineering team will reach out shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-display font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Engr. Asad Khan"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-display font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 0333-1234567"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-xs font-display font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-display font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Required Service *
                      </label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm bg-white transition-all"
                      >
                        <option value="Solar Power Systems">Solar Power Systems (Hybrid / On-Grid)</option>
                        <option value="Net-Metering Solutions">Net-Metering &amp; Green Meter</option>
                        <option value="Security Solutions">Security &amp; IP CCTV Solutions</option>
                        <option value="Networking & E&M Solutions">Networking &amp; Electrical/Mechanical Works</option>
                        <option value="Complete Turnkey Project">Complete Turnkey Package</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-xs font-display font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Site Location / City *
                    </label>
                    <input
                      type="text"
                      id="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Sector E-11, Islamabad"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-display font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Project Details / Load Requirements
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your monthly electricity bill, required kW capacity, number of cameras, or networking points..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-display font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
                  >
                    Submit Inquiry Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
