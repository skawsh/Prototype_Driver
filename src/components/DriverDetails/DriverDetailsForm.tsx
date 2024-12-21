import React, { useState } from 'react';
import { SizeSelector } from './SizeSelector';
import { ColorSelector } from './ColorSelector';
import { ClothingTypeSelector } from './ClothingTypeSelector';
import { PatternFabricSelector } from './PatternFabricSelector';
import { DriverEnteredDetails, SizeCategory } from '../../types/driverDetails';
import { X } from 'lucide-react';

interface DriverDetailsFormProps {
  onSubmit: (details: DriverEnteredDetails) => void;
  onClose: () => void;
  initialDetails?: DriverEnteredDetails;
}

export const DriverDetailsForm: React.FC<DriverDetailsFormProps> = ({ 
  onSubmit, 
  onClose,
  initialDetails 
}) => {
  const [details, setDetails] = useState<DriverEnteredDetails>(initialDetails || {
    sizeCategory: 'adult',
    size: '',
    colors: [],
    clothingType: 'Shirts',
    brand: '',
    pattern: 'Solid',
    fabricType: 'Cotton',
    customDetails: {}
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div className="fixed inset-0" onClick={onClose} />
        
        <div className="inline-block w-full max-w-2xl my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
          <div className="flex justify-between items-center p-6 border-b">
            <h2 className="text-xl font-semibold">Enter Item Details</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div className="space-y-6 md:space-y-8">
              <SizeSelector
                category={details.sizeCategory}
                onCategoryChange={(category) => setDetails({ ...details, sizeCategory: category, size: '' })}
                selectedSize={details.size}
                onSizeChange={(size) => setDetails({ ...details, size })}
              />

              <ColorSelector
                selectedColors={details.colors}
                onColorsChange={(colors) => setDetails({ ...details, colors })}
              />

              <ClothingTypeSelector
                selectedType={details.clothingType}
                brand={details.brand}
                onTypeChange={(clothingType) => setDetails({ ...details, clothingType })}
                onBrandChange={(brand) => setDetails({ ...details, brand })}
              />

              <PatternFabricSelector
                pattern={details.pattern}
                fabricType={details.fabricType}
                onPatternChange={(pattern) => setDetails({ ...details, pattern })}
                onFabricChange={(fabricType) => setDetails({ ...details, fabricType })}
              />
            </div>

            <div className="flex flex-col-reverse sm:flex-row gap-3 justify-end pt-6 border-t">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Save Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};