export type NoticeCategory = 'announcement' | 'event' | 'examination' | 'emergency' | 'class';

export interface Notice {
  id: string;
  title: string;
  content: string;
  category: NoticeCategory;
  createdAt: string;
  createdBy: {
    id: string;
    name: string;
    role: string;
  };
  class?: string;
  subject?: string;
}