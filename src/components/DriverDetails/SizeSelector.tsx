import React from 'react';
import { SizeCategory } from '../../types/driverDetails';

interface SizeSelectorProps {
  category: SizeCategory;
  onCategoryChange: (category: SizeCategory) => void;
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export const SizeSelector: React.FC<SizeSelectorProps> = ({
  category,
  onCategoryChange,
  selectedSize,
  onSizeChange,
}) => {
  const adultStandardSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', '4XL'];
  const adultNumericSizes = ['28', '30', '32', '34', '36', '38', '40', '42', '44'];
  const kidsAgeSizes = ['0-1', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8', '8-9', '9-10', '10-11', '11-12'];
  const kidsStandardSizes = ['XXS', 'XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button
          onClick={() => onCategoryChange('adult')}
          className={`px-4 py-2 rounded-md ${
            category === 'adult' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          Adult
        </button>
        <button
          onClick={() => onCategoryChange('kids')}
          className={`px-4 py-2 rounded-md ${
            category === 'kids' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          Kids
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <select
          value={selectedSize}
          onChange={(e) => onSizeChange(e.target.value)}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select Size</option>
          {category === 'adult' ? (
            <>
              <optgroup label="Standard Sizes">
                {adultStandardSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Numeric Sizes">
                {adultNumericSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </optgroup>
            </>
          ) : (
            <>
              <optgroup label="Age-Based Sizes">
                {kidsAgeSizes.map((size) => (
                  <option key={size} value={size}>
                    {size} years
                  </option>
                ))}
              </optgroup>
              <optgroup label="Standard Sizes">
                {kidsStandardSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </optgroup>
            </>
          )}
        </select>
      </div>
    </div>
  );
};