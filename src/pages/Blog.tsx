import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { visible: { transition: { staggerChildren: 0.1 } } }

const POSTS = [
  { tag: 'Product', date: 'Sep 15, 2026', title: 'Elementor MCP: What it means for AI-powered WordPress development', excerpt: "Elementor just launched their Model Context Protocol integration. Here's why it changes everything for how we build and manage client sites." },
  { tag: 'Agency Ops', date: 'Sep 10, 2026', title: 'How to manage 190+ client websites without losing your mind', excerpt: "Lyft Digital shares their system for keeping hundreds of SMB sites updated, consistent, and revenue-generating — without a full dev team." },
  { tag: 'Business', date: 'Sep 5, 2026', title: 'The real cost of website neglect for small businesses', excerpt: "Outdated sites don't just look bad — they lose rankings, lose leads, and lose credibility. Here's the math on what inaction actually costs." },
  { tag: 'Product', date: 'Aug 28, 2026', title: 'Why we chose Elementor + WordPress over custom builds', excerpt: "Headless, custom React, no-code platforms — we tried them all. Here's why standard Elementor Pro is actually the right answer for client sites at scale." },
]

export default function Blog() {
  return (
    <main className="pt-24">
      <section className="py-20 px-6 text-center border-b border-[#2a2a3a]">
        <motion.div className="max-w-2xl mx-auto" initial="hidden" animate="visible" variants={stagger}>
          <motion.p variants={fadeUp} className="text-indigo-400 text-[12px] font-bold uppercase tracking-widest mb-3">Blog</motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Thoughts on AI, agencies,<br />and the future of websites
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#9090a8] text-lg">From the Skeehive Digital team.</motion.p>
        </motion.div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {POSTS.map((post, i) => (
            <motion.article
              key={i}
              className="bg-[#13131a] border border-[#2a2a3a] rounded-2xl p-7 hover:border-[#4a4a6a] transition-colors cursor-pointer group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-bold px-2 py-0.5 bg-indigo-600/20 text-indigo-300 rounded-full border border-indigo-600/30">{post.tag}</span>
                <span className="text-[12px] text-[#6a6a8a]">{post.date}</span>
              </div>
              <h2 className="text-[17px] font-bold mb-2 group-hover:text-indigo-300 transition-colors leading-snug">{post.title}</h2>
              <p className="text-[13px] text-[#9090a8] leading-relaxed">{post.excerpt}</p>
            </motion.article>
          ))}

          <div className="text-center pt-4">
            <p className="text-[13px] text-[#6a6a8a]">More posts coming soon. The blog will live at skeehive.io/blog.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
