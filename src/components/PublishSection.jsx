import React from 'react'
import publishImage from '../assets/publish-image.png'
import trendingCircle from '../assets/trending_circle.png'
import heroGradient from '../assets/herogradient.png'

const PublishSection = () => {
  const advantages = [
    "We provide simple integration methods with our documentation, making it easy for developers to get started quickly.",
    "On Mabrook you can develop and publish your games for free while earning a share of the revenue through the reach of our platform.",
    "Mabrook has a large and active user base, ensuring that its games have high visibility with thousands of daily active users.",
    "We offer a ranking system where users compete to reach the top of the leaderboard, winning prizes and in-game currency."
  ]

  return (
    <div className="relative w-full bg-black py-8 md:py-14 lg:py-20 overflow-hidden">
      {/* Background gradient image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={heroGradient}
          alt="Publish Section Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/100" />
      </div>

      {/* Background - Single Small Orange Circle - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none z-10">
        <img
          src={trendingCircle}
          alt="Background Gradient"
          className="absolute bottom-38 right-0 transform translate-x-1/7 translate-y-1/6 w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[100px]  object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Section - Phone Screens Image - Larger Size */}
          <div className="order-1 lg:order-1 flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              <img 
                src={publishImage} 
                alt="Publish Games" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="order-2 lg:order-2 flex flex-col justify-center">
            {/* Main Heading */}
            <h2 className="orbitron-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
              <span className="text-[#FF5D02]">Publish your Games</span>
              <br />
              <span className="text-white">and monetize on Mabrook</span>
            </h2>

            {/* Introductory Paragraph */}
            <p className="text-white text-base md:text-lg lg:text-xl mb-5 md:mb-7 leading-relaxed opacity-90">
              Create and publish games for others to play. Players can also send gifts in your games, allowing you to earn a share of the revenue from those gifts.
            </p>

            {/* Sub-heading */}
            <h3 className="orbitron-text text-white text-lg md:text-xl lg:text-2xl font-bold mb-4 md:mb-6">
              Advantages of Being a Creator on Mabrook
            </h3>

            {/* Advantages List with Checkmarks */}
            <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {advantages.map((advantage, index) => (
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
                  {/* Advantage Text */}
                  <span className="text-white text-sm md:text-base lg:text-lg leading-relaxed opacity-90 flex-1">
                    {advantage}
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

export default PublishSection

