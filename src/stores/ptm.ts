import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { PTMSession, Parent, TimeSlot, TeacherSchedule, Booking } from '@/types/ptm';

export const usePTMStore = defineStore('ptm', () => {
  const sessions = ref<PTMSession[]>([
    {
      id: '1',
      class: '6A',
      startDate: '2024-03-01T09:00:00',
      endDate: '2024-03-01T15:00:00',
      status: 'completed',
      totalParents: 40,
      attendedParents: [
        {
          id: 'p1',
          name: 'Mr. Sharma',
          studentName: 'Rahul Sharma',
          rollNo: '6A01',
          attended: true,
          attendedAt: '2024-03-01T10:30:00'
        }
      ]
    },
    {
      id: '2',
      class: '6A',
      startDate: '2024-03-15T09:00:00',
      endDate: '2024-03-15T15:00:00',
      status: 'in_progress',
      totalParents: 40,
      attendedParents: []
    }
  ]);

  // Mock teacher schedule
  const teacherSchedule = ref<TeacherSchedule>({
    id: '1',
    teacherId: 'teacher1',
    lastPeriodEndTime: '14:30',
    workingDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  });

  // Available time slots with more mock data
  const timeSlots = ref<TimeSlot[]>([
    // Today's slots
    {
      id: '1',
      teacherId: 'teacher1',
      date: '2024-03-20',
      startTime: '14:45',
      endTime: '15:00',
      status: 'available'
    },
    {
      id: '2',
      teacherId: 'teacher1',
      date: '2024-03-20',
      startTime: '15:00',
      endTime: '15:15',
      status: 'booked',
      booking: {
        id: '1',
        slotId: '2',
        parentId: 'p1',
        parentName: 'Mr. Sharma',
        studentName: 'Rahul Sharma',
        class: '6A',
        bookedAt: '2024-03-15T10:00:00'
      }
    },
    // Tomorrow's slots
    {
      id: '3',
      teacherId: 'teacher1',
      date: '2024-03-21',
      startTime: '14:45',
      endTime: '15:00',
      status: 'booked',
      booking: {
        id: '2',
        slotId: '3',
        parentId: 'p2',
        parentName: 'Mrs. Patel',
        studentName: 'Priya Patel',
        class: '6B',
        bookedAt: '2024-03-16T11:30:00'
      }
    },
    {
      id: '4',
      teacherId: 'teacher1',
      date: '2024-03-21',
      startTime: '15:00',
      endTime: '15:15',
      status: 'available'
    },
    // Past slots
    {
      id: '5',
      teacherId: 'teacher1',
      date: '2024-03-19',
      startTime: '14:45',
      endTime: '15:00',
      status: 'booked',
      booking: {
        id: '3',
        slotId: '5',
        parentId: 'p3',
        parentName: 'Mr. Kumar',
        studentName: 'Amit Kumar',
        class: '7A',
        bookedAt: '2024-03-14T09:15:00'
      }
    }
  ]);

  const completedSessions = computed(() => 
    sessions.value.filter(session => session.status === 'completed')
  );

  const inProgressSessions = computed(() => 
    sessions.value.filter(session => session.status === 'scheduled' || session.status === 'in_progress')
  );

  const upcomingIndividualMeetings = computed(() => {
    const now = new Date();
    return timeSlots.value
      .filter(slot => {
        const slotDate = new Date(`${slot.date}T${slot.startTime}`);
        return slotDate > now && slot.status === 'booked';
      })
      .sort((a, b) => new Date(`${a.date}T${a.startTime}`).getTime() - new Date(`${b.date}T${b.startTime}`).getTime());
  });

  const completedIndividualMeetings = computed(() => {
    const now = new Date();
    return timeSlots.value
      .filter(slot => {
        const slotDate = new Date(`${slot.date}T${slot.startTime}`);
        return slotDate <= now && slot.status === 'booked';
      })
      .sort((a, b) => new Date(`${b.date}T${b.startTime}`).getTime() - new Date(`${a.date}T${a.startTime}`).getTime());
  });

  const getTimeSlotsByDate = (date: string) => {
    return timeSlots.value.filter(slot => slot.date === date);
  };

  const createSession = (sessionData: Omit<PTMSession, 'id' | 'attendedParents'>) => {
    const newSession: PTMSession = {
      ...sessionData,
      id: crypto.randomUUID(),
      attendedParents: []
    };
    sessions.value.push(newSession);
  };

  const markParentAttendance = (sessionId: string, parent: Parent) => {
    const session = sessions.value.find(s => s.id === sessionId);
    if (session) {
      const attendedParent = {
        ...parent,
        attended: true,
        attendedAt: new Date().toISOString()
      };
      session.attendedParents.push(attendedParent);
    }
  };

  const addTimeSlot = (date: string, startTime: string, endTime: string) => {
    const newSlot: TimeSlot = {
      id: crypto.randomUUID(),
      teacherId: 'teacher1',
      date,
      startTime,
      endTime,
      status: 'available'
    };
    timeSlots.value.push(newSlot);
  };

  const bookTimeSlot = (slotId: string, bookingData: Omit<Booking, 'id' | 'slotId' | 'bookedAt'>) => {
    const slot = timeSlots.value.find(s => s.id === slotId);
    if (slot && slot.status === 'available') {
      slot.status = 'booked';
      slot.booking = {
        id: crypto.randomUUID(),
        slotId,
        bookedAt: new Date().toISOString(),
        ...bookingData
      };
    }
  };

  return {
    sessions,
    teacherSchedule,
    timeSlots,
    completedSessions,
    inProgressSessions,
    upcomingIndividualMeetings,
    completedIndividualMeetings,
    getTimeSlotsByDate,
    createSession,
    markParentAttendance,
    addTimeSlot,
    bookTimeSlot
  };
});