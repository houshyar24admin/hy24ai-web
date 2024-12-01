import React from 'react';
import { Brain, Globe2, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="pt-16 bg-gradient-to-b from-purple-950 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Your Future with
            <span className="block text-purple-300">Artificial Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Connect with leading AI platforms through a single, powerful interface
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Get Started
            </button>
            <button className="border border-purple-400 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-purple-900/50 rounded-xl">
              <Brain className="w-12 h-12 mb-4 text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">AI Solutions</h3>
              <p className="text-gray-300">Cutting-edge AI tools for every industry</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-purple-900/50 rounded-xl">
              <Globe2 className="w-12 h-12 mb-4 text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-300">Serving customers worldwide</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-purple-900/50 rounded-xl">
              <Clock className="w-12 h-12 mb-4 text-purple-300" />
              <h3 className="text-xl font-semibold mb-2">24/7 Reliability</h3>
              <p className="text-gray-300">Round-the-clock service and support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;