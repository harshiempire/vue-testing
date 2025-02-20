export type UserRole = 'student' | 'teacher' | 'parent' | 'admin';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  class?: string;
  subject?: string;
}

export type TaskType = 'activity' | 'project' | 'mcq';

export interface Task {
  id: string;
  title: string;
  description: string;
  type: TaskType;
  class: string;
  subject: string;
  dueDate: string;
  createdBy: string;
  maxMarks: number;
}

export interface Evidence {
  id: string;
  taskId: string;
  studentId: string;
  files: File[];
  submissionDate: string;
  status: 'submitted' | 'reviewed' | 'peer_reviewed';
}

export interface Review {
  id: string;
  evidenceId: string;
  reviewerId: string;
  marks?: number;
  feedback: string;
  reviewType: 'teacher' | 'peer';
  reviewDate: string;
}

export interface File {
  id: string;
  name: string;
  type: string;
  url: string;
}