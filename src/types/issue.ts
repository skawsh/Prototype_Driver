export type IssueType = 'CUSTOMER_NOT_RESPONDING' | 'CUSTOMER_NOT_AT_LOCATION' | 'OTHER';

export interface Issue {
  id: string;
  taskId: string;
  type: IssueType;
  description?: string;
  createdAt: string;
  resolved: boolean;
}