import React from 'react';
import { Task } from '../types/task';
import { MapPin } from 'lucide-react';

interface MapViewProps {
  tasks: Task[];
  currentTask?: Task;
}

const statusColors = {
  PICKUP: 'bg-blue-500',
  DROP: 'bg-green-500',
  COLLECT: 'bg-orange-500',
  DELIVERY: 'bg-red-500',
};

export const MapView: React.FC<MapViewProps> = ({ tasks, currentTask }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4">Task Locations</h3>
      <div className="space-y-3">
        {tasks.map((task) => (
          <div 
            key={task.id}
            className={`flex items-center p-3 rounded-lg ${
              task.id === currentTask?.id 
                ? 'bg-gray-100 border-2 border-blue-500' 
                : 'hover:bg-gray-50'
            }`}
          >
            <div className={`p-2 rounded-full ${statusColors[task.status]} mr-3`}>
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="font-medium">{task.location.address}</div>
              <div className="text-sm text-gray-500">
                {task.status} • {task.distance}km away
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};