"use client"

import { useState } from "react"
import { VideoCard } from "../ui/video-card"

const menuItems = [
  {
    id: 1,
    title: "UNIQUE SHAPES",
    category: "SIGNATURE PIZZAS",
    year: "ORDER NOW",
    thumbnail: "https://res.cloudinary.com/nikk25/image/upload/v1775224965/full-menu/pizzas/veg-supereme-pizza_s68hwf.png",
    video: "https://res.cloudinary.com/nikk25/video/upload/v1775059156/pizzacravings_eux8cl.mp4",  },
  {
    id: 2,
    title: "MULTIGRAIN CRUST",
    category: "0% MAIDA",
    year: "ORDER NOW",
    thumbnail: "https://res.cloudinary.com/nikk25/image/upload/v1775224847/full-menu/pizzas/veg-treat_xczhpn.png",
    video: "https://res.cloudinary.com/nikk25/video/upload/v1775059829/pizzaplace_pizzalove_pizza_athenspizzaofficial_jngrl4.mp4",
  },
  {
    id: 3,
    title: "ITALIAN PASTA",
    category: "RED & WHITE SAUCE",
    year: "ORDER NOW",
    thumbnail: "https://res.cloudinary.com/nikk25/image/upload/v1775225018/full-menu/pasta/white-sauce-pasta_zjjszx.png",
    video: "https://res.cloudinary.com/nikk25/video/upload/v1775059828/Get_creamy_white_sauce_pasta_only_199--ATHENS_PIZZAShop_no._81_huda_market_sector_6_bahadur_hnpibg.mp4",
  },
  {
    id: 4,
    title: "MOJITOS & SHAKES",
    category: "BEVERAGES",
    year: "ORDER NOW",
    thumbnail: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=https://res.cloudinary.com/nikk25/image/upload/v1775225076/full-menu/shakes/cool-blue-mojito_qrkq6u.png",
    video: "https://res.cloudinary.com/nikk25/video/upload/v1775059828/Sip_the_chill_with_our_Green_Apple_Watermelon_Cool_Blue_Mojitos_%EF%B8%8F._athenspizza_pizzalov_a2ruwx.mp4",
  },
]

export function InteractiveMenu() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="bg-brand-snow py-16 md:py-24 border-b border-gray-200">
      <div className="mx-auto max-w-7xl w-full px-6">
        
        {/* Improved Heading with Brand Accents */}
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-navy mb-4">
            Experience The Menu
          </h2>
          <div className="w-24 h-1.5 bg-brand-sauce rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl text-lg">
            Hover to explore our signature categories in action.
          </p>
        </div>
        
        {/* Adjusted Height: Stacks to 500px on mobile, wide 450px on desktop */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch h-[500px] md:h-[450px]">
          {menuItems.map((item) => (
            <VideoCard
              key={item.id}
              project={item}
              isHovered={hoveredId === item.id}
              onHoverChange={(hovered) => setHoveredId(hovered ? item.id : null)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}