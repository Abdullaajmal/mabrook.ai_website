import React from 'react'
import game1 from '../assets/game1.png'
import game2 from '../assets/game2.png'
import game3 from '../assets/game3.png'
import game4 from '../assets/game4.png'
import trendingCircle from '../assets/trending_circle.png'
import gameSectionBackground from '../assets/gamesection.png'

const GamesSection = () => {
  return (
    <div className="relative w-full bg-black py-16 md:py-24 lg:py-40 overflow-visible md:overflow-hidden">
      {/* Background gradient image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={gameSectionBackground}
          alt="Games Section Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-9">
          <h2 className="orbitron-text text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-white">GAMES</span>{' '}
            <span className="text-[#FF5D02]">INTEGRATED</span>{' '}
            <span className="text-white">INTO VIDEOS</span>
          </h2>
          
          {/* Description */}
          <p className="text-white text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Play directly within videos and stories. A unique experience that blends entertainment and gamification.
          </p>
        </div>

        {/* Circle Image and Game Cards - Desktop: Row, Mobile: Column with 2x2 Grid */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5 md:gap-7 mt-6 md:mt-10">
          {/* Small Circle Image - Mobile: Top, Desktop: Left Side */}
          <div className="flex items-center justify-center md:flex-shrink-0">
            <img
              src={trendingCircle}
              alt="Background Gradient"
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[120px] lg:h-[140px] object-contain"
            />
          </div>

          {/* Game Cards - Mobile: 2x2 Grid (wider), Desktop: 4 Columns Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 flex-1 w-full md:w-auto -mx-2 md:mx-0">
            <img src={game1} alt="Game 1" className="w-full h-auto object-contain scale-110 md:scale-100" />
            <img src={game2} alt="Game 2" className="w-full h-auto object-contain scale-110 md:scale-100" />
            <img src={game3} alt="Game 3" className="w-full h-auto object-contain scale-110 md:scale-100" />
            <img src={game4} alt="Game 4" className="w-full h-auto object-contain scale-110 md:scale-100" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GamesSection

