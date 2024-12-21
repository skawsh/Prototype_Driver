import React from 'react';
import { Task } from '../types/task';
import { MapPin, Phone, Package, Clock, AlertCircle } from 'lucide-react';

interface OrderDetailsProps {
  task: Task;
  isStarted: boolean;
  onPhoneClick: () => void;
  onLocationClick: () => void;
}

export const OrderDetails: React.FC<OrderDetailsProps> = ({
  task,
  isStarted,
  onPhoneClick,
  onLocationClick,
}) => {
  const getServiceTypeColor = (type: string) => {
    switch (type) {
      case 'PREMIUM': return 'bg-purple-100 text-purple-800';
      case 'EXPRESS': return 'bg-orange-100 text-orange-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 space-y-6">
      {/* Order Header */}
      <div className="border-b pb-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">Order #{task.orderId}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getServiceTypeColor(task.serviceType)}`}>
            {task.serviceType} Service
          </span>
        </div>
        <div className="text-gray-600">
          <Clock className="w-4 h-4 inline mr-2" />
          {new Date(task.scheduledTime).toLocaleTimeString()}
        </div>
      </div>

      {/* Customer Details */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Customer Details</h4>
        <div className="flex flex-col space-y-2">
          <div className="text-lg font-medium">{task.customerName}</div>
          <button 
            onClick={onPhoneClick}
            disabled={!isStarted}
            className={`flex items-center space-x-2 p-2 rounded-md transition-all
                     ${isStarted 
                       ? 'text-blue-600 hover:bg-blue-50' 
                       : 'text-gray-400 cursor-not-allowed'}`}
          >
            <Phone className="w-5 h-5" />
            <span>{task.phoneNumber}</span>
            {isStarted && <span className="text-sm">(Tap to call)</span>}
          </button>
        </div>
      </div>

      {/* Location Details */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Location Details</h4>
        <button 
          onClick={onLocationClick}
          disabled={!isStarted}
          className={`w-full text-left p-4 rounded-md border transition-all
                   ${isStarted 
                     ? 'hover:bg-gray-50 border-gray-200' 
                     : 'border-gray-100 text-gray-400 cursor-not-allowed'}`}
        >
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 mt-1" />
            <div>
              <div className="font-medium">
                {task.status === 'PICKUP' ? 'Pickup Location' :
                 task.status === 'DROP' ? 'Drop Location' :
                 task.status === 'COLLECT' ? 'Collection Location' :
                 'Delivery Location'}
              </div>
              <div className="text-sm text-gray-600">{task.location.address}</div>
            </div>
          </div>
        </button>

        {/* Show next destination for pickup/collect tasks */}
        {(task.status === 'PICKUP' && task.dropLocation) && (
          <div className="p-4 rounded-md bg-gray-50">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 text-gray-500" />
              <div>
                <div className="font-medium text-gray-700">Drop Location</div>
                <div className="text-sm text-gray-600">{task.dropLocation.address}</div>
              </div>
            </div>
          </div>
        )}
        {(task.status === 'COLLECT' && task.deliveryLocation) && (
          <div className="p-4 rounded-md bg-gray-50">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 mt-1 text-gray-500" />
              <div>
                <div className="font-medium text-gray-700">Delivery Location</div>
                <div className="text-sm text-gray-600">{task.deliveryLocation.address}</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Special Instructions */}
      {task.specialInstructions && (
        <div className="p-4 bg-yellow-50 rounded-md">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-yellow-600" />
            <div>
              <div className="font-medium text-yellow-800">Special Instructions</div>
              <div className="text-sm text-yellow-700">{task.specialInstructions}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};