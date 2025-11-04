'use client'

import Image from 'next/image'
import {useState} from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* SVG Logo */}
          <Image
            src="/images/logo.svg"
            alt="Ecostrahlreinigung Logo"
            width={200}
            height={50}
            className="-my-5"
          />
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
            <button
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-gray-900 rounded-lg p-4">
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
