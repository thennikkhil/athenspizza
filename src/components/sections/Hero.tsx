import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-brand-snow px-6 pt-24 pb-12 text-center">
      {/* Top Badge */}
      <div className="mb-6 flex items-center justify-center gap-2 text-sm font-medium text-gray-500">
        <span className="h-1 w-1 rounded-full bg-gray-400" />
        10+ Years Experience [cite: 11]
        <span className="h-1 w-1 rounded-full bg-gray-400" />
        4+ Cities [cite: 9]
      </div>

      {/* Main Headline */}
      <h1 className="mx-auto max-w-4xl text-5xl font-serif font-medium tracking-tight text-brand-navy md:text-7xl">
        Trusted Handcrafted Pizzas, <br />
        Built for <span className="inline-flex items-center gap-2 italic">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-xl">🍕</span>
          Flavor Lovers.
        </span>
      </h1>

      {/* Subtext from your PDF */}
      <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-600">
        Delivering authentic, handcrafted pizzas and more, with a commitment to 
        quality and customer satisfaction. Where passion meets flavor! 
      </p>

      {/* Your Custom Button Component */}
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button 
          variant="default"
          size="lg"
          className="bg-brand-sauce text-white rounded-full px-8 py-6 text-lg"
        >
          Explore Menu
        </Button>
      </div>
    </section>
  );
}