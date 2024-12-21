import React, { useState } from 'react';
import { Task } from '../types/task';
import { AlertTriangle } from 'lucide-react';
import { IssueReportModal } from './IssueReportModal';
import { IssueType } from '../types/issue';

interface TaskControlsProps {
  task: Task;
  isStarted: boolean;
  showDetails: boolean;
  onStart?: (taskId: string) => void;
  onComplete?: (taskId: string) => void;
  onToggleDetails: () => void;
  onReportIssue: (taskId: string, type: IssueType, description?: string) => void;
}

const buttonText = {
  PICKUP: 'Complete Pick-Up',
  DROP: 'Complete Drop',
  COLLECT: 'Complete Collection',
  DELIVERY: 'Complete Delivery'
};

export const TaskControls: React.FC<TaskControlsProps> = ({
  task,
  isStarted,
  showDetails,
  onStart,
  onComplete,
  onToggleDetails,
  onReportIssue
}) => {
  const [showIssueModal, setShowIssueModal] = useState(false);

  const handleIssueSubmit = (type: IssueType, description?: string) => {
    onReportIssue(task.id, type, description);
  };

  return (
    <>
      <div className="mt-4 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-2">
        <span className="text-sm text-gray-500 self-center">{task.distance} km away</span>
        <div className="flex flex-wrap justify-end gap-2">
          {isStarted && (
            <>
              <button
                onClick={() => setShowIssueModal(true)}
                className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-700 transition-colors"
                title="Report Issue"
              >
                <AlertTriangle className="w-5 h-5" />
              </button>

              <button
                onClick={onToggleDetails}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
              >
                {showDetails ? 'Hide Order Details' : 'View Order Details'}
              </button>
            </>
          )}

          {!isStarted && onStart && (
            <button
              onClick={() => onStart(task.id)}
              className="bg-green-600 text-white px-4 py-2 rounded-md 
                       hover:bg-green-700 transition-colors w-full sm:w-auto"
            >
              Start Task
            </button>
          )}

          {isStarted && onComplete && (
            <button
              onClick={() => onComplete(task.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md 
                       hover:bg-blue-700 transition-colors w-full sm:w-auto"
            >
              {buttonText[task.status]}
            </button>
          )}
        </div>
      </div>

      {showIssueModal && (
        <IssueReportModal
          onClose={() => setShowIssueModal(false)}
          onSubmit={handleIssueSubmit}
        />
      )}
    </>
  );
};