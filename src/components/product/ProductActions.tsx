"use client";

import { ShoppingCart, Heart, Truck } from "lucide-react";
import { Button } from "@/components";

interface ProductActionsProps {
  onAddToCart: () => void;
  onAddToWishlist: () => void;
  deliveryMessage?: string;
}

export default function ProductActions({
  onAddToCart,
  onAddToWishlist,
  deliveryMessage = "Free delivery on orders over $30.0",
}: ProductActionsProps) {
  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
        <Button 
          onClick={onAddToCart} 
          variant="cart" 
          size="cart"
          className="w-full sm:flex-1"
        >
          <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
          <span>Add to cart</span>
        </Button>
        <Button 
          onClick={onAddToWishlist} 
          variant="wishlist" 
          size="wishlist"
          className="w-full sm:w-auto"
        >
          <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
          <span className="sm:hidden ml-2">Add to wishlist</span>
        </Button>
      </div>

      {/* Delivery Information */}
      <div className="flex items-start sm:items-center space-x-2 text-sm text-gray-600">
        <Truck className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 sm:mt-0 flex-shrink-0" />
        <span className="leading-relaxed">{deliveryMessage}</span>
      </div>
    </div>
  );
}
