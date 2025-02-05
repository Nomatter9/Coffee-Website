import React from 'react';
import Slideshow from './Slideshow';

const Services = () => {
  return (
    <>
    <section id="services" className="min-h-screen pt-24 px-4 flex flex-col items-center"> 
 
    <div className="Services-box">
      <div className="m-4 sm:m-2">
        <h2 className="font-bold text-xl uppercase text-center">Services</h2>
        <p className="text-center mt-4 sm:mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, error tempore. Deleniti quae culpa neque?
          Aperiam eius asperiores repellat ratione facilis perferendis reiciendis eveniet enim natus architecto obcaecati modi.
        </p>
      </div>
      <Slideshow />
    </div>
         </section>
    </>
  );
};

export default Services;

