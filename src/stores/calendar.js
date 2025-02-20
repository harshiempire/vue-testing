import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useCalendarStore = defineStore('calendar', () => {
    const events = ref([
        {
            id: '1',
            title: 'Mid-Term Examination',
            description: 'Mathematics Mid-Term Examination for Class 6',
            type: 'exam',
            startDate: '2024-03-15',
            endDate: '2024-03-15',
            startTime: '2024-03-15T09:00:00',
            endTime: '2024-03-15T11:00:00',
            location: 'Examination Hall',
            class: '6A',
            subject: 'Mathematics'
        },
        {
            id: '2',
            title: 'Annual Sports Day',
            description: 'Annual sports event with various competitions',
            type: 'event',
            startDate: '2024-03-20',
            endDate: '2024-03-20',
            startTime: '2024-03-20T08:00:00',
            endTime: '2024-03-20T16:00:00',
            location: 'School Ground'
        },
        {
            id: '3',
            title: 'Holi Holiday',
            description: 'School closed for Holi celebration',
            type: 'holiday',
            startDate: '2024-03-25',
            endDate: '2024-03-26',
            startTime: '2024-03-25T00:00:00',
            endTime: '2024-03-26T23:59:59'
        }
    ]);
    const addEvent = (event) => {
        const newEvent = {
            ...event,
            id: crypto.randomUUID()
        };
        events.value.push(newEvent);
    };
    const updateEvent = (event) => {
        const index = events.value.findIndex(e => e.id === event.id);
        if (index !== -1) {
            events.value[index] = event;
        }
    };
    const deleteEvent = (eventId) => {
        events.value = events.value.filter(e => e.id !== eventId);
    };
    const getEventsByDateRange = (startDate, endDate) => {
        return events.value.filter(event => event.startDate >= startDate && event.endDate <= endDate);
    };
    const getEventsByType = (type) => {
        return events.value.filter(event => event.type === type);
    };
    return {
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        getEventsByDateRange,
        getEventsByType
    };
});
