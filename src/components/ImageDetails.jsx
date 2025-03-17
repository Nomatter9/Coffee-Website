import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ImageDetails = () => {
  const { id } = useParams();
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/images.json') 
      .then((response) => response.json())
      .then((data) => {
        const foundImage = data.find((img) => img.id === Number(id)); 
        setImage(foundImage);
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, [id]);

  if (!image) return <p className="text-center">Loading...</p>;

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">{image.title}</h1>
      <img src={image.url} alt={image.title} className="w-full max-w-2xl mx-auto rounded-lg shadow-lg mb-4" />
      <p className="text-gray-600">{image.details}</p>
      <Link to="/services" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">
        Back to Services
      </Link>
    </div>
  );
};

export default ImageDetails;

