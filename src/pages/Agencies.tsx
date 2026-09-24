import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Shield, ArrowRight, Check } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const BENEFITS = [
  { icon: <Shield className="w-5 h-5" />, title: 'White-labeled portal', desc: 'Clients see your brand. Your logo, your colors, your subdomain. SiteFlow is invisible.' },
  { icon: <TrendingUp className="w-5 h-5" />, title: 'Scale without hiring', desc: 'One AI developer handles 50 sites as easily as 5. No junior dev overhead, no bottlenecks.' },
  { icon: <Users className="w-5 h-5" />, title: 'Simple client management', desc: 'One dashboard for all your clients. View every site, every change request, every deployment status.' },
]

const PROCESS = [
  { step: '01', title: 'We onboard your agency', desc: 'Setup call, portal configuration, white-label branding. Usually done same day.' },
  { step: '02', title: 'Connect your client sites', desc: "We connect each WordPress site via Elementor MCP. Takes ~2 minutes per site once we're in." },
  { step: '03', title: 'Clients request changes', desc: 'Each client gets their own login. They type or speak what they want changed. AI handles it.' },
  { step: '04', title: 'You review, we publish', desc: 'Changes are drafted first. You or the client reviews and approves. Nothing goes live without sign-off.' },
]

export default function Agencies() {
  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 text-center relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-violet-600/8 rounded-full blur-[100px]" />
        </div>
        <motion.div className="relative max-w-3xl mx-auto" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="text-indigo-400 text-[12px] font-bold uppercase tracking-widest mb-3">For Agencies</motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tight mb-5">Built for agencies at scale</motion.h1>
          <motion.p variants={fadeUp} className="text-[#9090a8] text-xl leading-relaxed mb-8">
            Lyft Digital manages 190+ client sites. SiteFlow gives their team an AI developer on every account — without adding headcount.
          </motion.p>
          <motion.div variants={fadeUp} className="flex justify-center gap-3">
            <Link to="/waitlist" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all">
              Talk to us about agency pricing
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-t border-b border-[#2a2a3a] py-10 px-6">
        <motion.div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          {[{ icon: <Users className="w-5 h-5" />, label: 'Minimum sites', value: '20+' }, { icon: <TrendingUp className="w-5 h-5" />, label: 'Per site per month', value: '$100/mo' }, { icon: <Shield className="w-5 h-5" />, label: 'Portal branding', value: 'White-labeled' }].map(s => (
            <motion.div key={s.label} variants={fadeUp} className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-6">
              <div className="text-indigo-400 mb-3 flex justify-center">{s.icon}</div>
              <div className="text-2xl font-black mb-1">{s.value}</div>
              <div className="text-[12px] text-[#6a6a8a]">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black mb-8 text-center">Why agencies choose SiteFlow</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {BENEFITS.map(b => (
              <motion.div key={b.title} className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-6 hover:border-[#4a4a6a] transition-colors" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="w-10 h-10 bg-indigo-600/15 rounded-xl flex items-center justify-center text-indigo-400 mb-4">{b.icon}</div>
                <h3 className="font-bold text-[15px] mb-2">{b.title}</h3>
                <p className="text-[13px] text-[#9090a8] leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works for agencies */}
      <section className="py-16 px-6 border-t border-[#2a2a3a]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black mb-10 text-center">How agency onboarding works</h2>
          <div className="space-y-6">
            {PROCESS.map(p => (
              <motion.div key={p.step} className="flex gap-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <div className="text-3xl font-black text-indigo-600/40 w-12 flex-shrink-0">{p.step}</div>
                <div className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-5 flex-1">
                  <h3 className="font-bold mb-1">{p.title}</h3>
                  <p className="text-[13px] text-[#9090a8]">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included vs SMB */}
      <section className="py-16 px-6 border-t border-[#2a2a3a]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black mb-6 text-center">What's included at $100/mo per site</h2>
          <div className="bg-[#13131a] border border-indigo-600/30 rounded-2xl p-6 space-y-3">
            {['White-labeled client portal', 'Unlimited AI change requests per site', 'Voice + text interface', 'Version history & rollback', 'Elementor Pro licensing', 'Cloudways hosting management', 'Monthly SEO review per site', 'Priority support for agency admins'].map(f => (
              <div key={f} className="flex items-center gap-3 text-[13px]">
                <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>
          <p className="text-center text-[13px] text-[#6a6a8a] mt-4">$750 build fee per new site. Existing WP sites: $500 connection fee.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-[#2a2a3a] text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-black mb-3">Ready to talk?</h2>
          <p className="text-[#9090a8] mb-6">Tell us how many sites you manage and we'll put together a custom proposal.</p>
          <Link to="/waitlist" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/25">
            Get agency pricing <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
