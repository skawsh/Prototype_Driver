import { Task } from '../types/task';

export const sortTasksByDistance = (tasks: Task[]): Task[] => {
  return [...tasks].sort((a, b) => (a.distance || 0) - (b.distance || 0));
};