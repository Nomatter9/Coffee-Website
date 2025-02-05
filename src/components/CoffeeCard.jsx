import React from 'react';
import Button from './Button';

const cardData = [
  {
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Rich Coffee Flavors',
    description: 'Laboriosam doloremque, est odio nulla maxime aspernatur error qui architecto nobis ullam magni a adipisci',
    message: 'This coffee likely represents a rich, aromatic brew, perfect for starting the day or enjoying a relaxing moment. It could be a strong espresso, cappuccino, or black coffee, highlighting deep flavors and a smooth texture. The image captures the essence of freshly roasted beans, expertly brewed to deliver a bold and satisfying taste. Whether enjoyed alone or paired with a pastry, this coffee symbolizes warmth, energy, and comfort in every sip. '
  },
  {
    image: 'https://images.pexels.com/photos/1235706/pexels-photo-1235706.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Morning Bliss',
    description: 'Laboriosam doloremque, est odio nulla maxime aspernatur error qui architecto nobis ullam magni a adipisci.',
    message : 'This coffee exudes a calm and cozy morning vibe, likely a latte or cappuccino with a smooth, creamy texture. The warm tones and soft lighting suggest a gentle, comforting brew, perfect for slow mornings or peaceful moments. It could have hints of vanilla, caramel, or chocolate, making it a delightful treat for coffee lovers. This cup represents relaxation, warmth, and the simple joy of a well-brewed coffee.'
  },
  {
    image: 'https://media.istockphoto.com/id/2025692222/photo/espresso-coffee-glass-cup-on-a-brown-background.jpg?b=1&s=612x612&w=0&k=20&c=VkDx0ppYD4LduSkkf6mbgt38wwwjBzGCNSiXJbfVC7g=',
    title: 'Perfect Brews',
    description: 'Laboriosam doloremque, est odio nulla maxime aspernatur error qui architecto nobis ullam magni a adipisci',
    message: 'This coffee appears to be a rich and intense espresso, served in a glass cup against a warm brown background. The deep, dark color suggests a bold and full-bodied flavor, likely with notes of dark chocolate, caramel, or toasted nuts. The crema on top hints at a freshly pulled shot with a smooth texture and slight bitterness. This espresso is perfect for those who love strong, concentrated coffee with a robust aroma and energizing kick.'
  },
];

function CoffeeCardItem({ image, title, description , message}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 ">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <Button message={message} />
      </div>
    </div>
  );
}


export default function CoffeeCard() {
  return (
    <div className="container mx-auto h-full p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {cardData.map((card, index) => (
          <CoffeeCardItem
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            message={card.message}
          />
        ))}
      </div>
    </div>
  );
}
<Button/>
