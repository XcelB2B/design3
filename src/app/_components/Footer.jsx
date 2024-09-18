import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Desire Div</h3>
            <p className="text-sm">
              Crafting digital experiences that elevate your brand in the Indian
              market and beyond.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  E-commerce Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  SEO Optimization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <div className="flex items-center space-x-3">
              <Mail size={18} />
              <span>info@webcraftsolutions.in</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={18} />
              <span>+91 81782 46936</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin size={18} />
              <span>123 Tech Park, Mumbai, India 400001</span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; 2023 Desire Div. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
