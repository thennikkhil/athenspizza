'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export default function AthensPizzaFooter() {
  return (
    <footer className="bg-amber-900 text-amber-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-2">AthensPizza</h2>
            <p className="text-amber-200 text-sm leading-relaxed mb-4">
              Authentic Mediterranean pizza crafted with traditional recipes and the finest ingredients.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-800 hover:bg-amber-700 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <span className="text-lg">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-800 hover:bg-amber-700 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <span className="text-lg">📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-amber-800 hover:bg-amber-700 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <span className="text-lg">𝕏</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-amber-200 hover:text-amber-50 transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-200 hover:text-amber-50 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-200 hover:text-amber-50 transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-amber-200 hover:text-amber-50 transition-colors">
                  Catering
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Hours
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium">Mon - Thu:</span>
                <p className="text-amber-200">11:00 AM - 10:00 PM</p>
              </li>
              <li>
                <span className="font-medium">Fri - Sat:</span>
                <p className="text-amber-200">11:00 AM - 11:00 PM</p>
              </li>
              <li>
                <span className="font-medium">Sunday:</span>
                <p className="text-amber-200">12:00 PM - 9:00 PM</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-amber-200 text-sm">
                  123 Plaka Street
                  <br />
                  Athens, Greece 10555
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+302103234567" className="text-amber-200 hover:text-amber-50 transition-colors">
                  +30 210 323 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:info@athensizza.gr" className="text-amber-200 hover:text-amber-50 transition-colors">
                  info@athensizza.gr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-800 pt-8 mt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-amber-200 text-sm">
              &copy; 2024 AthensPizza. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-amber-200 hover:text-amber-50 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-amber-200 hover:text-amber-50 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-amber-200 hover:text-amber-50 transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
