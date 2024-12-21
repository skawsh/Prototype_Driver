import React, { useState } from 'react';

interface ColorSelectorProps {
  selectedColors: string[];
  onColorsChange: (colors: string[]) => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({
  selectedColors,
  onColorsChange,
}) => {
  const [customColor, setCustomColor] = useState('');

  const predefinedColors = [
    'Red', 'Blue', 'Green', 'Yellow', 'Black', 'White', 'Gray', 'Brown',
    'Pink', 'Orange', 'Purple', 'Teal', 'Rose', 'Maroon', 'Navy', 'Sky Blue',
    'Indigo', 'Olive', 'Lime', 'Mint', 'Forest Green', 'Mustard', 'Charcoal',
    'Ash', 'Silver', 'Cream', 'Coffee', 'Neon Pink', 'Gold', 'Bronze', 'Copper'
  ];

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const color = e.target.value;
    if (color && !selectedColors.includes(color)) {
      onColorsChange([...selectedColors, color]);
    }
  };

  const handleCustomColorAdd = () => {
    if (customColor && !selectedColors.includes(customColor)) {
      onColorsChange([...selectedColors, customColor]);
      setCustomColor('');
    }
  };

  const removeColor = (colorToRemove: string) => {
    onColorsChange(selectedColors.filter(color => color !== colorToRemove));
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Colors
        </label>
        <select
          onChange={handleColorChange}
          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value=""
        >
          <option value="">Choose a color</option>
          {predefinedColors.map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="text"
          value={customColor}
          onChange={(e) => setCustomColor(e.target.value)}
          placeholder="Enter custom color"
          className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={handleCustomColorAdd}
          className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {selectedColors.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedColors.map((color) => (
            <span
              key={color}
              className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {color}
              <button
                onClick={() => removeColor(color)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};