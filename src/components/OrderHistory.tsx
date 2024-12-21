import React from 'react';
import { Task } from '../types/task';
import { TaskCard } from './TaskCard';

interface OrderHistoryProps {
  completedTasks: Task[];
}

export const OrderHistory: React.FC<OrderHistoryProps> = ({ completedTasks }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Order History</h2>
      {completedTasks.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No completed orders yet
        </div>
      ) : (
        <div className="space-y-4">
          {completedTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};