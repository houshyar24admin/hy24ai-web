import React from 'react';
import { Menu, X, Brain } from 'lucide-react';
import DemoModal from './DemoModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);

  return (
    <>
      <nav className="bg-purple-950 text-white fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2">
                  <Brain className="h-8 w-8" />
                  <span className="font-bold text-xl">HY24.ai</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a href="#home" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800">Home</a>
                  <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800">Features</a>
                  <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-purple-800">Contact</a>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Book Demo
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-purple-800"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800">Home</a>
              <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800">Features</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800">Contact</a>
              <button
                onClick={() => {
                  setIsDemoModalOpen(true);
                  setIsOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-purple-800"
              >
                Book Demo
              </button>
            </div>
          </div>
        )}
      </nav>
      
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </>
  );
};

export default Navbar;