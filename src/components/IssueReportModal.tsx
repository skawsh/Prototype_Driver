import React, { useState } from 'react';
import { IssueType } from '../types/issue';
import { X, AlertTriangle, MessageSquare } from 'lucide-react';

interface IssueReportModalProps {
  onClose: () => void;
  onSubmit: (type: IssueType, description?: string) => void;
}

export const IssueReportModal: React.FC<IssueReportModalProps> = ({ onClose, onSubmit }) => {
  const [issueType, setIssueType] = useState<IssueType>('CUSTOMER_NOT_RESPONDING');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(issueType, description);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2 text-red-600">
            <AlertTriangle className="w-6 h-6" />
            <h3 className="text-lg font-semibold">Report an Issue</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What's the issue?
            </label>
            <select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value as IssueType)}
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            >
              <option value="CUSTOMER_NOT_RESPONDING">Customer Not Responding</option>
              <option value="CUSTOMER_NOT_AT_LOCATION">Customer Not at Location</option>
              <option value="OTHER">Other Issue</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Details
            </label>
            <div className="relative">
              <MessageSquare className="absolute top-3 left-3 w-5 h-5 text-gray-400" />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please provide more information about the issue..."
                className="w-full rounded-lg border-gray-300 pl-10 shadow-sm focus:border-red-500 focus:ring-red-500 h-32"
              />
            </div>
          </div>

          <div className="flex gap-3 justify-end pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <AlertTriangle className="w-4 h-4" />
              Report Issue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};