import { ref, computed } from "vue";
import { useCalendarStore } from "@/stores/calendar";
import EventDetailsModal from "@/components/calendar/EventDetailsModal.vue";
const calendarStore = useCalendarStore();
const currentDate = ref(new Date());
const selectedEvent = ref(null);
const selectedFilter = ref("all");
const filters = [
    { id: "all", label: "All Events" },
    { id: "exam", label: "Exams" },
    { id: "event", label: "Events" },
    { id: "holiday", label: "Holidays" },
];
const currentMonthYear = computed(() => {
    return currentDate.value.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
    });
});
const previousMonth = () => {
    const date = new Date(currentDate.value);
    date.setMonth(date.getMonth() - 1);
    currentDate.value = date;
};
const nextMonth = () => {
    const date = new Date(currentDate.value);
    date.setMonth(date.getMonth() + 1);
    currentDate.value = date;
};
const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    }).format(new Date(date));
};
const formatTime = (time) => {
    return new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
    }).format(new Date(time));
};
const openEventDetails = (event) => {
    selectedEvent.value = event;
};
const handleEditEvent = (event) => {
    calendarStore.updateEvent(event);
    selectedEvent.value = null;
};
const handleDeleteEvent = (eventId) => {
    calendarStore.deleteEvent(eventId);
    selectedEvent.value = null;
};
const calendarDays = computed(() => {
    // Implement calendar days logic
    return [];
});
const getEventsForDate = (date) => {
    // Implement event fetching logic
    return [];
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4") },
});
for (const [filter] of __VLS_getVForSourceType((__VLS_ctx.filters))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectedFilter = filter.id;
            } },
        ...{ class: ("px-3 py-1 text-sm") },
        ...{ class: ((__VLS_ctx.selectedFilter === filter.id
                ? 'text-[#0447A8]'
                : 'text-gray-600')) },
        key: ((filter.id)),
    });
    (filter.label);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("bg-white rounded-3xl border border-[#ECECEC] p-4 mb-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex justify-between items-center") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.previousMonth) },
    ...{ class: ("p-2 hover:bg-gray-50 rounded-lg") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: ("text-lg font-medium") },
});
(__VLS_ctx.currentMonthYear);
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.nextMonth) },
    ...{ class: ("p-2 hover:bg-gray-50 rounded-lg") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-6 gap-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("col-span-8 bg-white rounded-3xl border border-[#ECECEC] overflow-hidden") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-7 border-b") },
});
for (const [day] of __VLS_getVForSourceType((['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((day)),
        ...{ class: ("px-2 py-3 text-center text-sm font-medium text-gray-700 border-r last:border-r-0") },
    });
    (day);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("grid grid-cols-7 grid-rows-6") },
});
for (const [date] of __VLS_getVForSourceType((__VLS_ctx.calendarDays))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((date.date)),
        ...{ class: ("min-h-[120px] p-2 border-b border-r last:border-r-0") },
        ...{ class: (({
                'bg-gray-50': !date.isCurrentMonth,
                'bg-blue-50': date.isToday,
            })) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-start") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-sm") },
        ...{ class: (({
                'text-gray-400': !date.isCurrentMonth,
                'font-medium': date.isToday,
            })) },
    });
    (new Date(date.date).getDate());
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-1 space-y-1") },
    });
    for (const [event] of __VLS_getVForSourceType((__VLS_ctx.getEventsForDate(date.date)))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.openEventDetails(event);
                } },
            key: ((event.id)),
            ...{ class: ("px-2 py-1 text-xs rounded truncate cursor-pointer") },
            ...{ class: (({
                    'bg-blue-100 text-blue-700': event.type === 'exam',
                    'bg-green-100 text-green-700': event.type === 'event',
                    'bg-red-100 text-red-700': event.type === 'holiday',
                })) },
        });
        (event.title);
    }
}
if (__VLS_ctx.selectedEvent) {
    // @ts-ignore
    /** @type { [typeof EventDetailsModal, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(EventDetailsModal, new EventDetailsModal({
        ...{ 'onClose': {} },
        ...{ 'onEdit': {} },
        ...{ 'onDelete': {} },
        show: ((true)),
        event: ((__VLS_ctx.selectedEvent)),
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onClose': {} },
        ...{ 'onEdit': {} },
        ...{ 'onDelete': {} },
        show: ((true)),
        event: ((__VLS_ctx.selectedEvent)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_5;
    const __VLS_6 = {
        onClose: (...[$event]) => {
            if (!((__VLS_ctx.selectedEvent)))
                return;
            __VLS_ctx.selectedEvent = null;
        }
    };
    const __VLS_7 = {
        onEdit: (__VLS_ctx.handleEditEvent)
    };
    const __VLS_8 = {
        onDelete: (__VLS_ctx.handleDeleteEvent)
    };
    let __VLS_2;
    let __VLS_3;
    var __VLS_4;
}
['min-h-screen', 'bg-[#F5F5F5]', 'pl-64', 'pt-16', 'p-6', 'flex', 'justify-between', 'items-center', 'mb-6', 'text-2xl', 'font-bold', 'flex', 'gap-4', 'flex', 'gap-4', 'px-3', 'py-1', 'text-sm', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'p-4', 'mb-6', 'flex', 'justify-between', 'items-center', 'p-2', 'hover:bg-gray-50', 'rounded-lg', 'text-lg', 'font-medium', 'p-2', 'hover:bg-gray-50', 'rounded-lg', 'grid', 'grid-cols-6', 'gap-6', 'col-span-8', 'bg-white', 'rounded-3xl', 'border', 'border-[#ECECEC]', 'overflow-hidden', 'grid', 'grid-cols-7', 'border-b', 'px-2', 'py-3', 'text-center', 'text-sm', 'font-medium', 'text-gray-700', 'border-r', 'last:border-r-0', 'grid', 'grid-cols-7', 'grid-rows-6', 'min-h-[120px]', 'p-2', 'border-b', 'border-r', 'last:border-r-0', 'bg-gray-50', 'bg-blue-50', 'flex', 'justify-between', 'items-start', 'text-sm', 'text-gray-400', 'font-medium', 'mt-1', 'space-y-1', 'px-2', 'py-1', 'text-xs', 'rounded', 'truncate', 'cursor-pointer', 'bg-blue-100', 'text-blue-700', 'bg-green-100', 'text-green-700', 'bg-red-100', 'text-red-700',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            EventDetailsModal: EventDetailsModal,
            selectedEvent: selectedEvent,
            selectedFilter: selectedFilter,
            filters: filters,
            currentMonthYear: currentMonthYear,
            previousMonth: previousMonth,
            nextMonth: nextMonth,
            openEventDetails: openEventDetails,
            handleEditEvent: handleEditEvent,
            handleDeleteEvent: handleDeleteEvent,
            calendarDays: calendarDays,
            getEventsForDate: getEventsForDate,
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
