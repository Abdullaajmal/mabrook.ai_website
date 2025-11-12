import React from 'react'
import miniImage from '../assets/mini_image.png'
import groupCard from '../assets/group-card.png'

const MinishopSection = () => {
  return (
    <div className="relative w-full bg-black py-8 md:py-14 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Section - Text and Cards */}
          <div className="order-2 lg:order-1 max-w-md lg:max-w-none">
            {/* Headline */}
            <h2 className="orbitron-text mb-6 md:mb-8">
              <span className="text-[#FF5D02] text-3xl md:text-4xl lg:text-5xl font-bold block mb-2">
                Minishop
              </span>
              <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold block">
                Sell on products on Reels
              </span>
            </h2>

            {/* Body Text */}
            <p className="text-white text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-md leading-relaxed">
              Go live to sell your products. Post videos of your business, choose the category, and let the algorithm deliver your product to thousands of people near you.
            </p>

            {/* Group Card Image */}
            <div className="flex items-start justify-start mt-6 md:mt-8">
              <img 
                src={groupCard} 
                alt="Minishop Cards" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Section - Phone Screens - Larger Size */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end w-full">
            <img 
              src={miniImage} 
              alt="Minishop App Screens" 
              className="w-full max-w-[700px] md:max-w-[950px] lg:max-w-[1200px] xl:max-w-[1200px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MinishopSection

