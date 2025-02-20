export interface Task {
  id: string;
  title: string;
  description: string;
  type: 'activity' | 'project' | 'mcq';
  category: 'scholastic' | 'co-scholastic' | 'achievements'| 'health';
  subject: string;
  class: string;
  dueDate: string;
  maxMarks: number;
  status: 'draft' | 'assigned' | 'submitted' | 'reviewed';
  createdAt: string;
  activity?: string;
  rubrics: Rubric[];
}

export interface Rubric {
  id: string;
  criterion: string;
  taxonomyLevel: TaxonomyLevel;
  weightage: number;
  levels: RubricLevel[];
}

export interface RubricLevel {
  level: number;
  description: string;
  marks: number;
}

export type TaxonomyLevel =
  | 'remember'
  | 'understand'
  | 'apply'
  | 'analyze'
  | 'evaluate'
  | 'create';

export interface Evidence {
  id: string;
  taskId: string;
  studentId: string;
  files: {
    name: string;
    url: string;
    type: string;
  }[];
  submittedAt: string;
  status: 'submitted' | 'self_reviewed' | 'peer_reviewed' | 'teacher_reviewed';
}

export interface Review {
  id: string;
  taskId: string;
  studentId: string;
  reviewerId: string;
  marks?: number;
  feedback: string;
  type: 'teacher' | 'peer' | 'self';
  createdAt: string;
  rubricScores: RubricScore[];
}

export interface RubricScore {
  rubricId: string;
  level: number;
  comment: string;
}

export interface SelfAssessment {
  id: string;
  taskId: string;
  studentId: string;
  rubricScores: RubricScore[];
  reflection: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}
