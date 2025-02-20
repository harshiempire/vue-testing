export interface Achievement {
  id: string;
  name: string;
  description: string;
  date: string;
  badge: string;
  type: 'academic' | 'sports' | 'arts' | 'leadership' | 'community';
  verificationStatus: 'pending' | 'verified' | 'rejected';
  evidence: {
    type: 'image' | 'pdf' | 'link';
    url: string;
  }[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: 'test' | 'activity' | 'achievement' | 'event' | 'assessment';
  category: 'scholastic' | 'co-scholastic';
  title: string;
  description: string;
  subject?: string;
  score?: number;
  maxScore?: number;
  status: 'completed' | 'ongoing' | 'upcoming';
  evidence?: {
    type: 'image' | 'pdf' | 'link';
    url: string;
  }[];
}

export interface Portfolio {
  id: string;
  studentId: string;
  type: 'scholastic' | 'co-scholastic';
  category: string; // Subject name for scholastic, activity type for co-scholastic
  items: {
    id: string;
    title: string;
    description: string;
    date: string;
    files: {
      name: string;
      type: string;
      url: string;
    }[];
  }[];
}
