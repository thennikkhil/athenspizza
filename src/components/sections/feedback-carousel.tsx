'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface Testimonial {
  id: number
  name: string
  title?: string
  quote: string
  rating: number
  image: string
  avatar: string
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

  const getVisibleTestimonials = () => {
    const visibleCount = 3
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className="w-full py-16 md:py-24 bg-brand-snow border-t border-gray-200">
      {/* Rule 3: Consistent Width */}
      <div className="max-w-7xl mx-auto w-full px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-navy mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                {/* Brand Sauce Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 relative">
                {/* Floating Avatar */}
                <Avatar className="h-16 w-16 absolute -top-8 right-6 border-4 border-white shadow-md">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-brand-navy text-white font-bold">
                    {testimonial.name.split(' ').map((n) => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < testimonial.rating
                          ? 'fill-brand-sauce text-brand-sauce' // Replaced generic yellow with brand-sauce
                          : 'text-gray-200'
                      }
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 mb-6 italic leading-relaxed min-h-[80px]">
                  "{testimonial.quote}"
                </p>

                {/* Name */}
                <div>
                  <p className="font-bold text-brand-navy text-lg">
                    {testimonial.name}
                  </p>
                  {testimonial.title && (
                    <p className="text-sm font-medium text-brand-sauce uppercase tracking-widest mt-1">
                      {testimonial.title}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="rounded-full h-12 w-12 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Indicator Bar */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-brand-sauce w-8' // Replaced blue with brand-sauce
                    : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="rounded-full h-12 w-12 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}