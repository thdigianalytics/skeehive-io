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
  // Official SVG from Electric Jelly — icon portion only (x=364..443, y=0..88 of original viewBox)
  return (
    <svg width="36" height="36" viewBox="364 0 79.46 88.03" xmlns="http://www.w3.org/2000/svg">
      <path fill="white" d="M437.84,17.89l-28.38-16.39c-3.48-2.01-7.77-2.01-11.24,0l-28.38,16.39c-3.48,2.01-5.62,5.72-5.62,9.74v32.77c0,4.02,2.14,7.73,5.62,9.74l28.38,16.39c3.48,2.01,7.77,2.01,11.24,0l28.38-16.39c3.48-2.01,5.62-5.72,5.62-9.74V27.63c0-4.02-2.14-7.73-5.62-9.74ZM425.29,45.88h-2v19.59c0,1.03-.84,1.87-1.87,1.87s-1.87-.84-1.87-1.87v-10.41l-32.65,12.16c-.21.08-.43.12-.65.12-.38,0-.75-.11-1.06-.33-.5-.35-.8-.92-.8-1.53v-19.59h-2c-1.03,0-1.87-.84-1.87-1.87s.84-1.87,1.87-1.87h2v-19.59c0-1.03.84-1.87,1.87-1.87s1.87.84,1.87,1.87v10.41l32.65-12.16c.57-.21,1.21-.13,1.72.22.5.35.8.92.8,1.53v19.59h2c1.03,0,1.87.84,1.87,1.87s-.84,1.87-1.87,1.87Z"/>
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
