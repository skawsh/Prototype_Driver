import React from 'react';
import { Task } from '../types/task';
import { Clock, AlertCircle } from 'lucide-react';
import { OrderItemsDetails } from './OrderItemsDetails';

interface TaskDetailsProps {
  task: Task;
  isStarted?: boolean;
  onWeightUpdate?: (taskId: string, newWeight: number) => void;
}

export const TaskDetails: React.FC<TaskDetailsProps> = ({ 
  task,
  isStarted = false,
  onWeightUpdate
}) => {
  return (
    <div className="mt-4 space-y-6 border-t pt-4">
      <OrderItemsDetails
        task={task}
        isStarted={isStarted}
        onWeightUpdate={onWeightUpdate}
      />
      
      <div className="flex items-center text-gray-600">
        <Clock className="w-4 h-4 mr-2" />
        <span>{new Date(task.scheduledTime).toLocaleTimeString()}</span>
      </div>
      
      {task.specialInstructions && (
        <div className="flex items-center text-gray-600">
          <AlertCircle className="w-4 h-4 mr-2" />
          <span>{task.specialInstructions}</span>
        </div>
      )}
    </div>
  );
};