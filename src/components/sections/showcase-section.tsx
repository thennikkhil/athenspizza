'use client'

import { ArrowRight, Play } from 'lucide-react'

export default function ShowcaseSection() {
  return (
    <section className="w-full px-6 py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-brand-navy mb-6 leading-tight">
              The Athens Pizza Experience.
            </h2>
          </div>
          <div className="flex items-start">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed border-l-4 border-brand-sauce pl-6">
              From our high-quality 0% Maida ingredients to our friendly service, discover why we've been a local favorite for over a decade.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left Column - Text Cards (From PDF) */}
          <div className="space-y-6">
            {/* Card 1 */}
            <div className="group bg-brand-snow border border-black/5 rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-sauce/30">
              <h3 className="text-xl font-serif font-medium text-brand-navy mb-3">
                Customer-Centric Focus
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                We ensure that every customer enjoys a memorable experience every time they visit.
              </p>
              <div className="flex items-center gap-2 text-brand-sauce font-bold text-sm tracking-widest uppercase group-hover:text-brand-navy transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-brand-snow border border-black/5 rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-sauce/30">
              <h3 className="text-xl font-serif font-medium text-brand-navy mb-3">
                Fun & Inviting Atmosphere
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Our locations are designed to provide a warm environment to relax and make memories.
              </p>
              <div className="flex items-center gap-2 text-brand-sauce font-bold text-sm tracking-widest uppercase group-hover:text-brand-navy transition-colors">
                Visit Us
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-brand-snow border border-black/5 rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand-sauce/30">
              <h3 className="text-xl font-serif font-medium text-brand-navy mb-3">
                10+ Years of Excellence
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Consistent positive reviews and a loyal customer base across multiple cities.
              </p>
              <div className="flex items-center gap-2 text-brand-sauce font-bold text-sm tracking-widest uppercase group-hover:text-brand-navy transition-colors">
                Our History
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Right Column - Image Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Large Image Card */}
            <div className="group relative h-64 md:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md border border-black/5">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent z-10" />
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000"
                alt="Cozy Cafe Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
                <div className="bg-brand-sauce text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase w-fit mb-3 shadow-md">
                  ⭐ Cafe Model
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-white mb-2">
                  Dine-in with passion.
                </h3>
                <button className="absolute bottom-6 md:bottom-8 right-6 md:right-8 bg-white rounded-full p-3 transition-all duration-300 group-hover:bg-brand-sauce group-hover:text-white shadow-lg">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Two Small Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card Bottom Left */}
              <div className="group relative h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer shadow-md border border-black/5">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?q=80&w=800"
                  alt="Pizza Oven"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 md:p-6">
                  <div className="bg-white text-brand-navy px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase w-fit shadow-md">
                    🍕 0% Maida
                  </div>
                  <div className="flex items-end justify-between">
                    <h3 className="text-lg md:text-xl font-serif font-medium text-white max-w-[70%]">
                      Healthy & Handcrafted.
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Bottom Right */}
              <div className="group relative h-48 md:h-56 rounded-2xl overflow-hidden cursor-pointer shadow-md border border-black/5">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1562059390-a761a084768e?q=80&w=800"
                  alt="Kiosk Model"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-5 md:p-6">
                  <div className="bg-white text-brand-navy px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase w-fit shadow-md">
                    🏪 Kiosk Model
                  </div>
                  <div className="flex items-end justify-between">
                    <h3 className="text-lg md:text-xl font-serif font-medium text-white max-w-[70%]">
                      Quick & Convenient.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - The Franchise Pitch */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-0 bg-brand-navy rounded-3xl overflow-hidden shadow-xl">
          {/* Video / Image Section */}
          <div className="group relative h-64 lg:h-auto overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000"
              alt="Franchise Opportunity"
              className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-brand-sauce/90 backdrop-blur-sm rounded-full p-5 md:p-6 transition-transform duration-300 hover:scale-110 shadow-xl">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
              </button>
            </div>
            {/* Tags */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-10 flex flex-wrap gap-2">
              <span className="bg-black/50 backdrop-blur-md text-white border border-white/20 text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                #AthensPizza
              </span>
              <span className="bg-black/50 backdrop-blur-md text-white border border-white/20 text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                #Franchise
              </span>
            </div>
          </div>

          {/* Text Section */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white mb-6 leading-tight">
              Join The Athens Pizza Family.
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              A strong brand, proven success, and full support to help you thrive. Whether you are interested in our <strong className="text-white">200 sq. ft. Kiosk Model</strong> or our <strong className="text-white">600 sq. ft. Cafe Model</strong>, we have an investment plan built for high profit potential.
            </p>
            <button className="group/btn inline-flex items-center justify-center gap-3 bg-brand-sauce hover:bg-white hover:text-brand-sauce text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase text-sm md:text-base transition-all duration-300 w-fit shadow-lg shadow-brand-sauce/20">
              Franchise Details
              <ArrowRight className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}