import { TaskStatus } from '../types/task';

export const statusColors: Record<TaskStatus, string> = {
  PICKUP: 'border-blue-500',
  DROP: 'border-green-500',
  COLLECT: 'border-orange-500',
  DELIVERY: 'border-red-500'
};