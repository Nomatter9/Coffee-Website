import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center bg-gray-800 text-white p-4 fixed top-0 left-0 w-full  z-50 md: relative sm:relative">
      
        <h1>
          <a href="#home" className="text-xl font-bold hover:text-gray-300">
            Aroma Coffee Roastery
          </a>
        </h1>

        
        <ul className="flex flex-wrap space-x-6 ">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#services" className="hover:text-gray-300">Services</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}


