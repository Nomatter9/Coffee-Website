import React from "react";
import ImageGallery from "./ImageGallery";  

const Services = () => {
  return (
    <>
      <section
        id="services"
        className="min-h-screen pt-24 px-4 flex flex-col items-center"
      >
        <div className="Services-box">
          <div className="m-4 sm:m-2">
            <h2 className="font-bold text-xl uppercase text-center">
              Services
            </h2>
            <p className="text-center mt-4 sm:mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, error tempore. Deleniti quae culpa neque? Aperiam
              eius asperiores repellat ratione facilis perferendis reiciendis
              eveniet enim natus architecto obcaecati modi. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Necessitatibus non odit
              molestias! Quisquam dolores officiis doloribus, facere obcaecati
              ratione ipsum beatae, labore sequi impedit recusandae at quam
              deleniti incidunt iste? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Delectus, consequatur quidem! Numquam natus
              laudantium ea quis voluptas, saepe dignissimos animi in cumque,
              quidem voluptate odio veniam maiores dolor perferendis modi.
            </p>
          </div>
          <ImageGallery />
        </div>
      </section>
    </>
  );
};

export default Services;
