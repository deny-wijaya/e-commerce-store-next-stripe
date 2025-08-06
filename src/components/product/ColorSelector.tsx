"use client";

interface ColorOption {
  name: string;
  image: string;
}

interface ColorSelectorProps {
  colors: ColorOption[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

export default function ColorSelector({
  colors,
  selectedColor,
  onColorSelect,
}: ColorSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2 sm:mb-3">
        Color
      </label>
      <div className="flex space-x-2 sm:space-x-3 overflow-x-auto scrollbar-hide pb-2">
        <div className="flex space-x-2 sm:space-x-3 min-w-max">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => onColorSelect(color.name)}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border-2 overflow-hidden flex-shrink-0 ${
                selectedColor === color.name
                  ? "border-primary"
                  : "border-neutral-dark hover:border-primary"
              }`}
            >
              <img
                src={color.image}
                alt={color.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMiAyNEgzNiIgc3Ryb2tlPSIjRDFENUQzIiBzdHJva2Utd2lkdGg9IjEiLz4KPHBhdGggZD0iTTI0IDEyVjM2IiBzdHJva2U9IiNEMUQ1RDMiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4K";
                }}
              />
            </button>
          ))}
        </div>
      </div>
      <span className="text-sm text-gray-600 mt-1 block">{selectedColor}</span>
    </div>
  );
}
