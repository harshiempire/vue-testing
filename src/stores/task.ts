import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Task, Evidence, Review } from '@/types';

// Mock data
const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Plant Growth Observation',
    description: 'Document the growth of a plant over 2 weeks',
    type: 'activity',
    class: '6A',
    subject: 'Science',
    dueDate: '2024-03-15',
    createdBy: 'teacher1',
    maxMarks: 100
  },
  {
    id: '2',
    title: 'Mathematics Quiz',
    description: 'Chapter 1 - Algebra basics',
    type: 'mcq',
    class: '6A',
    subject: 'Mathematics',
    dueDate: '2024-03-10',
    createdBy: 'teacher1',
    maxMarks: 50
  }
];

const mockEvidence: Evidence[] = [
  {
    id: '1',
    taskId: '1',
    studentId: 'student1',
    files: [
      {
        id: '1',
        name: 'plant-week1.jpg',
        type: 'image/jpeg',
        url: '/mock/plant-week1.jpg'
      }
    ],
    submissionDate: '2024-03-08',
    status: 'submitted'
  }
];

const mockReviews: Review[] = [
  {
    id: '1',
    evidenceId: '1',
    reviewerId: 'student2',
    feedback: 'Great documentation of plant growth stages',
    reviewType: 'peer',
    reviewDate: '2024-03-09'
  }
];

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>(mockTasks);
  const evidence = ref<Evidence[]>(mockEvidence);
  const reviews = ref<Review[]>(mockReviews);

  const getTasksByClass = (className: string) => {
    return tasks.value.filter(task => task.class === className);
  };

  const getEvidenceByTask = (taskId: string) => {
    return evidence.value.filter(e => e.taskId === taskId);
  };

  const getReviewsByEvidence = (evidenceId: string) => {
    return reviews.value.filter(r => r.evidenceId === evidenceId);
  };

  const addTask = (task: Task) => {
    tasks.value.push(task);
  };

  const submitEvidence = (newEvidence: Evidence) => {
    evidence.value.push(newEvidence);
  };

  const addReview = (review: Review) => {
    reviews.value.push(review);
  };

  return {
    tasks,
    evidence,
    reviews,
    getTasksByClass,
    getEvidenceByTask,
    getReviewsByEvidence,
    addTask,
    submitEvidence,
    addReview
  };
});