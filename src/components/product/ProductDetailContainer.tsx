"use client";

import ProductImageGallery from "./ProductImageGallery";
import ProductInfo from "./ProductInfo";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import ProductActions from "./ProductActions";
import Breadcrumbs from "../ui/Breadcrumbs";

interface ColorOption {
  name: string;
  image: string;
}

interface ProductDetailContainerProps {
  images: string[];
  selectedImage: number;
  onImageSelect: (index: number) => void;
  brand: string;
  productId: string;
  title: string;
  rating: number;
  reviewCount: number;
  price: string;
  colors: ColorOption[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
  sizes: string[];
  selectedSize: string;
  onSizeSelect: (size: string) => void;
  onAddToCart: () => void;
  onAddToWishlist: () => void;
}

export default function ProductDetailContainer({
  images,
  selectedImage,
  onImageSelect,
  brand,
  productId,
  title,
  rating,
  reviewCount,
  price,
  colors,
  selectedColor,
  onColorSelect,
  sizes,
  selectedSize,
  onSizeSelect,
  onAddToCart,
  onAddToWishlist,
}: ProductDetailContainerProps) {
  const breadcrumbItems = [
    { label: "Clothes and shoes", href: "#" },
    { label: "Shoes", href: "#" },
    { label: "Reebok" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      {/* Breadcrumbs - Mobile at top */}
      <div className="mb-4 sm:mb-6">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* Left Column - Product Images */}
        <div className="order-1">
          <ProductImageGallery
            images={images}
            selectedImage={selectedImage}
            onImageSelect={onImageSelect}
          />
        </div>

        {/* Right Column - Product Details */}
        <div className="order-2 space-y-4 sm:space-y-6">
          <ProductInfo
            brand={brand}
            productId={productId}
            title={title}
            rating={rating}
            reviewCount={reviewCount}
            price={price}
          />

          <ColorSelector
            colors={colors}
            selectedColor={selectedColor}
            onColorSelect={onColorSelect}
          />

          <SizeSelector
            sizes={sizes}
            selectedSize={selectedSize}
            onSizeSelect={onSizeSelect}
          />

          <ProductActions
            onAddToCart={onAddToCart}
            onAddToWishlist={onAddToWishlist}
          />
        </div>
      </div>
    </div>
  );
}
