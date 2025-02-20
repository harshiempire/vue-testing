import { defineStore } from 'pinia';
import { ref } from 'vue';
// Mock data
const mockTasks = [
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
const mockEvidence = [
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
const mockReviews = [
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
    const tasks = ref(mockTasks);
    const evidence = ref(mockEvidence);
    const reviews = ref(mockReviews);
    const getTasksByClass = (className) => {
        return tasks.value.filter(task => task.class === className);
    };
    const getEvidenceByTask = (taskId) => {
        return evidence.value.filter(e => e.taskId === taskId);
    };
    const getReviewsByEvidence = (evidenceId) => {
        return reviews.value.filter(r => r.evidenceId === evidenceId);
    };
    const addTask = (task) => {
        tasks.value.push(task);
    };
    const submitEvidence = (newEvidence) => {
        evidence.value.push(newEvidence);
    };
    const addReview = (review) => {
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
