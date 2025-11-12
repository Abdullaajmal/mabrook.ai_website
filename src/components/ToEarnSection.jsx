import React from 'react'
import earnImage from '../assets/earn.png'

const ToEarnSection = () => {
  const features = [
    "Users purchase coin packs and send gifts, which convert into diamonds (1 diamond = US$ 0.01).",
    "Each gift has a specific value; for example, a gift of 100 coins converts into 100 diamonds.",
    "Gifts can be sent during live streams, videos, chats, and on the profile.",
    "In challenges, users play with gifts and the winner takes 75% of the total accumulated.",
    "The creator receives 75% of all gifts received on the platform.",
    "Earn bonuses when inviting friends to register on the platform."
  ]

  return (
    <div className="relative w-full bg-black py-8 md:py-14 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Section - Visual Image */}
          <div className="order-1 lg:order-1 flex items-center justify-start lg:justify-start">
            <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-xl overflow-visible px-0 sm:px-2">
              <img 
                src={earnImage} 
                alt="To Earn - Monetize your content" 
                className="w-full h-auto object-contain -translate-x-2 sm:translate-x-0"
              />
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="order-2 lg:order-2 flex flex-col justify-center">
            {/* Main Heading */}
            <h2 className="orbitron-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-[#FF5D02]">To Earn:</span>{' '}
              <span className="text-white">Monetize your content</span>
            </h2>

            {/* Introductory Paragraph */}
            <p className="text-white text-base md:text-lg lg:text-xl mb-4 md:mb-6 leading-relaxed opacity-90">
              On the monetized platform, the creator can earn money in various ways. The economy is based on gifts with defined values.
            </p>

            {/* Feature List with Checkmarks */}
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
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

export default ToEarnSection

