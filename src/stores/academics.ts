import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Task, Evidence, Review, Rubric, SelfAssessment } from '@/types/academics';

// Mock rubrics data
const defaultRubrics: Rubric[] = [
  {
    id: '1',
    criterion: 'Understanding of Concepts',
    taxonomyLevel: 'understand',
    weightage: 30,
    levels: [
      {
        level: 1,
        description: 'Shows minimal understanding of core concepts',
        marks: 6
      },
      {
        level: 2,
        description: 'Demonstrates basic understanding of main concepts',
        marks: 12
      },
      {
        level: 3,
        description: 'Shows thorough understanding and can explain concepts clearly',
        marks: 18
      }
    ]
  },
  {
    id: '2',
    criterion: 'Application of Knowledge',
    taxonomyLevel: 'apply',
    weightage: 40,
    levels: [
      {
        level: 1,
        description: 'Limited application of concepts to solve problems',
        marks: 8
      },
      {
        level: 2,
        description: 'Can apply concepts to solve standard problems',
        marks: 16
      },
      {
        level: 3,
        description: 'Effectively applies concepts to solve complex problems',
        marks: 24
      }
    ]
  },
  {
    id: '3',
    criterion: 'Critical Analysis',
    taxonomyLevel: 'analyze',
    weightage: 30,
    levels: [
      {
        level: 1,
        description: 'Basic analysis with limited depth',
        marks: 6
      },
      {
        level: 2,
        description: 'Good analysis with some insights',
        marks: 12
      },
      {
        level: 3,
        description: 'Deep analysis with meaningful insights',
        marks: 18
      }
    ]
  }
];

export const useAcademicsStore = defineStore('academics', () => {
  const tasks = ref<Task[]>([
    {
      id: '1',
      title: 'Plant Growth Observation',
      description: 'Document the growth stages of a plant over 2 weeks with daily photographs and measurements.',
      type: 'activity',
      category: 'scholastic',
      subject: 'Science',
      class: '6A',
      dueDate: '2024-03-20',
      maxMarks: 60,
      status: 'assigned',
      createdAt: '2024-03-01',
      rubrics: defaultRubrics
    },
    {
      id: '2',
      title: 'Classical Dance Performance',
      description: 'Prepare and record a classical dance performance.',
      type: 'activity',
      category: 'co-scholastic',
      subject: 'Performing Arts',
      class: '6A',
      dueDate: '2024-03-25',
      maxMarks: 50,
      status: 'submitted',
      createdAt: '2024-03-05',
      rubrics: [
        {
          id: '1',
          criterion: 'Rhythm and Timing',
          taxonomyLevel: 'apply',
          weightage: 30,
          levels: [
            {
              level: 1,
              description: 'Inconsistent rhythm and timing',
              marks: 5
            },
            {
              level: 2,
              description: 'Mostly consistent rhythm with minor timing issues',
              marks: 8
            },
            {
              level: 3,
              description: 'Excellent rhythm and precise timing throughout',
              marks: 10
            }
          ]
        },
        {
          id: '2',
          criterion: 'Expression and Grace',
          taxonomyLevel: 'create',
          weightage: 40,
          levels: [
            {
              level: 1,
              description: 'Limited expression and stiff movements',
              marks: 6
            },
            {
              level: 2,
              description: 'Good expression with flowing movements',
              marks: 10
            },
            {
              level: 3,
              description: 'Exceptional expression and graceful movements',
              marks: 15
            }
          ]
        }
      ]
    }
  ]);

  const evidence = ref<Evidence[]>([
    {
      id: '1',
      taskId: '1',
      studentId: 'student1',
      files: [
        {
          name: 'plant-week1.jpg',
          url: 'https://example.com/plant-week1.jpg',
          type: 'image/jpeg'
        },
        {
          name: 'measurements.pdf',
          url: 'https://example.com/measurements.pdf',
          type: 'application/pdf'
        }
      ],
      submittedAt: '2024-03-10',
      status: 'peer_reviewed'
    },
    {
      id: '2',
      taskId: '1',
      studentId: 'student2',
      files: [
        {
          name: 'plant-growth.pdf',
          url: 'https://example.com/plant-growth.pdf',
          type: 'application/pdf'
        }
      ],
      submittedAt: '2024-03-11',
      status: 'self_reviewed'
    }
  ]);

  const reviews = ref<Review[]>([
    {
      id: '1',
      taskId: '1',
      studentId: 'student1',
      reviewerId: 'student1',
      feedback: 'I documented all growth stages carefully and included detailed measurements.',
      type: 'self',
      createdAt: '2024-03-11',
      rubricScores: []
    },
    {
      id: '2',
      taskId: '1',
      studentId: 'student1',
      reviewerId: 'student2',
      feedback: 'Great documentation with clear photos. Measurements are precise.',
      type: 'peer',
      createdAt: '2024-03-12',
      rubricScores: []
    },
    {
      id: '3',
      taskId: '1',
      studentId: 'student2',
      reviewerId: 'student2',
      feedback: 'I included daily measurements but could improve photo quality.',
      type: 'self',
      createdAt: '2024-03-12',
      rubricScores: []
    }
  ]);

  // Add self-assessments
  const selfAssessments = ref<SelfAssessment[]>([
    {
      id: '1',
      taskId: '2',
      studentId: 'student1',
      rubricScores: [
        {
          rubricId: '1',
          level: 2,
          comment: 'I maintained good rhythm throughout but had some minor timing issues in the complex sequences.'
        },
        {
          rubricId: '2',
          level: 3,
          comment: 'I focused on expressing the emotions and maintaining grace in my movements.'
        }
      ],
      reflection: 'I practiced extensively to improve my timing and expressions. The complex sequences were challenging but I managed to execute them well.',
      status: 'pending',
      submittedAt: '2024-03-15'
    }
  ]);

  const pendingTasks = computed(() => 
    tasks.value.filter(task => task.status === 'assigned')
  );

  const submittedTasks = computed(() => 
    tasks.value.filter(task => task.status === 'submitted')
  );

  const reviewedTasks = computed(() => 
    tasks.value.filter(task => task.status === 'reviewed')
  );

  // Add filter by category
  const filterTasks = (category: 'scholastic' | 'co-scholastic') => {
    return tasks.value.filter(task => task.category === category);
  };

  const getTaskEvidence = (taskId: string) => 
    evidence.value.filter(e => e.taskId === taskId);

  const getTaskReviews = (taskId: string) => 
    reviews.value.filter(r => r.taskId === taskId);

  // Get self-assessment for a task
  const getTaskSelfAssessment = (taskId: string, studentId: string) => {
    return selfAssessments.value.find(
      sa => sa.taskId === taskId && sa.studentId === studentId
    );
  };

  // Approve/reject self-assessment
  const updateSelfAssessmentStatus = (
    assessmentId: string, 
    status: 'approved' | 'rejected'
  ) => {
    const assessment = selfAssessments.value.find(sa => sa.id === assessmentId);
    if (assessment) {
      assessment.status = status;
    }
  };

  return {
    tasks,
    evidence,
    reviews,
    selfAssessments,
    pendingTasks,
    submittedTasks,
    reviewedTasks,
    getTaskEvidence,
    getTaskReviews,
    getTaskSelfAssessment,
    updateSelfAssessmentStatus,
    filterTasks
  };
});