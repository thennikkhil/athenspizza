import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  return (
    // Changed background to brand-navy
    <section className="py-16 md:py-24 bg-brand-navy overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <span className="text-brand-sauce font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Story
            </span>
            {/* Changed headings to white */}
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6 leading-tight">
              Crafting authentic pizzas and memories for over a decade.
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Athens Pizza has been serving high-quality, authentic pizza across 4+ cities. Our focus on fresh ingredients, innovative recipes, and a customer-centric approach has earned us a loyal following of flavor lovers.
            </p>

            {/* Bullet Points */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-sauce flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">High-Quality Ingredients</h4>
                  <p className="text-white/70 text-sm mt-1">Only the finest, freshest ingredients go into creating our best-tasting dishes.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-sauce flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">0% Maida Options</h4>
                  <p className="text-white/70 text-sm mt-1">Wholesome multigrain crusts made with wheat, chickpea, and flaxseed.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-sauce flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">Warm & Inviting Atmosphere</h4>
                  <p className="text-white/70 text-sm mt-1">Our locations are designed to provide a welcoming environment to relax and make memories.</p>
                </div>
              </div>
            </div>

            <Button 
              // Changed button to Pizza Sauce Red to pop on the blue background
              className="w-fit bg-brand-sauce text-white hover:bg-white hover:text-brand-sauce rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105 shadow-xl shadow-black/20"
            >
              <Link href="/franchise">
              Check Out Our Franchise Page
              </Link>
            </Button>
          </div>

          {/* Right Side: Images & Floating Badge */}
          <div className="order-1 lg:order-2 relative h-[400px] sm:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
            <img 
              src="https://res.cloudinary.com/nikk25/image/upload/v1775227453/our-menu/about-home-image.avif" 
              alt="Fresh Pizza Preparation" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/80 via-transparent to-transparent" />
            
            {/* Floating Stats Card (Kept white so it contrasts beautifully) */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white p-5 md:p-6 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[260px] transform transition-transform hover:-translate-y-2">
              <div className="flex items-center justify-center w-14 h-14 bg-brand-sauce/10 text-brand-sauce rounded-full flex-shrink-0">
                <span className="text-2xl">🍕</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-brand-navy">10+ Years</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-0.5">Experience</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}