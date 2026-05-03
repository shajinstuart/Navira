const navLinks = [
  { label: 'Products',   href: '#products'   },
  { label: 'Why Navira', href: '#why-navira'  },
  { label: 'About Us',   href: '#about'       },
  { label: 'FAQ',        href: '#faq'         },
  { label: 'Contact',    href: '#contact'     },
]

const legalLinks = [
  { label: 'Privacy Policy',    href: '#' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Refund Policy',     href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-honey-brown text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-honey-gold mb-1">Navira Honey</h3>
            <p className="text-white/60 text-sm italic mb-3">A Nature's Nectar · மலரின் தேன்</p>
            <p className="text-white/50 text-sm leading-relaxed">
              Pure, raw, and ethical honey from the gardens of Kanyakumari, Tamil Nadu, India.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-honey-gold text-xs tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 hover:text-honey-gold text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-honey-gold text-xs tracking-widest uppercase mb-4">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/60">
              <li>
                <a
                  href="https://wa.me/919489526843"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-honey-gold transition-colors"
                >
                  WhatsApp: +91 9489526843
                </a>
              </li>
              <li>Kanyakumari, Tamil Nadu, India</li>
              <li className="text-white/40 text-xs mt-1">
                Business Hours: 9 AM – 7 PM IST<br />Monday – Saturday
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © 2026 Navira Honey · Kanyakumari, Tamil Nadu · All rights reserved
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/30 hover:text-honey-gold text-xs transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-6 text-white/20 text-xs text-center">
          FSSAI License: Registration pending — launching 2027 · Made with love in Tamil Nadu
        </p>
      </div>
    </footer>
  )
}
