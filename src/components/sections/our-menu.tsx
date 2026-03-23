'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: 'pizzas',
    label: 'SIGNATURE PIZZAS',
    items: [
      {
        id: 1,
        name: 'Margherita D.O.P',
        description: 'Classic tomato sauce, fresh mozzarella, and basil baked to perfection.',
        price: 250,
        image: 'https://images.unsplash.com/photo-1579751626658-0e6d9f0c89c5?w=200&h=200&fit=crop',
      },
      {
        id: 2,
        name: 'The Multigrain',
        description: '0% Maida crust, roasted veggies, and premium feta cheese.',
        price: 420,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop',
      },
      {
        id: 3,
        name: 'Trio Cheese Supreme',
        description: 'Smoked mozzarella, cheddar, and parmesan blend for cheese lovers.',
        price: 380,
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=200&h=200&fit=crop',
      },
      {
        id: 4,
        name: 'Spicy Paneer Tikka',
        description: 'Tandoori paneer, jalapeños, red paprika, and mint mayo.',
        price: 350,
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=200&h=200&fit=crop',
      },
    ],
  },
  {
    id: 'pastas',
    label: 'ITALIAN PASTAS',
    items: [
      {
        id: 5,
        name: 'Classic Red Sauce',
        description: 'Tangy, herby tomato-based sauce tossed with penne and fresh basil.',
        price: 220,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop',
      },
      {
        id: 6,
        name: 'Creamy White Sauce',
        description: 'Rich cheesy béchamel sauce with mushrooms and olives.',
        price: 260,
        image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=200&h=200&fit=crop',
      },
      {
        id: 7,
        name: 'Tandoori Fusion',
        description: 'Our signature smoky tandoori flavor for a spicy, bold kick.',
        price: 280,
        image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=200&h=200&fit=crop',
      },
    ],
  },
  {
    id: 'beverages',
    label: 'MOJITOS & SHAKES',
    items: [
      {
        id: 8,
        name: 'Fresh Mint Mojito',
        description: 'Freshly muddled mint leaves, tangy lime, and sparkling soda.',
        price: 150,
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=200&h=200&fit=crop',
      },
      {
        id: 9,
        name: 'Classic Cold Coffee',
        description: 'Thick, creamy blend of premium coffee and milk.',
        price: 180,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=200&fit=crop',
      },
      {
        id: 10,
        name: 'Strawberry Milkshake',
        description: 'Rich strawberry blend topped with whipped cream.',
        price: 160,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291840?w=200&h=200&fit=crop',
      },
    ],
  },
];

export function OurMenu() {
  const [activeTab, setActiveTab] = useState('pizzas');
  const currentCategory = menuCategories.find((cat) => cat.id === activeTab);

  return (
    <section className="py-16 md:py-24 bg-brand-snow border-t border-gray-200">
      <div className="max-w-7xl mx-auto w-full px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-navy mb-4">
            The Full Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From our hearth-fired signature pizzas to seasonal shakes, explore the flavors that define Athens Pizza.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              variant={activeTab === category.id ? 'default' : 'outline'}
              className={`rounded-full px-6 md:px-8 py-6 text-sm md:text-base font-bold tracking-widest transition-all ${
                activeTab === category.id
                  ? 'bg-brand-sauce hover:bg-brand-sauce/90 text-white shadow-md'
                  : 'border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {currentCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
            {currentCategory.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-2xl shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Scaled Up Image */}
                <div className="flex-shrink-0 w-full sm:w-32 h-48 sm:h-32 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="font-serif font-medium text-xl text-brand-navy group-hover:text-brand-sauce transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-brand-sauce font-bold text-xl whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-fit border-brand-navy text-brand-navy rounded-full px-6 hover:bg-brand-navy hover:text-white">
                    Add to Order
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Download Menu Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-full px-10 py-6 text-lg font-medium transition-colors"
          >
            Download Full Menu (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}