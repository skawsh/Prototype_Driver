import React, { useState } from 'react';
import { OrderItem } from '../types/task';
import { Edit2, Plus, ChevronDown, ChevronUp } from 'lucide-react';
import { DriverDetailsForm } from './DriverDetails/DriverDetailsForm';
import { DriverEnteredDetails } from '../types/driverDetails';

interface OrderItemRowProps {
  item: OrderItem;
  isStarted: boolean;
  onQuantityUpdate: (itemId: string, newQuantity: number) => void;
  onDriverDetailsUpdate: (itemId: string, details: DriverEnteredDetails) => void;
}

export const OrderItemRow: React.FC<OrderItemRowProps> = ({
  item,
  isStarted,
  onQuantityUpdate,
  onDriverDetailsUpdate
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [newQuantity, setNewQuantity] = useState(item.actualQuantity || item.quantity);

  const handleUpdate = () => {
    onQuantityUpdate(item.id, newQuantity);
    setIsEditing(false);
  };

  const handleDriverDetailsSubmit = (details: DriverEnteredDetails) => {
    onDriverDetailsUpdate(item.id, details);
    setShowDetailsForm(false);
    setShowDetails(true);
  };

  const formatDescription = () => {
    if (item.type === 'PAIR') {
      return `${item.quantity} pair${item.quantity > 1 ? 's' : ''} of ${item.name}`;
    }
    return `${item.quantity} ${item.name}${item.quantity > 1 ? 's' : ''}`;
  };

  return (
    <div className="space-y-2">
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex-1 min-w-[200px]">
            <div className="font-medium">{formatDescription()}</div>
            {item.actualQuantity && item.actualQuantity !== item.quantity && (
              <div className="text-sm text-yellow-600 mt-1">
                Quantity updated by driver: {item.actualQuantity}
              </div>
            )}
          </div>
          
          {isStarted && (
            <div className="flex items-center gap-2">
              {isEditing ? (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(Math.max(1, Number(e.target.value)))}
                    className="w-16 px-2 py-1 border rounded text-center"
                    min="1"
                  />
                  <div className="space-x-2">
                    <button
                      onClick={handleUpdate}
                      className="text-sm px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                    title="Edit quantity"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setShowDetailsForm(true)}
                    className="flex items-center gap-1 px-2 py-1 text-green-600 hover:bg-green-50 rounded"
                  >
                    <Plus className="w-4 h-4" />
                    {item.driverDetails ? 'Update' : 'Add'} Details
                  </button>
                  {item.driverDetails && (
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="p-1 text-gray-600 hover:bg-gray-100 rounded"
                    >
                      {showDetails ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {item.driverDetails && showDetails && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <div>
                <span className="text-gray-600">Size:</span>{' '}
                <span className="font-medium">{item.driverDetails.size}</span>
              </div>
              <div>
                <span className="text-gray-600">Colors:</span>{' '}
                <span className="font-medium">{item.driverDetails.colors.join(', ')}</span>
              </div>
              <div>
                <span className="text-gray-600">Type:</span>{' '}
                <span className="font-medium">{item.driverDetails.clothingType}</span>
              </div>
              <div>
                <span className="text-gray-600">Brand:</span>{' '}
                <span className="font-medium">{item.driverDetails.brand}</span>
              </div>
              <div>
                <span className="text-gray-600">Pattern:</span>{' '}
                <span className="font-medium">{item.driverDetails.pattern}</span>
              </div>
              <div>
                <span className="text-gray-600">Fabric:</span>{' '}
                <span className="font-medium">{item.driverDetails.fabricType}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {showDetailsForm && (
        <DriverDetailsForm
          onSubmit={handleDriverDetailsSubmit}
          onClose={() => setShowDetailsForm(false)}
          initialDetails={item.driverDetails}
        />
      )}
    </div>
  );
};