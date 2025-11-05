import React from 'react'
import gradinet1 from './assets/gradinet1.png'
import gradinet2 from './assets/gradinet2.png'
import mabrook from './assets/mabrook.png'
import './index.css'

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background gradients - Full page coverage */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <img 
          src={gradinet1} 
          alt="Gradient 1" 
          className="absolute top-0 right-0 w-full h-full object-cover object-right-top opacity-60"
        />
      </div>
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <img 
          src={gradinet2} 
          alt="Gradient 2" 
          className="absolute bottom-0 left-0 w-full h-full object-cover object-left-bottom opacity-60"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20">
        {/* Mabrook Logo */}
        <div className="mb-8">
          <img 
            src={mabrook} 
            alt="Mabrook" 
            className="w-auto h-auto max-w-[500px] object-contain"
          />
        </div>

        {/* IS COMING SOON Text */}
        <h1 className="orbitron-text text-[#FF5D02] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider mb-8 text-center">
          IS COMING SOON
        </h1>

        {/* Call to Action Text */}
        <p className="orbitron-paragraph text-white w-full max-w-[1300px] mb-12 px-4 mx-auto block">
          JOIN THE JOURNEY - REGISTER YOUR EMAIL NOW TO RECEIVE<br />YOUR EXCLUSIVE INVITE.
        </p>

        {/* Register Button */}
        <button className="orbitron-text bg-gradient-to-r from-[#FF5D02] to-[#FF6802] text-white px-16 py-3 rounded-full text-base md:text-lg uppercase font-semibold tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          REGISTER
        </button>
      </div>
    </div>
  )
}

export default App