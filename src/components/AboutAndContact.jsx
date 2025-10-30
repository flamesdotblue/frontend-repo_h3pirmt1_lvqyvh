import { GraduationCap, Briefcase, Mail, Linkedin } from 'lucide-react';

export default function AboutAndContact() {
  return (
    <div className="relative">
      <section id="about" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            About
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-5">
            <div className="md:col-span-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-6">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                I’m a full‑stack developer focused on building fast, accessible products with a strong eye for detail. My toolkit spans React, TypeScript, Node, and cloud‑native services. I care about performance, DX, and shipping high‑quality features that scale.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Briefcase className="h-5 w-5 text-neutral-600 dark:text-neutral-300 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">Experience</p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">3+ years in web development, building dashboards, data tools, and interactive UIs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap className="h-5 w-5 text-neutral-600 dark:text-neutral-300 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">Skills</p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300">React, TypeScript, Node, FastAPI, Tailwind, Postgres, MongoDB, Testing, CI/CD</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-6">
              <p className="text-sm font-medium text-neutral-900 dark:text-white">Highlights</p>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                <li>• Led performance revamp: 40% faster LCP</li>
                <li>• Built reusable UI kit increasing delivery speed</li>
                <li>• Strong advocate for a11y, testing, and docs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-6">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Get in touch</h3>
              <p className="mt-2 text-neutral-700 dark:text-neutral-300 text-sm">
                I’m always happy to chat about projects, collaborations, or opportunities.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="mailto:sagarchopda.dev@example.com"
                  className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Mail className="h-4 w-4" /> sagarchopda.dev@example.com
                </a>
                <a
                  href="https://www.linkedin.com/in/sagar-chopda"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-neutral-200 dark:border-neutral-800 px-3 py-2 text-sm text-neutral-800 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
            <form
              className="md:w-1/2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-6"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const name = data.get('name');
                alert(`Thanks, ${name}! I will get back to you shortly.`);
                form.reset();
              }}
            >
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">Contact form</h3>
              <div className="mt-4 grid gap-4">
                <div>
                  <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-neutral-700 dark:text-neutral-300 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700"
                    placeholder="What would you like to build?"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-4 py-2.5 text-sm shadow-sm hover:opacity-90 transition"
                  >
                    Send message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
