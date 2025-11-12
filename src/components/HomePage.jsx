import React from 'react'
import hero from '../assets/hero.png'
import hero_back from '../assets/hero_back.png'
import heroGradient from '../assets/herogradient.png'
import gameSectionBackground from '../assets/gamesection.png'
import Navbar from './Navbar'
import TrendingSection from './TrendingSection'
import MinishopSection from './MinishopSection'
import MinishowSection from './MinishowSection'
import DiscoverSection from './DiscoverSection'
import ToEarnSection from './ToEarnSection'
import GamesSection from './GamesSection'
import PublishSection from './PublishSection'
import Footer from './Footer'

const HomePage = () => {
  return (
    <div id="top" className="relative min-h-screen w-full bg-black overflow-hidden">

      {/* Hero Section with gradient background */}
      <div
        className="relative overflow-hidden pb-12 md:pb-16 lg:pb-20"
        style={{
          backgroundImage: `url(${heroGradient})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Hero Content */}
        <section className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16">
          {/* Mobile: Hero Circle Image */}
          <div className="absolute inset-0 md:hidden flex items-start justify-center pointer-events-none -z-10">
            <img
              src={hero_back}
              alt="Mobile Hero Glow"
              className="w-[420px] transform -translate-y-16"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center min-h-[60vh] md:min-h-[70vh]">
            {/* Mobile: Centered Text Section, Desktop: Left Content Section */}
            <div className="text-center md:text-left order-2 lg:order-1 flex flex-col justify-center min-h-[40vh] md:min-h-0 relative z-10">
              <h1 className="mb-6 md:mb-8">
                <span className="orbitron-text text-[#FF5D02] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold block mb-2 md:mb-3">
                  The Future of
                </span>
                <span className="orbitron-text text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold block leading-tight">
                  Online Entertainment
                </span>
              </h1>

              <p className="text-white text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed opacity-90">
                Short video platform with Artificial Intelligence that shows the content you like.
              </p>

            </div>

            {/* Right Content Section - 2 Images (Hidden on Mobile, Visible on Desktop) */}
            <div className="relative order-1 lg:order-2 hidden md:flex items-center justify-center w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] py-8">
              {/* Background Gradient Circle - Straight, Behind, Centered */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="relative w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] aspect-square flex items-center justify-center">
                  <img 
                    src={hero_back} 
                    alt="Background Gradient" 
                    className="w-full h-full object-contain opacity-90"
                  />
                </div>
              </div>
              
              {/* Hero Phone - Centered in Background Circle, In Front */}
              <div className="relative z-10 w-full max-w-[280px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[350px] flex items-center justify-center">
                <img 
                  src={hero} 
                  alt="Mabrook App" 
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Trending Section */}
      <section id="trending" className="scroll-mt-24">
        <TrendingSection />
      </section>

      {/* Minishop Section */}
      <section id="shop" className="scroll-mt-24">
        <MinishopSection />
      </section>

      {/* Minishow Section */}
      <section id="show" className="scroll-mt-24">
        <MinishowSection />
      </section>

      {/* Discover Section */}
      <section id="discover" className="scroll-mt-24">
        <DiscoverSection />
      </section>

      {/* To Earn Section */}
      <section id="earn" className="scroll-mt-24">
        <ToEarnSection />
      </section>

      {/* Games & Publish sections with shared gradient */}
      <div className="relative scroll-mt-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={gameSectionBackground}
            alt="Games and Publish Background"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Games Section */}
        <section id="games" className="relative z-10">
          <GamesSection />
        </section>

        {/* Publish Section */}
        <section id="publish" className="relative z-10">
          <PublishSection />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage

