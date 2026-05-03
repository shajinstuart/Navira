import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Products',   href: '#products'   },
  { label: 'Why Navira', href: '#why-navira'  },
  { label: 'About Us',   href: '#about'       },
  { label: 'FAQ',        href: '#faq'         },
  { label: 'Contact',    href: '#contact'     },
]

const WA_LINK = 'https://wa.me/919489526843?text=Hi%2C%20I%20want%20to%20order%20Navira%20Honey%20500g'

export default function Header() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-honey-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-serif text-xl font-bold text-honey-brown">Navira Honey</span>
          <span className="text-xs text-honey-gold tracking-widest uppercase">A Nature's Nectar</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-honey-brown hover:text-honey-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-honey-gold text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-honey-brown transition-colors"
          >
            Order Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-honey-brown p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-honey-cream border-t border-honey-gold/20 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-honey-brown font-medium py-1"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-honey-gold text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center"
          >
            Order via WhatsApp
          </a>
        </div>
      )}
    </header>
  )
}
