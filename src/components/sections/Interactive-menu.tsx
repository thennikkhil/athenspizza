"use client"

import { useState } from "react"
import { VideoCard } from "../ui/video-card"

const menuItems = [
  {
    id: 1,
    title: "UNIQUE SHAPES",
    category: "SIGNATURE PIZZAS",
    year: "ORDER NOW",
    thumbnail: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: 2,
    title: "MULTIGRAIN CRUST",
    category: "0% MAIDA",
    year: "ORDER NOW",
    thumbnail: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    id: 3,
    title: "ITALIAN PASTA",
    category: "RED & WHITE SAUCE",
    year: "ORDER NOW",
    thumbnail: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=800",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    id: 4,
    title: "MOJITOS & SHAKES",
    category: "BEVERAGES",
    year: "ORDER NOW",
    thumbnail: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
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