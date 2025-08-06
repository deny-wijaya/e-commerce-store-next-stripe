"use client";

interface ProductImageGalleryProps {
  images: string[];
  selectedImage: number;
  onImageSelect: (index: number) => void;
  showMoreIndicator?: boolean;
  moreCount?: number;
}

export default function ProductImageGallery({
  images,
  selectedImage,
  onImageSelect,
  showMoreIndicator = true,
}: ProductImageGalleryProps) {
  const displayImages = images.slice(0, 4);
  const remainingCount = images.length - 4;

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="mb-3 sm:mb-4">
        <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden max-w-full">
          <img
            src={images[selectedImage]}
            alt="Product"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMDAgMjAwTDMwMCAyMDAiIHN0cm9rZT0iI0QxRDVEMyIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0yMDAgMTAwTDIwMCAzMDAiIHN0cm9rZT0iI0QxRDVEMyIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=";
            }}
          />
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
        <div className="flex space-x-2 min-w-max">
          {displayImages.map((image, index) => (
            <button
              key={index}
              onClick={() => onImageSelect(index)}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 flex-shrink-0 ${
                selectedImage === index
                  ? "border-primary"
                  : "border-neutral-dark hover:border-primary"
              }`}
            >
              <img
                src={image}
                alt={`Product view ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMCA0MEg2MCIgc3Ryb2tlPSIjRDFENUQzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHBhdGggZD0iTTQwIDIwVjYwIiBzdHJva2U9IiNEMUQ1RDMiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4K";
                }}
              />
            </button>
          ))}
          {showMoreIndicator && remainingCount > 0 && (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg border-2 border-neutral-dark flex items-center justify-center bg-neutral text-gray-500 text-xs sm:text-sm font-medium flex-shrink-0">
              +{remainingCount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
