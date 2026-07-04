import { colors, spacing } from "@/theme";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Background Blur */}
      <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              🚀 Next Generation Platform
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
              Build Amazing
              <span className="block bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
              Create scalable, responsive, and beautiful applications using a
              modern design system with reusable components and enterprise-grade
              architecture.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-500">
                Get Started
              </button>

              <button className="rounded-xl border border-slate-700 bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-slate-800">
                Live Demo
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-white">10K+</h2>
                <p className="text-slate-400">Customers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">99.9%</h2>
                <p className="text-slate-400">Uptime</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">24/7</h2>
                <p className="text-slate-400">Support</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl backdrop-blur">
              <img
                src="/hero-dashboard.png"
                alt="Dashboard Preview"
                className="w-full"
              />
            </div>

            <div className="absolute -left-6 top-8 rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-xl backdrop-blur">
              <p className="text-sm text-slate-400">Monthly Revenue</p>
              <h3 className="mt-1 text-2xl font-bold text-white">$124,580</h3>
            </div>

            <div className="absolute -right-8 bottom-8 rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-xl backdrop-blur">
              <p className="text-sm text-slate-400">Performance</p>
              <h3 className="mt-1 text-2xl font-bold text-green-400">
                +38%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}