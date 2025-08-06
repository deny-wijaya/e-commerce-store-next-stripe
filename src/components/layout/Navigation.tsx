"use client";

interface NavigationProps {
  categories?: string[];
  activeCategory?: string;
}

export default function Navigation({
  categories = ["Women", "Men", "Kids", "Sports", "Brands", "New", "Sale"],
  activeCategory,
}: NavigationProps) {
  return (
    <nav className="bg-white border-b border-neutral-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {categories.map((item) => (
            <a
              key={item}
              href="#"
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                item === "Sale"
                  ? "border-red-500 text-red-600"
                  : item === activeCategory
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-primary hover:border-neutral-dark"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Navigation - Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide">
          <div className="flex space-x-4 min-w-max">
            {categories.map((item) => (
              <a
                key={item}
                href="#"
                className={`py-3 px-2 border-b-2 font-medium text-sm whitespace-nowrap ${
                  item === "Sale"
                    ? "border-red-500 text-red-600"
                    : item === activeCategory
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-primary hover:border-neutral-dark"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
