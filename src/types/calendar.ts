export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  type: 'exam' | 'event' | 'holiday';
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location?: string;
  class?: string;
  subject?: string;
}