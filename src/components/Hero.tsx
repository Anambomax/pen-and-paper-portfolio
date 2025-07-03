
import React from 'react';
import { Pen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-orange-100/20"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full shadow-lg">
          <Pen className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 leading-tight">
          Crafting Stories That
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
            Captivate Hearts
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Welcome to my literary world. I'm a passionate writer dedicated to weaving narratives that inspire, entertain, and touch the soul.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Explore My Work
          </button>
          <button className="px-8 py-4 border-2 border-amber-600 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-amber-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-orange-300 rounded-full opacity-40 animate-pulse delay-300"></div>
      <div className="absolute top-1/2 left-8 w-2 h-2 bg-amber-400 rounded-full opacity-50 animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
