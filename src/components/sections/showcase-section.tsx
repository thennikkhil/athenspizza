'use client'

import { ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function ShowcaseSection() {
  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover What Moves You Naturally.
            </h1>
          </div>
          <div className="flex items-start">
            <p className="text-gray-600 text-lg leading-relaxed">
              From daily essentials to fitness tools, explore our thoughtfully curated collection of eco-friendly products that care for you and the planet.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Left Column - Text Cards */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="group bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Why We Do What We Do.
              </h3>
              <div className="flex items-center gap-2 text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                Learn More
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Giving Back to the Earth.
              </h3>
              <div className="flex items-center gap-2 text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-gradient-to-br from-stone-100 to-stone-50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Practical Steps for a Greener Life.
              </h3>
              <div className="flex items-center gap-2 text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Right Column - Image Cards */}
          <div className="md:col-span-2 space-y-6">
            {/* Large Image Card */}
            <div className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-green-800/40 z-10 transition-opacity duration-300 group-hover:from-green-900/10 group-hover:to-green-800/30" />
              <Image
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop"
                alt="Eco-friendly bamboo products"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <div className="bg-green-700/80 text-white px-3 py-1 rounded-full text-sm font-medium w-fit mb-3">
                  🌿 Eco-Tools
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-pretty">
                  Crafted for a Greener Life.
                </h3>
                <button className="absolute bottom-6 right-6 bg-white rounded-full p-3 transition-all duration-300 group-hover:bg-green-50 group-hover:scale-110">
                  <ArrowRight className="w-5 h-5 text-gray-900" />
                </button>
              </div>
            </div>

            {/* Two Small Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card Top Right */}
              <div className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-amber-800/40 z-10 transition-opacity duration-300 group-hover:from-amber-900/10 group-hover:to-amber-800/30" />
                <Image
                  src="https://images.unsplash.com/photo-1556819861-72fa32294e94?w=400&h=300&fit=crop"
                  alt="Natural eco chemistry products"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-4">
                  <div className="bg-amber-700/80 text-white px-3 py-1 rounded-full text-sm font-medium w-fit">
                    🧪 Eco-Chemistry
                  </div>
                  <div className="flex items-end justify-between">
                    <h3 className="text-lg font-bold text-white">
                      Science Meets Sustainability.
                    </h3>
                    <button className="bg-white rounded-full p-2 transition-all duration-300 group-hover:bg-amber-50 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 text-gray-900" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Bottom Right */}
              <div className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-green-800/40 z-10 transition-opacity duration-300 group-hover:from-green-900/10 group-hover:to-green-800/30" />
                <Image
                  src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop"
                  alt="Pure sustainable products"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-4">
                  <div className="bg-green-700/80 text-white px-3 py-1 rounded-full text-sm font-medium w-fit">
                    🌱 Eco-Products
                  </div>
                  <div className="flex items-end justify-between">
                    <h3 className="text-lg font-bold text-white">
                      Pure, Gentle, Sustainable.
                    </h3>
                    <button className="bg-white rounded-full p-2 transition-all duration-300 group-hover:bg-green-50 group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 text-gray-900" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-3xl overflow-hidden">
          {/* Video Section */}
          <div className="group relative h-64 md:h-96 overflow-hidden cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=600&fit=crop"
              alt="Sustainable home showcase"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <button className="bg-white rounded-full p-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-50">
                <Play className="w-8 h-8 text-gray-900 fill-gray-900" />
              </button>
            </div>
            {/* Tags */}
            <div className="absolute bottom-4 left-4 z-10 flex flex-wrap gap-2">
              <span className="bg-emerald-600/90 text-white text-xs px-3 py-1 rounded-full">
                #EcoHome
              </span>
              <span className="bg-emerald-600/90 text-white text-xs px-3 py-1 rounded-full">
                #SustainLiving
              </span>
              <span className="bg-emerald-600/90 text-white text-xs px-3 py-1 rounded-full">
                #NaturalSpace
              </span>
            </div>
          </div>

          {/* Text Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-balance">
              Make Everyday Sustainable, Beautiful, and Simple
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Ready to live better for the planet? Explore our curated collection of eco-friendly tools, natural solutions, and sustainable essentials. Make small changes today that create a lasting impact tomorrow.
            </p>
            <button className="group/btn inline-flex items-center gap-3 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 w-fit">
              Browse Eco Favorites
              <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}