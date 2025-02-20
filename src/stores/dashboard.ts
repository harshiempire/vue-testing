import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Task, Notification } from '@/types/dashboard';

export const useDashboardStore = defineStore('dashboard', () => {
  const tasks = ref<Task[]>([
    {
      id: '1',
      title: 'Grade Mathematics Quiz',
      description: 'Review and grade Chapter 3 quiz submissions',
      dueDate: '2024-03-15',
      subject: 'Mathematics',
      type: 'grading',
      status: 'pending',
    },
    {
      id: '2',
      title: 'Prepare Lesson Plan',
      description: 'Create lesson plan for Chapter 4: Linear Equations',
      dueDate: '2024-03-10',
      subject: 'Mathematics',
      type: 'planning',
      status: 'pending',
    },
    {
      id: '3',
      title: 'Parent-Teacher Meeting',
      description: 'Meeting with parents of Class 6A',
      dueDate: '2024-03-20',
      subject: 'General',
      type: 'meeting',
      status: 'pending',
    },
  ]);

  const notifications = ref<Notification[]>([
    {
      id: '1',
      message: 'New quiz submissions ready for grading',
      timestamp: '2024-03-08T10:30:00',
      type: 'info',
      read: false,
      category: 'student',
    },
    {
      id: '2',
      message: 'PTM schedule updated for next week',
      timestamp: '2024-03-07T15:45:00',
      type: 'warning',
      read: false,
      category: 'admin',
    },
    {
      id: '3',
      message: 'Syllabus update: New chapter added to Term 2',
      timestamp: '2024-03-06T09:15:00',
      type: 'info',
      read: true,
      category: 'admin',
    },
  ]);

  const markTaskCompleted = (taskId: string) => {
    const task = tasks.value.find((t) => t.id === taskId);
    if (task) {
      task.status = task.status === 'completed' ? 'pending' : 'completed';
    }
  };

  const addTask = (task: Omit<Task, 'id' | 'status'>) => {
    tasks.value.push({
      ...task,
      id: crypto.randomUUID(),
      status: 'pending',
    });
  };

  const markNotificationRead = (notificationId: string) => {
    const notification = notifications.value.find(
      (n) => n.id === notificationId
    );
    if (notification) {
      notification.read = true;
    }
  };

  const markAllNotificationsRead = () => {
    notifications.value.forEach((n) => (n.read = true));
  };

  return {
    tasks,
    notifications,
    markTaskCompleted,
    addTask,
    markNotificationRead,
    markAllNotificationsRead,
  };
});
