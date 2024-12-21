import React, { useState } from 'react';
import { Package, Plus } from 'lucide-react';
import { Task, OrderItem } from '../types/task';
import { OrderItemRow } from './OrderItemRow';
import { WeightDetails } from './WeightDetails';
import { DriverEnteredDetails } from '../types/driverDetails';

interface OrderItemsDetailsProps {
  task: Task;
  isStarted: boolean;
  onWeightUpdate?: (taskId: string, newWeight: number) => void;
  onItemUpdate?: (taskId: string, itemId: string, newQuantity: number) => void;
  onDriverDetailsUpdate?: (taskId: string, itemId: string, details: DriverEnteredDetails) => void;
  onAddNewItem?: (taskId: string, item: Omit<OrderItem, 'id'>) => void;
}

export const OrderItemsDetails: React.FC<OrderItemsDetailsProps> = ({
  task,
  isStarted,
  onWeightUpdate,
  onItemUpdate,
  onDriverDetailsUpdate,
  onAddNewItem
}) => {
  const [showNewItemForm, setShowNewItemForm] = useState(false);
  const [newItem, setNewItem] = useState<Omit<OrderItem, 'id'>>({
    type: 'SINGLE',
    name: '',
    quantity: 1
  });

  const handleAddNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAddNewItem && newItem.name.trim()) {
      onAddNewItem(task.id, {
        ...newItem,
        name: newItem.name.trim()
      });
      setShowNewItemForm(false);
      setNewItem({ type: 'SINGLE', name: '', quantity: 1 });
    }
  };

  return (
    <div className="space-y-6">
      <WeightDetails
        task={task}
        isStarted={isStarted}
        onWeightUpdate={onWeightUpdate}
      />

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-gray-700 flex items-center gap-2">
            <Package className="w-5 h-5" />
            Order Items
          </h4>
          {isStarted && (
            <button
              onClick={() => setShowNewItemForm(true)}
              className="flex items-center gap-1 px-3 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Item
            </button>
          )}
        </div>

        <div className="space-y-3">
          {task.items.map((item) => (
            <OrderItemRow
              key={item.id}
              item={item}
              isStarted={isStarted}
              onQuantityUpdate={(itemId, newQuantity) => onItemUpdate?.(task.id, itemId, newQuantity)}
              onDriverDetailsUpdate={(itemId, details) => onDriverDetailsUpdate?.(task.id, itemId, details)}
            />
          ))}
        </div>

        {showNewItemForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h3 className="text-lg font-semibold mb-4">Add New Item</h3>
              <form onSubmit={handleAddNewItem} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Item Name
                  </label>
                  <input
                    type="text"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Enter item name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type
                  </label>
                  <select
                    value={newItem.type}
                    onChange={(e) => setNewItem({ ...newItem, type: e.target.value as 'SINGLE' | 'PAIR' })}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="SINGLE">Single</option>
                    <option value="PAIR">Pair</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newItem.quantity}
                    onChange={(e) => setNewItem({ ...newItem, quantity: Math.max(1, Number(e.target.value)) })}
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowNewItemForm(false)}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Add Item
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};