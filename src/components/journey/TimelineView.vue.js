import { ref, computed } from "vue";
import { useJourneyStore } from "@/stores/journey";
const props = defineProps();
const journeyStore = useJourneyStore();
const selectedFilter = ref("all");
const selectedEvent = ref(null);
const filteredEvents = computed(() => {
    let events = journeyStore.events;
    if (selectedFilter.value !== "all") {
        events = events.filter((event) => event.category === selectedFilter.value);
    }
    return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
});
// Group events into rows of 3
const eventRows = computed(() => {
    const rows = [];
    const events = [...filteredEvents.value];
    while (events.length) {
        rows.push(events.splice(0, 3));
    }
    return rows;
});
const getEventIcon = (event) => {
    const icons = {
        test: "📝",
        activity: "🎯",
        achievement: "🏆",
        event: "🎉",
        assessment: "📊",
    };
    return icons[event.type];
};
const getEventColor = (event) => {
    const colors = {
        test: ["#60A5FA", "#2563EB"],
        activity: ["#34D399", "#059669"],
        achievement: ["#A78BFA", "#7C3AED"],
        event: ["#FBBF24", "#D97706"],
        assessment: ["#FCD34D", "#B45309"],
    };
    return colors[event.type];
};
const getEventStatus = (event) => {
    const today = new Date();
    const eventDate = new Date(event.date);
    if (event.status === "completed")
        return "completed";
    if (eventDate > today)
        return "locked";
    return "available";
};
const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
    }).format(new Date(date));
};
const showEventDetails = (event) => {
    if (getEventStatus(event) !== "locked") {
        selectedEvent.value = event;
    }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-6") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("flex gap-4") },
});
for (const [filter] of __VLS_getVForSourceType((['all', 'scholastic', 'co-scholastic']))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectedFilter = filter;
            } },
        key: ((filter)),
        ...{ class: ("px-4 py-2 rounded-xl transition-all duration-300 transform hover:scale-105") },
        ...{ class: ((__VLS_ctx.selectedFilter === filter
                ? 'bg-[#0447A8] text-white shadow-lg'
                : 'bg-white text-gray-700')) },
    });
    (filter === "all"
        ? "All"
        : filter.charAt(0).toUpperCase() + filter.slice(1));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative min-h-[600px] bg-gradient-to-b from-blue-50 to-purple-50 rounded-3xl p-8 overflow-hidden") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("absolute inset-0 opacity-10") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("absolute w-20 h-20 bg-blue-500 rounded-full top-1/4 left-1/4 animate-float") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("absolute w-16 h-16 bg-purple-500 rounded-full top-3/4 right-1/3 animate-float-delayed") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("absolute w-24 h-24 bg-green-500 rounded-full bottom-1/4 right-1/4 animate-float") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("relative z-10") },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: ("space-y-16") },
});
for (const [row, rowIndex] of __VLS_getVForSourceType((__VLS_ctx.eventRows))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: ((rowIndex)),
        ...{ class: ("relative") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        ...{ class: ("absolute top-8 left-0 w-full h-2 -z-10") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.line)({
        x1: ("10%"),
        y1: ("50%"),
        x2: ("90%"),
        y2: ("50%"),
        stroke: ("grey"),
        'stroke-width': ("2"),
        'stroke-dasharray': ("4 4"),
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between") },
    });
    for (const [event, index] of __VLS_getVForSourceType((row))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((event.id)),
            ...{ class: ("w-1/3 px-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onClick: (...[$event]) => {
                    __VLS_ctx.showEventDetails(event);
                } },
            ...{ class: ("relative group cursor-pointer") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-16 h-16 rounded-2xl shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12") },
            ...{ class: (({
                    'animate-node-completed': __VLS_ctx.getEventStatus(event) === 'completed',
                    'animate-node-available': __VLS_ctx.getEventStatus(event) === 'available',
                    'opacity-50': __VLS_ctx.getEventStatus(event) === 'locked',
                })) },
            ...{ style: (({
                    background: `linear-gradient(135deg, ${__VLS_ctx.getEventColor(event)[0]}, ${__VLS_ctx.getEventColor(event)[1]})`,
                })) },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("absolute inset-0 flex items-center justify-center text-2xl text-white") },
        });
        (__VLS_ctx.getEventIcon(event));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("absolute inset-0 rounded-2xl opacity-50 blur-lg transition-opacity group-hover:opacity-100") },
            ...{ style: (({
                    background: `linear-gradient(135deg, ${__VLS_ctx.getEventColor(event)[0]}, ${__VLS_ctx.getEventColor(event)[1]})`,
                })) },
        });
        if (__VLS_ctx.getEventStatus(event) === 'locked') {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-2xl") },
            });
            __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
                ...{ class: ("text-white text-xl") },
            });
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium shadow-lg") },
            ...{ class: (({
                    'bg-white text-gray-700': __VLS_ctx.getEventStatus(event) !== 'locked',
                    'bg-gray-200 text-gray-500': __VLS_ctx.getEventStatus(event) === 'locked',
                })) },
        });
        (__VLS_ctx.formatDate(event.date));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("absolute left-1/2 bottom-full mb-4 -translate-x-1/2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("bg-white rounded-xl shadow-lg p-3 text-center") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium text-sm") },
        });
        (event.title);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-xs text-gray-500 mt-1") },
        });
        (event.type);
    }
}
if (__VLS_ctx.selectedEvent) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.selectedEvent)))
                    return;
                __VLS_ctx.selectedEvent = null;
            } },
        ...{ class: ("fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-white rounded-3xl p-6 w-full max-w-lg transform transition-all duration-300 animate-modal-in") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-between items-start mb-6") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center gap-3") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: ("text-3xl") },
    });
    (__VLS_ctx.getEventIcon(__VLS_ctx.selectedEvent));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
        ...{ class: ("text-xl font-bold") },
    });
    (__VLS_ctx.selectedEvent.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-2 text-sm text-gray-600") },
    });
    (__VLS_ctx.formatDate(__VLS_ctx.selectedEvent.date));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.selectedEvent)))
                    return;
                __VLS_ctx.selectedEvent = null;
            } },
        ...{ class: ("text-gray-500 hover:text-gray-700") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-gray-600 mb-4") },
    });
    (__VLS_ctx.selectedEvent.description);
    if (__VLS_ctx.selectedEvent.score !== undefined) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mb-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm font-medium mb-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center gap-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex-1 h-2 bg-gray-200 rounded-full overflow-hidden") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("h-full rounded-full animate-score-fill") },
            ...{ style: (({
                    width: `${(__VLS_ctx.selectedEvent.score / __VLS_ctx.selectedEvent.maxScore) * 100}%`,
                    background: `linear-gradient(to right, ${__VLS_ctx.getEventColor(__VLS_ctx.selectedEvent)[0]}, ${__VLS_ctx.getEventColor(__VLS_ctx.selectedEvent)[1]})`,
                })) },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("font-medium") },
        });
        (__VLS_ctx.selectedEvent.score);
        (__VLS_ctx.selectedEvent.maxScore);
    }
    if (__VLS_ctx.selectedEvent.evidence?.length) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("mb-4") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-sm font-medium mb-2") },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-wrap gap-2") },
        });
        for (const [file, index] of __VLS_getVForSourceType((__VLS_ctx.selectedEvent.evidence))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
                key: ((index)),
                href: ((file.url)),
                target: ("_blank"),
                ...{ class: ("px-3 py-1 bg-gray-50 rounded-lg text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105") },
            });
            (file.type);
        }
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex justify-end") },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                if (!((__VLS_ctx.selectedEvent)))
                    return;
                __VLS_ctx.selectedEvent = null;
            } },
        ...{ class: ("px-4 py-2 bg-[#0447A8] text-white rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg") },
    });
}
['space-y-6', 'flex', 'gap-4', 'px-4', 'py-2', 'rounded-xl', 'transition-all', 'duration-300', 'transform', 'hover:scale-105', 'relative', 'min-h-[600px]', 'bg-gradient-to-b', 'from-blue-50', 'to-purple-50', 'rounded-3xl', 'p-8', 'overflow-hidden', 'absolute', 'inset-0', 'opacity-10', 'absolute', 'w-20', 'h-20', 'bg-blue-500', 'rounded-full', 'top-1/4', 'left-1/4', 'animate-float', 'absolute', 'w-16', 'h-16', 'bg-purple-500', 'rounded-full', 'top-3/4', 'right-1/3', 'animate-float-delayed', 'absolute', 'w-24', 'h-24', 'bg-green-500', 'rounded-full', 'bottom-1/4', 'right-1/4', 'animate-float', 'relative', 'z-10', 'space-y-16', 'relative', 'absolute', 'top-8', 'left-0', 'w-full', 'h-2', '-z-10', 'flex', 'justify-between', 'w-1/3', 'px-4', 'relative', 'group', 'cursor-pointer', 'w-16', 'h-16', 'rounded-2xl', 'shadow-lg', 'transform', 'transition-all', 'duration-300', 'group-hover:scale-110', 'group-hover:rotate-12', 'animate-node-completed', 'animate-node-available', 'opacity-50', 'absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'text-2xl', 'text-white', 'absolute', 'inset-0', 'rounded-2xl', 'opacity-50', 'blur-lg', 'transition-opacity', 'group-hover:opacity-100', 'absolute', 'inset-0', 'flex', 'items-center', 'justify-center', 'bg-black', 'bg-opacity-50', 'rounded-2xl', 'text-white', 'text-xl', 'absolute', '-bottom-2', 'left-1/2', 'transform', '-translate-x-1/2', 'px-3', 'py-1', 'rounded-full', 'text-xs', 'font-medium', 'shadow-lg', 'bg-white', 'text-gray-700', 'bg-gray-200', 'text-gray-500', 'absolute', 'left-1/2', 'bottom-full', 'mb-4', '-translate-x-1/2', 'w-48', 'opacity-0', 'group-hover:opacity-100', 'transition-opacity', 'duration-200', 'bg-white', 'rounded-xl', 'shadow-lg', 'p-3', 'text-center', 'font-medium', 'text-sm', 'text-xs', 'text-gray-500', 'mt-1', 'fixed', 'inset-0', 'bg-black', 'bg-opacity-50', 'flex', 'items-center', 'justify-center', 'z-50', 'bg-white', 'rounded-3xl', 'p-6', 'w-full', 'max-w-lg', 'transform', 'transition-all', 'duration-300', 'animate-modal-in', 'flex', 'justify-between', 'items-start', 'mb-6', 'flex', 'items-center', 'gap-3', 'text-3xl', 'text-xl', 'font-bold', 'mt-2', 'text-sm', 'text-gray-600', 'text-gray-500', 'hover:text-gray-700', 'text-gray-600', 'mb-4', 'mb-4', 'text-sm', 'font-medium', 'mb-2', 'flex', 'items-center', 'gap-2', 'flex-1', 'h-2', 'bg-gray-200', 'rounded-full', 'overflow-hidden', 'h-full', 'rounded-full', 'animate-score-fill', 'font-medium', 'mb-4', 'text-sm', 'font-medium', 'mb-2', 'flex', 'flex-wrap', 'gap-2', 'px-3', 'py-1', 'bg-gray-50', 'rounded-lg', 'text-sm', 'hover:bg-gray-100', 'transition-all', 'duration-300', 'transform', 'hover:scale-105', 'flex', 'justify-end', 'px-4', 'py-2', 'bg-[#0447A8]', 'text-white', 'rounded-xl', 'transform', 'transition-all', 'duration-300', 'hover:scale-105', 'hover:shadow-lg',];
var __VLS_special;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            selectedFilter: selectedFilter,
            selectedEvent: selectedEvent,
            eventRows: eventRows,
            getEventIcon: getEventIcon,
            getEventColor: getEventColor,
            getEventStatus: getEventStatus,
            formatDate: formatDate,
            showEventDetails: showEventDetails,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
