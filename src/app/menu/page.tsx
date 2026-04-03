'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { menuItems, categories } from '@/lib/menu-data';

// Badge color mapping
const badgeColors: Record<string, string> = {
  'Veg Double': 'bg-green-100 text-green-700',
  'Classic':    'bg-blue-100 text-blue-700',
  'Deluxe':     'bg-purple-100 text-purple-700',
  'Supreme':    'bg-orange-100 text-orange-700',
  'Diamond':    'bg-indigo-100 text-indigo-700',
  'Bestseller': 'bg-yellow-100 text-yellow-700',
  'Popular':    'bg-pink-100 text-pink-700',
  'Fusion':     'bg-teal-100 text-teal-700',
  'Add-on':     'bg-gray-100 text-gray-600',
  'Premium':    'bg-amber-100 text-amber-700',
  'Favorite':   'bg-rose-100 text-rose-700',
  'Cheesy':     'bg-yellow-100 text-yellow-700',
  'Sweet':      'bg-pink-100 text-pink-700',
  'Fresh':      'bg-green-100 text-green-700',
  'Special':    'bg-violet-100 text-violet-700',
  'Indulgent':  'bg-orange-100 text-orange-700',
  'Desi':       'bg-amber-100 text-amber-700',
  'Refreshing': 'bg-cyan-100 text-cyan-700',
  'Seasonal':   'bg-lime-100 text-lime-700',
  'Tangy':      'bg-yellow-100 text-yellow-700',
};

const getBadgeClass = (badge: string) =>
  badgeColors[badge] ?? 'bg-gray-100 text-gray-600';

// Format price
const formatPrice = (price: Record<string, number>) => {
  const entries = Object.entries(price);
  if (entries.length === 1) return `₹${entries[0][1]}`;
  return entries.map(([, v]) => `₹${v}`).join(' / ');
};

// Subcategory grouping for pizzas
const groupBySubCategory = (items: typeof menuItems) => {
  const groups: Record<string, typeof menuItems> = {};
  items.forEach(item => {
    const key = item.subCategory ?? 'Other';
    if (!groups[key]) groups[key] = [];
    groups[key].push(item);
  });
  return groups;
};

const SUBCATEGORY_ORDER = ['Veg Double', 'Classic', 'Deluxe', 'Supreme', 'Diamond', 'Garlic Bread', 'Burger', 'Milk Shake', 'Coffee', 'Mojito', 'Other'];

// Star rating component — static display at 4.5
const StarRating = () => (
  <div className="flex items-center gap-0.5">
    {[1,2,3,4,5].map(i => (
      <Star
        key={i}
        size={13}
        className={i <= 4 ? 'fill-[#ca8a04] text-[#ca8a04]' : 'fill-gray-200 text-gray-200'}
      />
    ))}
  </div>
);

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('pizza');

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);
  const hasSubs = filteredItems.some(item => item.subCategory);
  const grouped = hasSubs ? groupBySubCategory(filteredItems) : null;

  return (
    <main className="min-h-screen bg-[#f8fafc] font-sans">
      
      {/* ── QUOTE (NOW THE STARTING SECTION) ────────────────── */}
      <section className="py-14 px-4 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <div className="h-1 w-10 bg-[#dc2626] rounded-full" />
          </div>
          <p className="text-3xl md:text-4xl brand-title text-[#1e3a8a] leading-snug tracking-wide">
            "Discover a World of Flavor through Our Handcrafted Fusion and Unique Collections"
          </p>
          <div className="flex justify-center mt-5">
            <div className="h-1 w-10 bg-[#dc2626] rounded-full" />
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER + MENU ───────────────────────── */}
      <section className="py-14 px-4 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl brand-title text-[#1e3a8a] tracking-wide">
            Menus Of The Day
          </h2>
          <div className="flex justify-center mt-3">
            <div className="h-1 w-14 bg-[#dc2626] rounded-full" />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#dc2626] text-white shadow-lg shadow-red-200'
                  : 'bg-white text-[#1e3a8a] border-2 border-[#1e3a8a]/20 hover:border-[#1e3a8a] hover:shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── GROUPED (subcategories) ── */}
        {grouped ? (
          <div className="space-y-12">
            {SUBCATEGORY_ORDER.filter(sub => grouped[sub]).map(sub => (
              <div key={sub}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-gray-200" />
                  <h3 className="text-2xl brand-title text-[#1e3a8a] tracking-wide px-2">
                    {sub}
                  </h3>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {grouped[sub].map(item => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredItems.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-[#1e3a8a] relative overflow-hidden">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#dc2626]/5 rounded-full" />

        <div className="relative max-w-3xl mx-auto text-center">
          <p className="text-[#dc2626] text-sm font-bold uppercase tracking-widest mb-3">
            Let's Eat
          </p>
          <h2 className="text-6xl md:text-7xl brand-title text-white mb-5 tracking-wide leading-none">
            Ready to Order?
          </h2>
          <p className="text-blue-200 mb-10 text-base max-w-xl mx-auto leading-relaxed">
            Get in touch with us today and experience the authentic taste of Athens Pizza.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#dc2626] text-white font-bold rounded-full hover:bg-red-700 transition-all text-base shadow-2xl shadow-red-900/30 hover:-translate-y-1"
          >
            Order on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

// ── MENU CARD COMPONENT ───────────────────────────────────
const MenuCard = ({ item }: { item: typeof menuItems[0] }) => {
  const getBadgeClass = (badge: string) => {
    const map: Record<string, string> = {
      'Veg Double': 'bg-green-100 text-green-700',
      'Classic':    'bg-blue-100 text-blue-700',
      'Deluxe':     'bg-purple-100 text-purple-700',
      'Supreme':    'bg-orange-100 text-orange-700',
      'Diamond':    'bg-indigo-100 text-indigo-700',
      'Bestseller': 'bg-yellow-100 text-yellow-800',
      'Popular':    'bg-pink-100 text-pink-700',
      'Fusion':     'bg-teal-100 text-teal-700',
      'Add-on':     'bg-gray-100 text-gray-600',
      'Premium':    'bg-amber-100 text-amber-700',
      'Favorite':   'bg-rose-100 text-rose-700',
      'Cheesy':     'bg-yellow-100 text-yellow-700',
      'Sweet':      'bg-pink-100 text-pink-700',
      'Fresh':      'bg-green-100 text-green-700',
      'Special':    'bg-violet-100 text-violet-700',
      'Indulgent':  'bg-orange-100 text-orange-700',
      'Desi':       'bg-amber-100 text-amber-700',
      'Refreshing': 'bg-cyan-100 text-cyan-700',
      'Seasonal':   'bg-lime-100 text-lime-700',
      'Tangy':      'bg-yellow-100 text-yellow-700',
    };
    return map[badge] ?? 'bg-gray-100 text-gray-600';
  };

  const formatPrice = (price: Record<string, number | undefined>) => {
    const entries = Object.entries(price).filter(([, v]) => v !== undefined) as [string, number][];
    if (entries.length === 1) return `₹${entries[0][1]}`;
    const labels: Record<string, string> = { regular: 'Reg', medium: 'Med', twoMedium: '2 Med' };
    return entries.map(([k, v]) => `${labels[k] ?? k} ₹${v}`).join('  ·  ');
  };

  return (
    <div className="flex gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
      {/* Image */}
      <div className="flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 min-w-0 py-0.5">
        <div>
          {/* Badge + Name */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="text-xl brand-title text-[#1e3a8a] leading-tight">
              {item.name}
            </h3>
            {item.badge && (
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0 ${getBadgeClass(item.badge)}`}>
                {item.badge}
              </span>
            )}
          </div>

          {/* Stars */}
          <div className="flex items-center gap-1.5 mb-1.5">
            {[1,2,3,4,5].map(i => (
              <Star
                key={i}
                size={12}
                className={i <= 4 ? 'fill-[#ca8a04] text-[#ca8a04]' : 'fill-gray-200 text-gray-200'}
              />
            ))}
            <span className="text-xs text-gray-400">4.0</span>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Price */}
        <p className="text-sm font-bold text-[#dc2626] mt-2">
          {formatPrice(item.price)}
        </p>
      </div>
    </div>
  );
};

export default MenuPage;