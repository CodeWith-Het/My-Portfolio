import React from 'react';
import myImage from "../../MyImage.png";

const About = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-white px-10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Content */}
        <div>
          <h2 className="text-4xl font-serif font-bold mb-6">So, who am I?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            I'm your new social media bestie. My mission is to help small and medium-sized 
            businesses grow their audience and brand recognition through social media. 
            My goal is to help you understand the power of social media and create connections 
            that go beyond the internet.
          </p>
          <button className="px-6 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition duration-500">
            Contact me
          </button>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img 
            src={myImage} 
            alt="About Section" 
            className="w-[400px] h-[500px] object-cover shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default About;
