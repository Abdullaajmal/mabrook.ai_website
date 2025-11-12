import React from 'react'
import trendingCircle from '../assets/trending_circle.png'
import trendingImage from '../assets/trending_image.png'
import discoverBackground from '../assets/gamesection.png'

const TrendingSection = () => {
  return (
    <div className="relative w-full bg-black py-12 md:py-20 lg:py-28 overflow-visible md:overflow-hidden">
      {/* Background gradient image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={discoverBackground}
          alt="Trending Section Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* Background Orange Gradients */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 overflow-visible md:overflow-hidden">
        {/* Mobile: Large Circle - Centered Behind Text, Desktop: Small Top-left circle */}
        <div className="absolute md:hidden top-0 left-1/2" style={{ width: '1400px', height: '1400px', transform: 'translate(-50%, 10%)', zIndex: 0 }}>
          <img 
            src={trendingCircle} 
            alt="Background Gradient" 
            className="w-full h-full object-contain"
            style={{ filter: 'drop-shadow(none)' }}
          />
        </div>
        {/* Desktop: Top-left circle */}
        <img 
          src={trendingCircle} 
          alt="Background Gradient" 
          className="hidden md:block absolute top-40 left-12 w-[180px] h-[180px] lg:w-[120px] lg:h-[220px] object-contain"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-4 md:mb-6">
          <h2 className="orbitron-text text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-[#FF5D02]">Trending videos</span>
            <span className="text-white"> on the platform</span>
          </h2>
          
          {/* Description */}
          <p className="text-white text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Discover amazing interactive experiences created by the community. 360 videos and photos, games on reels, interactive live streams with gifts, interactive games on live streams and much more.
          </p>
        </div>

        {/* Phone Frames Grid - Using trending_image.png */}
        <div className="flex items-center justify-center mt-6 md:mt-10 mb-4 md:mb-1">
          <img 
            src={trendingImage} 
            alt="Trending Videos" 
            className="w-full max-w-6xl h-auto object-contain"
          />
        </div>

        {/* Circle Image - Below Trending Image, Center */}
        <div className="flex items-center justify-center">
          <img 
            src={trendingCircle} 
            alt="Background Gradient" 
            className="w-[150px] mr-150 h-[150px] md:w-[180px] md:h-[180px] lg:w-[100px] lg:h-[220px] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default TrendingSection

