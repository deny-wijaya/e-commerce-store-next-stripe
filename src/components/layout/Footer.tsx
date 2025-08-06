"use client";

import { Apple, Facebook, Instagram, Twitter, Youtube, Smartphone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const categories = [
    { name: "Women", href: "#" },
    { name: "Men", href: "#" },
    { name: "Kids", href: "#" },
    { name: "Sports", href: "#" },
    { name: "Brands", href: "#" },
    { name: "New", href: "#" },
    { name: "Sale", href: "#" },
  ];

  const customerService = [
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Returns & Refunds", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Size Guide", href: "#" },
  ];

  // About Us section data
  const aboutUs = [
    { name: "Our Story", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Corporate Responsibility", href: "#" },
    { name: "Investors", href: "#" },
  ];

  // Add About Us section to the footer
  const renderAboutUs = () => (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
        About Us
      </h3>
      <ul className="space-y-2">
        {aboutUs.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.href}
              className="text-sm text-gray-600 hover:text-primary"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-white border-t border-neutral-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Social Media */}
          <div className="space-y-4 lg:col-span-1">
            <h2 className="text-2xl font-bold text-primary">PERFECT CLOUD.</h2>
            <p className="text-sm text-gray-600 max-w-xs">
              Discover the perfect blend of style and comfort with our curated collection of footwear.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    href={category.href}
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2">
              {customerService.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Section */}
          {renderAboutUs()}

          {/* Download App */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Download Our App
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Get exclusive offers and track your orders on the go.
            </p>
            <div className="space-y-2">
              <a 
                href="#" 
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors w-full sm:w-auto"
              >
                <Apple className="h-5 w-5" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors w-full sm:w-auto"
              >
                <Smartphone className="h-5 w-5" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-dark mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Perfect Cloud. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-xs text-gray-600 hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-gray-600 hover:text-primary">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-gray-600 hover:text-primary">
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}