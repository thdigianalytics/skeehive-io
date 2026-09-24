import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Product', to: '/product' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'For Agencies', to: '/agencies' },
  { label: 'Blog', to: '/blog' },
]

function SkeehiveLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hexagon background */}
      <path d="M50 4L93 28V72L50 96L7 72V28L50 4Z" fill="white" rx="4"/>
      {/* Left vertical bar */}
      <rect x="26" y="24" width="8" height="52" rx="2" fill="#0a0a0f"/>
      {/* Right vertical bar */}
      <rect x="66" y="24" width="8" height="52" rx="2" fill="#0a0a0f"/>
      {/* Top slanted crossbar (parallelogram leaning right) */}
      <path d="M34 32L66 28L74 38L34 42Z" fill="#0a0a0f"/>
      {/* Bottom horizontal crossbar */}
      <rect x="26" y="56" width="48" height="8" rx="2" fill="#0a0a0f"/>
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
          <SkeehiveLogo />
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
