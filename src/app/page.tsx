import Hero from "../components/sections/Hero"
import { InteractiveMenu } from "../components/sections/Interactive-menu";
import { OurFavorites } from "../components/sections/our-favorites";
import { OurMenu } from "../components/sections/our-menu";
import PortfolioShowcase from "../components/sections/portfolio-showcase"
import AboutSection from "../components/sections/about-section"
import ShowcaseSection from "../components/sections/showcase-section";
import { FeedbackCarousel } from "../components/sections/feedback-carousel";
import AthensPizzaFooter from "../components/sections/Footer";
import Navbar from "../components/sections/Navbar"; 

const customerFeedback = [
  {
    id: 1,
    name: "Rahul Sharma",
    title: "PDM University Student",
    category: "Pizza",
    quote: "Finally a place in Bahadurgarh that gets the crust right! The Multigrain Pizza is a lifesaver for when I want to eat healthy without giving up pizza. The 0% Maida base is actually crispy and delicious.",
    rating: 5,
    image: "https://res.cloudinary.com/nikk25/image/upload/v1775225596/our-menu/paneer_eyxb0g.webp"
  },
  {
    id: 2,
    name: "Anjali Verma",
    title: "Local Food Blogger",
    category: "Shakes",
    quote: "If you haven't tried their Premium Chocolate Shake, you're missing out. It's thick, rich, and way better than the watery shakes you get elsewhere. Perfect refreshment for the Haryanvi summer!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800"
  },
  {
    id: 3,
    name: "Vikram Singh",
    title: "Sector 6 Resident",
    category: "Pasta",
    quote: "The Tandoori Sauce Pasta is the perfect fusion. It has that smoky Indian kick but stays true to the creamy Italian texture. My kids won't go anywhere else for their weekend pasta treat now.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800"
  },
  {
    id: 4,
    name: "Sonia Gupta",
    title: "Regular Customer",
    category: "Snacks",
    quote: "Their Cheese Garlic Bread is elite. Most places just give you dry bread, but here it’s loaded with herbs and real mozzarella. It's my go-to evening snack every time I pass by the shop.",
    rating: 4,
    image: "https://res.cloudinary.com/nikk25/image/upload/v1775225599/our-menu/feeback-garlic-bread_kdobp4.jpg"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-snow">
      <Hero />
      <PortfolioShowcase />
     <InteractiveMenu />
     <OurFavorites />
     <OurMenu />
     <AboutSection />
     <ShowcaseSection />
     <FeedbackCarousel 
     testimonials={customerFeedback} 
        title="5-Star Ratings on Google"
        subtitle="See why our customers keep coming back for more."
        />
      {/* Add other sections like Menu or Testimonials here */}
    </main>
  );
}