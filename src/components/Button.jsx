import React, { useState } from "react";


export default function Button({ message }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-start">
  
      <button 
        onClick={() => setIsOpen(true)} 
        className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
      >
      For More Info
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-semibold">{message}</p>
            <button 
              onClick={() => setIsOpen(false)} 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
