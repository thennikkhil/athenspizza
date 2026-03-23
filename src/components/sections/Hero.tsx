import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-brand-snow px-6 pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Rule 3: Consistent Width. 
        max-w-7xl mx-auto w-full keeps this perfectly aligned with all other sections 
      */}
      <div className="mx-auto max-w-7xl w-full flex flex-col items-center text-center">

        {/* Top Badge: Experience & Rating */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-brand-navy uppercase tracking-widest bg-white px-6 py-2.5 rounded-full shadow-sm border border-brand-navy/10">
          <span className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" /> 5.0
          </span>
          <span className="h-1 w-1 rounded-full bg-brand-sauce" />
          10+ Years Experience
          <span className="h-1 w-1 rounded-full bg-brand-sauce" />
          4+ Cities
        </div>

        {/* Main Headline */}
        <h1 className="max-w-4xl text-5xl font-serif font-medium tracking-tight text-brand-navy sm:text-6xl md:text-7xl lg:text-8xl">
          Authentic Pizzas, <br />
          Built for <span className="inline-flex items-center gap-2 md:gap-4 italic text-brand-sauce">
            <span className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-white shadow-md text-2xl md:text-4xl not-italic">🍕</span>
            Flavor Lovers.
          </span>
        </h1>

        {/* Subtext from your PDF */}
        <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed">
          Delivering authentic, handcrafted pizzas and more, with a commitment to quality and customer satisfaction. <span className="font-semibold text-brand-navy">Where passion meets flavor!</span>
        </p>

        {/* Buttons (Responsive: Stack on mobile, side-by-side on desktop) */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto">
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-brand-sauce text-white hover:bg-brand-sauce/90 rounded-full px-8 py-6 text-lg font-medium transition-transform hover:scale-105 shadow-lg shadow-brand-sauce/20"
          >
            Explore Menu
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-full px-8 py-6 text-lg font-medium transition-colors"
          >
            Franchise Options
          </Button>
        </div>
        
      </div>
    </section>
  );
}