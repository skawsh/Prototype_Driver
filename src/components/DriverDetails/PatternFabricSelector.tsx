import React, { useState } from 'react';
import { Pattern, FabricType } from '../../types/driverDetails';

interface PatternFabricSelectorProps {
  pattern: Pattern;
  fabricType: FabricType;
  onPatternChange: (pattern: Pattern) => void;
  onFabricChange: (fabricType: FabricType) => void;
}

export const PatternFabricSelector: React.FC<PatternFabricSelectorProps> = ({
  pattern,
  fabricType,
  onPatternChange,
  onFabricChange,
}) => {
  const [showCustomPattern, setShowCustomPattern] = useState(false);
  const [showCustomFabric, setShowCustomFabric] = useState(false);
  const [customPattern, setCustomPattern] = useState('');
  const [customFabric, setCustomFabric] = useState('');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pattern
        </label>
        {!showCustomPattern ? (
          <div className="space-y-2">
            <select
              value={pattern}
              onChange={(e) => {
                if (e.target.value === 'Other') {
                  setShowCustomPattern(true);
                } else {
                  onPatternChange(e.target.value as Pattern);
                }
              }}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {['Solid', 'Striped', 'Checked', 'Floral', 'Polka Dots', 'Plaid',
                'Houndstooth', 'Chevron', 'Camouflage', 'Paisley', 'Geometric',
                'Abstract', 'Animal Print', 'Tie-Dye', 'Other'].map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={customPattern}
              onChange={(e) => setCustomPattern(e.target.value)}
              placeholder="Enter pattern"
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => {
                if (customPattern) {
                  onPatternChange(customPattern as Pattern);
                }
                setShowCustomPattern(false);
              }}
              className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Fabric Type
        </label>
        {!showCustomFabric ? (
          <div className="space-y-2">
            <select
              value={fabricType}
              onChange={(e) => {
                if (e.target.value === 'Other') {
                  setShowCustomFabric(true);
                } else {
                  onFabricChange(e.target.value as FabricType);
                }
              }}
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {['Cotton', 'Silk', 'Wool', 'Linen', 'Polyester', 'Nylon', 'Denim',
                'Khadi', 'Velvet', 'Jersey', 'Chiffon', 'Taffeta', 'Brocade',
                'Rayon', 'Spandex', 'Corduroy', 'Other'].map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={customFabric}
              onChange={(e) => setCustomFabric(e.target.value)}
              placeholder="Enter fabric type"
              className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => {
                if (customFabric) {
                  onFabricChange(customFabric as FabricType);
                }
                setShowCustomFabric(false);
              }}
              className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};