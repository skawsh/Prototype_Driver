import React from 'react';
import { Task } from '../types/task';
import { TaskSection } from './TaskSection';

interface TaskListProps {
  activeTasks: Task[];
  followUpTasks: Task[];
  onTaskComplete: (taskId: string) => void;
  onStartTask: (taskId: string) => void;
  startedTaskId: string | null;
}

export const TaskList: React.FC<TaskListProps> = ({ 
  activeTasks, 
  followUpTasks,
  onTaskComplete,
  onStartTask,
  startedTaskId
}) => {
  const hasAnyTasks = activeTasks.length > 0 || followUpTasks.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Tasks</h2>
        <div className="flex gap-4">
          <div className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center">
            <span className="mr-2">Active tasks</span>
            <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
              {activeTasks.length + followUpTasks.length}
            </span>
          </div>
        </div>
      </div>

      {hasAnyTasks ? (
        <>
          {activeTasks.length > 0 && (
            <TaskSection 
              title="Initial Tasks" 
              description="Pick-up and collection tasks"
              tasks={activeTasks} 
              onTaskComplete={onTaskComplete}
              onStartTask={onStartTask}
              startedTaskId={startedTaskId}
            />
          )}

          {followUpTasks.length > 0 && (
            <TaskSection 
              title="Follow-up Tasks" 
              description="Drop-off and delivery tasks"
              tasks={followUpTasks} 
              onTaskComplete={onTaskComplete}
              onStartTask={onStartTask}
              startedTaskId={startedTaskId}
            />
          )}
        </>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No tasks available at the moment
        </div>
      )}
    </div>
  );
};