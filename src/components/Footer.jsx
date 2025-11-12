import React from 'react'
import mabrook from '../assets/footer-font.png'

const Footer = () => {
  return (
    <footer className="relative w-full bg-black py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Mobile: Logo at Top */}
        <div className="mb-6 md:hidden">
          <img 
            src={mabrook} 
            alt="Mabrook" 
            className="h-8 w-auto"
          />
        </div>

        {/* Desktop: Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_2fr] gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Company Information - Left */}
          <div className="lg:col-span-1 hidden md:block">
            {/* Logo */}
            <div className="mb-4 md:mb-6">
              <img 
                src={mabrook} 
                alt="Mabrook" 
                className="h-8 md:h-10 lg:h-12 w-auto"
              />
            </div>
            
            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Mabrook is an innovative platform focused on interactive short videos, combining entertainment, commerce, and technology in one place.
            </p>
          </div>

          {/* Navigation Links - Mobile: 2 Columns (2 per row), Desktop: 4 Columns in One Row */}
          <div className="lg:col-span-1 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
            {/* Platform */}
            <div>
              <h3 className="text-white font-bold text-sm md:text-base lg:text-lg mb-4 md:mb-5 lg:mb-6">Platform</h3>
              <ul className="space-y-2.5 md:space-y-3">
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">About Mabrook</a></li>
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Features</a></li>
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Download App</a></li>
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Web App</a></li>
              </ul>
            </div>

            {/* Developers */}
            <div>
              <h3 className="text-white font-bold text-sm md:text-base lg:text-lg mb-4 md:mb-5 lg:mb-6">Developers</h3>
              <ul className="space-y-2.5 md:space-y-3">
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Documentation</a></li>
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">SDK</a></li>
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">API</a></li>
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Integration</a></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-white font-bold text-sm md:text-base lg:text-lg mb-4 md:mb-5 lg:mb-6">Community</h3>
              <ul className="space-y-2.5 md:space-y-3">
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Creators</a></li>
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Forum</a></li>
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Events</a></li>
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-bold text-sm md:text-base lg:text-lg mb-4 md:mb-5 lg:mb-6">Legal</h3>
              <ul className="space-y-2.5 md:space-y-3">
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Terms of Use</a></li>
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Privacy</a></li>
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Security</a></li>
                <li><a href="#" className="text-white hover:text-[#FF5D02] transition-colors text-sm md:text-sm lg:text-base font-normal">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Email Subscription Section - Below */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_2fr] gap-8 md:gap-12 lg:gap-16">
            {/* Empty space to align with left column - Desktop only */}
            <div className="hidden md:block"></div>
            
            {/* Email Subscription - Gray Background Container with Border (Mobile only) */}
            <div className="w-full md:w-auto bg-gray-900 border border-gray-700 md:bg-transparent md:border-none rounded-lg p-6 md:p-8">
              <h3 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4">
                Stay ahead with the future of social entertainment.
              </h3>
              <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6">
                Receive news, updates, and exclusive tips about Mabrook.
              </p>
              
              {/* Email Input Form - Desktop: Unified Container, Mobile: Stacked */}
              <form className="relative w-full max-w-lg">
                {/* Desktop: White Rounded Container with Button Inside */}
                <div className="hidden md:flex bg-white rounded-full overflow-hidden items-center">
                  {/* Email Input - Left Side */}
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="flex-1 bg-transparent text-black px-6 py-4 text-sm md:text-base placeholder-gray-500 focus:outline-none border-none"
                  />
                  {/* Join Now Button - Right Side, Inside Container */}
                  <button
                    type="submit"
                    className="bg-[#FF5D02] hover:bg-[#FF6802] text-white px-8 md:px-10 py-4 rounded-full text-sm md:text-base font-semibold transition-colors duration-300 whitespace-nowrap flex-shrink-0 m-1"
                  >
                    Join Now
                  </button>
                </div>
                
                {/* Mobile: Stacked Input and Button */}
                <div className="md:hidden space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-white text-black px-4 py-3 rounded-lg text-sm placeholder-gray-500 focus:outline-none border-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#FF5D02] hover:bg-[#FF6802] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-300"
                  >
                    Join Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 md:pt-12">
          {/* Social Media Icons and App Store Badges - Mobile: Stacked, Desktop: Flex Row */}
          <div className="flex flex-col md:flex-row md:flex-wrap items-start md:items-center gap-4 md:gap-6 mb-6 md:mb-8">
            {/* Mobile: Social icons in row */}
            <div className="flex items-center gap-4 w-full md:w-auto">
            {/* Social Media Icons */}
            {/* Instagram */}
            <a href="#" className="text-white hover:text-[#FF5D02] transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            {/* X (Twitter) */}
            <a href="#" className="text-white hover:text-[#FF5D02] transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* Facebook */}
            <a href="#" className="text-white hover:text-[#FF5D02] transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="#" className="text-white hover:text-[#FF5D02] transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* YouTube */}
            <a href="#" className="text-white hover:text-[#FF5D02] transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            </div>

            {/* Mobile: App badges in row below social icons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto md:ml-0">
            {/* App Store Badge */}
            <a href="#" className="flex items-center gap-2 bg-black border border-gray-700 px-3 py-2 rounded-md hover:border-[#FF5D02] transition-colors w-full sm:w-auto justify-center sm:justify-start">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="text-white text-[11px] md:text-xs font-medium whitespace-nowrap">Download on the App Store</span>
            </a>
            
            {/* Google Play Badge */}
            <a href="#" className="flex items-center gap-2 bg-black border border-gray-700 px-3 py-2 rounded-md hover:border-[#FF5D02] transition-colors w-full sm:w-auto justify-center sm:justify-start">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span className="text-white text-[11px] md:text-xs font-medium whitespace-nowrap">Get it on Google Play</span>
            </a>
            </div>
          </div>

          {/* Separator Line */}
          <div className="border-t border-gray-700 mb-6 md:mb-8"></div>

          {/* Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
            {/* Left Side - Copyright */}
            <p className="text-gray-400 text-sm md:text-base">
              © 2025 Mabrook. All rights reserved.
            </p>

            {/* Right Side - Legal Links */}
            <div className="flex items-center gap-4 md:gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

