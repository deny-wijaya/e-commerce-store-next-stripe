"use client";

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSizeSelect: (size: string) => void;
  sizeSystem?: string;
  showSizeGuide?: boolean;
}

export default function SizeSelector({
  sizes,
  selectedSize,
  onSizeSelect,
  sizeSystem = "EU Men",
  showSizeGuide = true,
}: SizeSelectorProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 sm:mb-3 flex-wrap gap-1">
        <label className="block text-sm font-medium text-gray-700">Size</label>
        <span className="text-xs sm:text-sm text-gray-500">{sizeSystem}</span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect(size)}
            className={`py-2 px-2 sm:px-3 text-sm font-medium rounded-md border transition-colors ${
              selectedSize === size
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-neutral-dark hover:border-primary hover:bg-gray-50"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      {showSizeGuide && (
        <a
          href="#"
          className="text-sm text-blue-600 hover:text-blue-500 mt-2 inline-block underline"
        >
          Size guide
        </a>
      )}
    </div>
  );
}
