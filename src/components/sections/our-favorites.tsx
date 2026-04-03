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
    name: 'Unique-Shaped Pizzas',
    description: 'Fun and creative heart-shaped and square pizzas that delight everyone.',
    price: 350,
    image: 'https://res.cloudinary.com/nikk25/image/upload/v1775225592/our-menu/Heart_Pizza_tujwcz.jpg',
  },
  {
    id: 2,
    label: "0% Maida",
    name: 'Multigrain Pizza',
    description: "A wholesome blend of Wheat, Chickpea, and Flaxseed for a healthy crispy crust.",
    price: 420,
    image: 'https://res.cloudinary.com/nikk25/image/upload/v1775224859/full-menu/pizzas/veg-paradise-pizz_n4xw9r.png',
  },
  {
    id: 3,
    label: 'Specialty',
    name: 'Tandoori Pasta',
    description: 'A fusion twist with bold, smoky tandoori flavors for a spicy kick.',
    price: 280,
    image: 'https://res.cloudinary.com/nikk25/image/upload/v1775225027/full-menu/pasta/tandoori-paneer-pasta_wyam2n.png',
  },
  {
    id: 4,
    label: 'Refreshing',
    name: 'Fresh Mint Mojito',
    description: 'Muddled mint leaves, tangy lime, and soda served chilled.',
    price: 150,
    image: 'https://res.cloudinary.com/nikk25/image/upload/v1775225076/full-menu/shakes/cool-blue-mojito_qrkq6u.png',
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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto w-full px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-navy mb-4">
              Our Favorites
            </h2>
            <div className="w-24 h-1.5 bg-brand-sauce rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-lg">
              Discover the hand-crafted items that made us famous across our Cafe and Kiosk locations.
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="h-12 w-12 rounded-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="h-12 w-12 rounded-full border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-brand-snow rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.label && (
                  <span className="absolute top-4 left-4 bg-brand-navy text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md">
                    {item.label}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif font-medium text-brand-navy text-xl mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
                  {item.description}
                </p>

                {/* Price and Cart
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <span className="text-brand-sauce font-bold text-xl">
                    ₹{item.price}
                  </span>

                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}