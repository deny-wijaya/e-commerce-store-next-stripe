"use client";

import { useState } from "react";
import {
  Header,
  Navigation,
  ProductDetailContainer,
  Footer,
} from "@/components";

export default function ItemPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("White");
  const [selectedSize, setSelectedSize] = useState("41");

  const productImages = [
    "/reebok-shoe-1.jpg",
    "/reebok-shoe-2.jpg",
    "/reebok-shoe-3.jpg",
    "/reebok-shoe-4.jpg",
    "/reebok-shoe-5.jpg",
  ];

  const colorOptions = [
    { name: "White", image: "/reebok-white.jpg" },
    { name: "Grey", image: "/reebok-grey.jpg" },
    { name: "Black", image: "/reebok-black.jpg" },
  ];

  const sizes = ["40.5", "41", "42", "43", "43.5", "44", "44.5", "45", "46"];

  const handleAddToCart = () => {
    console.log("Adding to cart:", {
      product: "Reebok Zig Kinetica 3",
      color: selectedColor,
      size: selectedSize,
    });
  };

  const handleAddToWishlist = () => {
    console.log("Adding to wishlist:", {
      product: "Reebok Zig Kinetica 3",
    });
  };

  return (
    <div className="min-h-screen bg-neutral flex flex-col">
      <Header cartCount={4} />
      <Navigation />

      <div className="flex-grow">
        <ProductDetailContainer
          images={productImages}
          selectedImage={selectedImage}
          onImageSelect={setSelectedImage}
          brand="Reebok"
          productId="HR1325R00-.-8"
          title="Shoes Reebok Zig Kinetica 3"
          rating={4.5}
          reviewCount={42}
          price="$199.00"
          colors={colorOptions}
          selectedColor={selectedColor}
          onColorSelect={setSelectedColor}
          sizes={sizes}
          selectedSize={selectedSize}
          onSizeSelect={setSelectedSize}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      </div>

      <Footer />
    </div>
  );
}
