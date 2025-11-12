import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  CreditCard,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "Rooms & Suites", href: "#" },
    { name: "Amenities", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "About Us", href: "#" },
  ];

  const supportLinks = [
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cancellation Policy", href: "#" },
  ];

  const paymentMethods = [
    "Visa",
    "Mastercard",
    "American Express",
    "PayPal",
    "M-pesa",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Hotelia</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience unparalleled luxury and comfort in the heart of the
              city. Your perfect getaway awaits with premium amenities and
              exceptional service.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-lg hover:bg-red-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  123 Hotelia Avenue
                  <br />
                  City, Nairobi
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a
                  href="tel:+11234567890"
                  className="text-gray-300 hover:text-white"
                >
                  +254 (700) 000-0000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a
                  href="mailto:hello@luxurystay.com"
                  className="text-gray-300 hover:text-white"
                >
                  hello@hotelia.com
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Hotelia. All rights reserved.
            </div>

            {/* Payment Methods */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-gray-400 text-sm mr-2">We accept:</span>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-gray-400" />
                <div className="flex flex-wrap gap-1">
                  {paymentMethods.map((method) => (
                    <span
                      key={method}
                      className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Links */}
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;