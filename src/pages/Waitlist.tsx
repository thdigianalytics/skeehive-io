import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

export default function Waitlist() {
  const [form, setForm] = useState({ name: '', email: '', company: '', sites: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.email) setSubmitted(true)
  }

  return (
    <main className="pt-24 min-h-screen">
      <section className="py-16 px-6">
        <div className="max-w-xl mx-auto">
          <motion.div className="text-center mb-10" initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-indigo-400 text-[12px] font-bold uppercase tracking-widest mb-3">Early Access</motion.p>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              Join the SiteFlow waitlist
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[#9090a8]">
              We're onboarding agencies and SMBs now. We'll reach out within 24 hours.
            </motion.p>
          </motion.div>

          {submitted ? (
            <motion.div className="text-center py-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="w-16 h-16 bg-emerald-400/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-black mb-2">You're on the list!</h2>
              <p className="text-[#9090a8]">We'll be in touch within 24 hours. Talk soon.</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-8 space-y-5"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <label className="block text-[12px] font-semibold text-[#9090a8] mb-1.5">Full name</label>
                <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] focus:border-indigo-600/60 rounded-xl text-[14px] outline-none transition-colors placeholder:text-[#4a4a6a]" required />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-[12px] font-semibold text-[#9090a8] mb-1.5">Work email</label>
                <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@company.com"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] focus:border-indigo-600/60 rounded-xl text-[14px] outline-none transition-colors placeholder:text-[#4a4a6a]" required />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-[12px] font-semibold text-[#9090a8] mb-1.5">Company / Agency</label>
                <input type="text" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} placeholder="Company name"
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] focus:border-indigo-600/60 rounded-xl text-[14px] outline-none transition-colors placeholder:text-[#4a4a6a]" />
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-[12px] font-semibold text-[#9090a8] mb-1.5">How many sites do you manage?</label>
                <select value={form.sites} onChange={e => setForm({ ...form, sites: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] focus:border-indigo-600/60 rounded-xl text-[14px] outline-none transition-colors text-[#9090a8]">
                  <option value="">Select range</option>
                  <option value="1">Just my own site</option>
                  <option value="2-10">2–10 sites</option>
                  <option value="11-50">11–50 sites</option>
                  <option value="51-200">51–200 sites</option>
                  <option value="200+">200+ sites</option>
                </select>
              </motion.div>

              <motion.div variants={fadeUp}>
                <label className="block text-[12px] font-semibold text-[#9090a8] mb-1.5">Anything you'd like us to know?</label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your setup, challenges, or what you're hoping to solve..."
                  rows={3}
                  className="w-full px-4 py-3 bg-[#0a0a0f] border border-[#2a2a3a] focus:border-indigo-600/60 rounded-xl text-[14px] outline-none transition-colors placeholder:text-[#4a4a6a] resize-none" />
              </motion.div>

              <motion.button variants={fadeUp} type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-600/25">
                Join the waitlist
              </motion.button>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  )
}
