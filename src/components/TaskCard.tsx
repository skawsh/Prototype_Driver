import React, { useState } from 'react';
import { Task } from '../types/task';
import { TaskDetails } from './TaskDetails';
import { TaskControls } from './TaskControls';
import { OrderDetails } from './OrderDetails';
import { useLocation } from '../hooks/useLocation';
import { statusColors } from '../constants/taskColors';

interface TaskCardProps {
  task: Task;
  onComplete?: (taskId: string) => void;
  onStart?: (taskId: string) => void;
  onReportIssue?: (taskId: string, type: string, description?: string) => void;
  onWeightUpdate?: (taskId: string, newWeight: number) => void;
  onItemUpdate?: (taskId: string, itemId: string, newQuantity: number) => void;
  isStarted?: boolean;
  showControls?: boolean;
}

export const TaskCard: React.FC<TaskCardProps> = ({ 
  task, 
  onComplete, 
  onStart,
  onReportIssue,
  onWeightUpdate,
  onItemUpdate,
  isStarted = false,
  showControls = true
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const { openLocation } = useLocation();

  const handleLocationClick = () => {
    if (!isStarted) return;
    openLocation(task.location);
  };

  const handlePhoneClick = () => {
    if (!isStarted) return;
    window.location.href = `tel:${task.phoneNumber}`;
  };

  return (
    <div className={`bg-white rounded-lg shadow-md p-4 mb-4 border-l-4 md:p-6 
                    transition-all duration-200 hover:shadow-lg
                    sm:mx-0 mx-2 ${statusColors[task.status]}`}>
      <OrderDetails
        task={task}
        isStarted={isStarted}
        onPhoneClick={handlePhoneClick}
        onLocationClick={handleLocationClick}
      />

      {showDetails && (
        <TaskDetails 
          task={task}
          isStarted={isStarted}
          onWeightUpdate={onWeightUpdate}
          onItemUpdate={onItemUpdate}
        />
      )}
      
      {showControls && (
        <TaskControls 
          task={task}
          isStarted={isStarted}
          showDetails={showDetails}
          onStart={onStart}
          onComplete={onComplete}
          onToggleDetails={() => setShowDetails(!showDetails)}
          onReportIssue={onReportIssue}
        />
      )}
    </div>
  );
};