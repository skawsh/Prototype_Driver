import React, { useState } from 'react';
import { ClipboardList, Clock, HeadphonesIcon, UserCircle } from 'lucide-react';
import { ProfileDetails } from './Profile/ProfileDetails';
import { SupportDetails } from './Support/SupportDetails';

interface SidebarProps {
  currentView: 'tasks' | 'history' | 'profile' | 'support';
  onViewChange: (view: 'tasks' | 'history' | 'profile' | 'support') => void;
  activeTaskCount: number;
  completedTaskCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  currentView, 
  onViewChange,
  activeTaskCount,
  completedTaskCount
}) => {
  return (
    <div className="bg-blue-900 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">Driver panel</h1>
      
      <nav className="space-y-4">
        <button 
          onClick={() => onViewChange('tasks')}
          className={`flex items-center justify-between w-full p-2 rounded hover:bg-blue-800 ${
            currentView === 'tasks' ? 'bg-blue-800' : ''
          }`}
        >
          <div className="flex items-center space-x-2 text-yellow-300">
            <ClipboardList className="w-5 h-5" />
            <span>Active Tasks</span>
          </div>
          {activeTaskCount > 0 && (
            <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
              {activeTaskCount}
            </span>
          )}
        </button>
        
        <button 
          onClick={() => onViewChange('history')}
          className={`flex items-center justify-between w-full p-2 rounded hover:bg-blue-800 ${
            currentView === 'history' ? 'bg-blue-800' : ''
          }`}
        >
          <div className="flex items-center space-x-2 text-yellow-300">
            <Clock className="w-5 h-5" />
            <span>Order History</span>
          </div>
          {completedTaskCount > 0 && (
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
              {completedTaskCount}
            </span>
          )}
        </button>
        
        <button 
          onClick={() => onViewChange('support')}
          className={`flex items-center space-x-2 text-yellow-300 w-full p-2 rounded hover:bg-blue-800 ${
            currentView === 'support' ? 'bg-blue-800' : ''
          }`}
        >
          <HeadphonesIcon className="w-5 h-5" />
          <span>Support</span>
        </button>
        
        <button 
          onClick={() => onViewChange('profile')}
          className={`flex items-center space-x-2 text-yellow-300 w-full p-2 rounded hover:bg-blue-800 ${
            currentView === 'profile' ? 'bg-blue-800' : ''
          }`}
        >
          <UserCircle className="w-5 h-5" />
          <span>Profile</span>
        </button>
      </nav>
    </div>
  );
};