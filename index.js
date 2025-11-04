import React from 'react';

// TRUST CONSULTING FIRM - Single-file React component
// Requirements: TailwindCSS must be available in the hosting app.
// Gold accent color used: #D4AF37

export default function TrustConsultingSite() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="bg-gradient-to-r from-[#003366] to-[#001f3f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#001f3f]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-semibold">TRUST CONSULTING FIRM</h1>
              <p className="text-sm opacity-80">Empowering Leaders. Building Organizations. Inspiring Excellence.</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
            <a href="#services" className="hover:text-[#D4AF37]">Services</a>
            <a href="#projects" className="hover:text-[#D4AF37]">Projects</a>
            <a href="#insights" className="hover:text-[#D4AF37]">Insights</a>
            <a href="#about" className="hover:text-[#D4AF37]">About</a>
            <a href="#contact" className="px-4 py-2 bg-[#D4AF37] text-[#001f3f] rounded-md shadow-sm font-semibold">Book a Consultation</a>
          </nav>

          <div className="md:hidden">
            <button className="px-3 py-2 rounded-md bg-[#D4AF37] text-[#001f3f]">Menu</button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3d0b6c6e2e6a0b9f0e5b2f7f6b9d7c9b')] bg-cover bg-center">
          <div className="bg-black/40">
            <div className="max-w-6xl mx-auto px-6 py-28 text-white">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">We Build Trusted Leaders for a Changing World</h2>
              <p className="mt-4 max-w-2xl text-lg opacity-90">TRUST CONSULTING FIRM helps organizations develop transformational leaders and sustainable management systems — combining strategy, people, and performance.</p>

              <div className="mt-8 flex gap-4">
                <a href="#contact" className="inline-block px-6 py-3 bg-[#D4AF37] text-[#001f3f] font-semibold rounded-md shadow">Book a Consultation</a>
                <a href="#services" className="inline-block px-6 py-3 border border-white/30 rounded-md">Explore Services</a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SNAPSHOT */}
        <section id="about" className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold">About TRUST</h3>
              <p className="mt-4 text-slate-700">We partner with leaders and teams across sectors to build trust-based cultures, scalable management systems, and measurable performance. Our approach blends evidence-based strategy with leadership formation and practical coaching.</p>

              <ul className="mt-6 space-y-2 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#D4AF37] font-bold">•</span> Executive Coaching & Leadership Academies</li>
                <li className="flex items-start gap-3"><span className="text-[#D4AF37] font-bold">•</span> Organizational Design & Change Management</li>
                <li className="flex items-start gap-3"><span className="text-[#D4AF37] font-bold">•</span> Strategy, Performance & Impact Measurement</li>
              </ul>

              <div className="mt-6">
                <a href="#services" className="text-[#D4AF37] font-semibold">Learn More →</a>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=9e2a5c3d1e3f5b4e7b1a2b9c" alt="Leadership" className="w-full h-72 object-cover" />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-semibold">Our Services</h3>
            <p className="mt-2 text-slate-600">Tailored programs and consulting to transform leaders and organizations.</p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <article className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">Leadership Development</h4>
                <p className="mt-2 text-slate-600">Executive coaching, leadership academies, 360 diagnostics, and succession planning.</p>
                <a href="#contact" className="mt-4 inline-block text-[#D4AF37] font-semibold">Request Proposal →</a>
              </article>

              <article className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">Organizational Management</h4>
                <p className="mt-2 text-slate-600">Structure design, process optimization, governance, and KPI frameworks.</p>
                <a href="#contact" className="mt-4 inline-block text-[#D4AF37] font-semibold">Request Audit →</a>
              </article>

              <article className="bg-white p-6 rounded-lg shadow">
                <h4 className="font-semibold">Strategic Consulting</h4>
                <p className="mt-2 text-slate-600">Strategy formulation, performance improvement, and change leadership.</p>
                <a href="#contact" className="mt-4 inline-block text-[#D4AF37] font-semibold">Start a Project →</a>
              </article>
            </div>
          </div>
        </section>

        {/* PROJECTS / CASE STUDIES */}
        <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-semibold">Case Studies</h3>
          <p className="mt-2 text-slate-600">Selected engagements with measurable outcomes.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold">Public Sector Change Management</h4>
              <p className="mt-2 text-slate-600">Redesigned workflow across six departments; reduced processing time by 42%.</p>
              <div className="mt-4 flex gap-3">
                <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm">Efficiency</span>
                <span className="px-3 py-1 bg-[#003366]/10 text-[#003366] rounded-full text-sm">Governance</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h4 className="font-semibold">Leadership Academy — Financial Services</h4>
              <p className="mt-2 text-slate-600">Delivered a 12-month leadership development program for senior managers; promoted internal retention by 28%.</p>
              <div className="mt-4 flex gap-3">
                <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm">Leadership</span>
                <span className="px-3 py-1 bg-[#003366]/10 text-[#003366] rounded-full text-sm">Retention</span>
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHTS / BLOG */}
        <section id="insights" className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-3xl font-semibold">Insights</h3>
            <p className="mt-2 text-slate-600">Short reads and thought leadership on leadership & management.</p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <article className="bg-white rounded-lg shadow p-6">
                <h4 className="font-semibold">Building Trust in Remote Teams</h4>
                <p className="mt-2 text-slate-600">Practical steps leaders can take to build psychological safety and performance.</p>
                <a className="mt-4 inline-block text-[#D4AF37] font-semibold">Read →</a>
              </article>

              <article className="bg-white rounded-lg shadow p-6">
                <h4 className="font-semibold">Strategic Agility for SMEs</h4>
                <p className="mt-2 text-slate-600">How small firms can adopt agile strategy without losing control.</p>
                <a className="mt-4 inline-block text-[#D4AF37] font-semibold">Read →</a>
              </article>

              <article className="bg-white rounded-lg shadow p-6">
                <h4 className="font-semibold">Leadership Ethics and Accountability</h4>
                <p className="mt-2 text-slate-600">Practical frameworks for ethical decision-making in senior leadership.</p>
                <a className="mt-4 inline-block text-[#D4AF37] font-semibold">Read →</a>
              </article>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-3xl font-semibold">Let’s Partner</h3>
              <p className="mt-2 text-slate-600">Schedule a discovery call or request a proposal. Tell us about your challenges — we’ll bring a proven approach to the table.</p>

              <div className="mt-6 bg-white p-6 rounded-lg shadow">
                <form action="#" onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium">Full Name</label>
                    <input className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2" placeholder="Jane Doe" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Organization</label>
                    <input className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2" placeholder="Organization name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input type="email" className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2" placeholder="you@company.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Message</label>
                    <textarea className="mt-1 block w-full border border-slate-200 rounded-md px-3 py-2" rows={4} placeholder="How can we help you?" />
                  </div>

                  <div className="flex items-center gap-3">
                    <button type="submit" className="px-5 py-2 bg-[#D4AF37] text-[#001f3f] rounded-md font-semibold shadow">Send Message</button>
                    <button type="reset" className="px-4 py-2 border border-slate-200 rounded-md">Reset</button>
                  </div>
                </form>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold">Contact Details</h4>
              <div className="mt-4 text-slate-700 space-y-3">
                <p><span className="font-semibold">Email:</span> info@trustconsultingfirm.com</p>
                <p><span className="font-semibold">Phone:</span> +234 800 000 0000</p>
                <p><span className="font-semibold">Address:</span> Rivers Business Park, Port Harcourt, Nigeria</p>

                <div className="mt-6">
                  <h5 className="font-semibold">Office Hours</h5>
                  <p className="text-slate-600">Mon–Fri: 8:30 AM – 5:30 PM</p>
                </div>

                <div className="mt-6">
                  <h5 className="font-semibold">Follow Us</h5>
                  <div className="flex gap-3 mt-2">
                    <a className="px-3 py-2 bg-[#003366] text-white rounded-md">LinkedIn</a>
                    <a className="px-3 py-2 bg-[#003366] text-white rounded-md">Twitter</a>
                    <a className="px-3 py-2 bg-[#003366] text-white rounded-md">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#001f3f] text-white">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h5 className="text-lg font-semibold">TRUST CONSULTING FIRM</h5>
            <p className="mt-2 text-sm opacity-80">&copy; {new Date().getFullYear()} TRUST CONSULTING FIRM. All rights reserved.</p>
          </div>

          <div className="text-sm opacity-90">
            <p>Privacy · Terms · Sitemap</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
