'use client'

import Image from 'next/image'
import {useState} from 'react'
import {Spin as Hamburger} from 'hamburger-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with text */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-triangle-yellow.png"
              alt="Ecostrahlreinigung Logo"
              width={200}
              height={50}
              className="-my-5 sm:h-20 h-16 w-auto"
            />
            {/* Brand text - hidden on mobile */}
            <div className="flex flex-row sm:flex-col  leading-tight uppercase italic font-bold text-lg">
              <span className="text-yellow-300">ECO</span>
              <span className="text-white">STRAHL</span>
              <span className="text-white">REINIGUNG</span>
            </div>
          </div>
          <ul className="hidden md:flex space-x-8 uppercase font-medium">
            <li>
              <a href="#home" className="text-white hover:text-primary transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#leistungen" className="text-white hover:text-primary transition-colors">
                Leistungen
              </a>
            </li>
            <li>
              <a href="#preise" className="text-white hover:text-primary transition-colors">
                Preise
              </a>
            </li>
            <li>
              <a href="#kontakt" className="text-white hover:text-primary transition-colors">
                Kontakt
              </a>
            </li>
          </ul>
          <div className="md:hidden">
            <Hamburger
              toggled={mobileMenuOpen}
              toggle={setMobileMenuOpen}
              color="oklch(87.9% 0.169 91.605)"
              size={24}
              duration={0.5}
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-gray-900 rounded-lg p-4 overflow-hidden animate-slideDown">
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#leistungen"
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a
                  href="#preise"
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Preise
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
