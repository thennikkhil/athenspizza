'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FavoriteItem {
  id: number;
  label: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const favorites: FavoriteItem[] = [
  {
    id: 1,
    label: 'Signature',
    name: 'Trio Cheese',
    description: 'Smoked mozzarella, arugula tossed in oil, with roasted pumpkin seeds',
    price: 18.5,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    label: "Chef's Choice",
    name: 'Supreme Pizza',
    description: "Flavorful pepperoni, italian sausage, bell pepper, and crispy bacon trio sides",
    price: 22.0,
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    label: 'Specialty',
    name: 'Margherita D.O.P',
    description: 'San Marzano tomatoes, basil, mozzarella, and fresh olive oil with wood oven',
    price: 15.0,
    image: 'https://images.unsplash.com/photo-1579751626658-0e6d9f0c89c5?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    label: 'Classic',
    name: 'Double Pepper',
    description: 'Double portion of spicy red peppers on a bed of mozzarella',
    price: 19.5,
    image: 'https://images.unsplash.com/photo-1571997477754-bc131143fbf9?w=400&h=300&fit=crop',
  },
];

export function OurFavorites() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? favorites.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === favorites.length - 1 ? 0 : prev + 1));
  };

  const visibleItems = [
    favorites[currentIndex],
    favorites[(currentIndex + 1) % favorites.length],
    favorites[(currentIndex + 2) % favorites.length],
    favorites[(currentIndex + 3) % favorites.length],
  ];

  return (
    <section className="py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our Favorites
            </h2>
            <div className="w-16 h-1 bg-red-600"></div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="h-10 w-10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="h-10 w-10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.label && (
                  <span className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    {item.label}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Price and Cart */}
                <div className="flex items-center justify-between">
                  <span className="text-red-600 font-bold text-lg">
                    ${item.price.toFixed(2)}
                  </span>
                  <Button
                    size="icon"
                    className="h-8 w-8 bg-gray-200 hover:bg-gray-300 text-gray-700"
                  >
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
