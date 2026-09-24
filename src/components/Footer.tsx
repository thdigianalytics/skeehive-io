import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Product', to: '/product' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'For Agencies', to: '/agencies' },
  { label: 'Blog', to: '/blog' },
]

function HexIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
      <path d="M14 2L25 8.5V19.5L14 26L3 19.5V8.5L14 2Z" fill="url(#hexGradFooter)" />
      <defs>
        <linearGradient id="hexGradFooter" x1="3" y1="2" x2="25" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <text x="14" y="19" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">S</text>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a3a] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5">
          <HexIcon />
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
