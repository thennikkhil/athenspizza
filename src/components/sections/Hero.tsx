import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    // Changed to bg-brand-navy
    <section className="bg-brand-navy px-6 pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full flex flex-col items-center text-center">

        {/* Top Badge: Kept white so it pops against the blue */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-brand-navy uppercase tracking-widest bg-white px-6 py-2.5 rounded-full shadow-lg border-none">
          <span className="flex items-center gap-1 text-yellow-500">
            <Star className="h-4 w-4 fill-current" /> 5.0
          </span>
          <span className="h-1 w-1 rounded-full bg-brand-sauce" />
          10+ Years Experience
          <span className="h-1 w-1 rounded-full bg-brand-sauce" />
          4+ Cities
        </div>

        {/* Main Headline: Changed text-brand-navy to text-white */}
        <h1 className="max-w-4xl text-5xl font-serif font-medium tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          Authentic Pizzas, <br />
          Built for <span className="inline-flex items-center gap-2 md:gap-4 italic text-brand-sauce">
            <span className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-white shadow-md text-2xl md:text-4xl not-italic">🍕</span>
            Flavour Lovers
          </span>
        </h1>

        {/* Subtext: Changed to white/80 */}
        <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed">
          Delivering authentic, handcrafted pizzas and more, with a commitment to quality and customer satisfaction. <span className="font-semibold text-white">Where passion meets flavor!</span>
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row w-full sm:w-auto">
          <Button 
            size="lg"
            className="w-full sm:w-auto bg-brand-sauce text-white hover:bg-brand-sauce/90 rounded-full px-8 py-6 text-lg font-medium transition-transform hover:scale-105 shadow-xl shadow-black/20"
          >
            <Link href="/menu">
            Explore Menu
            </Link>
          </Button>
          <Button 
            variant="outline"
            size="lg"
            // Changed outline button to be white instead of navy
            className="w-full sm:w-auto border-2 border-white/50 text-white bg-transparent hover:bg-white hover:text-brand-navy rounded-full px-8 py-6 text-lg font-medium transition-colors"
          >
            <Link href="/franchise">
            Franchise Options
            </Link>
          </Button>
        </div>
        
      </div>
    </section>
  );
}