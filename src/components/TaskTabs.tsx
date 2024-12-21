import React from 'react';
import { ClipboardList, ArrowRight } from 'lucide-react';

interface TaskTabsProps {
  activeTab: 'initial' | 'followup';
  onTabChange: (tab: 'initial' | 'followup') => void;
  initialTaskCount: number;
  followupTaskCount: number;
}

export const TaskTabs: React.FC<TaskTabsProps> = ({
  activeTab,
  onTabChange,
  initialTaskCount,
  followupTaskCount
}) => {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={() => onTabChange('initial')}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                   ${activeTab === 'initial'
                     ? 'bg-blue-900 text-white shadow-lg'
                     : 'bg-white text-gray-600 hover:bg-gray-50'}`}
      >
        <ClipboardList className="w-5 h-5" />
        <span>Initial Tasks</span>
        {initialTaskCount > 0 && (
          <span className={`px-2 py-1 rounded-full text-sm
                         ${activeTab === 'initial'
                           ? 'bg-red-500 text-white'
                           : 'bg-blue-100 text-blue-900'}`}>
            {initialTaskCount}
          </span>
        )}
      </button>

      <button
        onClick={() => onTabChange('followup')}
        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all
                   ${activeTab === 'followup'
                     ? 'bg-green-700 text-white shadow-lg'
                     : 'bg-white text-gray-600 hover:bg-gray-50'}`}
      >
        <ArrowRight className="w-5 h-5" />
        <span>Follow-up Tasks</span>
        {followupTaskCount > 0 && (
          <span className={`px-2 py-1 rounded-full text-sm
                         ${activeTab === 'followup'
                           ? 'bg-green-500 text-white'
                           : 'bg-green-100 text-green-700'}`}>
            {followupTaskCount}
          </span>
        )}
      </button>
    </div>
  );
};