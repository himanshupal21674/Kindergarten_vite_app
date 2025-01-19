import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-[600px] bg-gray-100">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-white/50"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex items-center px-4">
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-indigo-700 block">Quality</span>
            <span className="text-indigo-700 block">Learning</span>
          </h1>
          <h2 className="text-4xl font-bold text-yellow-500 mb-6">
            For Every Child
          </h2>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors">
            Explore Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;