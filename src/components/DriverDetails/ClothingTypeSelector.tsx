import React from 'react';
import { GeneralClothingType, PremiumClothingType } from '../../types/driverDetails';

interface ClothingTypeSelectorProps {
  selectedType: GeneralClothingType | PremiumClothingType;
  brand: string;
  onTypeChange: (type: GeneralClothingType | PremiumClothingType) => void;
  onBrandChange: (brand: string) => void;
}

export const ClothingTypeSelector: React.FC<ClothingTypeSelectorProps> = ({
  selectedType,
  brand,
  onTypeChange,
  onBrandChange,
}) => {
  const popularBrands = [
    'FabIndia', 'Biba', 'Van Heusen', 'Allen Solly', 'Peter England',
    'H&M', 'Lifestyle', 'W for Women', 'Pantaloons', 'Raymond',
    "Levi's", 'Adidas', 'Puma', 'Reebok', 'Nike', 'UCB',
    'Louis Philippe', 'Marks & Spencer', 'Jack & Jones'
  ];

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Clothing Type
        </label>
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value as any)}
          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <optgroup label="General Clothes">
            {['Shirts', 'Pants', 'Jackets', 'Sweaters', 'Skirts', 'Shorts', 'T-shirts',
              'Hoodies', 'Jeans', 'Blouses', 'Sweatshirts', 'Undergarments', 'Shoes',
              'Caps', 'Scarves'].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </optgroup>
          <optgroup label="Premium Clothes">
            {['Sarees', 'Towels', 'Curtains', 'Premium Clothes', 'Kurtis', 'Sherwani',
              'Lehenga', 'Suits', 'Dresses'].map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </optgroup>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Brand
        </label>
        <div className="relative">
          <input
            type="text"
            value={brand}
            onChange={(e) => onBrandChange(e.target.value)}
            placeholder="Enter or select brand"
            className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            list="brands"
          />
          <datalist id="brands">
            {popularBrands.map((brand) => (
              <option key={brand} value={brand} />
            ))}
          </datalist>
        </div>
      </div>
    </div>
  );
};