import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Notice, NoticeCategory } from '@/types/notice';

export const useNoticeStore = defineStore('notice', () => {
  const notices = ref<Notice[]>([
    {
      id: '1',
      title: 'Annual Sports Day',
      content: 'Annual Sports Day will be held on March 25th, 2024. All students must participate.',
      category: 'event',
      createdAt: '2024-03-01T10:00:00Z',
      createdBy: {
        id: 'admin1',
        name: 'John Doe',
        role: 'Admin'
      }
    },
    {
      id: '2',
      title: 'Final Examination Schedule',
      content: 'Final examinations will commence from April 1st, 2024. Schedule attached.',
      category: 'examination',
      createdAt: '2024-03-05T09:30:00Z',
      createdBy: {
        id: 'admin2',
        name: 'Jane Smith',
        role: 'Academic Coordinator'
      }
    },
    {
      id: '3',
      title: 'Mathematics Assignment Due',
      content: 'Chapter 5 assignment is due on March 15th, 2024.',
      category: 'class',
      createdAt: '2024-03-08T14:00:00Z',
      createdBy: {
        id: 'teacher1',
        name: 'Rohan Bhattacharya',
        role: 'Mathematics Teacher'
      },
      class: '6A',
      subject: 'Mathematics'
    }
  ]);

  const noticesByCategory = computed(() => {
    const grouped: Record<NoticeCategory, Notice[]> = {
      announcement: [],
      event: [],
      examination: [],
      emergency: [],
      class: []
    };

    notices.value.forEach(notice => {
      grouped[notice.category].push(notice);
    });

    return grouped;
  });

  const addNotice = (notice: Omit<Notice, 'id' | 'createdAt'>) => {
    notices.value.push({
      ...notice,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    });
  };

  return {
    notices,
    noticesByCategory,
    addNotice
  };
});