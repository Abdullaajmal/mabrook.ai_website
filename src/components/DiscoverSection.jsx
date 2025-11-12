import React from 'react'
import discoverBackground from '../assets/discoversection.png'

const DiscoverSection = () => {
  const features = [
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 20L32 10M32 44L32 54M20 32L10 32M44 32L54 32" stroke="#FF5D02" strokeWidth="3" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="18" stroke="#FF5D02" strokeWidth="2.5" fill="none"/>
          <circle cx="32" cy="32" r="12" fill="#FF5D02" opacity="0.3"/>
        </svg>
      ),
      title: "Interactive Videos",
      description: "Create and watch videos that respond to touch with playable games, polls, and challenges integrated into the feed."
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 24L18 44L46 44L46 24L18 24Z" stroke="#FF5D02" strokeWidth="2.5" fill="none"/>
          <path d="M18 24L32 32L46 24" stroke="#FF5D02" strokeWidth="2.5" fill="none"/>
          <rect x="22" y="28" width="6" height="6" rx="1" fill="#FF5D02"/>
          <rect x="36" y="28" width="6" height="6" rx="1" fill="#FF5D02"/>
          <path d="M26 36L38 36" stroke="#FF5D02" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "MiniShop",
      description: "Sell products directly through videos, turning content into interactive digital storefronts."
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="20" stroke="#FF5D02" strokeWidth="2.5" fill="none"/>
          <path d="M32 12L32 52M12 32L52 32" stroke="#FF5D02" strokeWidth="2" strokeLinecap="round"/>
          <text x="32" y="50" fontSize="9" fill="#FF5D02" textAnchor="middle" fontWeight="bold">360°</text>
          <text x="45" y="36" fontSize="8" fill="#FF5D02" fontWeight="bold">AR</text>
        </svg>
      ),
      title: "360° & AR Content",
      description: "Dive into 360° videos and Augmented Reality experiences directly in your feed."
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="22" stroke="#FF5D02" strokeWidth="2" fill="none" opacity="0.4"/>
          <circle cx="32" cy="32" r="18" stroke="#FF5D02" strokeWidth="2" fill="none" opacity="0.6"/>
          <circle cx="32" cy="32" r="14" stroke="#FF5D02" strokeWidth="2.5" fill="none"/>
          <text x="32" y="38" fontSize="11" fill="#FF5D02" textAnchor="middle" fontWeight="bold">LIVE</text>
        </svg>
      ),
      title: "Interactive Livestreams",
      description: "Send gifts, interact with avatars, and join real-time challenges during livestreams."
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 18C16 14.6863 18.6863 12 22 12H42C45.3137 12 48 14.6863 48 18V38C48 41.3137 45.3137 44 42 44H30L20 52V44H22C18.6863 44 16 41.3137 16 38V18Z" stroke="#FF5D02" strokeWidth="2.5" fill="none"/>
          <circle cx="28" cy="26" r="2.5" fill="#FF5D02"/>
          <circle cx="32" cy="26" r="2.5" fill="#FF5D02"/>
          <circle cx="36" cy="26" r="2.5" fill="#FF5D02"/>
          <path d="M20 38L28 34L32 38L40 34" stroke="#FF5D02" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </svg>
      ),
      title: "MiniChat & Reactions",
      description: "Chat instantly and express yourself with diverse, adorable 3D avatars."
    },
    {
      icon: (
        <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="30" width="36" height="18" rx="3" stroke="#FF5D02" strokeWidth="2.5" fill="none"/>
          <circle cx="24" cy="39" r="2.5" fill="#FF5D02"/>
          <circle cx="32" cy="39" r="2.5" fill="#FF5D02"/>
          <circle cx="40" cy="39" r="2.5" fill="#FF5D02"/>
          <path d="M18 26L20 22H44L46 26" stroke="#FF5D02" strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="26" y="14" width="12" height="6" rx="3" fill="#FF5D02"/>
          <path d="M28 20L36 20" stroke="#FF5D02" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Gamification",
      description: "Earn points, climb leaderboards, and unlock achievements through engagement and popularity."
    }
  ]

  return (
    <div className="relative w-full bg-black py-8 md:py-14 lg:py-20 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
      {/* Background gradient image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={discoverBackground}
          alt="Discover Section Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-9">
          <h2 className="orbitron-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-white">DISCOVER WHAT MAKES</span>
            <br />
            <span className="text-[#FF5D02]">MABROOK UNIQUE</span>
          </h2>
          
          {/* Subtitle */}
          <p className="text-white text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
            A revolutionary platform that blends entertainment, interactivity, and cutting-edge technology.
          </p>
        </div>

        {/* Features Grid - 2 Rows, 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black border-2 border-[#FF5D02] rounded-lg p-6 md:p-8 text-center hover:border-[#FF6802] transition-colors duration-300"
              style={{
                boxShadow: '0 0 15px rgba(255, 93, 2, 0.3)'
              }}
            >
              {/* Icon */}
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="orbitron-text text-white text-base md:text-lg lg:text-xl font-bold uppercase mb-3 md:mb-4">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-white text-sm md:text-base leading-relaxed opacity-90">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DiscoverSection

