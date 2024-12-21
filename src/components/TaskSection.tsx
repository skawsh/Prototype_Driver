import React from 'react';
import { Task } from '../types/task';
import { TaskCard } from './TaskCard';

interface TaskSectionProps {
  tasks: Task[];
  onTaskComplete?: (taskId: string) => void;
  onStartTask?: (taskId: string) => void;
  onWeightUpdate?: (taskId: string, newWeight: number) => void;
  onItemUpdate?: (taskId: string, itemId: string, newQuantity: number) => void;
  startedTaskId?: string | null;
  onReportIssue?: (taskId: string, type: string, description?: string) => void;
  showCompleteButton?: boolean;
}

export const TaskSection: React.FC<TaskSectionProps> = ({ 
  tasks, 
  onTaskComplete,
  onStartTask,
  onWeightUpdate,
  onItemUpdate,
  startedTaskId,
  onReportIssue,
  showCompleteButton = true
}) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskCard 
          key={task.id} 
          task={task} 
          onComplete={showCompleteButton ? onTaskComplete : undefined}
          onStart={onStartTask}
          onWeightUpdate={onWeightUpdate}
          onItemUpdate={onItemUpdate}
          isStarted={startedTaskId === task.id}
          showControls={showCompleteButton}
          onReportIssue={onReportIssue}
        />
      ))}
    </div>
  );
};