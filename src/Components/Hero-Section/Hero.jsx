  import React from 'react'
  import heroImage from "../../Hero-Image.jpg";
  import '../../Components/Hero-Section/Hero.css'

  const Hero = () => {
    return (
      <div className="w-full h-screen overflow-y-hidden relative">
        <img 
          src={heroImage} 
          className="absolute inset-0 w-full h-full object-cover opacity-50" 
          alt="Hero" 
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Hi, I'm Het Patel
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-gray-200 drop-shadow">
            A Passionate Web Developer 🚀
          </p>
          
          <button className="mt-6 px-6 py-3 text-2xl text-blue-600 bg-white border-2 border-blue-600 rounded font-bold hover:bg-blue-600 hover:text-white transition duration-300">
            Hire Me
          </button>
        </div>
      </div>
    )
  }

  export default Hero