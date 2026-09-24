import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Product', to: '/product' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'For Agencies', to: '/agencies' },
  { label: 'Blog', to: '/blog' },
]

function SkeehiveLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 4L93 28V72L50 96L7 72V28L50 4Z" fill="white"/>
      <rect x="26" y="24" width="8" height="52" rx="2" fill="#0a0a0f"/>
      <rect x="66" y="24" width="8" height="52" rx="2" fill="#0a0a0f"/>
      <path d="M34 32L66 28L74 38L34 42Z" fill="#0a0a0f"/>
      <rect x="26" y="56" width="48" height="8" rx="2" fill="#0a0a0f"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a3a] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5">
          <SkeehiveLogo />
          <span className="font-bold text-[14px]">Skeehive Digital</span>
        </Link>

        <div className="flex items-center gap-6">
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} className="text-[12px] text-[#6a6a8a] hover:text-white transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="text-[12px] text-[#4a4a6a] text-center md:text-right">
          <div>© 2026 Skeehive Digital</div>
          <div className="mt-0.5">Powered by Claude + Elementor MCP</div>
        </div>
      </div>
    </footer>
  )
}
