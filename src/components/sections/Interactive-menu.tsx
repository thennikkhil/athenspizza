"use client"

import { useState } from "react"
import { VideoCard } from "../ui/video-card"

// Reduced to exactly 4 items for Aethnes Pizza
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
    <section className="bg-brand-snow py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="mb-12 text-4xl font-serif font-medium text-brand-navy md:text-5xl text-center">
          Experience The Menu
        </h2>
        
        {/* The expanding flex container */}
        <div className="flex gap-4 items-stretch h-[600px]">
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