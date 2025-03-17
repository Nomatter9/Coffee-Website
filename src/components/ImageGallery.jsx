import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/images.json');
        const data = await response.json();
        setImages(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchImages();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Error</h1>
        <p className="text-center text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Image Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image) => (
          <Link key={image.id} to={`/image/${image.id}`} className="block overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition">
            <img src={image.url} alt={image.title} className="w-full h-64 object-cover rounded-lg" />
            <div className="p-2 text-center font-semibold">{image.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

