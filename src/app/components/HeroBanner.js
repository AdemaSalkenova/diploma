// номер 3
import React from 'react';

const HeroBanner = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="block">Obsessive Attention.</span>
          <span className="block">Intelligent Effort.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto">
          Functional handbags made of luxurious and honest materials to improve people's lives in small but mighty ways.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;