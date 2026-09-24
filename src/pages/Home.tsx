import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Zap, ChevronRight, ArrowRight, Check } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { scrollY } = useScroll()
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroY = useTransform(scrollY, [0, 400], [0, -60])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
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

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Your Website,
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Always Getting Better.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#9090a8] max-w-2xl mx-auto mb-10 leading-relaxed">
            SiteFlow is your AI developer — making site changes, adding pages, and optimizing
            content while you focus on your business.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/waitlist"
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 flex items-center gap-2"
            >
              Get Early Access <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/product"
              className="px-6 py-3.5 border border-[#2a2a3a] hover:border-[#4a4a6a] text-[#9090a8] hover:text-white font-semibold rounded-xl transition-all flex items-center gap-2"
            >
              See how it works <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Portal mockup */}
        <motion.div
          className="relative max-w-3xl mx-auto mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2a2a3a] bg-[#0f0f16]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <div className="flex-1 mx-4 h-6 bg-[#1c1c27] rounded-md flex items-center px-3">
                <span className="text-[11px] text-[#4a4a6a]">lyft.skeehive.io</span>
              </div>
            </div>
            <div className="flex" style={{ height: 260 }}>
              <div className="w-52 border-r border-[#2a2a3a] p-3 space-y-1">
                <div className="px-2 py-1 text-[10px] font-bold text-[#4a4a6a] uppercase tracking-wider mb-2">Your Sites</div>
                {['Cascade Dental', 'Peak Performance', 'Summit Financial', 'Wasatch Roofing'].map((s, i) => (
                  <div key={s} className={`flex items-center gap-2.5 px-2 py-2 rounded-lg text-[12px] ${i === 0 ? 'bg-indigo-600/20 border border-indigo-600/30 text-white' : 'text-[#6a6a8a]'}`}>
                    <div className={`w-2 h-2 rounded-full ${i < 3 ? 'bg-emerald-400' : 'bg-yellow-400'}`} />
                    {s}
                  </div>
                ))}
              </div>
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
          {[{ label: 'Sites managed', value: '190+' }, { label: 'Avg build time', value: '6 hrs' }, { label: 'Client satisfaction', value: '98%' }].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-bold text-white">{s.value}</div>
              <div className="text-[11px] text-[#6a6a8a]">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick features */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-indigo-400 text-[12px] font-bold uppercase tracking-widest mb-3">The Platform</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black tracking-tight mb-4">One AI developer.<br />Every site, always improving.</motion.h2>
            <motion.p variants={fadeUp} className="text-[#9090a8] text-lg max-w-xl mx-auto">Built for agencies and SMBs who want results without the overhead.</motion.p>
          </motion.div>

          <motion.div className="grid md:grid-cols-3 gap-6 mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {[
              { icon: '🎤', title: 'Voice or text requests', desc: 'Describe the change you want. SiteFlow handles the implementation, automatically.' },
              { icon: '⚡', title: 'Fast turnaround', desc: 'New pages in hours, not weeks. Copy updates in minutes. Always-on AI availability.' },
              { icon: '🔒', title: 'Zero lock-in', desc: 'Every site we build is standard Elementor + WordPress. Cancel anytime and keep everything.' },
            ].map(f => (
              <motion.div key={f.title} variants={fadeUp} className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-6 hover:border-[#4a4a6a] transition-colors">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-[15px] mb-2">{f.title}</h3>
                <p className="text-[13px] text-[#9090a8] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/product" className="px-6 py-3 border border-[#2a2a3a] hover:border-indigo-600/50 text-[14px] font-semibold rounded-xl transition-all text-center flex items-center justify-center gap-2">
              See all features <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/pricing" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-[14px] font-semibold rounded-xl transition-all text-center">
              View pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-24 px-6 border-t border-[#2a2a3a]">
        <motion.div className="max-w-2xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
            </div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight mb-4 relative">
              Ready to meet your <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">AI developer?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#9090a8] text-lg mb-8 relative">
              Join the waitlist — we're onboarding agencies and SMBs now.
            </motion.p>
            <motion.div variants={fadeUp} className="relative">
              {submitted ? (
                <div className="flex items-center justify-center gap-2 py-4 text-emerald-400 font-semibold">
                  <Check className="w-5 h-5" /> You're on the list! We'll be in touch soon.
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
                  <button type="submit" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors whitespace-nowrap">
                    Join the waitlist
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
