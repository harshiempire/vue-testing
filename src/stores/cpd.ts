
import { defineStore } from 'pinia';
import { ref } from 'vue';

export interface CPDRecord {
  id: string;
  eventName: string;
  conductedBy: string;
  date: string;
  keyLearnings: string;
  hoursCompleted: number;
  type: string;
  evidenceUrl: string | null;
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: number;
  thumbnail: string;
}

export const useCPDStore = defineStore('cpd', () => {
  const records = ref<CPDRecord[]>([
    {
      id: '1',
      eventName: 'Modern Teaching Methods Workshop',
      conductedBy: 'Education Board',
      date: '2024-03-01',
      keyLearnings: 'Learned about innovative teaching methods and technology integration in classroom',
      hoursCompleted: 3,
      type: 'workshop',
      evidenceUrl: null,
      createdAt: '2024-03-01T10:00:00Z'
    },
    {
      id: '2',
      eventName: 'Mathematics Teaching Conference',
      conductedBy: 'National Mathematics Association',
      date: '2024-02-15',
      keyLearnings: 'New approaches to teaching algebra and geometry',
      hoursCompleted: 4,
      type: 'paper_presentation',
      evidenceUrl: null,
      createdAt: '2024-02-15T09:00:00Z'
    }
  ]);

  const availableCourses = ref<Course[]>([
    {
      id: '1',
      title: 'Digital Classroom Management',
      description: 'Learn effective strategies for managing digital classrooms and online learning environments.',
      duration: 10,
      thumbnail: 'https://placehold.co/600x400'
    },
    {
      id: '2',
      title: 'Advanced Assessment Techniques',
      description: 'Explore modern assessment methods and tools for better student evaluation.',
      duration: 8,
      thumbnail: 'https://placehold.co/600x400'
    }
  ]);

  const addRecord = (record: CPDRecord) => {
    records.value.unshift(record);
  };

  const getRecordsByType = (type: string) => {
    return records.value.filter(record => record.type === type);
  };

  return {
    records,
    availableCourses,
    addRecord,
    getRecordsByType
  };
});