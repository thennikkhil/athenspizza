import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function AthensPizzaFooter() {
  return (
    <footer className="bg-brand-navy pt-20 pb-10">
      <div className="max-w-7xl mx-auto w-full px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-serif font-bold text-white mb-6">
              ATHENS <span className="text-brand-sauce">PIZZA</span>
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Delivering authentic, handcrafted pizzas and more, with a commitment to quality and customer satisfaction for over 10 years.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-sauce transition-colors">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-sauce transition-colors">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-brand-sauce transition-colors">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-white/70 hover:text-brand-sauce transition-colors text-sm">Our Full Menu</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-brand-sauce transition-colors text-sm">Franchise Opportunities</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-brand-sauce transition-colors text-sm">About Athens Pizza</Link></li>
              <li><Link href="#" className="text-white/70 hover:text-brand-sauce transition-colors text-sm">Catering & Events</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-sauce flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">Proudly serving across 4+ Cities. Find your nearest Cafe or Kiosk!</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-sauce flex-shrink-0" />
                <span className="text-white/70 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-sauce flex-shrink-0" />
                <span className="text-white/70 text-sm">hello@athenspizza.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Opening Hours */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase mb-6 text-sm">Opening Hours</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span className="text-white font-medium">11:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Sunday</span>
                <span className="text-white font-medium">10:00 AM - 12:00 AM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Athens Pizza. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}