import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TaskLayout } from './components/TaskLayout';
import { OrderHistory } from './components/OrderHistory';
import { ProfileDetails } from './components/Profile/ProfileDetails';
import { SupportDetails } from './components/Support/SupportDetails';
import { mockTasks } from './data/mockTasks';
import { useDriverTasks } from './hooks/useDriverTasks';
import { useIssueReporting } from './hooks/useIssueReporting';

function App() {
  const [currentView, setCurrentView] = useState<'tasks' | 'history' | 'profile' | 'support'>('tasks');
  const [showSidebar, setShowSidebar] = useState(false);
  
  const { 
    activeTasks, 
    followUpTasks, 
    completedTasks, 
    startedTaskId,
    handleStartTask,
    handleTaskComplete 
  } = useDriverTasks(mockTasks);

  const { reportIssue } = useIssueReporting();

  const renderContent = () => {
    switch (currentView) {
      case 'tasks':
        return (
          <TaskLayout 
            activeTasks={activeTasks}
            followUpTasks={followUpTasks}
            onTaskComplete={handleTaskComplete}
            onStartTask={handleStartTask}
            startedTaskId={startedTaskId}
            onReportIssue={reportIssue}
          />
        );
      case 'history':
        return <OrderHistory completedTasks={completedTasks} />;
      case 'profile':
        return <ProfileDetails />;
      case 'support':
        return <SupportDetails />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 lg:hidden
                      ${showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
           onClick={() => setShowSidebar(false)}
      />
      
      <div className={`fixed inset-y-0 left-0 transform ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
                      lg:relative lg:translate-x-0 transition duration-300 ease-in-out z-30`}>
        <Sidebar 
          currentView={currentView} 
          onViewChange={(view) => {
            setCurrentView(view);
            setShowSidebar(false);
          }}
          activeTaskCount={activeTasks.length + followUpTasks.length}
          completedTaskCount={completedTasks.length}
        />
      </div>

      <main className="flex-1 p-4 md:p-6 overflow-auto">
        <button
          className="lg:hidden mb-4 p-2 hover:bg-gray-200 rounded-md"
          onClick={() => setShowSidebar(true)}
        >
          ☰ Menu
        </button>

        {renderContent()}
      </main>
    </div>
  );
}

export default App;