import { ref, computed } from 'vue';
import { usePTMStore } from '@/stores/ptm';
const ptmStore = usePTMStore();
const showCreateModal = ref(false);
const showAvailabilityModal = ref(false);
const selectedSession = ref(null);
const activeTab = ref('in_progress');
const selectedClass = ref('all');
const selectedDate = ref('');
const assignedClasses = ['6A', '6B', '7A', '8A'];
const newSession = ref({
    class: assignedClasses[0],
    startDate: '',
    startTime: '09:00',
    endDate: '',
    endTime: '15:00',
    totalParents: 40
});
const newTimeSlot = ref({
    date: '',
    startTime: ptmStore.teacherSchedule.lastPeriodEndTime,
    endTime: ''
});
const filteredInProgressSessions = computed(() => {
    if (selectedClass.value === 'all') {
        return ptmStore.inProgressSessions;
    }
    return ptmStore.inProgressSessions.filter(session => session.class === selectedClass.value);
});
const filteredCompletedSessions = computed(() => {
    if (selectedClass.value === 'all') {
        return ptmStore.completedSessions;
    }
    return ptmStore.completedSessions.filter(session => session.class === selectedClass.value);
});
const selectedDateSlots = computed(() => {
    if (!selectedDate.value)
        return [];
    return ptmStore.getTimeSlotsByDate(selectedDate.value);
});
const handleCreateSession = () => {
    ptmStore.createSession({
        class: newSession.value.class,
        startDate: `${newSession.value.startDate}T${newSession.value.startTime}:00`,
        endDate: `${newSession.value.endDate}T${newSession.value.endTime}:00`,
        status: 'scheduled',
        totalParents: newSession.value.totalParents
    });
    showCreateModal.value = false;
};
const handleAddTimeSlot = () => {
    ptmStore.addTimeSlot(newTimeSlot.value.date, newTimeSlot.value.startTime, newTimeSlot.value.endTime);
    newTimeSlot.value.endTime = '';
};
const formatDateTime = (date) => {
    return new Date(date).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
const formatTime = (time) => {
    return time.substring(0, 5); // Format HH:mm
};
// Mock parent list for demonstration
const mockParents = [
    {
        id: 'p1',
        name: 'Mr. Sharma',
        studentName: 'Rahul Sharma',
        rollNo: '6A01',
        attended: false
    },
    {
        id: 'p2',
        name: 'Mrs. Patel',
        studentName: 'Priya Patel',
        rollNo: '6A02',
        attended: false
    }
];
const handleMarkAttendance = (sessionId, parent) => {
    ptmStore.markParentAttendance(sessionId, parent);
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("min-h-screen bg-[#F5F5F5] pl-64 pt-16") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("p-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-center mb-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: ("text-2xl font-bold") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
    value: ((__VLS_ctx.selectedClass)),
    ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl bg-white") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
    value: ("all"),
});
for (const [class_] of __VLS_getVForSourceType((__VLS_ctx.assignedClasses))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        key: ((class_)),
        value: ((class_)),
    });
    (class_);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showAvailabilityModal = true;
        } },
    ...{ class: ("px-4 py-2 border border-[#ECECEC] bg-white text-gray-700 rounded-xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.showCreateModal = true;
        } },
    ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4 mb-6") },
});
for (const [tab] of __VLS_getVForSourceType(([
    { id: 'in_progress', label: 'In Progress' },
    { id: 'completed', label: 'Completed' },
    { id: 'one_on_one', label: 'One-on-One Meetings' }
]))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.activeTab = tab.id;
            } },
        key: ((tab.id)),
        ...{ class: ("px-4 py-2 rounded-xl") },
        ...{ class: ((__VLS_ctx.activeTab === tab.id ? 'bg-[#0447A8] text-white' : 'bg-white text-gray-700')) },
    });
    (tab.label);
}
if (__VLS_ctx.activeTab === 'one_on_one') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-2") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("date"),
        ...{ class: ("px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.selectedDate);
    if (__VLS_ctx.selectedDate) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-lg font-semibold") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("grid gap-4") },
        });
        for (const [slot] of __VLS_getVForSourceType((__VLS_ctx.selectedDateSlots))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                key: ((slot.id)),
                ...{ class: ("flex items-center justify-between p-4 bg-gray-50 rounded-xl") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("font-medium") },
            });
            (__VLS_ctx.formatTime(slot.startTime));
            (__VLS_ctx.formatTime(slot.endTime));
            if (slot.booking) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("text-sm text-gray-600 mt-1") },
                });
                (slot.booking.parentName);
                (slot.booking.studentName);
                (slot.booking.class);
            }
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("px-3 py-1 text-sm rounded-lg") },
                ...{ class: ((slot.status === 'available' ?
                        'bg-green-50 text-green-700' :
                        'bg-blue-50 text-blue-700')) },
            });
            (slot.status.charAt(0).toUpperCase() + slot.status.slice(1));
        }
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-lg font-semibold mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    for (const [meeting] of __VLS_getVForSourceType((__VLS_ctx.ptmStore.upcomingIndividualMeetings))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((meeting.id)),
            ...{ class: ("flex items-center justify-between p-4 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (new Date(meeting.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (__VLS_ctx.formatTime(meeting.startTime));
        (__VLS_ctx.formatTime(meeting.endTime));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600 mt-1") },
        });
        (meeting.booking?.parentName);
        (meeting.booking?.studentName);
        (meeting.booking?.class);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm") },
        });
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-lg font-semibold mb-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    for (const [meeting] of __VLS_getVForSourceType((__VLS_ctx.ptmStore.completedIndividualMeetings))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((meeting.id)),
            ...{ class: ("flex items-center justify-between p-4 bg-gray-50 rounded-xl") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (new Date(meeting.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        (__VLS_ctx.formatTime(meeting.startTime));
        (__VLS_ctx.formatTime(meeting.endTime));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600 mt-1") },
        });
        (meeting.booking?.parentName);
        (meeting.booking?.studentName);
        (meeting.booking?.class);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm") },
        });
    }
}
else if (__VLS_ctx.activeTab === 'in_progress') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid gap-6") },
    });
    for (const [session] of __VLS_getVForSourceType((__VLS_ctx.filteredInProgressSessions))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((session.id)),
            ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-6") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-start mb-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-lg font-semibold mb-2") },
        });
        (session.class);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-1 text-sm text-gray-600") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (__VLS_ctx.formatDateTime(session.startDate));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (__VLS_ctx.formatDateTime(session.endDate));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-right") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-lg font-medium") },
        });
        (session.attendedParents.length);
        (session.totalParents);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm text-gray-600") },
        });
        if (__VLS_ctx.selectedSession?.id === session.id) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("mt-4") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("bg-gray-50 rounded-xl p-4") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-3") },
            });
            for (const [parent] of __VLS_getVForSourceType((__VLS_ctx.mockParents))) {
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    key: ((parent.id)),
                    ...{ class: ("flex items-center justify-between bg-white p-3 rounded-lg") },
                });
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("font-medium") },
                });
                (parent.name);
                __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                    ...{ class: ("text-sm text-gray-600") },
                });
                (parent.studentName);
                (parent.rollNo);
                if (!session.attendedParents.some(p => p.id === parent.id)) {
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                        ...{ onClick: (...[$event]) => {
                                if (!(!((__VLS_ctx.activeTab === 'one_on_one'))))
                                    return;
                                if (!((__VLS_ctx.activeTab === 'in_progress')))
                                    return;
                                if (!((__VLS_ctx.selectedSession?.id === session.id)))
                                    return;
                                if (!((!session.attendedParents.some(p => p.id === parent.id))))
                                    return;
                                __VLS_ctx.handleMarkAttendance(session.id, parent);
                            } },
                        ...{ class: ("px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm") },
                    });
                }
                else {
                    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                        ...{ class: ("px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm") },
                    });
                }
            }
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(!((__VLS_ctx.activeTab === 'one_on_one'))))
                        return;
                    if (!((__VLS_ctx.activeTab === 'in_progress')))
                        return;
                    __VLS_ctx.selectedSession = __VLS_ctx.selectedSession?.id === session.id ? null : session;
                } },
            ...{ class: ("mt-4 text-[#0447A8] text-sm") },
        });
        (__VLS_ctx.selectedSession?.id === session.id ? 'Hide' : 'View');
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid gap-6") },
    });
    for (const [session] of __VLS_getVForSourceType((__VLS_ctx.filteredCompletedSessions))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((session.id)),
            ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-6") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex justify-between items-start") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
            ...{ class: ("text-lg font-semibold mb-2") },
        });
        (session.class);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-1 text-sm text-gray-600") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (__VLS_ctx.formatDateTime(session.startDate));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (session.attendedParents.length);
        (session.totalParents);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("px-3 py-1 bg-green-50 text-green-700 rounded-lg text-sm") },
        });
    }
}
if (__VLS_ctx.showAvailabilityModal) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl p-6 w-full max-w-lg") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showAvailabilityModal)))
                    return;
                __VLS_ctx.showAvailabilityModal = false;
            } },
        ...{ class: ("text-gray-500 hover:text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("date"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.newTimeSlot.date);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("time"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        min: ((__VLS_ctx.ptmStore.teacherSchedule.lastPeriodEndTime)),
    });
    (__VLS_ctx.newTimeSlot.startTime);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("time"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
        min: ((__VLS_ctx.newTimeSlot.startTime)),
    });
    (__VLS_ctx.newTimeSlot.endTime);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-end gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showAvailabilityModal)))
                    return;
                __VLS_ctx.showAvailabilityModal = false;
            } },
        ...{ class: ("px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.handleAddTimeSlot) },
        ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
        disabled: ((!__VLS_ctx.newTimeSlot.date || !__VLS_ctx.newTimeSlot.startTime || !__VLS_ctx.newTimeSlot.endTime)),
    });
}
if (__VLS_ctx.showCreateModal) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl p-6 w-full max-w-lg") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-center mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: ("text-xl font-bold") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showCreateModal)))
                    return;
                __VLS_ctx.showCreateModal = false;
            } },
        ...{ class: ("text-gray-500 hover:text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("space-y-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({
        value: ((__VLS_ctx.newSession.class)),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    for (const [class_] of __VLS_getVForSourceType((__VLS_ctx.assignedClasses))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
            key: ((class_)),
            value: ((class_)),
        });
        (class_);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("date"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.newSession.startDate);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("time"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.newSession.startTime);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("grid grid-cols-2 gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("date"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.newSession.endDate);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("time"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.newSession.endTime);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
        ...{ class: ("block text-sm font-medium text-gray-700 mb-1") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: ("number"),
        min: ("1"),
        ...{ class: ("w-full px-4 py-2 border border-[#ECECEC] rounded-xl") },
    });
    (__VLS_ctx.newSession.totalParents);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-end gap-4") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.showCreateModal)))
                    return;
                __VLS_ctx.showCreateModal = false;
            } },
        ...{ class: ("px-4 py-2 border border-[#ECECEC] text-gray-700 rounded-xl") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (__VLS_ctx.handleCreateSession) },
        ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl") },
    });
}
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-2xl', 'font-bold', 'flex', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'bg-white', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'bg-white', 'text-gray-700', 'rounded-xl', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'flex', 'gap-4', 'mb-6', 'px-4', 'py-2', 'rounded-xl', 'space-y-6', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'mb-6', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-2', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'space-y-4', 'text-lg', 'font-semibold', 'grid', 'gap-4', 'flex', 'items-center', 'justify-between', 'p-4', 'bg-gray-50', 'rounded-xl', 'font-medium', 'text-sm', 'text-gray-600', 'mt-1', 'px-3', 'py-1', 'text-sm', 'rounded-lg', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'text-lg', 'font-semibold', 'mb-4', 'space-y-4', 'flex', 'items-center', 'justify-between', 'p-4', 'bg-gray-50', 'rounded-xl', 'font-medium', 'text-sm', 'text-gray-600', 'text-sm', 'text-gray-600', 'mt-1', 'px-3', 'py-1', 'bg-blue-50', 'text-blue-700', 'rounded-lg', 'text-sm', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'text-lg', 'font-semibold', 'mb-4', 'space-y-4', 'flex', 'items-center', 'justify-between', 'p-4', 'bg-gray-50', 'rounded-xl', 'font-medium', 'text-sm', 'text-gray-600', 'text-sm', 'text-gray-600', 'mt-1', 'px-3', 'py-1', 'bg-green-50', 'text-green-700', 'rounded-lg', 'text-sm', 'grid', 'gap-6', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'flex', 'justify-between', 'items-start', 'mb-4', 'text-lg', 'font-semibold', 'mb-2', 'space-y-1', 'text-sm', 'text-gray-600', 'text-right', 'text-lg', 'font-medium', 'text-sm', 'text-gray-600', 'mt-4', 'bg-gray-50', 'rounded-xl', 'p-4', 'space-y-3', 'flex', 'items-center', 'justify-between', 'bg-white', 'p-3', 'rounded-lg', 'font-medium', 'text-sm', 'text-gray-600', 'px-3', 'py-1', 'bg-green-50', 'text-green-700', 'rounded-lg', 'text-sm', 'px-3', 'py-1', 'bg-blue-50', 'text-blue-700', 'rounded-lg', 'text-sm', 'mt-4', 'text-[#0447A8]', 'text-sm', 'grid', 'gap-6', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-6', 'flex', 'justify-between', 'items-start', 'text-lg', 'font-semibold', 'mb-2', 'space-y-1', 'text-sm', 'text-gray-600', 'px-3', 'py-1', 'bg-green-50', 'text-green-700', 'rounded-lg', 'text-sm', 'fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-lg', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-xl', 'font-bold', 'text-gray-500', 'hover:text-gray-700', 'space-y-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'grid', 'grid-cols-2', 'gap-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'flex', 'justify-end', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'text-gray-700', 'rounded-xl', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-lg', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-xl', 'font-bold', 'text-gray-500', 'hover:text-gray-700', 'space-y-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'grid', 'grid-cols-2', 'gap-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'grid', 'grid-cols-2', 'gap-4', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'block', 'text-sm', 'font-medium', 'text-gray-700', 'mb-1', 'w-full', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'rounded-xl', 'flex', 'justify-end', 'gap-4', 'px-4', 'py-2', 'border', 'border-[#ECECEC]', 'text-gray-700', 'rounded-xl', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            ptmStore: ptmStore,
            showCreateModal: showCreateModal,
            showAvailabilityModal: showAvailabilityModal,
            selectedSession: selectedSession,
            activeTab: activeTab,
            selectedClass: selectedClass,
            selectedDate: selectedDate,
            assignedClasses: assignedClasses,
            newSession: newSession,
            newTimeSlot: newTimeSlot,
            filteredInProgressSessions: filteredInProgressSessions,
            filteredCompletedSessions: filteredCompletedSessions,
            selectedDateSlots: selectedDateSlots,
            handleCreateSession: handleCreateSession,
            handleAddTimeSlot: handleAddTimeSlot,
            formatDateTime: formatDateTime,
            formatTime: formatTime,
            mockParents: mockParents,
            handleMarkAttendance: handleMarkAttendance,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
