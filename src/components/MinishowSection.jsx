import React from 'react'
import minishowImage from '../assets/minishow-image.png'

const MinishowSection = () => {
  const features = [
    "Invite up to 9 co-hosts from your audience",
    "Stream from different locations at the same time",
    "Control who joins and switch views like a real producer",
    "Perfect for events, sports, concerts, and interviews"
  ]

  return (
    <div className="relative w-full bg-black py-8 md:py-14 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Section - Phone Images */}
          <div className="order-1 lg:order-1 flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
              <img 
                src={minishowImage} 
                alt="Minishow - Live streaming interface" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="order-2 lg:order-2 flex flex-col justify-center">
            {/* Main Heading */}
            <h2 className="orbitron-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-[#FF5D02]">Minishow:</span>{' '}
              <span className="text-white">Take control of the live experience</span>
            </h2>

            {/* Feature List with Checkmarks */}
            <ul className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 md:gap-4">
                  {/* Orange Checkmark Icon */}
                  <svg 
                    className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 mt-0.5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M20 6L9 17L4 12" 
                      stroke="#FF5D02" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  {/* Feature Text */}
                  <span className="text-white text-sm md:text-base lg:text-lg leading-relaxed opacity-90 flex-1">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinishowSection

