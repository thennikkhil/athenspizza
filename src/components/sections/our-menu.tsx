'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const menuCategories = [
  {
    id: 'pizzas',
    label: 'SIGNATURE PIZZAS',
    items: [
      { id: 1, name: 'Athens Special', description: 'Our signature loaded pizza with black olives, jalapeños, paneer, golden corn, and fresh bell peppers.', price: 399, image: 'https://res.cloudinary.com/nikk25/image/upload/v1775224965/full-menu/pizzas/veg-supereme-pizza_s68hwf.png' },
      { id: 2, name: 'Multigrain Veggie Delight', description: '0% Maida healthy crust topped with fresh onions, capsicum, and golden corn.', price: 420, image: 'https://res.cloudinary.com/nikk25/image/upload/v1775225596/our-menu/paneer_eyxb0g.webp' },
      { id: 3, name: 'Multigrain Paneer Paprika', description: 'Healthy 5-grain base with soft paneer cubes, spicy red paprika, and onions.', price: 450, image: 'https://res.cloudinary.com/nikk25/image/upload/v1775224853/full-menu/pizzas/peppy-paneer-pizza_nccwb0.png' },
      { id: 4, name: 'Heart Shape Special', description: 'Our creative signature heart-shaped pizza, perfect for celebrations and special occasions.', price: 350, image: 'https://res.cloudinary.com/nikk25/image/upload/v1775225592/our-menu/Heart_Pizza_tujwcz.jpg' },
    ],
  },
  {
    id: 'pastas',
    label: 'ITALIAN PASTAS',
    items: [
      { id: 5, name: 'Creamy White Sauce', description: 'Indulgent cheesy béchamel sauce with sweet corn and black olives.', price: 249, image: 'https://res.cloudinary.com/nikk25/image/upload/v1775225599/our-menu/pasta-interactive-menu_cfzdpx.png' },
      { id: 6, name: 'Classic Red Sauce', description: 'Tangy and herby tomato-based sauce with fresh bell peppers and basil.', price: 229, image: 'https://res.cloudinary.com/nikk25/image/upload/v1775225016/full-menu/pasta/red-sauce-pasta_rxs99l.png' },
      { id: 7, name: 'Tandoori Fusion', description: 'A bold, smoky Indian-style tandoori sauce for a unique spicy kick.', price: 259, image: 'https://res.cloudinary.com/nikk25/image/upload/v1775225601/our-menu/tandoori-fusion_a1mcuf.jpg' },
      { id: 8, name: 'Mixed Sauce Special', description: 'The perfect harmony of creamy white and tangy red sauces with exotic veggies.', price: 269, image: 'https://res.cloudinary.com/nikk25/image/upload/v1775225028/full-menu/pasta/mixed-sauce-pasta_chvnqd.png' },
    ],
  },
  {
    id: 'beverages',
    label: 'MOJITOS & SHAKES',
    items: [
      { id: 9, name: 'Thick Chocolate Shake', description: 'Rich, premium cocoa blended with creamy vanilla ice cream.', price: 199, image: 'https://res.cloudinary.com/nikk25/image/upload/v1775225065/full-menu/shakes/choclate-sahke_eslyqs.png' },
      { id: 10, name: 'Virgin Mint Mojito', description: 'A refreshing blend of fresh mint, tangy lime, and chilled soda.', price: 149, image: 'https://res.cloudinary.com/nikk25/image/upload/v1775231167/full-menu/shakes/dd6321ce-ca5f-4a42-b641-7c360bc6e462.png' },
      { id: 11, name: 'Strawberry Swirl', description: 'Classic strawberry milkshake topped with whipped cream.', price: 189, image: 'https://res.cloudinary.com/nikk25/image/upload/v1775225598/our-menu/strawberry-swirl-shake_kbigzt.jpg' },
      { id: 12, name: 'Green Apple Mojito', description: 'Crisp and tangy green apple flavor muddled with fresh mint and lime.', price: 159, image: 'https://res.cloudinary.com/nikk25/image/upload/v1775225588/our-menu/green-apple-mojito_bk5vtb.avif' },
    ],
  },
];

export function OurMenu() {
  const [activeTab, setActiveTab] = useState('pizzas');
  const currentCategory = menuCategories.find((cat) => cat.id === activeTab);

  return (
    <section className="py-16 md:py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto w-full px-6">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-4">
            The Full Menu
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            From our hearth-fired signature pizzas to seasonal shakes, explore the flavors that define Athens Pizza.
          </p>
        </div>

        {/* Category Tabs - MOBILE SCROLL FIX ADDED HERE */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 md:gap-4 mb-12 pb-4 md:justify-center w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menuCategories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              variant={activeTab === category.id ? 'default' : 'outline'}
              className={`shrink-0 snap-start whitespace-nowrap rounded-full px-6 md:px-8 py-6 text-sm md:text-base font-bold tracking-widest transition-all ${
                activeTab === category.id
                  ? 'bg-brand-sauce hover:bg-brand-sauce/90 text-white shadow-lg shadow-brand-sauce/20 border-none'
                  : 'border-white/30 text-white hover:bg-white hover:text-brand-navy bg-transparent'
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
                className="flex flex-col sm:flex-row gap-6 p-6 bg-white rounded-2xl shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-full sm:w-32 h-48 sm:h-32 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="font-serif font-medium text-xl text-brand-navy group-hover:text-brand-sauce transition-colors">
                      {item.name}
                    </h3>
                    {/* <span className="text-brand-sauce font-bold text-xl whitespace-nowrap">
                      ₹{item.price}
                    </span> */}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  {/* <Button variant="outline" size="sm" className="w-fit border-brand-navy text-brand-navy rounded-full px-6 hover:bg-brand-navy hover:text-white">
                    Add to Order
                  </Button> */}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Download Menu Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border-2 border-white/50 text-white hover:bg-white hover:text-brand-navy bg-transparent rounded-full px-10 py-6 text-lg font-medium transition-colors"
          >
            <Link href="/menu">
            Explore Full Menu
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}