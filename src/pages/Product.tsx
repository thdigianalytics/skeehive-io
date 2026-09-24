import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageSquare, GitBranch, Shield, BarChart3, Mic, Globe, Building2, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const HOW_IT_WORKS = [
  { icon: <Mic className="w-5 h-5" />, title: 'Talk to your AI developer', desc: 'Voice or text — describe the change you want. SiteFlow handles the rest, automatically, on your live site.' },
  { icon: <Globe className="w-5 h-5" />, title: 'Built on Elementor + WordPress', desc: 'Every site we build is 100% standard Elementor. Clients keep full drag-and-drop access. No lock-in, ever.' },
  { icon: <Building2 className="w-5 h-5" />, title: 'White-labeled for agencies', desc: 'Your brand, your clients. SiteFlow runs silently behind your portal — powered by AI, presented as you.' },
]

const FEATURES = [
  { icon: <MessageSquare className="w-6 h-6 text-indigo-400" />, badge: 'AI Developer', title: 'Make changes in seconds', desc: 'Type or say what you want changed. "Add a summer promo banner to the homepage" — done in minutes, not days. No tickets, no waiting.' },
  { icon: <GitBranch className="w-6 h-6 text-violet-400" />, badge: 'Version Control', title: 'Built-in version history', desc: 'Every change is logged, timestamped, and reversible. Review before it goes live. Roll back with one click if something looks off.' },
  { icon: <Shield className="w-6 h-6 text-emerald-400" />, badge: 'No Lock-In', title: 'Zero client lock-in', desc: "Cancel anytime. Your clients keep their Elementor site exactly as-is — fully editable, fully theirs. That's our promise." },
  { icon: <BarChart3 className="w-6 h-6 text-indigo-400" />, badge: 'SEO Built-In', title: 'SEO-aware by default', desc: "Every page change is evaluated for SEO impact before publishing. SiteFlow knows what it's doing — trained on thousands of optimizations." },
]

const STACK = [
  { label: 'AI Engine', value: 'Claude (Anthropic)' },
  { label: 'Page Builder', value: 'Elementor Pro' },
  { label: 'CMS', value: 'WordPress' },
  { label: 'Hosting', value: 'Cloudways' },
  { label: 'Connection', value: 'Elementor MCP' },
  { label: 'Portal Auth', value: 'Supabase' },
]

export default function Product() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 text-center relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/8 rounded-full blur-[100px]" />
        </div>
        <motion.div className="relative max-w-3xl mx-auto" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="text-indigo-400 text-[12px] font-bold uppercase tracking-widest mb-3">The Product</motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tight mb-5">
            How SiteFlow works
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#9090a8] text-xl leading-relaxed">
            An AI developer connected directly to your WordPress site. Make changes by talking to it. That's it.
          </motion.p>
        </motion.div>
      </section>

      {/* How it works */}
      <section className="py-16 px-6 border-t border-[#2a2a3a]">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-black tracking-tight mb-3">Three things. That's the whole product.</motion.h2>
          </motion.div>
          <motion.div className="grid md:grid-cols-3 gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {HOW_IT_WORKS.map(f => (
              <motion.div key={f.title} variants={fadeUp} className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-6 hover:border-[#4a4a6a] transition-colors group">
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

      {/* Features */}
      <section className="py-16 px-6 border-t border-[#2a2a3a]">
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="text-2xl font-black tracking-tight mb-8 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>Everything your site needs, handled.</motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map(row => (
              <motion.div key={row.title} className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-7 hover:border-[#4a4a6a] transition-colors" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1c1c27] rounded-xl flex items-center justify-center flex-shrink-0">{row.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-[15px]">{row.title}</h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-600/20 text-indigo-300 rounded-full border border-indigo-600/30">{row.badge}</span>
                    </div>
                    <p className="text-[13px] text-[#9090a8] leading-relaxed">{row.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 px-6 border-t border-[#2a2a3a]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 className="text-2xl font-black tracking-tight mb-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>The tech stack</motion.h2>
          <motion.p className="text-[#9090a8] mb-10" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>Best-in-class tools, wired together. No compromises.</motion.p>
          <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {STACK.map(s => (
              <motion.div key={s.label} variants={fadeUp} className="bg-[#13131a] border border-[#2a2a3a] rounded-xl p-4 text-left">
                <div className="text-[11px] text-[#6a6a8a] font-semibold uppercase tracking-wider mb-1">{s.label}</div>
                <div className="text-[14px] font-semibold">{s.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-[#2a2a3a] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-black mb-4">Ready to see it live?</h2>
          <p className="text-[#9090a8] mb-6">Get early access and we'll set up your first site together.</p>
          <div className="flex gap-3 justify-center">
            <Link to="/pricing" className="px-6 py-3 border border-[#2a2a3a] hover:border-indigo-600/50 text-[14px] font-semibold rounded-xl transition-all flex items-center gap-2">
              View pricing <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/waitlist" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-[14px] font-semibold rounded-xl transition-all">
              Get early access
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
