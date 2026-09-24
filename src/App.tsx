import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Agencies from './pages/Agencies'
import Blog from './pages/Blog'
import Waitlist from './pages/Waitlist'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0f] text-[#f0f0f8]">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
