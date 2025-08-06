"use client";

import { Header, Navigation, Footer } from "@/components";
import { Button } from "@/components/button/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral flex flex-col">
      <Header cartCount={4} />
      <Navigation />

      <main className="flex-grow">
        {/* Hero Section - Giant Text for Shoes and Image */}
        <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-24 md:py-32 lg:py-40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  New Collection 2024
                </span>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight">
                  Step Up Your
                  <br />
                  <span className="text-primary">Style</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed mb-8">
                Discover the perfect blend of comfort and fashion. Elevate your
                everyday look with our premium footwear collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button 
                  variant="hero" 
                  size="hero" 
                  className="text-lg font-semibold"
                >
                  Shop Collection
                </Button>
                <Button 
                  variant="heroOutline" 
                  size="hero" 
                  className="text-lg font-semibold"
                >
                  View Lookbook
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src="/reebok-shoe-1.jpg"
                  alt="Premium Stylish Shoes"
                  className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">Premium Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Enhanced background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid slice"
            >
              <circle cx="20" cy="20" r="15" fill="#3b82f6" />
              <circle cx="80" cy="80" r="25" fill="#6366f1" />
              <rect x="10" y="70" width="15" height="15" fill="#8b5cf6" />
              <polygon points="50,10 60,30 40,30" fill="#a855f7" />
            </svg>
          </div>
        </section>

        {/* Exclusive Product per Category Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full mb-4">
                Shop by Category
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Exclusive Collections
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our carefully curated collections designed for every lifestyle and occasion
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Men's Collection Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src="/reebok-shoe-2.jpg"
                    alt="Men's Collection"
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Men&apos;s Collection
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Explore our latest arrivals designed for the modern man who values style and comfort.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Shop Men
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Women's Collection Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src="/reebok-shoe-3.jpg"
                    alt="Women's Collection"
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Women&apos;s Collection
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover elegant and comfortable footwear crafted for the sophisticated woman.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Shop Women
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Kids Collection Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src="/reebok-shoe-4.jpg"
                    alt="Kids' Collection"
                    className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Kids Collection
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Fun and durable shoes designed to keep up with your little adventurers.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    Shop Kids
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Product Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Trending Now
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Popular Products
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                 Discover what everyone&apos;s talking about - our most loved and bestselling footwear
               </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Product Card 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src="/reebok-shoe-5.jpg"
                    alt="Nike Air Zoom Alphafly Next% 3"
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      Bestseller
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">Nike Air Zoom Alphafly Next% 3</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">Top-tier carbon-plated marathon racer with ZoomX foam and Air Zoom pods.</p>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">$275.00</p>
                    <Button 
                      variant="cart" 
                      size="sm" 
                      className="text-sm font-semibold"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <img
                  src="/reebok-shoe-1.jpg"
                  alt="Adidas Adizero Adios Pro 4"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Adidas Adizero Adios Pro 4</h3>
                  <p className="text-gray-600 text-sm mb-2">Updated Lightstrike Pro foam with carbon‑infused Energy Rods gives explosive propulsion.</p>
                  <p className="text-lg font-bold text-primary">$220.00</p>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <img
                  src="/reebok-shoe-2.jpg"
                  alt="Saucony Endorphin Speed 5"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Saucony Endorphin Speed 5</h3>
                  <p className="text-gray-600 text-sm mb-2">Balanced daily trainer and tempo racer. Nylon plate + PWRRUN PB foam blend.</p>
                  <p className="text-lg font-bold text-primary">$170.00</p>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <img
                  src="/reebok-shoe-3.jpg"
                  alt="Puma Fast-R Nitro Elite 3"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Puma Fast-R Nitro Elite 3</h3>
                  <p className="text-gray-600 text-sm mb-2">Elite carbon racer: featherlight at ~6.6oz, superb efficiency.</p>
                  <p className="text-lg font-bold text-primary">$250.00</p>
                </div>
              </div>

              {/* Product Card 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <img
                  src="/reebok-shoe-4.jpg"
                  alt="Asics Metaspeed Sky (Tokyo or Plus)"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Asics Metaspeed Sky (Tokyo or Plus)</h3>
                  <p className="text-gray-600 text-sm mb-2">Designed for personal bests: FlyteFoam Blast Turbo or FlyteFoam Blast+.</p>
                  <p className="text-lg font-bold text-primary">$260.00</p>
                </div>
              </div>

              {/* Product Card 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <img
                  src="/reebok-shoe-5.jpg"
                  alt="Brooks Hyperion Elite 3"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Brooks Hyperion Elite 3</h3>
                  <p className="text-gray-600 text-sm mb-2">Lightweight super‑trainer with DNA Zero gel and nitrogen-infused midsole foam.</p>
                  <p className="text-lg font-bold text-primary">$200.00</p>
                </div>
              </div>

              {/* Product Card 7 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <img
                  src="/reebok-shoe-1.jpg"
                  alt="New Balance Fresh Foam X 880v15"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">New Balance Fresh Foam X 880v15</h3>
                  <p className="text-gray-600 text-sm mb-2">Neutral daily trainer with enhanced cushioning and stability.</p>
                  <p className="text-lg font-bold text-primary">$140.00</p>
                </div>
              </div>

              {/* Product Card 8 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <img
                  src="/reebok-shoe-2.jpg"
                  alt="Brooks Glycerin 22 (or Max version)"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Brooks Glycerin 22 (or Max version)</h3>
                  <p className="text-gray-600 text-sm mb-2">Ultra‑plush cushioning via DNA Tuned foam; smooth transitions and premium comfort.</p>
                  <p className="text-lg font-bold text-primary">$160.00</p>
                </div>
              </div>

              {/* Product Card 9 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <img
                  src="/reebok-shoe-3.jpg"
                  alt="Hoka Bondi 9 or Clifton 10"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Hoka Bondi 9 or Clifton 10</h3>
                  <p className="text-gray-600 text-sm mb-2">The Bondi 9 is Hoka’s most cushioned everyday trainer; Clifton 10 blends plush comfort.</p>
                  <p className="text-lg font-bold text-primary">$180.00</p>
                </div>
              </div>

              {/* Product Card 10 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                <img
                  src="/reebok-shoe-4.jpg"
                  alt="On Cloudsurfer 2 / Cloud models"
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">On Cloudsurfer 2 / Cloud models</h3>
                  <p className="text-gray-600 text-sm mb-2">On’s Cloudsurfer 2 excels in daily comfort; Cloudvista and Cloudboom Max deliver cushioned, stylish options.</p>
                  <p className="text-lg font-bold text-primary">$190.00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offer Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-white/20 text-white text-sm font-semibold rounded-full mb-6">
                Limited Time Only
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Special Offer!
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Get <span className="font-black text-yellow-300 text-3xl md:text-4xl">20% OFF</span> on all
                new arrivals and enjoy free shipping worldwide
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="secondary" 
                size="xl" 
                className="text-xl font-bold shadow-2xl transform hover:-translate-y-1"
              >
                Claim Your Discount
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg font-semibold"
              >
                View All Deals
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-6">
              *Offer valid until the end of this month. Terms and conditions apply.
            </p>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-12">
              <span className="inline-block px-4 py-2 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full mb-4">
                Stay Connected
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Subscribe to our newsletter for exclusive offers, early access to new collections,
                and the latest fashion trends delivered to your inbox.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:flex-1 px-6 py-4 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-lg"
              />
              <Button
                variant="hero"
                size="hero"
                className="w-full sm:w-auto font-bold text-lg"
                type="submit"
              >
                Subscribe Now
              </Button>
            </form>
            <p className="text-gray-500 text-sm mt-6">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
