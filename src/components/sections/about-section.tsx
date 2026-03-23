import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-brand-snow overflow-hidden">
      {/* Rule 3: Consistent Width Container */}
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <span className="text-brand-sauce font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-medium text-brand-navy mb-6 leading-tight">
              Crafting authentic pizzas and memories for over a decade.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Athens Pizza has been serving high-quality, authentic pizza across 4+ cities. Our focus on fresh ingredients, innovative recipes, and a customer-centric approach has earned us a loyal following of flavor lovers.
            </p>

            {/* Bullet Points */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-sauce flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-navy text-lg">High-Quality Ingredients</h4>
                  <p className="text-gray-600 text-sm mt-1">Only the finest, freshest ingredients go into creating our best-tasting dishes.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-sauce flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-navy text-lg">0% Maida Options</h4>
                  <p className="text-gray-600 text-sm mt-1">Wholesome multigrain crusts made with wheat, chickpea, and flaxseed.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-sauce flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-navy text-lg">Warm & Inviting Atmosphere</h4>
                  <p className="text-gray-600 text-sm mt-1">Our locations are designed to provide a welcoming environment to relax and make memories.</p>
                </div>
              </div>
            </div>

            <Button 
              className="w-fit bg-brand-navy text-white hover:bg-brand-navy/90 rounded-full px-8 py-6 text-lg font-medium transition-transform hover:scale-105 shadow-lg"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Right Side: Images & Floating Badge */}
          <div className="order-1 lg:order-2 relative h-[400px] sm:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-2xl border border-black/5 group">
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000" 
              alt="Fresh Pizza Preparation" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay so the floating box pops */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/60 via-transparent to-transparent" />
            
            {/* Floating Stats Card (Replaces the "15+ Years" from the screenshot) */}
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white p-5 md:p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-gray-100 max-w-[260px] transform transition-transform hover:-translate-y-2">
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