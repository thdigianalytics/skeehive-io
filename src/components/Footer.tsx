import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Product', to: '/product' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'For Agencies', to: '/agencies' },
  { label: 'Blog', to: '/blog' },
]

function SkeehiveLogo() {
  return (
    <svg width="30" height="30" viewBox="364 0 79.46 88.03" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" d="M437.84,17.89l-28.38-16.39c-3.48-2.01-7.77-2.01-11.24,0l-28.38,16.39c-3.48,2.01-5.62,5.72-5.62,9.74v32.77c0,4.02,2.14,7.73,5.62,9.74l28.38,16.39c3.48,2.01,7.77,2.01,11.24,0l28.38-16.39c3.48-2.01,5.62-5.72,5.62-9.74V27.63c0-4.02-2.14-7.73-5.62-9.74ZM425.29,45.88h-2v19.59c0,1.03-.84,1.87-1.87,1.87s-1.87-.84-1.87-1.87v-10.41l-32.65,12.16c-.21.08-.43.12-.65.12-.38,0-.75-.11-1.06-.33-.5-.35-.8-.92-.8-1.53v-19.59h-2c-1.03,0-1.87-.84-1.87-1.87s.84-1.87,1.87-1.87h2v-19.59c0-1.03.84-1.87,1.87-1.87s1.87.84,1.87,1.87v10.41l32.65-12.16c.57-.21,1.21-.13,1.72.22.5.35.8.92.8,1.53v19.59h2c1.03,0,1.87.84,1.87,1.87s-.84,1.87-1.87,1.87Z"/>
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
