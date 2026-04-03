"use client";
import { motion } from "framer-motion";

// Replaced generic items with Athens Pizza specific menu categories
const MENU_SHOWCASE = [
  { 
    id: 1, 
    label: "Signature Pizzas", 
    image: "https://res.cloudinary.com/nikk25/image/upload/v1775224965/full-menu/pizzas/veg-supereme-pizza_s68hwf.png",
    tag: "0% Maida",
  },
  { 
    id: 2, 
    label: "Unique Shapes", 
    image: "https://res.cloudinary.com/nikk25/image/upload/v1775225592/our-menu/Heart_Pizza_tujwcz.jpg",
    tag: "Fan Favorite" 
  },
  { 
    id: 3, 
    label: "Italian Pastas", 
    image: "https://res.cloudinary.com/nikk25/image/upload/v1775225016/full-menu/pasta/red-sauce-pasta_rxs99l.png",
    tag: "Red & White Sauce" 
  },
  { 
    id: 4, 
    label: "Mojitos & Shakes", 
    image: "https://res.cloudinary.com/nikk25/image/upload/v1775225076/full-menu/shakes/cool-blue-mojito_qrkq6u.png",
    tag: "Beverages" 
  },
];

export default function PortfolioShowcase() {
  // We double the array to create the seamless infinite loop effect
  const displayItems = [...MENU_SHOWCASE, ...MENU_SHOWCASE];

  return (
    <section className="relative w-full overflow-hidden bg-brand-snow py-8 md:py-12 border-b border-gray-200">
      <motion.div
        className="flex gap-4 md:gap-6 w-max"
        animate={{
          x: ["0%", "-50%"], // Moves exactly halfway, then seamlessly restarts
        }}
        transition={{
          duration: 25, // Adjust this number to make it scroll faster or slower
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {displayItems.map((item, index) => (
          <div
            key={index}
            className="group relative h-56 w-[280px] md:h-80 md:w-[400px] overflow-hidden rounded-2xl md:rounded-3xl shadow-md border border-black/5"
          >
            {/* The Food Image */}
            <img 
              src={item.image} 
              alt={item.label}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent" />
            
            {/* Text Content */}
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <span className="inline-block px-3 py-1 mb-2 text-[10px] md:text-xs font-bold tracking-widest text-brand-navy bg-brand-snow uppercase rounded-full">
                {item.tag}
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-medium text-white shadow-sm">
                {item.label}
              </h3>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}