import Hero from "../components/sections/Hero"
import { InteractiveMenu } from "../components/sections/Interactive-menu";
import { OurFavorites } from "../components/sections/our-favorites";
import { OurMenu } from "../components/sections/our-menu";
import PortfolioShowcase from "../components/sections/portfolio-showcase"
import AboutSection from "../components/sections/about-section"
import ShowcaseSection from "../components/sections/showcase-section";
import { FeedbackCarousel } from "../components/sections/feedback-carousel";
import AthensPizzaFooter from "../components/sections/Footer";

const customerFeedback = [
  {
    id: 1,
    name: "Rahul Sharma",
    title: "Food Blogger",
    quote: "The Multigrain Pizza here is a game changer! 0% Maida but 100% crispy and delicious. Best pizza in town hands down.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    name: "Priya Singh",
    title: "Regular Customer",
    quote: "We ordered the heart-shaped pizza for our anniversary and it was perfect. The Tandoori Pasta is also highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    name: "Amit Patel",
    title: "Local Guide",
    quote: "Great ambiance and amazing food. You can really taste the 10+ years of experience in every bite of their signature pizzas.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=800",
    avatar: "https://i.pravatar.cc/150?u=3"
  },
  {
    id: 4,
    name: "Neha Gupta",
    title: "Pizza Enthusiast",
    quote: "Absolutely love the crust! The ingredients feel so fresh and the service is incredibly fast and friendly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800",
    avatar: "https://i.pravatar.cc/150?u=4"
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
        <AthensPizzaFooter />
      {/* Add other sections like Menu or Testimonials here */}
    </main>
  );
}