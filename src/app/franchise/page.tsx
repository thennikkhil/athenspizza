'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle, CheckCircle2, TrendingUp, Users, Award } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";

export default function FranchisePage() {
  const whatsappNumber = '919876543210'; // Replace with actual WhatsApp number
  const whatsappMessage = 'Hi! I am interested in the Athens Pizza Franchise opportunity.';
  const callLink = `tel:+919896584492`;

 return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a8a] to-[#1e40af] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="inline-block bg-[#ef4444] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FRANCHISE OPPORTUNITY
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 brand-title">
              Join The Athens Pizza Family
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Build a thriving pizza business with 10+ years of proven success, authentic recipes, and complete support.
            </p>
            <a href={callLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-8 py-6 text-lg rounded-lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us 
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4 text-center brand-title">About Athens Pizza</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
            With over 10+ years of business experience and 4+ branches across multiple cities, Athens Pizza has established itself as a trusted brand delivering authentic, handcrafted pizzas with a commitment to quality and customer satisfaction.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#1e3a8a] brand-title">Experience</h3>
                <Award className="w-8 h-8 text-[#ef4444]" />
              </div>
              <p className="text-gray-600">10+ years of proven business experience with multiple successful branches</p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#1e3a8a]">Quality</h3>
                <CheckCircle2 className="w-8 h-8 text-[#ef4444]" />
              </div>
              <p className="text-gray-600">Authentic recipes with only the finest ingredients ensuring consistent quality</p>
            </Card>

            <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#1e3a8a]">Loyalty</h3>
                <Users className="w-8 h-8 text-[#ef4444]" />
              </div>
              <p className="text-gray-600">Strong customer loyalty and consistent positive reviews across all locations</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center">Why Choose Athens Pizza?</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-[#ef4444] text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Unique Menu</h3>
                  <p className="text-gray-600">Exciting variety of pizzas, pastas, snacks and beverages catering to all tastes including unique-shaped pizzas, multigrain options, and specialty mojitos & shakes</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-[#ef4444] text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">High-Quality Ingredients</h3>
                  <p className="text-gray-600">Only the finest ingredients are used to create the best-tasting dishes with authentic recipes</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-[#ef4444] text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Proven Success</h3>
                  <p className="text-gray-600">10+ years of experience with multiple branches across multiple cities</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-[#ef4444] text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Strong Customer Base</h3>
                  <p className="text-gray-600">Consistent positive reviews and loyal customer base in all locations</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-[#ef4444] text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Comprehensive Support</h3>
                  <p className="text-gray-600">Full training, marketing support, and ongoing assistance to ensure your success</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-[#ef4444] text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Scalable Model</h3>
                  <p className="text-gray-600">Flexibility to grow with multiple locations in any city</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Models Showcase Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-4 text-center">Our Franchise Models</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-lg">
            Choose the model that best fits your business goals and available space
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-80 bg-gradient-to-br from-[#1e3a8a] to-[#1e40af]">
                <img
                  src="https://res.cloudinary.com/nikk25/image/upload/v1775225596/our-menu/paneer_eyxb0g.webp"
                  alt="Athens Pizza Kiosk Model"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Kiosk Model</h3>
                  <p className="text-blue-100 text-sm mb-4">Perfect for high-traffic locations</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-blue-200">Investment</p>
                      <p className="text-2xl font-bold text-[#ef4444]">₹20L</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-blue-200">Area Required</p>
                      <p className="text-lg font-bold">200 sq. ft.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-80 bg-gradient-to-br from-[#ef4444] to-[#dc2626]">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop"
                  alt="Athens Pizza Café Model"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Café Model</h3>
                  <p className="text-red-100 text-sm mb-4">Full dining experience with higher revenue</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-red-200">Investment</p>
                      <p className="text-2xl font-bold text-white">₹30L</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-red-200">Area Required</p>
                      <p className="text-lg font-bold">600 sq. ft.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 px-4 bg-[#1e3a8a] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Investment Overview</h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white text-gray-900 p-8">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Setup Investment</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 font-semibold">Kiosk Model</p>
                  <p className="text-3xl font-bold text-[#ef4444]">₹20L</p>
                  <p className="text-sm text-gray-500">Required Area: 200 sq. ft.</p>
                </div>
                <hr />
                <div>
                  <p className="text-gray-600 font-semibold">Café Model</p>
                  <p className="text-3xl font-bold text-[#ef4444]">₹30L</p>
                  <p className="text-sm text-gray-500">Required Area: 600 sq. ft.</p>
                </div>
              </div>
            </Card>

            <Card className="bg-white text-gray-900 p-8">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-6">Financial Terms</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 font-semibold">Franchise Fee</p>
                  <p className="text-3xl font-bold text-[#ef4444]">₹4L</p>
                </div>
                <hr />
                <div>
                  <p className="text-gray-600 font-semibold">Royalties</p>
                  <p className="text-lg font-bold">Royalty Free for 6 months</p>
                  <p className="text-3xl font-bold text-[#ef4444]">4% After 6 months</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Profit Potential</h3>
            <p className="text-4xl font-bold">₹12L - ₹36L per annum</p>
          </Card>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-12 text-center">Why Franchise With Athens Pizza?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-[#1e3a8a] hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="w-8 h-8 text-[#ef4444] flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#1e3a8a]">Proven Business Model</h3>
              </div>
              <p className="text-gray-600">A ready-to-replicate business model that ensures success in any new location with consistent operational standards</p>
            </Card>

            <Card className="p-8 border-2 border-[#1e3a8a] hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-8 h-8 text-[#ef4444] flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#1e3a8a]">Growing Market</h3>
              </div>
              <p className="text-gray-600">The pizza market continues to thrive with our unique offerings providing a competitive edge in the industry</p>
            </Card>

            <Card className="p-8 border-2 border-[#1e3a8a] hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#ef4444] flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#1e3a8a]">Turnkey Operations</h3>
              </div>
              <p className="text-gray-600">Complete setup and support to get your store operational with proven systems and processes</p>
            </Card>

            <Card className="p-8 border-2 border-[#1e3a8a] hover:shadow-xl transition">
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-8 h-8 text-[#ef4444] flex-shrink-0" />
                <h3 className="text-xl font-bold text-[#1e3a8a]">Full Support</h3>
              </div>
              <p className="text-gray-600">Complete training, marketing support, and ongoing assistance to ensure your continued success</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join The Athens Pizza Family?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Be part of a growing brand with a passion for quality, authentic pizzas, and customer satisfaction. Get in touch with us today!
          </p>
          <a href={callLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-10 py-6 text-lg rounded-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Us Now
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
