import { useState, useCallback } from 'react';
import { Task, TaskStatus, OrderItem } from '../types/task';
import { sortTasksByDistance } from '../utils/taskUtils';
import { DriverEnteredDetails } from '../types/driverDetails';
import { useLocalStorage } from './useLocalStorage';

export const useDriverTasks = (initialTasks: Task[]) => {
  const [activeTasks, setActiveTasks] = useLocalStorage<Task[]>('activeTasks', 
    initialTasks.filter(task => task.status === 'PICKUP' || task.status === 'COLLECT')
  );
  const [followUpTasks, setFollowUpTasks] = useLocalStorage<Task[]>('followUpTasks', []);
  const [completedTasks, setCompletedTasks] = useLocalStorage<Task[]>('completedTasks', []);
  const [startedTaskId, setStartedTaskId] = useLocalStorage<string | null>('startedTaskId', null);

  const handleStartTask = useCallback((taskId: string) => {
    setStartedTaskId(taskId);
  }, [setStartedTaskId]);

  const generateItemId = () => {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  };

  const handleAddNewItem = useCallback((taskId: string, newItem: Omit<OrderItem, 'id'>) => {
    const addItem = (tasks: Task[]) =>
      tasks.map(task =>
        task.id === taskId
          ? {
              ...task,
              items: [
                ...task.items,
                { 
                  ...newItem, 
                  id: generateItemId(),
                  actualQuantity: newItem.quantity
                }
              ],
            }
          : task
      );

    setActiveTasks(prev => addItem(prev));
    setFollowUpTasks(prev => addItem(prev));
  }, [setActiveTasks, setFollowUpTasks]);

  const handleTaskComplete = useCallback((taskId: string) => {
    if (!startedTaskId || startedTaskId !== taskId) return;

    const activeTask = activeTasks.find(task => task.id === taskId);
    const followUpTask = followUpTasks.find(task => task.id === taskId);
    const taskToUpdate = activeTask || followUpTask;

    if (!taskToUpdate) return;

    if (activeTask) {
      const newStatus = getNextStatus(taskToUpdate.status);
      const updatedTask = { ...taskToUpdate, status: newStatus };
      
      setActiveTasks(prev => sortTasksByDistance(prev.filter(t => t.id !== taskId)));
      setFollowUpTasks(prev => sortTasksByDistance([...prev, updatedTask]));
    } else {
      setFollowUpTasks(prev => prev.filter(t => t.id !== taskId));
      setCompletedTasks(prev => [taskToUpdate, ...prev]);
    }

    setStartedTaskId(null);
  }, [activeTasks, followUpTasks, startedTaskId, setActiveTasks, setFollowUpTasks, setCompletedTasks, setStartedTaskId]);

  return {
    activeTasks: sortTasksByDistance(activeTasks),
    followUpTasks: sortTasksByDistance(followUpTasks),
    completedTasks,
    startedTaskId,
    handleStartTask,
    handleTaskComplete,
    handleAddNewItem
  };
};

const getNextStatus = (currentStatus: TaskStatus): TaskStatus => {
  switch (currentStatus) {
    case 'PICKUP':
      return 'DROP';
    case 'COLLECT':
      return 'DELIVERY';
    default:
      return currentStatus;
  }
};