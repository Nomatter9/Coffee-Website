// import React from 'react'
import React, { useState } from 'react';
const Slideshow = () => {
    const slides = [
      {
        image: 'https://images.pexels.com/photos/773958/pexels-photo-773958.jpeg?auto=compress&cs=tinysrgb&w=600" ',
        title: 'Slide 1',
        description: 'Aperiam eius asperiore repellat ratione facilis perferendis reiciendis eveniet enim natus architecto obcaecati modi voluptates voluptatem placeat cumque,impedit, iste temporibus exercitationem!',
      },
      {
        image: 'https://media.istockphoto.com/id/2164909312/photo/coffee-beans-machine-and-factory-with-ingredient-for-roast-product-export-or-quality.jpg?b=1&s=612x612&w=0&k=20&c=mGXjQlGoH3IduplDCLI87O-mqfpC2DhfcnYd2bTwgw4=" ',
        title: 'Slide 2',
        description: 'Aperiam eius asperiore repellat ratione facilis perferendis reiciendis eveniet enim natus architecto obcaecati modi voluptates voluptatem placeat cumque, impedit, iste temporibus exercitationem!',
      },
      {
        image: 'https://images.pexels.com/photos/92354/pexels-photo-92354.jpeg?auto=compress&cs=tinysrgb&w=600" ',
        title: 'Slide 3',
        description: 'Aperiam eius asperiores  repellat ratione facilis perferendis reiciendis eveniet enim natus architecto obcaecati modi voluptates voluptatem placeat cumque,impedit, iste temporibus exercitationem!.',
      },
      {
        image: 'https://images.pexels.com/photos/2575835/pexels-photo-2575835.jpeg?auto=compress&cs=tinysrgb&w=600" "',
        title: 'Slide 4',
        description: 'Aperiam eius asperiores repellat ratione facilis perferendis reiciendis eveniet enim natus architecto obcaecati modi voluptates voluptatem placeat cumque, impedit, iste temporibus exercitationem!.',
      },
      {
        image: 'https://images.pexels.com/photos/2910874/pexels-photo-2910874.jpeg?auto=compress&cs=tinysrgb&w=600 ',
        title: 'Slide 5',
        description: 'Aperiam eius asperiores repellat ratione facilis perferendis reiciendis eveniet enim natus architecto obcaecati modi voluptates voluptatem placeat cumque,impedit, iste temporibus exercitationem!.',
      },
      {
        image: 'https://images.pexels.com/photos/236818/pexels-photo-236818.jpeg?auto=compress&cs=tinysrgb&w=600 ',
        title: 'Slide 6',
        description: 'Aperiam eius asperiores repellat ratione facilis perferendis reiciendis eveniet enim natus architecto obcaecati modi voluptates voluptatem placeat cumque, impedit, iste temporibus exercitationem!',
      },
      {
        image: 'https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg?auto=compress&cs=tinysrgb&w=600 ',
        title: 'Slide 7',
        description: 'Aperiam eius asperiores repellat ratione facilis perferendis reiciendis eveniet enim natus architecto obcaecati modi voluptates voluptatem placeat cumque,impedit, iste temporibus exercitationem!',
      },
      {
        image: 'https://images.pexels.com/photos/4264046/pexels-photo-4264046.jpeg?auto=compress&cs=tinysrgb&w=600  ',
        title: 'Slide 8',
        description: 'Aperiam eius asperiores repellat ratione facilis perferendis reiciendis eveniet enim natus architecto obcaecati modi voluptates voluptatem placeat cumque,impedit, iste temporibus exercitationem!.',
      },
      {
        image: 'https://images.pexels.com/photos/296285/pexels-photo-296285.jpeg?auto=compress&cs=tinysrgb&w=600 ',
        title: 'Slide 9',
        description: 'Aperiam eius asperiores repellat ratione facilis perferendis reiciendis eveniet enim natus architecto obcaecati modi voluptates voluptatem placeat cumque, impedit, iste temporibus exercitationem!.',
      },
      {
        image: 'https://images.pexels.com/photos/867470/pexels-photo-867470.jpeg?auto=compress&cs=tinysrgb&w=600 ',
        title: 'Slide 10',
        description: 'Aperiam eius asperiores repellat ratione facilis perferendis reiciendis eveniet enim natus architecto obcaecati modi voluptates voluptatem placeat cumque,impedit, iste temporibus exercitationem!.',
      },
    ];
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const handleNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
  
    const handlePrevSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };
      

  return (
    <div className="slideshow-container max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg p-4">
    <div className="mySlides flex flex-col items-center">
      <div className="numbertext mb-2 text-gray-600 sm:mb-0">
        {currentSlide + 1} / {slides.length}
      </div>
      <div className="image-container w-full max-w-[600px] h-[400px] overflow-hidden rounded-lg mb-4 sm:mb-0 sm:image-container w-full max-w-[400px] h-[200px]">
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
         className="w-full h-auto rounded-lg mb-4 sm:mb-0"
      />
      </div>
      <h2 className="text-xl font-bold text-center">{slides[currentSlide].title}</h2>
      <p className="p-2 text-center">{slides[currentSlide].description}</p>
    </div>

    <div className="flex justify-between mt-4">
      <button
        onClick={handlePrevSlide}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        Previous
      </button>
      <button
        onClick={handleNextSlide}
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        Next
      </button>
    </div>
  </div>
);
};

export default Slideshow;
    
