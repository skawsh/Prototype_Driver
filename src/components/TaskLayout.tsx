import React, { useState } from 'react';
import { Task } from '../types/task';
import { TaskSection } from './TaskSection';
import { TaskTabs } from './TaskTabs';

interface TaskLayoutProps {
  activeTasks: Task[];
  followUpTasks: Task[];
  onTaskComplete: (taskId: string) => void;
  onStartTask: (taskId: string) => void;
  startedTaskId: string | null;
  onReportIssue: (taskId: string, type: string, description?: string) => void;
  onWeightUpdate: (taskId: string, newWeight: number) => void;
  onItemUpdate: (taskId: string, itemId: string, newQuantity: number) => void;
}

export const TaskLayout: React.FC<TaskLayoutProps> = ({
  activeTasks,
  followUpTasks,
  onTaskComplete,
  onStartTask,
  startedTaskId,
  onReportIssue,
  onWeightUpdate,
  onItemUpdate
}) => {
  const [activeTab, setActiveTab] = useState<'initial' | 'followup'>('initial');
  const hasAnyTasks = activeTasks.length > 0 || followUpTasks.length > 0;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Tasks</h2>

      <TaskTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        initialTaskCount={activeTasks.length}
        followupTaskCount={followUpTasks.length}
      />

      {hasAnyTasks ? (
        <div className="space-y-4">
          {activeTab === 'initial' ? (
            <TaskSection
              tasks={activeTasks}
              onTaskComplete={onTaskComplete}
              onStartTask={onStartTask}
              startedTaskId={startedTaskId}
              onReportIssue={onReportIssue}
              onWeightUpdate={onWeightUpdate}
              onItemUpdate={onItemUpdate}
            />
          ) : (
            <TaskSection
              tasks={followUpTasks}
              onTaskComplete={onTaskComplete}
              onStartTask={onStartTask}
              startedTaskId={startedTaskId}
              onReportIssue={onReportIssue}
              onWeightUpdate={onWeightUpdate}
              onItemUpdate={onItemUpdate}
            />
          )}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No tasks available at the moment
        </div>
      )}
    </div>
  );
};