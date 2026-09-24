import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Product', to: '/product' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'For Agencies', to: '/agencies' },
  { label: 'Blog', to: '/blog' },
]

function HexIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 2L25 8.5V19.5L14 26L3 19.5V8.5L14 2Z" fill="url(#hexGradNav)" />
      <defs>
        <linearGradient id="hexGradNav" x1="3" y1="2" x2="25" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <text x="14" y="19" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">S</text>
    </svg>
  )
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur border-b border-[#2a2a3a]' : ''
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <HexIcon />
          <span className="font-bold text-[15px] tracking-tight">Skeehive Digital</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[13px] transition-colors ${
                location.pathname === l.to ? 'text-white font-medium' : 'text-[#9090a8] hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-[13px] text-[#9090a8] hover:text-white transition-colors">Sign in</Link>
          <Link
            to="/waitlist"
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-[13px] font-semibold rounded-lg transition-colors"
          >
            Get Early Access
          </Link>
        </div>

        <button className="md:hidden text-[#9090a8]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-[#13131a] border-b border-[#2a2a3a] px-6 py-4 space-y-4">
          {NAV_LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className="block text-[14px] text-[#9090a8]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/waitlist"
            className="block w-full text-center px-4 py-2.5 bg-indigo-600 text-white text-[14px] font-semibold rounded-lg"
          >
            Get Early Access
          </Link>
        </div>
      )}
    </header>
  )
}
