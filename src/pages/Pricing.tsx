import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const SMB_FEATURES = ['Full site build (4–12 hrs)', 'Elementor Pro included', 'Cloudways hosting setup', 'Unlimited AI change requests', 'Voice + text interface', 'Monthly SEO optimization', 'Version history & rollback']
const AGENCY_FEATURES = ['20+ sites minimum', 'White-labeled portal', 'Everything in SMB Direct', 'Priority support', 'Dedicated onboarding', 'Volume pricing negotiable', 'Custom agency dashboard']

const FAQ = [
  { q: 'What happens if I cancel?', a: "You keep everything. We transfer the Elementor Pro license and Cloudways hosting to you directly, and your site stays exactly as-is. No data loss, no lock-in." },
  { q: 'Do clients need to know about SiteFlow?', a: "Not if you don't want them to. For agencies, the portal is fully white-labeled under your brand. Clients see your company name, your colors, your logo." },
  { q: 'What if my site is already on WordPress?', a: "Perfect — we can connect to any existing WordPress + Elementor site for a $500 setup fee, then $200/mo. No rebuild needed." },
  { q: 'How fast are changes made?', a: "Simple copy/design changes: minutes to hours. New pages or sections: same day. Complex structural changes: 1–2 business days. All changes go through a review step before going live." },
  { q: 'What if I need more than just site changes?', a: "SiteFlow focuses on WordPress site management. For SEO strategy, content creation, or backlink building, talk to us about TH Digital's other products." },
]

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="pt-24">
      {/* Header */}
      <section className="py-20 px-6 text-center">
        <motion.div className="max-w-2xl mx-auto" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="text-indigo-400 text-[12px] font-bold uppercase tracking-widest mb-3">Pricing</motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black tracking-tight mb-5">Simple, transparent pricing</motion.h1>
          <motion.p variants={fadeUp} className="text-[#9090a8] text-xl">No hidden fees. Cancel anytime. Clients keep their site.</motion.p>
        </motion.div>
      </section>

      {/* Cards */}
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div className="grid md:grid-cols-2 gap-6 mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            {/* SMB */}
            <motion.div variants={fadeUp} className="bg-[#13131a] border-2 border-indigo-600/50 rounded-2xl p-8 relative">
              <div className="absolute top-4 right-4 px-2.5 py-1 bg-indigo-600 text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Most Popular</div>
              <div className="text-[13px] text-[#9090a8] font-semibold mb-2">SMB Direct</div>
              <div className="text-5xl font-black mb-1">$2,000</div>
              <div className="text-[13px] text-[#9090a8] mb-6">setup, then <span className="text-white font-semibold">$200/mo</span></div>
              <ul className="space-y-3 mb-8">
                {SMB_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px]">
                    <Check className="w-4 h-4 text-indigo-400 flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link to="/waitlist" className="block w-full text-center py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors">
                Get started
              </Link>
            </motion.div>

            {/* Agency */}
            <motion.div variants={fadeUp} className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-8">
              <div className="text-[13px] text-[#9090a8] font-semibold mb-2">Agency Volume</div>
              <div className="text-5xl font-black mb-1">$750</div>
              <div className="text-[13px] text-[#9090a8] mb-6">setup, then <span className="text-white font-semibold">$100/mo</span> per site</div>
              <ul className="space-y-3 mb-8">
                {AGENCY_FEATURES.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-[13px]">
                    <Check className="w-4 h-4 text-[#6a6a8a] flex-shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <Link to="/agencies" className="block w-full text-center py-3.5 border border-[#2a2a3a] hover:border-indigo-600/50 text-[#9090a8] hover:text-white font-semibold rounded-xl transition-all">
                Learn about agency pricing
              </Link>
            </motion.div>
          </motion.div>

          {/* Existing WP */}
          <motion.div
            className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-20"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <div>
              <div className="font-bold mb-1">Already on WordPress?</div>
              <div className="text-[13px] text-[#9090a8]">Connect your existing site for $500 setup, then $200/mo — no rebuild needed.</div>
            </div>
            <Link to="/waitlist" className="flex-shrink-0 px-5 py-2.5 border border-[#2a2a3a] hover:border-indigo-600/50 text-[13px] font-semibold rounded-xl transition-all whitespace-nowrap flex items-center gap-2">
              Connect existing site <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-black mb-6 text-center">Frequently asked questions</h2>
            <div className="space-y-3">
              {FAQ.map((f, i) => (
                <motion.div
                  key={i}
                  className="bg-[#13131a] border border-[#2a2a3a] rounded-xl overflow-hidden"
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                >
                  <button
                    className="w-full text-left px-5 py-4 text-[14px] font-semibold flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {f.q}
                    <span className="text-indigo-400 flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-[13px] text-[#9090a8] leading-relaxed border-t border-[#2a2a3a] pt-3">
                      {f.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-20 px-6 border-t border-[#2a2a3a] mt-12">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-3">Ready to get started?</h2>
          <p className="text-[#9090a8] mb-8">Join the waitlist and we'll reach out within 24 hours.</p>
          {submitted ? (
            <div className="flex items-center justify-center gap-2 py-4 text-emerald-400 font-semibold">
              <Check className="w-5 h-5" /> You're on the list!
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true) }} className="flex flex-col sm:flex-row gap-3">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your work email"
                className="flex-1 px-4 py-3.5 bg-[#13131a] border border-[#2a2a3a] focus:border-indigo-600/60 rounded-xl text-[14px] outline-none transition-colors placeholder:text-[#4a4a6a]" required />
              <button type="submit" className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors whitespace-nowrap">
                Join waitlist
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}
