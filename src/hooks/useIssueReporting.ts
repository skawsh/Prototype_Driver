import { useState } from 'react';
import { Issue, IssueType } from '../types/issue';

export const useIssueReporting = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  const reportIssue = (taskId: string, type: IssueType, description?: string) => {
    const newIssue: Issue = {
      id: Math.random().toString(36).substr(2, 9),
      taskId,
      type,
      description,
      createdAt: new Date().toISOString(),
      resolved: false
    };
    
    setIssues(prev => [...prev, newIssue]);
    
    // In a real app, you would also:
    // 1. Send notification to support/supervisor
    // 2. Update task status in backend
    // 3. Handle task reassignment if needed
  };

  return {
    issues,
    reportIssue
  };
};