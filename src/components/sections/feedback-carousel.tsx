'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Testimonial {
  id: number
  name: string
  title?: string
  quote: string
  rating: number
  image: string
}

interface FeedbackCarouselProps {
  testimonials: Testimonial[]
  title?: string
  subtitle?: string
}

export function FeedbackCarousel({
  testimonials,
  title = "What Our Happy Customers Are Saying",
  subtitle
}: FeedbackCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  // Get only the active testimonial
  const activeTestimonial = testimonials[currentIndex];

  if (!activeTestimonial) return null;

  return (
    <section className="w-full py-16 md:py-24 bg-brand-navy overflow-hidden">
      <div className="max-w-5xl mx-auto w-full px-6">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-white/70 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Single Testimonial Spotlight Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[400px]">
          
          {/* Left Side: Featured Image */}
          <div className="md:w-2/5 h-64 md:h-auto relative">
            <img
              src={activeTestimonial.image}
              alt={activeTestimonial.name}
              className="w-full h-full object-cover transition-opacity duration-500"
              key={activeTestimonial.image} // Forces re-render animation
            />
            {/* Subtle gradient to blend into the white card on desktop */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent md:to-white/20" />
          </div>

          {/* Right Side: Review Content */}
          <div className="md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
            <Quote className="absolute top-6 left-6 md:top-10 md:left-10 w-16 h-16 text-brand-snow opacity-50 pointer-events-none" />
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={
                      i < activeTestimonial.rating
                        ? 'fill-brand-sauce text-brand-sauce'
                        : 'text-gray-200'
                    }
                  />
                ))}
              </div>

              {/* Quote */}
              <p 
                key={activeTestimonial.quote}
                className="text-gray-700 text-lg md:text-xl italic leading-relaxed mb-8 min-h-[100px] animate-in fade-in slide-in-from-right-4 duration-500"
              >
                "{activeTestimonial.quote}"
              </p>

              {/* Customer Profile */}
              {/* Customer Profile */}
<div className="flex items-center gap-4">
  <div>
    <p className="font-bold text-brand-navy text-lg">
      {activeTestimonial.name}
    </p>
    {activeTestimonial.title && (
      <p className="text-sm font-bold text-brand-sauce uppercase tracking-widest mt-0.5">
        {activeTestimonial.title}
      </p>
    )}
  </div>
</div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="rounded-full h-12 w-12 border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-brand-navy transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Indicator Bar */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-brand-sauce w-8' 
                    : 'bg-white/30 w-3 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="rounded-full h-12 w-12 border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-brand-navy transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

      </div>
    </section>
  )
}