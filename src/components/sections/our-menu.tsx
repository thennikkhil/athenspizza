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
    id: 'combo',
    label: 'SPECIAL COMBO',
    items: [
      {
        id: 1,
        name: 'The Human Holiday',
        description: 'Mix for sausage, caramelized onions, mushrooms, dove flavor burst',
        price: 24.0,
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=100&h=100&fit=crop',
      },
      {
        id: 2,
        name: 'Smoked Provolone Calzone',
        description: 'House-made dough filled with smoked provolone, ricotta, and a touch of magic',
        price: 18.0,
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=100&h=100&fit=crop',
      },
      {
        id: 3,
        name: 'The Hearth Burger',
        description: 'Wagyu beef, truffle mayo, caramelized onions on brioche',
        price: 21.0,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop',
      },
      {
        id: 4,
        name: 'Tuscan Fire Wings',
        description: 'Slow-roasted chicken wings with lemon, rosemary, and garlic',
        price: 14.5,
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=100&h=100&fit=crop',
      },
    ],
  },
  {
    id: 'kids',
    label: 'KIDS MENU',
    items: [
      {
        id: 5,
        name: 'Mini Cheese Pizza',
        description: 'Small pizza perfect for kids with melted cheese',
        price: 8.5,
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=100&h=100&fit=crop',
      },
      {
        id: 6,
        name: 'Chicken Nuggets',
        description: 'Crispy golden chicken nuggets with dipping sauce',
        price: 7.0,
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=100&h=100&fit=crop',
      },
      {
        id: 7,
        name: 'Mac and Cheese',
        description: 'Creamy comfort food for the little ones',
        price: 6.5,
        image: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4f?w=100&h=100&fit=crop',
      },
      {
        id: 8,
        name: 'Pasta Marinara',
        description: 'Mild tomato sauce with tender pasta',
        price: 7.5,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=100&h=100&fit=crop',
      },
    ],
  },
  {
    id: 'burgers',
    label: 'BURGERS',
    items: [
      {
        id: 9,
        name: 'Classic Hamburger',
        description: 'Beef patty with lettuce, tomato, onion, and special sauce',
        price: 11.0,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop',
      },
      {
        id: 10,
        name: 'Double Deluxe',
        description: 'Two beef patties with bacon, cheddar, and caramelized onions',
        price: 14.5,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop',
      },
      {
        id: 11,
        name: 'Mushroom Swiss',
        description: 'Juicy beef with sautéed mushrooms and melted swiss cheese',
        price: 12.5,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop',
      },
      {
        id: 12,
        name: 'Spicy Jalapeño',
        description: 'Hot and flavorful with jalapeños, pepper jack, and chipotle mayo',
        price: 13.0,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop',
      },
    ],
  },
  {
    id: 'chicken',
    label: 'CHICKEN',
    items: [
      {
        id: 13,
        name: 'Grilled Chicken Breast',
        description: 'Herb-marinated grilled chicken breast with seasonal vegetables',
        price: 15.0,
        image: 'https://images.unsplash.com/photo-1598598847043-8da1e693dbe5?w=100&h=100&fit=crop',
      },
      {
        id: 14,
        name: 'Spicy Buffalo Wings',
        description: 'Crispy wings tossed in buffalo sauce with blue cheese dip',
        price: 12.5,
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=100&h=100&fit=crop',
      },
      {
        id: 15,
        name: 'Chicken Parmesan',
        description: 'Breaded chicken with marinara sauce and melted mozzarella',
        price: 16.0,
        image: 'https://images.unsplash.com/photo-1598598847043-8da1e693dbe5?w=100&h=100&fit=crop',
      },
      {
        id: 16,
        name: 'Teriyaki Glazed Chicken',
        description: 'Sticky sweet and savory teriyaki glaze with sesame seeds',
        price: 14.0,
        image: 'https://images.unsplash.com/photo-1598598847043-8da1e693dbe5?w=100&h=100&fit=crop',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'DESSERTS',
    items: [
      {
        id: 17,
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center served with vanilla ice cream',
        price: 8.5,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop',
      },
      {
        id: 18,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with layers of coffee and mascarpone',
        price: 7.5,
        image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=100&h=100&fit=crop',
      },
      {
        id: 19,
        name: 'Cheesecake Supreme',
        description: 'Creamy New York style cheesecake with berry compote',
        price: 8.0,
        image: 'https://images.unsplash.com/photo-1548777088-c2c23b63fcfe?w=100&h=100&fit=crop',
      },
      {
        id: 20,
        name: 'Panna Cotta',
        description: 'Silky Italian cream dessert with fresh berries on top',
        price: 7.0,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291840?w=100&h=100&fit=crop',
      },
    ],
  },
];

export function OurMenu() {
  const [activeTab, setActiveTab] = useState('combo');
  const currentCategory = menuCategories.find((cat) => cat.id === activeTab);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Menu
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm">
            From hearth-fired treats to seasonal surprises, every dish tells a story of
            tradition
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              variant={activeTab === category.id ? 'default' : 'outline'}
              className={`${
                activeTab === category.id
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              } font-semibold text-xs md:text-sm px-4 md:px-6 py-2`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {currentCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {currentCategory.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gray-200">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <span className="text-red-600 font-bold text-lg">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Download Menu Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="bg-gray-700 hover:bg-gray-800 text-white border-0 px-8 py-3 font-semibold"
          >
            Download Full Menu (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}
