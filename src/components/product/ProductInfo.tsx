"use client";

import { Star } from "lucide-react";

interface ProductInfoProps {
  brand: string;
  productId: string;
  title: string;
  rating: number;
  reviewCount: number;
  price: string;
}

export default function ProductInfo({
  brand,
  productId,
  title,
  rating,
  reviewCount,
  price,
}: ProductInfoProps) {
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Brand and Product Info */}
      <div className="flex items-start justify-between flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-neutral-dark rounded flex items-center justify-center">
            <span className="text-xs font-bold text-primary">
              {brand.charAt(0)}
            </span>
          </div>
          <span className="text-sm text-gray-600">{brand}</span>
        </div>
        <span className="text-xs sm:text-sm text-gray-500">{productId}</span>
      </div>

      {/* Product Title */}
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary leading-tight">
        {title}
      </h1>

      {/* Rating */}
      <div className="flex items-center space-x-2 flex-wrap">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 sm:h-5 sm:w-5 ${
                i < Math.floor(rating)
                  ? "text-yellow-400 fill-current"
                  : i < rating
                  ? "text-yellow-400 fill-current opacity-50"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">{reviewCount} reviews</span>
      </div>

      {/* Price */}
      <div className="text-2xl sm:text-3xl font-bold text-primary">{price}</div>
    </div>
  );
}
