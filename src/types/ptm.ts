export interface PTMSession {
  id: string;
  class: string;
  startDate: string;
  endDate: string;
  status: 'scheduled' | 'in_progress' | 'completed';
  totalParents: number;
  attendedParents: Parent[];
}

export interface Parent {
  id: string;
  name: string;
  studentName: string;
  rollNo: string;
  attended: boolean;
  attendedAt?: string;
}

export interface TimeSlot {
  id: string;
  teacherId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'available' | 'booked';
  booking?: Booking;
}

export interface Booking {
  id: string;
  slotId: string;
  parentId: string;
  parentName: string;
  studentName: string;
  class: string;
  bookedAt: string;
}

export interface TeacherSchedule {
  id: string;
  teacherId: string;
  lastPeriodEndTime: string; // Format: HH:mm
  workingDays: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday')[];
}