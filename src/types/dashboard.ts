export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  subject: string;
  type: "grading" | "planning" | "meeting";
  status: "pending" | "completed";
}

export interface Notification {
  id: string;
  message: string;
  timestamp: string;
  type: "info" | "warning" | "success";
  read: boolean;
  category: "admin" | "student" | "system";
}

export interface QuickInsight {
  icon: string;
  value: number | string;
  trend: {
    direction: "up" | "down" | "neutral";
    value: number;
  };
  label: string;
}
