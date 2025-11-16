'use client'

import Image from 'next/image'
import {useState} from 'react'
import {Spin as Hamburger} from 'hamburger-react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

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
              width={80}
              height={80}
              className="-my-2 w-15 sm:w-16 h-auto object-contain"
            />
            {/* Brand text - hidden on mobile */}
            <div className="flex flex-row sm:flex-col leading-tight uppercase italic font-bold text-lg">
              <span className="text-yellow-300">
                ECO<span className="text-white">STRAHLREINIGUNG</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-white hover:text-primary transition-colors px-4 py-2 uppercase font-medium"
                  asChild
                >
                  <Link href="/">Heim</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white hover:text-primary bg-transparent uppercase font-medium">
                  Leistungen
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="w-[200px] p-2 bg-gray-900 border border-gray-800">
                    <li>
                      <NavigationMenuLink
                        className="block px-4 py-3 text-white hover:bg-gray-800 hover:text-primary transition-colors rounded-md"
                        asChild
                      >
                        <Link href="/laserreinigung">Laserreinigung</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        className="block px-4 py-3 text-white hover:bg-gray-800 hover:text-primary transition-colors rounded-md"
                        asChild
                      >
                        <Link href="/sandstrahlen">Sandstrahlen</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        className="block px-4 py-3 text-white hover:bg-gray-800 hover:text-primary transition-colors rounded-md"
                        asChild
                      >
                        <Link href="/trockeneisreinigung">Trockeneisreinigung</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-white hover:text-primary transition-colors px-4 py-2 uppercase font-medium"
                  asChild
                >
                  <Link href="/galerie">Galerie</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="text-white hover:text-primary transition-colors px-4 py-2 uppercase font-medium"
                  asChild
                >
                  <Link href="/kontakt">Kontakt</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
                <Link
                  href="/"
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Heim
                </Link>
              </li>
              <li>
                <Link
                  href="/laserreinigung"
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Laserreinigung
                </Link>
              </li>
              <li>
                <Link
                  href="/sandstrahlen"
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sandstrahlen
                </Link>
              </li>
              <li>
                <Link
                  href="/trockeneisreinigung"
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Trockeneisreinigung
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="block text-white hover:text-primary transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
