import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Zap, Globe, Shield, ChevronRight, Menu, X,
  MessageSquare, GitBranch, BarChart3, Mic, ArrowRight,
  Check, Building2, Users, TrendingUp
} from 'lucide-react'

const NAV_LINKS = ['Product', 'Pricing', 'For Agencies', 'Blog']

const FEATURES = [
  {
    icon: <Mic className="w-5 h-5" />,
    title: 'Talk to your AI developer',
    desc: 'Voice or text — describe the change you want. SiteFlow handles the rest, automatically, on your live site.',
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Built on Elementor + WordPress',
    desc: 'Every site we build is 100% standard Elementor. Clients keep full drag-and-drop access. No lock-in, ever.',
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: 'White-labeled for agencies',
    desc: 'Your brand, your clients. SiteFlow runs silently behind your portal — powered by AI, presented as you.',
  },
]

const PRODUCT_ROWS = [
  {
    icon: <MessageSquare className="w-6 h-6 text-indigo-400" />,
    title: 'Make changes in seconds',
    desc: 'Type or say what you want changed. "Add a summer promo banner to the homepage" — done in minutes, not days. No tickets, no waiting.',
    badge: 'AI Developer',
  },
  {
    icon: <GitBranch className="w-6 h-6 text-violet-400" />,
    title: 'Built-in version history',
    desc: 'Every change is logged, timestamped, and reversible. Review before it goes live. Roll back with one click if something looks off.',
    badge: 'Version Control',
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: 'Zero client lock-in',
    desc: "Cancel anytime. Your clients keep their Elementor site exactly as-is — fully editable, fully theirs. That's our promise.",
    badge: 'No Lock-In',
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
    title: 'SEO-aware by default',
    desc: "Every page change is evaluated for SEO impact before publishing. SiteFlow knows what it's doing — it's been trained on thousands of optimizations.",
    badge: 'SEO Built-In',
  },
]

const STATS = [
  { label: 'Sites managed', value: '190+' },
  { label: 'Avg build time', value: '6 hrs' },
  { label: 'Client satisfaction', value: '98%' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

function HexIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path
        d="M14 2L25 8.5V19.5L14 26L3 19.5V8.5L14 2Z"
        fill="url(#hexGrad)"
        stroke="none"
      />
      <defs>
        <linearGradient id="hexGrad" x1="3" y1="2" x2="25" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <text x="14" y="19" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">S</text>
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroY = useTransform(scrollY, [0, 400], [0, -60])

  useEffect(() => {
    const unsub = scrollY.on('change', v => setScrolled(v > 20))
    return unsub
  }, [scrollY])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#f0f0f8]">
      {/* Nav */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur border-b border-[#2a2a3a]' : ''
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <HexIcon />
            <span className="font-bold text-[15px] tracking-tight">Skeehive Digital</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(' ', '-')}`}
                className="text-[13px] text-[#9090a8] hover:text-white transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#waitlist" className="text-[13px] text-[#9090a8] hover:text-white transition-colors">Sign in</a>
            <a
              href="#waitlist"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[13px] font-semibold rounded-lg transition-colors"
            >
              Get Early Access
            </a>
          </div>

          <button className="md:hidden text-[#9090a8]" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-[#13131a] border-b border-[#2a2a3a] px-6 py-4 space-y-4">
            {NAV_LINKS.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(' ', '-')}`}
                className="block text-[14px] text-[#9090a8]"
                onClick={() => setMenuOpen(false)}
              >
                {l}
              </a>
            ))}
            <a
              href="#waitlist"
              className="block w-full text-center px-4 py-2.5 bg-indigo-600 text-white text-[14px] font-semibold rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              Get Early Access
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden" id="product">
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          style={{ opacity: heroOpacity, y: heroY }}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600/15 border border-indigo-600/30 rounded-full text-indigo-300 text-[12px] font-semibold mb-6">
              <Zap className="w-3 h-3" />
              Now in early access — Powered by Claude + Elementor MCP
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6"
          >
            Your Website,
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Always Getting Better.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-[#9090a8] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            SiteFlow is your AI developer — making site changes, adding pages, and optimizing
            content while you focus on your business.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#waitlist"
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 flex items-center gap-2"
            >
              Get Early Access <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#product-features"
              className="px-6 py-3.5 border border-[#2a2a3a] hover:border-[#4a4a6a] text-[#9090a8] hover:text-white font-semibold rounded-xl transition-all flex items-center gap-2"
            >
              See how it works <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Portal mockup */}
        <motion.div
          className="relative max-w-3xl mx-auto mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2a2a3a] bg-[#0f0f16]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-4 h-6 bg-[#1c1c27] rounded-md flex items-center px-3">
                <span className="text-[11px] text-[#4a4a6a]">lyft.skeehive.io</span>
              </div>
            </div>
            {/* Mock portal content */}
            <div className="flex" style={{ height: 280 }}>
              {/* Sidebar */}
              <div className="w-52 border-r border-[#2a2a3a] p-3 space-y-1">
                <div className="px-2 py-1 text-[10px] font-bold text-[#4a4a6a] uppercase tracking-wider mb-2">Your Sites</div>
                {['Cascade Dental', 'Peak Performance', 'Summit Financial', 'Wasatch Roofing'].map((s, i) => (
                  <div
                    key={s}
                    className={`flex items-center gap-2.5 px-2 py-2 rounded-lg text-[12px] ${
                      i === 0 ? 'bg-indigo-600/20 border border-indigo-600/30 text-white' : 'text-[#6a6a8a]'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${i < 3 ? 'bg-emerald-400' : 'bg-yellow-400'}`} />
                    {s}
                  </div>
                ))}
              </div>
              {/* Main */}
              <div className="flex-1 p-4">
                <div className="text-[13px] font-semibold mb-3">Cascade Dental</div>
                <div className="bg-[#1c1c27] border border-[#2a2a3a] rounded-xl p-3 mb-3">
                  <div className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider mb-2">🤖 AI Developer</div>
                  <div className="bg-[#0a0a0f] rounded-lg px-3 py-2 text-[12px] text-[#6a6a8a] italic">
                    "Update the hero headline to say Summer Special and add a 10% off banner..."
                  </div>
                </div>
                <div className="space-y-2">
                  {['Updated hero copy — Summer Sale banner', 'Added Teeth Whitening service page', 'Changed contact form CTA color'].map((item, i) => (
                    <div key={item} className="flex items-center gap-2.5 text-[11px] text-[#6a6a8a]">
                      <div className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${i === 0 ? 'bg-yellow-400/20 text-yellow-400' : 'bg-emerald-400/20 text-emerald-400'}`}>
                        {i === 0 ? 'REVIEW' : 'LIVE'}
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Glow under card */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-indigo-600/20 blur-2xl rounded-full" />
        </motion.div>
      </section>

      {/* Social proof */}
      <section className="border-y border-[#2a2a3a] py-6 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8">
          <p className="text-[13px] text-[#6a6a8a] text-center sm:text-left">
            Trusted by agencies managing <span className="text-white font-semibold">190+ sites</span>
          </p>
          <div className="hidden sm:block w-px h-8 bg-[#2a2a3a]" />
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-bold text-white">{s.value}</div>
              <div className="text-[11px] text-[#6a6a8a]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6" id="how-it-works">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-indigo-400 text-[12px] font-bold uppercase tracking-widest mb-3">How It Works</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Your AI developer, ready to work
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#9090a8] text-lg max-w-xl mx-auto">
              No coding, no tickets, no waiting. Just tell SiteFlow what you need.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
          >
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-6 hover:border-[#4a4a6a] transition-colors group"
              >
                <div className="w-10 h-10 bg-indigo-600/15 rounded-xl flex items-center justify-center text-indigo-400 mb-4 group-hover:bg-indigo-600/25 transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[15px] mb-2">{f.title}</h3>
                <p className="text-[13px] text-[#9090a8] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product features — alternating */}
      <section className="py-16 px-6" id="product-features">
        <div className="max-w-5xl mx-auto space-y-6">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-indigo-400 text-[12px] font-bold uppercase tracking-widest mb-3">Features</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight">
              Everything your site needs, handled.
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {PRODUCT_ROWS.map((row) => (
              <motion.div
                key={row.title}
                className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-7 hover:border-[#4a4a6a] transition-colors"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1c1c27] rounded-xl flex items-center justify-center flex-shrink-0">
                    {row.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-[15px]">{row.title}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-600/20 text-indigo-300 rounded-full border border-indigo-600/30">
                        {row.badge}
                      </span>
                    </div>
                    <p className="text-[13px] text-[#9090a8] leading-relaxed">{row.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Agencies */}
      <section className="py-24 px-6" id="for-agencies">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#13131a] to-[#0f0f18] border border-indigo-600/30 rounded-3xl p-10 md:p-14 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* Left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-violet-500 rounded-l-3xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-2 text-indigo-400 text-[12px] font-bold uppercase tracking-widest mb-4">
                <Building2 className="w-3.5 h-3.5" /> For Agencies
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
                Built for agencies at scale
              </h2>
              <p className="text-[#9090a8] text-lg mb-10 max-w-2xl leading-relaxed">
                Lyft Digital manages 190+ client sites. SiteFlow gives their team an AI developer
                on every account — without hiring a single additional person.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {[
                  { icon: <Users className="w-5 h-5" />, label: 'Minimum sites', value: '20+' },
                  { icon: <TrendingUp className="w-5 h-5" />, label: 'Per site per month', value: '$100/mo' },
                  { icon: <Shield className="w-5 h-5" />, label: 'Portal branding', value: 'White-labeled' },
                ].map(s => (
                  <div key={s.label} className="bg-[#0a0a0f]/60 rounded-2xl p-5 border border-[#2a2a3a]">
                    <div className="text-indigo-400 mb-3">{s.icon}</div>
                    <div className="text-2xl font-black mb-1">{s.value}</div>
                    <div className="text-[12px] text-[#6a6a8a]">{s.label}</div>
                  </div>
                ))}
              </div>

              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-indigo-600/50 text-indigo-300 hover:bg-indigo-600/10 font-semibold rounded-xl transition-all text-[14px]"
              >
                Talk to us about agency pricing <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6" id="pricing">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-indigo-400 text-[12px] font-bold uppercase tracking-widest mb-3">Pricing</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black tracking-tight mb-4">
              Simple, transparent pricing
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#9090a8] text-lg">
              No hidden fees. Cancel anytime. Clients keep their site.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* SMB card */}
            <motion.div
              variants={fadeUp}
              className="bg-[#13131a] border-2 border-indigo-600/50 rounded-2xl p-8 relative"
            >
              <div className="absolute top-4 right-4 px-2.5 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <div className="text-[13px] text-[#9090a8] font-semibold mb-2">SMB Direct</div>
              <div className="text-4xl font-black mb-1">$2,000</div>
              <div className="text-[13px] text-[#9090a8] mb-6">setup, then <span className="text-white font-semibold">$200/mo</span></div>
              <ul className="space-y-3 mb-8">
                {['Full site build (4–12 hrs)', 'Elementor Pro included', 'Cloudways hosting setup', 'Unlimited AI change requests', 'Voice + text interface', 'Monthly SEO optimization'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px]">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block w-full text-center py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors">
                Get started
              </a>
            </motion.div>

            {/* Agency card */}
            <motion.div
              variants={fadeUp}
              className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-8"
            >
              <div className="text-[13px] text-[#9090a8] font-semibold mb-2">Agency Volume</div>
              <div className="text-4xl font-black mb-1">$750</div>
              <div className="text-[13px] text-[#9090a8] mb-6">setup, then <span className="text-white font-semibold">$100/mo</span> per site</div>
              <ul className="space-y-3 mb-8">
                {['20+ sites minimum', 'White-labeled portal', 'Everything in SMB Direct', 'Priority support', 'Dedicated onboarding', 'Volume pricing negotiable'].map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px]">
                    <Check className="w-4 h-4 text-[#6a6a8a] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#waitlist" className="block w-full text-center py-3 border border-[#2a2a3a] hover:border-indigo-600/50 text-[#9090a8] hover:text-white font-semibold rounded-xl transition-all">
                Talk to us
              </a>
            </motion.div>
          </motion.div>

          {/* Existing WP addon */}
          <motion.div
            className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div>
              <div className="font-bold mb-1">Already on WordPress?</div>
              <div className="text-[13px] text-[#9090a8]">Connect your existing site for $500 setup, then $200/mo — no rebuild needed.</div>
            </div>
            <a href="#waitlist" className="flex-shrink-0 px-5 py-2.5 border border-[#2a2a3a] hover:border-indigo-600/50 text-[13px] font-semibold rounded-xl transition-all whitespace-nowrap">
              Connect existing site →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-24 px-6" id="waitlist">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Glow */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
            </div>
            <motion.p variants={fadeUp} className="text-indigo-400 text-[12px] font-bold uppercase tracking-widest mb-4 relative">
              Early Access
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight mb-4 relative">
              Ready to meet your
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                AI developer?
              </span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#9090a8] text-lg mb-8 relative">
              Join the waitlist — we're onboarding agencies and SMBs now.
            </motion.p>

            <motion.div variants={fadeUp} className="relative">
              {submitted ? (
                <div className="flex items-center justify-center gap-2 py-4 text-emerald-400 font-semibold">
                  <Check className="w-5 h-5" />
                  You're on the list! We'll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="flex-1 px-4 py-3.5 bg-[#13131a] border border-[#2a2a3a] focus:border-indigo-600/60 rounded-xl text-[14px] outline-none transition-colors placeholder:text-[#4a4a6a]"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors whitespace-nowrap shadow-lg shadow-indigo-600/25"
                  >
                    Join the waitlist
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a3a] py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <HexIcon />
            <span className="font-bold text-[14px]">Skeehive Digital</span>
          </div>

          <div className="flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <a key={l} href="#" className="text-[12px] text-[#6a6a8a] hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </div>

          <div className="text-[12px] text-[#4a4a6a] text-center md:text-right">
            <div>© 2026 Skeehive Digital</div>
            <div className="mt-0.5">Powered by Claude + Elementor MCP</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
