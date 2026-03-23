'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From a small family recipe to Athens' most beloved pizzeria
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              How It All Started
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In 1995, with nothing but a passion for authentic Italian cuisine and a cherished family recipe passed down through generations, our founder opened the doors to Athens Pizza. What began as a humble pizzeria with just three tables has grown into a cornerstone of the Athens community.
              </p>
              <p>
                Every pizza that leaves our kitchen carries the same dedication to quality and tradition that inspired our journey. We source the finest imported flour from Italy, use only fresh toppings delivered daily, and slow-ferment our dough for 48 hours to achieve that perfect crust.
              </p>
              <p>
                Today, we're proud to serve thousands of families who have made us part of their traditions—whether it's a birthday celebration, a casual dinner, or just a late-night craving for authentic pizza.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-orange-400 rounded-lg blur-xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&h=500&fit=crop"
                alt="Pizza being prepared"
                className="relative w-full h-auto rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3
            className={`text-3xl font-bold text-center text-gray-900 mb-12 transform transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            What We Stand For
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authentic Quality',
                description:
                  'We never compromise on ingredients. Every component of our pizzas is selected for taste, freshness, and authenticity.',
                icon: '🍅',
                delay: 400,
              },
              {
                title: 'Family Values',
                description:
                  'We treat every customer like family. Your satisfaction and experience are at the heart of everything we do.',
                icon: '❤️',
                delay: 500,
              },
              {
                title: 'Tradition & Innovation',
                description:
                  'While we honor our classic recipes, we constantly innovate to bring exciting new flavors to our menu.',
                icon: '✨',
                delay: 600,
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${value.delay}ms` }}
              >
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500 h-full">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center transform transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-lg text-gray-700 mb-8">
            Ready to experience the Athens Pizza difference?
          </p>
          <button className="bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Reserve Your Table
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
