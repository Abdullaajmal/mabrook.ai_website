import React, { useState } from 'react'
import mabrook from '../assets/mabrook.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navLinks = [
    { href: '#discover', label: 'Discover' },
    { href: '#shop', label: 'Shop' },
    { href: '#earn', label: 'To Earn' },
    { href: '#show', label: 'Creators' },
    { href: '#show', label: 'Show' },
    { href: '#games', label: 'Games' },
    { href: '#publish', label: 'Publish Games' }
  ]

  const handleLinkClick = (event, href) => {
    event.preventDefault()
    setIsMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className="relative z-20 bg-transparent">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex items-center">
            <a 
              href="#top"
              onClick={(event) => handleLinkClick(event, '#top')}
            >
              <img 
                src={mabrook} 
                alt="Mabrook" 
                className="h-8 md:h-10 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 intel-font">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white hover:text-[#FF5D02] transition-colors text-sm lg:text-base"
                onClick={(event) => handleLinkClick(event, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none z-30"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-6 py-4 space-y-4 intel-font">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-white hover:text-[#FF5D02] transition-colors text-base py-2"
                onClick={(event) => handleLinkClick(event, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

