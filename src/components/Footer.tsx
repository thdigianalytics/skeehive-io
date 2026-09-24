import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Product', to: '/product' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'For Agencies', to: '/agencies' },
  { label: 'Blog', to: '/blog' },
]

function SkeehiveLogo() {
  return (
    <svg width="28" height="25" viewBox="0 0 120 106" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8 Q8 8 4 20 L4 86 Q8 98 20 98 L100 98 Q112 98 116 86 L116 20 Q112 8 100 8 Z" fill="white"/>
      <line x1="38" y1="22" x2="38" y2="84" stroke="#0a0a0f" strokeWidth="6" strokeLinecap="round"/>
      <line x1="82" y1="22" x2="82" y2="84" stroke="#0a0a0f" strokeWidth="6" strokeLinecap="round"/>
      <line x1="38" y1="38" x2="82" y2="56" stroke="#0a0a0f" strokeWidth="6" strokeLinecap="round"/>
      <line x1="38" y1="68" x2="82" y2="68" stroke="#0a0a0f" strokeWidth="6" strokeLinecap="round"/>
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
